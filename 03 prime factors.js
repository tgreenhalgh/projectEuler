/*
The prime factors of 13195 are 5, 7, 13 and 29.

What is the largest prime factor of the number 600851475143 ?
*/

const primeFactors = num => {
  let factors = [];

  for (let i = 2; i < Math.sqrt(num) + 1; i++) {
    if (num % i === 0 && primeTest(i)) factors.push(i);
  }
  return factors;
};

const primeTest = num => {
  for (let i = 2; i < Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
};

console.time('first');
console.log(primeFactors(600851475143));
console.timeEnd('first');

const p2 = num => {
  let i = 2;
  while (i * i <= num) {
    if (num % i == 0) num /= i;
    else i += 1;
  }
  return num;
};

console.time('second');
console.log(p2(600851475143));
console.timeEnd('second');
