/*
Selection Sort
- Similar to bubble sort, but instead of first placing large values into sorted position, it places small values into sorted position
- It doesn't swap until the loop goes through an iteration
- It compares 2 elements and the 2nd element keeps comparing with the 1st element. This goes through the iteration, and the smallest element is swapped with the first element

Selection Sort Pseudocode
- Store the first element as the smallest value you've seen so far
- Compare this item to the next item in the array until you find a smaller number
- If a smaller number is found, designate that smaller number to be the new "minimum" and continue until the end of the array
- If the "minimum" is not the value (index) you initially began with, swap the two values
- Repeat this with the next element until the array is sorted

Selection Sort Function
function selectionSort(arr) {
    for(let i = 0; i < arr.length; i++) {
        let lowest = i;
        for(let j = i + 1; j < arr.length; j++) {
            if(arr[j] > arr[lowest]) {
                lowest = j;
            }
        }
        if(i !== lowest) {
            let temp = arr[1];
            arr[i] = arr[lowest];
            arr[lowest] = temp;
        }
    }
    return arr;
};

console.log(selectionSort([34,22,10,19,17]));

Time Complexity - O(n^2)

Selection Sort might be better than Bubble - when there's a situation where you want to make less swaps. 

*/