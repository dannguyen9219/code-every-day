/*
// Trees //
- Commonly used around the world
- A data structure that consists of nodes in a parent / child relationship
- Nodes can connect with other nodes like branches
- Nonlinear
- Trees are not graphs - a sibling cannot point to another sibling, a parent cannot point to another parent, a parent cannot point to a sibling with another parent
- Trees have only one entry point - which is a Root - top node of the tree

// Tree Terminology //
- Root - The top node in a tree.
- Child -A node directly connected to another node when moving away from the Root.
- Parent - The converse notion of a child.
- Siblings -A group of nodes with the same parent.
- Leaf - A node with no children.
- Edge - The connection between one node and another.

// Types of Trees //
- Trees
- Binary Trees
- Binary Search Trees

// Real world Trees //
- HTML DOM
- Network Routing
- Abstract Syntax Tree
- Artificial Intelligence
- Folders in the operating system
- JSON

// Binary Search Trees //
- Every parent node has at most two children
- Every node to the left of a parent node is always less than the parent
- Every node to the right of a parent node is always greater than the parent

// BST Code //
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
};

let tree = new BinarySearchTree();
tree.root = new Node(10);
tree.root.right = new Node(15);
tree.root.left = new Node(7);
tree.root.left.right = new Node(9);

// BST Insert a Node Pseudocode //
Steps - Iteratively or Recursively
- Create a new node
- Starting at the root
    - Check if there is a root, if not - the root now becomes that new node!
    - If there is a root, check if the value of the new node is greater than or less than the value of the root
    - If it is greater 
        - Check to see if there is a node to the right
            - If there is, move to that node and repeat these steps
            - If there is not, add that node as the right property
    - If it is less
        - Check to see if there is a node to the left
            - If there is, move to that node and repeat these steps
            - If there is not, add that node as the left property
End

// BST Insert Code //
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
};


// Finding a Node in BST //
Steps - Iteratively or Recursively

- Starting at the root
    - Check if there is a root, if not - we're done searching!
    - If there is a root, check if the value of the new node is the value we are looking for. If we found it, we're done!
    - If not, check to see if the value is greater than or less than the value of the root
    - If it is greater 
        - Check to see if there is a node to the right
            - If there is, move to that node and repeat these steps
            - If there is not, we're done searching!
    - If it is less
        - Check to see if there is a node to the left
            - If there is, move to that node and repeat these steps
            - If there is not, we're done searching!
End


// BST Finding Node Code //
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
};


// Big O of BST //
Insertion - O(log n) - best and average case
Searching - O(log n) - best and average case

*/