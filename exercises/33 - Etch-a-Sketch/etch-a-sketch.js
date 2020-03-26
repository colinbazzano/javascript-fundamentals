/* eslint-disable */

console.log("it works!");

// Select the elements on the page - canvas, shakebutton
const canvas = document.querySelector("#etch-a-sketch");

// context for canvas
const ctx = canvas.getContext("2d");

const shakeButton = document.querySelector(".shake");
const MOVE_AMOUNT = 25; // when it is a true constant, all uppercase
// const width = canvas.width;
// const height = canvas.height;

// do the above, OR the below! they are the same

const { width, height } = canvas;

// create random x and y starting points on the canvas
let x = Math.floor(Math.random() * width);
let y = Math.floor(Math.random() * height);
// console.log("width and height", width, height);
ctx.lineJoin = "round";
ctx.lineCap = "round";
ctx.lineWidth = MOVE_AMOUNT;

let hue = 0;
ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;
ctx.beginPath(); // start the drawing
ctx.moveTo(x, y);
ctx.lineTo(x, y);
ctx.stroke();

// setup our canvas for drawing

// write a draw function
function draw({ key }) {
  // increment the hue
  hue += 10;
  ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;
  console.log("options.key:", key);
  // start the path
  ctx.beginPath();
  ctx.moveTo(x, y);
  // move our x and y values depending on what the user did
  switch (key) {
    case "ArrowUp":
      y -= MOVE_AMOUNT; // same as: y = y - MOVE_AMOUNT
      break;
    case "ArrowRight":
      x += MOVE_AMOUNT; // same as: y = y - MOVE_AMOUNT
      break;
    case "ArrowDown":
      y += MOVE_AMOUNT; // same as: y = y - MOVE_AMOUNT
      break;
    case "ArrowLeft":
      x -= MOVE_AMOUNT; // same as: y = y - MOVE_AMOUNT
      break;
    default:
      break;
  }
  ctx.lineTo(x, y);
  ctx.stroke();
}
// write a handler for the keys
function handleKey(e) {
  if (e.key.includes("Arrow")) {
    e.preventDefault();
    draw({ key: e.key });
  }
}
// clear/shake function
function clearCanvas() {
  canvas.classList.add("shake");
  ctx.clearRect(0, 0, width, height);
  canvas.addEventListener(
    "animationend",
    function() {
      console.log("shaked");
      canvas.classList.remove("shake");
    },
    { once: true }
  );
}

// listen for arrow keys
window.addEventListener("keydown", handleKey);

shakeButton.addEventListener("click", clearCanvas);
