//tokens are the chips that represent in the map the differents formations wich your army is divided

class Formation {

    constructor (named, fieldTask, faction, color, strenght, stats, upgrades, level, currentPosition){
        this.named = named;            
        this.fieldTask = fieldTask;        
        this.faction = faction;        
        this.color = color;        
        this.strenght = strenght;        
        this.stats = stats;        
        this.upgrades = upgrades;        
        this.level = level;        
        this.currentPosition = currentPosition; 
        this.actions = 2;
    }
}

class Army {

    constructor (named, color, campaingPoints, formations, overallStrength){
        this.named = named;
        this.color = color;   
        this.campaingPoints = campaingPoints;        
        this.formations = formations;    //a list of objects tokens that compose the army 
        this.overallStrength = overallStrength;                 
    }
}

class User {

    constructor (named, email, armies){
        this.named = named;
        this.email = email;
        this.armies = armies; //array of all armies
    }
}


class map {

    constructor (named, image, coordinates){
        this.named = named;
        this.image = image; //url
        this.coords = coordinates; //dictionary of all the top.left px of the image
    }
}

const map = {
    named:unknown,
    image:"image.url",
    tiles:[{
        a1:(100, 100), a2:(150, 150), a2:(150, 150)
    }]
}