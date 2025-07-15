
/*

singleton obj are define throw new Object

let myObj = new Object() // this is singleton object
let anotherObj = {} // this is non singleton object

*/ 


// let jsUser = {
//     name: 'Gitesh',
//     'full name': 'Gitesh raval',
//     email: 'gitesh@ai.com'
// }

// if you want to access value of an object
// console.log(jsUser.email); 
// console.log(jsUser['email']); 

// console.log(jsUser["full name"]); // here there is no any other way to access value which is define in string



let myObj1 = {
    name: 'Gitesh',
    greeting: function(){
        console.log('hello friend');
        
    }
}

// console.log(myObj1.greeting);  // this is function reference
// console.log(myObj1.greeting()); // this is function call



// also can add any value to the obj

myObj1.greet = function (){
    console.log('Hello from function Greet');
    console.log(`hello user, ${this.name}`); // here 'this' prefer to this object  
    
}
console.log(myObj1.greet());




// let mySymble = Symbol('key1')
// let myObj = {
//     name: 'Gitesh',
//     [mySymble]: 'random xyz',
//     'full name': 'Gitesh raval',
//     email: 'gitesh@ai.com'
// }

// Object.freeze(myObj) // after freezing any object you cannot mutate or change it
// myObj.email = 'gitesh@gmail.com'


// console.log(myObj[mySymble]);
// console.log(myObj);
