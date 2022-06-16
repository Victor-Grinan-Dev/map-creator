
//example out come:
const testHexMap4 = [
    ["", "", "", "a01", "b01", "c01", "d01", "", "", ""],
    ["", "", "a02", "b02", "c02", "d02", "e02", "", ""], 
    ["", "a03", "b03", "c03", "d03", "e03", "f03", ""],
    ["a04", "b04", "c04", "d04", "e04", "f04", "g04"],
    ["", "d05", "c05", "d05", "e05", "f05", "g05", ""], 
    ["", "", "c06", "d06", "e06", "f06", "g06", "", "",], 
    ["", "", "", "d07", "e07", "f07", "g07", "", "", "",] 
]

const diagonChar = [
    'a', 'b', 'c', 'd', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'
]

const HexagonalMap = (side = 6) => {
    
    let tile = ""
    const width = side * 3 - 2;
    const height = side * 2 - 1;
    const tile_size  = 3;
    const empty = " " * tile_size; //or null?

    let rule = side ;
    let hex = [];
		
    for (let x = 0; x < height; x++){
        let row = x + 1;
        if (x < side)
		    rule -= 1
	    else{
            rule += 1
        }

	    let line = [];
        let alph_index = 0;
        for (let y = 0; y < width; y++){
            
            if(row < 10){
                tile = diagonChar[alph_index] + "0" + row
            }else{
                tile = diagonChar[alph_index] + row
            }

            if (y < rule || y >= width - rule){
                line.push(empty);
            }else{
                line.push(tile);
            }
        }

        hex.push(line);

    }

    return hex;

}

const hexMap = HexagonalMap()

