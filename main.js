function elegirPokemon(){

let nombre = prompt("Hola ¿Cómo es tu nombre?")

alert(`Bienvenido ${nombre} hoy es un gran día. Te entregaremos tu primer Pokemón para que te conviertas en un gran entrenador.`)

alert(`Las opciones son las siguientes:`)

const Pokemon = function(nombre, tipo){
    
    this.nombre = nombre,
    this.tipo = tipo
    this.presentar = () => {
        alert(`${nombre}. Un pokemón tipo ${tipo}`)
    }
}

let pokemon1 = new Pokemon ("Bulbasaur", "planta 🍃 ")
let pokemon2 = new Pokemon ("Charmander", "fuego 🔥 ")
let pokemon3 = new Pokemon ("Squirtle", "agua 🌊 ")

pokemon1.presentar()
pokemon2.presentar()
pokemon3.presentar()

let pokemones = [pokemon1, pokemon2, pokemon3]

let eleccionDePokemon = prompt(`A continuacion escribí el nombre del pokemon que querés elegir. Como ya sabes la opciones son: Bulbasaur 🍃, Charmander 🔥 o Squirtle 🌊`)

let pokemonElegido = pokemones.filter(pokemon => pokemon.nombre.toLowerCase() === eleccionDePokemon.toLowerCase())

if(pokemonElegido.length > 0){
    alert(`¡Gran elección! Elegiste a ${pokemonElegido[0].nombre}.`)
}else{
    alert("Cuidado, esa no es una elección valida. Volvamos a empezar")
    elegirPokemon()
}


let eleccionDePokemon2 = prompt(`Ahora podrás conocer la primer evolución de tu pokemon. Para ayudarte te pido que vuelvas a escribir el nombre tu pokemón elegido para realizar la busqueda de la evolución.`)


let evoluciones = [
    { nombre: "Ivysaur", evolucionAnterior: "Bulbasaur"},
    { nombre: "Charmeleon", evolucionAnterior: "Charmander"},
    { nombre: "Wartortle", evolucionAnterior: "Squirtle"}
]

let evolucionCorrespondiente = evoluciones.find(evolucion => evolucion.evolucionAnterior.toLocaleLowerCase() === eleccionDePokemon2.toLowerCase())

if(evolucionCorrespondiente){
    alert(`La evolucion de ${eleccionDePokemon2} es ${evolucionCorrespondiente.nombre}.`)
}else{
    alert(`El pokemon ingresado no es correcto. Volvamos a empezar`)
    elegirPokemon()
}

}

elegirPokemon()
