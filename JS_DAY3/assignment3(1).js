function login() {
  let username = document.getElementById("user").value;
  let password = document.getElementById("pass").value;
  let invalidmesage = document.getElementById("invalidmessage");

  if (username === "citiustech" && password === "citiustech") {
    window.open("https://www.google.com", "", "toolbar=no", "_blank");
  } else {
    invalidmesage.innerHTML = "invalid credentials";
  }
}
