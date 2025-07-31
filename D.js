// console.log("DEVA Hi");
// console.log(1+2);
// const age=20;
// const age1=21;
// console.log(age);
// console.log(age1);
// console.log(age+age1);
// {
//     let age=30;
//     console.log(age);
// }
// let isLoggedIn=true;
// console.log(typeof isLoggedIn);
// const Information={
//     name:"DEVA",
//     age:20,
//     contactNumber:9990641388,
//     isStudent:true,
//     address:{
//         city:"faridabad",
//         state:"haryana",
//         contry:"india",
//     }
//  };
//  console.log(Information.address)//access a specific value from object using dot operator
// console.log(Information)
// console.log(typeof Information);
// let a=10;
// let b=5;
// console.log("a = ",a, "&", "b =",b);
// console.log("a+b =",a+b);
// console.log("a-b =",a-b);
// console.log("a*b =",a*b);
// console.log("a/b =",a/b);
// console.log("a%b =",a%b);
//ternary operator
// let age=20;
// let isAdult=age>18?"you are adult":"you are not adult";
// console.log(isAdult);
// let a=0.1;
// let b=0.2;
// console.log(a+b);
// let a=18.50;
// let b=7.50;
// console.log(a+b);
// console.log((a+b).toFixed(2));
// console.log((a+b)*0.1);
// let celsius1=prompt("Enter the celsius value");
// celsius1=Number.parseInt(celsius1);
// let fahrenheit1=prompt("Enter the fahrenheit value");
// fahrenheit1=Number.parseInt(fahrenheit1);
// let fahrenheit=(celsius1*9/5)+32;
// let celsius=(fahrenheit1-32)*5/9;
// console.log("Celsius to fahrenheit is" ,fahrenheit);
// console.log("Celsius to fahrenheit is" ,celsius);
// console.log('Item'+(1+1)+":"+"$"+(2095+799)/100);
// console.log("I'm\nDeva Singh");
// console.log(`item(${1+1}):$${(2095+799)/100}`);//template string much better than concatination
// string properties
// let name1="DEVA";
// newName= name1.toLowerCase();
// console.log(newName);
// console.log(name1[0]);
// console.log(name1.length);
// console.log(name1.slice(1,3));
// console.log(name1.replace("DEVA","SINGH"));
//multi line string using template (backticks)
// let string=`deva
// singh`;
// console.log(string);
// console.log(`Total cost is $${(599+295)/100}`);
// console.log(`Thank You
// Come Again`);
//if else
// let age=20;
// if(age>18){
//     console.log("you are adult");
// }
// else{
//     console.log("you are not an adult");
// }
// let random=Math.random();
// let result=random>0.5?"Heads":"Tails";
// let guess='Heads';
// console.log(guess===result?"you win":"you lose");
// functions
// function function1(){
//     console.log('Hello Deva!');
//     console.log(2+2);
// return 3+5;
// }
// function1();
//function parameters, with call by value .
// function calculateTax(cost,percentage){
//     console.log(cost*percentage/100);
// }
// calculateTax(500,10)
// calculateTax(1000,810)
// we can also use default values for parameters
// function calculateTax(cost,persentage=5){
//         console.log(cost*persentage/100);
//     }
//     calculateTax(100);
//     calculateTax(200);
// arrow function
// const multiply=(a,b)=>{
//     console.log(a*b);
// }
// multiply(5,20);
// function countVowels(str){
//     let count =0;
//     for ( const char of str){
//         if(char==='a'||char==='e'||char==='i'||char==='o'||char==='u'){
//             count++;
//         }
//         }
//         return count;
// }
// console.log(countVowels("devasingh"));
// const information={
//     name:"DEVA",
//     age:20,
//     ['Roll-no']:23001050008, // either ['Roll-no'] or Roll_no
//     city:"faridabad",
//     state:"haryana",
//     method : function func(){
//        console.log("hello");
//     }
// };
//          console.log(information);
//          console.log(information.name);
//          console.log(information['name']);
// delete information.city
// information.University='YMCA' //insert a new property into object.
// console.log(information);
// // object in an array
// let students = [
//     { name: "Deva", age: 20 },
//     { name: "Raj", age: 22 },
//     { name: "Aisha", age: 21 }
// ];
// console.log(students[0]);
// json.stringify convert object into json string
// console.log(JSON.stringify(information));
// json.parse convert json string into object
// console.log(JSON.parse(JSON.stringify(information)));
// localStorage.setItem("information",JSON.stringify(information));
// let userData=JSON.parse(localStorage.getItem("information"));
// console.log(userData);
// let user = { name: "Deva", age: 20, skills: ["JavaScript", "Django"] };
// localStorage.setItem("user", JSON.stringify(user));
// let userData = JSON.parse(localStorage.getItem("user"));
// console.log(userData.name); // Output: Deva


