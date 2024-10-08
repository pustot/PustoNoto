CLC: TP312JS

Dewey 005.133

以及 TypeScript。但React框架另立笔记（历史遗留）

教程：

- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Language_Overview
- https://developer.mozilla.org/en-US/docs/Learn/JavaScript
    - 学习部分

运行`js`文件：

```shell
# install Node.JS and
node file-name.js
```

简例：

```javascript
var a
let b
console.log('Hello World!')

// 2d array
let dp = Array.from(Array(len0), () => new Array(len1).fill(0));
```

# 变量声明 var let const | variable declaration

本只有 `var`，ES6 新增了 `let` `const`

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/let

var 的作用域是函数，let 的是块（block，花括号所包）。

var x 之后子块里面再 var x，两个 x 是同一个变量：

```js
function varTest() {
  var x = 1;
  {
    var x = 2;  // same variable!
    console.log(x);  // 2
  }
  console.log(x);  // 2 // 跟许多语言比起来很怪~
}

function letTest() {
  let x = 1;
  {
    let x = 2;  // different variable
    console.log(x);  // 2
  }
  console.log(x);  // 1
}
```

# Data Types

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures

The set of types in the JavaScript language consists of primitive values and objects.

## Primitive values | 基本类型

- Boolean
- null：空指针
    - typeof null 是 "object"
- undefined：声明但未初始化
    - 从 null 派生而来
        - 因此 `console.log(null == undefined); // true`
- Number
    - 整数：默认十进制，01 八进制，0x1 十六进制
    - 浮点：小数点，支持科学计数法
    - NaN：本来要返回数值的操作失败，不抛出错误，而是返回 NaN
        - `typeof NaN === 'number'`
- BigInt
- String
    - 可用 双引号 `"` 单引号 `'` 反引号 `` ` ``
    - 不可变，比如做加法的时候是先销毁再创建
- Symbol
    - `Symbol("foo")` 获得唯一的符号，即再次 `Symbol("foo")` 获得的是不同的。
    - `typeof Symbol('foo') === 'symbol'`

```javascript
// about `Symbol`
var sym = Symbol("foo");
var obj = {[sym]: 1}; // 必须用 [] 创建键。 {sym: 1} 则是用字符串 sym 作为键
obj[sym];             // 1  // 注意不能用点语法来索引，只能用方括号
obj[Object(sym)];     // still 1
```

## Objects (collections of properties) | 引用类型

- "Normal" objects, and functions
- Dates
- Indexed collections: Arrays and typed Arrays
- Keyed collections: Maps, Sets, WeakMaps, WeakSets
- Structured data: JSON
- More objects in the standard library
    - Function
        - > 其实函数也是一个对象类型
        - https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Function
    - RegExp
    - ...

```javascript
// Object
let person = {
    name: "Nicholas",
    "age": 29,
    5: true
};
let res = {
  columns: ['unicode', 'mc', 'pu', 'ct', 'sh', 'mn', 'kr', 'vn', 'jp_go', 'jp_kan', 'jp_tou', 'jp_kwan', 'jp_other'],
  values: [
    ['4F6F', 'jang,ziang', 'yang2', 'joeng4', 'yan6', '[tenn3/tinn3]', 'yang', 'duwowng', 'you(yau)', 'you(yau)', null, null, null],
    ['5134', 'njang', 'rang2,xiang1', 'joeng4', null, null, 'yang,sang', null, '[1]|nyou(nyau)|[2]syou(syau)', '[1]zyou(zyau)[2]syou(syau)', null, null, null]
  ]
};


// Array
let colors = ["red", 2, {age: 20 }]
colors.push(2)


// Map
const m = new Map();
map1.set('a', 1);
map1.set('b', 2);
map1.set('c', 3);
console.log(map1.get('a'));// Expected output: 1
map1.set('a', 97);
console.log(map1.get('a'));// Expected output: 97
console.log(map1.size);// Expected output: 3
map1.delete('b');
console.log(map1.size);// Expected output: 2


