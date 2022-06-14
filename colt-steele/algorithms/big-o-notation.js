/*
Objectives: Why we need Big O Notation
Simplify Big O Expressions
Define time complexity and space complexity

Big O is about algorithms and how we run them. There are many ways to solve tasks. Big O is a way to generalize code and compare it with other code. We're trying to find the 'best' way to solve the task. Gives us a numeric value on how our code performs. Performance matters when working with big code data. You want to save time and space. When code slows down or crashes, you can identify parts of the code that are inefficient. 

Big O Notation is a way to formalize fuzzy counting. Allows us to talk formally about how the runtime of an algorithm gorws as the inputs grow. Only care about the broad trends.

We say that an algorithm is O(f(n)) if the number of simple operations the computer has to do is eventually less than a constant times f(n), as n increases. Can be linear, quadratic, constant, or something entirely different. And we only care about the upper limit of the trend.

Simplifying Big O Expressions - we care about the broadest trends. O(2n) -> O(n); O(500) -> O(1), etc.

Big O Shorthands
Arithmetic operations are constant (+ - / *)
Variable assignment is constant (x = 1000)
Accessing elements in an array (by index) or object (by key) is constant
In a loop, the complexity is the length of the loop times the complexity of whatever happens inside of the loop

*/

// Example 1 - Add Sum - Write a function that calculates the sum of all numbers from 1 up to some number n. This is O(n)
function addUpTo(n) {
    let total = 0
    for (let i = 1; i <= n; i++) {
        total += i
    }
    return total
};

// console.log(addUpTo(10));

// Or you can write it like this
function addUpTo2nd(n) {
    return n * (n + 1) / 2
};

//console.log(addUpTo2nd(10))

// They return the same thing. So which one is better? But what is better? Does it mean faster, less memory used, or more readibility? Faster and less memory sometimes are more beneficial than readibility. This is O(1)

// Comparing Time - Why not use timers to visualize this?

let t1 = performance.now();
addUpTo(1000000000);
let t2 = performance.now();
//console.log(`Time Elapsed: ${(t2 - t1) / 1000} seconds.`)

let time1 = performance.now();
addUpTo2nd(1000000000);
let time2 = performance.now();
//console.log(`Time Elapsed: ${(time2 - time1) / 1000} seconds.`)

// As you can see addUpTo2nd is a lot faster. However, the problem with time is that different machines will record different times... even the same machine will record different times. For even faster algorithms, speed measurements may not be precise enough.

// Counting Operations - let's count the number of simple operations the computer has to perform. In the addUpTo2nd code, there are 3 operations - multiply, add, and divide - that's it. In addUpTo, there is one operation in the code, but it's a loop, so it's n operation(s). However, there are also n assignment(s), n comparison(s). As n grows, the number of operations grow in proportion with n.

// Example 2
function countUpAndDown(n) {
    console.log("Going up!");
    for (let i = 0; i < n; i++) {
      console.log(i);
    }
    console.log("At the top!\nGoing down...");
    for (let j = n - 1; j >= 0; j--) {
      console.log(j);
    }
    console.log("Back down. Bye!");
}

//console.log(countUpAndDown(10));

// Here the first part of the function that is going up is O(n). Same thing for going back down, O(n). Is it O(2n)? No, this function is O(n).

// Example 3 //
function printAllPairs(n) {
    for (var i = 0; i < n; i++) {
      for (var j = 0; j < n; j++) {
        console.log(i, j);
      }
    }
}

//console.log(printAllPairs(5))

// The first for loop is O(n), and the second loop is O(n). The second loop is a nested loop, so now this function is O(n^2). This is an exponential curve, so as n grows, the time it takes grows exponentially.

// Example 4 //
function logAtLeast5(n) {
    for (var i = 1; i <= Math.max(5, n); i++) {
      console.log(i);
    }
}

//console.log(logAtLeast5(10))

//This is O(n) since as n grows, the loop iterates n times.

/* Space Complexity
We can also use Big O Notation to analyze space complexity: how much additional memory do we need to allocate in order to run the code in our algorithm. You'll also hear the term Auxiliary Space Complexity to refer to space required by the algorithm, not including space taken up by the inputs. 

Rules of Thumb
Most primitives (booleans, numbers, undefined, null) are constant space
Strings require O(n) space (where n is the string length)
Reference types are generally O(n), where n is the length (for arrays) or the number of keys (for objects)

*/

// Example 5 - Space Complexity //
function sum(arr) {
    let total = 0;
    for (let i = 0; i < arr.length; i++) {
      total += arr[i];
    }
    return total;
}

// Here in this example, we are looking at the space for this function. There are 2 variables. No matter the size of the input, there will be just 2 variables. So this is O(1) space.

// Example 6 - Space Complexity //
function double(arr) {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
      newArr.push(2 * arr[i]);
    }
    return newArr;
}

console.log(double([1,2,3]))

// Here, as the array gets bigger and bigger, the space that is getting taken up is proportionate to n as it grows. So this is O(n) space

/* Logarithms 
Sometimes Big O expressions involve more complex math. Logarithms and exponents are paired. They do the opposite of exponents.

log2(8) = 3 --> 2^3 = 8

We care about the big picture, so when talking about log, it's just log with no subscript.

Rule of Thumb
The logarithm of a number roughly measures the number of times you can divide that number by 2 before you get a value that's less than or equal to one.

8 / 2 = 4 / 2 = 2 / 2 = 1 : so this is Log of 3

Why use log? Certain searching algorithms have logarithmic time complexity. Efficient sorting algorithms involve logarithms. Recursion sometimes involves logarithmic space complexity. 

*/