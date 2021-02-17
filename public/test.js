"use strict";
var domSelector = document.querySelector('a');
console.log(domSelector.href); //error : 'a'가 있을수도 있고 없을수도 있으니까요
//object is possibly 'null'
//Solution 1. if문으로 있는지 확인해서 해결
if (domSelector) {
    console.log(domSelector.href);
}
//Solution 2. 확실히 있다면 사용자가 있다고 알려주기
var domSelector2 = document.querySelector('a');
console.log(domSelector2.href);
//Solution 3. as사용하기
var domSelector3 = document.querySelector('a');
console.log(domSelector3.href);
