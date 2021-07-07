目录

- 环境、安装
- 基本
- numpy
- scipy
- pandas
- pytorch
- transformers
- 诸库杂记
- 代码规范

# 环境、安装

- pip （pip3）
  - `pip3 install -i https://pypi.tuna.tsinghua.edu.cn/simple transformers`
  - 若报错："ERROR: Could not install packages due to an EnvironmentError: [Errno 13] Permission denied: '/usr/local/bin/pip' Consider using the `--user` option or check the permissions."
    - 则加上 `--user`。示例：`pip3 install -i https://pypi.tuna.tsinghua.edu.cn/simple --user transformers`

```sh
export PATH=/Users/<you>/Library/Python/3.8/bin:$PATH

pip install -U -r requirements.txt # -U: to newest
```

# 基本：基本操作、基本数据类型、内置函数

- 多元赋值（か同时赋值）（multiple assignments, aka tuple unpacking, aka iterable unpacking）
- 列表 `list`
  - 列表用加号是合并：`tokens += [sep_token]`
  - 列表中某元素（在某范围）首次出现的位置を（不存则返回 ValueError）：`foo.index(x[, start[, end]])`
  - `.remove(elem)`：删除第一个出现的指定元素
  - `.pop(posi)`：根据索引删除元素，并返回此元素
  - `del foo[posi_a:posi_b]`：根据索引，可以是切片，删除元素
  - 转集合で简单去重：`newList = list(set(fooList))`
- 元组 `tuple`
  - 具名元组 `collections.namedtuple`

```py
'''
具名元组
'''
from collections import namedtuple

# 定义一个namedtuple类型User，并包含name，sex和age属性。
User = namedtuple('User', ['name', 'sex', 'age'])

# 创建一个User对象
user = User(name='Runoob', sex='male', age=12)

print( user.name )
```

- 字典 `dict`
  - 以键取值的时间复杂度为 O(1)，因为使用散列表
  - 转为二元组的列表：`foo.items()`; `for x, v in foo.items()`
    - 并排序：`foolissorted = sorted(foodic.items(), key=lambda d:d[1], reverse = True)`
    - `.keys()`
    - `.values()`
  - 戳用默认字典 `foodict = defaultdict(factory_function)` 可以生成有缺省值的字典，访问不存在的索引返回默认值，`default(int)` 返回`0`，list 而 `[]`，set 而`set()`，str 而`''`
- 字符串 `str`
  - `foo.replace('old str', 'neuer str'[, max_repl_times])`（不是原地修改，而是返回修改后的串）
- 集合 `set`
  - `= set()`, `= {ele_0, ele_1...}`
    - 创建一个空集合必须用 `set()` 而不是 `{ }`，因为 `{ }` 是用来创建一个空字典
  - `a.add(ele_nouveau)`
  - `a.update(ele_or_set_nouveau)`
  - `a.clear()` 清空
- 内置函数（built-in function）
  - `any(iterable)`：判断可迭代参数中是不是有 True 者，也就是不全是 `'', 0, False`

```py
'''
try/except 异常处理
'''
s1 = 'hello python'
try:
    int(s1)
except IndexError as e:
    print(e)
except KeyError as e:
    print(e)
except ValueError as e:
    print(e)
```

# 函数与类

