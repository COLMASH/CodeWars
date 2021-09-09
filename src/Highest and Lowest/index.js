function highAndLow(numbers) {
  let numArray = numbers.split(" ");
  let min = numArray.map((n) => parseInt(n)).reduce((a, c) => (a < c ? a : c));
  let max = numArray.map((n) => parseInt(n)).reduce((a, c) => (a > c ? a : c));
  return `${max} ${min}`;
}

module.exports = highAndLow;
