class Car {
  constructor(brand) {
    this.carname = brand;
  }
  present() {
    console.log(`this car uses ${this.carname}`)
  }
}

class Model extends Car {
  constructor(brand, mod) {
    super(brand);
    this.model = mod;
  }
  show() {
    console.log(`${this.present()} it a ${this.model}`)
  }
}

let myCar = new Model("Ford", "Mustang");
console.log(myCar)
// document.getElementById("demo").innerHTML = myCar.show();


