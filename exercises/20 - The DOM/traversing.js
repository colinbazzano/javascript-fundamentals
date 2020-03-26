const wes = document.querySelector(".wes");

console.log(wes.children);
console.log(wes.childNodes);

const p = document.createElement("p");

p.textContent = "I will be removed";

document.body.appendChild(p);

p.remove();

console.log(p);
