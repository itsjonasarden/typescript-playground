console.log("Hello TypeScript!")

// Implicit Types
let helloWorld = "Hello World!"
// helloWorld = 5 // Type 'number' is not assignable to type 'string'.

// Explicit Types (assigned types by user)
let firstName: string = 'John'
let age: number = 30

// Built-in Types
// Boolean
// Number
// String
// Array
// Tuple
// Enum
// Unknown
// Any
// Void
// Null and Undefined

// Tuple 
type stringAndNumber = [string, number];
let x: stringAndNumber = ["Hello", 5]
// let y: stringAndNumber = ["Hello", "hello"] // Type 'string' is not assignable to type 'number'. Because the second parameter needs to be a number

// Enums
enum Continents {
    North_America,
    South_America,
    Africa,
    Asia,
    Europe,
    Antarctica,
    Australia
}

let region = Continents.Africa // == 2

// Interfaces

interface User {
    name: string,
    id: number,
}

const user: User = {
    name: 'John',
    id: 0
}

// Composing types -> Union
type WindowStates = "open" | "closed" | "minimized"
// const windowStates: WindowStates = "I don't know, this is not a window" //Type '"I don't know, this is not a window"' is not assignable to type 'WindowStates'.
const windowStates: WindowStates = "closed"

type LockStates = 'locked' | "unlocked"
const isLocked: LockStates = "locked"

type OddNumbersUnderTen = 1 | 3 | 5 | 7 | 9
const odd: OddNumbersUnderTen = 5

const getLength = (param: string | string[]) => {
    return param.length
}

getLength('test') //returns 4
getLength(['test', 'test1']) //returns 2

// getLength(5) // its not a string or an array