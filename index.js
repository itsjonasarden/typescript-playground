console.log("Hello TypeScript!");
// Implicit Types
var helloWorld = "Hello World!";
// helloWorld = 5 // Type 'number' is not assignable to type 'string'.
// Explicit Types (assigned types by user)
var firstName = 'John';
var age = 30;
var x = ["Hello", 5];
// let y: stringAndNumber = ["Hello", "hello"] // Type 'string' is not assignable to type 'number'. Because the second parameter needs to be a number
// Enums
var Continents;
(function (Continents) {
    Continents[Continents["North_America"] = 0] = "North_America";
    Continents[Continents["South_America"] = 1] = "South_America";
    Continents[Continents["Africa"] = 2] = "Africa";
    Continents[Continents["Asia"] = 3] = "Asia";
    Continents[Continents["Europe"] = 4] = "Europe";
    Continents[Continents["Antarctica"] = 5] = "Antarctica";
    Continents[Continents["Australia"] = 6] = "Australia";
})(Continents || (Continents = {}));
var region = Continents.Africa; // == 2
var user = {
    name: 'John',
    id: 0
};
// const windowStates: WindowStates = "I don't know, this is not a window" //Type '"I don't know, this is not a window"' is not assignable to type 'WindowStates'.
var windowStates = "closed";
var isLocked = "locked";
var odd = 5;
var getLength = function (param) {
    return param.length;
};
getLength('test'); //returns 4
getLength(['test', 'test1']); //returns 2
// getLength(5) // its not a string or an array
