let login = prompt("Who's there?");

if (login === "Admin") {
  let password = prompt("Enter the Password");
  if (password === "TheMaster") {
    alert("Welcome!");
  } else if (!password) {
    alert("Canceled");
  } else {
    alert("Wrong Password");
  }
} else if (!login) {
  alert("Canceled");
} else {
  alert("i don't know you");
}
