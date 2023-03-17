//Check the login, 2.11-9
let userName = prompt(`who's there?`, "");

if (userName === "Admin") {
  let password = prompt("Enter the password", "");
  if (password === "Master") {
    alert("welcome!");
  } else if (password === null || password === "") {
    alert("canceled");
  } else {
    alert("password is wrong");
  }
} else if (userName === null || userName === "") {
  alert("canceled");
} else {
  alert(`I don't know you!`);
}
