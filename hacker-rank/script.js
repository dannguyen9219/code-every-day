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