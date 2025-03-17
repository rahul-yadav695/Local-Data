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


class Main {
  constructor(FirstValue,SecondValue){
    this.FirstValue = FirstValue
    this.SecondValue = SecondValue
  }

  
  FinalValues(){
    let newarr = []
    for(let i=0; i<this.FirstValue.length; i++){
      for(let j=0; j<this.SecondValue.length; j++){
        if(this.FirstValue[i]==this.SecondValue[j]){
          newarr.push(this.FirstValue[j])
        }
      }
    }
    console.log(newarr)
  }
}

let last = new Main ([1,2,3,4],[2,3])
last.FinalValues()
// let finalarr = last.FinalValues()
// console.log(finalarr);
 



class MaxValue{
  constructor(num,num2){
    this.num = num
    this.num2 = num2
  }

  print(){
    let max = 0
    for(let i=0; i<this.num.length; i++){
      if(this.num[i]>max){
        max=this.num[i]
      }
    }
    console.log(max)
  }
}

let final = new MaxValue([10,20,55,65,13,16,78])
final.print()