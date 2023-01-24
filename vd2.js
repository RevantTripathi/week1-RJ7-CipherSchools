//1-  .map()

// let array=[1,2,3,4,5];

// function forMap(element){
//     return element*element;
// }
// let newArray = array.map(forMap);

// let newArray=array.map((forMap,index) => {
//     console.log(index);
//     return forMap*forMap})
//let newArray=array.map((forMap,index) => forMap*forMap)
// console.log(newArray);


//2- .forEach()

// let array=[1,2,3,4,5];
// array.forEach((element,index) => {
//     console.log(element);
// })


//3- .filter()

// let array=[10,20,30,40,50]
// let newArray=array.filter((element) => element>=30) //it will check the condtion and will return a boolean, if the boolean is true then it will add that number to the newArray
// console.log(newArray)



//4- .find()

// let array=[10,20,30,40,50];
// let temp = array.find((value) => {    //it will check the condtion and will return a boolean, if the boolean is true then it will terminate the line there only
//     return value>20;
// }
// )
// console.log(temp)


//4- .sort()

// let array= [20,40,10,70,50,25,111]
// let sortedArray=array.sort((el1,el2) => {
//     el1=Number(el1);
//     el2=Number(el2);
//     return el1-el2;
// })
// console.log(sortedArray);



//4- Object Destructuring

// let myObject={
//     name:"Alex",
//     age:"24",
//     address:{
//         street: "Brooklyn",
//         city:"New york",
//         state:"NY",
//         country:"USA",
//         passportDetails:{
//             passportNumber:"ABCD1234",
//         },
//     },
// }

// let {name:myName,age}= myObject;   //this is object destructuring here we are fetching the name and age and storing it in myName  
// console.log(myName,age)


//6- Array matching
// if the length of arrays are not matching then they will not match
// if the both arrays are pointing to the same refrence then they are the same array

//check their refrence
//if(array1==array2)



//7- Object matching

// let obj1={name:"Revant",}
// let obj2={name:"Revant"}

// function areEqual(){
//     if(obj1==obj2){
//         return true;
//     }
//     if(Object.keys(obj1).length != Object.keys(obj2).lenght){
//         return false;
//     }
//     for(let key of Objects.keys(obj1)){
//         if(typeof obj2[key]== "undefined"){
//                 return false;
//         }
//         if(obj2[key] != obj1[key]){
//             return false;
//         } 
//     }
//     return true;
// }

// console.log(areEqual(obj1,obj2));



//8- Map and Set

// let map= new Map();
// map.set(1,"Revant");
// map.set(2,"Alex")
// console.log(map)

// let set =new Set();
// set.add(1);
// set.add(-1);

// console.log(set);


//9- Classes

class Animal {
    noOfLegs;
    color;
    family;
    sound;

    constructor(noOfLegs,color,family,sound){
        this.noOfLegs = noOfLegs;
        this.color=color;
        this.family=family;
        this.sound=sound;

    }
    showAnimal(){
        console.log(`The animal belongs to family ${this.family}`)
    }
}


let animal = new Animal(4,"brown","rodent","Phew Phew")
animal.showAnimal();










