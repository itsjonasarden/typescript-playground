type Product = {
    name: string,
    expirationDate?: Date,
}

const drink: Product = {name: 'Milk', expirationDate: new Date()}

//________________________________________________________________//
// By default all properties are required and to make them optional add the "?" after the property name
//________________________________________________________________//
 
// type Product = {
//     name: string,
//     expirationDate?: Date, 
// }


const shoes: Product = {name: 'Shoes'}

//________________________________________________________________//
// Even the second parameter is optional, if we pass it, it will be type checked. Number in this case will be returned as error
//________________________________________________________________//

// const shoes2: Product = {name: 'Shoes2', expirationDate: 3}
const shoes3: Product = {name: 'Shoes2', expirationDate: new Date()}


//________________________________________________________________//
// You can have optional arguments inside a function, but they have always to be in the end.
// It needs to know all the required arguments before optional ones
//________________________________________________________________//


// function formatFullName(firstName: string, lastName: string, age?: number, tel:number) { // <<<<<<< A required parameter cannot follow an optional parameter.ts
//     if (lastName) {
//         return `${firstName} ${lastName}`
//     }
//     return firstName
// }

function formatFullName1(firstName: string, lastName: string) {
    if (lastName) {
        return `${firstName} ${lastName}`
    }
    return firstName
}



type Product2 = {
    readonly name: string,
    expirationDate?: Date,
}


const drink2: Product2 = {name: 'Milk', expirationDate: new Date()}

// drink2.name = "Cacao" // Cannot assign to 'name' because it is a read-only property.ts