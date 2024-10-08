CLC: TP312C++

Dewey 005.133

书籍：

- **C++ Primer**, by Stanley B. Lippman; Josée Lajoie; Barbara E. Moo: 据说更经典。
    - 第5版，Originally published: 6 August 2012，根据 C++11 新标准，目前这本书比较够用
    - 本笔记计划基于这本书
    - https://zhjwpku.com/assets/pdf/books/C++.Primer.5th.Edition_2013.pdf
    - [如何正确通过 C++ Primer 学习 C++？ - Zhihu](https://www.zhihu.com/question/32087709)
- C++ Primer Plus, by Stephen Prata: 更入门，更适合编程经验少
- Effective ... 更进阶更优雅？

零散学习资料：

- https://en.cppreference.com/w/
- [isocpp/CppCoreGuidelines](https://github.com/isocpp/CppCoreGuidelines)
- [Microsoft C++、C 和汇编程序文档 - MSLearn](https://learn.microsoft.com/zh-cn/cpp/?view=msvc-170)
- [0voice/introduce_c-cpp_manual - GitHub](https://github.com/0voice/introduce_c-cpp_manual)
- [有哪些轻量级适合阅读的优秀 C++ 开源项目？ - 知乎](https://www.zhihu.com/question/40131963)
- 轮子哥的博客
    - http://www.cppblog.com/vczh/
        - [伴随我成长的编程书 - vczh](https://www.cppblog.com/vczh/archive/2016/03/28/198769.html)
    - https://cnblogs.com/geniusvczh/
- 叛逆者的博客 https://cnblogs.com/gongminmin/
- mq白的知乎同哔站
    - https://www.zhihu.com/people/o4ze4r
    - https://space.bilibili.com/1292761396
- [modern-cpp-tutorial by 欧长坤](https://github.com/changkun/modern-cpp-tutorial)
    - https://changkun.de/modern-cpp/ 在线阅读本书
- https://github.com/Light-City/CPlusPlusThings
- 黑马程序员的 C++ 教程 2019 版 https://www.bilibili.com/video/BV1et411b73Z
    - 课程资料 https://github.com/Blitzer207/C-Resource
- [project-based-learning - GitHub](https://github.com/practical-tutorials/project-based-learning#cc)
    - https://github.com/tuhdo/os01
- 服务器项目
    - [C++后台开发有哪些练基础的开源项目？ - 知乎](https://www.zhihu.com/question/39169728)：里面推荐了一堆服务器项目
    - [qinguoyi/TinyWebServer](https://github.com/qinguoyi/TinyWebServer) 13k stars，星标最多，C++（非11），也是知乎点赞最高对应的项目，看起来README、知乎、公众号讲解比较完善
        - 秋招用，基于 游双的Linux高性能服务器编程
    - [markparticle/WebServer](https://github.com/markparticle/WebServer) 2.8k stars，是星标最多的 qinguoyi/TinyWebServer 下面提到的 C++11 实现
    - [sylar-yin/sylar](https://github.com/sylar-yin/sylar) 3.2k stars，也是 C++11，有哔站视频
    - [linyacool/WebServer](https://github.com/linyacool/WebServer) 6.9k stars，C++11
    - [chenshuo/muduo](https://github.com/chenshuo/muduo) 13k stars，C++11，陈硕 大神个人开发的 C++ 的 TCP 网络编程库，很经典
        - 剖析 编程沉思录 https://www.cyhone.com/articles/analysis-of-muduo/
        - [yuesong-feng/30dayMakeCppServer](https://github.com/yuesong-feng/30dayMakeCppServer) 3.9k stars，循序渐进的教程，帮助看懂muduo源码。其代码库在 README 列出
        - > 大部分人写的项目都是一个烂大街的项目，也就是“web高性能服务器”。其实就是根据陈硕大神写的《Linux高性能服务器编程：使用muduo C++网络库》进行改编

[C/C++ for Visual Studio Code](https://marketplace.visualstudio.com/items?itemName=ms-vscode.cpptools)

# 1 开始 | Getting Started

# 壹 C++ 基础 | The Basics

# 2 变量和基本类型 | Variables and Basic Types

## 2.1 基本内置类型

### 2.1.1 算术类型

算术类型 含 整型（包括字符和布尔型） 和 浮点型

尺寸（size）表（C++标准规定的尺寸最小值，而允许编译器赋更大尺寸）

类型 | 最小尺寸
-|-
bool|未定义（一般1字节？）
char|1字节=8位
short|2字节=16位
int|2字节=16位
long|4字节=32位
long long|8字节=64位
float|6位有效数字
double|10位有效数字
long double|10位有效数字

### 2.1.2 类型转换

### 2.1.3 字面值常量

## 2.2 变量

### 2.2.1 变量定义

### 2.2.2 变量声明乄定义 (+存储类) | Variable Declarations and Definitions

`声明`使名字为程序所知，文件想使用别处定义的名字则必须包含对此名字的声明。`定义`负责创建与名字关联的实体。

区别在于，除了规定类型和名字， 定义 还申请存储空间，也可能赋初始值。

变量能且只能被定义1次，但可以声明多次。

声明和定义的区别重要性在于，如果要在多个文件中使用同一个变量，必须将声明和定义分离。此时，定义出且仅出现在一个文件，而其他文件对其声明但不能重复定义。

任何包含了显式初始化的声明即成为定义。

若想声明而不定义，加关键字`extern`，且不要显式初始化

```cpp
extern int i; // 声明而不定义
int j; // 声明并定义
extern double pi = 3.14; // 定义
```

`存储类(storage class)`也在 声明 的句法里（`decl-specifier-seq`）。表示变量/函数的范围（可见性）和生命周期。

- `auto` 自动存储类型，C亦有。也就是申明一块临时的变量内存。跟不带specifier的意思一样。在C++11中改为自动推断变量的类型。
- `register` 寄存器储存类型，C亦有。在由内存调入到CPU寄存器后，常驻于寄存器，因此访问高效，因为省去了变量由内存调入到寄存器过程中的好几个指令周期。C++17 弃用之。
- `static` 静态储存类型，C亦有。
    - 指示编译器在程序的生命周期内保持局部变量的存在，而不需要在每次它进入和离开作用域时进行创建和销毁。因此，使用 static 修饰局部变量可以在函数调用之间保持局部变量的值。
    - static 修饰符也可以应用于全局变量。当 static 修饰全局变量时，会使变量的作用域限制在声明它的文件内。
    - 在 C++ 中，当 static 用在类数据成员上时，会导致仅有一个该成员的副本被类的所有对象共享。
- `extern` 外部储存类型，C亦有。用于提供一个全局变量的引用，全局变量对所有的程序文件都是可见的。
- `mutable` 仅适用于类的对象，它允许对象的成员替代常量。也就是说，mutable 成员可以通过 const 成员函数修改。
    - 上面那句话是我复制的，可能文法不同。主要是说，声明为const的成员函数本意是不能修改数据成员，但被 mutable 修饰的数据成员，可以在 const 成员函数中修改。
    - const意思是“这个函数不修改对象内部状态”。mutable意思是“这个成员变量不算对象内部状态”。故可修改。
    - Mutable is used to specify that the member does not affect the externally visible state of the class (as often used for mutexes, memo caches, lazy evaluation, and access instrumentation).
- `thread_local` 仅可在它在其上创建的线程上访问。 变量在创建线程时创建，并在销毁线程时销毁。 每个线程都有其自己的变量副本。
    - 仅应用于数据声明和定义，不能用于函数声明或定义。

`thread_local` 可以与 static 或 extern 一起用。其他皆不能一起用。

`extern`

```cpp
/* 第一个文件 */
#include <iostream>
 
int count ;
extern void write_extern();
 
int main()
{
   count = 5;
   write_extern();
}

/* 第二个文件 */
#include <iostream>
 
extern int count;
 
void write_extern(void)
{
   std::cout << "Count is " << count << std::endl;
}
```

`mutable`

```cpp
class ThreadsafeCounter
{
    mutable std::mutex m; // The "M&M rule": mutable and mutex go together
    int data = 0;
public:
    int get() const
    {
        std::lock_guard<std::mutex> lk(m);
        return data;
    }
 
    void inc()
    {
        std::lock_guard<std::mutex> lk(m);
        ++data;
    }
};
```

### 2.2.3 标识符

### 2.2.4 名字的作用域

## 2.3 复合类型（类型加 `&` `*`。并收此符号比较）

- [What's the meaning of * and & when applied to variable names?](https://stackoverflow.com/questions/3350626/whats-the-meaning-of-and-when-applied-to-variable-names)

&nbsp;| 在变量声明前，作为类型之修饰 | 在变量前，作为变量一元操作
-|-|-
`&` | 表明其为引用类型 | 用于对象，取其地址
`*` | 表明其为引用类型 | 用于指针，取其内容（即，解引用 dereference）
`[]` | （不一定在前？在后表长度）表明其为列表类型 | 用于列表对象，取其列表成员

## 2.4 const 限定符

## 2.5 处理类型

## 2.6 自定义数据结构

# 3 字符串、向量和数组 | Strings, Vectors and Arrays

## 3.1 命名空间和 using 声明

## 3.2 标准库类型 `string`

记录一些字符串的操作。（仲見與 9.5 同 17.3。但都放呢度好啲？）

- `==` 所含字符相等
- `s.length()` 同义于 `s.size()`
- `s.substr(size_t pos = 0, size_t len = npos)` (即 从pos起len长， 默认从pos至最末)
- 没有如py之split。有况代以`getline()` 如力扣 1166m
- `getline(istream&& is, string& targetStr, char delim='\n')` 从 istream 输入到 targetStr，逢delim中断，用循环处理之

```cpp
// 用`getline`模拟split操作
// 力扣 1166m 函数之一，获取文件路径对应的value，找不到返-1
struct TrieNode {
    int value;
    unordered_map<string, TrieNode*> children;
    TrieNode(int v) : value(v), children(unordered_map<string, TrieNode*>()) {}
};
TrieNode* root;
int get(string path) {
    stringstream ss(path);
    string item;
    TrieNode* curr = root;
    while (getline(ss, item, '/')) {
        if (item == "") continue;
        if (curr->children.find(item) == curr->children.end()) { // not found
            return -1;   
        } else {
            curr = curr->children[item];
        }
    }
    return curr->value;
}

// C++冇replaceAll，替代物
//// 以 regex
string recurrer = std::regex_replace(s, std::regex(string() + ch), string());
//// 以 remove （勿忘erase）（只用於char之刪除）
recurrer = s;
recurrer.erase(remove(recurrer.begin(), recurrer.end(), ch), recurrer.end());
```

## 3.3 标准库类型 `vector`

## 3.4 迭代器介绍

## 3.5 数组

## 3.5.1 定义和初始化内置数组

一维数组基本定义方式

```cpp
int arrName[arrLength];
int arrName[arrLength] = { val1, val2, ...};
int arrName[ ] = { val1, val2, ...};

// 赋值

memset(arrName, val, arrLength);
// 不一定所有编译器都支持。大概是调用 memset。
char array[ARRAY_SIZE_MAX] = {0};  //声明时使用{0}初始化为全0  
```

获取数组长度

```cpp
sizeof(arr) / sizeof(arr[0])
```

直接打印即首地址

```cpp
cout << arr << endl;
```

## 3.5.2 访问数组元素

## 3.5.3 指针和数组

## 3.5.4 C风格字符串

## 3.5.5 与旧代码的接口

## 3.6 多维数组

定义方式

```cpp
int arr[ rowNum ][ colNum ];
int arr[ rowNum ][ colNum ] = { {val1, val2}, {val3, val4} }; // 易读
int arr[ rowNum ][ colNum ] = { val1, val2, val3, val4 };
int arr[ ][ colNum ] = { val1, val2, val3, val4 };
```

# 4 表达式 | Expressions

## 4.1 基础

## 4.2 算术运算符

## 4.3 逻辑和关系运算符

## 4.4 赋值运算符

## 4.5 递增和递减运算符

## 4.6 成员访问运算符

## 4.7 条件运算符（三目运算符 ternary operator）

三目运算符 亦可被赋值！（当皆为左值？）

```cpp
(a > b ? a : b) = 100;
```

## 4.8 位运算符

**注意位运算符优先级都比较低，尤其是低于加法，如需要，记得把位运算结果括起来再加号。**

## 4.9 sizeof 运算符

sizeof(x) 里 既可为类型 亦可为变量

## 4.10 逗号运算符

## 4.11 类型转换

## 4.12 运算符优先级表

# 5 语句 | Statements

# 6 函数 | Functions

## 6.1 函数基础

## 6.2 参数传递

## 6.3 返回类型和return语句

## 6.4 函数重载

## 6.5 特殊用途语言特性

### 6.5.1 默认实参

### 6.5.2 内联函数（inline）和constexpr函数

内联（`inline`）函数，即编译时用函数体替代函数调用那一块儿，而不是在运行时再调用，从而避免函数调用的开销。一般是很短小的函数，用空间换时间。太长了编译器很可能拒绝。

定义必须在调用前。

```cpp
inline int Max(int x, int y)
{
   return (x > y)? x : y;
}
```

### 6.5.3 调试帮助

## 6.6 函数匹配

## 6.7 函数指针

# 7 类 | Classes

```cpp
// 想在外面访问这些数据成员故定义为 struct
struct TrieNode {
    bool isWord;
    unordered_map<char, TrieNode*> children;
    TrieNode() : isWord(false), children(unordered_map<char, TrieNode*>()) {}
};

// 使用时
// 指针
// 创建在堆上。需要自行delete
// 对比，在Java中，所有对象都创建在堆。基本数据类型在栈帧，但它们不是对象。
TrieNode* root = new TrieNode();
// 类变量
// 这样创建是创建在了栈上，而new的对象在堆上
Stack s; // 直接这样就创建了。new 返回的是指针，不一样。
```

## 7.1 定义抽象数据类型

## 7.2 访问控制与封装 (class乄struct)

`class` 与 `struct` 的**唯一区别**是默认访问权限不一样。structはpublic，classはprivate

## 7.3 类的其他特性

## 7.4 类的作用域

## 7.5 构造函数再探

## 7.6 类的静态成员

# 贰 C++ 标准库 | The C++ Library

# 8 IO 库 | The IO Library

# 9 顺序容器 | Sequential Containers

是对第三章的拓展。

如 `vector<>`，可变长的序列也。
`forward_list` 不支持 `push_back` `emplace_back` `back` `pop_back`；；`vector` `string` 不支持 `push_front` `emplace_front` `pop_front`

- 不支持 `push_front` `pop_front` 等是因为 `vector` 基于数组，在首部增删需要移动所有元素，不效率
- 如果需要经常在首部增删，要考虑 `std::deque`，它提供于vector类似的方法，但支持高效的首尾增删。

`.begin()` 是第一个元素的迭代器，`.end()` 是最后一个元素之后的元素

`.push_back(t)` 在尾部创建值为`t`的元素，（！vector并不存在`.push_front(t)`头部），`.insert(p, t)`在`p`指向的元素前，如首可以`data.insert(data.begin(), value)`

- （C++ 11）`.emplace_back()` 執行效率更高。因為，`.push_back(t)`係先創建再拷貝（然後銷毀所創）/移動（如果有移動構造函數）到容器；而 `.emplace_back()` 直接喺容器尾創建呢個元素

`.pop_back()` 相对地，尾部移除元素。

vector不存在 pop front 的方法，因为基于数组。可以试着

```cpp
template<typename T>
void pop_front(std::vector<T>& vec)
{
    assert(!vec.empty());
    vec.erase(vec.begin());
}
```

`.empty()` 是比 `! v.size()` 更优雅地检查是否为空

`.back()` `.front()` 可以直接访问最后一个/第一个元素，不需要 `v[v.size() - 1]`

## 9.1 顺序容器概述

## 9.2 容器库概览

```cpp
// 二维向量初始化为大小 m, n
vector<vector<bool>> visit(m, vector<bool>(n));

// 直接用表達式建vector
unordered_map<int, vector<int>> m;
if (m.contains(a))
    m[a].emplace_back(b);
else
    m[a] = vector{ b };
```

## 9.3 顺序容器操作

## 9.4 vector对象是如何增长的

## 9.5 额外的string操作

主要見3.2

## 9.6 容器适配器 (如 stack, queue) | Container Adaptors

觀察：函數命名據數據結構嘅概念出入都係 pop 同 push，從對應嘅所在，而非 `push_back` 等。

### 栈适配器 `stack`

默认基于deque实现，也可以在list或vector

- `st.push()` 入桟
- `st.pop()` 出桟
- `st.top()` 睇棧頂
- `st.size()`

### 队列适配器

queue默认基于deque实现，`priority_queue`默认vector

- `q.push()` 嚟添加嘢
- `q.pop()` 移除首元素而不返回
- `q.front()` `q.back()` 返回但不移除 首或尾
    - 所以須 front + pop 以訪問並移除，煩喎
- `q.size()`

```cpp
// 初始化以值
queue<int> q({0});
```

# 10 泛型算法 (や容器を操) | Generic Algorithms

与类型无关故曰泛型。亦即操作容器的算法。前俩参数常为迭代器起终点。

## 10.1 概述

如 `find()` 附 A.2.1

## 10.2 初识泛型算法

## 10.3 定制操作

## 10.4 再探迭代器

## 10.5 泛型算法结构

## 10.6 特定容器算法

# 11 关联容器（如 mapとset） | Associative Containers

`关联容器`与`顺序容器`有根本不同：其元素按关键字来保存和访问，而不是按位置顺序。

标准库的8个关联容器：

名称|头文件|集合还是映射|是否允许关键字重复|按顺序保存元素还是无序
-|-|-|-|-
`map`|`<map>`|map|叵重|有序
`set`|`<set>`|set|叵重|有序
`multimap`|`<map>`|map|可重|有序
`multiset`|`<set>`|set|可重|有序
`unordered_map`|`<unordered_map>`|map|叵重|无序
`unordered_set`|`<unordered_set>`|set|叵重|无序
`unordered_multimap`|`<unordered_map>`|map|可重|无序
`unordered_multiset`|`<unordered_set>`|set|可重|无序

## 11.1 使用关联容器

## 11.2 关联容器概述

### 11.2.1 定义关联容器

值初始化

```cpp
unordered_map<char, vector<char>> d2l = {
    {'2', {'a', 'b', 'c'}},
    {'3', {'d', 'e', 'f'}},
    {'4', {'g', 'h', 'i'}},
    {'5', {'j', 'k', 'l'}},
    {'6', {'m', 'n', 'o'}},
    {'7', {'p', 'q', 'r', 's'}},
    {'8', {'t', 'u', 'v'}},
    {'9', {'w', 'x', 'y', 'z'}},
};
```

### 11.2.2 关键字类型的要求

### 11.2.3 pair类型

## 11.3 关联容器操作

`unordered_map` 哈希表

- 直接用 `m[key]` 取用
- `m[key] = val` 可以添加新的键值对
- `m.find(key) == m.end()` 可查有无此键，返回end或iterator
    - 亦可用 `m.count(k)>0` 哟
    - 亦可用 `m.contains(k)`
- 遍历的话，记得`unordered_map`中的元素都是`pair`键值分别为`first` `second`

```cpp
std::unordered_map<int, std::string> myMap;
// 如何遍历它
// 不修改，可以用常量引用 const T&
// 如果要修改，只能修改v，不能k
// 使用 & 也就是引用，是为了避免复制。毕竟哈希表里经常是大元素
for (auto& kv : myMap) {
    std::cout << "Key: " << kv.first << " Value: " << kv.second << std::endl;
}

// C++17 支持结构化绑定 (structured binding) 
// 结构化绑定允许您将结构体、数组或tuple的成员直接“解包”到各个变量中
// 也就是
for (const auto& [key, value] : myMap) {
    std::cout << "Key: " << key << " Value: " << value << std::endl;
}
```

`unordered_set` 哈希集

- 判存在否用 `s.contains()`
- 插入元素用 `s.insert(val)`

## 11.4 无序容器

https://en.cppreference.com/w/cpp/container/unordered_map

`unordered_` 的元素，即 `unordered_map` 等。这些容器不是使用比较运算符来组织元素，而是使用一个哈希函数和关键字类型的`==`运算符。

# 12 动态内存 (と智能指针) | Dynamic Memory

内存有几块

- 栈内存：保存函数内非static对象；编译器自动创建销毁
    - 比如，`Stack s;` 创建的在栈，`Stack* s = new Stack();` 的在堆。C++为程序员提供底层控制，可以选择对象的存储位置，而Java所有对象都在堆，更自动化，内存管理交给JVM处理
- 静态内存：保存诸static者及函数外变量；编译器自动创建销毁
- 堆or自由空间（or动态内存）：动态分配，生存期由程序控制，也就是说必须由代码显式销毁

最基本的动态内存用 `new` `delete`。为了灵活性，`allocator` 类可以帮助将内存分配和对象构造分离。

新标准提供两种`智能指针`，与原生的区别是自动释放所指向的对象

- `unique_ptr` 独占对象
- `shared_ptr` 允许多个指针指向同一对象；用计数器决定销毁
    - `weak_ptr` 指向 `shared_ptr` 管理的对象但不参与计数
    - 创建以 `make_shared<T>(args)`

（有建议不使用 `new` `delete` 而只使用智能指针）

# 叁 类设计者的工具 | Tools for Class Authors

# 13 拷贝控制（三五法则，拷构と移构と拷赋と移赋と析构，RAII） | Copy Control

## 13.+ RAII

RAII (Resource Acquisition Is Initialization)，资源获取即初始化。基本是说，凡资源，要在构造函数里获取，在析构函数里释放。

C++没有自带的垃圾回收机制，但关于避免内存泄漏等目的，RAII 这个规范大概是够用的？

- [Resource acquisition is initialization - Wikipedia](https://en.wikipedia.org/wiki/Resource_acquisition_is_initialization)
- [RAII - cppreference.com](https://en.cppreference.com/w/cpp/language/raii)
- [对象生存期和资源管理 (RAII) - MS Learn](https://learn.microsoft.com/zh-cn/cpp/cpp/object-lifetime-and-resource-management-modern-cpp)
- [C++ · RAII 和 智能指针 - Zhihu](https://zhuanlan.zhihu.com/p/470270741)
- [RAII和垃圾收集GC - csdn](https://blog.csdn.net/monkey_d_meng/article/details/5731935)
- [What is meant by Resource Acquisition is Initialization (RAII)? - StackOverflow](https://stackoverflow.com/questions/2321511/what-is-meant-by-resource-acquisition-is-initialization-raii)
- [什么情况下 C++ 需要垃圾处理机制？ - Zhihu](https://www.zhihu.com/question/308638046)
- [为什么 C++ 11 标准不加入 GC 功能呢？ - Zhihu](https://www.zhihu.com/question/24954016)

## 13.1 拷贝、赋值与销毁

## 13.2 拷贝控制和资源管理

## 13.3 交换操作

## 13.4 拷贝控制示例

## 13.5 动态内存管理类

## 13.6 对象移动

- [C++所有权与移动语义 - mq白 - 知乎](https://zhuanlan.zhihu.com/p/658035687)
    - 所有权同移動密不可分，可以講移動語義誕生即係為咗方便區分一種轉移 到底係 所有權轉移 定係 複製。
    - 所有權轉移嘅設計係君子協定，取決於實現，而 `std::move` 淨係提示要調用移動構造函數
    - Rust嘅所有权都系啦。唔复制内容，净转移地址，而原来所有者得nullptr。

### 13.6.1 右值引用

### 13.6.2 移动构造函数和移动赋值运算符

### 13.6.3 右值引用和成员函数

# 14 重载运算与类型转换 | Overloaded Operations and Conversions

```cpp
// 运算符函数可以像其他函数那样调用

// 非成员运算符函数
data1 + data2;
// 等价于
operator+(data1, data2);

// 成员运算符函数
data1 += data2;
// 等价于
data1.operator+=(data2);
```

# 15 面向对象程序设计 | Object-Oriented Programming

## 15.1 OOP: 概述

## 15.2 定义基类和派生类

## 15.3 虚函数 | Virtual Functions

虚函数是实现多态（polymorphism）的一个机制。通过基类（的指针或引用）访问派生类定义的函数。
多态性使函数在运行时（动态）确定而不是在编译时（静态）确定。

- 虚函数，在类成员方法的声明（不是定义）语句前加`virtual`, 如 `virtual void func()`
- 纯虚函数，在虚函数后加`=0`，如 `virtual void func()=0`
- 对于虚函数，子类**可以（也可以不）**重新定义基类的虚函数，该行为称之为复写Override。
    - 子类若不实现，则调用基类的缺省虚函数
- 对于纯虚函数，子类**必须**提供纯虚函数的个性化实现。
    - 子类若不实现，则编译出错。基类也可以给出纯虚函数的实现，但无法通过 指向子类对象的基类类型指针 来调用该纯虚

实现了纯虚函数的子类，该纯虚函数在子类中即成了虚函数。

含有纯虚函数的类称为`抽象类`，不能生成对象。

https://zhuanlan.zhihu.com/p/37331092

虚函数

```cpp
// 简例
class A
{
public:
    virtual void foo()
    {
        cout<<"A::foo() is called"<<endl;
    }
};
class B:public A
{
public:
    void foo()
    {
        cout<<"B::foo() is called"<<endl;
    }
};
int main(void)
{
    A *a = new B();
    a->foo();   // 在这里，a虽然是指向A的指针，但是被调用的函数(foo)却是B的!
    return 0;
}
```

纯虚函数

```cpp
#include <iostream>
using namespace std;

//线
class Line{
public:
    Line(float len);
    virtual float area() = 0;
    virtual float volume() = 0;
protected:
    float m_len;
};
Line::Line(float len): m_len(len){ }

//矩形。只实现了area而没有volume，所以仍然是抽象类
class Rec: public Line{
public:
    Rec(float len, float width);
    float area();
protected:
    float m_width;
};
Rec::Rec(float len, float width): Line(len), m_width(width){ }
float Rec::area(){ return m_len * m_width; }

//长方体
class Cuboid: public Rec{
public:
    Cuboid(float len, float width, float height);
    float area();
    float volume();
protected:
    float m_height;
};
Cuboid::Cuboid(float len, float width, float height): Rec(len, width), m_height(height){ }
float Cuboid::area(){ return 2 * ( m_len*m_width + m_len*m_height + m_width*m_height); }
float Cuboid::volume(){ return m_len * m_width * m_height; }

//正方体
class Cube: public Cuboid{
public:
    Cube(float len);
    float area();
    float volume();
};
Cube::Cube(float len): Cuboid(len, len, len){ }
float Cube::area(){ return 6 * m_len * m_len; }
float Cube::volume(){ return m_len * m_len * m_len; }

int main(){
    Line *p = new Cuboid(10, 20, 30);
    cout<<"The area of Cuboid is "<<p->area()<<endl;
    cout<<"The volume of Cuboid is "<<p->volume()<<endl;
  
    p = new Cube(15);
    cout<<"The area of Cube is "<<p->area()<<endl;
    cout<<"The volume of Cube is "<<p->volume()<<endl;

    return 0;
}
/*
The area of Cuboid is 2200
The volume of Cuboid is 6000
The area of Cube is 1350
The volume of Cube is 3375
*/
```

## 15.4 抽象基类

## 15.5 访问控制与继承 | Access Control and Inheritance

## 15.6 继承中的类作用域

## 15.7 构造函数与拷贝控制

## 15.8 容器与继承

## 15.9 文本查询程序再探

# 16 模板与泛型编程 | Templates and Generic Programming

# 肆 高级主题 | Advanced Topics

# 17 标准库特殊设施 | Specialized Library Facilities

## 17.1 tuple 類型

## 17.2 BITSET 類型

## 17.3 regex 正則表達式

### 17.3.1 使用正則表達式庫

### 17.3.2 匹配與 regex 迭代器類型

### 17.3.3 使用子表達式

### 17.3.4 使用 `regex_replace`

string庫冇`replace_all()`樣嘅函數，所以，以str代str要用regex嘅此

```cpp
str2 = std::regex_replace(str1, std::regex(old_substr), new_substr);
// cut from a real world code (by me, maybe strange)
// to replace every char `ch` in `s` with empty string
// i.e. delete them
string newstr = std::regex_replace(s, std::regex(string() + ch), string());
```

## 17.4 隨機數

## 17.5 IO 庫再探

# 18 用于大型程序的工具 | Tools for Large Programs

## 18.1 異常處理

### 18.1.1 抛出异常

在C++中，您可以抛出任何数据类型作为异常，包括基本数据类型、对象、指针等。但通常，我们推荐抛出某种异常类型，这样可以更好地描述和分类错误。`std::exception` 是C++标准库提供的所有异常类的基类，你可以根据需要从它派生自己的异常类。

`throw std::runtime_error("Some message.");` 比较常见。在 `<stdexcept>` 包

```cpp
#include <stdexcept>

class Stack {
private:
    std::vector<int> data;

public:
// 移除并返回堆栈顶部的元素
    int pop() {
        if (isEmpty()) {
            throw std::runtime_error("Stack is empty. Cannot pop.");  // ！！！看这， runtime_error
        }
        int val = data.back();
        data.pop_back();
        return val;
    }
};

int main() {
    Stack s;

    // 测试代码
    try {
        // 这会抛出一个异常，因为堆栈现在是空的
        std::cout << s.pop() << std::endl;

    } catch (const std::exception& e) {
        // cerr 只输出错误信息，而throw才能让程序中断
        std::cerr << "Error: " << e.what() << std::endl;  // ！！！看这个，what()
    }

    return 0;
}

```

### 18.1.2 捕获异常

### 18.1.3 函数try语句块与构造函数

### 18.1.4 noexcept 异常说明

如 `void foo(int) noexcept;` 聲明佢唔會拋出異常。編譯器以之優化。如果拋出，則調用 `terminate`

### 18.1.5 异常类层次

## 18.2 命名空間

## 18.3 多重繼承與虛繼承

# 19 特殊工具与技术 | Specialized Tools and Techniques

## 19.1 控制内存分配

## 19.2 运行时类型识别 (RTTI)

**加倍小心。如有可能，使用虚函数，而非接管类型管理的重任。**

`运行时类型识别` (`Run-Time Type Identification`, `RTTI`) 功能由两个运算符实现，

- `typeid` 返回表达式的类型
- `dynamic_cast` 将基类的指针或引用安全地转换成派生类的。

当此二运算符用于某类型的指针或引用，且此类型有虚函数时，运算符将使用指针或引用绑定的对象的动态类型

特别适合想用基类对象的指针或引用执行某派生类的操作，且该操作不是虚函数。一般来说是定义成虚函数较好，虚函数会由编译器自动选择版本；若无法使用虚函数，则RTTI运算符使用。

蕴含更多风险：程序员必须知道目标类型并必须检查类型转换是否成功执行。

## 19.3 枚举类型

## 19.4 类成员指针

## 19.5 嵌套类

## 19.6 union：一种节省空间的类

## 19.7 局部类

## 19.8 固有的不可移植的特性 (因机器而异)

# 附 A 标准库 | The Library

## A.1 标准库名字和头文件 | Library Names and Headers

## A.2 算法概览 | A Brief Tour of the Algorithms

### A.2.1 查找对象的算法 zB `find*()`

`<algorithm>` 之 

- `find(beg, end, val)` 返回个迭代器，指向第一个等于 val 的元素；未找到则 end

### A.2.2 其他只读算法

### A.2.3 二分搜索算法 zB `*bound()`

`<algorithm>` 库的二分搜索算法。每个算法都可以在 beg, end, val 之后再加一个 comp 函数，否则使用元素类型的小于运算符（`<`）

- `lower_bound(beg, end, val)` 返回一个迭代器，表示第一个大于等于 val 的元素，不存在则返回 end 。**即第一个可插入位置**
- `upper_bound(beg, end, val)` 第一个大于 val 的元素，**即最后一个可插入位置**
- `equal_range(beg, end, val)` 返回一个 `pair`，其`first`成员是`lower_bound`之返回，`second`是`upper_`。**即等于val之范围，前闭后开**
- `binary_search(beg, end, val)` 返回是否包含，`bool`值

如 [LeetCode 300m](https://leetcode.com/problems/longest-increasing-subsequence/)，要求不可相等，即每次找到相等的都要在其位置替换之，故用 `lower_bound`

```cpp
#include <algorithm>
class Solution {
public:
    int lengthOfLIS(vector<int>& nums) {
        int n = nums.size();
        // last element of LIS of length i
        vector<int> d;
        for (int i = 0; i < n; i ++) {
            // use lower_bound, cuz:
            // lower_bound is the first equalled element
            // upper_bound is after the last equalled element
            int idx = lower_bound(d.begin(), d.end(), nums[i]) - d.begin();
            if (idx == d.size())
                d.push_back(nums[i]);
            else
                d[idx] = nums[i];
        }
        return d.size();
    }
};
```

而 [LeetCode 1964h](https://leetcode.com/problems/find-the-longest-valid-obstacle-course-at-each-position/) 可相等，故是替换相等区域之后的那个元素，用 `upper_bound`

```cpp
#include <algorithm>
class Solution {
public:
    vector<int> longestObstacleCourseAtEachPosition(vector<int>& obstacles) {
        int n = obstacles.size();
        // as in 300m,
        // d for last element of LIS of length i
        vector<int> ans(n, 1), d;
        for (int i = 0; i < n; i ++) {
            // use upper_bound instead of lower_bound
            // cuz elements in the course can equal
            int idx = upper_bound(d.begin(), d.end(), obstacles[i]) - d.begin();
            if (idx >= d.size())
                d.push_back(obstacles[i]);
            else
                d[idx] = obstacles[i];
            ans[i] = idx + 1;
        }
        return ans;
    }
};
```

### A.2.4 写容器元素的算法

### A.2.5 划分与排序算法

### A.2.6 通用重排操作

### A.2.7 排列算法

### A.2.8 有序序列的集合算法

### A.2.9 最小值和最大值

### A.2.10 数值算法

## A.3 随机数 | Random Numbers

# 书外笔记

## 堆 heap

可以用 `make_heap`，亦可以用 `priority_queue`

`<algorithm>`に

- `make_heap(begin, end)` `make_heap(begin, end, comp)` 序列から建堆
    - 不输入 comp 则返回大根堆（即comp=`less`/`operator<`）
    - 最大值元素 即 与其他每个元素比较时皆返回`false`
- `void pop_heap(begin, end, comp=less)` 弹出根（first），并把末元素（last）放根上执行建堆
    - ！！！不返回东西，取用请自行 `v[0]`
    - ！！！不帮删容器元素，只是放到最后，故 `pop_heap` 后请自行 `v.pop_back()`
- `push_heap(begin, end, comp=less)` 把最末元素插入堆
    - 故一般先 `push_back` 落去

```cpp
// 建堆
// 最小堆
std::make_heap(v.begin(), v.end(), std::greater<int>());
// 最大堆
std::make_heap(v.begin(), v.end(), std::less<int>());
```

## C++ 乄 C

区别很多。C++不是C的超集，而是互有少数不兼容之处。

简单讲，不好简单地说面向过程乄面向对象（C也支持面向对象，C++有多种范式）；C++支持新特性包括面向对象、泛型编程（&模板）、{函数, 操作符}重载、命名空间、输入输出流，（在内存管理方面） `new` `delete` 动态分配&智能指针、异常处理……

- [Incompatibilities Between ISO C and ISO C++](http://david.tribble.com/text/cdiffs.htm#C++-vs-C)
    - 记录了C有效而C++无效的一些东西；而不是C++新特性

### 类型安全 Type Safety


## C++ 预处理指令们 | preprocessing instructions

```
# preprocessing_instruction [arguments] newline
```

其中`preprocessing_instruction`是以下之一：define, undef, include, if, ifdef, ifndef, else, elif, endif, line, error, pragma；arguments是可选的参数，如#include后面的文件名

- Null，一个 `#` 后跟 newline ，不产生任何影响，类似于空语句；
- 条件编译，由 `#if`, `#ifdef`, `#ifndef`, `#else`, `#elif`, `#endif` 定义；
- 源文件包含，由 `#include` 定义；
- 宏替换，由 `#define`, `#undef`, `#`, `##` 定义；
- 重定义行号和文件名，由 `#line` 定义；
- 错误信息，由 `#error` 定义；
- 编译器预留指令，由 `#pragma` 定义。
    - 设定编译器的状态或者指示编译器完成一些动作
    - `#pragma pack (n)`，C编译器将按照n个字节对齐（alignment）
        - Structure padding and packing
        - https://blog.elleryq.idv.tw/2014/07/the-lost-art-of-c-structure-packing.html
    - `#pragma pack ()`，取消自定义字节对齐方式

# Werkzeugen

## `g++` 編譯器

```bash
sudo apt update
sudo apt upgrade
sudo apt install g++
g++ -v

# -E: 指示编译器只对输入文件进行预编译
g++ -E test.cpp -o test.i

# -S: 指示编译器在C++代码产生汇编语言文件后停止
g++ -S test.i -o test.s

# -c: 指示编译器仅把源代码编译为机器语言的目标代码
g++ -c test.s -o test.o

# -o: 指定可执行文件名，不使用-o参数时，Linux下默认为a.out
g++ test.o -o a.out

# 上面四步合在一起就是下面这个命令，在Linux下默认输出可执行文件a.out
g++ test.cpp

# 编译产生带调试信息的可执行文件
g++ -g test.cpp

# 优化：包括省略从未使用的变量、将常量表达式用结果值代替、循环展开等等，这些优化操作提高可执行文件的运行效率
# -O: 等价于-O1
# -O0: 不优化
# -O1: 默认优化
# -O2: 在-O1的基础上，再进行一些额外的调整，如指令调整等
# -O3: 在-O2的基础上，包括循环展开和一些与处理器特性相关的优化工作
g++ -O2 test.cpp

# /usr/include一般不需要指定，如果头文件不在/usr/include则需要-I参数指定
g++ -I ./HeadFile

# /lib,/uer/lib,/usr/local/lib中的库无需指定，直接使用-l参数就能链接
# 存放在其它目录的库则需要使用-L参数指定路径
# -l: 指定程序要链接的库, 后面紧接着库名(动态库：可以省略前缀lib，后缀.so；静态库：可以省略前缀lib，后缀.a)
# -L: 指定库文件所在目录
g++ -L ./LibFile -lreadline -ltinfo

# 指定使用c++11标准编译
g++ -std=c++11 test.cpp

# 编译时定义 TEST 宏
# 
g++ -DTEST test.cpp
```

## `gdb` 調試

```bash
sudo apt install gdb

gdb ./a.out
```

- 在 gdb 裏面
    - q ：（quit）退出
    - l ：（list）看十行
    - l `line_number` ：看以某爲中心的十行
    - b `line_number` ：（break）設置斷點
    - info b ：查看設置的斷點
    - r ：（run）執行到斷點停下
    - s ：（step）逐語句
    - n ：（next）逐過程
    - p `var_name` ：查看變量的內容

## `drogon` - Web Framework

https://github.com/drogonframework/drogon

https://github.com/drogonframework/drogon-docs

https://drogonframework.github.io/drogon-docs/#/

高性能，在 TechEmpower 基准里性能排名非常高，在其 fortune 指标里排第一 https://www.techempower.com/benchmarks/#section=data-r21&test=fortune

- [使用Wt/CppCMS/TreeFrog/Drogon/Crow等库/框架做web开发是怎样的体验？ - Zhihu](https://www.zhihu.com/question/364517370)
- [有哪些轻量级适合阅读的优秀 C++ 开源项目？ - Zhihu](https://www.zhihu.com/question/40131963/answer/2228833090)
- [C++团队用什么技术写后端？ - Zhihu](https://www.zhihu.com/question/345039462)
    - > 我知道的一般这几种选择：
    - > 1. C++写个nginx模块
    - > 2. Python web框架套个壳用Cython调用C++模块
    - > 3. Golang套个壳用cgo调用C++模块
    - > 4. C++起GRPC服务，Python/Golang/Java等随便什么语言做web端
    - > 5. FastCGI，随便找个成熟的实现
    - > 6. 找第三方的C++的网络库或者web框架
    - > 推荐2或者3，Python其实就挺好的了。别担心什么不可维护啊啥的，你要相信，以你们的水平，用什么语言都不可维护，Python至少删了重写不心疼。
- [C++可以做Web开发吗？ - Zhihu](https://www.zhihu.com/question/508173519)


## `Wt` - Web GUI library

https://github.com/emweb/wt

https://www.webtoolkit.eu/wt

## 另 `Cython` 以使 Python 可调用 C/C++

https://moonlet.gitbooks.io/cython-document-zh_cn/content/index.html

- [Cython 基本用法 - Zhihu](https://zhuanlan.zhihu.com/p/24311879)
