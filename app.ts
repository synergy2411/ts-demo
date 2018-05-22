// //Destructuring : Array & Objects
// var arr = ["foo","bar","bam"];
// var [arr1, arr3] = arr;
// //var arr1 = arr[0];
// console.log(arr3);      //bar

// var myModule = {
//     drawText : function(text){console.log("Drawing " + text)},
//     drawCircle : function(r){console.log(Math.PI * r * r)}
// }
// var { drawCircle } = myModule;
// drawCircle(3);

// myModule.drawCircle(3);


//Template String Syntax (back tick)
    // - include variables in string
    // - multi-line strings

// var firstName = "Some Name";
// console.log(`Hello ${firstName} !!!!`);

//Spread & Rest Operator (...)

// function demo(param1 , ...param){
//     console.log(param[0]);      //lyrics
// }

// // demo("songs");
// // demo("songs", "lyrics");
// demo("songs", "lyrics", "script");

// var someArr = [3,4,5];
// var newArr = [1,2,...someArr, 6,7];
// console.log(newArr);        //  []

//Arrow function 

//var numbers = [1,2,3,4,5];
// var newArr = numbers.map(function(value){
//     return value * 2;
// })

// var newArr = numbers.map((value)=>{
//     //someOtherFunc();
//     return value*2
// });

//Block level variables
    //let
    //const

// function demo(arr){
//     if(arr.length>2){
//         let load = "loading";
//         console.log(flash);     //undefined
//     }else{
//         let flash = "flashing";
//         console.log(flash);
//     }
// }
// demo(["foo","bar","bam"]);

// function mystry(){
//     var chooseNumber =  function (){
//         return 7;
//     }
//     return chooseNumber();
//     var chooseNumber = function (){
//         return 12;
//     }
// }
// console.log(mystry());      //7

import { Student } from './student';
import { Person } from './person';

const someObj : Person = {
    firstName : "Foo",
    lastName : "Bar",
    age : 32
}
let foo = new Student(someObj);
console.log(foo.getFullName());

//npm install -g typescript

// tsc app.ts
// node app.js

//Decorators : 

// function ReadOnly(target, key){
//     console.log(target, key);
//     Object.defineProperty(target, key, {
//         writable : false
//     })
// }

// function Override(label : string){
//     return function(target , key){
//         return Object.defineProperty(target, key,{
//             get : ()=>label
//         })
//     }
// }
// class Test{
//     // @ReadOnly
//     // name: string;
    
//     @Override("Overridden Value")
//     firstName : string = "Foo";
// }
// const test = new Test();
// console.log(test.firstName);        //Foo
//test.name = "Some New Name";
//console.log(test.name);     //Some New Name

//Angular Decorators belongs to @angular/core
    // @Component({})
    // @Pipe({})
    // @Directive({})
    // @NgModule({})
    // @Injectable()
    // @HostListener('')
    // @HostBinding('')


// class Foo{}
// class Bar{}
// class Bam{
//     constructor(foo : Foo, bar : Bar){}
// }

// new Bam(new Foo(), new Bar());

// let x : any = "some string";
// x = 12;
// x = true;
// x = function(){}

//npm install -g @angular/cli@1.7