// let randomNumber=Math.random();
// let randomNumber1=randomNumber*1000000;
// let otp=Math.round(randomNumber1);
// if(otp<=100000){
//     otp=otp+'0';
//     console.log(otp);
// }
// else{
//     console.log(otp);
// }



// let otp = Math.floor(100000 + Math.random() * 900000);
// console.log(` Your otp is :`, otp );


// // For Node.js
// const crypto = require('crypto');
// const otp = crypto.randomInt(100000, 1000000); // 6-digit OTP
// console.log(otp);


//destructuring property

// const user={
//     name:"Deva",
//     age:20,
//     city:"Faridabad",
//     state:"Haryana"
// };
// const {name,age,city,state}=user; //destructuring
// console.log(name, age, city, state); // Output: Deva 20 Faridabad Haryana

// console.log('25'+5);      // Type coercion
//console.log('5'===5);

// let array=[1,2,3,4,5];
// console.log(array.includes(3)); // true
// console.log(array.includes(6)); // false
//  console.log(array.indexOf(3)); // 2
//  console.log(array.indexOf(6)); // -1
//  console.log(array.lastIndexOf(3)); // 2
//  console.log(array.lastIndexOf(6)); // -1
//  console.log(array);
// //  console.log(delete array[2]); // true
// console.log(array); // [1, 2, <1 empty item>, 4, 5]
// console.log(array.length); // 5
// array.sort();
// console.log(array); // [1, 2, 4, 5, <1 empty item>]
// const found = array.find(num => num>2);
// console.log(found); // Output: 3
// array.push(100);
// console.log(array);

// let password = "";
// while (password !== "admin") {
//   password = prompt("Enter password:");
// }
// console.log("Access granted!");

// const todoList = [
//     "DEVA SINGH",
//     "ABHISHEK YADAV",
//     "MOHIT KUMAR"
// ];
// for(let i = 0; i < todoList.length; i++) {
//     console.log(todoList[i]);
// }


//accumulator pattern
// const todoList = [1,2,3,4,5];
// let sum = 0;
// for(let i=0;i<todoList.length;i++){
//     sum += todoList[i];
// }
// console.log("Sum of all elements:", sum); // Output: Sum of all elements: 15
// const numDoubled=[];
// for(let i=0;i<todoList.length;i++){
//     const num=todoList[i];
//     numDoubled.push(num*2);
//     // console.log("Doubled numbers:", numDoubled)
// }
// console.log("Doubled numbers:", numDoubled); // Output: Doubled numbers: [2, 4, 6, 8, 10]



//minMax

// function minMax(nums){
//     const result={
//         min:nums[0],
//         max:nums[0]
//     };
//     for(let i=0;i<nums.length;i++){
//         const value=nums[i];
//         if(value<result.min){
//             result.min=value;
//         }
//         if(value>result.max){
//             result.max=value;
//         }
//     }
//     return result;
// }
// console.log(minMax([1,2,3,4,5])); // Output: { min: 1, max: 5 }

// //wordCount
// function countWords(words){
//     const result={}
//     for(let i=0;i<words.length;i++){
//         const word=words[i];
//         if(result[word]){
//             result[word]++;
//         }else{
//             result[word]=1;
//         }
//     }
//     return result;
// }
// console.log(countWords(['apple', 'grape', 'deva', 'apple']));

// function countWords(words){
//     const result={}
//     for(let i=0;i<words.length;i++){
//         const word=words[i];
//         if(result[word]){
//             result[word]+='deva';
//         }else{
//             result[word]=1;
//         }
//     }
//     return result;
// }
// console.log(countWords(['apple', 'grape',  'apple']));

