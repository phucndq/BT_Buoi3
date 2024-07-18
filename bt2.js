let numbers = [26, 9, 20, 50, 99];

let sum = 0;
for (let i = 0; i < numbers.length; i++) {
  sum += numbers[i];
}
console.log(sum);

let average = sum / numbers.length;
console.log(average);