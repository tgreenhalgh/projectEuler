/*
Find the largest palindrome made from the product of two 3-digit numbers.
A palindromic number reads the same both ways.
The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.

Find the largest palindrome made from the product of two 3-digit numbers.
*/

const palProd = () => {
  let largest = 0;
  for (let i = 100; i < 1000; i++) {
    for (let j = 100; j < 1000; j++) {
      if (palindrome(i * j) && i * j > largest) largest = i * j;
    }
  }
  return largest;
};

const palindrome = num => {
  const str = num.toString().split('');
  for (let i = 0; i < str.length / 2; i++) {
    if (str[i] !== str[str.length - i - 1]) return false;
  }
  return true;
};

console.log(palProd());
// console.log(palindrome(9009));
