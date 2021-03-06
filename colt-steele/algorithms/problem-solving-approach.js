/*
Algorithms and Problem Solving Patterns
- Define what an algorithm is
- Devise a plan to solve algorithms
- Compare and contrast problem solving patterns including frequency counters, two pointer problems and divide and conquer

Algorithm - a process or set of steps to accompish a certain task. 

Why you need to know this? Almost everything that you do in programming involves some kind of algorithm. It's the foundation for being a successful problem solver and developer. 

How do you improve? Devise a plan for solving problems. Master common problem solving patterns. Most of the problems in interviews are categorized.

Problem Solving Steps
- Understand the problem
- Explore Concrete Examples
- Break It Down
- Solve/simplify
- Look back and refactor

Understand the Problem
- Can I restate the problem in my own words?
- What are the inputs that go into the problem?
- What are the outputs that should come from the solution to the problem?
- Can the outputs be determined from the inputs? In other words, do I have enough information to solve the problem?
- How should I lable the important pieces of data that are a part of the problem?

Example 1
Write a function which takes two numbers and returns their sum.

- Can I restate the problem in my own words?
Create a function that adds two numbers and returns the sum.
- What are the inputs that go into the problem?
There are distinctions for the inputs. Are there always two inputs? Are they always integers?
- What are the outputs that should come from the solution to the problem?
Should the outputs be integers or floats or strings?
- Can the outputs be determined from the inputs? In other words, do I have enough information to solve the problem?
Will there be undefined outputs?
- How should I lable the important pieces of data that are a part of the problem?
Should the labels for inputs be num1, num2?

Concrete Examples
Coming up with examples can help you understand the problem better. Examples also provide sanity checks that your eventual solution works how it should.

Example 2
Write a function which takes in a string and returns counts of each character in the string

charCount("aaaa") // {a: 4}
charCount("hello") // {h: 1, e: 1, l: 2, o: 1}
charCount("my phone number is 5555555555") - more complex inputs that needs more clarification

Break It Down
A lot of interviewers want to see how you communicate breaking down the problem. Explicitly write out the steps you need to take. This forces you to think about the code you'll write before you write it, and helps you catch any lingering conceptual issues or misunderstandings before you dive in.

Same Example 2
Write a function which takes in a string and returns counts of each character in the string

function charCount(str) {
    // do something
    // return an object that are lowercase alphanumeric characters in the string
}

function charCount(str) {
    // make object to return at end
    // loop over string (bulk of our logic), for each character...
        // if the char is a number/letter AND a key in object, add one to count
        // if the char is a number/letter AND not in object, add it to object and set value to 1
        // if char is something else (space, period) don't do anything
    // return object at end
}
*/


// Solve the Problem

// Same Example 2
// Write a function which takes in a string and returns counts of each character in the string

// function charCount(str) {
//     // make object to return at end
//     let result = {}
//     // loop over string, for each character...
//     for (let i = 0; i < str.length; i++){
//         let char = str[i]
//         // if the char is a number/letter AND a key in object, add one to count
//         if(result[char] > 0) {
//             result[char]++;
//             // if the char is a number/letter AND not in object, add it to object and set value to 1
//         }   else {
//             result[char] = 1;
//         }
//     }
//     // return object at end
//     return result;
// }

// console.log(charCount("hello"))

/*
Look Back and Refactor
Can you check the result?
Can you derive the result differently?
Can you understand it at a glance?
Can you use the result or method for some other problem?
Can you improve the performance of your solution?
How have other people solved this problem?

*/

// Same Example - Let's take a look back at the same example and see if we can make it better

// function charCount(str) {
//     let obj = {}
//     for (let i = 0; i < str.length; i++) {
//         let char = str[i].toLowerCase();
//         if (/[a-z0-9]/.test(char)) {
//             if (obj[char] > 0) {
//                 obj[char]++
//             }   else {
//                 obj[char] = 1
//             }
//         }
//     }
//     return obj;
// };

// console.log(charCount("Hello 1234"))

// How can we refactor this?
function charCount(str) {
    let obj = {}
    for (let char of str) {
        if (isAlphaNumeric(char)) {
            char = char.toLowerCase();
            obj[char] = ++obj[char] || 1
        }
    }
    return obj;
};

// checking each char to see if it's alphanumeric
function isAlphaNumeric(char) {
    let code = char.charCodeAt(0)
    if (!(code > 47 && code < 58) && // numeric (0-9)
        !(code > 64 && code < 91) && // upper alpha (A-Z)
        !(code > 96 && code < 123)) { // lower alpha (a-z)
            return false;
        }
        return true;
};


console.log(charCount("Hello 1234"))