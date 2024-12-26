function foo(a, b) {
  return parseInt(a) + parseInt(b);
}

console.log(foo(1, '2')); // Output: 3
console.log(foo(1, 2)); // Output: 3
console.log(foo('1', '2')); // Output: 3
console.log(foo('1abc', '2')); // Output: NaN // Handles non-numeric strings gracefully

//Alternative using Number()
function bar(a, b) {
  return Number(a) + Number(b);
}

console.log(bar(1, '2')); // Output: 3
console.log(bar('1','2')); //Output:3