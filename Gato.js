const Animal = require("./Animal");

class Gato extends Animal{

    /**
     * Ruido de un gato
     */
    hacerRuido(){
        console.log("maullido");
    }
}

module.exports = Gato;