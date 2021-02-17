export class User {
    constructor(name, photo, phone) {
        this.name = name;
        this.photo = photo;
        this.phone = phone;
    }
    introduceMyProfile() {
        return `My name ${this.name} and phoneNumber is ${this.phone}`;
    }
}
