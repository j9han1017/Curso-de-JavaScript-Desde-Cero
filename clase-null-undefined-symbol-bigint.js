// Null
const snoopy = null
console.log(snoopy)
console.log(typeof snoopy)


// Undefined
let name
console.log(name)

//Symbol
const uniqueId = Symbol('id')
const symbol1 = Symbol(1)
const symbol2 = Symbol(1)
console.log(symbol === symbol2)

const ID = Symbol('id')
let user = {}
user[ID] = '1234'
console.log(user)

// BigInt
const bigNumber = 109823745945445446485446694n
console.log(bigNumber)

const numberOfParticlesInTheUniverse = 1000000000000000000000n
console.log(numberOfParticlesInTheUniverse)