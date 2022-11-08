window.onload = setEventHandler;

function setEventHandler() {
  document.getElementById("submit").onclick = onSubmit;
}

function onSubmit() {
  let password = document.getElementById("password").value;
  let pattern = new RegExp("^([^d]*|[^a-z]*|[^A_Z]*|[^wd]*|.{0,9})$");
  if (!password.match(pattern)) {
    alert("Form submitted.");
  } else {
    alert(
      "Password field must be atleast 10 characters and must contain at least one number, one uppercase, and one lowercase letter."
    );
  }
}
