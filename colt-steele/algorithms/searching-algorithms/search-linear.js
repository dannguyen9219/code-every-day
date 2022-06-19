/*
Searching Algorithms
- Describe what a searching algorithm is
- Implement linear search on arrays
- Implement binary search on sorted arrays
- Implement a naive string searching algorithm
- Implement the KMP string searching algorithm

Linear Search
Given an array, the simplest way to search for a value is to look at every element in the array and check if it's the value we want.

JavaScript has search!
There are many different search methods on arrays in JS. 
indexOf
includes
find
findIndex

These methods are checking each element behind the scenes.

Linear Search Pseudocode
- This function accepts an array and a value
- Loop through the array and check if the current array element is equal to the value
- If it is, return the index at which the element is found
- If the value is never found, return -1

Linear Search Exercise
Write a function called linearSearch which accepts an array and a value, and returns the index of which the value exists. If the value does not exist in the array, return -1.
linearSearch([9,8,7,6,5,4,3,2,1,0], 4) // 5

Solution:
function linearSearch(arr, value) {
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] === value) {
            return i
        }
    }
    return -1;
};

console.log(linearSearch([9,8,7,6,5,4,3,2,1,0], 4)) // O(n) time complexity

Linear Search Big O
Best case - O(1)
Average - O(n)
Worst - O(n)

*/