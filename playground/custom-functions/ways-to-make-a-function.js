// // function doctorize(firstName) {
// //   return `Dr. ${firstName}`;
// // }

// // Anon Function
// // function (firstName) {
// //   return `Dr. ${firstName}`;
// // }

// // Function Expression
// // const doctorize = function(firstName) {
// //   return `Dr. ${firstName}`;
// // };

// /* eslint-disable */
// const inchToCM = inches => inches * 2.54;

// // function add(a, b = 3) {
// //   const total = a + b;
// //   return total;
// // }

// const add = (a, b = 3) => a + b;

// // const add = (a, b = 3) => a + b;

// // returning an object

// // function makeABaby(first, last) {
// //   const baby = {
// //     name: `${first} ${last}`,
// //     age: 0
// //   }
// //   return baby;
// // }

// // const makeABaby = (first, last) => ({ name:})

// const makeABaby = (first, last) => ({ name: `${first} ${last}`, age: 0 });

// // IIFE
// // Immediately Invoked Function Expression

// (function(age) {
//   return `You are cool and age ${age}`;
// })(10);

// // Methods!!!
// const wes = {
//   name: "Westopher Bos",
//   // Method!
//   sayHi: function() {
//     console.log(this);
//     console.log(`Hey ${this.name}`);
//     return "Hey Wes";
//   },
//   // Short hand Method
//   yellHi() {
//     console.log("HEY WESSSSS");
//   },
//   // Arrow function
//   whisperHi: () => {
//     console.log(`hii colin im a mouse`);
//   }
// };

// // Callback Functions
// // Click Callback
// const button = document.querySelector(".clickMe");

// function handleClick() {
//   console.log("Great Clicking!!");
// }

// button.addEventListener("click", function() {
//   console.log("NIce Job!!!");
// });

// // Timer Callback
// setTimeout(() => {
//   console.log("DONE! Time to eat!");
// }, 1000);

// /* eslint-disable */
const height = 0.0043;

const length = 6.14;

const width = 2.61;

const stackofMoney = (h, l, w) => {
  const stack = l * h * w;
  return stack;
};

console.log("stack of money:", stackofMoney(length, height, width));
