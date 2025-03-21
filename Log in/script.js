// import base_url from "../export.js"; 


function getMobileNumberFromInput() {
  let input = document.getElementById("Numbers");
  let value = input.value
  if (value.length != 10) {

    console.log(input.classList[0], "i am rahul");
    input.classList.remove("form-control-active");
    input.focus();
    input.classList.add("form-control-after");
    alert("Mobile number must be of 10 digit");


  } else if (value[0] != "9" && value[0] != "8" && value[0] != "7" && value[0] != "6") {
    input.classList.remove("form-control-active");
    input.focus();
    input.classList.add("form-control-after");
    alert(`Moblie number must start with ${9},${8},${7} or ${6}`);
  } else if (value.length == 10) {
    // window.location.href = "/OtpPage/index.html"
  } else {
    input.classList.remove("form-control-active");
    input.classList.add("form-control-after");
  }
  console.log(value[0])

  let password = document.getElementById("password")

  let passwordValue = password.value;
  if (passwordValue.length <= 8) {
    alert("please 8 character add me");
  } else if (passwordValue.length > 15) {
    alert("please 15 under password used  try again later")
  }

}


let FormInputValue = document.getElementById("signin-form")
function submitForm(event) {
  event.preventDefault();

}
FormInputValue.addEventListener('submit', submitForm)

// let base_url = "http://localhost:3000";

function SigninPage(Mobile, Password) {
  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  const raw = JSON.stringify({
    "Mobile": Mobile,
    "passwprd": Password
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
        document.getElementById("Numbers").value = ""
        document.getElementById("password").value = ""
        localStorage.getItem("uuid", result.data)
        // window.location.href = "/OtpPage/index.html"

      } else if (!result.success) {
        alert("Something Went Wrong Please Try Again Later")
        console.log("ere");

      }
    })
    .catch((error) => console.log(error));
}

let submit_button = document.getElementById("main-buton").addEventListener("click", () => {
  getMobileNumberFromInput()
})

function getinputvalue() {
  let input = document.getElementById('Numbers')
  let value = input.value

  if (value.length != 10) {
    console.log(input.classList[0])
    input.classList.remove('form-control-after')
    input.focus()
    input.classList.add('form-control-active')

    alert('Enter 10 Digit number')

  } else if (value[0] != "6" && value[0] != "7" && value[0] != "8" && value[0] != "9") {
    alert("Enter Digit Number 6,7,8,9")
    input.classList.remove("form-control-after")
    input.focus()
    input.classList.add('form-control-active')
  } else {
    input.classList.remove('form-control-after')
    input.classList.add('form-control-active')
  }

  console.log(value[0])
}


// let password = document.getElementById("password")
// let passwordValue = password.value
// if (passwordValue.length <= 10) {
//   alert("please password length 10 digit ")
// } else if (passwordValue.length >= 15) {
//   alert("Max num Digit 15:-")
// } else {
//   CreateinputValue()
// }

// let FormInputValue = document.getElementById("signin-form")
// function submitForm(event) {
//   event.preventDefault();

// }
// FormInputValue.addEventListener('submit', submitForm)


// let base_url = "http://localhost:3000";

// function CreateinputValue(mobile, password) {
//   const myHeaders = new Headers();
//   myHeaders.append("Content-Type", "application/json");

//   const raw = JSON.stringify({
//     "Mobile": mobile,
//     "passwprd": password
//   });

//   const requestOptions = {
//     method: "POST",
//     headers: myHeaders,
//     body: raw,
//     redirect: "follow"
//   };

//   fetch("http://localhost:3000/api/v1/auth/signin/request", requestOptions)
//     .then((response) => response.json())
//     .then((result) => {
//       if (result.success && result.message === "Successfully message printeed" && result.data) {
//         document.getElementById("Numbers").value = ""
//         document.getElementById("password").value = ""
//         // console.log("uuid",result.data)
//         localStorage.getItem('uuid', result.data)
//       } else if (!result.success) {
//         alert("Something Went Wrong Please try Again Latter")
//       }
//     })
//     .catch((err) => console.log(err));
// }



// let arr = [1, 2, [1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12], [13, 14, 15, 16]];
// let newarr = [];
// for (let i = 0; i < arr.length; i++) {
//   if (Array.isArray(arr[i])) {
//     for (let j = 0; j < arr[i].length; j++) {
//       newarr.push(arr[i][j])
//     }
//   } else {
//     newarr.push(arr[i])
//   }
// }
// console.log(newarr)