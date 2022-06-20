/*
Elementary Sorting Algorithms
Sorting is the process of rearranging the items in a collection so that the items are in some kind of order.
- Sorting numbers from smallest to largest
- Sorting names alphabetically
- Sorting movies based on release year, revenue

Why do we need to learn this?
- Sorting is an incredibly common task, so it's good to know how it works
- There are many different ways to sort things, and different techniques have their own advantages and disadvantages

JS has a sort method...
.sort() - sort by unicode for strings

Telling JS how to sort
- The built-in sort method accepts an optional comparator function
- You can use this comparator function to tell JS how you want it to sort
- The comparator looks at pairs of elements (a and b), determines their sort order based on the return value
 - If it returns a negative number, a should come before b
 - If it returns a positive number, a should come after b
 - if it returns 0, a and b are the same as far as the sort is concerned

Example
function numberCompare(num1, num2) {
  return num1 - num2;
}

[ 6, 4, 15, 10 ].sort(numberCompare);
// [ 4, 6, 10, 15 ]

Example 2
function compareByLen(str1, str2) {
  return str1.length - str2.length;
}

[ "Steele", "Colt", "Data Structures", "Algorithms" ]
  .sort(compareByLen);
// [ "Colt", "Steele", "Algorithms", "Data Structures" ]

Bubble Sort
A sorting algorithm where the largest values bubble up to the top. Basically swapping elements and comparing them, moving larger values towards the end, or vice versa. 

Swapping is an important task when it comes to Bubble Sort. The function that is behind swapping is this tried and true way.
// ES5
function swap(arr, idx1, idx2) {
  var temp = arr[idx1];
  arr[idx1] = arr[idx2];
  arr[idx2] = temp;
}

// ES2015
const swap = (arr, idx1, idx2) => {
  [arr[idx1],arr[idx2]] = [arr[idx2],arr[idx1]];
}

Bubble Sort Pseudocode
- Start looping from the end of the array towards the beginning with a variable called i at 
- Start an inner loop with a variable called j from the beginning until i - 1
- If arr[j] is greater than arr[j+1], swap those two values
- Return the sorted array

Less Optimize Bubble Sort Example
function bubbleSort(arr) {
    for(let i = arr.length; i > 0; i--) {
        for(let j = 0; j < i - 1; j++) {
            if(arr[j] > arr[j+1]) {
                // SWAP
                let temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
            }
        }
        console.log("One Pass Completed!")
    }
    return arr;
};

console.log(bubbleSort([37,45,29,8,12,88,-3]));

Optimized Bubble Sort Example
function bubbleSort(arr) {
    let noSwaps;
    for(let i = arr.length; i > 0; i--) {
        noSwaps = true;
        for(let j = 0; j < i - 1; j++) {
            if(arr[j] > arr[j+1]) {
                // SWAP
                let temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
                noSwaps = false;
            }
        }
        if(noSwaps) break;
    }
    return arr;
};

console.log(bubbleSort([8,1,2,3,4,5,6,7])); // This will stop the number of passes for the loop once there are no swaps on in the loop.

Time complexity for Bubble Sort is O(n^2) for the less optimized version. In the optimized version, best case is O(n).


*/