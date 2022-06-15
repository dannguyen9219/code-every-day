/*
Problem Solving Patterns
- Devise a plan for solving problems
- Master common problem solving patterns

Some patterns...
- Frequency Counter
- Multiple Pointers
- Sliding Window
- Divide and Conquer
- Dynamic Programming
- Greedy Algorithms
- Backtracking

*/

/*
Frequency Counter Pattern
Pattern uses objects or sets to collect values/frequencies of values
Comparing pieces of data/inputs and needing to track the inputs, usually O(n) time
This can often avoid the need for nested loops or O(n^2) operations with arrays / strings

*/

/*
Frequency Counter Example
Write a function called same, which accepts two arrays. The function should return true if every value in the array has it's corresponding value squared in the second array. The frequency of values must be the same.

same([1,2,3], [4,1,9]) // true
same([1,2,3], [4,4,1]) // false
*/

// Frequency Counter Example Naive Solution
function same(arr1, arr2){
    if(arr1.length !== arr2.length){
        return false;
    }
    for(let i = 0; i < arr1.length; i++){
        let correctIndex = arr2.indexOf(arr1[i] ** 2)
        if(correctIndex === -1) {
            return false;
        }
        console.log(arr2)
        arr2.splice(correctIndex,1)
    }
    return true
};

console.log(same([1,2,3,2], [9,1,4,4])) // This is O(n^2) because of nested loop

// Frequency Counter Example Refactored
function sameTwo(arr1, arr2){
    if(arr1.length !== arr2.length){
        return false;
    }
    let frequencyCounter1 = {}
    let frequencyCounter2 = {}
    for(let val of arr1){
        frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1
    }
    for(let val of arr2){
        frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1        
    }
    for(let key in frequencyCounter1){ // comparing each counter in each array to ensure that arr2 has the squared of the number of arr1
        if(!(key ** 2 in frequencyCounter2)){
            return false
        }
        if(frequencyCounter2[key ** 2] !== frequencyCounter1[key]){ // Checking to see if the squared counter has the same number of keys in each array
            return false
        }
    }
    console.log(frequencyCounter1)
    console.log(frequencyCounter2)
    return true
}

console.log(sameTwo([1,2,3,2], [9,1,4,4])) // This is O(n) time complexity

/*
Anagrams
Given two strings, write a function to determine if the second string is an anagram of the first. An anagram is a word, phrase, or name formed by rearranging the letters of another, such as cinema, formed from iceman. 

validAnagram('', '') // true
validAnagram('aaz', 'zza') // false
validAnagram('anagram', 'nagaram') // true
validAnagram("rat","car") // false) // false
validAnagram('awesome', 'awesom') // false
validAnagram('qwerty', 'qeywrt') // true
validAnagram('texttwisttime', 'timetwisttext') // true

*/

// Example Anagram Solution
function validAnagram(first, second) {
    if (first.length !== second.length) {
        return false;
    } // if not the same length, return false

    const lookup = {};

    for (let i = 0; i < first.length; i++) {
        let letter = first[i]
        // if letter exists, increment, otherwise set to 1
        lookup[letter] ? lookup[letter] += 1 : lookup[letter] = 1;
    } // looping through first string, taking first letter and looping it and comparing to lookup {} - if new letter then letter = 1, if old letter then letter + 1

    for (let i = 0; i < second.length; i++) {
        let letter = second[i]
        // can't find letter or letter is zero then it's not an anagram
        if (!lookup[letter]) {
            return false;
        }   else {
            lookup[letter] -= 1;
        }
        // looping over each letter of the second string and comparing it to lookup {}
    }
    return true;
}

console.log(validAnagram("dan", "nad"))

/*
Multiple Pointers
Creating pointers or values that correspond to an index or position and move towards the beginning, end or middle based on a certain condition.
Very efficient for solving problems with minimal space complexity as well.

Example
Write a function called sumZero which accepts a sorted array of integers. The function should find the first pair where the sum is 0. Return an array that includes both values that sum to zero or undefined if a pair does not exist. 

sumZero([-3,-2,-1,0,1,2,3]) // [-3,3] 
sumZero([-2,0,1,3]) // undefined
sumZero([1,2,3]) // undefined

*/

// Naive solution to Multiple Pointers Example
function sumZero(arr){
    for(let i = 0; i < arr.length; i++){
        for(let j = i+1; j < arr.length; j++){
            if(arr[i] + arr[j] === 0){
                return [arr[i], arr[j]];
            }
        }
    }
};

console.log(sumZero([-3, -2, -1, 0, 1, 2, 3])) // Time complexity O(n^2); Space complexity O(1)

