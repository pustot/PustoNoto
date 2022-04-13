```js
var a
let b
console.log('Hello World!')

// 2d array
let dp = Array.from(Array(len0), () => new Array(len1).fill(0));
```

# Myonh-De Leng

## 判断元素在可视区域（懒加载etc）

https://vue3js.cn/interview/JavaScript/visible.html

用于：图片的懒加载、列表的无限滚动、计算广告元素的曝光情况、可点击链接的预加载

方法：

- offsetTop、scrollTop
- getBoundingClientRect
- Intersection Observer
