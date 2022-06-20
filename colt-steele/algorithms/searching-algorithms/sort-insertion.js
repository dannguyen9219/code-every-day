/*
Insertion Sort
- Similar to selection sort
- Builds up the sort by gradually creating a larger left half which is always sorted

Insertion Sort Pseudocode
- Start by picking the second element in the array
- Now compare the second element with the one before it and swap if necessary
- Continue to the next element an if it is in the incorrect order, iterate through the sorted portion (ie the left side)
to place the element in the correct place
- Repeat until the array is sorted

Insertion Sort Example
function insertionSort(arr) {
    for(let i = 1; i < arr.length; i++) {
        let currentValue = arr[i];
        for(let j = i - 1; j >= 0 && arr[j] > currentValue; j--) {
            arr[j + 1] = arr[j]
        }
        arr[j + 1] = currentValue;
    }
    return arr;
};
console.log(insertionSort([2,1,9,76,0]))

Time Complexity - worse case will be O(n^2)

Insertion Sort is good for already established sorted data, and receiving new data from users. We can place the new numbers where it should go because data is already sorted. 

*/