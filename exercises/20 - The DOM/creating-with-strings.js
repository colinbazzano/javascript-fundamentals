/* eslint-disable */

const item = document.querySelector(".item");

// const width = 500;
const src = `https://picsum.photos/500`;
const desc = `Cute Pup`;
const myHTML = `
    <div class="wrapper">
        <h2>cute ${desc}</h2>
        <img src='${src}' alt="${desc}"/>
    </div>
`;
// item.innerHTML = myHTML;
// console.log(typeof item.innerHTML);

// const itemImage = document.querySelector(".wrapper img");

// itemImage.classList.add("round");

// turn a string into a DOM element

const myFragment = document.createRange().createContextualFragment(myHTML);

document.body.appendChild(myFragment);
