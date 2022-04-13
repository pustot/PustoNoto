```js
var a
let b
console.log('Hello World!')

// 2d array
let dp = Array.from(Array(len0), () => new Array(len1).fill(0));
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

```js
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
    - RegExp
    - ...

```js
// Object
let person = {
    name: "Nicholas",
    "age": 29,
    5: true
};


// Array
let colors = ["red", 2, {age: 20 }]
colors.push(2)


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

## 存储区别

- 声明变量时不同的内存地址分配：
    - 简单类型的值存放在栈中，在栈中存放的是对应的值
    - 引用类型对应的值存储在堆中，在栈中存放的是指向堆内存的地址
- 不同的类型数据导致赋值变量时的不同：
    - 简单类型赋值，是生成相同的值，两个对象对应不同的地址
    - 复杂类型赋值，是将保存对象的内存地址赋值给另一个变量。也就是两个变量指向堆内存中同一个对象

# Myonh-De Leng

## 判断元素在可视区域（懒加载etc）

https://vue3js.cn/interview/JavaScript/visible.html

用于：图片的懒加载、列表的无限滚动、计算广告元素的曝光情况、可点击链接的预加载

方法：

- offsetTop、scrollTop
- getBoundingClientRect
- Intersection Observer
