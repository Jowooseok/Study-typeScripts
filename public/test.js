import { User } from "./classes/user.js";
const me = {
    name: 'woosek',
    age: 27,
    speak(text) {
        console.log(text);
    },
    spend(amount) {
        console.log('I spent', amount);
        return amount;
    }
};
const greetPerson = (person) => {
    console.log('hello', person.name);
};
greetPerson(me);
const Wooseok = new User('wooseok', 'https://localhost:5500/public', 12345678);
console.log(Wooseok.introduceMyProfile());
