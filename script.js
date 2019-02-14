"use strict";
//Plan
//init:
//-set counter = 0
let counter = 0;

//-make an empty array
const arr = [];

//-start the loop
loop();

//loop:
function loop(){

//-increment the counter
counter ++;

//- insert the counter in the begging of the array
arr.unshift( counter );

const LIMIT = 9;
//-make sure that the array doesn't get longer the 9
    if(arr.length> LIMIT) {
     arr.pop();
    }

//-display the array
console.log(arr);
    //displayData(arr); <-----for the chart bar

//-loop the loop with a delay
setTimeout(loop, 1000);
}