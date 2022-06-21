/*
Data Structures
- Are collections of values, the relationships amonth them, and the functions or operations that can be applied to the data
- Why so many? Different data structures excel at different things. Some are highly specialized, while others are more generally used
- The more time you spend as a developer, the more likely you'll need to use one of these data structures

Working with map/location data? Use Graph
Need an ordered list with fast inserts/removals at the beginning and end? Use a linked list
Web scraping nested HTML? Use a tree
Need to write a scheduler? Scheduling tasks? Use a binary heap

// Class Syntax Overview //
- Explain what a class is
- Understand how JS implements the idea of classes
- Define terms like abstraction, encapsulation and polymorphism

What is a class
- A blueprint for creating objects with pre-defined properties and methods
- The created objects are known as instances
- Classes are created with the new keyword
- The constructor function is a special function that gets run when the class is instantiated
- Instance methods can be added to classes similar to methods in objects
- We're going to implement data structures as classes

How to declare class
class Student {
    constructor(firstName, lastName){
        this.firstName = firstName;
        this.lastName = lastName;
    }
};

- The method to create new objects must be called constructor
- The class keyword creates a constant, so you can not redefine it

Then create objects from classes
class Student {
    constructor(firstName, lastName, year){
        this.firstName = firstName;
        this.lastName = lastName;
        this.grade = year;
    }
};

let firstStudent = new Student("Colt", "Steele", 4);
let secondStudent = new Student("Blue", "Steele", 2);

- When creating a class, it doesn't really do anything until it is instantiated.
- When inside a constructor, 'this' keyword refers to the individual instance of the class. So it refers to the first student or the second student. So this.firstName should be 'Colt' in that instance. 

// Instance Methods //
- Methods that provide functionality to the specific class in that instance.
- Acts on the individual instance of the class

class Student {
    constructor(firstName, lastName){
        this.firstName = firstName;
        this.lastName = lastName;
        this.tardies = 0;
        this.scores = [];
    }
    fullName(){
        return `Your full name is ${this.firstName} ${this.lastName}`;
    }
    markLate() {
        this.tardies += 1;
        if(this.tardies >= 6) {
            return "You are expelled!"
        }
        return `${this.firstName} ${this.lastName} has been late ${this.tardies} times`;
    }
    addScore(score) {
        this.scores.push(score);
        return this.scores
    }
    calculatedAverage() {
        let sum = this.scores.reduce(function(a,b){return a + b})
        return sum/this.scores.length;
    }
}

let firstStudent = new Student("Colt", "Steele");

firstStudent.fullName() // "Colt Steele"

// Class Methods //
- Define methods or functionality that are pertinent to classes but not necessarily to individual instances of a class
- Not that common
- Usually a utility function

class Student {
    constructor(firstName, lastName){
        this.firstName = firstName;
        this.lastName = lastName;
    }
    
    fullName(){
        return `Your full name is ${this.firstName} ${this.lastName}`;
    }
    
    static enrollStudents(...students){
        // maybe send an email here
    }
}

let firstStudent = new Student("Colt", "Steele");
let secondStudent = new Student("Blue", "Steele");

Student.enrollStudents([firstStudent, secondStudent])

*/