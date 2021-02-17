// explicit types
    let character: string;
    let age: number;
    let isLoggedIn: boolean;

    

// arrays
let fruits: string[] = [];

fruits.push('ho');

// union types
let mixed: (string | number)[] = [];
mixed.push('hello');
mixed.push(20); 
mixed.push(false); //error

console.log(mixed);

let uid: string|number;


// objects
let appleOne: object;
appleOne = {name: 'hi', age:30};

let appleTwo: {
    name : string,
    age: number,
    colour : string,
}

appleTwo = {
    name : 'hi',
    age: 20,
    colour: 'red',
    skills: [], //error
}