// Function
// 函数声明で
function sum (num1, num2) {
    return num1 + num2;
}

// 函数表达式で
let sum = function(num1, num2) {
    return num1 + num2;
};

// 箭头函数で
let sum = (num1, num2) => {
    return num1 + num2;
};
```

### prototype | 原型 | 基于原型的语言 (prototype-based language)

https://developer.mozilla.org/zh-CN/docs/Learn/JavaScript/Objects/Object_prototypes

> JavaScript 常被描述为一种**基于原型的语言 (prototype-based language)**——每个对象拥有一个**原型对象**，对象以其原型为模板、从原型继承方法和属性。原型对象也可能拥有原型，并从中继承方法和属性，一层一层、以此类推。这种关系常被称为**原型链 (prototype chain)**，它解释了为何一个对象会拥有定义在其他对象中的属性和方法。

就是比如 `var ger = new pie()`，`ger.__proto__` 属性就是 `pie.prototype`，于是新对象继承了老对象的原型，访问一个属性时，首先在对象自己找，然后在`这个对象.__proto__` 找，然后是这个proto的`__proto__`……直到原型链的根，`Object.prototype`，都不存在则 `undefined`。

一个对象的想被（原型链下游的对象）继承的属性（和方法）写到 `这个对象.prototype.` 里。

> 备注： 必须重申，原型链中的方法和属性**没有被复制**到其他对象——它们被访问需要通过前面所说的“原型链”的方式。
>
> 备注： 没有官方的方法用于直接访问一个对象的原型对象——原型链中的“连接”被定义在一个内部属性中，在 JavaScript 语言标准中用 `[[prototype]]` 表示（参见 [ECMAScript](https://developer.mozilla.org/zh-CN/docs/Glossary/ECMAScript)）。然而，大多数现代浏览器还是提供了一个名为 `__proto__` （前后各有 2 个下划线）的属性，其包含了对象的原型。你可以尝试输入 `person1.__proto__` 和 `person1.__proto__.__proto__`，看看代码中的原型链是什么样的！


```js
var person2 = Object.create(person1);
// 噉 person2.__proto__ 为 person1
```

### Array

#### Array.prototype.includes() 判断包含

```js
const pets = ['cat', 'dog', 'bat'];

console.log(pets.includes('cat'));
// Expected output: true

console.log(pets.includes('at'));
// Expected output: false
```

#### Array.prototype.sort()

```javascript
arr = [{name: "hello", age :19}, {name: "amc", age: 17}, {name: "abc", age: 17}, {name: "zoo", age: 13}];

arr.sort((a, b) => {
    if (a.age !== b.age) return a.age - b.age;
    else return a.name > b.name? 1: a.name < b.name? -1 : 0;
});

console.log(arr);
```

### class | 类

js 是基于原型的，js 的 class 并不是一种继承对象的新方式：在引擎的底层，这一特性使用的仍是原型。这只是一种更容易的创建原型链的方法。

```js
class Person {
  name;

  constructor(name) {
    this.name = name;
  }

  introduceSelf() {
    console.log(`Hi! I'm ${this.name}`);
  }
}

const giles = new Person('Giles');

giles.introduceSelf(); // Hi! I'm Giles
```

`constructor` 声明构造函数，不需要可省略。构造函数里声明的成员属性，可以不用在构造函数外再声明（如此处name）。


### Standard built-in objects / JSON

```js
// 能 parse 的格式
JSON.parse(`[{"name":"Some dish 1","quantity":1}]`);
```

## 存储区别

- 声明变量时不同的内存地址分配：
    - **简单类型**的值存放在**栈**中，在栈中存放的是对应的值
    - **引用类型**对应的值存储在**堆**中，在栈中存放的是指向堆内存的地址
- 不同的类型数据导致赋值变量时的不同：
    - 简单类型赋值，是生成相同的值，两个对象对应不同的地址
    - 复杂类型赋值，是将保存对象的内存地址赋值给另一个变量。也就是两个变量指向堆内存中同一个对象

## 检测数据类型的方案

- typeof
- instanceof
- constructor
- Object.prototype.toString.call()

```javascript
console.log(typeof []);  // object

