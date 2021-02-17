const add = (a: number, b:number, c?:number | string //c:나는 있을수도 있고 없을 수도 있어
    ) => {
    if(c)
        console.log(c);
    else 
        console.log(a+b);
}

add(5,10);
add(10,20,'나를 출력하거라');

const add2 = (a: number, b:number, c:number | string = 100 //c:나를 입력하지 않으면 100을 가질게
    ) => {
        console.log(c);
}

add2(1,2);

const minus = (a: number, b:number): number =>{
    return a - b;
}

console.log(minus(10,2));