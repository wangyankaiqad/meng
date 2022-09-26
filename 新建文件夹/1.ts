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



// 枚举
// enum Status{
//     Uploding,//0
//     Success,//1
//     Falied//2
// }
// console.log(Status.Uploding);
// console.log(Status['Success']);
// console.log(Status.Falied);


// 如果是就算属性和常量的话  会自动往下计算

// 交叉类型   &   必须全部满足
// interface use{
//     name:string,
//     age:number
// }
// interface per{
//     sex:number
// }
// type allInfo=use&per
// let persion:allInfo={name:'123',age:1,sex:1}
//   联合类型   |   满足其中一个即可
// interface use{
//     name:string,
//     age:number
// }
// interface per{
//     sex:number
// }
// type allInfo=use | per
// let persion:allInfo={name:'123',sex:2}




// 类型断言   <>  as
// 有时候一个数据的值是多变的并不是单一，这个时候我没就要告诉编译器，我知道我要什么，
// 我自己检查了，不需要你检查了，我自己定义他的类型
// let SomValue:any
// SomValue=123
// SomValue='dddd'
// let someValueLength=(<string>SomValue).length
// console.log(someValueLength);




// as  用这个写
// let sanNAme:any
// sanNAme=12
// sanNAme='ddsssssssssssdasadasdfasdasfasdf'
// let sanNAmeLength=(sanNAme as number).length
// console.log(sanNAmeLength);



// 枚举  enum   没有索引值的话 是默认从0开始的  要是设置索引值 会从
// 设置的索引值开始的
// enum Status{
//     Uploading=3,
//     Success,
//     Falied
// }
// console.log(Status.Uploading);//3
// console.log(Status['Success']);//4
// console.log(Status.Falied);//5
// enum Status1{
//     Uploading,
//     Success,
//     Falied
// }
// console.log(Status1.Uploading);//0
// console.log(Status1['Success']);//1
// console.log(Status1.Falied);//2



// 字符串的枚举
// const getValue=()=>{
//     return 0
// }
// const names='小明'
// enum Message{
//     // 失败
//     Error='error message',
//     // 成功
//     SuccessError=200,
//     // 含字符串值成员的枚举中不允许使用计算值
//     ClientError=names
// }
// console.log(Message.SuccessError); //200
// console.log(Message.Error); 
// console.log(Message['ClientError']); //0



//枚举成员类型
// enum Animal{
//     Dog=1,
//     Cat=2
// }
// interface Dog{
//     type:Animal.Dog
// }
// interface Cat{
//     type:Animal.Cat
// }
// let cat1:Cat={
//     type:Animal.Dog//不能将类型“Animal.Dog”分配给类型“Animal.Cat”
// }
// let dog:Dog={
//     type:Animal.Dog
// }



// 联合类型的枚举
// 定义一个枚举的状态
// enum Keys{
//     Off,
//     On
// }



// // 声明一个接口  表示状态只能是开和关
// interface Light{
//     status:Keys
// }



// // 这个只能是定义的Light接口的类型
// let Light4:Light={
//     // 类型“typeof Keys”上不存在属性“sss”
//     // status:Keys.sss
//     status:Keys.Off
// }



// interface   接口
// interface Info{
//     name:string,
//     age:number
// }
// const GetName=({name,age}:Info)=>{
//     `${name} ${age}`
// }
// const getName =({name,age}:({name:string,age:number}))=>{
//     return `${name}${age}`
// }
// let a=getName({name:'王',age:2 })
// console.log(a);
// interface Info{
//     name:string,
//     age:number
// }
// const getName =({name,age}:Info)=>{
//     return `${name}${age}`
// }
// let a=getName({name:'王',age:2 })
// console.log(a);




// // 绕开多余属性检查
// interface Vegasa{
//     color?:string,
//     type:string
// }
// const getadd=({color,type}:Vegasa)=>{
//     return `A ${color ? color + '': ""}${type}`
// }
// getadd({
//     type:'123123',
//     size:'123123',
//     price:1
// } as Vegasa)

// 用interface定义接口的时候  定义了一个可选属性color 和一个必选属性type  在下面封装的函数生命的时候 传入这两个属性    但是在下面赋值的时候 多了一个size属性和一个price属性 因为在上面接口没有定义这两个属性 所以会报错  所以在后面用as 类型断言 绕开多余属性的检查  这样传递的属性里面有一个上面定义的属性就不会进行报错了
