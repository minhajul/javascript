
class Vehicle{
  constructor(name, type){
     this.name = name;
     this.type = type;
  }

  getName (){
    return this.name;
  }

  getType(){
    return this.type;
  }

}

class Car extends Vehicle {
    constructor(name){
      super(name, 'Audi');
    }

    getName(){
      return "This is " + super.getName();
    }
}

let data = new Car('Audi');
console.log(data.getName());
