/*
Recursion
Martin and the Dragon example
A process (a function in our case) that calls itself
- Define what recursion is and how it can be used
- Understand the two essential components of a recursive function
- Visualize the call stack to better debug and understand recursive functions
- Use helper method recursion and pure recursion to solve more difficult problems

A function that calls itself. We've seen functions calling other functions. Why do we need to know this?

It's everywhere!
- JSON.parse / JSON.stringify - often written recursively based on the engine that the browser uses
- document.getElementById and DOM traversal algorithms
- Object traversal
- We will see it with more complex data structures
- It's sometimes a cleaner alternative to iteration

The Call Stack
It's a stack data structure
Any time a function is invoked it is placed (pushed) on the top of the call stack
When JS sees the return keyword or when the function ends, the complier will remove (pop)

With Recursive functions, we keep pushing new functions onto the call stack!

How Recrusive functions work
- Invoke the same function with a different input until you reach your base case!
- Base Case - The condition when the recursion ends. This is the most important concept to understand

So you need two essential parts - base case and different inputs

*/

/*
First Recursive Function
*/
function countDown(num){
    if(num <= 0) {
        console.log("All done!");
        return; // You need return here because it will keep going below 0
    }
    console.log(num);
    num--;
    countDown(num);
};

// console.log(countDown(5)) // Start at 5, subtract 1, and then call the function again

/*
Second Recrusive Function
*/
function sumRange(num) {
    if(num === 1) return 1; // base case
    return num + sumRange(num-1) // recursive call
};

// console.log(sumRange(5)) // 5 + 4 + 3 + 2 + 1 = 15

/*
Writing Factorial Iteratively and then Recursively
*/

// Iteratively - 4! - 4*3*2*1
function factorial(num) {
    let total = 1;
    for (let i = num; i > 0; i--) {
        total *= i
    }
    return total;
};
// console.log(factorial(4))

// Recursively - 4!
function factorialTwo(num) {
    if(num === 1) return 1; // base case
    return num * factorialTwo(num - 1) // recrusive call
};
// console.log(factorialTwo(4))

/*
Where things go wrong
- If no base case, functions can be called infinitely. The maximum number on the call stack will be exceeded.
- Forgetting to return or returning the wrong thing
- Stack overflow - maximum number of call stack exceeded

*/


/*
Helper Method Recursions - Design Pattern that is commonly used with Recursions
- Pattern where we have a outer function that is not recursive which calls an inner function that is recursive.

Example 1
function outer(input){
    
    var outerScopedVariable = []

    function helper(helperInput){
        // modify the outerScopedVariable
        helper(helperInput--) // This is calling itself recursively
    }
    
    helper(input)

    return outerScopedVariable;
}
*/

// Example 2 - find odd numbers with a helper function
function collectOddValues(arr){
    
    let result = []

    function helper(helperInput){
        if(helperInput.length === 0) {
            return; // Base Case
        }
        
        if(helperInput[0] % 2 !== 0){
            result.push(helperInput[0])
        }
        
        helper(helperInput.slice(1)) // Recursion
    }
    
    helper(arr)

    return result;
};
// console.log(collectOddValues([1,2,3,4,5,6,7,8,9]))

/*
Pure Recursion Method
Tips
- For arrays, use methods like slice, the spread operator, and concat that make copies of arrays so you do not mutate them
- Remember that strings are immutable so you will need to use methods like slice, substring to make copies of strings
- To make copies of objects use Object.assign, or the spread operator

Let's look at the same example for returning odd numbers

*/

// Example - pure recursion way
function collectOddValues(arr){
    let newArr = [];
    
    if(arr.length === 0) {
        return newArr; // base case
    }
        
    if(arr[0] % 2 !== 0){
        newArr.push(arr[0]);
    }
        
    newArr = newArr.concat(collectOddValues(arr.slice(1))); // recursion - we use concat to push the odd number to the array every time
    return newArr;
};
console.log(collectOddValues([1,2,3,4,5,6,7,8,9]))