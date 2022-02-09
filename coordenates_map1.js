
//top values per row
const rows = [60, 250, 430, 620, 800] 

//left values per rows odd & pair
const oddRowColumns = [50, 260, 470, 680, 890, 1100, 1320, 1530]
const pairRowColumns = [160, 370, 580, 790, 1000, 1210, 1420]

//position name [top,left] value in px, add 210 to the left
const pos = {
    a1:[rows[0], oddRowColumns[0], ["b1", "b2"]],
    b1:[rows[0], oddRowColumns[1], ["a1", "b2", "c2", "c1"]],
    c1:[rows[0], oddRowColumns[2], ["b1", "c2", "d2", "d1"]],
    d1:[rows[0], oddRowColumns[3], ["c1", "d2", "e2", "e1"]],
    e1:[rows[0], oddRowColumns[4], ["d1", "e2", "f2", "f1"]],
    f1:[rows[0], oddRowColumns[5], ["e1", "f2", "g2", "g1"]],
    g1:[rows[0], oddRowColumns[6], ["f1", "g2", "h2", "h1"]],
    h1:[rows[0], oddRowColumns[7], ["g1"], "h2"],

    b2:[rows[1], pairRowColumns[0], ["a1", "b1", "c2", "c3", "b3"]],
    c2:[rows[1], pairRowColumns[1], ["b1", "c1", "d2", "d3", "c3", "b2"]],
    d2:[rows[1], pairRowColumns[2], ["c1", "d1", "e2", "e3", "d3", "c2"]],
    e2:[rows[1], pairRowColumns[3], []],
    f2:[rows[1], pairRowColumns[4], []],
    g2:[rows[1], pairRowColumns[5], []],
    h2:[rows[1], pairRowColumns[6], []],

    b3:[rows[2], oddRowColumns[0], []],
    c3:[rows[2], oddRowColumns[1], []],
    d3:[rows[2], oddRowColumns[2], []],
    e3:[rows[2], oddRowColumns[3], []],
    f3:[rows[2], oddRowColumns[4], []],
    g3:[rows[2], oddRowColumns[5], []],
    h3:[rows[2], oddRowColumns[6], []],
    i3:[rows[2], oddRowColumns[7], []],

    c4:[rows[3], pairRowColumns[0], []],
    d4:[rows[3], pairRowColumns[1], []],
    e4:[rows[3], pairRowColumns[2], []],
    f4:[rows[3], pairRowColumns[3], []],
    g4:[rows[3], pairRowColumns[4], []],
    h4:[rows[3], pairRowColumns[5], []],
    i4:[rows[3], pairRowColumns[6], []],

    c5:[rows[4], oddRowColumns[0], []],
    d5:[rows[4], oddRowColumns[1], []],
    e5:[rows[4], oddRowColumns[2], []],
    f5:[rows[4], oddRowColumns[3], []],
    g5:[rows[4], oddRowColumns[4], []],
    h5:[rows[4], oddRowColumns[5], []],
    i5:[rows[4], oddRowColumns[6], []],
    j5:[rows[4], oddRowColumns[7], []],
}


const reposition = (item, xy) => {

    console.log(item, `top: ${xy[0]}px, bottom: ${xy[1]}px`)
    
    document.querySelector(item).style.top = `${xy[0]}px`;
    document.querySelector(item).style.left = `${xy[1]}px`;
    //document.div.style.backgroundImage = `linear-gradient(${selectedDirection}, ${color1.value}, ${color2.value})`
}