console.log([] instanceof Array);  // true

console.log(([]).constructor === Array);  // true

console.log(Object.prototype.toString.call(null));  // [object Null]
console.log(Object.prototype.toString.call([]));  // [object Array]
```

# Equality comparisons and sameness | 相等

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Equality_comparisons_and_sameness

https://vue3js.cn/interview/JavaScript/==%20_===.html

JavaScript provides three different value-comparison operations:

- === - Strict Equality Comparison ("strict equality", "identity", "triple equals")
- == - Abstract Equality Comparison ("loose equality", "double equals")
- Object.is provides SameValue (new in ES2015).
- 
Which operation you choose depends on what sort of comparison you are looking to perform. Briefly:

- double equals (`==`) will perform a type conversion when comparing two things, and will handle NaN, -0, and +0 specially to conform to IEEE 754 (so NaN != NaN, and -0 == +0); | 类型转换有り
- triple equals (`===`) will do the same comparison as double equals (including the special handling for NaN, -0, and +0) but without type conversion; if the types differ, false is returned. | 类型转换無し，包含`==`对NaN, -0, +0的特殊处理
- `Object.is` does no type conversion and no special handling for NaN, -0, and +0 (giving it the same behavior as === except on those special numeric values). | 类型转换無し，不含`==`对NaN, -0, +0的特殊处理

## `==` は loose equality | 双等号，宽相等

- 两个都为简单类型，字符串和布尔值都会转换成数值，再比较
- 简单类型与引用类型比较，对象转化成其原始类型的值，再比较
- 两个都为引用类型，则比较它们是否指向同一个对象
- null 和 undefined 相等
- 存在 NaN 则返回 false

## `===` は strict equlity | 三等号，全等

`undefined !== null`

## `==` 乄 `===`

除了在比较对象属性为null或者undefined的情况下，用相等操作符 ==，否则建议一律 ===

```javascript
const obj = {};

if(obj.x == null){  // 等效于  if(obj.x === null || obj.x === undefined)
  ...
}


// anders wird `==` weird werden
'' == '0' // false
0 == '' // true
0 == '0' // true
1 == [1] // true: Array.toString() is join(','), so 1
0 == [] // true: first, [] -> ''; then, '' == 0
        // ABER: `!![]` ist whar. da es ist 'to Boolean', und als Objekt, es ist whar. 

false == 'false' // false
false == '0' // true

false == undefined // false
false == null // false
null == undefined // true

' \t\r\n' == 0 // true
```

# Closure | 闭包

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures

```javascript
// $$$$$ Example 1
function makeAdder(x) {
  return function(y) {
    return x + y;
  };
}

var add5 = makeAdder(5);
var add10 = makeAdder(10);

console.log(add5(2));  // 7
console.log(add10(2)); // 12


// $$$$$ Example 2
// global scope
var e = 10;
function sum(a){
  return function(b){
    return function(c){
      // outer functions scope
      return function(d){
        // local scope
        return a + b + c + d + e;
      }
    }
  }
}

console.log(sum(1)(2)(3)(4)); // log 20

// You can also write without anonymous functions:

// global scope
var e = 10;
function sum(a){
  return function sum2(b){
    return function sum3(c){
      // outer functions scope
      return function sum4(d){
        // local scope
        return a + b + c + d + e;
      }
    }
  }
}

var sum2 = sum(1);
var sum3 = sum2(2);
var sum4 = sum3(3);
var result = sum4(4);
console.log(result) //log 20

