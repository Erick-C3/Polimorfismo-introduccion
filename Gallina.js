const Animal = require("./Animal")

class Gallina extends Animal{

    hacerRuido(){
        console.log("cacarear");
    }
    

}

module.exports = Gallina;