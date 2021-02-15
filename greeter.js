function greeter(person) {
    return "Hello, " + person.firstName + " " + person.lastName;
}
var user = { firstName: 'WOOSEOK', lastName: "JO" };
document.body.textContent = greeter(user);
