// let a:number=1
// let b:string='12'
// let c:number=0
// // 不能将类型“string”分配给类型“number”
// c=a+b
var getadd = function (_a) {
    var color = _a.color, type = _a.type;
    return "A ".concat(color ? color + '' : "").concat(type);
};
getadd({
    type: '123123',
    size: '123123',
    price: 1
});
