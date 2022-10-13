const Animal = require("./Animal");


class Perro extends Animal{

    hacerRuido(){
        console.log("ladrar"); //mucho codigo
    }
}

module.exports = Perro;