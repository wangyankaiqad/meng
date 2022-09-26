// let a:number=1
// let b:string='12'
// let c:number=0
// // 不能将类型“string”分配给类型“number”
// c=a+b

// let foo=1
// // 类型“number”上不存在属性“split”
// foo.split('')

// function greeter(person:string){
//     return 'hello'+person
// }
// let user='jone'
// document.body.innerHTML=greeter(user)

// 正常情况
// let num1=1
// let num2=2
// let sum=num1+num2
// console.log(sum);

// 非正常情况

// let num3=3
// let num4=4
// // 不能将类型“string”分配给类型“number”
// num3='3'
// let sun=num3+num4

// boolean   布尔值   只能定义true 和 false
// let isDone:boolean=false

// 字符串类型（string）
// let name1:string='小红'
// let age1:number=12

// // 造句

// let sentenc=`my name is ${name1},my age is ${age1}`
// // my name is 小红,my age is 12
// console.log(sentenc);

// 定义数组的两种方式

// let arr:number[]=[]
// let arr1:Array<number>

// // 字符串数组
// let arr:string[]=['123123123123']
// // 数字类型数组
// let arr1:Array<number>=[1,2,3,4]

// undefined和 null类型  既是值也是类型
// let arr: undefined = undefined;
// let arr1: null = null;





// Object表示非原始类型，也就是除了number，string，Boolean，symbol，null和undefined之外的类型

// declare function create(o:object|null):void
// create({props:0})
// create(null)
// // 类型“number”的参数不能赋给类型“object”的参数
// create(12312)
// // 类型“undefined”的参数不能赋给类型“object | null”的参数
// create(undefined)
// // 类型“string”的参数不能赋给类型“object”的参数。
// create('ddd')

// 元组
// 数组 合并相同类型的对象，长度没有限制
// 元组  合并不同类型的对象，已知长度

// let tom:[string,number]=['1',2]

// let tom:[string,number]=['123',123]
// tom[0]='小红'
// tom[1]=321

// console.log(tom[0].slice(1));//红
// console.log(tom[1].toFixed(2));//321.00

// any  可以赋值任意类型的值  尽量减少使用 使用以后就失去了ts的意义  和js一样了

// let value:any
// value=123
// value='123'
// value=[1,2,3]
// value={1:2}
// value=false        //都不会报错






// void表示什么类型都没有，就是什么类型都不是，这在我们定义函数，函数没有返回值的时候使用
// function aler():void{
//     console.log('123123123');
// 没有return值是不会报错的
// }


// 定义什么类型的要返回什么类型的值
// function aler(): number {
//   console.log("数字类型");
//   //不写return的话     其声明类型不为 "void" 或 "any" 的函数必须返回值

//   return 123;
// }
// aler();

// function aler(): string {
//       console.log("字符串");
//       //不写return的话     其声明类型不为 "void" 或 "any" 的函数必须返回值
    
//       return '123';
//     }
//     aler();


// function aler(): number[] {
//     console.log("数字类型的数组");
//     //不写return的话     其声明类型不为 "void" 或 "any" 的函数必须返回值
  
//     return [1,2,3];
//   }
//   aler();


// function aler(): Array<string> {
//     console.log("字符串类型的数组");
//     //不写return的话     其声明类型不为 "void" 或 "any" 的函数必须返回值
  
//     return ['123','321'];
//   }
//   aler();


// function aler(): boolean {
//     console.log("布尔值");
//     //不写return的话     其声明类型不为 "void" 或 "any" 的函数必须返回值
  
//     return  false;
//   }
//   aler();

// / ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// 两种方式创建Boolean类型的数组

// function aler():boolean[]{
//     return [false,true]
// }

// function aler():Array<boolean>{
//     return [false,true]
// }

// 工厂模式创建对象

// function createPerson(name,age,gender){
//     // 创建一个新的对象
//     var obj=new Object()
//     // 像对象中添加属性
//     obj.name=name;
//     obj.age=age;
//     obj.gender=gender;
//     obj.sayName=function(){
//         alert(this.name)
//     }

//     return obj

// }
// var obj2 = createPerson("猪八戒",99,"男");
// 			var obj3 = createPerson("孙悟空",8,"女");
// 			var obj4 = createPerson("候子",90,"男");
// 			console.log(obj2);
// 			console.log(obj3);
// 			console.log(obj4);



//构造函数，
		/*构造函数和普通函数不同就是调用方式不同
		普通函数是直接调用 ，构造函数使用new关键字调用
		新建的对象设置成函数的this，构造函数中使用this引用新建的对象
		创建的方法也叫类
		调用的per，per1，per2也叫实例，类的实例化
		*/
        // function Person(name,age,gender){
        //     this.name = name;
        //     this.age = age;
        //     this.gender = gender;
        //     }
        //  var per = new Person('张三',20,'男');
        //  var per1 = new Person('李四',21,'女');
        //  var per2 = new Person('王五',22,'男');
        //  console.log(per);
        //  console.log(per1);
        //  console.log(per2);
        //  console.log(per instanceof Person);//使用instanceof可以检查一个对象是否是一个类的实例（对象 instanceof 构造函数）
         


        // 对象造个句子

        // let arr={name:'小红',age:12}
        // console.log('ma name is'+arr.name,'my age is '+arr.age);
        
        //  找一个数组中修改源数组的方式，找一下数组中哪些是可以使用的，哪些是不能使用的 

        // let arr=['8','1a','2','3','4']
// 删除数组中最后一个元素 并返回该数组
// console.log(arr.pop())

// 数组尾部添加元素 并返回该数组的长度
// console.log(arr.push('2'));

// 删除数组中的第一个元素 并返回这个元素
// console.log(arr.shift());

// 在数组中第一位添加元素 并返回数组的长度
// console.log(arr.unshift('adasd'));

// 对数组进行排序 并返回该数组
// arr.sort()
// console.log(arr);

// 对数组进行翻转 
// arr.reverse()
// console.log(arr);



// --------------------------------------------------------------------
// 返回的函数
// function error(message:string):never{
//     throw new Error(message)
// }
// error()

// function fail(){
//     return error('akncackjnacbihabdca')
// }
        


// 枚举  enum

// enum Color{
//     Red=1,
//     Blue=2,
//     Green=3
// }

// let c:Color=Color.Green
// console.log(c);


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