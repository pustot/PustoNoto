CLC: TP312CSS

Dewey 005.133

https://developer.mozilla.org/en-US/docs/Web/CSS

# Properties

## `display`

`none` 是隐藏。默认是 `inline`。

**乄visibility：display的none不占空间，visibility的hidden占空间**

`display: { xs: 'none', md: '...' }` 以使在小屏幕下隐藏。

有一个 `flexGrow: 0,` 的组件，`display: "flex"` 之后，在小屏幕下不会强制让两个item换行堆叠了，而是在一行里舒展，对我就是说的我的 ColorTheme 与 I18n 按钮。

`inline`, `inline-block` & `block` 的区别： https://www.w3schools.com/css/tryit.asp?filename=trycss_inline-block_span1

## `flex-*`

### `flex-grow`

设为0的就缩着，让设为其他值的成比例占空。

### `flex-shrink`

⭐️`flex-shrink: 0;` 让即便 box 不够用时，flex item 也不会缩短宽度。主要是防止为了节省宽度而换行增加长度。我用于navbar，与 `overflow: "auto"` 配合，以使其以 scroll 为准。

## `justify-*`

### `justify-content`

就比如：

- 想把子元素对齐到右边，就用 `justify-content: end`
    - 或者 
- 想把子元素间隔分散，就像NavBar需要链接左而头像右，就 `justify-content: space-between`

```css
.example {
    /* Positional alignment */
    justify-content: center; /* Pack items around the center */
    justify-content: start; /* Pack items from the start */
    justify-content: end; /* Pack items from the end */
    justify-content: flex-start; /* Pack flex items from the start */
    justify-content: flex-end; /* Pack flex items from the end */
    justify-content: left; /* Pack items from the left */
    justify-content: right; /* Pack items from the right */

    /* Baseline alignment */
    /* justify-content does not take baseline values */

    /* Normal alignment */
    justify-content: normal;

    /* Distributed alignment */
    justify-content: space-between; /* Distribute items evenly
                                    The first item is flush with the start,
                                    the last is flush with the end */
    justify-content: space-around; /* Distribute items evenly
                                    Items have a half-size space
                                    on either end */
    justify-content: space-evenly; /* Distribute items evenly
                                    Items have equal space around them */
    justify-content: stretch; /* Distribute items evenly
                                    Stretch 'auto'-sized items to fit
                                    the container */

    /* Overflow alignment */
    justify-content: safe center;
    justify-content: unsafe center;

    /* Global values */
    justify-content: inherit;
    justify-content: initial;
    justify-content: revert;
    justify-content: revert-layer;
    justify-content: unset;
}
```

## `text-*`

### `text-overflow`

`text-overflow: ellipsis;` 以使超出框时用 `...` 替换超出的文本。

## `word-break`

默认 `word-break: normal;` 会让超长单词（好像中日文不会这样）溢出 box，在手机上很容易出现而且很突兀。

⭐️`word-break: break-all;` 我喜欢，自动让单词换行，虽然换行位置不符合词典，但至少不溢出太多。尤其是 h1 h2 这种大文本推荐使用。

`word-break: keep-all;` 连中日文都不断。

## `z-index`

就是 z 坐标的值，越高就越在上层，比如一个 side menu drawer 就应该设高一些。

For a positioned box (that is, one with any `position` **other than** `static`)

但是，没法比 `<dialog>` 更高，除非是 dialog 里面的东西

# Box Model

小提示：文字显示不全，比如标题文字太大了字母 y g 的尾巴被剪掉了，可以提高 py 也就是纵向 padding 的值

# Functions

## `calc()`

注意 `+` `-` 前后必须有空格！那毕竟没有的话会识别成属性名之类

```css
.example {
    width: calc(10px + 100px);
    width: calc(100% - 30px);
    width: calc(2em * 5);
    width: calc(var(--variable-width) + 20px);
}
```

# CSS Animation

Tips and tricks: https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Animations/Tips

如果想触发动画，的例子：

```js
function play() {
  document.querySelector(".box").className = "box";
  requestAnimationFrame((time) => {
    requestAnimationFrame((time) => {
      document.querySelector(".box").className = "box changing";
    });
  });
}
play();
```

```css
@keyframes colorchange {
  0% {
    background: yellow;
  }
  100% {
    background: blue;
  }
}

.box {
  width: 100px;
  height: 100px;
  border: 1px solid black;
}

.changing {
  animation: colorchange 2s;
}
```

```html
<div class="box"></div>

<div class="runButton">Click me to run the animation</div>
```

## `<transform-function>`

https://developer.mozilla.org/en-US/docs/Web/CSS/transform-function

# Extensions & Frameworks

## Tailwind: framework

https://github.com/tailwindlabs/tailwindcss

https://tailwindcss.com/

特别给 NextJS：  https://tailwindcss.com/docs/guides/nextjs

> A utility-first CSS framework for rapid UI development.

思想是不以组件（如按钮）优先，而以用途（属性，样式元素，「工具程式型」）优先。

官方链接到这个 UI 库： https://tailwindui.com/documentation

## Material UI: framework

也可以归类到 CSS framework 里，不过是提供了自己的一套组件，但也可以 theme 它们。

## Sass and `.scss`: preprocessor

> Sass is a preprocessor scripting language that extends the functionality of CSS. It allows you to write CSS more efficiently by using variables, functions, loops, and other features that are not available in CSS.

跟 CSS framework 不是一种东西。A CSS framework provides pre-designed and pre-built components and styles that you can use to quickly create a consistent and visually appealing design for your application. Sass, on the other hand, helps you manage and organize your styles more efficiently by providing advanced features like variables and mixins.

> Sass is a CSS pre-processor with syntax advancements. Style sheets in the advanced syntax are processed by the program, and turned into regular CSS style sheets. However, they do not extend the CSS standard itself.
> 
> CSS variables are supported and can be utilized but not as well as pre-processor variables.

若要使用，对于 Create React App，只需要给 package 里 install 个 sass 即可（node-sass 被废），否则还要手动给 Webpack 启用 sass-loader and css-loader webpack loaders.

关于 `.scss` 和 `.sass`

> The SCSS syntax uses the file extension `.scss`. With a few small exceptions, it’s a superset of CSS, which means essentially **all valid CSS is valid SCSS as well**. Because of its similarity to CSS, it’s the easiest syntax to get used to and the most popular.
>
> The indented syntax was Sass’s original syntax, and so it uses the file extension `.sass`. Because of this extension, it’s sometimes just called “Sass”. The indented syntax supports all the same features as SCSS, but it uses indentation instead of curly braces and semicolons to describe the format of the document.

## PostCSS: preprocessor

> In addition, Create React App provides out-of-the-box support for PostCSS (a CSS preprocessor similar to Sass), allowing you to use features like autoprefixer and continuation tokens in your styles without any additional configuration.

# Myonh-De Leng
