//CONSTRUCTIONS

//person constructor

function Person(name, dob){
    this.name=name;
    //this.age=age;
   // console.log(this);
   this.birthday=new Date(dob);
   this.calculateAge=function(){
       const diff=Date.now()-this.birthday.getTime();
       const ageDate= new Date(diff);
       return Math.abs(ageDate.getUTCFullYear()-1996);
   }
}

//console.log(this)
//this.alert(1);

const brad= new Person('Brad', '12-05-1996');
// const john= new Person('John', 30);
// const cindy= new Person('cindy', 13);

 console.log(brad.calculateAge())



//  Built in constructors
//strings
const name1="Jeff";
const name2= new String('Jeff');
console.log(name1);//get string
console.log(name2);//get object
console.log(typeof name1);
console.log(typeof name2);

if (name1==='Jeff'){
    console.log("Yes")
}else{
    console.log("No")
}

if (name2==='Jeff'){
    console.log("Yes")
}else{
    console.log("No")
}
//its not equal to the string of jeff, with a double equal it will print yes

//number
const num1=5
const num2= new Number(5);

//boolean
const bool1=true;
const bool2= new Boolean(true);


//arrays
const arr1=[1,2,3,4];
const arr2= new Array(1,2,3,4);

//reqular expression
const re1=/\w+/;
const re2=new RegExp('\\w+')