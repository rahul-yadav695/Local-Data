function getMobileNumberFromInput() {
  let input = document.getElementById("Numbers");
  let value = input.value
  if (value.length != 10) {
    console.log(input.classList[0], "i am classes")
    input.classList.remove("form-control-active")
    input.focus()
    input.classList.add("form-control-after")

    alert("Mobile number must be of 10 digit")

  } else if (value[0] != "9" && value[0] != "8" && value[0] != "7" && value[0] != "6") {
    alert("Moblie number must start with 9,8,7 or 6")
    input.classList.remove("form-control")
    input.focus()
    input.classList.add("form-control-after")
  } else {
    input.classList.remove("form-control-after");
    input.classList.add("form-control-active")

  }
  console.log(value[0])                         

  let password = document.getElementById("password")
  let passwordValue = password.value;
  if (passwordValue.length <= 8) {
    alert("please 8 character add me")
  } else {
    SigninPage(Mobile,value)
  }
} 

let FormInputValue = document.getElementById("signin-form")
function submitForm(event) {
  event.preventDefault();
}
FormInputValue.addEventListener('submit', submitForm)




let base_url = "http://localhost:3000";


function SigninPage(Mobile,Password) {
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
    .then((result) =>{
      if(result.success && result.message==="Successfully completed the request" && result.data){
        document.getElementById("Numbers").value = ""
        document.getElementById("password").value = ""
        localStorage.getItem("uuid",result.data)
        
        window.location.href = "/OtpPage/index.html" 

      }else if(!result.success){
        alert("Something Went Wrong Please Try Again Later")
      }
    })
    .catch((error) => console.log(error));
}