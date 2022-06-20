/*
Comparison Sorts
- Comparing two things, and only comparing most two things at the same time, and whether it's greater than or less than
- Are there faster sorting algorithms? Yes, but not doing comparison algorithms
- Best time complexity for sorting algorithms is O(n log n)

Radix Sort
- Not making comparisons
- Special sorting algorithm that works on lists of numbers
- It never makes comparisons between elements
- It exploits the fact that information about the size of a number is encoded in the number of digits
- More digits means a bigger number

Radix Sort Helpers
- In order to implement radix sort, it's helpful to build a few helper functions first:
- getDigit(num, place) - returns the digit in num at the given place value
- digitCount(num) - returns the number of digits in a number
- mostDigits(nums) - given an array of numbers, returns the number of digits in the largest numbers in the list

Radix Sort Helper Function - getDigit
function getDigit(num, i) {
    return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;
};
// This gets you the digit you are looking for in the number

getDigit(12345, 0); // 5
getDigit(12345, 1); // 4
getDigit(12345, 2); // 3
getDigit(12345, 3); // 2
getDigit(12345, 4); // 1
getDigit(12345, 5); // 0
(works the opposite way of getting an index position)

Radix Sort Helper Function - digitCount
funtion digitCount(num) {
    if(num === 0) return 1;
    return Math.floor(Math.log10(Math.abs(num))) + 1;
};
// This gets you the number of digits in the number

digitCount(1); // 1
digitCount(25); // 2
digitCount(314); // 3

Radix Sort Helper Function - mostDigits
function mostDigits(nums) {
  let maxDigits = 0;
  for (let i = 0; i < nums.length; i++) {
    maxDigits = Math.max(maxDigits, digitCount(nums[i]));
  }
  return maxDigits;
};
// This gets you the number of digits in the largest value in the array

mostDigits([1234, 56, 7]); // 4
mostDigits([1, 1, 11111, 1]); // 5
mostDigits([12, 34, 56, 78]); // 2


Radix Sort Pseudocode
- Define a function that accepts list of numbers
- Figure out how many digits the largest number has
- Loop from k = 0 up to this largest number of digits
- For each iteration of the loop:
    - Create buckets for each digit (0 to 9) // a bucket is a separate array
    - Place each number in the corresponding bucket based on its kth digit
- Replace our existing array with values in our buckets, starting with 0 and going up to 9
- Return list at the end!

Radix Sort Code
function radixSort(nums) {
    let maxDigitCount = mostDigits(nums);
    for(let k = 0; k < maxDigitCount; k++) {
        let digitBuckets = Array.from({length: 10}, () => []);
        for(let i = 0; i < nums.length; i++) {
            let digit = getDigit(nums[i],k);
            digitBuckets[digit].push(nums[i]);
        }
        nums = [].concat(...digitBuckets);
    }
    return nums;
};
console.log(radixSort([23,345,5467,12,2345,9852]));

Big O Complexity
Time Complexity - O(nk)
Space Complexity - O(n + k)


*/