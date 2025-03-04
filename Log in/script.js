function getMobileNumberFromInput() {
  let input = document.getElementById("Numbers");
  let value = input.value;

  if (value.length !== 10) {
    input.classList.remove("form-control-active");
    input.focus();
    input.classList.add("form-control-after");
    alert("Mobile number must be 10 digits");
    return;
  } else if (!["9", "8", "7", "6"].includes(value[0])) {
    alert("Mobile number must start with 9, 8, 7, or 6");
    input.classList.remove("form-control");
    input.focus();
    input.classList.add("form-control-after");
    return;
  } else {
    input.classList.remove("form-control-after");
    input.classList.add("form-control-active");
  }

  let password = document.getElementById("password");
  let passwordValue = password.value;

  if (passwordValue.length < 8) {
    alert("Password must be at least 8 characters long");
    return;
  } else if (passwordValue.length > 15) {
    alert("Password must be under 15 characters");
    return;
  } 

  SigninPage(value, passwordValue);
}

let form = document.getElementById("signin-form");

function submitForm(event) {
  event.preventDefault();
  getMobileNumberFromInput(); // Ensure validation and submission are triggered
}

form.addEventListener('submit', submitForm);

let base_url = "http://localhost:3000";

function SigninPage(Mobile, Password) {
  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  const raw = JSON.stringify({
    "Mobile": Mobile,
    "password": Password  // Fixed typo "passwprd" → "password"
  });

  const requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: raw,
    redirect: "follow"
  };

  fetch(`${base_url}/api/v1/auth/signin/request`, requestOptions)
    .then((response) => response.json())
    .then((result) => {
      if (result.success && result.message === "Successfully completed the request" && result.data) {
        document.getElementById("Numbers").value = "";
        document.getElementById("password").value = "";
        localStorage.setItem("uuid", result.data);  // Fixed incorrect getItem → setItem

        window.location.href = "/OtpPage/index.html";
      } else {
        alert("Something went wrong. Please try again later.");
      }
    })
    .catch((error) => console.error("Error:", error));
}
