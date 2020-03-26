/* eslint-disable */

function Slider(slider) {
  if (!(slider instanceof Element)) {
    throw new Error("No slider passed in");
  }
  // create some variables for working with the slider
  let prev;
  let current;
  let next;
  // select the elements needed for the slider
  const slides = slider.querySelector(".slides");
  const prevButton = slider.querySelector(".goToPrev");
  const nextButton = slider.querySelector(".goToNext");

  function startSlider() {
    current = slider.querySelector(".current") || slides.firstElementChild;
    prev = current.previousElementSibling || slides.lastElementChild;
    next = current.nextElementSibling || slides.firstElementChild;
    console.log({ current, prev, next });
  }

  function applyClasses() {
    current.classList.add("current");
    prev.classList.add("prev");
    next.classList.add("next");
  }

  function move(direction) {
    // remove all classes from current slides
    const classesToRemove = ["prev", "current", "next"];
    prev.classList.remove(...classesToRemove);
    current.classList.remove(...classesToRemove);
    next.classList.remove(...classesToRemove);
    // find out which direction they are going
    if (direction === "back") {
      // make a new array of the new values, and destructure them over and into the prev, current, and next variables
      [prev, current, next] = [
        // get the previous slide, if there is none, get the last slide from the entire slider for wrapping
        prev.previousElementSibling || slides.lastElementChild,
        prev,
        current
      ];
    } else {
      [prev, current, next] = [
        current,
        next,
        // if you are wrapping around, set it to the firstElementChild
        next.nextElementSibling || slides.firstElementChild
      ];
    }

    applyClasses();
  }

  // when this slider is created, run the start slider function
  startSlider();
  applyClasses();

  // Event Listeners

  prevButton.addEventListener("click", () => move("back"));
  nextButton.addEventListener("click", move);
}

const mySlider = Slider(document.querySelector(".slider"));
const dogSlider = Slider(document.querySelector(".dog-slider"));
