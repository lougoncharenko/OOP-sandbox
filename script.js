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
