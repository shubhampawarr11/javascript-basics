const accountId = 144553
let accountEmail = "shubham@google.com"
var accountPassword = "12345"
accountCity = "Kerala"
let accountState;


// accountId = 2 not allowed
accountEmail = "temp@.com"
accountPassword = "22112211"
accountCity = "Jaipur"

console.log(accountId);

/*
Prefer not to use var
because of issue in block scope and functional scope
*/

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])