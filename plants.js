// class Flower {
//     water() {
//       console.log("Watering the flower");
//       this.lastWatered = Date();
//     }
//   }
  
//   class Tree {
//     water() {
//       console.log("Watering the tree");
//       this.lastWatered = Date();
//     }
//   }
  
//   class Bush {
//     water() {
//       console.log("Watering the bush");
//       this.lastWatered = Date();
//     }
//   }

class Plant {
    water() {
      console.log(`Watering the ${this.type}`);
      this.lastWatered = Date();
    }
  }
  
  class Flower extends Plant {
    constructor() {
      super.water()
      this.type = "flower";
    }
  }
  
  class Tree extends Plant {
    constructor() {
      super.water()
      this.type = "tree";
    }
  }
  
  class Bush extends Plant {
    constructor() {
      super.water()
      this.type = "bush";
    }
  }
  