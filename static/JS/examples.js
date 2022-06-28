//Examples from MODULE

// FUNCTIONS

// Simple JavaScript console.log statement
function printHello();

// Simple JavaScript console.log statement
function printHello() {
    console.log("Hello there!");
  };

// Takes two numbers and adds them
function addition(a, b) {
    return a + b;
  };


// Functions can call other functions
function doubleAddition(c, d) {
    var total = addition(c, d) * 2;
    return total;
  };

// FAT ARROW Examples

// Simple JavaScript log statement
function printHello() {
    return "Hello there!";
  };


// Condense by FAT ARROW
printHello = () => "Hello there!";


// Original addition function
function addition(a, b) {
    return a + b;
  };

// Converted to an arrow function
addition = (a, b) => a + b;

// Original doubleAddition function
function doubleAddition(c, d) {
    var total = addition(c, d) * 2;
    return total;
  };

//Conversion with FAT ARROW
doubleAddition = (c, d) => addition(c, d) * 2;

//FOR LOOP EXAMPLES

//List of friends
let friends = ["Sarah", "Greg", "Cindy", "Jeff"];

// For loop to go through friends
function listLoop(userList) {
    for (var i = 0; i < userList.length; i++) {
      console.log(userList[i]);
    }
 };

//The following actions occur in this one line:
//var i = 0 We assign an iterable variable and set its value to zero. In this loop, think of the letter 'i' to mean 'iterate.' When we assign a zero value, we're starting a counter from the beginning. You can also think of it in terms of list comprehension–the first name of the list has an index value of zero, for example.
//i < userList.length; Here we're basically saying, "If this iterable (i) is still smaller than the total number of iterables in the list (userList), then move on to the next step."
//So if we're on the second name, but the list is four names long, the for loop will continue to loop through it.
//The final step, i++, increases the iterable by 1. We're using list comprehension here; the for loop knows to iterate to the next name because the index number has increased by 1.


// IF Examples

// if-statement syntax
if ( condition ) { code to execute }

// pseudocode practice
if (a date is entered) {
  Filter the default data to show only the date entered
};

