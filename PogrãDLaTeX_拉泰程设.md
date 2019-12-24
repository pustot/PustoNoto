**因为Github默认将「\$」「\$\$」里的符号当成Markdown正文，导致一些错误，比如LaTeX里表示换行的`\\`会被当成单个 `\` 的转义字符。尚无不明显影响书写体验的良方，只是针对换行这一个场景可以在LaTeX里用`\\\\`代替。对于有些LaTeX解释器，这样做的结果跟`\\`一样，有的则是多出来一行**

善用 `\def` 简化命令，让一些复杂程序变得可读。

大括号树状图の套路：`$\def\LiL{\left\lbrace \begin{aligned}}\def\LiR{\end{aligned}\right.}         \LiL 第一 & \LiL 第一一 \\ 第一二 \LiR  \\ 第二 &\LiL &第二一 \\  &第二二 \LiL  第二二一 \\ 第二二二 \LiR \LiR \LiR$`

$\def\LiL{\left\lbrace \begin{aligned}}\def\LiR{\end{aligned}\right.}         \LiL 第一 & {\LiL 第一一 \\ 第一二 \LiR}  \\ 第二 &{\LiL &第二一 \\  &第二二 {{\LiL  第二二一 \\ 第二二二 \LiR}} \LiR} \LiR$

为了GitHub，把`\\`改成`\\\\`：

大括号树状图の套路：`$\def\LiL{\left\lbrace \begin{aligned}}\def\LiR{\end{aligned}\right.}         \LiL 第一 & \LiL 第一一 \\\\ 第一二 \LiR  \\\\ 第二 &\LiL &第二一 \\\\  &第二二 \LiL  第二二一 \\\\ 第二二二 \LiR \LiR \LiR$`

$\def\LiL{\left\lbrace \begin{aligned}}\def\LiR{\end{aligned}\right.}         \LiL 第一 & {\LiL 第一一 \\\\ 第一二 \LiR}  \\\\ 第二 &{\LiL &第二一 \\\\  &第二二 {{\LiL  第二二一 \\\\ 第二二二 \LiR}} \LiR} \LiR$

更易读的带缩进模式

```latex
$$
\def\LiL{\left\lbrace \begin{aligned}}
\def\LiR{\end{aligned}\right.}
排序 \LiL 
    基本概念 &{\LiL 
        &稳定性 \\\\ 
        &衡量标准：时、空复杂度 \\\\ 
    \LiR}  \\\\ 
    内部排序 &{\LiL 
        &插入排序  {{\LiL 
            &直接插入排序 \\\\
            &折半插入排序 \\\\
            &希尔排序 \\\\
        \LiR}} \\\\  
        &交换排序 {{\LiL  
            冒泡排序 \\\\ 
            快速排序 \\\\
        \LiR}} \\\\
        &选择排序 {{\LiL  
            &简单选择排序 \\\\ 
            &堆排序 \\\\
        \LiR}} \\\\
        &归并排序 \\\\
        &基数排序 \\\\
    \LiR} \\\\
    外部排序 & ——多路归并排序
\LiR
$$
```

$$
\def\LiL{\left\lbrace \begin{aligned}}
\def\LiR{\end{aligned}\right.}
排序 \LiL 
    基本概念 &{\LiL 
        &稳定性 \\\\ 
        &衡量标准：时、空复杂度 \\\\
    \LiR}  \\\\ 
    内部排序 &{\LiL 
        &插入排序  {{\LiL 
            &直接插入排序 \\\\
            &折半插入排序 \\\\
            &希尔排序 \\\\
        \LiR}} \\\\  
        &交换排序 {{\LiL  
            冒泡排序 \\\\ 
            快速排序 \\\\
        \LiR}} \\\\
        &选择排序 {{\LiL  
            &简单选择排序 \\\\ 
            &堆排序 \\\\
        \LiR}} \\\\
        &归并排序 \\\\
        &基数排序 \\\\
    \LiR} \\\\
    外部排序 & ——多路归并排序
\LiR
$$

用cases实现得也不错

```latex
$$
排序 \begin{cases}
    基本概念 &\begin{cases} 
        &稳定性 \\\\ 
        &衡量标准：时、空复杂度 \\\\
    \end{cases}  \\\\ 
    内部排序 &\begin{cases}  
        &插入排序  \begin{cases} 
            &直接插入排序 \\\\
            &折半插入排序 \\\\
            &希尔排序 \\\\
        \end{cases} \\\\  
        &交换排序 \begin{cases}   
            冒泡排序 \\\\ 
            快速排序 \\\\
        \end{cases} \\\\
        &选择排序 \begin{cases}   
            &简单选择排序 \\\\ 
            &堆排序 \\\\
        \end{cases} \\\\
        &归并排序 \\\\
        &基数排序 \\\\
    \end{cases} \\\\
    外部排序 & ——多路归并排序
\end{cases}
$$
```

把 cases 也简写了

```latex
$$
\def\XL{\begin{cases}}
\def\XR{\end{cases}}
排序 \XL
    基本概念 &\XL
        &稳定性\\\\
        &衡量标准：时、空复杂度\\\\
    \XR\\ 
    内部排序 &\XL  
        &插入排序  \XL
            &直接插入排序\\\\
            &折半插入排序\\\\
            &希尔排序\\\\
        \XR\\\\  
        &交换排序 \XL  
            冒泡排序\\\\ 
            快速排序\\\\
        \XR\\\\
        &选择排序 \XL  
            &简单选择排序 \\\\ 
            &堆排序\\\\
        \XR\\\\
        &归并排序\\\\
        &基数排序\\\\
    \XR\\\\
    外部排序 & ——多路归并排序
\XR
$$
```

$$
\def\XL{\begin{cases}}
\def\XR{\end{cases}}
排序 \XL
    基本概念 &\XL
        &稳定性\\\\
        &衡量标准：时、空复杂度\\\\
    \XR\\ 
    内部排序 &\XL  
        &插入排序  \XL
            &直接插入排序\\\\
            &折半插入排序\\\\
            &希尔排序\\\\
        \XR\\\\  
        &交换排序 \XL  
            冒泡排序\\\\ 
            快速排序\\\\
        \XR\\\\
        &选择排序 \XL  
            &简单选择排序 \\\\ 
            &堆排序\\\\
        \XR\\\\
        &归并排序\\\\
        &基数排序\\\\
    \XR\\\\
    外部排序 & ——多路归并排序
\XR
$$


我都想改信纯latex写markdown邪教了（
