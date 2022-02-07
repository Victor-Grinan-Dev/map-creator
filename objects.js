//tokens are the chips that represent in the map the differents formations wich your army is divided
const token = {
    named:"unknown",
    fieldTask:"unknown",
    faction: "unknown", //related to the army it belongs
    color: "unknown", //this should be the army-wide color
    strenght: 0, //is the points values of the formations. if strenght = 0: remove formation.
    stats: {movement:2, vision:1}, 
    upgrades: [], //all special rules and modifiers gained after game started
    level: 0,
    currentPosition: "a1", //a1 is a tile, tiles are coordenates (x, y) of the entire map
} 

const army = {
    named:"unknown",
    color:"unknown",
    campaingPoints: 0,
    formations:[], //a list of objects tokens that compose the army
    overallStrength: 0,
}

const user = {
    named:"unknown",
    email:"unknown",
    armies:[]
}

const map = {
    named:unknown,
    image:"image.url",
    tiles:[{
        a1:(100, 100), a2:(150, 150), a2:(150, 150)
    }]
}