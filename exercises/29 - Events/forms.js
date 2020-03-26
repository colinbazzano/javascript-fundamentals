const wes = document.querySelector(".wes");

wes.addEventListener("click", function(event) {
  const shouldChangePage = confirm("this website might have weird stuff");
  //   if (shouldChangePage) {
  //     window.location = event.currentTarget.href;
  //   }
  if (!shouldChangePage) {
    event.preventDefault();
  }
  console.log("you clicked the link!");
});

const signUpForm = document.querySelector('[name="signup"]');

signUpForm.addEventListener("submit", function(event) {
  event.preventDefault();
  console.log(event.currentTarget.name.value);
  console.log(event.currentTarget.email.value);
  // this is for checking the checkbox // true or false
  console.log(event.currentTarget.agree.checked);
  const name = event.currentTarget.name.value;
  if (name.includes("chad")) {
    alert("sorry bro");
    event.preventDefault();
  }
});
function logEvent(event) {
  console.log(event.type);
  console.log(event.currentTarget.value);
}
signUpForm.name.addEventListener("keyup", logEvent);
signUpForm.name.addEventListener("keydown", logEvent);
