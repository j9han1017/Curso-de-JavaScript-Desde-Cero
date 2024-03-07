const primeraOpcion = 'Comillas simples'
const segundaOpcion = "Comillas simples"
const terceraOpcion = `Comillas simples`

// 1. Concatenación: Opción +   
const direccion = 'Calle falsa 123'
const ciudad = 'Springfield'
const direccionCompleta = 'Mi direccion completa es' + direccion + ciudad
console.log(direccionCompleta)

const direccionCompletaConEspacio = 'Mi direccion completa es' + " " + direccion + " " + ciudad
console.log(direccionCompletaConEspacio)


//2. Concatenacion: Template Literals
const nombre = 'Estefany'
const pais = '🟡🔵🔴'
const presentacion = `Hola, soy ${nombre} de ${pais}`
console.log(presentacion)


//3. Concatenacion: join()
const primeraParte = 'Me encanta'
const segundaParte = 'la gente de'
const terceraParte = '🟩⬜🟥'
const pensamiento = [primeraParte, segundaParte, terceraParte]
console.log(pensamiento.join(' 🍕 '))


//4. Concatenacion: concat()
const hobbie1 = 'correr'
const hobbie2 = 'leer'
const hobbie3 = 'estudiar'
const hobbies = 'Mis hobbies son: '.concat(hobbie1,', ',hobbie2,', ',hobbie3,'.')
console.log(hobbies)