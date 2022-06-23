/*
Stack
- Abstract data structure
- Collection of data
- LIFO data structure - Last In First Out
- The last element added to the stack will be the first element removed from the stack

How is it used?
- Think about a stack of plates, or a stack of markers, or a stack of....anything.
- As you pile it up the last thing (or the topmost thing) is what gets removed first.
- Remember, adding to the beginning and removing from the beginning is not good time complexity because everything else needs to be shifted down

We've seen this before
- Call stack

Where stacks are used
- Managing function invocations
- Undo / Redo
- Routing (the history object) like React.js
- Algorithms uses stacks to store the history of things we want to get back to


// Creating a Stack with an Array //
- There is more than one way of implementing a stack
- Concept - store data in such a way where the last thing added is the first to be removed, and vice versa
- Arrays are not as good as linked lists when it comes to Stack, but if you're doing push() or pop() then arrays are fine

/////////////////
let stack = [];

stack.push("google")
stack.push("yahoo")
stack.push("youtube")

stack // [google, yahoo, youtube]

stack.pop() // youtube
stack.push(amazon)

stack // [google, yahoo, amazon]
//////////////////

// Writing Stack from Scratch using Linked Lists //
- In Singly Linked Lists, remember that pop() functionality has to iterate through the whole list, so it's not constant time. Therefore, using shift() and unshift() makes more sense, but will be renamed

// Pushing Pseudocode //
- The function should accept a value
- Create a new node with that value
- If there are no nodes in the stack, set the first and last property to be the newly created node 
- If there is at least one node, create a variable that stores the current first property on the stack
- Reset the first property to be the newly created node
- Set the next property on the node to be the previously created variable
- Increment the size of the stack by 1

// Pop Pseudocode //
- If there are no nodes in the stack, return null
- Create a temporary variable to store the first property on the stack
- If there is only 1 node, set the first and last property to be null
- If there is more than one node, set the first property to be the next property on the current first
- Decrement the size by 1
- Return the value of the node removed

// Stack Code //
class Node {
    constructor(value){
        this.value = value;
        this.next = null;
    }
};

class Stack {
    constructor(){
        this.first = null;
        this.last = null;
        this.size = 0;
    }
    push(value) {
        let newNode = new Node(value);
        if(!this.first) {
            this.first = newNode;
            this.last = newNode;
        }   else {
            let temp = this.first;
            this.first = newNode;
            this.first.next = temp;
        }
        return ++this.size;
    }
    pop(value) {
        if(!this.first) return null;
        let temp = this.first;
        if(this.first === this.last) {
            this.last = null;
        }
        this.first = this.first.next;
        this.size--;
        return temp.value;
    }
};

- this is how you push and pop in a stack

// Big O of Stacks //
- Insertion - O(1)
- Removal - O(1)
- Searching - O(n)
- Access - O(n)

// Recap //
- Stacks are a LIFO data structure where the last value in is always the first one out.
- Stacks are used to handle function invocations (the call stack), for operations like undo/redo, and for routing (remember pages you have visited and go back/forward) and much more!
- They are not a built in data structure in JavaScript, but are relatively simple to implement
- Insert and remove are both O(1)


// Queues //
- Data structure that you add data in and data out
- FIFO - First In First Out
- In programming, used in background tasks, uploading resources, printing / task processing

- Enqueue - Adding to the beginning of the Queue!
- Dequeue - Removing from the beginning of the Queue!

// Building a Queue from scratch //
class Node {
    constructor(value){
        this.value = value;
        this.next = null;
    }
};

class Queue {
    constructor(){
        this.first = null;
        this.last = null;
        this.size = 0;
    }
    enqueue(value) {
        let newNode = new Node(value);
        if(!this.first) {
            this.first = newNode;
            this.last = newNode;
        }   else {
            this.last.next = newNode;
            this.last = newNode;
        }
        return ++this.size;
    }
    dequeue() {
        if(!this.first) return null;

        let temp = this.first;
        if(this.first === this.last) {
            this.last = null;
        }
        this.first = this.first.next;
        this.size--;
        return temp.value;
    }
};

// Big O of Queues //
- Insertion - O(1)
- Removal - O(1)
- Searching - O(n)
- Access - O(n)

*/