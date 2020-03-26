// Make a div
const div = document.createElement("div");
// add a class of wrapper to it
div.classList.add("wrapper");
// put it into the body
document.body.appendChild(div);

// make an unordered list
// const myList = document.createElement("ul");
// // add three list items with the words "one, two three" in them
// // put that list into the above wrapper
// const li1 = document.createElement("li");
// li1.textContent = "one";
// myList.appendChild(li1);
// const li2 = document.createElement("li");
// li2.textContent = "two";
// myList.appendChild(li2);
// const li3 = document.createElement("li");
// li3.textContent = "three";
// myList.appendChild(li3);

// div.appendChild(myList);

// *** you could do above OR you could do below ***
const ul = `
    <ul>
        <li>one</li>
        <li>two</li>
        <li>three</li>
    </ul>
`;

div.innerHTML = ul;
console.log(div);
// create an image
const myImg = document.createElement("img");

// set the source to an image
myImg.src = "https://picsum.photos/500";
// set the width to 250
myImg.width = 250;
// add a class of cute
myImg.classList.add("cute");
// add an alt of Cute Puppy
myImg.alt = "cute puppy";
// Append that image to the wrapper
div.appendChild(myImg);
// with HTML string, make a div, with two paragraphs inside of it
const myHTML = `
    <div class="myDiv">
        <p>Paragraph 1</p>
        <p>Paragraph 2</p>
    </div>
`;
// put this div before the unordered list from above
// const myFragment = document.createRange().createContextualFragment(myHTML);
const ulElement = div.querySelector("ul");
ulElement.insertAdjacentHTML("beforebegin", myHTML);
// add a class to the second paragraph called warning
const myDiv = document.querySelector(".myDiv");
myDiv.children[1].classList.add("warning");
console.log(myDiv);
// remove the first paragraph
myDiv.children[0].remove();
// create a function called generatePlayerCard that takes in three arguments: name, age, and height
function generatePlayerCard(name, age, height) {
  const html = `
    <div class="playerCard">
      <h2>${name} - ${age}</h2>
      <p>
        They are ${height} and ${age} years old. In Dog years this person would be
        ${age * 7}. That would be a tall dog!
      </p>
      <button class="delete" type="button">&times Delete</button>
    </div>
    `;
  return html;
}

console.log(generatePlayerCard("Joji", 14, "13 inches"));
// have that function return html that looks like this:
// <div class="playerCard">
//   <h2>NAME — AGE</h2>
//   <p>They are HEIGHT and AGE years old. In Dog years this person would be AGEINDOGYEARS. That would be a tall dog!</p>
// </div>

// make a new div with a class of cards
const cards = document.createElement("div");
cards.classList.add("cards");
// Have that function make 4 cards
// const card1 = generatePlayerCard("Tom", 1, "12 inches");
// const card2 = generatePlayerCard("Joji", 3, "13 inches");
// const card3 = generatePlayerCard("Rufus", 12, "21 inches");
// const card4 = generatePlayerCard("RatDog", 7, "2 inches");
// const cardsHTML = generatePlayerCard("colin", 12, 150);
// append those cards to the div
let cardsHTML = generatePlayerCard("tony", 12123123, 150);
cardsHTML += generatePlayerCard("guyo", 123322, 150);
cardsHTML += generatePlayerCard("rodge", 1243, 150);
cardsHTML += generatePlayerCard("snickerbar", 122, 150);

cards.innerHTML = cardsHTML;
div.insertAdjacentElement("beforebegin", cards);

// newDiv.appendChild(card1);
// put the div into the DOM just before the wrapper element
// Bonus, put a delete Button on each card so when you click it, the whole card is removed
const buttons = document.querySelectorAll(".delete");
// select all the buttons!
// make out delete function
function deleteCard() {
  const clickedButton = event.currentTarget;
  clickedButton.parentElement.remove();
}
// loop over them and attach a listener
buttons.forEach(button => button.addEventListener("click", deleteCard));
