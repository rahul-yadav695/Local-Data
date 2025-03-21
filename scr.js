

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


// let obj = {name:"vivo",price:12000}
// let count = true
// let pro = new Promise((resolve,reject)=>{
//     if(count && obj.price %2===0){
//         resolve({name:"oppo",price:10900})
//     }else{
//         reject({name:"oppo",price:10900})
//     }
// })
// pro.then((data)=> console.log(data.price+4100))
// .catch((err) => console.log(err.price-1200))

 

// class MaxNamber {
//     constructor(key, arr) {
//         this.key = key
//         this.arr = arr
//     }

//     print() {
//         let newarr = []
//         for (let i = 0; i < this.key.length; i++) {
//             for (let j = 0; j < this.key[i]; j++) {
//                 if (this.key[i]>this.arr[j]) {
//                     newarr.push(this.key[j])
//                 }
//             }
//         }
//         console.log(newarr)
//     }
// }

// let newarr = new MaxNamber([10, 20, 30, 2, 55, 45, 78, 12])
// newarr.print()