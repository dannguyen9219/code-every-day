/*
Problem 1
Write a function which accepts a base an an exponent. It should return the result of raising the base to that exponent. This function should mimic the functionality of Math.pow().
power(2,4) //16
power(3,2) //9
power(3,3) //27

*/

/*
Problem 2
Write a function factorial which accepts a number and returns the factorial of that number. Factorial zero is always 1.

*/

/*
Problem 3
Write a function called productOfArray which takes in an array of numbers and returns the product of them all.
productOfArray([1,2,3])    // 6
productOfArray([1,2,3,10]) // 60

*/

/*
Problem 4
Write a function called recrusiveRange which accepts a number and adds up all the numbers from 0 to the number passed to the function.
recursiveRange(6) // 21

*/

/*
Problem 5
Write a recursive function called fib which accepts a number and returns the nth number in the Fibonacci sequence. Recall that the Fibonacci sequence is the sequence of whole numbers 1, 1, 2, 3, 5, 8, ... which starts with 1 and 1, and where every number thereafter is equal to the sume of the previous two numbers.
fib(4) // 3
fib(10) // 55

*/

/*
Problem 6
Write a recrusive function called reverse which accepts a string and treturns a new string in reverse
reverse('awesome') // 'emosewa'

*/

/*
Problem 7
Write a recrusive function called isPalindrome which returns true if the string passed to it is a palindrome.
isPalindrome('tacocat') // true

*/

/*
Problem 8
Write a recursive function called someRecursive which accepts an array and a callback. The function returns true if a single value in the array returns true when passed to the callback. Other it returns false.
const isOdd = val => val % 2 !== 0
someRecursive([1,2,3,4], isOdd) // true

*/

/*
Problem 9
Write a recursive function called flatten which accepts an array of arrays and returns a new array with all values flattened.
flatten([1,2,3,[4,5]]) // [1,2,3,4,5]

*/

/*
Problem 10
Write a recursive function called capitalizeFirst. Given an arry of strings, capitalize the first letter of each string in the array.
capitalizeFirst(['car', 'taco', 'banana']) // ['Car', 'Taco', 'Banana']

*/

/*
Problem 11
Write a recursive function called nestedEvenSum. Return the sum of all even numbers in an object which may contain nested objects.
function nestedEvenSum () {
  // add whatever parameters you deem necessary - good luck!
}


var obj1 = {
  outer: 2,
  obj: {
    inner: 2,
    otherObj: {
      superInner: 2,
      notANumber: true,
      alsoNotANumber: "yup"
    }
  }
}

var obj2 = {
  a: 2,
  b: {b: 2, bb: {b: 3, bb: {b: 2}}},
  c: {c: {c: 2}, cc: 'ball', ccc: 5},
  d: 1,
  e: {e: {e: 2}, ee: 'car'}
};

nestedEvenSum(obj1); // 6
nestedEvenSum(obj2); // 10

*/

/*
Problem 12
Write a recursive function called capitalizeWords. Given an array of words, return a new array containing each word capitalized.
// let words = ['i', 'am', 'learning', 'recursion'];
// capitalizedWords(words); // ['I', 'AM', 'LEARNING', 'RECURSION']

*/

/*
Problem 13
Write a function called stringifyNumbers which takes in an object and finds all of the values which are numbers and converts them to strings.
let obj = {
    num: 1,
    test: [],
    data: {
        val: 4,
        info: {
            isRight: true,
            random: 66
        }
    }
}


stringifyNumbers(obj)


{
    num: "1",
    test: [],
    data: {
        val: "4",
        info: {
            isRight: true,
            random: "66"
        }
    }
}

*/

/*
Problem 14
Write a function called collectStrings which accepts an object and returns an array of all the values in the object that have a typeof string.
const obj = {
    stuff: "foo",
    data: {
        val: {
            thing: {
                info: "bar",
                moreInfo: {
                    evenMoreInfo: {
                        weMadeIt: "baz"
                    }
                }
            }
        }
    }
}

collectStrings(obj) // ["foo", "bar", "baz"])

*/