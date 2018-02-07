console.log("trialjs.js loaded");

var flintstones = ["fred", "barney", "wilma", "pebbles", "betty", "bambam"];

//use while statement to print out the elements of the array
//one on each line
//it should work with array of *ANY* length

//Task 2
//filter out 'tiger' from the array

//Task 3
//Only print out the flintstones - fred, wilma, pebble

var i = 0;

    while (i < flintstones.length) {
        if ('tiger' != flintstones[i]) {
        console.log(">>> " + flintstones[i]);
        }
        i++; 
    } 
   