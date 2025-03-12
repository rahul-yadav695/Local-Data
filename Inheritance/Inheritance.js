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


// class preant {
//   constructor(name) {
//     this.name = name
//   }
//   present(){
//     console.log(`Name:-${this.name}`)
//   }
// }



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


class preant {
  constructor(name,age,contect){
    this.name = name
    this.age = age
    this.contect = contect
  }

  informesion(){
    
  }
}