const greeting = function (name) {
    return `Hi, ${name}`
}

// Arrow function - explicit return
const newGreeting = function (name) {
    return `Hi, ${name}`
}

// Arrow function - implicit return

const newGreetingImplicit = name => `Hi, ${name}`
const newGreetingImplicitWithTwoPArameters = (name, lastname) => `Hi, I'm ${name} ${lastname}`

// Lexical Binding

const finctionalCharacter = {
    name: 'Uncle Ben',
    messageWithTraditionalFunction: function (message) {
        console.log(`${this.name} says: ${message}`)
    },
    messageWithArrowFunction:  (message) => {
        console.log(`${this.name} says: ${message}`)
    }
}

finctionalCharacter.messageWithTraditionalFunction('With reat power comes great responsability.')
finctionalCharacter.messageWithArrowFunction('Beware Of Doctor Octopus')


