
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

const generateNewHexagonalMap = (side = 6, tile = " O ") => {
    
    const width = side * 3 - 2;
    const height = side * 2 - 1;
    const tile_size  = tile.length(); //count the chars in tile
    const empty = " " * tile_size;
    let rule = side ;
    let hex = [];
    return "hex!"
}

generateNewHexagonalMap()

/*
from math import ceil



hex = []

tile_size = len(tile)
empty = " " * tile_size
gap = ""

if len(tile) >= 3:
	gap += "\n" * ceil(tile_size / 3)

def create_line():
	line = []
	for y in range(width):
		if y < rule:
			line.append(empty)
		elif y >= width - rule:
			line.append(empty)
		else:
			line.append(tile)
	return line
		
for x in range(height):

	if x < side:
		rule -= 1
	else:
		rule += 1
	
	new_line = create_line()
	hex.append(new_line)

		
for hexline in hex:
		for item in hexline:
			print(item, end="")
		print(gap)
		
print()		
		
side = 6
rule = side
height = side * 2 -1
width = side * 3 - 2
hex = []
		
for x in range(height):

	if x < side:
		rule -= 1
	else:
		rule += 1
	
	line = []
	for y in range(width):
		if y < rule:
			line.append("   ")
		elif y >= width - rule:
			line.append("   ")
		else:
			line.append(" 0 ")
			
	hex.append(line)

		
for hexline in hex:
		for item in hexline:
			print(item, end="")
		print("\n")

*/