const should = require("should");

const arr = [1, 2, 3];
//console.log(should);

console.log(arr.should);
//$ node practice.js
//Assertion {
// obj: [ 1, 2, 3 ],
//  anyOne: false,
//  negate: false,
//  params: { actual: [ 1, 2, 3 ] }
//}

console.log(arr.should.__proto__.constructor); // Function:Assertion

console.log(should === arr.should);

console.log(Function.__proto__.constructor);
console.log(Object);
console.log(Function.__proto__ === Object.__proto__);
