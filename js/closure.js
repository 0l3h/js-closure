`use strict`;

function addNum(n) {
    return function(m) {
        return n + m;
    };
};

const add = addNum(5);
console.log(add(10));
console.log(add(4));

const add2 = addNum(3);
console.log(add2(4));
console.log(add2(8));