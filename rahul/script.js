

base_url = "https://b5cfda6f-7cd2-4cf5-846e-805b94bfd452-00-jn16reupjmkn.pike.replit.dev/"

function createApi(name,email){
    const myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

const raw = JSON.stringify({
  "name": name,
  "email": email
});

const requestOptions = {
  method: "POST",
  headers: myHeaders,
  body: raw,
  redirect: "follow"
};

fetch(`${base_url}create`, requestOptions)
  .then((response) => response.json())
  .then((result) =>{
    if(result.status === true && result.message === "Succefully created"){
        Toastify({
            text: result.message,
            duration: 3000,
            destination: "https://github.com/apvarun/toastify-js",
            newWindow: true,
            close: true, 
            gravity: "top", // `top` or `bottom`
            position: "right", // `left`, `center` or `right`
            stopOnFocus: true, // Prevents dismissing of toast on hover
            style: {
              background: "linear-gradient(to right, #00b09b, #96c93d)",
            },
            onClick: function(){} // Callback after click
          }).showToast();
    }else if(result.status === false && result.message === "Please provide name and email"){
        Toastify({
            text: result.message,
            duration: 3000,
            destination: "https://github.com/apvarun/toastify-js",
            newWindow: true,
            close: true,
            gravity: "top", // `top` or `bottom`
            position: "right", // `left`, `center` or `right`
            stopOnFocus: true, // Prevents dismissing of toast on hover
            style: {
              background: "red",
            },
            onClick: function(){} // Callback after click
          }).showToast();
    }
  })
  .catch((err) => console.log(err));
}

function clickbtn(){
    let name = document.getElementById("name").value
    let email = document.getElementById("email").value

    createApi(name,email)
}




function createbtn(name){
  const requestOptions = {
    method: "GET",
    redirect: "follow"
  };
  
  fetch(`${base_url}${name}`, requestOptions)
    .then((response) => response.json())
    .then((result) =>{
      if(result.status === true){
        Toastify({
          text: result.message,
          duration: 3000,
          destination: "https://github.com/apvarun/toastify-js",
          newWindow: true,
          close: true,
          gravity: "top", // `top` or `bottom`
          position: "right", // `left`, `center` or `right`
          stopOnFocus: true, // Prevents dismissing of toast on hover
          style: {
            background: "linear-gradient(to right, #00b09b, #96c93d)",
          },
          onClick: function(){} // Callback after click
        }).showToast();
        
      }else if(result.status === false){
Toastify({
  text: result.message,
  duration: 3000,
  destination: "https://github.com/apvarun/toastify-js",
  newWindow: true,
  close: true,
  gravity: "top", // `top` or `bottom`
  position: "right", // `left`, `center` or `right`
  stopOnFocus: true, // Prevents dismissing of toast on hover
  style: {
    background: "aqua",
    color:"red"
  },
  onClick: function(){} // Callback after click
}).showToast();
        
      }
    })
    .catch((error) => console.log(error));
}

function cllickMe(){
  let name = document.getElementById('username').value
 if(name==""){
  name = null
 }
  createbtn(name)
}



 



// function createValue() {
//   fetch("https://b5cfda6f-7cd2-4cf5-846e-805b94bfd452-00-jn16reupjmkn.pike.replit.dev/create")
//     .then((response) => response.json())  
//     .then((data) => {
//       console.log("API Response:", data);  
//     })
//     .catch((err) => {
//       console.error("Error:", err);  
//     });
// }
 

// createValue();


