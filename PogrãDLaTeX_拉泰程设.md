
善用 `\def` 简化命令，让一些复杂程序变得可读。

大括号树状图の套路：`$\def\LiL{\left\{\begin{aligned}}\def\LiR{\end{aligned}\right.}         \LiL 第一 & \LiL 第一一 \\ 第一二 \LiR  \\ 第二 &\LiL &第二一 \\  &第二二 \LiL  第二二一 \\ 第二二二 \LiR \LiR \LiR$`

$\def\LiL{\left\{\begin{aligned}}\def\LiR{\end{aligned}\right.}         \LiL 第一 & {\LiL 第一一 \\ 第一二 \LiR}  \\ 第二 &{\LiL &第二一 \\  &第二二 {{\LiL  第二二一 \\ 第二二二 \LiR}} \LiR} \LiR$

更易读的带缩进模式

```latex
$$
\def\LiL{\left\{\begin{aligned}}
\def\LiR{\end{aligned}\right.}
排序 \LiL 
    基本概念 &{\LiL 
        &稳定性 \\ 
        &衡量标准：时、空复杂度 \\
    \LiR}  \\ 
    内部排序 &{\LiL 
        &插入排序  {{\LiL 
            &直接插入排序 \\
            &折半插入排序 \\
            &希尔排序 \\
        \LiR}} \\  
        &交换排序 {{\LiL  
            冒泡排序 \\ 
            快速排序 \\
        \LiR}} \\
        &选择排序 {{\LiL  
            &简单选择排序 \\ 
            &堆排序 \\
        \LiR}} \\
        &归并排序 \\
        &基数排序 \\
    \LiR} \\
    外部排序 & ——多路归并排序
\LiR
$$
```

$$
\def\LiL{\left\{\begin{aligned}}
\def\LiR{\end{aligned}\right.}
排序 \LiL 
    基本概念 &{\LiL 
        &稳定性 \\ 
        &衡量标准：时、空复杂度 \\
    \LiR}  \\ 
    内部排序 &{\LiL 
        &插入排序  {{\LiL 
            &直接插入排序 \\
            &折半插入排序 \\
            &希尔排序 \\
        \LiR}} \\  
        &交换排序 {{\LiL  
            冒泡排序 \\ 
            快速排序 \\
        \LiR}} \\
        &选择排序 {{\LiL  
            &简单选择排序 \\ 
            &堆排序 \\
        \LiR}} \\
        &归并排序 \\
        &基数排序 \\
    \LiR} \\
    外部排序 & ——多路归并排序
\LiR
$$

我都想改信纯latex写markdown邪教了（