```

# Web APIs

## Document

### Document.getElementById()

**对比** `document.querySelector()`: `document.getElementById()` 是用id，而 `document.querySelector()` 是用 CSS selector

- 若不存在，都返回 `null`

返回 Element 对象，于是可以更改其属性。特别地，更改tag之间的内容用 `el.innerHTML = "xxx"`

```js
function changeColor(newColor) {
  const elem = document.getElementById("para");
  elem.style.color = newColor;

  elem.innerHTML = "xxx";
}
```

注意，只搜索已经在 document 中的元素。新建的元素必须用 `Node.insertBefore()` 之类的方法插入 document tree 才能被 get 到

```js
const element = document.createElement("div");
element.id = "testqq";
const el = document.getElementById("testqq"); // el will be null!

// say clickie() is a function
element.onclick = clickie;
// or, to pass some arguments
element.onclick = () => {login(arg0, arg1)}; 
```

## Location

### replace() & href

```js
// Simulate a mouse click: （另外Android仅可用此，不可用下面那个）
window.location.href = "http://www.w3schools.com";

// Simulate an HTTP redirect:
window.location.replace("http://www.w3schools.com");
```

## Window

指浏览器窗口。

https://developer.mozilla.org/en-US/docs/Web/API/Window

有 window 暴露给 js。

### sessionStorage & localStorage

想在多个页面间共享状态，可以用它们。否则，一个`A.html`引入`scr.js`的全局变量，并不与`B.html`引入同一js文件的变量共享。

只能存字符串

> `localStorage` is similar to [sessionStorage](https://developer.mozilla.org/en-US/docs/Web/API/Window/sessionStorage), except that while `localStorage` data has no expiration time, `sessionStorage` data gets cleared when the page session ends — that is, when the page is closed. (`localStorage` data for a document loaded in a "private browsing" or "incognito" session is cleared when the last "private" tab is closed.)
>
> -- https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage

存储在 `sessionStorage` 里面的数据在页面会话结束时会被清除。

- Whenever a document is loaded in a particular tab in the browser, a unique page session gets created and assigned to that particular tab. That page session is valid only for that particular tab. | tab 加载文件，即创建会话给特定 tab，仅有用于此 tab
- 页面会话在浏览器打开期间一直保持，并且重新加载或恢复页面仍会保持原来的页面会话。
- **在新标签或窗口打开一个页面时会复制顶级浏览会话的上下文作为新会话的上下文，这点和 session cookie 的运行方式不同。**
- 打开多个相同的 URL 的 Tabs 页面，会创建各自的 sessionStorage。
- Duplicating a tab copies the tab's `sessionStorage` into the new tab. | 复制tab则复制 sessStor 焉
- 关闭对应浏览器标签或窗口，会清除对应的 sessionStorage。

```js
// Save data to sessionStorage
sessionStorage.setItem("key", "value");

// Get saved data from sessionStorage, 没有就 null
let data = sessionStorage.getItem("key");

// Remove saved data from sessionStorage
sessionStorage.removeItem("key");

// Remove all saved data from sessionStorage
sessionStorage.clear();

// localStorage
localStorage.setItem('myCat', 'Tom');
const cat = localStorage.getItem('myCat');
localStorage.removeItem('myCat');
localStorage.clear();
```

### setInterval()

https://developer.mozilla.org/en-US/docs/Web/API/setInterval

https://www.runoob.com/js/js-timing.html

```js
window.setInterval(.....)

setInterval(func)
setInterval(func, delay)
setInterval(func, delay, arg0, arg1, /* … ,*/ argN)
```

重复执行 func，间隔为 delay。在 Window 和 Worker 接口下

### setTimeout()

在指定时间后执行func。

## HTMLDialogElement

**对比：** `alert(someInfo)` 是用浏览器内置的 alert，在 Chrome 中就是显示在页面最上方的那个要点确定的框框

```js
const myDialog = document.getElementById("myDialog");
// 以 modal 打开：
myDialog.showModal();
// 关上
myDialog.close();
// 判断打开了否
if (myDialog.open) { /* do something */}

