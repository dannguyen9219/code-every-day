/*
Insertion, Selection, Bubble Sort are sorting algorithms that doesn't scale well

Faster Sorts
- There is a family of sorting algorithms that can improve time complexity from O(n^2) to O(n log n)
- There's a tradeoff between efficiency and simplicity
- The more efficient algorithms are much less simple, and generally take longer to understand

Merge Sort
- It's a combination of two things - merging and sorting
- Exploits the fact that arrays of 0 or 1 element are always sorted
- Works by decomposing an array into smaller arrays of 0 or 1 elements, then building up a newly sorted array
- In order to implement merge sort, it's useful to first implement a function responsible for merging two sorted arrays
- Given two arrays which are sorted, this helper function should create a new array which is also sorted, and consists of all of the elements in the two input arrays
- This function should run in O(n + m) time and O(n + m) space and should not modify the parameters passed to it

Pseudocode
- Create an empty array, take a look at the smallest values in each input array
- While there are still values we haven't looked at...
    If the value in the first array is smaller than the value in the seconde array, push the value in the first array into our results and move on to the next value in the first array
    If the value in the first array is larger than the value in the second array, push the value in the second array into our results and move on to the next value in the second array
    Once we exhaust one array, push in all remaining values from the other array
Done

Merge Arrays Example with 2 sorted arrays
function merge(arr1, arr2) {
    let results = [];
    let i = 0;
    let j = 0;

    while(i < arr1.length && j < arr2.length) {
        if(arr2[j] > arr1[i]) {
            results.push(arr1[i]);
            i++;
        }   else {
            results.push(arr2[j])
            j++;
        }
    }
    while(i < arr1.length) {
        results.push(arr1[i])
        i++;
    }
    while(j < arr2.length) {
        results.push(arr1[i])
        j++;
    }
    return results;
};
console.log(merge([1,10,50],[2,14,99,100]));


Merge Sort Example Pseudocode
- Break up the array into halves until you have arrays that are empty or have one element
- Once you have smaller sorted arrays, merge those arrays with other sorted arrays until you are back at the full length of the array
- Once the array has been merged back together, return the merged and sorted array

Merge Sort Example
function mergeSort(arr) {
    if(arr.length <= 1) return arr;

    let middle = Math.floor(arr.length / 2);
    let left = mergeSort(arr.slice(0,middle));
    let right = mergeSort(arr.slice(middle));

    return merge(left, right); // Code from above
};
console.log(mergeSort([10,24,76,73,72,1,9]))

Big O of mergeSort
Time Complexity Best, Average and Worst Case - O(n log n)
Space Complexity - O(n)

*/