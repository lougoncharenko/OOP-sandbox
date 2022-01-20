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

