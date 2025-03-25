// let obj = {}

// let mainRow = document.getElementById("main-row")

// function getRates() {
//     fetch('https://api.coindesk.com/v1/bpi/currentprice.json')
//         .then((data) => {
//             return data.json()
//         })
//         .then((data) => {
//             obj = data.bpi;
//             console.log(obj)

//             mainRow.innerHTML = `
//                 <div class="col-lg-12 text-center">
//                 <h3>Bitcoin</h3>
//             </div>

//             <div class="col-lg-4">
//               <div class="card">
//                 <h3>USD</h3>
//                 <p>&#36; <span>94,819.859</span></p>
//                 <p>United States Dollar</p>
//               </div>
//             </div>

//             <div class="col-lg-4">
//                 <h3>GBP</h3>
//                 <p>&pound; <span>76,148.596</span></p>
//                 <p>British Pound Sterling</p>
//             </div>

//             <div class="col-lg-4">
//                 <h3>EUR</h3>
//                 <p>&euro; <span>90,655.086</span></p>
//                 <p>Euro</p>
//             </div>`

//         })
//         .catch((err) => {
//             console.log(err)
//         })
// }


// setTimeout(() => {
//     getRates()
// }, 3000);
