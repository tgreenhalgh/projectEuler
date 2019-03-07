/*
The sum of the squares of the first ten natural numbers is,
1^2 + 2^2 + ... + 10^2 = 385

The square of the sum of the first ten natural numbers is,
(1 + 2 + ... + 10)^2 = 552 = 3025

Hence the difference between the sum of the squares of the first ten natural numbers
and the square of the sum is 3025 − 385 = 2640.

Find the difference between the sum of the squares of the first one hundred natural numbers and the square of the sum.
*/

const sumThenSq = num => {
  return (num / 2) * (num + 1) * (num / 2) * (num + 1);
};

const sqThenSum = num => {
  // math way
  // n * (n+1) * (2n+1) * 1/6
  let sum = 0;
  /*
  for (let i = 1; i <= num; i++) sum += i * i;
  return sum;
  */
  return (num * (num + 1) * (2 * num + 1)) / 6;
};

const num = 100;
console.log(sumThenSq(num) - sqThenSum(num));
