//PART1
//Objective: Create variables of different data types and print them.
console.log("------Objective 1------------")
let score = 30;
let temperature = 36.6;
let greeting = "Hello, Javascript!";
let isLearningFun = true;
console.log(score, temperature, greeting, isLearningFun)

//Objective: Create an object and an array, then access and modify their elements.
console.log("------Objective 2------------")
let student = {
    name: "Bob Miller",
    age: 17,
    subjects: ["Math", "Spanish"]
}
student.isGraduated = false;
console.log(student)

let primeNumbers = [2, 3, 5, 7, 11]
primeNumbers[1] = 4
console.log(primeNumbers[1] + " Mistake Detected")
primeNumbers[1] = 3
console.log(primeNumbers)

//Objective: Perform operations using different operators and understand their results.
console.log("------Objective 3------------")
let num1 = 7;
let num2 = 4;
console.log("Sum:", num1 + num2)
console.log("Product:", num1 * num2)
console.log("Modulus:", num1 % num2)

let x = 1;
let y = 3;
console.log("x is 1, and y is 3.")
console.log("x == y Equal to:", x == y); // false - 
console.log("x != y Not equal to:", x != y); // true - Not equal to
console.log("x === y Strictly equal to:", x === y); 
console.log("x !== y Strictly not equal to:", x !== y); 
console.log("x > y:", x > y); 
console.log("x < y:", x < y); 
console.log("x >= y:", x >= y); 
console.log("x <= y:", x<= y); 

let bool1 = true;
let bool2 = false;
console.log(bool1 && bool2)
console.log(bool1 || bool2)
console.log(!bool1)

//Objective: Write conditional statements and loops using control flow operators.
console.log("------Objective 4------------")
if (score > 50) {
    console.log("Great job!")
}
else {
    console.log("Keep trying!")
}

for (let i = 0; i < primeNumbers.length; i++) {
    console.log(primeNumbers[i])
}

while (score != 0) {
    score--;
}
console.log("After decrementing score to zero:", score)

//Objective: Understand JS functions
console.log("------Objective 5------------")
function eventCountdown(eventDate) {
    const now = new Date();
    const event = new Date(eventDate);
    const timeDiff = event - now;
  
    let seconds = Math.floor(timeDiff / 1000);
    let minutes = Math.floor(seconds / 60);
    let hours = Math.floor(minutes / 60);
    let days = Math.floor(hours / 24);
  
    hours %= 24;
    minutes %= 60;
    seconds %= 60;
  
    return `${days} days, ${hours} hours, ${minutes} minutes, and ${seconds} seconds remaining until the event.`;
  }
  
const countdownMessage = eventCountdown('December 31, 2024 23:59:59');
console.log(countdownMessage); // Outputs the time remaining until New Year's Eve 2024

console.log(`This function 'eventCountdown' is calculating the remaining time
and returning it until the inputted future event.
Here's how the steps are:
1. Current Date Object
2. Convert the inputted event into Date object for comparison.
3. Compute time difference from two Date objects in milliseconds
4. Convert the time unit into seconds, minutes, hours, and days and return the remaining time in a formatted string human can read`);
  

function swap(a, b, c) {
    return [c, a, b]
}
console.log(swap(a= 1, b= 2, c= 3))

function findLongestWord(sentence) {
    const words = sentence.split(' '); // words is an array of all the words in the sentence
    // write your code here
    let longestWord = ""
    for (let word of words) {
        if (word.length > longestWord.length){
            longestWord = word
        }
    }
    return longestWord
  }
  
  // Example usage:
  console.log(findLongestWord("The quick brown fox jumped over the lazy dog")); 
  // your function should output the correct longest word.
  