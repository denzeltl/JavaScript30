// start with strings, numbers and booleans
let num = 100;
let num2 = num;
console.log(num, num2);
num = 200;
console.log(num, num2);

// Let's say we have an array
const players = ["Wes", "Sarah", "Ryan", "Poppy"];

// and we want to make a copy of it.

// You might think we can just do something like this:

// however what happens when we update that array?

// now here is the problem!

// oh no - we have edited the original array too!

// Why? It's because that is an array reference, not an array copy. They both point to the same array!

// So, how do we fix this? We take a copy instead!

// one way
const players2 = [...players];
players2[2] = "Kenny";
console.log(players2, players);

// now when we update it, the original one isn't changed

// The same thing goes for objects, let's say we have a person object

// with Objects
const person = {
    name: "Wes Bos",
    age: 80
};

// and think we make a copy:

// how do we take a copy instead?
const person2 = Object.assign({}, person);
person2.name = "Denzel";
console.log(person, person2);

// We will hopefully soon see the object ...spread

// Things to note - this is only 1 level deep - both for Arrays and Objects. lodash has a cloneDeep method, but you should think twice before using it.
