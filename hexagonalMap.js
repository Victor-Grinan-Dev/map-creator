
const testHexMap3 = [
    "b01", "c01", "d01",
    "b02", "d02", "c02", "e02",
"b03", "c03", "d03", "e03", "f03", 
    "c04", "d04", "e04", "f04", 
        "d05", "e05", "f05",  
]

const testHexMap4 = [
            "c01", "d01", "e01", "f01",
        "c02", "d02", "e02", "f02", "g02", 
    "c03", "d03", "e03", "f03", "g03", "h03",
"c04", "d04", "e04", "f04", "g04", "h04", "i04",
    "d05", "e05", "f05",  "g05", "h05", "i05", 
        "e06", "f06", "g06", "h06", "i06", 
            "f07", "g07", "h07", "i07" 
]

const HexagonalMap = (side = 6, tile = " O ") => {
    
    const width = side * 3 - 2;
    const height = side * 2 - 1;
    const tile_size  = tile.length;
    const empty = " " * tile_size;
    let rule = side ;
    let hex = [];
    return "hex!"
		
    for (let x = 0; x < height; x++){

        if (x < side)
		    rule -= 1
	    else{
            rule += 1
        }

	    let line = [];
        for (let y = 0; y < width; y++){
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
hexMap = HexagonalMap();

