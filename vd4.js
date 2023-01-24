// class ListNode{
//     val;
//     next;

//     constructor(val, next=null){
//         this.val=val;
//         this.next=next;
//     }
// }

// class TestClass{
//     head;

//     constructor(head=null){
//         this.head=head;
//     }

//     hasLast(){
//         return this.head !== null;
//     }

//     getLast(){
//         if(!this.hasLast()){
//             return null;
//         }
//         let current =this.head;
//         while( current.next !== null){
//             current= current.next;
//         }
//         let finalValue = current.val;

//         current=this.head;
//         while(current.next !== null && current.next.next !== null){
//             current =current.next;
//         }
//         if(current.next ===null){
//             this.head=null;
//         }
//         current.next = null;
//         return finalValue;
//     }
// }

// let myVariable = new TestClass(
//     new ListNode(
//         1,
//         new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5))))
//     )  
// );

// console.log(myVariable.getLast());
// console.log(myVariable.getLast());
// console.log(myVariable.getLast());
// console.log(myVariable.getLast());
// console.log(myVariable.getLast());
// console.log(myVariable.getLast());


//Promise is a class in JS

// let mypromise = new Promise((fulfilled, notFulfilled) => {
//     let num1=10;
//     let num2=15;
//     let sum=num1+num2;

//     if(sum>24){
//         fulfilled(sum);

//     }else{
//         notFulfilled(new Error("Promise not fullfilled"));
//     }
    
// });

// mypromise.then(() => {
//     console.log("Promise was fullfilled")
// })
// .catch(() =>{
//     console.log("Promise was not fullfilled")
// })

function addTwoNum(num1, num2){
    return new Promise((fulfilled,notFullfilled) => {
        setTimeout(() => {
            console.log("Inside timeout");
            fulfilled(num1+num2);
      },5000);
        notFullfilled(new Error("An error occured"));
    });
    
    
}
addTwoNum(10,5).then(() => {
        console.log("Promise was fullfilled")
    })
     .catch(() =>{
     console.log("Promise was not fullfilled")
    })



