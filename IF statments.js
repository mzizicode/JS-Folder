// If statements--->allows as to execute a piece of code based on a condition

//example one
 var condition = 1 < 0;

if (condition) {
    console.log("Runs....");
} else {
    console.log("Else condition ran..");
}

//example two
var gender = 'FEMALE';

if (gender == 'M') {
    console.log('Male');
} else if (gender == 'F' || gender == 'FEMALE') {
    console.log('Female');
} else {
    console.log('Unkown');
}