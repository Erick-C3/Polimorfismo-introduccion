class Animal{
    //caracteristicas/estados
    #esCazador = true;//?
    #edad = 0;
    #raza = "def raza";
    #cantPatas = 0;//?
    #tipoAnimal = "def especie";
    #nombre = "def nombre"

    /**
     * Inicializa el objeto Animal
     * @param {String} tipoAnimal del objeto a instanciar
     * @param {String} nombre del objeto Animal
     */
    constructor(tipoAnimal, nombre){
        this.#tipoAnimal = tipoAnimal;
        this.#nombre = nombre;
    }


    //comportamientos
    aliemntarse(){
        console.log("comiendo");
    }

    dormir(){
        console.log("zzzzz");
    }

    /**
     * Comportamiento abstracto
     */
    hacerRuido(){ 
        console.log("ruido de un animal");//muucho codigo
        /* if(this.#tipoAnimal == "perro"){
            console.log("ladrar");
        }else if(this.#tipoAnimal == "leon"){
            console.log("rugido");
        }else if(this.#tipoAnimal == "gato"){
            console.log("maullar");
        }else if(this.#tipoAnimal == "gallina"){
            console.log("pio pio");
        }else{
            console.log("ruido de un animal");
        } */
    } 


}

module.exports = Animal;