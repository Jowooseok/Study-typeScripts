class User{
    name: string;
    photo: string;
    phone: number;

    constructor(name:string, photo:string, phone:number){
        this.name = name;
        this.photo = photo;
        this.phone = phone;
    }

    introduceMyProfile(){
        return `My name ${this.name} and phoneNumber is ${this.phone}`;
    }
}

const Wooseok = new User('wooseok','https://localhost:5500/public',12345678);
console.log(Wooseok.introduceMyProfile());