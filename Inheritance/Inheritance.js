"CLASS"
"class ek blueprint hai jisme aap objects ko define karte ho. Class ke andar methods (functions) aur properties (variables) define ki ja sakti hain. Aap class ka use karke multiple objects create kar sakte ho, jisme har object apne respective data aur behavior ko hold karega."

"Constructor"
"Constructor ek special method hai jo class ke object ko initialize karne ke liye use hota hai. Jab aap new keyword se class ka object create karte ho, constructor automatically call ho jaata hai. Yeh object ke properties ko initialize karta hai."


// class Car {
//   constructor(brand) {
//     this.carname = brand;
//   }
//   present() {
//     console.log(`this car uses ${this.carname}`)
//   }
// }

// class Model extends Car {
//   constructor(brand, mod) {
//     super(brand);
//     this.model = mod;
//   }
//   show() {
//     console.log(`${this.present()} it a ${this.model}`)
//   }
// }

// let myCar = new Model("Ford", "Mustang");
// console.log(myCar)
// document.getElementById("demo").innerHTML = myCar.show();



2.

// class Parent{
//   constructor(name){
//       this.name = name;
//   }
//   displayName(){
//       console.log(`Name: ${this.name}`)
//   }
// }

// class Child extends Parent{
//   constructor(){
//       super("rahul")
//   }
// }

// let child1 = new Child("rahul yadav");
// child1.displayName()


// class preant {
//   constructor(name,age,contect){
//     this.name = name
//     this.age = age
//     this.contect = contect
//   }

//   informesion(){
//     console.log(`Name:-${this.name}`)
//     console.log(`Age:-${this.age}`)
//     console.log(`Contect:-${this.contect}`) 
//   }
// }

// class child extends preant {
//   constructor(){
//     super(`vikasnai`)
//   }
// } 

// let final = new preant("Rahul yadav", 20 , 54554514)
// final.informesion()


1.

// class arr {
//   constructor(name) {
//     this.name = name
//   }
//   intro() {
//     console.log(`name:- ${this.name} :- ${this.name.length}`)
//   }

// }
// class childd extends arr {
//   constructor(name) {
//     super(name)
//   }
// }

// let value = new arr("rahulyadav")
// value.intro()

// class Main {
//   constructor(value1, value2) {
//     this.value1 = value1
//     this.value2 = value2
//   }

//   printvalue(){
//     let newarr = []
//     for(let i=0; i<this.value1.length; i++){
//       for(let j=0; j<this.value2.length; j++){
//         if(this.value1[i]==this.value2[j]){
//           newarr.push(this.value1[j])
//         }
//       }
//     }
//     console.log(newarr)
//   }
// }

// let finalarr = new Main ([1,2,3,4],[1,3])
// finalarr.printvalue()






// class MaxValue {
//   constructor(num, num2) {
//     this.num = num
//     this.num2 = num2
//   }

//   print() {
//     let max = 0
//     for (let i = 0; i < this.num.length; i++) {
//       if (this.num[i] > max) {
//         max = this.num[i]
//       }
//     }
//     console.log(max)
//   }
// }

// let final = new MaxValue([10, 20, 55, 65, 13, 16, 78])
// final.print()


1.

// class Names{
//   constructor(name){
//     this.name = name
//   } 
//   final(){
//     console.log(this.name.length)
//   }

// }
// let last = new Names("dsfdsf")
// last.final()



// class User {
//   constructor(username){
//     this.username = username
//   }

//   logme(){
//     console.log(`username:-${this.username}`)
//   }
// } 

// class Teacher extends User {
//   constructor(username,email,password){
//     super(username)
//     this.email = email 
//     this.password =password
//   }

//   course(){
//     console.log(`the username:-${this.username}`)
//   }
 
// }

// let newarr = new Teacher("Ankit","ankit@gmail.com",123)
// newarr.id()

// console.log(Teacher==User)


// class New{
//   constructor(username) {
//     this.username = username
//   }

//   logMe(){
//     console.log(`Username:-${this.username}`)
//   }
//   static logId(){
//     return 231
//   }
// }

// const rahul = new New ("rahul")
// // console.log(rahul.logId())

// class wordld extends New{
//   constructor(username,email){
//     super(username)
//     this.email = email 
//   }
 
// }
// const ip = new wordld("iphone","iphone@gmail.com")
// ip.logId()

// console.log(logId()==logMe())


// class Car {
//   constructor(brand) {
//     this.carname = brand;
//   }
//   static hello() {  // static method 
//    return "hello!"
//   }
// }

// let mycar = new Car("Ford");
// console.log(mycar.hello())


 
// class print {
//   constructor(value,key){
//     this.value = value 
//     this.key = key 
//   }

//   hello(){
//     let arr = []
//     for(let i=0; i<this.value.length; i++){
//       if(Array.isArray(this.value[i])){
//         for(let j=0; j<this.key.length; j++){
//             arr.push(this.value[i][j])
//         }
//       }else{
//         arr.push(this.value[i])
//       }
//     }
//     console.log(arr)
//   }
// }

// let newcode = new print([1,2,3[4,5,6,7][8,9,10,11]])
// newcode.hello()


let Arr = [1,2,3[4,5,6,7][8,9,10,11]]
let newarr = []
for(let i=0; i<Arr.length; i++){
  if(Array.isArray(Arr[i])){
    for(let j=0; j<Arr[i].length; j++){
      newarr.push(Arr[i][j])
    }
  }else{
    newarr.push(Arr[i])
  }
}
console.log(newarr)