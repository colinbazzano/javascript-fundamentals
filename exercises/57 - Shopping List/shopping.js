/* eslint-disable */

const shoppingForm = document.querySelector(".shopping");
const list = document.querySelector(".list");

// We need an array to hold our state
let items = [];

function handleSubmit(e) {
  e.preventDefault();
  console.log("submitted");
  const name = e.currentTarget.item.value;
  if (!name) return;
  const item = {
    name,
    id: Date.now(),
    complete: false
  };
  // push the items into our state
  items.push(item);
  console.log(`There are now ${items.length} in your state!`);
  // clear the form
  e.currentTarget.item.value = "";
  // fire off a custom event that will tell anyone else who cares that the items have been updated
  list.dispatchEvent(new CustomEvent("itemsUpdated"));
}

function displayItems() {
  const html = items
    .map(
      item => `<li class="shopping-item">
    <input
    type="checkbox"
    value="${item.id}"
    ${item.complete ? "checked" : ""} >
    <span class="itemName">${item.name}</span>
    <button aria-label="Remove ${item.name}" value="${item.id}">&times;</button>
    </li>`
    )
    .join("");
  list.innerHTML = html;
}

function mirrorToLocalStorage() {
  console.info("saving items to localstorage");

  localStorage.setItem("items", JSON.stringify(items));
}

function restoreFromLocalStorage() {
  console.info("restoring from local storage");
  const lsItems = JSON.parse(localStorage.getItem("items"));
  if (lsItems.length) {
    items.push(...lsItems);
    list.dispatchEvent(new CustomEvent("itemsUpdated"));
  }
}

function deleteItem(id) {
  console.log("deleting...", id);
  items = items.filter(item => item.id !== id);
  list.dispatchEvent(new CustomEvent("itemsUpdated"));
}

function markAsCompleted(id) {
  console.log("completed...");
  const itemRef = items.find(item => item.id === id);
  itemRef.complete = !itemRef.complete;
  list.dispatchEvent(new CustomEvent("itemsUpdated"));
}

shoppingForm.addEventListener("submit", handleSubmit);
list.addEventListener("itemsUpdated", displayItems);
list.addEventListener("itemsUpdated", mirrorToLocalStorage);

// event delegation - we listened to the click on the list ul but then delegate the click over to the button if that was what was clicked
list.addEventListener("click", function(e) {
  const id = parseInt(e.target.value);
  if (e.target.matches("button")) {
    deleteItem(id);
  }
  if (e.target.matches('input[type="checkbox"]')) {
    markAsCompleted(id);
  }
});
restoreFromLocalStorage();
