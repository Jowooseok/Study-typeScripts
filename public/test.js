"use strict";
var User = /** @class */ (function () {
    function User(name, photo, phone) {
        this.name = name;
        this.photo = photo;
        this.phone = phone;
    }
    User.prototype.introduceMyProfile = function () {
        return "My name " + this.name + " and phoneNumber is " + this.phone;
    };
    return User;
}());
var Wooseok = new User('wooseok', 'https://localhost:5500/public', 12345678);
console.log(Wooseok.introduceMyProfile());
