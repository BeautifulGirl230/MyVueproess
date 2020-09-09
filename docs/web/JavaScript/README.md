# ESMAScript6.0

## ES6 兼容

> IE10+ 、Chrome、Firefox

要想兼容IE10以下的有两种方法：

* 用`babel`工具`borwer.js`，在script标签里添加`type="text/babel"`属性

## 变量let和const

* let：用于定义变量，不能重复声明
* const：用于定义常量，不能重复声明

## 箭头函数

> 箭头函数有效更改`this`的指向。

```js
show((item) => {
    return alert(item);  // 13
});
show(13);
```

> 如果只有一个参数，可以省掉`( )`
>
> ```javascript
> show(item =>{
>     return alert(item);  // 13
> });
> show(13);
> ```
>
> 如果只有一个`return`，可以省掉`{ }`和`return`
>
> ```javascript
> show = item => alert(item);  // 13
> show(13);
> ```
>
> 

## 函数-参数

### 收集参数：`...args`

> Rest Parameter必须是最后一位

```javascript
let arr = [1,2,3];
function show(a,b,...args){
alert(args);		// 35,57,18,45
}
show(13,14,35,57,18,45);
```

```javascript
function show2(a,b,c){
    alert(a);	//  1
    alert(b);	//  2
    alert(c);	//  3
}
show2(...arr);
```

### 展开数组：`...args`

> 展开后的效果，跟直接把数组的类容写在哪儿一样

```javascript
let arr = [1,2,3];
let arr2 = [4,5,6];
function show(...args){
	fu(...args);
}
function fu(a,b,...args){
console.log(a,b);		// 1 2
console.log(a,b,...args);	// 1 2 3 4 5 6
}
show(...arr,...arr2);
```

### 默认参数：`(a,b,c=10)`

> 当我们传递`c=1000` 时`c=10`将会被替换。
>
> 如果没有给`c`设置参数，那么它的值默认为10。

```javascript
function show(a,b,c=10){
console.log(a,b,c);
}
show(10,100,1000);		// 10 100 1000
// show(10,100);		// 10 100 10
```

## 解构赋值

* 左右两边结构相同
* 声明和赋值不能分开（必须在一句话里完成）

```javascript
let [a,b,c] = [1,2,3];
console.log(a,b,c);		// 1 2 3
```

```javascript
let {a,b,c} = { a:1, c:3, b:2 };
console.log(a,b,c);		// 1 2 3
```

```javascript
let [{ a,b },[n1,n2,n3],num,str] = [{ a:1, b:6 },[12,24,32],58,'结构赋值']
console.log(a,b,n1,n2,n3,num,str);		// 1 6 12 24 32 58 "结构赋值"
```

>  也可以根据右边的参数的类型进行返回相应的参数

```javascript
let [json,arr,num,str] = [{ a:1, b:6 },[12,24,32],58,'结构赋值']
console.log(json,arr,num,str);		// { a: 1, b: 6 } [12, 24, 32] 58 "结构赋值"
```

## 数组

### map：映射（一个对一个）

```JavaScript
let arr = [3,43,12];
arr.map(function (item){
    alert(item);		// 3 43 12
})
```

设置返回值：

```javascript
let arr = [3,43,12];
let result = arr.map(function (item){
    return item * 2
})
alert(result);		// 6 86 24
```

简写(箭头函数)：

```javascript
let arr = [3,43,12];
let result = arr.map( item => item*2 )
alert(result);		// 6 86 24
```

实列：

```javascript
let score = [19,85,25,90];
const result = score.map(item => item >= 60 ? '及格' : '不及格');
console.log(score);		// [19, 85, 25, 90]
console.log(result);	// ["不及格", "及格", "不及格", "及格"]
```

### reduce：汇总（一堆出来一个）

计算：

```javascript
/**
* @param tmp (上一轮的结果)
* @param item (arr里的数依次传递给item)
* @param index (次数)
*/
let arr = [12,155,64,74]
let result = arr.reduce(function (tmp,item,index){
	return tmp + item;
})
alert(result);		// 305	
```

