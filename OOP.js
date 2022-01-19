let baseSalary= 30_000;
let overtime=10;
let rate=20;

function getWage(baseSalary, overtime, rate){
    return baseSalary+ (overtime*rate);
}

let employee={
    baseSalary:30_000,
    overtime:10,
    rate:20,
    getWage: function(){
      return this.baseSalary + (this.overtime*this.rate);

    }
};



//constructor
function Employee(baseSalary, overtime, rate){
    this.baseSalary=baseSalary;
    this.overtime=overtime;
    this.rate=rate;

    
    
}

Employee.prototype.getWage= function(){
    
        console.log(this.baseSalary + (this.overtime*this.rate))
}

const John= new Employee(30_000, 50, 30);
John.getWage();


//object


//factory object
function createCircle(radius){
    return{
       radius,
    draw: function(){
        console.log('draw');
    }
  }  
}
   
const circle=createCircle(1);

//constructor function
function Circle(radius){
    this.radius=radius;
    this.draw= function(){
        console.log('draw');
    }
}

Circle.call({}, 1);

//declaring a function internally
//  const Circle1=new Function('radius',`this.radius=radius;
//  this.draw= function(){
//      console.log('draw');
//  }` );

//  const circle2=new Circle1(1);
//  console.log(circle2);

const another=new Circle(10);

circle.location={x:1};
const propertyName='center-location';
circle[propertyName]= {x:1};


//enumerating properties

for (let key in circle){
    console.log(key, circle[key]);
}

const keys=Object.keys(circle);
console.log(keys)

if ('radius' in circle){
    console.log('circle has a radius')
}


//abstraction
function Square(length){
    this.length=length;

    this.defaultLocation= {x:0, y:0};

    this.computeOptimumLocation= function(){
        ///...
    }

    this.draw= function(){
        this.computeOptimumLocation(0.1);
        console.log('draw');
    }

}

const square= new Square(9)
square.draw();