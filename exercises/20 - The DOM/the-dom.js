// // /* eslint-disable */
// // const p = document.querySelector("p");
// // const imgs = document.querySelectorAll(".item img");
// // const item2 = document.querySelector("item2");

// // console.log(p);
// // console.log(imgs);
// // console.log(item2);
// // const item2Image = item2.querySelector("img");

// /* eslint-disable */

// const heading = document.querySelector("h2");

// heading.textContent = "I'm cool!";
// console.log(heading.textContent);
// console.log(heading.innerText);

// const pizzaList = document.querySelector(".pizza");
// console.log(pizzaList.textContent);

// // pizzaList.textContent = `${pizzaList.textContent} Edited!`;
// pizzaList.insertAdjacentText("beforeend", " Pizza pizza!");
// pizzaList.insertAdjacentText("afterbegin", "Pizza pizza! ");

// console.log(pizzaList.textContent);

/* eslint-disable */

const pic = document.querySelector(".nice");
pic.classList.add("open");
pic.classList.remove("cool");
function toggleRound() {
  pic.classList.toggle("round");
}
console.log(pic.classList);

pic.addEventListener("click", toggleRound);

pic.alt = "Cute Pup";
console.log(pic.alt);
console.log(pic.naturalWidth);

// window.addEventListener("load", function() {
//   this.console.log(pic.naturalWidth);
// });

// pic.setAttribute("alt", "I added an alt!");
// console.log("alt:", pic.getAttribute("alt"));
