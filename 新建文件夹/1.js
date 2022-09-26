// let a: number = 1;
// let b: string = '1';
// let c: number = 0;
// c = a + b
// let  foo =1
// // 类型“number”上不存在属性“split”。ts(2339)
// foo.split('')
// let foo='1'
// foo.split('')
// let num1=1
// let num2=2
// let sun=num1+num2
// let num3=3
// let num4=4
// // 不能将类型“string”分配给类型“number”。
// num3='3'
// let sun=num3+num4
// console.log(sun);
//   let myNa:string='小红'
//   let myAg:number=18
//   let sentence=`my name is ${myNa},ma age is ${myAg}`
//   document.body.innerHTML=sentence
// let myName:string = '小红'
// let myAge:number = 12
// let sentence = `My name is ${myName},My age is ${myAge}`
// console.log(sentence);
// document.body.innerHTML = sentence
// let  list:number[]=[1,2,3]
// let lists:string[]=['1','2','3']
// // 不能将类型“string”分配给类型“number”
// let listt:number[]=[1,2,3,'4']
//  let array=new Array()
//  array.push(1)
//  console.log(array);
// let list:number[]=[1,2,3]
// list.push(6)
// console.log(list);
// let liststring:string[]=['1','2','3']
// let arrList:Array<number>=[1,2,3]
// let stringList:Array<string>=['1','2','3']
// 不能将类型“string”分配给类型“number”
// let arrayList:Array<number>=[1,2,'3']
// declare function create(o:object|null):void
// create({props:0})
// create(null)
// 类型“number”的参数不能赋给类型“object”的参数。ts(2345)
// create(3222)
// // 类型“string”的参数不能赋给类型“object”的参数。t
// create('dddd')
// // 类型“undefined”的参数不能赋给类型“object | null”的参数。
// create(undefined)
// 简单
//     let obj:{name:string}
// //     不能将类型“{ name: string; age: number; }”分配给类型“{ name: string; }”。
// //   对象文字可以只指定已知属性，并且“age”不在类型“{ name: string; }”中。ts(2322)
//     obj={name:'小红',age:13}
// 元组
// 不能将类型“[string, number, string]”分配给类型“[string, number]”。
//   源具有 3 个元素，但目标仅允许 2 个。
// let ton:[string,number]=['qweq',123]
// let tom :[string,number]
// tom[0]='tom'
// tom[1]=123
// tom[0].slice(1)
// tom[1].toFixed(2)
// console.log(tom);
// let tom: [string, number]=['222',2]
// tom[0] = 'Tom';
// tom[1] = 25;		                           
// tom[0].slice(1); 
// any  类型  可以赋值任意类型的值  相当于失去了ts的意义  尽量避免使用
// let value:any
// value=123
// value='12312'
// value=undefined
// let arr:any[]=[]
// viod
// function aler():void{
//     console.log('12312312312333333333333');
// }
// aler()
// 定义字符串类型
// function  alerName():string{
//     console.log('123123');
//     return "123123123"
// }
// alerName()
// 定义数字类型
// function  alerName():number{
//     console.log('123123');
//     return 123123
// }
// alerName()
// // 定义undefined
// function  alerName1():undefined{
//     console.log('undefined');
//     return undefined
// }
// alerName1()
// // 定义数字类型数组
// function  alerName2():Array<number>{
//     console.log([1,2,3]);
//     return  [1,2,3]
// }
// alerName2()
// // 定义数字 字符串数组
// function  alerName22():[number,string]{
//     console.log([1,'1']);
//     return  [1,'1']
// }
// alerName22()
var Status;
(function (Status) {
    Status[Status["Uploding"] = 0] = "Uploding";
    Status[Status["Success"] = 1] = "Success";
    Status[Status["Falied"] = 2] = "Falied";
})(Status || (Status = {}));
console.log(Status.Uploding);
console.log(Status['Success']);
console.log(Status.Falied);