```javascript
let arr = [12,155,64,74]
let result = arr.reduce(function (tmp,item,index){
    if(index != arr.length-1){	// 不是最后一次
        return tmp + item;
    }else{					  // 最后一次
        return (tmp + item)/arr.length;
    }
})
alert(result);		// 76.25
```

### filter：过滤器

保留能被3整除的数

```javascript
let arr = [12,54,35,75,11,24];
const result = arr.filter(function (item){
    if(item % 3 == 0){
        return true;
    }else{
        return false;
    }
})
alert(result);	// 12,54,75,24
```

简写：

```javascript
let arr = [12,54,35,75,11,24];
const result = arr.filter(function (item){
    return item % 3 == 0;
})
alert(result);	// 12,54,75,24
```

实列：

```javascript
let arr = [
    { item: '手机', price: 5600},
    { item: '电脑', price: 14000},
    { item: '电视', price: 7600},
    { item: '显示屏', price: 3600}
]
const result =  arr.filter(json => json.price >= 6000);
console.log(result);		// [{ item: '电脑', price: 14000}  { item: '电视', price: 7600}]
```

### forEach：循环（迭代）

对数组里的数循环

```javascript
let arr = [12,54,35];
arr.forEach( (item,index) =>{
    alert(index + '---' + item);		// 0---12  1---54  2---35
})
```

## 字符串

### startsWith和endsWith方法

* startsWith

```javascript
let str = 'https://www.baidu.com';
if(str.startsWith('http://')){
    alert('普通网址');
}else if(str.startsWith('https://')){
    alert('加密网址');
}else if(str.startsWith('git://')){
    alert('git网址');
}else if(str.startsWith('svn://')){
    alert('svn网址');
}else {
    alert('其它');
}
```

* endsWith

```javascript
let str = '1.txt';
if(str.endsWith('.txt')){
    alert('文本文件');
}else if(str.endsWith('.jpg')){
    alert('JPG图牌');
}else {
    alert('其它');
}
```

### 字符串模板

> `${ name }` 直接把变量名放进字符串里面，可以折行。

字符串连接 ：

```JavaScript
let a = 15;
let str = `a,${a},b,c`;
alert(str);		// a,15,b,c
```

字符串连接实列：

```javascript
let title = '标题';
let content = '内容';
let str = <div>
    <h1>${title}</h1>
    <p>${content}</p>
    </div>;
alert(str);
```

## 面向对象

> 1.class 关键字、constructor构造器和类分开了
>
> 2.可以在class里直接加方法

```javascript
class User{
    constructor(name,pass){
        this.name = name;
        this.pass = pass
    }
    showName(){
        alert(this.name);		// Snaek
    }
    showPass(){
        alert(this.pass);		// 123456
    }
}
const ul = new User('Snaek','123456');
ul.showName();
ul.showPass();
```

继承：

```javascript
class VipUser extends User{
    constructor(name,pass,level){
        super(name,pass);
        this.level = level;
    }
    showLevel(){
        alert(this.level);
    }
}
const vl = new VipUser('Snaek','123456',12);
vl.showName();		// Snaek
vl.showPass();		// 123456
vl.showLevel();		// 12
```

## JSON对象/简写

### JSON

`JSON.stringify();`

```javascript
let str = { a: 12, b: 54 };
let json = JSON.stringify(str);
console.log(json);			// {"a":12,"b":54}
```

`JSON.parse();`

```javascript
let str = '{ "a":12, "b":32, "c":"abc" }';
let json = JSON.parse(str);
console.log(json);			// {a: 12, b: 32, c: "abc"}
```

### 简写

> 名字和值（key和value）一样可以简写
>
> ```javascript
> let [a,b] = [12,5];
> let json = { a, b, c: 55 };
> console.log(json);	  // {a: 12, b: 5, c: 55}
> ```
>
> 方法在`json`里可以把`:function`去掉
>
> ```javascript
> let json = {
>     a: 12,
>   /*  show: function(){  */
>     show(){
>       alert(this.a);    // 12
>     },
> };
> json.show();
> ```

## Promise

> 异步：操作之间没有关系，可以同时进行多个操作。
>
> 同步：同时只能做一件事。

### Promise.all

