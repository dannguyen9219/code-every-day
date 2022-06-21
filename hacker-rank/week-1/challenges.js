/*
Plus Minus - Given an array of integers, calculate the ratios of its elements that are positive, negative, and zero. Print the decimal value of each fraction on a new line with 6 places after the decimal.

// Positive and negative integers, and zero. First you have to find the number of integers you have in the array. 

arr = [-4, 3, -9, 0, 4, 1]

function plusMinus(arr) {
    // Write your code here
    // Loop through arr, compare integer if integer
    let positiveArr = []
    let negativeArr = []
    let zeroArr = []
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
            positiveArr.push(arr[i])
        }   else if (arr[i] < 0) {
            negativeArr.push(arr[i])
        }   else {
            zeroArr.push(arr[i])
        }
    }
    let positiveOutcome = positiveArr.length / arr.length
    let negativeOutcome = negativeArr.length / arr.length
    let zeroOutcome = zeroArr.length / arr.length
    console.log(positiveOutcome.toFixed(6) + "\n" + negativeOutcome.toFixed(6) + "\n" + zeroOutcome.toFixed(6))
}

*/

/*
Given a time in 12-hour AM/PM format, convert it to military (24-hour) time.
Note: - 12:00:00AM on a 12-hour clock is 00:00:00 on a 24-hour clock. 
- 12:00:00PM on a 12-hour clock is 12:00:00 on a 24-hour clock.

function timeConversion(s) {
    // Write your code here
    const arr = s.split('')
    const hourArr = [arr[0], arr[1]]
    let hour = parseInt(hourArr.join(''))
    let result = arr.join('')
    arr.pop()
    arr.pop()
    
    if(s.includes("PM")){
        if(hour !== 12) {
            hour += 12
        }
        let hourStr = hour.toString().split('')
        arr.shift()
        arr.shift()
        arr.unshift(hourStr[1])
        arr.unshift(hourStr[0])
        result = arr.join('')
    }   else if (s.includes('AM') && hour === 12) {
        hour -= 12
        let hourStr = hour.toString().split('')
        hourStr.push('0')
        arr.shift()
        arr.shift()
        arr.unshift(hourStr[1])
        arr.unshift(hourStr[0])
        result = arr.join('')
    }
    return result
};

// Another solution
function timeConversion(s) {
    // Write your code here 11:11:11AM
    const format = s.substring(s.length - 2);
    let hour = s.substring(0, 2);
    const minusSecond = s.substring(2, 8);
    if (format == "AM") {
        hour = hour == 12 ? '00' : hour;
    }
    if (format == "PM") {
        hour = +hour + 12 < 24 ? +hour + 12 : '12';
    }
    return hour + "" + minusSecond;
}

*/

// Mini-Max Sum //
/*
Given five positive integers, find the minimum and maximum values that can be calculated by summing exactly four of the five integers. Then print the respective minimum and maximum values as a single line of two space-separated long integers.
*/

/*
function miniMaxSum(arr) {
    // let sum = arr.sort().reduce((a, b) => a + b, 0)
    // return(sum-arr[arr.length-1], sum-arr[0])
    // let arr = [1,2,3,4,5]
    let sum = arr.reduce((a, b) => a + b);
    console.log(sum)
    let maxValue = Math.max(...arr)
    let minValue = Math.min(...arr);
    console.log(maxValue)
    console.log(minValue)
    console.log((sum - maxValue) + ' ' + (sum - minValue));
}
// [10, 14]
*/

// Breaking the Records //
/*
Maria plays college basketball and wants to go pro. Each season she maintains a record of her play. She tabulates the number of times she breaks her season record for most points and least points in a game. Points scored in the first game establish her record for the season, and she begins counting from there.
*/

/*
function breakingRecords(scores) {
    let games = scores;
    let min = games[0];
    let max = games[0];
    
    let minRecord = 0;
    let maxRecord = 0;
    
    for (let i = 0; i < scores.length; i++) {
        if(scores[i] > max) {
            max = scores[i]
            maxRecord++
        }
        if(scores[i] < min) {
            min = scores[i]
            minRecord++
        }
    }
    return [maxRecord, minRecord]
};
console.log(breakingRecords([10,5,20,20,4,5,2,25,1])); 
*/

// Camel Case 4 //
/*
Camel Case is a naming style common in many programming languages. In Java, method and variable names typically start with a lowercase letter, with all subsequent words starting with a capital letter (example: startThread). Names of classes follow the same pattern, except that they start with a capital letter (example: BlueCar).

Your task is to write a program that creates or splits Camel Case variable, method, and class names.
*/

/*
function processData(input) {
    //Enter your code here
    const inputArr = input.split('\n')
    inputArr.forEach(line => {
        const arr = line.split(';')
        const str = arr[2].split('')
        let res = ''
        
        if(arr[0] === 'S') {
            str.forEach(char => {
                if(char === char.toUpperCase()) {
                    char = char.toLowerCase()
                    res += ' '
                }
                if(char !== '(' && char !== ')') res += char
            })
            if(arr[1] === 'C') res = res.slice(1)
            
        } else if(arr[0] === 'C') {
            for(let idx = 0; idx < str.length; idx++) {
                if(str[idx] === ' ') {
                    res += str[idx + 1].toUpperCase()
                    idx++
                } else res += str[idx]
            }
            arr[1] === 'V' ? res = res.charAt(0).toLowerCase() + res.slice(1) : false
            arr[1] === 'C' ? res = res.charAt(0).toUpperCase() + res.slice(1) : false
            if(arr[1] === 'M') {
                res = res.slice(0, -1)
                res += '()'
            }
        } else {
            // console.log('invalid input')
        }
        console.log(res)
    })
} 
*/

// Divisible Sum Pairs //
/*
Given an array of integers and a positive integer k, determine the number of (i,j) pairs where i < j and ar[i] + ar[j] is divisible by k.

Example
ar = [1,2,3,4,5,6]
k = 5

Three pairs meet the criteria: [1,4], [2,3] and [4,6].
*/

/* Solution
function divisibleSumPairs(n, k, ar) {
    // Write your code here
    let result = 0;
    for (let i = 0; i < n; i++) {
        for (let j = i+1; j < n; j++){
            if ( (ar[i] + ar[j]) % k === 0) {
                result++;
            }
        }
    }
    return result;
};
console.log(divisibleSumPairs(n, 5, [1,2,3,4,5,6]))
*/

// Sparse Arrays //
/*
There is a collection of input strings and a collection of query strings. For each query string, determine how many times it occurs in the list of input strings. Return an array of the results.

Example
strings = ['ab', 'ab', 'abc']
queries = ['ab', 'abc', 'bc']

There are 2 instances of 'ab', 1 of 'abc', and 0 of 'bc'. For each query, add an element to the return array, results = [2,1,0]

*/
/* Solution
function matchingStrings(strings, queries) {
    let results = [];

    for (let q of queries) {
        let count = 0;
        for (let s of strings) {
            if (q === s) {
                count++;
            }
        }
        results.push(count);
    } 
    return results;   
};
console.log(matchingStrings(['ab', 'ab', 'abc'], ['ab', 'abc', 'bc']));

*/
