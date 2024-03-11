// if  syntax

if (true) {
  //   console.log("this block will run.");
}

if (false) {
  //   console.log("this will not run.");
}

// ------------------ < some important arithmetic conditional operators > ------------------
//  < - greater than
//  > - less than
//  <= - less than or equal to
//  >= - greater than or equal to
//  == - equal to (checks only if value is equal)
//  === - strictly equal to (checks the datatype and value both)
//  != - not equal to sign
//  !== - checks negavtive sign of any integer

// const score = 200;

// if (score > 100) {
//   // scope of power is limited to this if block only, it is not defined out of this block.
//   const power = "fly";
//   console.log(`User power : ${power}`);
// }

// console.log(`User power : ${power}`);

const balance = 250;

if (balance > 500) console.log("test"); // shorthand syntax for single condition.

// multiple condition check

// const marks = 98;
// if (marks > 90) {
//   console.log("A");
// } else if (marks > 50) {
//   console.log("passed");
// } else {
//   console.log("fail");
// }

// ------------------ < some important logical operator > ------------------

// && - AND
// || - OR

const month = 2;

switch (month) {
  case 1:
    console.log("Jan");
    break;
  case 2:
    console.log("feb");
    break;
  case 3:
    console.log("mar");
    break;
  case 4:
    console.log("apr");
    break;

  default:
    console.log("default case matched.");
}
