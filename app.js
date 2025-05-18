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

// let sentence = prompt("Enter a sentence that ends with a period (.)");

// // Initialize counters
// let charCount = 0;
// let wordCount = 0;
// let vowelCount = 0;

// // Define vowels
// const vowels = "aeiouAEIOU";

// // Flags
// let inWord = false;

// for (let i = 0; i < sentence.length; i++) {
//   let ch = sentence[i];

//   // Increment character count
//   charCount++;

//   // Count vowels
//   if (vowels.includes(ch)) {
//     vowelCount++;
//   }

//   // Word counting logic
//   if (ch !== " " && ch !== ".") {
//     if (!inWord) {
//       wordCount++;
//       inWord = true;
//     }
//   } else {
//     inWord = false;
//   }

//   // Stop processing after period
//   if (ch === ".") {
//     break;
//   }
// }

// // Display results
// console.log("Length of the sentence:", charCount);
// console.log("Number of words:", wordCount);
// console.log("Number of vowels:", vowelCount);

// function sumOfDistinctElements(set1, set2) {
//   let sum = 0;

//   // Helper function to check if an element is in an array
//   function notInArray(element, array) {
//     return !array.includes(element);
//   }

//   // Add elements from set1 that are not in set2
//   for (let i = 0; i < set1.length; i++) {
//     if (notInArray(set1[i], set2)) {
//       sum += set1[i];
//     }
//   }

//   // Add elements from set2 that are not in set1
//   for (let i = 0; i < set2.length; i++) {
//     if (notInArray(set2[i], set1)) {
//       sum += set2[i];
//     }
//   }

//   return sum;
// }

// // Example usage
// let set1 = [3, 1, 7, 9];
// let set2 = [2, 4, 1, 9, 3];
// console.log("Sum of distinct elements:", sumOfDistinctElements(set1, set2)); // Output: 13

// function dot_product(v1, v2) {
//   let ps = 0;
//   for (let i = 0; i < v1.length; i++) {
//     ps += v1[i] * v2[i];
//   }
//   return ps;
// }

// function checkOrthogonality(vectorPairs) {
//   for (let i = 0; i < vectorPairs.length; i++) {
//     let [v1, v2] = vectorPairs[i];
//     let product = dot_product(v1, v2);

//     if (product === 0) {
//       console.log(`Pair ${i + 1}: Vectors are orthogonal.`);
//     } else {
//       console.log(`Pair ${i + 1}: Vectors are not orthogonal.`);
//     }
//   }
// }

// // Example usage
// let vectorPairs = [
//   [
//     [1, 0],
//     [0, 1],
//   ], // orthogonal
//   [
//     [2, 3],
//     [4, 5],
//   ], // not orthogonal
//   [
//     [1, -1],
//     [1, 1],
//   ], // orthogonal
// ];

// checkOrthogonality(vectorPairs);

// function addition(a, b) {
//   return a + b;
// }

// console.log(addition(3, 2)); // ➞ 5
// console.log(addition(-3, -6)); // ➞ -9
// console.log(addition(7, 3)); // ➞ 10

function reverseString(str) {
  return str.split("").reverse().join("");
}

function countCharacters(str) {
  return str.length;
}

function capitalizeWords(str) {
  return str
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

function findMax(arr) {
  return Math.max(...arr);
}

function findMin(arr) {
  return Math.min(...arr);
}

function sumArray(arr) {
  return arr.reduce((sum, num) => sum + num, 0);
}

function filterArray(arr, conditionFn) {
  return arr.filter(conditionFn);
}

const numbers = [1, 2, 3, 4, 5];
const evenNumbers = filterArray(numbers, (num) => num % 2 === 0);
console.log(evenNumbers); // Output: [2, 4]

function factorial(n) {
  if (n < 0) return undefined; // Factorial is not defined for negative numbers
  let result = 1;
  for (let i = 2; i <= n; i++) {
    result *= i;
  }
  return result;
}

function isPrime(num) {
  if (num <= 1) return false;
  if (num === 2) return true;
  if (num % 2 === 0) return false;
  const sqrt = Math.sqrt(num);
  for (let i = 3; i <= sqrt; i += 2) {
    if (num % i === 0) return false;
  }
  return true;
}

function generateFibonacci(n) {
  if (n <= 0) return [];
  if (n === 1) return [0];
  const fib = [0, 1];
  for (let i = 2; i < n; i++) {
    fib.push(fib[i - 1] + fib[i - 2]);
  }
  return fib;
}