- class
  - 特性（attribute）
    - 属性（property）
      - [python 之中特性（attribute）与属性（property）有什么区别？](https://www.zhihu.com/question/40015172)
      - 与 attr 相比，属性（property）相当于「函数式特性」，定义是函数式的，`@property`以修饰，`@foo.setter` 来定义设器取器操作，而使用起来与 attr 一致
      - 半径做 attr、周长作 prop 这个例子比较好
  - `@classmethod` 修饰符：对应的函数不需要实例化，不需要 self 参数，但第一个参数需要是表示自身类的 cls 参数，可以来调用类的属性，类的方法，实例化对象等。
  - 抽象类（abstract class） （`import abc`） `@abc.abstractmethod`, `@abc.abstractproperty`，`class foo(metaclass=abc.ABCMeta):`：抽象类的一些方法和特性由这两个装饰器修饰，抽象类中这些方法和修饰就 pass 掉，子类必须实现这些抽象的方法和类。
  - 实例方法（instance method）即一般的方法，传实例的 self 给函数，以便方法引用实例
  - 静态方法（static method）`@staticmethod`：可以通过类来调用，也可以通过对象来调用
  - 类方法（class method）`@classmethod`：需要把类本身传给函数
  - `mixin` （Mix-in）即利用多重继承的支持，将比较通用的功能写成父类，在创建新类时直接继承这些功能

```py
"""
类定义
"""
class Foo(someParent, secondParent): # 需要继承时传爹娘
    def __init__(self, bar):
        # 继承属性
        # super().__init__()  #也可以用 someParent.__init__(self)  这里面的self一定要加上
        self.bar = bar

    def fooBar(self):
        pass

"""
静态方法
"""
class C(object):
    @staticmethod
    def f():
        print('runoob')

C.f();          # 静态方法无需实例化
cobj = C()
cobj.f()        # 也可以实例化后调用

"""
相关方法
"""
hasattr(obj, name)
getattr(obj, name)
setattr(obj, name, value)
```

- 函数
  - 装饰器（decorator） `@`：本质上是返回函数的函数。
    - 不带参数：其中定义 wrapper 函数。相当于执行 `foo = some_deco(foo)`，把与函数同名的变量指向一个新的函数
    - 带参数：其中定义的 decorator 里面定义 wrapper。相当于执行 `foo = some_deco(some_param)(foo)`
    - > 装饰器本质上是一个 Python 函数，它可以让其他函数在不需要做任何代码变动的前提下增加额外功能，装饰器的返回值也是一个函数对象。它经常用于有切面需求的场景，比如：插入日志、性能测试、事务处理、缓存、权限校验等场景。装饰器是解决这类问题的绝佳设计，有了装饰器，我们就可以抽离出大量与函数功能本身无关的雷同代码并继续重用。

```py
"""
函数之装饰器
"""
import functools

# 不带参数
def log(func):
    @functools.wraps(func)
    def wrapper(*args, **kw):
        print('call %s():' % func.__name__)
        return func(*args, **kw)
    return wrapper

# 带参数
def log(text):
    def decorator(func):
        @functools.wraps(func)
        def wrapper(*args, **kw):
            print('%s %s():' % (text, func.__name__))
            return func(*args, **kw)
        return wrapper
    return decorator

# 【使用示例】

# 不带参数
@log
def foo():
    pass

# 带参数
@log('blabla text')
def foo():
    pass
```

# csv

```py
import csv
import codecs
with codecs.open('foobar.csv', 'r', 'utf8') as csvfile:
    reader = csv.DictReader(csvfile) # read like dict in py
    for row in reader: # iter
        if row['subject']=='price': # like dict, oder?
            pass
```

# numpy

- 广播机制
- 坑：np.array 的 shape ( ,)与( ,1)的区别
  - （https://blog.csdn.net/weixin_39449570/article/details/78645618）
    - np.array([1,2]) 的 shape 值(2,)，意思是一维数组，数组中有 2 个元素
    - np.array([[1],[2]]) 的 shape 值是(2,1)，意思是一个二维数组，每行有 1 个元素
    - np.array([[1,2]]) 的 shape 值是（1,2），意思是一个二维数组，每行有 2 个元素
  - (N,) 与 (N,1) 相减得到 (N,N)

# scipy

# pandas

# pytorch

- 小教程
  - 常用模块和线归、对归实例：https://www.jianshu.com/p/420d3c6785a5
  - 线归、对归其他例子
    - https://blog.csdn.net/zl1085372438/article/details/84332107
    - https://blog.csdn.net/m0_37306360/article/details/79307818
  - 没大看，属于一个付费课：https://github.com/dragen1860/Deep-Learning-with-PyTorch-Tutorials
- Tensor
  - 的常用操作，如 numpy 互转，投射浮点数：https://www.jianshu.com/p/314b6cfce1c3
  - 零维取值用.item()：https://blog.csdn.net/qq_40710634/article/details/86548941
  - 维度变换 `a.reshape(4, 28, 28)`：https://blog.csdn.net/weicao1990/article/details/93618136
  - pytorch 中一些常用方法的总结：https://blog.csdn.net/ANNILingMo/article/details/78006227
    - torch.ge(input,other,out=none) 、 torch.ge(torch.Tensor(a),torch.Tensor(b)) 比较内容：
      - ge: input>=other 也就是 $a>=b$, 返回 true，否则返回 false
      - gt: input>other 也就是 $a>b$, 返回 true，否则返回 false
      - lt: input< other 也就是 $a < b$, 返回 true，否则返回 false
- Variable
  - 小讲解：https://blog.csdn.net/pbymw8iwm/article/details/82894629
- 查看服务器的 tensorboard：
  - 登录服务器：`ssh -L 16006:127.0.0.1:6006 xxx@IP`
  - 启动 Tensorboard：`tensorboard --logdir=/path/to/saved_model`
  - 本地浏览器打开网址：http://127.0.0.1:16006/
  - 注：是按 /runs/ 里的东西区分的记录，而评价值有来自 /output/ 里的。

# huggingface/transformers

# pytest

```sh
pytest -k 'test_something'
```

# 诸库杂记

## collections：许多有用的集合类

- Counter：计数器，实乃字典之子类

```py
from collections import Counter
bar = dict(Counter(foo))
duplicateds = [k for k,v in bar.items() if v > 1] # 包含 bar 中重复出现了的元素
```

## sys：与 Python 解释器紧密相关的变量和函数

- argv：命令行参数，包括脚本名
- exit([arg])：退出当前程序，可通过可选参数指定返回值或错误消息。当参数非 0 时，会引发一个 SystemExit 异常，从而可以在主程序中捕获该异常。
- path：返回模块的搜索路径，初始化时使用 PYTHONPATH 环境变量的值
- platform：获取当前执行环境的平台，如 win32 表示是 Windows 系统，linux2 表示是 linux 平台
- version：解释器版本
- getrefcount(foo)：一个值的引用次数计数
- getrecursionlimit：python 默认支持的递归数量
- modules： 一个字典，将模块名映射到加载的模块

## os：操作系统交互

```py
import os

if not os.path.exists(file_name):
    os.mknod(file_name)

os.environ['CUDA_DEVICE_ORDER'] = 'PCI_BUS_ID' # CUDA 排序方式
os.environ["CUDA_VISIBLE_DEVICES"]="0, 1, 2, 3" # 规定程序可见的 CUDA
```

## doctest 文档测试

文档测试 `doctest`，写了样例，main 中导入 doctest 并写句，则运行此文件会测试样例，有错误时报错。

```py
def abs(n):
    '''
    Function to get absolute value of number.

    Example:

    >>> abs(1)
    1
    >>> abs(-1)
    1
    >>> abs(0)
    0
    '''
    return n if n >= 0 else (-n)


if __name__=='__main__':
    import doctest
    doctest.testmod()
```

## time

```py
import time
time_start = time.time()

time_end = time.time()

print('hier kostet die Programme ' + str(time_end - time_start) + ' seconds\n')

time.strftime("%Y-%m-%d %H:%M:%S", time.localtime())
```

## re 正则表达式

```py
nre_str = re.sub('reg_ex', 'womit_subben_mochten', 'orig_str')
template = re.sub(r'\u3000|\s*|\t|\r|\n', '', template) # いろんな空白义符号を去

splits = re.split('(。|\.|！|\!|？|\?)',template)
```

# 代码规范

PEP8
