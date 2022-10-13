const Animal = require("./Animal");

class Leon extends Animal{

    
    hacerRuido(){
        console.log("rugido");
    }
}

module.exports = Leon;