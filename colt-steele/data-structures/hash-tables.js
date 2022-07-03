/*
// Hash Tables / Hash Map //
- Hash tables are used to store key-value pairs
- They are like arrays, but the keys are not ordered
- Unlike arrays, hash tables are fast for all of the following operations: finding values, adding new values, and removing values
- Hash tables are in most programming languages - they're everywhere
- Because of their speed, hash tables are very commonly used
- Python has dictionaries
- JS has Objects and Maps
- Java, Go, Scala have Maps
- Ruby has Hashes

// Implementing a Hash Table //
We will be implementing Hash Tables on our own, even though these languages have built-in mapping
Example: an array of hex colors vs a table with colors pointing to their hex numbers
How can we get human-readability and computer readability?
Computers don't know how to find an element at index "pink"!

To implement a hash table, we'll be using an array

In order to look up values by key, we need a way to convert keys into valid array indices

A function that performs this task is called a hash function

// Hash Functions //
- Hash functions are used everywhere: to store data, use data, authentication, encrypt data, cryptology
- A function that takes data of an arbituary size and maps it to a fixed size
- What makes a good hash?
    - Fast (constant time)
    - Doesn't cluster outputs at specific indices, but distributes uniformly
    - Deterministic (same input yields same output)
- Done

// Writing First Hash Function - Strings Only//

function hash(key, arrayLen) {
  let total = 0;
  for (let char of key) {
    // map "a" to 1, "b" to 2, "c" to 3, etc.
    let value = char.charCodeAt(0) - 96
    total = (total + value) % arrayLen;
  }
  return total;
};

hash("pink", 10); // 0
hash("orangered", 10); // 7
hash("cyan", 10); // 3

- What's wrong with this hash function?
- Only hashes strings, but won't worry about this
- Not constant time - linear in key length
- Could be a little more random

// Refining Hash Funtion - Strings Only //

function hash(key, arrayLen) {
  let total = 0;
  let WEIRD_PRIME = 31; // Hash functions always take advantage of prime numbers to avoid collisions
  for (let i = 0; i < Math.min(key.length, 100); i++) {
    let char = key[i];
    let value = char.charCodeAt(0) - 96
    total = (total * WEIRD_PRIME + value) % arrayLen;
  }
  return total;
}; // This implements a basic hash function - leaning towards constant time and avoiding collisions


// Handling Collisions //
- Even with a large array and a great hash function, collisions are inevitable
- There are many strategies for dealing with collisions, but we'll focus on two:
1. Separate Chaining
2. Linear Probing

// Separate Chaining //
- With separate chaining, at each index in our array we store values using a more sophisticated data structure (e.g. an array or a linked list).
- This allows us to store multiple key-value pairs at the same index

// Linear Probing //
- With linear probing, when we find a collision, we search through the array to find the next empty slot.
- Unlike with separate chaining, this allows us to store a single key-value at each index.

// Hash Table Set and Get //

- Set
- Accepts a key and a value
- Hashes the key
- Stores the key-value pair in the hash table array via separate chaining

- Get
- Accepts a key
- Hashes the key
- Retrieves the key-value pair in the hash table
- If the key isn't found, returns undefined

// Hash Table Code //

class HashTable {
  constructor(size=53){
    this.keyMap = new Array(size);
  };

  _hash(key) {
    let total = 0;
    let WEIRD_PRIME = 31;
    for (let i = 0; i < Math.min(key.length, 100); i++) {
      let char = key[i];
      let value = char.charCodeAt(0) - 96
      total = (total * WEIRD_PRIME + value) % this.keyMap.length;
    }
    return total;
  };
  
  set(key,value) {
    let index = this._hash(key);
    if(!this.keyMap[index]) {
        this.keyMap[index] = [];
    }
    this.keyMap[index].push([key, value]);
  };
  
  get(key) {
    let index = this._hash(key);
    if(this.keyMap[index]) {
        for(let i = 0; i < this.keyMap[index].length; i++) {
            if(this.keyMap[index][i][0] === key) {
                return this.keyMap[index][i][1]
            }
        }
    }
    return undefined;
  };

};

let ht = new HashTable();
ht.set("hello world", "goodbye!!");


// Hash Table Keys and Values //

- Keys
- Loops through the hash table array and returns an array of keys in the table

- Values
- Loops through the hash table array and returns an array of values in the table

// Hash Table Keys and Values Code //

class HashTable {
  constructor(size=53){
    this.keyMap = new Array(size);
  };

  _hash(key) {
    let total = 0;
    let WEIRD_PRIME = 31;
    for (let i = 0; i < Math.min(key.length, 100); i++) {
      let char = key[i];
      let value = char.charCodeAt(0) - 96
      total = (total * WEIRD_PRIME + value) % this.keyMap.length;
    }
    return total;
  };
  
  set(key,value) {
    let index = this._hash(key);
    if(!this.keyMap[index]) {
        this.keyMap[index] = [];
    }
    this.keyMap[index].push([key, value]);
  };
  
  get(key) {
    let index = this._hash(key);
    if(this.keyMap[index]) {
        for(let i = 0; i < this.keyMap[index].length; i++) {
            if(this.keyMap[index][i][0] === key) {
                return this.keyMap[index][i][1]
            }
        }
    }
    return undefined;
  };

  keys() {
    let keysArr = [];
    for(let i = 0; i < this.keyMap.length; i++) {
        if(this.keyMap[i]) {
            for(let j = 0; j < this.keyMap[i].length; j++) {
                if(!keysArr.includes(this.keyMap[i][j][0])) {
                    keysArr.push(this.keyMap[i][j][0])
                }
            }
        }
    }
    return keysArr;
  };

  values() {
    let valuesArr = [];
    for(let i = 0; i < this.keyMap.length; i++) {
        if(this.keyMap[i]) {
            for(let j = 0; j < this.keyMap[i].length; j++) {
                if(!valuesArr.includes(this.keyMap[i][j][1])) {
                    valuesArr.push(this.keyMap[i][j][1])
                }
            }
        }
    }
    return valuesArr;
  };

};


// Big O of Hash Tables (average case) //
- Insert - O(1)
- Deletion - O(1)
- Access - O(1)

// Recap //
- Hash tables are collections of key-value pairs
- Hash tables can find values quickly given a key
- Hash tables can add new key-values quickly
- Hash tables store data in a large array, and work by hashing the keys
- A good hash should be fast, distribute keys uniformly, and be deterministic
- Separate chaining and linear probing are two strategies used to deal with two keys that hash to the same index
- When in doubt, use a hash table!

*/