//copy the array

// const array1=[1,2,3,4,5];
// const copy=array1.slice();
// copy.push(6);
// console.log(array1);
// console.log(copy);
// const array2=array1.slice(0,4);
// console.log(array2);


// function doubleArray(nums){
//     const double=[];
//     for(let i=0;i<nums.length;i++){
//         double.push(nums[i]*2);
//     }
//     console.log(double);
// }
// doubleArray([1,2,3,4,5]);

// const function1=function(){
//     console.log('hello');
// }
// console.log(function1);
// function1();

// //passing a value into a function
// const function2=function(param){
//     console.log(param);
// }
// function2(5);

//passing a function into another function
// function run(param){
// param();
// }
// run(function(){
//     console.log("Deva Singh");
// });

// setTimeOut
// console.log("start");
// setTimeout(()=>{
//     console.log("this runs after 2 seconds");
// },2000);
// console.log("End");

// set interval
// setInterval(()=>{
//     console.log("this prints every 2 seconds");
// },2000);
// stop this manually

// const repeat = setInterval(() => {
//     console.log("runs only 5 times");
// }, 1000);

// setTimeout(() => {
//     clearInterval(repeat);
//     console.log("stop");
// }, 6000);


//forEach withOut index
// const fruits=['apple','banana','cherry'];
// fruits.forEach(function(fruit){
//     console.log(fruit);
// });

//with index
// const fruits=['apple','banana','cherry'];
// fruits.forEach(function(fruit,index){
//     console.log(index +':',fruit);
// });

//forEach doesn't return a new array, it just iterates over the existing array
// and it doesn't have continue or break statements like for loop. instead of this it uses return statement to exit the loop.
// const fruits=['apple','banana','cherry'];
// fruits.forEach(function(fruit,index){
//     if(fruit === 'banana') {
//         return; // This will skip the current iteration for 'banana'
//     }
//     console.log(index +':',fruit);
// });

// arrow function
// const fruits=['apple','banana','cherry'];
// fruits.forEach(fruit=>
//     {console.log(fruit);});
// const array=[1,2,3];
// array.forEach(value=>{
//       console.log(value*value);
// });

//map
// const array = [1, 2, 3];
// array.map(value => {
//     console.log(value * value);
// });


// function addNum(arr,num){
//     return arr.map(value=>value+num);
// }
// console.log(addNum([1,2,3],5));

// function addNum(arr,num){
//     const array=arr.map(value=>value+num);
//     console.log(array);
// }
// addNum([1,2,3],3);

// function removeEgg(foods){
//     return foods.filter((value)=>value!=='egg');
// }
// console.log(removeEgg(['egg','egg','apple','banana','cherry','egg']));

// function reverseStr(str){
//     return str.split("").reverse().join("");
// }
// console.log(reverseStr("deva singh"));

// const one='a';
// const obj={
//     ['one']:'b',
//     [one]:'c'
// };
// console.log(obj.one);
// console.log(obj);
// console.log(obj[one]);



// const user = {
//   Name: "Deva",
// };
// console.log(Object.hasOwn(user, "Name")); // true
// console.log(Object.hasOwn(user, "toString")); // false
// console.log(user['toString']);


// const users = {
//   frontendmaster: {},
//   rahul: {}
// };

// let name = 'rahul';

// if (users[name]) {
//   console.log('BOSS');
// } else {
//   console.log('GUEST');
// }

// const users = {
//   frontendmaster: {},
//   rahul: {}
// };

// let name1 = 'constructor';

// if (users[name1]) {
//   console.log('BOSS');
// } else {
//   console.log('GUEST');
// }

// var foo = 'a';
// function showName() {
//   foo = 'b';
//   return;
//   function foo() { }
// }
// showName();
// console.log(foo);


//the above code looks like this in correct way
// var foo = 'a';
// function showName() {
//   function foo() { }
//   foo = 'b';
//   return;
// }
// showName();
// console.log(foo);

//callback

