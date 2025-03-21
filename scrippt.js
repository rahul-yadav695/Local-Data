
// let row = document.getElementById('row');

// function CardProduct(data) {
//     let smartdiv = document.createElement('div');
//     smartdiv.classList.add('col-sm-12', 'col-md-6', 'col-lg-4');

//     let cardDiv = document.createElement('div');
//     cardDiv.classList.add('card');
//     cardDiv.style.width = '100%';

//     let imgElement = document.createElement('img');
//     imgElement.src = data.image;
//     imgElement.classList.add('card-img-top');
//     imgElement.alt = "product-img";

//     let cardPrent = document.createElement('div');
//     cardPrent.classList.add('card-body');

//     let cardH5 = document.createElement('h5');
//     cardH5.classList.add('card-title');
//     cardH5.innerText = data.name;

//     let cardPera = document.createElement('p');
//     cardPera.classList.add('card-text');
//     cardPera.innerText = data.species;

//     smartdiv.appendChild(cardDiv);
//     cardDiv.appendChild(imgElement);
//     cardDiv.appendChild(cardPrent);
//     cardPrent.appendChild(cardH5);
//     cardPrent.appendChild(cardPera);

//     row.appendChild(smartdiv);
// }

// function Api() {
//     fetch('https://rickandmortyapi.m/api/character/?page=2')
//         .then((data) => {
//             return data.json()
//         })
//         .then((data) => {
//             console.log(data);
//             // data.map((value,key)=>{
//             //     CardProduct(value)
//             // }) 
//             data.results.forEach(element => {
//                 CardProduct(element)
//             });
//         })
//         .catch((error) => {

//             console.error(error );
//         });
//         setTimeout((Api,fetch) => {
//             row.innerHTML = `<h3>somthing is wrong please try again and fast your work</h3> <div class="spinner-border" role="status">
//             <span class="visually-hidden">Loading...</span>
//           </div> `
//         }, 3000);



// }

// Api();

// const base_url = "https://b5cfda6f-7cd2-4cf5-846e-805b94bfd452-00-jn16reupjmkn.pike.replit.dev/"


// function create(name, email) {
//     const myHeaders = new Headers();
//     myHeaders.append("Content-Type", "application/json");

//     const raw = JSON.stringify({
//         "name": name,
//         "email": email
//     });

//     const requestOptions = {
//         method: "POST",
//         headers: myHeaders,
//         body: raw,
//         redirect: "follow"
//     };

//     fetch(`${base_url}create`, requestOptions)
//         .then((response) => response.json())
//         .then((result) => {
//             if(result.status === true && result.message === "Succefully created"){
//                 Toastify({
//                     text: result.message,
//                     duration: 3000,
//                     destination: "https://github.com/apvarun/toastify-js",
//                     newWindow: true,
//                     close: true,
//                     gravity: "top", // top or bottom
//                     position: "right", // left, center or right
//                     stopOnFocus: true, // Prevents dismissing of toast on hover
//                     style: {
//                       background: "linear-gradient(to right, #00b09b, #96c93d)",
//                     },
//                     onClick: function(){} // Callback after click
//                   }).showToast();
//             } else if(result.status === false && result.message === "Please provide name and email"){
//                 Toastify({
//                     text: result.message,
//                     duration: 3000,
//                     destination: "https://github.com/apvarun/toastify-js",
//                     newWindow: true,
//                     close: true,
//                     gravity: "top", // top or bottom
//                     position: "right", // left, center or right
//                     stopOnFocus: true, // Prevents dismissing of toast on hover
//                     style: {
//                       background: "red",
//                       color:"white"
//                     },
//                     onClick: function(){} // Callback after click
//                   }).showToast();
//             }
//         })
//         .catch((error) => console.error(error));
// }


// function btnClick() {
//     let name = document.getElementById("name").value;
//     let email = document.getElementById("email").value;

//     create(name, email)
// }

// function getName(name){
//     const requestOptions = {
//         method: "GET",
//         redirect: "follow"
//       };

//       fetch(`${base_url}${name}`, requestOptions)
//         .then((response) => response.json())
//         .then((result) => {
//             if(result.status === true){
//                 Toastify({
//                     text: result.message,
//                     duration: 3000,
//                     destination: "https://github.com/apvarun/toastify-js",
//                     newWindow: true,
//                     close: true,
//                     gravity: "top", // top or bottom
//                     position: "right", // left, center or right
//                     stopOnFocus: true, // Prevents dismissing of toast on hover
//                     style: {
//                       background: "linear-gradient(to right, #00b09b, #96c93d)",
//                     },
//                     onClick: function(){} // Callback after click
//                   }).showToast();
//             } else if(result.status === false){
//                 Toastify({
//                     text: result.message,
//                     duration: 3000,
//                     destination: "https://github.com/apvarun/toastify-js",
//                     newWindow: true,
//                     close: true,
//                     gravity: "top", // top or bottom
//                     position: "right", // left, center or right
//                     stopOnFocus: true, // Prevents dismissing of toast on hover
//                     style: {
//                       background: "red",
//                       color:"white"
//                     },
//                     onClick: function(){} // Callback after click
//                   }).showToast();
//             }
//         })
//         .catch((err) => console.log(err));
// }

// function getUserName(){
//     let username = document.getElementById("username").value;
//     if(username == ""){
//         username = "null"
//     }
//     getName(username)

// } 


function createValue() {
  fetch('https://api.escuelajs.co/api/v1/products')
    .then((data) => {
      return data.json();
    }).then((data) => {
                                               
      
      let row = document.getElementById('product-images')

      data.map((product) => {
        let ChildCart = document.createElement('div')
        ChildCart.innerHTML = `
        <div class="container">
        <div class="row">
            <div class="col-lg-4">
                <h2>${product.title}</h2>
                <p>${product.slug}</p>
                <p><strong>Price:</strong>$${product.price}</p>
                <p>${product.description}</p>
                <img src="${product.image}" alt="${product.title}">
            </div>
        </div>
    </div>`
        row.appendChild(ChildCart)
      })
    }).catch((err) => {
      console.log(err)
    })
}
createValue();



