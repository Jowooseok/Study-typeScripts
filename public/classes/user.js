"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
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
exports.User = User;
