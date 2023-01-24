// var myName="John";
// console.log(myName)

// const myName=[];
// console.log(myName);  
// myName.push("John");
// console.log(myName);

// let myName="John";
// console.log(myName);
// myName="Alex";
// console.log(myName);
//let myName="hello";      //cannot redeclare the variable used with let 


// var myName="John";
// console.log(myName);
// myName="Alex";
// console.log(myName);   
// var myName="Revant";    //with var keyword we can reassign and redeclare the variable 




//  <----String Interpolation---->

// let firstName="Revant";
// let lastName="Tripathi";
// let fullName =firstName + " " + lastName   this is going to take extra space So, we will use this method

// let fullName= `${firstName} ${lastName}`;
// console.log(fullName);




// <---- Default Params --->

// function addTwoNum(num1,num2){
//     return num1+num2;
// }

// let addTwoNum= (num1,num2) =>{       //arrow function
//     console.log(num1);  //it will print 1
//     console.log(num2);  //it will print undefined
//     return num1+num2;    //it will print NaN
// };

// console.log(addTwoNum(1));



//<---Rest and Spread Operator

let array= [5,10,15,20,25];

//spread Operator --> ...          //operator overloading(same symbol different function)
// console.log(...array);     //it will print 5 10 15 20 25
// console.log(array);     //it will print [5 10 15 20 25]
// let newarray= [...array, 30, 34, 35]      //to make a copy of array we can also add new elements in array
// console.log(newarray);
                   //complexity of spread operator in O(n) n is size of array



//Rest -->  ...
// let maxOfTwoNum =(...numbers) =>{    //to accept multiple argument we use rest operator
//     let maximum = Number.MIN_VALUE;
//     for(let number of numbers){
//         maximum = Math.max(maximum, number);
//     }
//     return maximum;
// } ;

// console.log(maxOfTwoNum(2,5,3,1,7,8))


//Rest and Spread Operator are applicable in arrays and objects

//for Object

// let object={
//     name:"John",
//     age:24,
//     city: "New York",
// };

// let object2= {...object, country:"USA",} //name:"revant"}             // it will make clone of object in object 2 , we can also add extra key value pair//we can also overwrite name: "Revant" then it will replace the name with Revant in object2

// console.log(object2);


let object={
    name:"John",
    age:24,
    address:{
        city:"New York",
        state:"NY",
        country: "USA",
    },
};

let object2={...object}
object2.address.city="Newark"
console.log(object2);
console.log(object);   //both object and object will print the city as Newark only, this is the example of shallow cloning
// in shallow cloning all the key value pair are being copied but  in the case nested object only refrence are getting passed 

//to do deep cloning

// let object2=JSON.parse(JSON.stringify)
// object2.address.city="Newark"
// console.log(object2);
// console.log(object);







