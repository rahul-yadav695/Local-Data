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


class preant {
  constructor(name,age,contect){
    this.name = name
    this.age = age
    this.contect = contect
  }

  informesion(){
    console.log(`Name:-${this.name}`)
    console.log(`Age:-${this.age}`)
    console.log(`Contect:-${this.contect}`) 
  }
}

class child extends preant {
  constructor(){
    super(`vikasnai`)
  }
} 

let final = new preant("Rahul yadav", 20 , 54554514)
final.informesion()