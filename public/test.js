"use strict";
var add = function (a, b, c //c:나는 있을수도 있고 없을 수도 있어
) {
    if (c)
        console.log(c);
    else
        console.log(a + b);
};
add(5, 10);
add(10, 20, '나를 출력하거라');
var add2 = function (a, b, c //c:나를 입력하지 않으면 100을 가질게
) {
    if (c === void 0) { c = 100; }
    console.log(c);
};
add2(1, 2);
var minus = function (a, b) {
    return a - b;
};
console.log(minus(10, 2));
