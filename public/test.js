"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var user_js_1 = require("./classes/user.js");
var Wooseok = new user_js_1.User('wooseok', 'https://localhost:5500/public', 12345678);
console.log(Wooseok.introduceMyProfile());
