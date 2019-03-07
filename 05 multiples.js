/*
2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.

What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20?
*/

const mult = () => {
  let x = (max = 20);
  while (x) {
    if (oneToMax(x, max)) return x;
    x++;
  }
};

const oneToMax = (num, max) => {
  for (let i = 2; i < max + 1; i++) {
    if (num % i !== 0) return false;
  }
  return true;
};

console.log(mult());
/*
Using Prime Factors

1 - 1
2 - 2
3 - 3
4 - 2^2
5 - 5
6 - 2*3
7 - 7
8 - 2^3
9 - 3^2
10 - 2*5
11 - 11
12 - 2^2*3
13 - 13
14 - 2*7
15 - 3*5
16 - 2^4
17 - 17
18 - 2*3^2
19 - 19
20 - 2^2*5

Product of LCM using Prime factors = 2^4 * 3^2 * 5 * 7 * 11 * 13 * 17 * 19
*/
