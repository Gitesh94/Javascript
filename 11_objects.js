
// let tinderUser  = {}
// tinderUser.name = 'ABC'
// tinderUser.id = 'ABcWErt1234'
// console.log(tinderUser);


// let stuInfo = {
//     email: 'testUser@gmail.com',
//     fullname:{
//         firstName: 'Gitesh',
//         lastName: 'Raval'
//     }
// }

// console.log(stuInfo.fullname);
// console.log(stuInfo.fullname.firstName);
// console.log(stuInfo.fullname?.firstName); // use ? for check that the value is exist or not  



/*
Syntax: 

let target = {'a': 1, 'b': 2}
let source = {'c': 3, 'd': 4}

let newObj = Object.assign({target}, {source})
console.log(newObj);
*/

// let obj1 = {'a': 1, 'b': 2}
// let obj2 = {'c': 3, 'd': 4}
// let obj3 = {'e': 5, 'f': 6}

// let newObj = Object.assign({}, obj1, obj2, obj3) // here {} represents that the new newObj is guaranteed that it is an object
// console.log(newObj); // op  [ a: 1, b: 2, c: 3, d: 4, e: 5, f: 6 ]
// console.log(typeof(newObj)); // op  [ a: 1, b: 2, c: 3, d: 4, e: 5, f: 6 ]
// console.log(newObj['f']); // accessing value of object


// let obj1 = {'a': 1, 'b': 2}
// let obj2 = {'c': 3, 'd': 4}
// let obj3 = {'e': 5, 'f': 6}

// let newObj = {...obj1, ...obj2, ...obj3}
// console.log(newObj);
// console.log(Object.keys(newObj));
// console.log(Object.values(newObj));
// console.log(Object.entries(newObj));