// function greet(name,callback){
//     console.log(`Hello, ${name}!`);
//     if(callback){
//         callback();
//     }
// };
// function sayName(){
//   console.log("My name is Deva Singh.");
// };
// greet("Sir", ()=>{
//     sayName();
// });

//another way.

// function sayName(){
//   console.log("My name is Deva Singh.");
// };
// callback=()=>{
//   sayName();
// }
// callback();

// callback=sayName;
// callback();

// console.log("Start");

// setTimeout(() => {
//     console.log("User logged in");

//     setTimeout(() => {
//         console.log("Fetched user profile");

//         setTimeout(() => {
//             console.log("Fetched user posts");

//             setTimeout(() => {
//                 console.log("Displayed user dashboard");
//             }, 1000);

//         }, 1000);

//     }, 1000);

// }, 1000);

// //callback hell
// function getData(data, getNextData) {
//     setTimeout(() => {
//         console.log(`Data received: ${data}`);
//         if (getNextData) {
//             getNextData();
//         };
//     }, 2000);
// }
// getData("User Data", () => {
//     getData("User Profile", () => {
//         getData("User Posts", () => {
//             getData("User Dashboard");
//         });
//     });
// });


// console.log("1");

// // Function returns a promise
// function fetchData() {
//     return new Promise((resolve, reject) => {
//         console.log("Fetching data...");
//         setTimeout(() => {
//             resolve("Data received!");
//         }, 2000);
//     });
// }

// // Use the promise
// fetchData().then(data => {
//     console.log(data);
// });


// function fatchData() {
//     return new Promise((resolve, reject) => {
//         console.log("Fetching data...");
//         setTimeout(() => {
//             console.log("Data recieved!");
//             resolve("Deva singh , PH.no 999061388");
//         }, 3000);
//     });
// }
// fatchData().then((data) => {
//     console.log(data);
// })

// function fatchData() {
//     return new Promise((resolve, reject) => {
//         // console.log("Fetching data...");
//         setTimeout(() => {
//             console.log("Data recieved!");
//             reject("network error");
//         }, 3000);
//     });
// }
// fatchData().then((data) => {
//     console.log(data);
// })
// fatchData().catch((err)=>{
//     console.log("rejected : ", err);
// })

//promise chaining.
// function fatchData1() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("data1");
//             resolve("Success");
//         }, 3000);
//     });
// }

// function fatchData2() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("data2");
//             resolve("Success");
//         }, 3000);
//     });
// }

// let p1 = fatchData1();
// console.log("fatching data1.....");
// p1.then((res) => {
//     console.log("fatching data2.....");
//     let p2 = fatchData2();
//     p2.then(() => { });
// })



// Step 1: Define an async function
// async function fetchUserData() {
//   try {
//     // Step 2: Make an HTTP request and wait for the response
//     const response = await fetch('https://jsonplaceholder.typicode.com/users/1');

//     // Step 3: Check if the response is OK
//     if (!response.ok) {
//       throw new Error('Failed to fetch user');
//     }

//     // Step 4: Parse JSON from the response
//     const user = await response.json();

//     // Step 5: Use the data
//     console.log("User data:", user);
//   } catch (error) {
//     // Step 6: Handle any errors
//     console.error("Error fetching user:", error.message);
//   }
// }

// // Step 7: Call the function
// fetchUserData();



// async function fetchUser() {
//     try {
//         const response = await fetch('https://mocki.io/v1/d54bfbd6-9a66-4877-922a-7a8dca18ca98');
//         if (!response.ok) {
//             throw new Error("failed to fetch user");
//         }
//         const user = await response.json();
//         console.log("User Data ; ", user);
//     } catch (error) {
//         console.error("Error in fetching : ", error.message);
//     }
// }
// fetchUser();

async function fetchData(){
    try{
        const response = await fetch('https://supersimplebackend.dev');
        if(!response.ok){
            throw new Error(`HTTP Error! , status : ${response.status}`);
        }
        const data = await response.json();
        console.log(data);
    }catch(error){
        console.error('Error fetching data:', error);
    }
};
fetchData();


const msg = encodeURIComponent("Tarun please meri maar le bhai.");
console.log(`https://wa.me/9721996635?text=${msg}`);



