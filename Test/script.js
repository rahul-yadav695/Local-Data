
// // let obj = {}

// // let row = document.getElementById("Main-row")

// // function getvalue(){
// //     fetch("https://api.escuelajs.co/api/v1/products")
// //     .then((data)=>{
// //         return data.json()
// //     }).then((data)=>{
// //         obj = data.obj
// //     })

// //     row.innerHTML = `    <div class="col-lg-12 text-center">
// //                 <h2>Classic Grey Hooded Sweatshirt</h2>
// //             </div>
// //             <div class="col-lg-4">
// //                 <div>
// //                     <h3>classic-grey-hooded-sweatshirt</h3>
// //                     <p>90</p>
// //                     <p>test</p>
// //                     <img src="https://i.imgur.com/R2PN9Wq.jpeg" alt="">
// //                 </div>
// //             </div>
// //             <div class="col-lg-4">
// //                 <div>
// //                     <h3>classic-black-hooded-sweatshirt</h3>
// //                     <p>79</p>
// //                     <p>Elevate your casual wardrobe with our Classic Black Hooded Sweatshirt. Made from high-quality, soft fabric that ensures comfort and durability, this hoodie features a spacious kangaroo pocket and an adjustable drawstring hood. Its versatile design makes it perfect for a relaxed day at home or a casual outing.</p>
// //                     <img src="https://i.imgur.com/cE2Dxh9.jpeg" alt="">
// //                 </div>
// //             </div>
// //             <div class="col-lg-4">
// //                 <div>
// //                     <h3>classic-comfort-fit-joggers</h3>
// //                     <p>25</p>
// //                     <p>Discover the perfect blend of style and comfort with our Classic Comfort Fit Joggers. These versatile black joggers feature a soft elastic waistband with an adjustable drawstring, two side pockets, and ribbed ankle cuffs for a secure fit. Made from a lightweight and durable fabric, they are ideal for both active days and relaxed lounging.</p>
// //                     <img src="https://i.imgur.com/GJi73H0.jpeg" alt="">
// //                 </div>
// //             </div>`
// // }

 
// function getvalue() {
//     fetch('https://api.escuelajs.co/api/v1/products')
//     .then((response) => response.json())
//     .then((data) => {
//         console.log(data);

//         let MainCount = document.getElementById("product-cart");
//         if(!MainCount){
//             console.log('Something Went Wrong Please Try Again')
//         }

//         data.forEach((result) => {
//             let childDiv = document.createElement('div');
//             childDiv.innerHTML = `
//                 <div class="col-lg-4">
//                     <h3>${result.title}</h3> 
//                     <p><strong>Price:</strong> $${result.price}</p>
//                     <p>${result.description}</p>
//                     <img src="${result.images?.[0]}" alt="${result.title}" width="200">
//                 </div>`;
//             MainCount.appendChild(childDiv);
//         });
//     })
//     .catch((err) => {
//         console.log("please try again", err);
//     });
// }

// getvalue();




// let Row = document.getElementById("product-cart")

// function create(){
//     let preantDiv = document.createElement('div')
//     preantDiv.classList.add('col-sm-12','col-md-6','col-lg-4')

//     let child = document.createElement('div')
//     child.classList.add('card')
// }




