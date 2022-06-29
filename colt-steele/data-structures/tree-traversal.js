/*
// Tree Traversal //
- Not ordered in anyway
- Visit every node once in order to find data
- Many ways to traverse a tree
- Two ways to traverse a tree
- Breadth-first Search
- Depth-first Search - Preorder and Postorder

// Breadth First Search - BFS //
- Visit every node on the same level - sibling level - horizontally

// BFS Pseudocode //
- Create a queue (this can be an array) and a variable to store the values of nodes visited
- Place the root node in the queue
- Loop as long as there is anything in the queue
    - Dequeue a node from the queue and push the value of the node into the variable that stores the nodes
    - If there is a left property on the node dequeued - add it to the queue
    - If there is a right property on the node dequeued - add it to the queue
- Return the variable that stores the values

// BFS Code //
class Node {
    constructor(value){
        this.value = value;
        this.left = null;
        this.right = null;
    }
};

class BinarySearchTree {
    constructor(){
        this.root = null;
    }
    insert(value) {
        let newNode = new Node(value);
        if(this.root === null) {
            this.root = newNode;
            return this;
        }   else {
            let current = this.root;
            while(true) {
                if(value === current.value) return undefined;
                if(value < current.value) {
                    if(current.left === null) {
                        current.left = newNode;
                        return this;
                    }   else {
                        current = current.left;
                    }
                }   else if(value > current.value) {
                    if(current.right === null) {
                        current.right = newNode;
                        return this;
                    }   else {
                        current = current.right;
                    }
                }
            }
        }
    }
    contains(value) {
        if(this.root === null) return false;
        let current = this.root,
            found = false;
        while(current && !found) {
            if(value < current.value) {
                current = current.left;
            }   else if(value > current.value) {
                current = current.right;
            }   else {
                found = true;
            }
        }
        return false;
    }
    BFS() {
        let data = [];
        let queue = [];
        let node = this.root;
        queue.push(node);
        while(queue.length) {
            node = queue.shift();
            data.push(node);
            if(node.left) queue.push(node.left);
            if(node.right) queue.push(node.right);
        }
        return data;
    }
};

// DFS - PreOrder - Pseudocode //
- Steps - Recursively
- Visit the node first, go left side, and then right side after
- Create a cariable to store the values of nodes visited
- Store the root of the BST in a variable called current
- Write a helper function which accepts a node
    - Push the value of the node to the variable that stores the values
    - If the node has a left property, call the helper function with the left property on the node
    - If the node has a right property, call the helper function with the right property on the node
- Invoke the helper function with the current variable
- Return the array of values

// DFS PreOrder Code //
class BinarySearchTree {
    constructor(){
        this.root = null;
    }
    insert(value) {
        let newNode = new Node(value);
        if(this.root === null) {
            this.root = newNode;
            return this;
        }   else {
            let current = this.root;
            while(true) {
                if(value === current.value) return undefined;
                if(value < current.value) {
                    if(current.left === null) {
                        current.left = newNode;
                        return this;
                    }   else {
                        current = current.left;
                    }
                }   else if(value > current.value) {
                    if(current.right === null) {
                        current.right = newNode;
                        return this;
                    }   else {
                        current = current.right;
                    }
                }
            }
        }
    }
    contains(value) {
        if(this.root === null) return false;
        let current = this.root,
            found = false;
        while(current && !found) {
            if(value < current.value) {
                current = current.left;
            }   else if(value > current.value) {
                current = current.right;
            }   else {
                found = true;
            }
        }
        return false;
    }
    BFS() {
        let data = [];
        let queue = [];
        let node = this.root;
        queue.push(node);
        while(queue.length) {
            node = queue.shift();
            data.push(node);
            if(node.left) queue.push(node.left);
            if(node.right) queue.push(node.right);
        }
        return data;
    }
    DFSPreOrder() {
        let data = [];
        let current = this.root;
        function traverse(node.value) {
            data.push(node);
            if(node.left) traverse(node.left);
            if(node.right) traverse(node.right);
        }
        traverse(current);
        return data;
    }
};

// DFS - PostOrder Pseudocode //
- Visit a node after we look at the left and the right
- Start at the bottom, explore all children, then the root is the last node
- Steps - Recursively
- Create a variable to store the values of nodes visited
- Store the roote of the BST in a variable valled current
- Write a helper function which accepts a node
    - If the node has a left property, call the helper function with the left property on the node
    - If the node has a right poperty, call the helper function with the right property on the node
    - Push the value of the node to the variable that stores the values
    - Invoke the helper function with the current variable
- Return the array of values

// DFS - PostOrder Code //
class BinarySearchTree {
    constructor(){
        this.root = null;
    }
    insert(value) {
        let newNode = new Node(value);
        if(this.root === null) {
            this.root = newNode;
            return this;
        }   else {
            let current = this.root;
            while(true) {
                if(value === current.value) return undefined;
                if(value < current.value) {
                    if(current.left === null) {
                        current.left = newNode;
                        return this;
                    }   else {
                        current = current.left;
                    }
                }   else if(value > current.value) {
                    if(current.right === null) {
                        current.right = newNode;
                        return this;
                    }   else {
                        current = current.right;
                    }
                }
            }
        }
    }
    contains(value) {
        if(this.root === null) return false;
        let current = this.root,
            found = false;
        while(current && !found) {
            if(value < current.value) {
                current = current.left;
            }   else if(value > current.value) {
                current = current.right;
            }   else {
                found = true;
            }
        }
        return false;
    }
    BFS() {
        let data = [];
        let queue = [];
        let node = this.root;
        queue.push(node);
        while(queue.length) {
            node = queue.shift();
            data.push(node);
            if(node.left) queue.push(node.left);
            if(node.right) queue.push(node.right);
        }
        return data;
    }
    DFSPreOrder() {
        let data = [];
        let current = this.root;
        function traverse(node.value) {
            data.push(node);
            if(node.left) traverse(node.left);
            if(node.right) traverse(node.right);
        }
        traverse(current);
        return data;
    }
    DFSPostOrder() {
        let data = [];
        function traverse(node) {
            if(node.left) traverse(node.left);
            if(node.right) traverse(node.right);
            data.push(node.value);
        }
        traverse(this.root);
        return data;
    }
};

// DFS InOrder Pseudocode //
- Steps - Recursively
- Create a variable to store the values of nodes visited
- Store the roote of the BST in a variable valled current
- Write a helper function which accepts a node
    - If the node has a left property, call the helper function with the left property on the node
    - Push the value of the node to the variable that stores the values
    - If the node has a right poperty, call the helper function with the right property on the node
- Invoke the helper function with the current variable
- Return the array of values

// DFS InOrder Code //
class BinarySearchTree {
    constructor(){
        this.root = null;
    }
    insert(value) {
        let newNode = new Node(value);
        if(this.root === null) {
            this.root = newNode;
            return this;
        }   else {
            let current = this.root;
            while(true) {
                if(value === current.value) return undefined;
                if(value < current.value) {
                    if(current.left === null) {
                        current.left = newNode;
                        return this;
                    }   else {
                        current = current.left;
                    }
                }   else if(value > current.value) {
                    if(current.right === null) {
                        current.right = newNode;
                        return this;
                    }   else {
                        current = current.right;
                    }
                }
            }
        }
    }
    contains(value) {
        if(this.root === null) return false;
        let current = this.root,
            found = false;
        while(current && !found) {
            if(value < current.value) {
                current = current.left;
            }   else if(value > current.value) {
                current = current.right;
            }   else {
                found = true;
            }
        }
        return false;
    }
    BFS() {
        let data = [];
        let queue = [];
        let node = this.root;
        queue.push(node);
        while(queue.length) {
            node = queue.shift();
            data.push(node);
            if(node.left) queue.push(node.left);
            if(node.right) queue.push(node.right);
        }
        return data;
    }
    DFSPreOrder() {
        let data = [];
        let current = this.root;
        function traverse(node.value) {
            data.push(node);
            if(node.left) traverse(node.left);
            if(node.right) traverse(node.right);
        }
        traverse(current);
        return data;
    }
    DFSPostOrder() {
        let data = [];
        function traverse(node) {
            if(node.left) traverse(node.left);
            if(node.right) traverse(node.right);
            data.push(node.value);
        }
        traverse(this.root);
        return data;
    }
    DFSInOrder() {
        let data = [];
        function traverse(node) {
            if(node.left) traverse(node.left);
            data.push(node.value);
            if(node.right) traverse(node.right);
        }
        traverse(this.root);
        return data;
    }
};

// When to use BFS and DFS //
- It depends, they both have pros and cons
- Breadth vs Depth
- Breadth - when the tree is big, you have to store a lot of nodes, so the space is large
- Depth - Use less space, fewer nodes to keep track of

// Recap //
- Trees are non-linear data structures that contain a root and child nodes
- Binary Trees can have values of any type, but at most two children for each parent
- Binary Search Trees are a more specific version of binary trees where every node to the left of a parent is less than it's value and every node to the right is greater
- We can search through tress using BFS and DFS


*/