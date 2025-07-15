let myarr =  [1,2,3,4,5]

// array and its method

// myarr.push(10)  // add element at the end of the array
// myarr.pop() // remove element from the end 
// myarr.unshift(12) // add element at starting which effect all elements indexvalue
// myarr.shift() // remove element at starting 

// console.log(myarr.includes(1)); // return true of false
// console.log(myarr.indexOf(2)); // return indexnumber of array
// console.log(myarr);

let fruits = ['banana', 'cherry', 'orange', 'apple', 'kiwi', 'bluebarry']
// console.log(fruits.indexOf('cherry')); // return indexnumber of array

// let newFruits = fruits.join()
// console.log(fruits); // this returns an array
// console.log(newFruits); //this returns a string

let fruit1 = fruits.slice(1,4)
console.log(fruit1); // from index 1 to index 3 index 4 is excluding


// in "splice" it "remove" value from original array  
let fruit2 = fruits.splice(1, 4)
console.log(fruit2);  // op  [ 'cherry', 'orange', 'apple', 'kiwi' ]
console.log(fruits); // op  ['orange', 'bluebarry']




