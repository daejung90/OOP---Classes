// This class represents all that is common between Student and Mentor
class Person {
    // moved here b/c it was identical
    constructor(name, quirkyFact) {
      this.name = name;
      this.quirkyFact = quirkyFact;
    }
  
    // moved here b/c it was identical
    bio() {
      return `My name is ${this.name} and here's my quirky fact: ${this.quirkyFact}`;
    }
  }

  class Student extends Person {
    // stays in Student class since it's specific to students only
    enroll(cohort) {
      this.cohort = cohort;
    }
  }
  
  class Mentor extends Person {
    // specific to mentors
    bio() {
        return `I'm a mentor at Lighthouse Labs. ${super.bio()}`; //use SUPER to bring a method form the superclass
        
      }
    goOnShift() {
      this.onShift = true;
    }
  
    // specific to mentors
    goOffShift() {
      this.onShift = false;
    }
  }
  