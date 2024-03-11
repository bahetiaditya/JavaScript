const user = {
  username: "aditya",
  price: 399,
  welcomemessage: function () {
    // console.log(`${this.username}, welcome to the website. `);
    // console.log(this);  // talks about current context
  },
};

// user.welcomemessage();
// user.username = "sam";
// user.welcomemessage();

// console.log(this);

// function chai() {
// let username = "aditya",
//     console.log(this.username);
// }

// chai()

// const chai = function () {
//   let username = "aditya";
//   console.log(this.username);
// };

// const chai = () => {
//   let username = "aditya";
//   console.log(this.username);
// };

// chai()

() => {}; // valid syntax

// const addtwo = (num1, num2) => {
//   return num1 + num2;
// };  // if written like this then need to write return keyword to return anything from the function.

// const addtwo = (num1, num2) => num1 + num2;  //if written in parenthesis then no need of return keyword.
const addtwo = (num1, num2) => num1 + num2; //if written in parenthesis then no need of return keyword.
console.log(addtwo(3, 4));

// if used return keyword to return something, then it is explicit return or else implicit return.

