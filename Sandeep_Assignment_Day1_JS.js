//Assignment 

//Question 1 - Explain various console methods

console.log()- Used to print the output in console.
console.clear - USe to clear the console.
console.count - used to count the number that the function hit by this counting method.
console.error - Use to log error on console
console.warn - USe to log warning message in console
console.table - USe  to generate a table inside a console.
console.time and console.timeEnd - Use we want to know the amount of time spend by a block or a function

There are many others like (group, assert, exception etc) but i felt these are prime one which we use more frequently.

//Question 2- Difference between Var, let and const

var - This keyword we used whennever we have to used that varirable globally even in any function. Var variables can be updated and re-declared within its scope
Let - This keyword we used when ever we want to keep the scope of a variable local (block only). let variables can be updated but not re-declared
Conts  -This keyword we use when we want to declare a variable whose value we dont want and expect to be changed in entire Program. onst variables can neither be updated nor re-declared.

//---Using the example from class only

var name = "Prasad"; 
var age = 24;
var canFly = false;
var friends = {
    name:"Vishal",
    hobby:"Coding",

// Let 
{
    let city;
    let name = "Sai Sir"; 
    console.log("Using Let: ", name);---print Sai sir as its local
 }
 console.log(name) - print Prasad as scope change to global
 
 // const - Constant
 
 const country = "India";
 console.log(country);
 
 // country = "UK"; --gives error as constant keyword used
 


//Question 3 - various datatypes
 basic data types available
String myName = "Sandeep"
Number age = 33
Object name = {fName: "Sandeep", lName:"Agrawal"}
Boolean human=true
Array animals = ["cat","dog","goat"]
Null nothing =null
Undefined random