// Promises //
/*
Before, when running the callback queue, there was not an ideal way to keep track of all the tasks that are on memory in JS. Yes, it's keeping tracked through the web browser features. Essentially, it would be great to keep track data from JS and the internet. 

Promises are introduced in ES6. You would use the Fetch method to keep track of code that runs in JS and the web browser and connects each other. It replaces a placeholder object, called a promise. Fetch sets up the environment to speak to the internet. It uses technology from the web browser to speak to the internet, and return data to JS as promises.

99% of developers don't know how Promises work under the hood, which leads to failed interviews and debugging problems.

*/

// Example 1
function display(data) {
    console.log(data)
}

const futureData = fetch('https://twitter.com/will/tweets/1') // Two pronged attack. In JS, the fetch will send a promise object and has 2 properties: value and unfulfilled (empty array). 2nd Pronged attack. Once the browser sees fetch, it will run in the background to run the code over the internet - this is Network Request. The browser will need the IP address and the path to know where to get the data. It will go to twitter.com and path of /will/1. This is using the GET method. The Network Request sends a GET method to Twitter HQ. When the request completes, the promise object now will have the value updated to the data that was sent back to the Network Request. This promise object is now stored as futureData in Global Memory. 

futureData.then(display) // In the promise object, there is still an emptied array (unfulfilled). We can now run code to fill that array with data that has been gathered from fetch. Once the value property in the promise object is updated, it will trigger the autofill to store the data in the empty array. JS has a method to display the new data, which is the then method. 


console.log("Me first!")

// Example 2
function display(data) {
    console.log(data)
}
function printHello() {
    console.log('Hello')
}
function blockFor300ms() {
    // Block JS thread for 300ms
}

setTimeout(printHello, 0)

const futureData2 = fetch('https://twitter.com/will/tweets/1')
futureData2.then(display)

blockFor300ms()
console.log("Me first!")