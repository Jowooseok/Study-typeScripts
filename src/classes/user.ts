import {IntroduceMyProfile} from '../interfaces/introduceMyProfile.js';

export class User implements IntroduceMyProfile{
    constructor(
        readonly name: string,
        private photo: string,
        public phone: number
    ){}

    introduceMyProfile(){
        return `My name ${this.name} and phoneNumber is ${this.phone}`;
    }
}
