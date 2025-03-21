 

// let obj = {}

// let row = document.getElementById("main-row")

// function getApi() {
//     fetch('https://api.coindesk.com/v1/bpi/currentprice.json')
//         .then((data) => {
//             return data.json()
            
//         })
//         .then((data) => {
//             obj = data.bpi
//             console.log(data)
                
//         row.innerHTML = `  
//             <div class="col-lg-12">
//                 <div>
//                     <h2 class="text-center">Bitcoin</h2>
//                 </div>
//             </div>

//             <div class="col-lg-4">
//                 <div class="card px-3 py-3">
//                     <h2>${obj.USD.code}</h2>
//                     <p>${obj.USD.symbol} <span>${obj.USD.rate}</span></p>
//                     <p>${obj.USD.description}</p>
//                 </div>
//             </div>
//             <div class="col-lg-4">
//                 <div class="card px-3 py-3">
//                     <h2>${obj.GBP.code}</h2>
//                     <p>${obj.GBP.symbol} <span>${obj.GBP.rate}</span></p>
//                     <p>${obj.GBP.description}</p>
//                 </div>
//             </div>
//             <div class="col-lg-4">
//                 <div class="card px-3 py-3">
//                     <h2>${obj.EUR.code}</h2>
//                     <p>${obj.EUR.symbol} <span>${obj.EUR.rate}</span></p>
//                     <p>${obj.EUR.description}</p>
//                 </div>
//             </div>`
//         })
//         .catch((err) => {
//             console.log(err)
//             row.innerHTML = '<h1>Something Went Wrong Please Try Again</h1>'
            
//         })
// }


// setTimeout(() => {
//     getApi()
// }, 2000);