// class Pizza {

//     constructor() {
//       this.toppings = ["cheese"];
//     }
  
//     addTopping(topping) {
//       this.toppings.push(topping);
//     }
  
//   }

//   let pizza1 = new Pizza();
// console.log(pizza1.toppings); // ["cheese"]
// pizza1.addTopping("mushrooms");
// pizza1.addTopping("peppers");
// console.log(pizza1.toppings); // ["cheese", "mushrooms", "peppers"]

// let pizza2 = new Pizza();
// console.log(pizza2.toppings); // ["cheese"]
// pizza2.addTopping("more cheese");
// console.log(pizza2.toppings); // ["cheese", "more cheese"];

//EXAMPLE 2

class Pizza {

    constructor(size, crust) {
      this.size = size;
      this.crust = crust;
      this.toppings = ["cheese"];
    }
  
    addTopping(topping) {
      this.toppings.push(topping);
    }
    // setSize(size) {
    //   this.size = size;
    // }
    // getSize() {
    //   return this.size;
    // }
    // setSize now includes data validation
    setSize(size) {
    if (size === 's' || size === 'm' || size === 'l') {
      this.size = size;
    }
    }
    getPrice() {
      const basePrice = 10;
      const toppingPrice = 2;
      return basePrice + (this.toppings.length * toppingPrice);
    }
  
  }

  // const pizza = new Pizza();
  // pizza.setSize('m');
  // pizza.getSize()

    // let pizza = new Pizza();
    // pizza.setSize('s');
    // // let pizza = new Pizza();
    // pizza.getPrice();

  let pizza = new Pizza();
  pizza.price;      // instead of getPrice()
  pizza.size = 's'; // instead of setSize(size)
  
  

  // let pizza = new Pizza('large', 'thin');
//the new pizza created will look like below
//   let pizza = {
//     size: 'large',
//     crust: 'thin',
//     toppings: ["cheese"]
//   }