/*
Binary Search
- Much faster form of search
- Rather than eliminating one element at a time, you can eliminate half of the remaining elements at a time
- Binary search only works on sorted arrays!

Divide and Conquer
- Divide array in two with a pivot point
- Then check left side then right side based on thing to check
- Then pick which side and make another pivot point and do the same

Binary Search Pseudocode
- This function accepts a sorted array and a value
- Create a left pointer at the start of the array, and a right pointer at the end of the array - usually variables
- While the left pointer comes before the right pointer: create a pointer in the middle; if you find the value you want, return the index; if the value is too small, move the left pointer up; if the value is too large, move the right pointer down
- If you never find the value, return -1

Binary Search Exercise
Write a function called binarySearch which accepts a sorted array and a value and returns the index at which the value exists. Otherwise, return -1.
binarySearch([1,2,3,4,5],5) // 4

function binarySearch(arr, value) {
    let start = 0
    let end = arr.length - 1
    let middle = Math.floor((start + end) / 2)

    while(arr[middle] !== value && start <= end) {
        if(value < arr[middle]) {
            end = middle - 1
        }   else {
            start = middle + 1
        }
        middle = Math.floor((start + end) / 2)
    }
    if(arr[middle] === value) {
        return middle
    }
    return -1;
};

console.log(binarySearch([2,5,6,9,13,15,28,30],28))

Clear Version of Exercise
function binarySearch(arr, value) {
    let start = 0
    let end = arr.length - 1
    let middle = Math.floor((start + end) / 2)

    while(arr[middle] !== value && start <= end) {
        if(value < arr[middle]) end = middle - 1;
        else start = middle + 1;
        middle = Math.floor((start + end) / 2);
    }
    return arr[middle] === value ? middle : -1
};
console.log(binarySearch([2,5,6,9,13,15,28,30],28))

Binary Search Big O
- Worst and average case - O(log n)
- Best Case - O(1)

String Search Naive Example
- Suppose you want to count the number of times a smaller string appears in a longer string
- A straightforward approach involves checking pairs of characters individually

Pseudocode
- Loop over the longer string
- Loop over the shorter string
- If the characters don't match, break out of the inner loop
- If the characters do match, keep going
- If you complete the inner loop and find a match, increment the count of matches
- Return the count

String Search Naive Solution
function naiveSearch(long, short) {
    let count = 0;

    for (let i = 0; i < long.length; i++) {
        for (let j = 0; j < short.length; j++) {
            if(short[j] !== long[i+j]) {
                console.log("Break!")
                break;
            }
            if(j === short.length - 1) {
                console.log("Found One!")
                count++;
            }
        }
    }
    return count;
};

console.log(naiveSearch("lorie loled", "lol")) // 1

*/