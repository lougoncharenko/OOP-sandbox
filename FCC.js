//creating objects
let dog = {
    name: 'Fido',
    numLegs: 3
    };

    //using dot notation
    console.log(dog.name);
    console.log(dog.numLegs);

    //create a method on an object
    let dog1 = {
        name: "Spot",
        numLegs: 4,
      sayLegs: function(){
        return `The dog has ${this.numLegs}`
      }
      };
      
      dog1.sayLegs();

      //define a constructor function
      function Dog(){
        this.name='fido';
        this.color='brown';
        this.numLegs=3;
      }

      //using a constructor to create objects
      let brownDog=new Dog();

      //Extend Constructors to Receive Arguments
      function Dog2(name, color, numLegs) {
        this.name = name;
        this.color = color;
        this.numLegs = 4;
      }
      
      let terrier=new Dog2('fido', 'brown')


      //verify an objects constructor with instanceof
      let Bird = function(name, color) {
        this.name = name;
        this.color = color;
        this.numLegs = 2;
      }
      
      let crow = new Bird("Alexis", "black");
      
      crow instanceof Bird;//return true

      let canary = {
        name: "Mildred",
        color: "Yellow",
        numLegs: 2
      };
      
      canary instanceof Bird; //return false

      //understanding own properties
      function Bird1(name) {
        this.name = name;
        this.numLegs = 2;
      }
      
      let canary = new Bird1("Tweety");
      let ownProps = [];
      // Only change code below this line
      
      for (let property in canary){
        if (canary.hasOwnProperty(property)){
          ownProps.push(property);
        }
      }
      
      console.log(ownProps);


      //using prototype properties to reduce duplicate code:
      function Dog3(name){
          this.name=name;
      }

      Dog3.prototype.numLegs=2;

      let beagles=new Dog3('Snoopy');

      //iterate over all properties
      //own property vs prototype property
      function Cat(name) {
        this.name = name;  //own property
      }
      
      Cat.prototype.numLegs = 4; // prototype property

      let kitty=new Cat('Meow')

      let ownProps = [];
      let prototypeProps = [];

      for (let property in kitty ){
          if (kitty.hasOwnProperty(property)){
              ownProps.push(property);
          }else{
              prototypeProps.push(property)
          }
      }


      console.log(ownProps);
      console.log(prototypeProps);

      //making the prototype to a new object
      Bird.prototype={
          //dont forget to set the constructor
          constructor: Bird,
          numLegs:2,
          eat:function(){
              console.log('nom nom nom')
          },
          describe: function(){
              console.log(`my name is ${this.name}`)
          }
      }

      /*Understand Where an Object’s Prototype Comes From
Just like people inherit genes from their parents, an object
 inherits its prototype directly from the constructor function
  that created it. */
  let beagle = new Dog("Snoopy");
  Dog.prototype.isPrototypeOf(beagle); //will return true

  //understanding the prototype chain
  Object.prototype.isPrototypeOf(Dog.prototype);
  //objext.protyype is a prototype of Dog.Prototype
  //prototype is an object and can have its on prototype


  //inheritance
  function Animal() { }

Animal.prototype = {
  constructor: Animal,
eat: function() {
    console.log("nom nom nom");
  }
};

function Cat(name) {
  this.name = name;
}

Cat.prototype = {
  constructor: Cat,
};

function Bear(name) {
  this.name = name;
}

Bear.prototype = {
  constructor: Bear,
 
};

//Inherit Behaviors from a Supertype
let animal = new Animal(); //has disadvantages
let animal = Object.create(Animal.prototype); //better
animal.eat();
animal instanceof Animal; //true

//more Object.create
let duck=Object.create(Animal.prototype);
let beagle=Object.create(Animal.prototype); 

//Set the Child's Prototype to an Instance of the Parent
Bird.prototype=Object.create(Animal.prototype);
let duck=new Bird('Donald');
duck.eat(); //inherits eat method

//Reset an Inherited Constructor Property
function Bird() { }
Bird.prototype = Object.create(Animal.prototype);
let duck = new Bird();

Bird.prototype.constructor = Bird;
duck.constructor

//add methods after inheritance
Bird.prototype.fly = function() {
    console.log("I'm flying!");
  };
  duck.fly();

  //override inherited methods
  ChildObject.prototype = Object.create(ParentObject.prototype);
  ChildObject.prototype.methodName = function() {};

  //how to override
  function Animal() { }
Animal.prototype.eat = function() {
  return "nom nom nom";
};
function Bird() { }

Bird.prototype = Object.create(Animal.prototype);

Bird.prototype.eat = function() {
  return "peck peck peck";
}; //bird overrrides the eat function

//another example\
function Penguin() { }
Penguin.prototype = Object.create(Bird.prototype);
Penguin.prototype.constructor = Penguin;

Penguin.prototype.fly=function(){
  return "Alas, this is a flightless bird."
}


//use a mixin to add common behaviors to unrelated objects
let flyMixin =function(obj){
    obj.fly=function(){
        console.log('Flying, Woosh!')
    }
}
let bird = {
    name: "Donald",
    numLegs: 2
  };
  
  let plane = {
    model: "777",
    numPassengers: 524
  };

  flyMixin(bird);
  flyMixin(plane);

  bird.fly();
  plane.fly();

  //add mixin
  let bird = {
    name: "Donald",
    numLegs: 2
  };
  
  let boat = {
    name: "Warrior",
    type: "race-boat"
  };
  

  let glideMixin=function(obj){
    obj.glide=function(){
      console.log('I am gliding')
    }
  };
  
  glideMixin(bird);
  glideMixin(boat);
  bird.glide();
  boat.glide();

//   Use Closure to Protect Properties
// Within an Object from Being Modified Externally
function Bird(){
    let hatchedEgg=20;
    this.getHatchedEggCount=function(){
        return hatchedEgg
    }
}

let ducky=new Bird();
let ducky=Object.create(Bird);
ducky.getHatchedEggCount;

//closures
function Bird() {
    let weight = 15;
    this.getWeight=function(){
      return weight;
    }
  
  
  }

  //Understand the Immediately Invoked Function Expression (IIFE)\
  (function () {
    console.log("Chirp, chirp!");
  })();

  //transform this function into a IIFE
  function makeNest() {
    console.log("A cozy nest is ready");
  }
  
  makeNest();
  //IIFE

  (function(){
      console.log("A cozy nest is ready");
  })();

//use an IIFE to create a module
let isCuteMixin = function(obj) {
    obj.isCute = function() {
      return true;
    };
  };
  let singMixin = function(obj) {
    obj.sing = function() {
      console.log("Singing to an awesome tune");
    };
  };

  function isCuteMixin (obj){
    obj.isCute = function() {
        return true;
  }

  function singMixin (obj){
    obj.sing = function() {
        console.log("Singing to an awesome tune");
      };
  }

  let funModule= (function(){
      return{
        isCuteMixin:function (obj){
            obj.isCute = function() {
                return true;
            };
        },
        singMixin: function(obj){
            obj.sing = function() {
                console.log("Singing to an awesome tune");
              };
      }
    }
  }) ();
















