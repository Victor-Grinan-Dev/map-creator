
//top values per row
const rows = [60, 250, 430, 620, 800] 

//left values per rows odd & pair
const oddRowColumns = [50, 260, 470, 680, 890, 1100, 1320, 1530]
const pairRowColums = [160, 370, 580, 790, 1000, 1210, 1420]

//position name [top,left] value in px, add 210 to the left
const mapGrid = {
    a1:[rows[0], oddRowColumns[0]],
    b1:[rows[0], oddRowColumns[1]],
    c1:[rows[0], oddRowColumns[2]],
    d1:[rows[0], oddRowColumns[3]],
    e1:[rows[0], oddRowColumns[4]],
    f1:[rows[0], oddRowColumns[5]],
    g1:[rows[0], oddRowColumns[6]],
    h1:[rows[0], oddRowColumns[7]],

    b2:[rows[1], pairRowColumns[0]],
    c2:[rows[1], pairRowColumns[1]],
    d2:[rows[1], pairRowColumns[2]],
    e2:[rows[1], pairRowColumns[3]],
    f2:[rows[1], pairRowColumns[4]],
    g2:[rows[1], pairRowColumns[5]],
    h2:[rows[1], pairRowColumns[6]],

    b3:[rows[2], oddRowColumns[0]],
    c3:[rows[2], oddRowColumns[1]],
    d3:[rows[2], oddRowColumns[2]],
    e3:[rows[2], oddRowColumns[3]],
    f3:[rows[2], oddRowColumns[4]],
    g3:[rows[2], oddRowColumns[5]],
    h3:[rows[2], oddRowColumns[6]],
    i3:[rows[2], oddRowColumns[7]],

    c4:[rows[3], pairRowColumns[0]],
    d4:[rows[3], pairRowColumns[1]],
    e4:[rows[3], pairRowColumns[2]],
    f4:[rows[3], pairRowColumns[3]],
    g4:[rows[3], pairRowColumns[4]],
    h4:[rows[3], pairRowColumns[5]],
    i4:[rows[3], pairRowColumns[6]],

    c5:[rows[4], oddRowColumns[0]],
    d5:[rows[4], oddRowColumns[1]],
    e5:[rows[4], oddRowColumns[2]],
    f5:[rows[4], oddRowColumns[3]],
    g5:[rows[4], oddRowColumns[4]],
    h5:[rows[4], oddRowColumns[5]],
    i5:[rows[4], oddRowColumns[6]],
    j5:[rows[4], oddRowColumns[7]],
}

document.querySelector("")