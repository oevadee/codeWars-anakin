// Given a non-empty array of integers, return the result of multiplying the values together in order. Example:

// [1, 2, 3, 4] => 1 * 2 * 3 * 4 = 24

const grow = (x) => x.reduce((curr, acc) => curr * acc);

// console.log(grow([1, 2, 3]));
// console.log(grow([2, 2, 2, 2, 2, 2]));

// Given an integral number, determine if it's a square number:
// -1  =>  false
//  0  =>  true
//  3  =>  false
//  4  =>  true
// 25  =>  true
// 26  =>  false

const isSquare = (x) => Math.sqrt(x) % parseInt(Math.sqrt(x)) === 0 || x === 0 ? true : false;

console.log(isSquare(-1));
console.log(isSquare(0));
console.log(isSquare(3));
console.log(isSquare(4));
console.log(isSquare(25));
console.log(isSquare(26));
