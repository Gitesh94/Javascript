const randomStr = 'harshkumar from dhansura district'
const capsStr = 'HARSHKUMAR FROM DHANSURA DISTRICT'

// console.log(randomStr.toUpperCase());
// console.log(capsStr.toLocaleLowerCase());

// console.log(capsStr.charAt(2)); //it gives you char at index number 2
// console.log(capsStr.indexOf('A')); // it gives you position of charactor  here A is place at 1st index

// console.log(capsStr.substring(0,4)); //string from 0th index and 4 is excluding
// console.log(capsStr.substring(-10, 13)); //here -(minus) is consider from 0

console.log(capsStr.split(' ')); // it will convert into array and seperate space with [ 'HARSHKUMAR FROM DHANSURA DISTRICT' ]




const capsStr2 = '            HARSHKUMAR            '


console.log(capsStr2);

let result = capsStr2.trim() // itis use to remove extra spaces from start and end
console.log(result); 


let url = 'https://gitesh.com/gitesh%20raval%20.com'

console.log(url.replace('%20', '-')); // this will replace only first preference

console.log(url.includes('gitesh')); // it will check that it is place or not in the string










 