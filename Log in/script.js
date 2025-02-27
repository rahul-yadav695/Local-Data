
// function login() {
//   let phone = document.getElementById("Numbers");
//   phone.value
//   let password = document.getElementById("password");
//   password.value

//   if (phone.value === "" && password.value === "") {
//     alert("Please complited file");
//   } else {
//     alert("Login successful!");
//   }

//   phone.value = ""
//   password.value = ""

// };


// function createapi(){
//   let input_fild = document.getElementById("Numbers")
//   let value = input_fild.value

//   if(value.length!=10){
//     alert('complite your 10 digit namber')
//   }else if(value[0]!="9"&&value[0]!="8"&&value[0]!="7"&&value[0]!="6"){
//     alert('start digit 9,8,7,6 ')
//   }

//   input_fild.value = ""

// } 




2.

// function getMobileNumberFromInput(){
//   let input =  document.getElementById("Numbers");
//   let value = input.value
//   if(value.length!=10){
//       console.log(input.classList[0],"i am classes")
//       input.classList.remove("form-control-active")
//       input.focus()
//       input.classList.add("form-control-after")

//       alert("Mobile number must be of 10 digit")
      
//   } else if(value[0]!="9" && value[0]!="8" && value[0]!="7" && value[0]!="6"){
//       alert("Moblie number must start with 9,8,7 or 6")
//       input.classList.remove("form-control")
//       input.focus()
//       input.classList.add("form-control-after")
//   } else{
//       input.classList.remove("form-control-after");
//       input.classList.add("form-control-active")
//   }
//   console.log(value[0])
// }



// let FormInputValue  = document.getElementById("signin-form")
// function submitForm(event){
//   event.preventDefault();
// }
// FormInputValue.addEventListener('submit',submitForm)


// let input =  document.getElementById("exampleInputEmail1");
// input.addEventListener('focus',function(e){
//     console.log("clicked")
//     this.style.boxShadow = "0 0 0 .25rem red"
// })


4.

function CreateInputValue(){
  let input = document.getElementById("Numbers")
  let value = input.value

  if(value.length!=10){
    alert("Please 10 Digit Number Enter")
    input.classList.remove('form-control-after')
    input.focus()
    input.classList.add("form-control-active")
  }else if(value[0]!="6"&&value[0]!="9"&&value[0]!="8"&&value[0]!="7"){
    alert("Start Number Digit 6,7,8,9")
    input.classList.remove('form-control-after')
    input.focus()
    input.classList.add("form-control-active")
  }else{
    input.classList.remove("form-control-after")
    input.classList.add('form-control-active')
    window.location = '/otp'
  }
  console.log(value[0])
}

let found = document.getElementById("signin-form")

function create(event){
    event.preventDefault()
}
found.addEventListener('submit',create)