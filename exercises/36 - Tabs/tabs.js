console.log("ya ya wes we get it.. IT WORKS!");
/* eslint-disable */
const tabs = document.querySelector(".tabs");

const tabButtons = tabs.querySelectorAll('[role="tab"]');
const tabPanels = Array.from(tabs.querySelectorAll('[role="tabpanel"]'));

function handleTabClick(event) {
  // hide all tab panels
  tabPanels.forEach(panel => {
    panel.hidden = true;
  });
  // mark all tabs as unselected
  tabButtons.forEach(tab => {
    // tabButtons.ariaSelected = false;
    tab.setAttribute("aria-selected", false);
  });
  // mark clicked tab as selected
  event.currentTarget.setAttribute("aria-selected", true);
  // find the associated tabPanel and show it!
  const id = event.currentTarget.id;
  // METHOD 1
  //   const tabPanel = tabs.querySelector(`[aria-labelledby="${id}"]`);
  //   tabPanel.hidden = false;
  // METHOD 2 - find in the array of tabPanels
  const tabPanel = tabPanels.find(
    panel => panel.getAttribute("aria-labelledby") === id
  );
  tabPanel.hidden = false;
}

tabButtons.forEach(button => button.addEventListener("click", handleTabClick));
