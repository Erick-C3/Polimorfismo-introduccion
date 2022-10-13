const Animal = require("./Animal");
const Gallina = require("./Gallina");
const Gato = require("./Gato");
const Leon = require("./Leon");
const Perro = require("./Perro");



const animalUno = new Perro("pepito");//quiero que esto sea un perro
const animalDos = new Leon("alex");//quiero que esto sea una Leon
const animalTres = new Gato("salem");//quiero que esto sea una Gato
const animalCuatro = new Gallina("gallina", "magnolia");

animalUno.hacerRuido();
animalDos.hacerRuido();
animalTres.hacerRuido();
animalCuatro.hacerRuido();


/* const unPerro = new Perro(); */





/* unAnimal.aliemntarse();
unAnimal.dormir();
unAnimal.hacerRuido();
 */

/* unPerro.aliemntarse();
unPerro.dormir();
unPerro.hacerRuido();
 */
