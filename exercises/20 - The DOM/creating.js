console.log("it works!");

const myParagraph = document.createElement("p");

// adding to the p tag we created above.
myParagraph.textContent = "I am a p tag!";
myParagraph.classList.add("special");
console.log(myParagraph);

const myImage = document.createElement("img");

myImage.src = "https://picsum.photos/200";
myImage.alt = "random photo";
console.log(myImage);

const myDiv = document.createElement("div");

myDiv.classList.add("wrapper");
console.log(myDiv);
/* eslint-disable */
// append them together, then append to the DOM
myDiv.appendChild(myParagraph);
myDiv.appendChild(myImage);

document.body.appendChild(myDiv);

const heading = document.createElement("h2");
heading.textContent = "Wow, look at me!!";

myDiv.insertAdjacentElement("beforebegin", heading);
console.log(myDiv);
const list = document.createElement("ul");

const li = document.createElement("li");
item.textContent = "three";
list.appendChild(li);

document.body.insertAdjacentElement("afterbegin", list);

const li5 = document.createElement("li");

li5.textContent = "Five";
list.append(li5);

const li1 = li5.clondeNode(true);
li1.textContent = "one";
list.insertAdjacentElement("afterbegin", li1);

const li4 = document.createElement("li");
li4.textContent = "four";
li5.insertAdjacentElement("beforebegin", li4);

const li2 = document.createElement("li");
li2.textContent = "two";
li3.insertAdjacentElement("beforebegin", li2);
