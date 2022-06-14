// Returning Functions //
function createFunction() {
    function multiplyBy2 (num) {
        return num*2
    }
    return multiplyBy2
};

const generatedFunc = createFunction() //Light Bulb - generatedFunc has zero connection with createFunction, simply because JS is a synchronous language. CreateFunction is stored in memory, and when executed, the return function is multiplyBy2, which returns the result. So generatedFunc is equal to the return result of the function createFunction. This is one of the underlying confusion behind JS and Closure. Now you can call generatedFunc as many times as you want because the function of multiplyBy2 is stored in Global Memory.
const result = generatedFunc(3) // When you run result, you are now creating a new Execution Context, where you take the argument of 3 and putting that in the function of generatedFunc. But how does it know to take the argument and set it as the parameter num? When this runs, JS isn't taking 3 and running it through createFunction, it has no interest in that function. 
console.log(result)
// But why do this? Why not just use createFunction in the result constant and pass the argument that way? Because saving / declaring / storing a function inside the execution context of running another function (saving inside its local memory), the returned function gets the most powerful property of JS that we can ask for, which is being stored in Global Memory.

// Nested Function Scope //
function outer() {
    let counter = 0;
    function incrementCounter () { counter ++ }
    return incrementCounter
}
const myNewFunction = outer()

console.log(myNewFunction());

// This is where you will learn about backpacks, which is how JS behind the scenes store data in global memory for the functions. The data now is persistant, and it's referenced/linked by a scoped property. Scope is the rules for any programmaing language for at any given line of code, what data do I have available to me? So if the data is stored in global memory, any function calling that data will include that in their scope.

// Lexical or static scope is key to how closure works. That is to say that where I save my function determines for the rest of that life, the life of that function, whenever it gets run under whatever new label it gets, what data it will have access to when that function runs. It can grab all the data behind the scenes and store it as a backpack of the function. JS is a lexical or statically scope language. PLSRD - Persistant Lexical Static Scope Reference Data, or backpack. In the industry though, this is called Closure. Whenever a function runs, and whatever function is in that function, that data is stored behind the scenes in Global Memory as a backpack and can be used in another function. It is persistant. 