// 可以考虑写一个，setTimeOut 的，则是几秒后关闭的提示框
```

# ES6

这些是 ES6 新增的：

- arrow function
- class
- `let`, `const`

# jQuery

jQuery是一套跨浏览器的JavaScript库，用于简化HTML与JavaScript之间的操作。

# Babel

是一个js编译器，主要用于把新版本js转换到老版本。

[Babel REPL](https://babeljs.io/repl/) 可以用来看 ES6 转换到什么代码。

# JSDoc: to annotate JavaScript source code files

> **JSDoc** is a markup language used** to annotate JavaScript source code files**. Using comments containing JSDoc, programmers can add documentation describing the application programming interface of the code they're creating. This is then processed, by various tools, to produce documentation in accessible formats like HTML and Rich Text Format. The JSDoc specification is released under CC BY-SA 3.0, while its companion documentation generator and parser library is free software under the Apache License 2.0.
>
> JSDoc's syntax and semantics are similar to those of the **Javadoc** scheme, which is used for documenting code written in Java. JSDoc differs from Javadoc, in that it is **specialized to handle JavaScript's dynamic behaviour**.[1]

特别地，可以作 TypeScript 的过渡

https://devhints.io/jsdoc

```js
/**
 * This is a function.
 *
 * @param {string} n - A string param
 * @param {string} [o] - A optional string param
 * @param {string} [d=DefaultValue] - A optional string param
 * @return {string} A good string
 *
 * @example
 *
 *     foo('hello')
 */

function foo(n, o, d) {
  return n
}
```

类型们：

```js
/** @type {number} */
/** @type {string} */
/** @type {boolean} */
/** @type {RegExp} */

// 或者是一个函数
/** @type {function} */

// 一个包含参数的函数
/** @type {function(number, string)} */

// Object结构的参数
/** @type {function({ arg1: number, arg2: string })} */

// 一个包涵参数和返回值的函数
/** @type {function(number, string): boolean} */
```

# Jest for testing

# Express: web framework 

https://developer.mozilla.org/en-US/docs/Learn/Server-side/First_steps/Web_frameworks#express_node.jsjavascript

> [Express](https://expressjs.com/) is a fast, unopinionated, flexible and minimalist web framework for [Node.js](https://nodejs.org/en/) (node is a browserless environment for running JavaScript). It provides a robust set of features for web and mobile applications and delivers useful HTTP utility methods and [middleware](https://developer.mozilla.org/en-US/docs/Glossary/Middleware).

# NestJS: server-side Node.js framework

https://github.com/nestjs/nest

A progressive Node.js framework for building efficient, scalable, and enterprise-grade server-side applications on top of TypeScript & JavaScript (ES6, ES7, ES8) 🚀

Under the hood, Nest makes use of **Express**, but also, provides compatibility with a wide range of other libraries, like e.g. Fastify, allowing for easy use of the myriad third-party plugins which are available.

# Electron: cross-platform desktop app

Electron is a free and open-source software framework developed and maintained by OpenJS Foundation. The framework is designed to create desktop applications using web technologies that are rendered using a version of the **Chromium** browser engine and a back end using the **Node.js** runtime environment. 

于是很多桌面应用都带个 chromium 内核

# Lib Collections

## RxJS for reactive 异步

https://rxjs.dev/

# TypeScript

CLC: TP312JS

- [Migrating from JavaScript at typescriptlang.org](https://www.typescriptlang.org/docs/handbook/migrating-from-javascript.html)

# Myonh-De Leng

## 判断元素在可视区域（懒加载etc）

https://vue3js.cn/interview/JavaScript/visible.html

用于：图片的懒加载、列表的无限滚动、计算广告元素的曝光情况、可点击链接的预加载

方法：

- offsetTop、scrollTop
- getBoundingClientRect
- Intersection Observer
