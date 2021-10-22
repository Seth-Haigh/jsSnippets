console.log("Rolling die #1")
var n1 = Math.random();
n1 = n1 * 6;
n1 = Math.floor(n1) + 1;
console.log(n1);

console.log("Rolling die #2")
var n2 = Math.random();
n2 = n2 * 6;
n2 = Math.floor(n2) + 1;
console.log(n2);

console.log("...mathing it up");
var total = n1 + n2;

console.log("Total of both dice is " + total);
