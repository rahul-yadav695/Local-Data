

// let main_row = document.getElementById("main-row")

// function getvalue(images,title,price,rating) {
//     let col1 = document.createElement("div")
//     col1.classList.add("col-sm-12" , "col-md-6" , "col-lg-4" , "mt-3")

//     let cardDiv = document.createElement("div")
//     cardDiv.classList.add("card")
//     let img = document.createElement("img")
//     img.classList.add("card-img-top")
//     img.src = images

//     let card_body = document.createElement("div")
//     card_body.classList.add("card-body")

//     let card_title = document.createElement("h5")
//     card_title.classList.add("card-title")
//     card_title.innerText = title

//     let card_text = document.createElement("p") 
//     card_text.classList.add("card-text")
//     card_text.innerText = price

//     let card_rating = document.createElement("p") 
//     card_rating.classList.add("card-text")
//     card_rating.innerText = `⭐⭐⭐⭐ ${rating}`

//     cardDiv.appendChild(img)
//     card_body.appendChild(card_rating)
//     card_body.appendChild(card_text)
//     card_body.appendChild(card_title)
//     cardDiv.appendChild(card_body)
//     col1.appendChild(cardDiv)
//     main_row.appendChild(col1)


// }


// function caretProducts(){

//     fetch("https://dummyjson.com/products")
//       .then((response) => response.json())
//       .then((result) => {
//         result.products.forEach(element => {
//             getvalue(element.images, element.title, element.price, element.rating)
//         });
//       })
//       .catch((error) => console.error(error));

// }

// caretProducts()


  

function createelement() {
  fetch('https://dummyjson.com/products')
    .then((data) => {
      return data.json();
    }).then((data) => { 
      
      let childCart = document.getElementById("main-row")
      data.products.map((element) => {

        // let child = document.createElement("div")
        childCart.innerHTML += `
        <div class="col-12 col-md-6 col-lg-4 card mt-4">
            <div>
            <img src="${element.images}" alt="" width="50%">
            <h2>${element.title}</h2>
          
            <p><strong>Price:</strong>$${element.price}</p>
            <p>${element.rating}⭐⭐⭐</p>
            <p>${element.description}</p>
            <button class="btn btn-danger" id="name">Click Me</button>
            </div>
            </div>`
            // childCart.appendChild(child)
      })
    })
    .catch((err) => console.log(err))
}
createelement();

               

 