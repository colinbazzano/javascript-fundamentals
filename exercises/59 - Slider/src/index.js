function Slider(slider) {
  if (!(slider instanceof Element)) {
    throw new Error("No slider passed in");
  }
  // create some variables for working iwth the slider
  // let this.prev;
  // let this.current;
  // let this.next;
  // select the elements needed for the slider
  const slides = slider.querySelector(".slides");
  const prevButton = slider.querySelector(".goToPrev");
  const nextButton = slider.querySelector(".goToNext");

  function startSlider() {
    this.current = slider.querySelector(".current") || slides.firstElementChild;
    this.prev = this.current.previousElementSibling || slides.lastElementChild;
    this.next = this.current.nextElementSibling || slides.firstElementChild;
    console.log({ current: this.current, prev: this.prev, next: this.next });
  }

  function applyClasses() {
    this.current.classList.add("current");
    this.prev.classList.add("prev");
    this.next.classList.add("next");
  }

  function move(direction) {
    // first strip all the classes off the current slides
    const classesToRemove = ["prev", "current", "next"];
    this.prev.classList.remove(...classesToRemove);
    this.current.classList.remove(...classesToRemove);
    this.next.classList.remove(...classesToRemove);
    if (direction === "back") {
      // make an new array of the new values, and destructure them over and into the prev, current and next variables
      [this.prev, this.current, this.next] = [
        // get the prev slide, if there is none, get the last slide from the entire slider for wrapping
        this.prev.previousElementSibling || slides.lastElementChild,
        this.prev,
        this.current
      ];
    } else {
      [this.prev, this.current, this.next] = [
        this.current,
        this.next,
        // get the next slide, or if it's at the end, loop around and grab the first slide
        this.next.nextElementSibling || slides.firstElementChild
      ];
    }

    applyClasses();
  }

  // when this slider is created, run the start slider function
  startSlider();
  applyClasses();

  // Event listeners
  prevButton.addEventListener("click", () => move("back"));
  nextButton.addEventListener("click", move);
}

const mySlider = Slider(document.querySelector(".slider"));
const dogSlider = Slider(document.querySelector(".dog-slider"));
