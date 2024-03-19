// =====> Task: 1 <===== 
// **Title Template String and Arrow Function:

// ===>Function
// function greetUser(name) {
//     return `Hello, ${name}!`;
//   }
// const greeting = greetUser("DinIslam");
// console.log(greeting); 
  

// ===>arrow function 
// const greetUser = (name) => `Hello, ${name}!`;

// const greeting = greetUser("DinIslam");
// console.log(greeting);


// ===================================================

// =====> Task: 2 <=====
// **Title: Explore the use of the spread operator. 

// const Fruits = ['Apple', 'Banana', 'Apricot', 'Jackfruit']
// const newFruits = ['Mango', 'Mulberry', 'Pear', ...Fruits]
// console.log(newFruits);

// ===================================================

// =====> Task:3 <=====
// **Title: Array Methods - map, filter, find, and forEach

// let number = [1,2,3,4,5,6,7,8]
// ===> map:-

// let squareNumber = number.map((s) => {
//     return s **= 2
// })
// console.log(squareNumber);

// ===> filter:-
// let getEvenNumber = number.filter((e) => {
//     return e % 2 === 0;
// })
// console.log(getEvenNumber);

// ===> find:- 

// let greaterFive = number.find((f) => {
//     return f > 5
// })
// console.log(greaterFive);

// ===> forEach

// let printNumber = number.forEach((p) => {
//     console.log(p);
// })

// ===================================================

// =====> Task:4 <=====

// let colors = ['Red', 'Black', 'green']

// const [colorOfRed, colorOfBLack, colorOfGreen] = colors
// console.log(colorOfGreen);


// ===================================================

// =====> Task:6 <=====

// ===> Checks truthy falsy:-

// function myFunction(v) {
//     if (v) {
//         console.log(`${v} is an truthy`);
//     } else{
//         console.log(`${v} is an falsy`);
//     }
// }
// myFunction()

// ===> Ternary operator, (odd or even)

// function ternaryOddEven(num) {
//     const check = num % 2 === 0 ? 'Even' : 'Odd'
//     console.log(`${num} is an ${check}`);
// }
// ternaryOddEven(5)

// ===> && operator:-

// function operatorAnd(num) {
//     const check = 10 === 2 && num === 2
//     console.log(check);
// }
// operatorAnd()


// ===================================================
  
// =====> Task:7 <=====

// ===> localStorsge:-

// let myInfo = {
//     name: 'MD Din islam',
//     age: 22,
//     address: 'Barishal'
// }
// localStorage.setItem('myData', JSON.stringify(myInfo))
// localStorage.getItem('myData')
// let my = localStorage.getItem('myData')
// JSON.parse(my)
// localStorage.clear()

// ===> sessionStorage:-

// let myInfo = {
//     name: 'MD Din islam',
//     age: 22,
//     address: 'Barishal'
// }
// sessionStorage.setItem('myData', JSON.stringify(myInfo))
// sessionStorage.getItem('myData')
// let my = sessionStorage.getItem('myData')
// JSON.parse(my)
// sessionStorage.clear()


// ===================================================

// =====> Task:8 <=====

// let myInfo = {
//     name: 'MD Din Islam',
//     age: 22
// }
// console.log(myInfo.name);    // dot notation.
// console.log(myInfo['name']);    //  bracket notation.


// ===================================================

// =====> Task: 10 <=====

// const products = [
//     {
//         name: 'Mobile',
//         category: 'Electronic',
//         price: 10000,
//         rating: 4.8
//     },
//     {
//         name: 'Laptop',
//         category: 'Electronic',
//         price: 20000,
//         rating: 4.6
//     },
//     {
//         name: 'Computer',
//         category: 'Electronic',
//         price: 30000,
//         rating: 4.7
//     },
// ]
// const sortRating = products.sort((a, z) => {
//     return z.rating - a.rating
// })
// console.log(sortRating);


// ===================================================

// =====> Task: 13 <=====

// ===> Normal Fetch data:-

// fetch('https://jsonplaceholder.typicode.com/users')
//     .then(res => res.json())
//       .then(json => console.log(json))

// ===> Fetch data with Async await:-

// async function consoleTheData() {
//     try {
//         const url = await fetch('https://jsonplaceholder.typicode.com/users')
//         const data = await url.json()
//         console.log(data);
//     } catch (error) {
//         console.log('This is not found');
//     }
// }
// consoleTheData()

// ===================================================