> Promise: 用来消除异步操作，用同步一样方式，来写异步代码。
>
> ```javascript
> const p1 = Promise(function (resolve,reject){
>     $.ajax({
>         url: 'arr.txt',
>         dataType: 'json',
>         success(arr){
>             resolve(arr);
>         },
>         error(err){
>             reject(err);
>         }
>     })
> });
> const p2 = Promise(function (resolve,reject){
>     $.ajax({
>         url: 'json.txt',
>         dataType: 'json',
>         success(arr){
>             resolve(arr);
>         },
>         error(err){
>             reject(err);
>         }
>     })
> });
> Promise.all([
>     p1,p2
> ]).then(function (arr){
>     let [res1,res2] = arr;
>     alert('成功',res1);
>     console.log('成功',res2);
> },function (err){
>     alert('失败',err;
> });
> 
> ```
>
> 简写
>
> ```javascript
> function createPromise(url){
>    return new Promise(function (resolve,reject){
>         $.ajax({
>             url,
>             dataType: 'json',
>             success(arr){
>                 resolve(arr);
>             },
>             error(err){
>                 reject(err);
>             }
>         })
> 	});
> }
> Promise.all([
>     createPromise('arr.txt'),
>     createPromise('json.txt')
> ]).then(function (arr){
>     let [res1,res2] = arr;
>     alert('成功',res1);
>     console.log('成功',res2);
> },function (err){
>     alert('失败',err;
> });
> ```
>
> 在更高的`JQuery`版本中，`ajax`自带`Promise`封装 ，我们可以简写成
>
> ```javascript
> Promise.all([
>     $.ajax({url:'arr.txt',dataType:'json'});
>     $.ajax({url:'json.txt',dataType:'json'});
> ]).then(function (arr){
>     let [res1,res2] = arr;
>     alert('成功',res1);
>     console.log('成功',res2);
> },function (err){
>     alert('失败',err;
> });
> ```

### Promise.race

`race`竞速，在多个请求中，那条请求地址先拿到数据，就先用那一条。

```javascript
Promise.race([
    $.ajax({url:'http://a1.baidu.com/data'});
    $.ajax({url:'http://a3.baidu.com/data'});
	$.ajax({url:'http://a4.baidu.com/data'});
	$.ajax({url:'http://a2.baidu.com/data'});
]);
```

## Generator

### *号

> `generator`是一个函数,它可以让函数在执行的过程中停止（走走停停）。
>
> `generator`是将一个函数拆分成多个小函数，通过`next()`来自动执行它里面的小函数，从而实现停止（走走停停）。
>
> `generator`跟普通函数不一样，它会返回一个`generator`对象。
>
> 用法： 用`*`号代替`generator`，需要引入`runner`。

```javascript
function * show(){
    alert('a');
    yield;
    alert('b');
}
const genObje= show();
console.log(genObje);
genObje.next();		// a
// genObje.next();		// b
```

### yield

`yield`传参

> 在`next`传递参数，只会在`yield`后面起作用,`yield`前面是接收不到`next`所传递的值.
>
> 在第一个`next`里传值是没有效果的。

```javascript
function * show(){
    alert('a');
    let a =  yield;
    alert('b');
    alert(a);	//22
}
const genObje= show();
genObje.next(10);		// a
genObje.next(22);		// b
```

`yield`返回

> `yield`可以在中间拿到中间结果，并对中间所拿到的结果进行一些操作

```javascript
function * show(){
    let data1 =  yield 13;
    console.log(data1);
    let data2 =  yield 21;
    console.log(data2);
    return 32;
}
let genObje = show();
let res1 = genObje.next();	
console.log(res1);		// {value: 13, done: false}
let res2 = genObje.next();	
console.log(res2);		// {value: 21, done: false}
let res3 = genObje.next();	
console.log(res3);		// {value: 32, done: true}
```

## async/await

```javascript
async function readData(){
    let data1 = await $.ajax({ url:'data/1txt', dataType:'json' });
    let data1 = await $.ajax({ url:'data/2txt', dataType:'json' });
    let data1 = await $.ajax({ url:'data/3txt', dataType:'json' });
    console.log(data1,data2,data3);
}
readData();
```

