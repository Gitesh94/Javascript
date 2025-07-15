
// EX let myDate2 = new Date(2025, 11, 1) // YY/MM/DD  // here month is starts from 0
// EX let myDate2 = new Date("2025-01-14") // YY/MM/DD  // here month is starts from 1
// EX let myDate2 = new Date("01-14-2025") // MM/DD/YY  // here month is starts from 1


let date = new Date()
// console.log(date.toDateString()); // Tue Jul 15 2025
// console.log(date);  //2025-07-15T06:48:26.628Z
// console.log(date.toISOString()); // 2025-07-15T06:48:26.628Z
// console.log(date.toLocaleString()); // 7/15/2025, 12:18:26 PM


// console.log(date.getDate());  // 15
// console.log(date.getDay());  // 2
// console.log(date.getFullYear());  // 2025
// console.log(date.getHours());  // 12
// console.log(date.getMinutes());  // 21
// console.log(date.getMonth());  // 6  months is starts from 0 index so six mens 7th month
// console.log(date.getSeconds());  // 29
// console.log(date.getTime());  // 1752562289864

// console.log(date.toLocaleString('en-IN', {
//   weekday: 'long',
//   timeZoneName: 'longGeneric',
// }));




// let myDate = new Date(2025, 10, 23)
// console.log(myDate); // 2025-11-22T18:30:00.000Z
// console.log(myDate.toLocaleString()); // 11/23/2025, 12:00:00 AM
// console.log(myDate.toDateString()); // Sun Nov 23 2025

// let myDate2 = new Date(2025, 11, 1) // YY/MM/DD  
// console.log(myDate2.toLocaleString()); // 2/1/2025, 12:00:00 AM
// console.log(myDate2.toDateString()); // Sat Feb 01 2025



// let newDate = Date.now()
// console.log(newDate); // 1752563001637  time is in mili seconds
// console.log(Math.floor(newDate/1000)); // 1752563001  convert time is in seconds



