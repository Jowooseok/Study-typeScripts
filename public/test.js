const addUID = (obj) => {
    let uid = Math.floor(Math.random() * 100);
    return Object.assign(Object.assign({}, obj), { uid });
};
let docOne = addUID({ name: 'wooseok', age: 27 });
console.log(docOne.name);
const docTwo = {
    uid: 1,
    data: {
        name: 'woosek'
    }
};
export {};
// interface IsPerson {
//     name :string;
//     age :number;
//     speak(a:string): void;
//     spend(a:number): number;
// }
// const me: IsPerson = {
//     name:'woosek',
//     age :27,
//     speak(text:string):void{
//         console.log(text);
//     },
//     spend(amount:number):number{
//         console.log('I spent', amount);
//         return amount;
//     }
// };
// const greetPerson = (person: IsPerson) =>{
//     console.log('hello', person.name);
// }
// greetPerson(me);
// const Wooseok = new User('wooseok','https://localhost:5500/public',12345678);
// console.log(Wooseok.introduceMyProfile());
