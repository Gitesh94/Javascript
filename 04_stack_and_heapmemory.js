//  these are primitive type, it gives you reference of the variable
let myname = "Gitesh";
let nikName = myname;

nikName = "Gaurav";

console.log(myname);
console.log(nikName);

// these are nonpremitive, it give you actual variable

let userOne = {
  username: "Giteshkumar",
};

let userTwo = userOne;
userTwo.username = "HarshKumar";

console.log(userOne.username);
console.log(userTwo.username);
