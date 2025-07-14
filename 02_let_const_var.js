/*

    do not use var to define variable, because it is not use in block scope,
    you can also create a variable without define let or const, but it is not recommanded way.

*/

const accountId = 123456789
let accountEmail = 'gitesh@ai.com'
var accountPass = 1234
let accountState;
accountCity = 'Mehsana'



// here you cannot change constant variable
// accountId = 10
// console.log(accountId);

accountEmail = 'gitesh@google.com'
accountPass = 10101010
accountCity = 'Mumbai'

console.table([accountId, accountEmail, accountPass, accountState, accountCity])

