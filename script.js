// //CONSTRUCTIONS

// const brad= new Person('Brad', '12-05-1996');
// // const john= new Person('John', 30);
// // const cindy= new Person('cindy', 13);

//  console.log(brad.calculateAge())



// //  Built in constructors
// //strings
// const name1="Jeff";
// const name2= new String('Jeff');
// console.log(name1);//get string
// console.log(name2);//get object
// console.log(typeof name1);
// console.log(typeof name2);

// if (name1==='Jeff'){
//     console.log("Yes")
// }else{
//     console.log("No")
// }

// // if (name2==='Jeff'){
// //     console.log("Yes")
// // }else{
// //     console.log("No")
// // }
// // //its not equal to the string of jeff, with a double equal it will print yes

// // //number
// // const num1=5
// // const num2= new Number(5);

// // //boolean
// // const bool1=true;
// // const bool2= new Boolean(true);


// // //arrays
// // const arr1=[1,2,3,4];
// // const arr2= new Array(1,2,3,4);

// // //reqular expression
// // const re1=/\w+/;
// // const re2=new RegExp('\\w+')

// // //prototypes
//  function Person(firstName,lastName, dob){
//      this.firstName=firstName;
//      this.lastName=lastName
//     this.birthday=new Date(dob);
//  //    this.calculateAge=function(){
// // //        const diff=Date.now()-this.birthday.getTime();
// // //        const ageDate= new Date(diff);
// // //        return Math.abs(ageDate.getUTCFullYear()-1996);
// // //    }
//  }

// //calculate age
// Person.prototype.calculateAge=function(){
//     const diff=Date.now()-this.birthday.getTime();
//     const ageDate= new Date(diff);
//     return Math.abs(ageDate.getUTCFullYear()-1996);
// }

// //get full name
// Person.prototype.getFullName=function(){
//     return `${this.firstName} ${this.lastName}`;
// }

// //get married
// Person.prototype.getsMarried=function(newLastName){
// this.lastName=newLastName;
// }

// const John =new Person('John', 'Doe', '12-05-1995')
// const Mary =new Person('Mary', 'Poppins', '10-06-1995')

// console.log(Mary)
// console.log(John.calculateAge())
// console.log(Mary.getFullName());

// Mary.getsMarried('Smith')
// console.log(Mary.getFullName());

// console.log(Mary.hasOwnProperty('firstName'));


//protoypal inheritance
// function Person(firstName, lastName){
//     this.firstName=firstName;
//     this.lastName=lastName
// }

// Person.prototype.greeting= function(){
//     return `Hello there ${this.firstName} ${this.lastName}`

// }

// const person1= new Person ('Tim', "Spark");
// // console.log(person1.greeting())


// function Customer(firstName, lastName, phone, membership){
//     Person.call(this, firstName, lastName);

//     this.phone=phone;
//     this.membership=membership;
// }

// //inherit the person protoype method
// Customer.prototype=Object.create(Person.prototype)

// //make customer.prototype return Customer()
// Customer.prototype.constructor=Customer;

// const customer1=new Customer('Tom', 'Hank', '555-555-5555', 'Standard' );

// console.log(customer1)

// //customer greeting
// Customer.prototype.greeting=function(){
//     return `Hello there ${this.firstName} ${this.lastName} welcome to our company`
// }
// console.log(customer1.greeting());


//object.create
const personPrototypes={
    greeting: function(){
        return `Hello there ${this.firstName} ${this.lastName}`;
    },
    getsMarried: function(newLastName){
        this.lastName=newLastName;

    }
}

const mary=Object.create(personPrototypes);
mary.firstName='mary';
mary.lastName="poppins";
mary.age=30;
console.log(mary);
mary.getsMarried("Thompson");
console.log(mary.greeting());

const susy=Object.create(personPrototypes, {
    firstName: {value:"Susy"},
    lastName: {value: "Marty"},
    age: {value: 30}
})

console.log(susy)
console.log(susy.greeting())