const accountId = 14432
let accountEmail = "sudha@gmail.com"
var accountPassword = "12345"
accountCity = "Tuljapur"

// accountId = 2  no allowed

accountEmail = "ss@ss.com"
accountPassword = "232323"
accountCity = "Pune"

console.log(accountId);
console.table([accountEmail, accountPassword, accountCity])

/*
    prefer not to use var
    because of issue in block scope and functional scope
*/


