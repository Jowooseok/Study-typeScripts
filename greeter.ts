interface Person {
    firstName: string;
    lastName: string;
}

function greeter(person: Person){
    return "Hello, " + person.firstName + " " + person.lastName;
}

let user = { firstName: 'WOOSEOK', lastName : "JO"};

document.body.textContent = greeter(user);