// Refactor solution to Multiple Pointers Example
function sumZeroTwo(arr) {
    let left = 0
    let right = arr.length - 1
    while(left < right) {
        let sum = arr[left] + arr[right]
        if(sum ===0) {
            return [arr[left], arr[right]]
        }   else if(sum > 0) {
            right--
        }   else {
            left ++
        }
    }
};

console.log(sumZeroTwo([-4,-3,-2,-1,0,1,2,5,6])) // Time complexity O(n); Space complexity O(1)

/*
Multiple Pointers: Count Unique Values Challenge
Implement a function called countUniqueValues, which accepts a sorted array, and counts the unique values in the array. There can be negative numbers in the array, but it will always be sorted.

countUniqueValues([1,1,1,1,1,2]) // 2
countUniqueValues([1,2,3,4,4,4,7,7,12,12,13]) // 7
countUniqueValues([]) // 0
countUniqueValues([-2,-1,-1,0,1]) // 4

*/

// Solution to the Count Unique Values Example
function countUniqueValues(arr) {
    if(arr.length === 0) return 0;
    let i = 0;
    for (let j = 1; j < arr.length; j++) {
        if(arr[i] !== arr[j]) {
            i++;
            arr[i] = arr[j]
        }
        console.log(i,j)
    }
    return i + 1;
};

console.log(countUniqueValues([1,1,2,3,3,4,5,6,6,7]))

/*
Sliding Window
This pattern invovles creating a window which can either be an array or number from one position to another.
Depending on a certain condition, the window either increases or closes (and a new window is created).
Very useful for keeping track of a subset of data in an array/string, etc. 

Example for maxSubarraySum
Where you find the largest sum of consecutive numbers in the array based on the input value. Keeping track of a subset of data in a set of data.
Write a function called maxSubarraySum which accepts an array of integers and a number called n. The function should calculate the maximum sum of n consecutive elements in the array.

maxSubarraySum([1,2,5,2,8,1,5],2) // 10
maxSubarraySum([1,2,5,2,8,1,5],4) // 17
maxSubarraySum([4,2,1,6],1) // 6
maxSubarraySum([4,2,1,6,2],4) // 13
maxSubarraySum([],4) // null

*/

// Naive solution to maxSubarraySum
function maxSubarraySum(arr, num) {
    if ( num > arr.length){
      return null;
    }
    let max = -Infinity; // If you are also working with negative integers
    for (let i = 0; i < arr.length - num + 1; i++) {
      temp = 0; // temp is storing our sum, so it starts at 0
      for (let j = 0; j < num; j++){
        temp += arr[i + j];
      }
      if (temp > max) {
        max = temp;
      }
    }
    return max;
};

console.log(maxSubarraySum([1,2,3,2,8,1,5],2)) // Time complexity O(n^2)

// Refactor solution using Sliding Window for maxSubarraySum
function maxSubarraySumTwo(arr, num){
    let maxSum = 0;
    let tempSum = 0;
    if (arr.length < num) return null;
    for (let i = 0; i < num; i++) {
      maxSum += arr[i];
    }
    tempSum = maxSum;
    for (let i = num; i < arr.length; i++) {
      tempSum = tempSum - arr[i - num] + arr[i];
      maxSum = Math.max(maxSum, tempSum);
    }
    return maxSum;
}; // This code will subtrack the last number and add the next number, and slide the window to the next set up numbers

console.log(maxSubarraySumTwo([1,2,3,2,8,1,5],2)) // Time complexity O(n)

/*
Divide and Conquer
This pattern involves dividing a data set into smaller chunks and then repeating a process with a subset of data.
This pattern can tremendously decrease time complexity. 

An Example
Given a sorted array of integers, write a function called search, that accepts a value and returns the index where the value passed to the function is located. If the value is not found, return -1.

search([1,2,3,4,5,6],4) // 3
search([1,2,3,4,5,6],6) // 5
search([1,2,3,4,5,6],11) // -1

*/

// Naive solution to the example using linear search //
function search(arr, val){
    for(let i = 0; i < arr.length; i++){
        if(arr[i] === val){
            return i;
        }
    }
    return -1;
};

console.log(search([1,2,3,4,5,6], 4)) // Time complexity O(n)

// Refactor solution using Binary Search //
function searchTwo(array, val) {
 
    let min = 0;
    let max = array.length - 1;
 
    while (min <= max) {
        let middle = Math.floor((min + max) / 2);
        let currentElement = array[middle];
 
        if (array[middle] < val) {
            min = middle + 1;
        }
        else if (array[middle] > val) {
            max = middle - 1;
        }
        else {
            return middle;
        }
    }
    return -1;
};

console.log(searchTwo([1,2,3,4,5,6], 4)) // Time Complexity log(n) - binary search