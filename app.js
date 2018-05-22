"use strict";
// //ES6+ features
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
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
var student_1 = require("./student");
var someObj = {
    firstName: "Foo",
    lastName: "Bar",
    age: 32
};
var foo = new student_1.Student(someObj);
console.log(foo.getFullName());
//npm install -g typescript
// tsc app.ts
// node app.js
//Decorators : 
function ReadOnly(target, key) {
    console.log(target, key);
    Object.defineProperty(target, key, {
        writable: false
    });
}
var Test = /** @class */ (function () {
    function Test() {
        this.name = "Old name";
    }
    __decorate([
        ReadOnly
    ], Test.prototype, "name");
    return Test;
}());
var test = new Test();
test.name = "Some New Name";
console.log(test.name); //Some New Name
