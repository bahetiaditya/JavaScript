const accountId = 144553
let accountEmail = "aditya@google.com"
var accountPassword = "12345"
accountCity = "Nanded"
let accountState;

// accountId = 2 // not allowed


accountEmail = "ab@hc.com"
accountPassword = "21212121"
accountCity = "manwath"

console.log(accountId);

/*
Prefer not to use var
because of issue in block scope and functional scope
*/


console.table([accountId, accountEmail, accountPassword, accountCity, accountState])