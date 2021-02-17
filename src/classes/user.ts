export class User{
    constructor(
        readonly name: string,
        private photo: string,
        public phone: number
    ){}

    introduceMyProfile(){
        return `My name ${this.name} and phoneNumber is ${this.phone}`;
    }
}
