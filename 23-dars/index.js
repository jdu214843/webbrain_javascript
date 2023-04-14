// Classes and basic properties
class Student {
  #password = 123;
  set getPw(value) {
    this.#password = value;
  }
  get getPw() {
    console.log(`${this.#password}`);
  }
}

let a = new Student(`${this.password}`);

a.getPw;
