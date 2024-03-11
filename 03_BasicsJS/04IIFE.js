// Immediately Invoked Function Expressions (IIFE)

(function one() {
  // named IIFE
  console.log(`DB Connected`);
})();
// If semicolon nott used after immeadiately invoked function then it may not know where to stop the context of the function.
((name) => {
  // UNNAMED IIFE
  console.log(`DB CONNECTED ${name}`);
})("aditya");
