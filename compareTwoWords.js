let mutation = arr => {
  const sortedWord1 = arr[0].split('').sort();
  const sortedWord2 = arr[1].split('').sort();

  if (sortedWord1.length !== sortedWord2.length) return false;
  for (let i = 0; i < sortedWord1.length; i++) {
    if (sortedWord1[i] != sortedWord2[i]) return false;
  }
  return true;
};

console.log(mutation(['hello', 'hey'])); // false
console.log(mutation(['hello', 'olleh'])); // true
console.log(mutation(['acdef', 'faced'])); // true
