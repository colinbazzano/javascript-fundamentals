/* eslint-disable*/

function wait(ms = 0) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
// pass in as a param, and give it a random number as a param default value (easier for testing)

function getRandomBetween(min = 20, max = 150, randomNumber = Math.random()) {
  return Math.floor(randomNumber * (max - min) + min);
}

// FIRST PASS SOLUTION
// async function draw(el) {
//   console.log(el);
//   const text = el.textContent;
//   let soFar = "";
//   for (const letter of text) {
//     console.log(letter);
//     soFar += letter;
//     el.textContent = soFar;
//     // wait for some amount of time
//     const { typeMin, typeMax } = el.dataset;
//     const amountOfTimeToWait = getRandomBetween(typeMin, typeMax);
//     await wait(amountOfTimeToWait);
//   }
// }

// RECURSIVE
function draw(el) {
  let index = 1;
  const text = el.textContent;
  const { typeMin, typeMax } = el.dataset;
  async function drawLetter() {
    el.textContent = text.slice(0, index);
    const amountOfTimeToWait = getRandomBetween(typeMin, typeMax);
    index += 1;
    // exit condition sort of like a base case
    await wait(amountOfTimeToWait);
    if (index <= text.length) {
      drawLetter();
      // wait!
    }
  }
  // when this function draw() runs, kick off drawLetter
  drawLetter();
}

document.querySelectorAll("[data-type]").forEach(draw);
