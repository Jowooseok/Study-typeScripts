class User{


    constructor(
        readonly name: string,
        private photo: string,
        public phone: number
    ){}

    introduceMyProfile(){
        return `My name ${this.name} and phoneNumber is ${this.phone}`;
    }
}

const Wooseok = new User('wooseok','https://localhost:5500/public',12345678);
console.log(Wooseok.introduceMyProfile());