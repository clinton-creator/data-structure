// const students = ["daniel", "john", "jude"];
// console.log(students);
// console.log(students [2]);
// console.log(students [0]);
// console.log(students [1]);

// const matrix = [
//    [1, 2, 3],
//    [4, 5, 6],
//    [7, 8, 9],
// ];

// console.log(matrix[1] [1]);
// console.log(matrix[1] [2]);
// console.log(matrix[2] [2]);
// console.log(matrix[0] [2]);
// console.log(matrix[1] [2]);

// const man = "daniel";
// console.log(man);
// console.log(man[5]);
// console.log(man[0]);

// const a = 20;
// const b = 5;
// sum = a + b;
// console.log(sum);
// sum = a - b;
// console.log(sum);
// sum = a / b;
// console.log(sum);
// sum = a * b;
// console.log(sum);

let sentence = prompt("Enter a sentence that ends with a period (.)");

// Initialize counters
let charCount = 0;
let wordCount = 0;
let vowelCount = 0;

// Define vowels
const vowels = "aeiouAEIOU";

// Flags
let inWord = false;

for (let i = 0; i < sentence.length; i++) {
  let ch = sentence[i];

  // Increment character count
  charCount++;

  // Count vowels
  if (vowels.includes(ch)) {
    vowelCount++;
  }

  // Word counting logic
  if (ch !== " " && ch !== ".") {
    if (!inWord) {
      wordCount++;
      inWord = true;
    }
  } else {
    inWord = false;
  }

  // Stop processing after period
  if (ch === ".") {
    break;
  }
}

// Display results
console.log("Length of the sentence:", charCount);
console.log("Number of words:", wordCount);
console.log("Number of vowels:", vowelCount);
