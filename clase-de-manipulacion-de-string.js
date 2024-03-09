// String primitivo

const stringPrimitivo = 'Soy un string primitivo'
console.log(typeof stringPrimitivo)

const stringPrimitivoTambien = String('Soy un string primitivo tambien')
console.log(typeof stringPrimitivoTambien)

// String objeto
const stringObjeto = new String('Soy un string objeto')
console.log(typeof stringObjeto)

// Acceder a caracteres

const saludo = 'Hola. ¿Como estás?'

console.log(2)
console.log(saludo.charAt(2))
console.log(saludo.indexOf('o'))
console.log(saludo.indexOf('Cómo'))
console.log(saludo.indexOf('como'))
console.log(saludo.lastIndexOf('o'))
console.log(saludo.slice(3,5))
console.log(saludo.length)
console.log(saludo.toLocaleLowerCase())
console.log(saludo.toLocaleLowerCase())

const saludoDividido = saludo.split(' ')
console.log(saludoDividido)
console.log(saludoDividido[1])
const saludoConEspacios = ' Hola Mundo'
const saludoSinEspacios = saludoConEspacios.trim()
console.log(saludoSinEspacios)

const saludoOriginal = 'Hola Mundo'
const nuevoSaludo = saludoOriginal.replace('Mundo', '💙')
console.log(nuevoSaludo)
