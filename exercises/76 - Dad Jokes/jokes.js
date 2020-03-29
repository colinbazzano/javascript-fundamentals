/* eslint-disable */

const jokeButtonSpan = document.querySelector(".jokeText");
const jokeButton = document.querySelector(".getJoke");
const jokeHolder = document.querySelector(".joke p");
const loader = document.querySelector(".loader");

const buttonText = [
  "Ugh.",
  "🤦🏻‍♂️",
  "omg dad.",
  "you are the worst",
  "seriously",
  "stop it.",
  "please stop",
  "that was the worst one"
];
// We need the Accept header, and then specify format
async function fetchJoke() {
  // turn loader on
  loader.classList.remove("hidden");
  const response = await fetch("https://icanhazdadjoke.com", {
    headers: {
      Accept: "application/json"
    }
  });
  const data = await response.json();
  loader.classList.add("hidden");
  loader.classList.remove("hidden");
  return data;
}

function randomItemFromArray(arr, not) {
  const item = arr[Math.floor(Math.random() * arr.length)];
  if (item === not) {
    console.log("we already used that one, lets find another");
    return randomItemFromArray(arr, not);
  }
  return item;
}

async function handleClick() {
  const { joke } = await fetchJoke();
  jokeHolder.textContent = joke;
  jokeButtonSpan.textContent = randomItemFromArray(
    buttonText,
    jokeButton.textContent
  );
}

jokeButton.addEventListener("click", handleClick);

// Have you been returned HTML? An error like this might mean so:
// Uncaught (in promise) SyntaxError: Unexpected token < in JSON at position 0
