CLC: TP312JA

Dewey 005.133

Java 是衆司主流語，故 Java 體系開發常用中間件與相關原理皆記於此。

參考資料

- [Snailclimb/JavaGuide](https://github.com/Snailclimb/JavaGuide)
- [itwanger/toBeBetterJavaer](https://github.com/itwanger/toBeBetterJavaer)

# § 数据结构 et Collection

Java 所謂集合即容器，在 `Collection`（下有 `List` `Set` `Queue` 等）et `Map` （存键值对而非单独元素也）二接口。

- Java 数据类型
    - 基本数据类型（8种）：是预定义的且直接存储在栈内存
        - 整数类型：
            - `byte`：8位有符号整数，取值范围从 -128 到 127。
            - `short`：16位有符号整数，取值范围从 -32,768 到 32,767（-2^15 到 2^15-1）。
            - `int`：32位有符号整数，取值范围从 -2^31 到 2^31-1。（-2,147,483,648 到 2,147,483,647）
                - `Integer.MAX_VALUE` `Integer.MIN_VALUE`
                - `IntegerCache`：是Java用来缓存整数的机制。本质是一个静态内部类，通过一个静态数组 `static final Integer cache[];` 储存缓存的 Integer 对象。
                    - JVM 启动时，此数组被初始化并填充指定范围的 Integer。默认 -128 到 127，可以 JVM 参数 `-XX:AutoBoxCacheMax=<size>` 来调整最大值
                    - 避免重复创建对象，减少内存分配和垃圾回收负担
            - `long`：64位有符号整数，取值范围从 -2^63 到 2^63-1。（-9,223,372,036,854,775,808 到 9,223,372,036,854,775,807）
                - 通过在数值后面添加 L 或 l 后缀来声明：`long longNum = 100L;`
                - Long.MAX_VALUE、Long.MIN_VALUE
        - 浮点类型：
            - `float`：32位单精度浮点数。
                - 通过在数值后面添加 F 或 f 后缀来声明：`float floatNum = 100.0F;`
                - Float.MAX_VALUE Float.MIN_VALUE
            - `double`：64位双精度浮点数。
                - 可以在数值后面添加 D 或 d 后缀（可选）：`double doubleNum = 100.0;` `double doubleNum = 100.0D;`
                - Double.MAX_VALUE = 1.7976931348623157E308
                - Double.MIN_VALUE = 4.9E-324
        - 字符类型：
            - `char`：16位 Unicode 字符，取值范围从 '\u0000' (0) 到 '\uffff' (65,535)。
        - 布尔类型：
            - `boolean`：（通常的JVM实现使其占用1字节（8位））只有两个值：true 和 false。
    - 引用数据类型：包括类、接口和数组，它们的值存储在堆内存中，而引用则存储在栈内存中。默认值皆 `null`
        - 类（Class）
        - 接口（Interface）
        - 数组（Array）：用于存储同一类型的多个值。数组在创建时需要指定长度，并且长度不可改变。
    - 字面量（literal）：是源代码中直接表示固定值（常量值）的符号。除了基本（整数、浮点、字符、布尔），仲有**字符串**
        - 字符串特殊点
            - 字面量池：Java中的字符串字面量被存储在一个称为“字符串常量池”（String Constant Pool）的特殊内存区域。当你创建一个字符串字面量时，JVM会首先检查这个池中是否已经存在相同的字符串。如果存在，它会返回这个字符串的引用，而不会创建新的对象。这种机制节省了内存，并提高了性能。
            - 不可变：使得字符串字面量可以安全地被多个线程共享，减少了同步的需要
    - 自动类型转换（隐式转换）和强制类型转换（显式转换）
    - `自动装箱（Autoboxing）`和`拆箱（Unboxing）`是Java语言提供的一种便捷机制，用于在基本数据类型（如 int、char）和它们对应的包装类（如 Integer、Character）之间自动进行转换。
        - `XXXStream.boxed()`例：`Arrays.stream(myArr).boxed().collect(Collectors.toSet());`
- Java有嘅数据结构
    - 一、集合框架（Java Collections Framework）
    - 二、数组（Arrays）
    - 三、特殊用途的数据结构
    - 四、并发数据结构（java.util.concurrent 包）
    - 五、树和图（第三方库支持更多）
- 集合框架的概览：
    - 如 List、Set、Queue 和 Deque，都实现 Collection 接口（而 Collections 是其工具类）
    - 常用方法
        - size()
            - Collection 们与 Map 都叫 .size()，String 叫 .length()，Array 叫 .length
        - isEmpty()
        - contains(o)
        - containsAll(Collection<?> c)
        - iterator()
        - toArray()
        - toArray(T[] a):数组的运行时类型是指定数组的运行时类型
        - 可选方法：add(E e) remove(Object o) addAll(Collection<? extends E> c) removeAll(Collection<?> c) retainAll(Collection<?> c) clear()
- List
    - 常用方法
        - add
        - get
        - set 替换
        - remove
        - indexOf
        - lastIndexOf
        - subList
    - `ArrayList`与`LinkedList`的区别
- Set
    - 常用方法
        - add
        - remove
        - contains
        - isEmpty
        - size
        - clear
        - iterator
    - `HashSet`与`LinkedHashSet`的区别
    - `TreeSet` 红黑树！有序！
- Queue：实现此接口的有常见的 LinkedList（最常用，双端链表），PriorityQueue（堆），还有 ArrayDeque ConcurrentLinkedQueue LinkedBlockingQueue ArrayBlockingQueue PriorityBlockingQueue
    - 常用方法
        - add
        - offer
        - poll
        - remove
        - element
        - peek
        - isEmpty
        - size
    - 集合框架里还有双端队列 Deque、栈 Stack（继承自 Vector，在现代Java不推荐，推荐代以Deque）
- Deque：双端队列，亦为推荐嘅桟嘅类。常见实现：LinkedList 和 ArrayDeque
    - 常用方法
        - 插
            - addFirst(e) （或 `push(e)`），addLast(e)
                - 所以说，**Deque 之 push pop 在队首！**
            - offerFirst(e) offerLast(e)：返true，若满返false
        - 删
            - removeFirst() （或 `pop()`），removeLast()：空则异常
            - pollFirst()，pollLast()：空则false
            - removeFirstOccurrence(o)
            - removeLastOccurrence(o)
        - 睇
            - getFirst() getLast()：空则异常
            - peekFirst() peekLast()：空则false
- `hashCode()` 散列函数
    - 定义：**整数**。`public native int hashCode();`。两对象，equals()则同hashCode()，非equals()则非hashCode()
        - 你覆盖equals()则通常需覆盖hashCode()。点写？
            - Objects.hash() 简单高效，例如使 `return Objects.hash(name, age);`
            - 使用质数：将多个属性的哈希码与质数结合起来，可以减少哈希冲突。
                - 实践：初始化17，然后每次乘31并加上成员hashCode。例如 `res=17; res = 31*res + name.hashCode(); res = 31*res + age;`
    - 定义喺 java.lang.Object 故边个对象都有
- Map
    - 常用方法
        - .get
            - .getOrDefault(K, default) get，冇K则返默认值
        - .put
        - `.computeIfAbsent(K, func)`：有K则返回V，冇则执行func计算其值并添加入map，例如以之赋值。取代冗余嘅 put + getOrDefault 组合
            - 方法签名 `V computeIfAbsent(K key, Function<? super K, ? extends V> mappingFunction)`
            - 优势：
                - getOrDefault 即便有K仍然会创对象，随后销毁；computeIfAbsent 少此浪费
                - 对并发类，computeIfAbsent保证原子性，线程安全，而put + getOrDefault 组合分步，可能多个线程同时睇到空，同时插入初值
            - 例 `idxMap.computeIfAbsent(num, x -> new ArrayList<>()).add(i);`
        - .putIfAbsent(K, V) 值value
        - .computeIfPresent(K, func) 如果指定的键存，则使用func计算新值。如果计算结果为 null，则删K
        - .compute(K, func) 使用func计算指定键的值（无论键是否存在），并存储在 Map 中。如果计算结果为 null，则从 Map 中删除该键。
        - .merge(key, value, (oldValue, newValue) -> oldValue + newValue) 若K尚不存，则将其与指定值相关联；有，则使用给定的双参数函数将当前值与指定值合并
        - .replace(key, newValue) 用于替换 Map 中指定键的值，只有在键存在时才进行替换操作
        - .replaceAll((k, v) -> v + 1) 使用给定的函数替换 Map 中的所有条目。
        - .forEach((k, v) -> System.out.println(k + "=" + v)) 对 Map 中的每个条目执行给定的操作
    - `HashMap`的工作原理
        - 基本结构：
            - **数组**：HashMap 的底层是一个数组，数组中的每个元素被称为一个桶（bucket）。
            - **链表**：每个桶中存放的可能是一个链表，用于处理哈希冲突。
            - **红黑树**：在 Java 8 及以后，为了提高性能，当链表长度超过一定阈值时（默认是 8），链表会转换成红黑树，以提高查找效率。
    - HashMap的扩容原理
    - `LinkedHashMap`：类似HashMap但维护键值对的插入顺序（以 双向链表）
        - `entrySet()`、`keySet()`、`values()` 三种方式遍历，与 HashMap 同。虽然叫 Set，但对于 LinkedHashMap 而言是按链表顺序，实现类为 LinkedEntrySet
        - 亦可以**访问顺序**：设置`accessOrder`，即第三个参数，为`true`。是以类似 LRU 缓存
        - 多了指向插入的前后节点的两个指针 `before` `after`
        - 原HashMap之next指针指向的是桶中的下一个节点，而不是下一个桶，故不用来遍历整表
            - 原HashMap之遍历是一次检查每个桶，有元素则进入。通过 `entrySet()` 或 `keySet()` 或 `values()`
    - `TreeMap`：红黑树！有序！
    - HashMap与Hashtable的区别
    - 为什么HashMap不是线程安全的
    - `ConcurrentHashMap`：并发控制
        - 是 java.util.concurrent 包（JUC）下的类
        - 特点
            - 线程安全：支持高并发下的安全操作
            - 高性能：相比于传统的 Hashtable 和 Collections.synchronizedMap，有更高的并发性能。
            - 无锁读取：大多数读取操作不需要加锁，从而提高了读取操作的并发性能。
        - 并发锁的内部实现
            - Java 7：分段锁
                - 每个 Segment 使用一个独立的 ReentrantLock 进行同步。只有访问不同分段的时候才能并发。
                - 因为当时没有轻量锁的条件，每个节点都加锁太重了，于是折衷
            - Java 8：节点锁，用 CAS 和 Synchronized
                - 采用 CAS 操作（Compare-And-Swap）和 synchronized 来控制并发，进一步提升性能。
                - 在并发扩容时，通过 synchronized 锁定特定桶，防止并发冲突。
        - 数据结构
            - 每个桶，在有红黑树之余还额外维护一个双向链表（就是每个节点既保存父 左子 右子，也保存前驱后继）。
                - 代码：TreeNode类，继承了Node类（普通链表桶类，自带next，故TreeNode只需多加 prev, parent, left, right）
                - 多维护一个双向链表的作用：
                    - 1️⃣可以在正在写的桶上进行读操作。如果只有红黑树，此读操作会被旋转干扰，无法进行；而有了双向链表，则读操作至少可以O(n)地遍历，至少不用被阻塞
                    - 2️⃣扩容时复制更快，减少锁的时间。因为链表可以单向遍历完，无需树的压栈/队列型遍历，故更快。
        - 主要方法和并发处理
            - put()：使用 CAS 来插入新值，如果桶已经被占用则使用 synchronized 锁定相应桶进行插入。
            - get()：无锁操作，只需一次 volatile 读取即可。
                - （因为volatile保证「可见性」，读的是主内存中的最新值）（当然其他操作也用了volatile。。。）
            - size()：采用分段计数的方式，减少全局锁的使用，提高效率。
                - 是说，只有插入和删除操作会带来size变化，而相关线程，先尝试更新总计数 baseCount，若发现此计数被占用（发生冲突），就每个线程从map的CounterCell[]数组里申请一个CounterCell计数器，它里面维护了一个long值，被此线程用来记录本地size变化；如果线程太多，map本体的CounterCell[]不够大了，就扩大之；每个线程维护的是自己操作带来的size变化值，操作完成后通过sumCount方法把ounterCell[]里的每个计数器各自加到总的 baseCount 身上。
            - 扩容操作：多个线程一起做数据迁移。几个部分：
                - 扩容触发条件：当负载因子超过阈值时触发扩容。
                - 初始化扩容：设置扩容标志位（sizeCtl），计算扩容戳记，创建新表。
                    - `扩容戳记（resizeStamp）`，用来确保所有线程进行的是同一个扩容，也不会重复进行（因为扩容后将会是新的戳记）。是基于当前容量和一个固定位移值计算得到，所以同一个初始容量计算出来同样的戳记。
                    - `扩容标志位（sizeCtl）`
                        - 扩容开始：生成扩容戳记并写入 sizeCtl，表示扩容操作的开始。
                        - 参与扩容：每个线程在参与扩容时（在完成这段迁移后），会减少 sizeCtl 的值，表示自己参与了扩容任务。
                        - 完成扩容：当所有任务完成后，最后一个完成扩容的线程会更新 sizeCtl，表示扩容完成。
                - 并发迁移：多个线程并发地迁移元素，通过 transferIndex 跟踪迁移进度，使用 synchronized 块确保桶内操作的线程安全。
                    - 开始扩容时会先计算好步长`stride`，也就是每个线程每次搬运多少数据；然后创建新数组；然后后续进程领取任务
                    - 领任务靠`transferIndex`，它初始等于老表长`n`（桶数），每个线程迁移时用CAS来把`transferIndex`减少一个`stride`的值，也就是最后stride个桶是它的任务；
                    - 任务完成时用CAS减少`sizeCtl`的值，判断自己是不是最后一个退出的（if sizeCtl 减少到扩容戳记左移后的值），最后一个退出的线程会进行大检查，一个索引一个索引地看看有没有索引被遗留，最后结束
                - 更新引用：迁移完成后，更新表的引用，将旧表替换为新表。
        - 与老类比较：`Hashtable` `Collections.synchronizedMap`
            - `Hashtable`：早期，适用于简单的线程安全需求，但性能和灵活性较差，现代应用中较少使用。
            - `Collections.synchronizedMap`：提供了一种将非线程安全的 `Map` 转换为线程安全的灵活方法，但性能仍不及 `ConcurrentHashMap`
            - 实现方式：
                - Hashtable：内置同步，所有方法都使用了 synchronized 关键字同步
                - Collections.synchronizedMap：通过装饰器模式，将非线程安全的 Map 包装为线程安全的。
                - ConcurrentHashMap：通过分段锁和 CAS 操作实现高效的并发访问。
            - 性能：
                - Hashtable：由于所有方法都是同步的，在高并发环境下性能较差。
                - Collections.synchronizedMap：好于Hashtable，因为只有需要时才进行同步，但仍有一定的开销。
                - ConcurrentHashMap：在高并发环境下性能最佳，非阻塞读取和细粒度锁定提供了高吞吐量。
            - 灵活性：
                - Hashtable：固定的实现，无法灵活选择底层 Map 实现。
                - Collections.synchronizedMap：可以将任何 Map 实现转换为线程安全的。
                - ConcurrentHashMap：专为高并发设计，具有较高的灵活性和扩展性。
            - 迭代：
                - Hashtable：迭代时不需要额外的同步。
                - Collections.synchronizedMap：迭代时需要手动同步，以确保线程安全。
                - ConcurrentHashMap：迭代过程中可以进行并发修改，但结果可能不反映所有并发修改。
- String 字符串
    - String 常用方法
        - .substring(int beginIndex, int endIndex) 前闭后开（同Python）
        - .startsWith(String prefix, int toffset) 检查是否从toffset开始嘅子串系以 prefix 为前缀嘅
    - `StringBuilder`
        - 示例：
            - `StringBuilder stringBuilder = new StringBuilder("Hello");`
            - `stringBuilder.append(" World");` // Hello World
            - `stringBuilder.insert(5, ",");` // Hello, World
            - `stringBuilder.replace(5, 6, "!");` // Hello! World
            - `stringBuilder.delete(5, 6);` // Hello World
            - `stringBuilder.reverse();` // dlroW olleH
            - `String finalString = stringBuilder.toString();`
            - .setLength(0) 以清空。冇直接清空方法
    - `StringBuffer`：线程安全版嘅StringBuilder，用法几乎相同
        - 其方法多被`synchronized`修饰。饰方法，对象锁也，他线不可入此对象。
    - `StringJoiner`：可以指定分隔符、前缀后缀
        - 示例
            - `StringJoiner sj = new StringJoiner(", ", "[", "]");`
            - `sj.add("apple");` `sj.add("banana");` `sj.add("cherry");`
            - `System.out.println(sj.toString());  // 输出: [apple, banana, cherry]`
- 并发集合：
    - 并发集合（如ConcurrentHashMap）是线程安全的，可以在多线程环境中使用，无需额外的同步。
- 算法和排序：
    - `Collections`类提供了多种静态方法来操作集合，如排序（sort()）、查找（max()和min()）和反转（reverse()）、shuffle、replaceAll、rotate
- 泛型：把类型作为参数
    - 通配符：`? extends T` 和 `? super T`，以及通配符`?`本身
    - 界限的类型参数：上界限（如`<T extends SomeClass>`）或下界限（如`<T super SomeInterface>`）
    - 泛型擦除：运行时，泛型类型参数被擦除。泛型只存在于编译时。
        - 泛型擦除的设计是为了保持与Java早期版本的兼容性，同时提供编译时的类型安全。
- 数据结构
    - 红黑树
        - 是一种自平衡二叉搜索树（所以别忘了首先有左小右大），靠以下5个条件保持平衡
        - 条件（5个）（**左根右，根叶黑，不红红，黑路同**）
            - **每个节点要么红🟥，要么黑⬛️**
            - **根节点は黑⬛️**
            - **叶节点（NIL）は黑⬛️**
                - NIL是为便于计算而虚拟的节点，使每个节点都有两个子节点，若节点实际只有1个子节点就补1个NIL，实际0子节点则补2个NIL
            - **红🟥节点之子节点必须为黑⬛️**（即不可连红🟥🟥）
            - **从任意节点到其每个叶子的路径都有相同数量的黑⬛️节点**
        - 五条件如何维平：叶子最短高度为全黑路径 `bh`（black height），最长为黑-红交替路径 `2 * bh`，故差距维持在此2倍内。`h_min = log(n + 1)` `h_max <= 2 * log(n + 1)`。即高度维持在 $O(log n)$ 范围内。
        - 乄AVL树
            - 对比：AVL树限制高度差为 0 或 1。更严格，使得平衡算法更繁琐，旋转操作次数更多也。
            - 由于旋转次数更少，修改操作更高效，故实际应用喜欢红黑树
            - 插入操作：红黑树可能需要0次旋转，1左或右旋转，或者2次旋转分别1左1右或1右1左。而AVL最坏情况需要 log(n) 次旋转（多个节点失衡，沿着插入/删除路径多次旋转）。
            - 删除操作：红黑树可能需要0〜3次旋转。而AVL最坏情况需要 log(n) 次旋转。
        - 平衡算法：重新着色、旋转
            - （正经面试遇到手写红黑树的话，可以直接拒掉，然后继续回家随便看一遍这套算法。。。）
            - 插入：新插入节点为红色（因为插黑色必违反「黑路同」，更棘手）。若此插入违反规则，则如下更改：
                - 插入的是根节点：直接变黑
                - 插入节点的叔叔是红色：父、叔、爷都变色，爷变成插入节点（继续判定）
                - 插入节点的叔叔是黑色：（LL（右旋）、RR（左旋）、LR（左旋左孩子然后右旋）、RL（右旋右孩子然后左旋））旋转，然后变色（把旋转点和旋转中心）
                - 「蓝不过海呀」大佬动画讲解 https://www.bilibili.com/video/BV1Xm421x7Lg
            - 删除
                - 和二叉搜索树一样，看要删除的节点的子：
                    - 若有两个子节点：则用直接前驱或后继代替之，转化为0/1个子节点
                    - 若只有左子树/右子树：直接代替。（按红黑树性质可知，只可能是父黑子红。）
                        - 然则，删掉父，用子代替父，然后子由红变黑即可
                    - 若没有孩子：直接删除之
                        - 若其为红：直接删除之
                        - 若其为黑： （删除后把它视为双黑节点）
                            - 若兄弟为黑
                                - 若兄弟至少有一个红孩子：（LL, RR, LR, RL）で变色（LL, RR 是侄变兄色，兄变父色，父变黑色；LR，RL是侄变父色，父变黑色 ）+旋转，然后双黑直接恢复成单黑
                                - 若兄弟孩子都黑：兄弟变红，双黑上移（即把问题转移到父节点；或者红色/根节点n变成双黑就直接作为单黑 ）
                            - 若兄弟为红：兄父变色，（父）朝双黑旋转（然后双黑仍在原位继续调整）
                - 「蓝不过海呀」大佬动画讲解 https://www.bilibili.com/video/BV16m421u7Tb
            - 增删查改的时间复杂度都是 log(n) 因为都要先找到。至于为什么说红黑树插入最多旋转2次，删除最多旋转3次，我先不找推导了。。。（好像是旋转不会继续向上传递）（但是着色可以是对数级别的）
    - B+树：见数据库章节
    - **跳表（Skip List）**
        - ：亦log(n)查找。相当于在链表上添加了数层（建立时生成，有随机性，期望log(n)）索引，每个元素插入时随机决定其要参与嘅层数（上层索引嘅元素一定出现在下层），例如呢层有个元素叫42，噉你知大于42之数要去下层往此节点之后继此寻找，随机嚟睇有二分噉期望
        - 插入元素的层数确定：
            - 在插入一个新元素时，跳表会随机决定该元素在跳表中的层数。这个过程通常使用几何分布来实现。
                - 几何分布：从第0层开始，每一层都有一个固定的概率 \( p \)（通常为0.5）决定该元素是否要在更高一层出现。
                - 期望层数：在 \( p = 0.5 \) 的情况下，每个元素的期望层数为 \( \log_2(n) \)，其中 \( n \) 是跳表中的元素数量。
        - 应用：如Redis之有序集合（Sorted Set） `zset`；其他如 Cassandra 之 内存表（memtable）
- 算法
    - `Arrays.sort()`
        - 对基本数据类型，使用`双枢轴快速排序（Dual-Pivot QuickSort）`（by Vladimir Yaroslavskiy）
            - 双枢轴就是取两个 pivot，把数组排序成为小于 p1，介于二者，大于p2这三部分
            - 源码 https://hg.openjdk.org/jdk8/jdk8/jdk/file/tip/src/share/classes/java/util/DualPivotQuicksort.java
            - 第 282 行和 319 行左右的注释说明，取的两个枢轴是对 5 个值（中，以及中+seventh，中+seventh+seventh，中-seventh，中-seventh-seventh）排序后的第2第4个，也就是近似达到三分位的效果。（也就是近似 1.5/7 2.5/7 1/2 4.5/7 5.5/7 这5个位置比的，程序里叫 e1e2e3e4e5，比出来近似 2.5/7 4.5/7 两个位置，根本就规避了左右两端两个值。。。）
            - 当降级到单pivot时，取五者排序之中，即e3，即近似1/2者
        - 对对象数组，使用 `Timsort`，是一种混合排序算法，结合了归并排序和插入排序的优点。
            - 步骤
                - 寻找runs：扫描数组，寻找其中连续的有序子数组（run），若为降序则先转增
                - 扩展和合并runs（插入排序）：若发现的run长度小于某个阈值（常为32），则用插入排序扩展之使达到阈值
                - 归并runs（归并排序）：归并排序算法逐步合并这些runs，直到整个数组排序完毕
            - 利用插入排序在处理小规模和部分有序数据时的高效性，以及归并排序在处理大规模数据时的稳定性和高效性
- 参考资料
    -  [Java 集合常见知识点&面试题总结(上)](https://github.com/Snailclimb/JavaGuide/blob/main/docs/java/collection/java-collection-questions-01.md)
    - [Java 集合常见知识点&面试题总结(下)](https://github.com/Snailclimb/JavaGuide/blob/main/docs/java/collection/java-collection-questions-02.md)

```java
// List
// 创建列表
Arrays.asList("SIGN_OFF", "SIGN_ON")
// 声明
List<String> list;
// stream
if (list.stream().noneMatch(i -> i.getKey().equals(someElse))) {
        throw new ResponseStatusException(
            HttpStatus.BAD_REQUEST, "invalid someElse: " + someElse);
}
List<AForPublic> publicList = entityList.stream().map(
            x -> AConverter.INSTANCE.toAForPublic(
                    x,
                    aTypeService.get(x.getTypeKey()).getName(),
                    BConverter.INSTANCE.toBForPublic(bService.get(x.getBId()))
            )
    ).collect(Collectors.toList());
ates.sort(Comparator.comparing(AuditTrailEntity::getTimestamp, Comparator.reverseOrder()));

// String
// .substring()
// It throws IndexOutOfBoundsException If the beginIndex is less than zero OR beginIndex > endIndex OR endIndex is greater than the length of String.
"strawberries".substring(2, 5); // == "raw" ，跟python那样前闭后开
"strawberries".substring(6, 5); // 抛出异常
// String.equals() 用于比较内容相等，而 `==` 比较地址是否相等

// Boolean
// Boolean.parseBoolean("True") 将字符串参数解析为布尔值。 boolean返回的代表值为true 当字符串等于"true"，忽略大小写
Boolean.parseBoolean("True") // 返回true 。
Boolean.parseBoolean("yes") //返回false 。

// UUID
import java.util.Arrays;
Arrays.asList(UUID.fromString("0c312388-5d09-4f44-b670-5461605f0b1e")); // 个只含个UUID嘅列表

// Map<fromlichType, zulichType>

//
public interface xxx extends xxx2 {
    ;
}
```

# § 他基 id-al basik konkept

- 变量
    - Java中的非基本数据类型的变量，都类似于C++的引用，是只指向对象的handler，而不是对象本身，亦不是指针。但这个引用不可变，即不可再指向别的对象。
        - **Java使用值传递（pass by value）还是引用传递**：使用**值传递**，但是由于Java的对象的变量不是对象本身而是一个“引用”，这里的“值”对于对象而言是引用的拷贝，但这个拷贝与原始引用都指向同一个对象。方法可以改变对象的状态，但不能改变参数副本的引用指向（使其指向另一个对象）。
            - 这样可以确保Java的安全性和可预测性，同时避免了直接的内存地址操作。
            - 就是说C++的「引用传递」可以让一个函数的参数比如 `foo (MyObj& ref)` 是个引用你可以让这个 ref 指向另一个对象（写一句`ref = newObj;`），然后你在外面调用 `MyObj outerRef = someObj; foo(outerRef);` 那么外部的这个 outerRef 就指向新对象了。（这就很复杂很难以预料对吧，可能someObj自此没有人引用它也没法回收它了） ；但Java的参数你让它指向新对象也不会改变外面使函数被调用的那个引用了。
    - 引用4种类型：不同的内存管理策略
        - `强引用（Strong Reference）`：最常见，任何通过普通变量或对象属性引用的对象都是。存在强引用则不回收。
            - `Object strongRef = new Object();`
        - `软引用（Soft Reference）`：弱于强引用。垃圾回收器在内存不足时才会回收软引用指向的对象。通常用于实现内存敏感的缓存
            - `SoftReference<Object> softRef = new SoftReference<>(obj);`
        - `弱引用（Weak Reference）`：弱于软引用。垃圾回收时，不论内存是否充足，垃圾回收器都会回收弱引用指向的对象。弱引用通常用于避免内存泄漏，例如在ThreadLocal中使用。
            - `WeakReference<Object> weakRef = new WeakReference<>(obj);`
            - 常用于缓存和事件监听器等场景，因为你不想因为监视器噉嘅挂件引用个嘢便唔可回收佢
            - ThreadLocal中使用，是因为线程池嘅线程本身复用而不会被回收，所以内部嘅ThreadLocal要GC之以防占满。
                - K用弱引用为了被回收，而V用强引用防止过早回收。
        - `虚引用（Phantom Reference）`：最弱。通过虚引用无法直接访问对象，虚引用主要用于跟踪对象的垃圾回收状态。必须与引用队列（ReferenceQueue）一起使用，以在对象被回收后执行某些操作
            - 例子
                - `Object obj = new Object();`
                - `ReferenceQueue<Object> refQueue = new ReferenceQueue<>();`
                - `PhantomReference<Object> phantomRef = new PhantomReference<>(obj, refQueue);`
    - 深拷贝、浅拷贝
        - 浅，即引用类型数据只复制地址；深，即引用数据类型亦递归地创建新对象以复制；而基本数据类型皆复制。
        - 是以浅拷贝嘅新对象嘅字段会随老对象中嘅变以变
- 面向对象、类与对象
    - 基本概念：类与对象、封装、继承、多态
    - 访问控制修饰符：public, private, protected
    - 接口㐅抽象类 **接口与抽象类的区别**
        - 抽象类（Abstract Class），形如 `public abstract class Animal { ...`，用之 `public class Dog extends Animal { ...`
            - 抽象方法形如 `public abstract void eat();`，冇方法体
        - 接口（Interface），形如 `public interface Animal { ...`，用之 `public class Swan implements Flyable, Swimmable { ...`
            - 接口本身**可以继承多个其他接口**，`public interface Amphibious extends Flyable, Swimmable, Animal { ...`
            - 接口中，抽象方法形如 `void eat();` （接口中的方法默认是 public abstract）
        - 区别
            - （我觉得总之「类」是个东西，「接口」只是行为能力，这是设计上面核心的区别吧）
            - **继承**：单继承，多实现：类可以实现多个接口，但不可以继承多个类。
                - 可以一边继承一个类一边实现多个接口，形如 `public class Bird extends Animal implements Flyable, Walkable { ...`
            - **字段**：接口只能包含常量，默认`public static final`；抽象类可以含变量、多种访问修饰符
            - **方法**：接口所有方法皆不可有实现（Java8引入咗默认方法和静态方法），抽象类可以有
            - **实现**：实现所有接口方法：接口嘅方法皆抽象，皆须实现；但，iff声明一个类为抽象类，则可以不实现所继承的父抽象类中的抽象方法
                - 接口定义了一组方法，表示类必须实现嘅能力或契约（Contract），负责约束性；抽象类则负责灵活性
            - **构造方法**：接口冇，抽象类可以有构造方法，用于子类的初始化
            - 使用场景：接口：用于定义行为契约，不同类实现相同接口以保证行为一致性。抽象类：用于定义一组相关类的公共行为和状态，提供代码复用的基础。
    - **Java的继承与C++有何不同**（封装、继承、多态）
        - 单继承和多继承：Java单继承，而用接口实现多重继承效果；C++支持多继承。
        - 虚拟方法：Java中的（非静态、非私有、非最终final）方法默认是虚拟的（即可以被子类覆盖override）；C++需要使用virtual关键字e。
        - 接口和抽象类：Java通过接口实现多重继承，使用abstract关键字定义抽象类；C++通过虚拟继承和纯虚函数（=0）实现类似功能（定义纯虚函数者即抽象类）
        - 构造函数调用顺序：两种语言中父类构造函数都在子类构造函数之前调用，但调用方式不同。
        - 访问控制：Java和C++在protected成员的访问控制上，Java可以被同包嘅类与子类，C++可以被子类与友元
    - Java 的多态
        - 编译时多态：方法重载
        - 运行时多态：`@Override`（方法重写 & 接口实现）
            - 子类重写父类嘅方法，多个类实现同一个接口，皆为同一个方法出现不同嘅表现也
            - 动态绑定（Dynamic Binding）：指的是在运行时根据实际对象类型来调用方法，而不是在编译时确定调用哪个方法。Java通过方法表（method table）来实现动态绑定。
                - `方法表（Method Table）`，又称虚方法表（Virtual Method Table，VTable），用于在运行时根据对象的实际类型选择要调用的方法
                    - 当类被加载时，JVM会为该类创建一个方法表。方法表是一个数组，每个条目存储了一个方法的实际实现地址。是类元数据嘅一部份。每个类有自己嘅。
                    - 子类是在父类方法表基础上重写自己嘅方法，指向自己实现。
                    - 每个对象实例在内存中都有一个指向其所属类的方法表的引用。这个引用通常存储在对象头部。
                    - 运行时，对象知道自己嘅类，亦就有指向自己方法表嘅指针，可以揾方法嘅实现
    - 创建实例的方式有哪些？（反射，new，clone()，前端传输过来 序列化）
        - 使用 new 关键字
        - 使用反射：动态地创建对象，尤其适用于不知道类的具体类型时
            - `try` `Class<?> clazz = Class.forName("MyClass");` 
                - `MyClass obj = (MyClass) clazz.getDeclaredConstructor().newInstance();`
        - 使用 clone() 方法：通过实现 Cloneable 接口并重写 clone() 方法来创建对象的副本
        - 通过反序列化
            - `.obj`：
                - 二进制文件，数据以字节的形式写入文件
                - ObjectOutputStream out = new ObjectOutputStream(new FileOutputStream("data.obj"));
                - out.writeObject(obj1); ObjectInputStream in = ...; obj2 = (MyClass) in.readObject();
            - JSON：SpringMVC 之，`@RequestBody`注解用于 把 HTTP请求体中的JSON 转 对象；`@ResponseBody` 把 对象 序列化为 反之
                - 通常情况下，@RestController注解包含@Controller和@ResponseBody注解，简化开发。所有方法的返回值默认都作为响应体返回，而不需要每次都加上@ResponseBody。
        - 工厂方法模式
        - 使用依赖注入框架
        - 类对象的 newInstance() 方法：这种方式已被 getDeclaredConstructor().newInstance() 所取代
    - 不可变类（Immutable Class）
        - 即：内部状态不可变，所有字段皆 `private final`，不提供方法 que 改状态
        - 何以构：1️⃣类声明为 `final`；2️⃣所有字段声明为 `private final`；3️⃣用 Constructor 初始化所有字段；4️⃣不提供方法 que 改状态；5️⃣字段若为可变对象，喺构造函数深拷贝之，返回以不可修改视图 `Collections.unmodifiableXXX`；
- 语言特性 之 函数式编程
    - Lambda 表达式
        - 本质是表示匿名函数的一种方式。主要为了简洁、可读、灵活
        - `(parameters) -> expression`
        - `(parameters) -> { statements; }`
- 异常处理机制：try, catch, finally, throws
    - 异常类：皆继承自 `Throwable`，主要分 `Error` `Exception`
        - `Error`：表示编译时和系统错误（如OutOfMemoryError、StackOverflowError），通常不可恢复
        - `Exception`：可以在程序中被捕捉和处理的异常情况
            - `检查型异常（checked exceptions）`，即RuntimeException以外者，编译器要求处理。要么通过try-catch块捕获，要么通过throws关键字声明。
                - 它叫「检查」即编译器会「检查」佢是否被处理（捕获或声明）
                - 通常是由于外部因素或程序可以预见的情况导致的，所以可被检查，如IOException、SQLException
            - `非检查型异常（unchecked exceptions）`，即RuntimeException及其子类
                - 通常是由于编程或逻辑错误导致的，如NullPointerException、IndexOutOfBoundsException
                - 如果全都检查，就乱套啦、太冗余啦。每次数组调用都catch个越界错误？
    - try, catch, finally
        - finally块用于执行必须执行的清理工作，无论是否发生异常，finally块中的代码都会被执行
    - throws：声明此函数可能抛出异常
    - 异常链：一个异常导致一个异常
        - 可用`Throwable`类的`getCause()`方法获取原始异常。
    - 自定义异常
    - 断言：Java提供了assert关键字来进行调试，断言在运行时检查某个条件是否为真，如果为假，则抛出AssertionError。
- SPI：（Service Provider Interface）是 Java 的一种机制，让服务接口的定义和实现（服务提供者）解耦，然后在系统指定的目录下面，每个服务接口对应一个文件，里面记录各个服务实现类的全限定名，通过配置文件动态加载不同的实现。
    - 通过工具类 `java.util.ServiceLoader` 具体加载，此类可以.load()一个服务类的所有实现，可以遍历它来使用所有实现，遍历时可通过名字具体指定用哪个实现。
    - 实现模块化设计，动态加载也
    - 例如 JDBC API 中的 java.sql.DriverManager 类负责管理 JDBC 驱动程序，并且负责与数据库建立连接，其内部会使用 ServiceLoader 加载所有实现 java.sql.Driver 的类以注册，并以后在执行 getConnection() 时会遍历所有注册的 Driver，用第一个可以 driver.acceptsURL(url) 的 Driver 来连接
- IO 部分
- Stream API：以声明性和函数式编程风格处理集合数据，使代码更加简洁、可读和易于维护
    - 创建Stream
        - 从集合创建：`Stream<String> stream = list.stream();`
        - 从数组创建：`Stream<String> stream = Arrays.stream(array);`
        - 其他方式创建：`Stream<String> stream = Stream.of("one", "two", "three");`
    - 中间操作（Intermediate Operations）：返回一个新的Stream的操作，可以链式调用
        - `filter( -> )`
            - `List<String> result = list.stream().filter(s -> s.startsWith("t")).collect(Collectors.toList());`
        - `map( -> )`
            - `List<Integer> lengths = list.stream().map(String::length).collect(Collectors.toList());`
        - `flatMap( -> )`：将每个元素映射为一个流，然后将这些流连接起来
            - `List<String> words = Arrays.asList("Hello", "World");`
            - `List<String> characters = words.stream()`
                - `.flatMap(word -> Arrays.stream(word.split("")))`
                - `.collect(Collectors.toList());`
            - // 输出: ["H", "e", "l", "l", "o", "W", "o", "r", "l", "d"]`
        - `distinct()`：去重
            - `List<Integer> distinctNumbers = numbers.stream().distinct().collect(Collectors.toList());`
        - `sorted()`：
            - 排序`sorted()`
                - `List<String> sortedList = list.stream().sorted().collect(Collectors.toList());`
            - 自定义排序`sorted( -> )`
                - `List<String> sortedList = list.stream().sorted((s1, s2) -> s1.length() - s2.length()).collect(Collectors.toList());`
        - `peek( -> )`：依次执行操作但不是改元素值
            - `List<String> result = list.stream().peek(s -> System.out.println(s)).collect(Collectors.toList());`
        - limit：限制Stream中的元素数量至多n
        - skip：跳过Stream中的前n个元素
        - mapToInt, mapToDouble, mapToLong：将元素映射为相应的数值类型流
        - boxed：将原始数值类型流转换为对象类型流
            - `IntStream intStream = IntStream.range(1, 4); Stream<Integer> integerStream = intStream.boxed();`
    - 终端操作（Terminal Operations）：会触发Stream的执行，并返回一个非Stream的结果
        - `collect`：Stream换为另一种形式如 List, Set
            - 转 List、Set
                - `.collect(Collectors.toList());`
                - `.collect(Collectors.toSet());`
            - Collectors 高级操作
                - 收集以 groupingBy
                    - `Map<Integer, List<String>> groupedByLength = list.stream().collect(Collectors.groupingBy(String::length));`
                    - // 输出: {3=[one, two], 5=[three], 4=[four]}
                - joining
                    -  `String joinedString = list.stream().collect(Collectors.joining(", "));`
                    -  // 输出: "one, two, three"
        - toArray：转数组
            - `String[] array = list.stream().toArray(String[]::new);`
        - `forEach`：每个元素进行操作
            - `list.stream().forEach(System.out::println);`
        - `reduce`：将元素连接起嚟
            - `Optional<String> concatenated = list.stream().reduce((s1, s2) -> s1 + ", " + s2);`
        - `count`：记数
            - `long count = list.stream().count();`
        - `anyMatch`：boolean 是否有某元素匹配
            - `boolean anyStartsWithT = list.stream().anyMatch(s -> s.startsWith("t"));`
        - `allMatch`：boolean 是否所有元素都匹配
        - `noneMatch`：boolean 是否无元素匹配
        - `findFirst`：返第一个元素
            - `Optional<String> first = list.stream().findFirst();`
        - `findAny`：返任一元素（适用于并行流）
            - `Optional<String> any = list.parallelStream().findAny();`
        - min, max
        - sum
    - 并行流（Parallel Streams）：可以利用多核处理器的优势，提高性能
        - `Stream<String> parallelStream = list.parallelStream();`

```java
// 方法重载（overload）：编译时的多态
// 方法重写（override）：运行时的多态

// try ... catch ... finally
// 其中 finally 不管是否有异常都会执行
// catch 捕捉其中一个后，后面的都不会catch
// 因此如果把范围大的写范围小的前面，编译会报错
// 下面这段程序会报错
import java.io.IOException;
public class ExceptionTryCatchTest {
    public void doSomething() throws IOException{
        System.out.println("do somthing");
    }
    public static void main(String[] args){
        ExceptionTryCatchTest etct = new ExceptionTryCatchTest();
        try {
            etct.doSomething();
        } catch (Exception e) {

        } catch (IOException e) {  // !!!这里报错

        }
    }
}
// Exception，Error 是 Throwable 的两大子类，catch Exception 的话对 Error 无效

// this 指向当前对象，super 指向最近的父类

// package
// 必须是第一条非注释语句。一个文件只有一个包。
// 可以无障碍使用包里的其他文件里定义的类。
package net.java.util; // 那么它的路径应该是 net/java/util/Something.java 这样保存的
public class Something{
   ...
}

// `@`: Java Annotation (注解)
// Java 注解只是检查、对比等工作（方法、类或变量）；而 Python 装饰器直接改变修饰的方法或类的功能。
@Override  //标记重写方法，在编译阶段对方法进行检查


// assert
assertTrue(roleTypeConfig.getRoleType("none").isEmpty());


// Test
@Test
...


// json：JavaScript Object Notation。
// json 里的属性名也是驼峰式地写。

// com.fasterxml.jackson... 包用以 java object 与 json
// deserialize 即 json 转 java对象
// json 里的属性名也是驼峰式地写。


// org.slf4j... 包是一个日志框架（Simple Logging Facade for Java）


// JavaBean
// c'est ett Klass specialeux, escripté de Java,
// die langgehen JavaBean API, d.h.
// - eine arg-less Konstrukter
// - getter, setter, isser
// - serializeble
// und sie'est in JSP <jsp:useBean> benutzbar


// JSP, nämlich Java Server Pages
// womit man insertiert Java Koden ins HTML Pagen

```

# § JVM

《深入理解Java虚拟机：JVM高级特性与最佳实践(第3版)》

- JVM执行步骤（又叫 **类加载机制**）（这些阶段在每个类需要时完成，而不是JVM启动时一次性完成）
    - **加载（Loading）**：将字节码文件（.class 文件）加载到内存中。
        - 步骤：
            - 查找类文件：`类加载器`负责根据类名查找类文件的位置，这个位置可以是文件系统、JAR 包、网络等。
            - 读取字节码：`类加载器`读取类文件的字节码，并将其转换为字节数组。
            - 创建 `Class` 对象：`类加载器`调用 `JVM` 的 `defineClass` 方法，将字节码转换为 JVM 内部表示的 `Class` 对象。
                - 后续就步骤不由类加载器负责了
    - **链接（Linking）**：将加载的类与其他类进行链接，主要包括**验证、准备和解析**三个步骤。
        - **验证（Verification）**：确保类的字节码符合 JVM 规范，不会危害虚拟机。
        - **准备（Preparation）**：内存分配+默认初始化（为类的静态变量分配内存，并将其初始化为默认值。）
        - **解析（Resolution）**：将常量池中的符号引用替换为直接引用。
            - 这种解析可能在类加载时完成（**静态解析**），也可能在运行时完成（**动态链接**）（懒加载）。动态链接可以实现 Java 的多态性。
    - **初始化（Initialization）**：初始化类中的静态变量（赋值）和静态代码块。
        - **显式初始化**：执行类中的静态变量初始化代码。
        - **静态代码块**：执行类中的静态代码块。（就是不属于成员类，而是直接写于 `static { ... }`，也为初始化服务的，相比之下显式初始化只能简单赋值）
        - 太史公曰：其实跟其他编程学过的初始化一样。声明是声明，初始化是初值。另外，人类刚到一地而判别方位这一步确似初始化。
    - 在此之后，再回到执行（Execution）：解释或编译字节码指令，执行Java程序。
- JVM 启动过程
    - 引导类加载器（Bootstrap ClassLoader）を启动：引导类加载器是用本地代码（如 C/C++）实现的
    - 加载和初始化引导类库：核心类库，是JVM启动与运行所必需
    - 类加载器を启动：扩展类加载器（Extension ClassLoader）、应用程序类加载器（Application ClassLoader）
    - 加载和初始化启动类：即包含 main 方法的类，加载和初始化之，然后调用main方法
- 关键组成部分 de JVM
    - https://docs.oracle.com/javase/specs/jvms/se8/html/jvms-2.html#jvms-2.5
    - https://www.bilibili.com/video/BV1Q64y1h7PT
    - **类加载器（Class Loader）**
        - 负责加载、链接和初始化类。
        - 包括三种类加载器：引导（启动）类加载器、扩展类加载器和应用程序类加载器。
            - 引导类加载器（Bootstrap ClassLoader）：负责加载 Java 核心类库（如 rt.jar）。
            - 扩展类加载器（Extension ClassLoader）：加载扩展类库（如 ext 目录中的类库）（`JRE/lib/ext`）。
            - 应用程序类加载器（Application ClassLoader）：加载应用程序类路径（`classpath`）中的类。
                - 我们 `import` 时就是用这个加载器，因为这是在编译时；而不能用自定义类加载器
            - 自定义类加载器：除了JVM提供的这些标准类加载器，开发者还可以自定义类加载器。应用场景：
                - 动态加载类：如插件，启动后在运行时才被添加，故启动时不在classpath
                - 隔离加载：有的插件或模块为避免命名冲突而隔离，可以自定义类加载器为每个设不同的命名空间
                - 加载非 classpath 中的类：存储在其他地方，例如数据库、网络、甚至是压缩文件（如 JAR 包）
                - 热部署：不重启应用程序的情况下更新类定义
        - **双亲委派机制（Parent Delegation Model）**
            - ：指的是类加载器在加载类时，首先将请求委派给「父类加载器」（父ような 加载器-de-类）处理，只有在父类加载器无法加载时，才由自己进行加载
                - 「父类加载器」（父ような 加载器-de-类，也就是上一级的ClassLoader，跟类的继承里的父子无关。而且加载器间也是委派关系，不是继承关系）
            - 优点
                - 安全性：确保核心 Java 类库不会被自定义类覆盖（因为优先让核心的类加载器加载）。
                - 避免重复加载：保证一个类在 JVM 中只被加载一次。
                    - （自定义类加载器由于独立命名空间，所以这个意义减弱）
                    - 就是同一个全限定名的类（含包名与类名，如java.lang.String、com.example.MyClass）只加载一次。通常是因为它是核心类库或扩展类库的一部分。
    - **运行时数据区（Runtime Data Area）**
        - **程序计数器（Program Counter, PC, pc Register）**：记录当前线程执行的字节码行号。
            - 很小以至于没有对应的OOM异常
        - **栈（Stack）（虚拟机栈）**：每个线程都有一个独立的栈，存储局部变量和方法调用。以及对堆中的对象的引用。
            - **栈帧结构**：虚拟机栈存储栈帧，每个栈帧对应一次方法调用，包含：
                - 局部变量表：存放方法参数和局部变量。
                - 操作数栈：用于字节码指令的操作数存储。
                - 动态链接：用于方法调用时指向运行时常量池中的符号引用。
                    - 符号引用：存在于方法区的运行时常量池中，表示类、方法、字段等的符号名称。这些符号引用在类加载时不会立即解析，直到实际调用时才会被解析。
                    - 直接引用：是解析后的具体内存地址或指向堆中对象的引用。
                    - 在方法调用时，栈帧中的动态链接部分存储了对 运行时常量池中符号引用 的引用。运行时，JVM 以之找到运行时常量池中符号引用，解析此符号引用，转换为直接引用。通过解析后的内存地址或对象引用进行实际方法调用。
                - 方法返回地址：方法执行完毕后的返回地址。
                - 附加信息：包含调试信息和异常处理信息。
        - **本地方法栈（Native Method Stack）**：用于执行本地方法。
            - 栈 de 本地方法，kue-est 其他语言编写的、交由Java运行的方法，使用`native`关键字描述
        - **堆（Heap）**：存储对象实例，是垃圾回收的主要区域。
        - **方法区（Method Area）**：运行时常量池（字面量、符号引用）和静态变量、类信息（类元数据）（反射机制就要用）等。
            - 乄元空间/永久代：方法区是JVM抽象的规范，而元空间（Metaspace，Java8以来，独立于堆 ）和永久代（PermGen，Java7及前，是堆空间的一部分）是对该抽象的具体实现。
                - 用元空间替代永久代的原因：
                    - 它内存更大，不易溢出，且可以动态调整大小，能加载更多的类元数据；
                    - 简化GC，因为永久代导致GC时类元数据都要被特殊处理和移动，改为元空间后GC专注回收对象
            - 是与堆不相连的本地内存区域，理论上系统内存多大，元空间就有多大 
            - 运行时常量池（Runtime Constant Pool）：
                - 包含了
                    - 字面量（Literals）：编译期生成的常量值，如整数、浮点数、字符串常量等。
                    - 符号引用（Symbolic References）：类和接口的全限定名；字段的名称和描述符；方法的名称和描述符
            - 类信息（Class Metadata）：（总结：自名、所extends、所implements；字段、方法签名、方法字节码）
                - 类的名称：类的完全限定名（fully qualified name）。父类的名称：父类的完全限定名（如果有的话）。接口列表：该类实现的所有接口的列表。字段信息：包括字段的名称、类型和修饰符。方法信息：包括方法的名称、返回类型、参数类型、修饰符等。方法字节码：方法的字节码，供JVM执行。
        - 关系：栈、本地方法栈、程序计数器三者属于线程自己。堆、方法区共用
        - 这五者也叫做JVM的内存结构。
    - **执行引擎（Execution Engine）**：负责执行字节码指令，包括解释执行和即时编译（JIT）。
        - **解释器**（Interpreter）：逐行解释执行字节码指令。
            - 启动快；执行慢
        - **JIT编译器**：将热点代码（经常执行的代码）编译为本地机器码，提高执行效率，且有多种高级优化技术
    - **本地接口（Native Interface）**：提供与本地代码交互的接口（如JNI），允许Java调用非Java代码（如C/C++）。
- JVM 内存管理
    - **内存分配**：
        - 对象在堆中分配，局部变量在栈中分配。
        - 内存分年轻代（Young Generation）（分Eden、S1、S2）、老年代（Old Generation）
            - Eden区中的对象经过一次或多次GC后会被转移到Survivor区。经过多次GC后，幸存下来的对象会被提升到老年代（Old区）。
    - **垃圾回收（Garbage Collection）**
        - 垃圾收集算法：标记-清除、复制、标记-压缩等。
            - 标记-清除算法（Mark-Sweep）：标记可达者，清除未标记
            - 标记-复制算法（Mark-Copy）：复制到另区，只保留可达者
            - 标记-压缩算法（Mark-Compact）：标记所有可达对象，然后将可达对象压缩到内存的一端，清除剩余内存
            - 增量收集（Incremental Collection）：通过将整个垃圾收集过程分解为多个小步骤，减少每次垃圾收集的停顿时间。
            - 分代收集（Generational Collection）：根据对象的生命周期将堆划分为不同的代，如年轻代和老年代，不同代使用不同的垃圾收集算法以优化性能。
                - Serial, Parallel, CMS, G1 ... 全有
            - 并发垃圾回收（Concurrent Garbage Collection）：垃圾回收过程与应用程序线程并发执行
        - 常见的垃圾收集器：Serial、Parallel、CMS、G1等。
            - `Serial垃圾收集器`（JDK 1.3之前） `-XX:+UseSerialGC`：单线程；使用复制算法清理年轻代，标记-压缩算法清理老年代。
                - GC时app暂停（stop-the-world）
                - 年轻代亦系标记 Eden, S0 之存活者去 S1
            - `Parallel垃圾收集器`（JDK 1.4） `-XX:+UseParallelGC`：并行；算法同Serial
                - 多个GC线程一齐GC。
                - GC时app暂停（stop-the-world）
            - `CMS（Concurrent Mark-Sweep）垃圾收集器`（JDK 1.4.2） `-XX:+UseConcMarkSweepGC`：
                - 顾名思义，并发标记-清除垃圾，主要用于减少老年代的停顿时间
                - 并发标记、并发清除是与app并发
                - 缺点是会产生内存碎片
                - 阶段：初始标记（Initial Mark）（stop-the-world） - 并发标记（Concurrent Mark） - 重新标记（Remark）（stop-the-world） - 并发清除（Concurrent Sweep）
            - `G1（Garbage-First）垃圾收集器`（JDK 7 Update 4 首次引入，JDK8 正式 应用，JDK 9 改进并默认） `-XX:+UseG1GC`
                - 堆划分为多个大小相等的独立区域（Region），每个Region的大小可以在1MB到32MB之间。所有的Region都有各自的用途，包括Eden区、Survivor区和Old区。
                - 回收分 Minor, Mixed 与 Full，其中 Mixed GC 随 并发标记周期 而定期发生
                - `Minor GC`，年轻代GC（Young GC）：Eden满时触发。复制算法，将活跃对象从一个区域(Eden, S0)复制到另一个区域(S1)，清理掉不再使用的对象。
                    - 阶段：初始标记（Initial Marking Phase）、根区域扫描（Root Region Scanning）、对象复制（Object Copying）
                - `并发标记周期（Concurrent Marking Cycle）`，包括阶段：
                    - `初始标记（Initial Marking）`（stop-the-world）：标记从GC Roots直接可达的对象。这个阶段是短暂的，通常与年轻代GC一起进行。
                    - `根区域扫描（Root Region Scanning）`：在初始标记之后进行，从Survivor区域开始扫描并标记引用的对象。
                    - `并发标记（Concurrent Marking）`：并发地在整个堆中标记存活的对象，这个阶段是耗时最长的，但可以与应用程序并发执行。
                    - `重新标记阶段（Remark Phase）`（stop-the-world）处理在并发标记阶段发生的引用变化（及新创建的对象），完成对存活对象的标记。
                    - `筛选（Cleanup）`：识别和清理空闲的Region，重新利用这些Region。包括整理老年代（Old Generation）区域，并可能进行混合GC
                        - 选择回收Region：G1会根据每个Region中的存活对象数量和回收收益，选择要回收的Region。通常会优先回收存活对象少的Region，以最大化回收效率。
                        - 回收空闲Region：对于那些没有存活对象或存活对象很少的Region，G1会直接回收这些Region，将其中的对象移到其他Region或进行直接清理。
                        - 重新利用Region：被清理的Region会被标记为空闲，放回到Region池中，以便后续的内存分配使用。
                        - 压缩活跃对象：对于那些存活对象较多的Region，G1会将这些存活对象压缩到较少的Region中，腾出更多连续的空闲空间。这一步可以减少内存碎片，提高内存利用效率。
                - `Mixed GC`（混合GC）：在`并发标记周期（Concurrent Marking Cycle）`完后进行
                    - 老年代和年轻代的混合收集：混合GC同时收集年轻代和部分老年代的Region。
                    - 选择性收集：G1根据每个Region的回收收益（回收对象数量和停顿时间）选择需要回收的Region，优先回收收益最高的Region。
                    - 多次混合垃圾回收：一次并发标记周期后可能会执行多次混合垃圾回收，以尽量多地回收老年代的垃圾
                - `Full GC` 全堆垃圾回收：当内存使用达到某个阈值或其他回收阶段无法满足内存需求时，触发Full GC，stop-the-world
                - 优势
                    - 减少停顿时间、提供可预测的停顿时间、自动调优，适用于对响应时间要求较高的应用程序
                        - 可以通过设置最大停顿时间目标来提供可预测的停顿时间 `-XX:MaxGCPauseMillis=200`
            - `ZGC（Z Garbage Collector）`（JDK 11 实验引入）（JDK 15 正式可用；默认仍 G1）`-XX:+UseZGC`：低停顿时间、并发垃圾收集、区域化内存管理、染色指针
                - https://wiki.openjdk.org/display/zgc
                - 较老版本不分代：`-XX:+UseZGC`，新版分代：`-XX:+UseZGC -XX:+ZGenerational`
                - 特征（从官网）：
                    - 停顿不到1ms；停顿时间与大小无关，兼容几百MB到16TB
                    - 并发：大部份工作都并发，停顿只有根扫描和重定位等少数
                    - Region-based
                    - Compacting
                    - NUMA-aware
                    - Using colored pointers：即用指针中嘅信息表示对象状态
                        - 黑色：表示对象是活跃的，且已被处理。
                        - 灰色：表示对象正在被处理。
                        - 白色：表示对象未被处理，可能是垃圾。
                        - 蓝色：表示对象正在被重定位。
                    - Using load barriers：负载屏障，这是一个在每次对象加载时的轻量级检查机制。当线程访问一个对象时，负载屏障会检查该对象的指针颜色，并采取相应的操作。这有助于并发标记和重定位过程的执行，而不需要长时间暂停应用程序
                    - Using store barriers (in the generational mode)
                - 工作过程
                    - 初始标记Initial Mark：标记根对象，STW，暂停时间短。
                    - 并发标记Concurrent Mark：标记所有活跃对象，并发执行。
                    - 暂停标记结束Pause Mark End：完成最后的标记工作，STW，暂停时间短。
                    - 并发准备重定位Concurrent Prepare for Relocate：标记即将重定位的对象，并发执行。
                    - 并发重定位Concurrent Relocate：将活跃对象移动到新位置，并发执行。
                    - 暂停重定位结束Pause Relocate End：完成最后的重定位工作，STW，暂停时间短。
                    - 并发重新映射Concurrent Remap：更新所有引用，确保指向正确的位置，并发执行。
                - 示例
                    - 标记对象A为需要重定位：在准备阶段，ZGC标记对象A为需要重定位。
                    - 并发复制对象A：在并发重定位阶段，ZGC线程在应用线程运行时，将对象A从旧位置复制到新位置。
                    - 更新引用：在负载屏障的帮助下，更新所有指向对象A的引用，使它们指向新位置。
                    - 并发重新映射：在并发重新映射阶段，ZGC扫描堆，确保所有引用都已更新。
                    - 完成重定位：在暂停重定位结束阶段，完成最后的重定位和引用更新。
            - `Shenandoah（JDK 12 实验引入）`（JDK 15：标记为正式可用）`-XX:+UseShenandoahGC`：低停顿时间、并发压缩、区域化内存管理
            - `Epsilon`（JDK 11 实验引入）：不进行实际的垃圾收集，主要用于测试和基准测试
        - 大小GC
            - Minor GC（年轻代垃圾收集）：只年轻代
                - 使用复制算法，将幸存者区（Survivor Space）（S1）的对象复制到另一块区域（S2）或老年代
            - Major GC 或 Full GC（老年代垃圾收集）：整个堆
- JVM内存模型（Java Memory Model, JMM）
    - 定义：是Java语言规范的一部分，定义了多线程环境下变量的读写操作规则，特别是共享变量在不同线程之间的可见性和指令重排序规则。
    - 目的：解决多线程环境下的内存可见性问题，确保不同线程之间的操作能够正确同步，并提供了一套规则来保证程序的执行顺序和内存一致性。
    - 关键概念
        - 可见性
        - 原子性
        - 有序性
    - JMM的规则和保障
        - volatile关键字
        - synchronized关键字
        - final关键字
    - **Happens-Before规则**：（我觉得每句话说Happens-Before还是略绕，因为before本义为之前，但描述的是前句发生在后句之前，前句发生之后才是后句。故「之后才是」更符合由前到后自然顺序，或者「然后有」之类的。）
        - **程序顺序规则**：一个线程内的操作按照代码顺序执行。
        - **监视器锁规则**：解锁操作 之后才是 此锁之加锁操作。
        - **volatile变量规则**：对一个volatile变量的写操作 之后才是 后续对这个volatile变量的读操作。
        - **线程启动规则**：线程的start()方法 之后才是 该线程的每一个动作。
        - **线程终止规则**：线程的所有操作 之后才是 其他线程检测到该线程终止。
        - **线程中断规则**：对线程interrupt()方法的调用 之后才是 被中断线程的代码检测到中断事件的发生。
        - **对象终结规则**：一个对象的构造函数执行结束 之后才是 该对象的finalize()方法。
    - 主内存 vs 工作内存（线程本地内存）
        - `主内存（Main Memory）`：所有线程之共享
        - `工作内存（Working Memory）`：线程私有，用于拷贝数据副本，每次操作数据，线程先从主内存加载到工作内存，结果写返主内存
        - 可见性问题：问题会有，即一个线程嘅修改不可见于其他线程。可解以：
            - `volatile`：可见性：修改直接刷新主内存，读亦；禁止指令重排序于写前读后
            - 加锁（`synchronized` 或 `Lock`）：获得锁会清空工作内存嘅变量副本，重新加载；释放时将修改后嘅值刷新到主内存
- JVM优化Java代码的主要手段
    - 垃圾回收：通过不同的垃圾收集器和算法，有效管理内存，清理不再使用的对象
        - 垃圾收集机制和垃圾收集器
        - 可达性分析（Reachability Analysis）：判断对象是否可以被回收的主要算法
    - 逃逸分析（Escape Analysis）：逃逸分析用于确定对象的作用范围，如果对象不会逃逸出方法，可以在栈上分配内存而不是堆上，（优化内存分配），减少GC压力。
        - 栈上分配：在栈上分配对象，方法结束后自动回收，无需GC处理
        - 同步消除：逃逸分析可以检测到不必要的同步操作（如对象未被多个线程共享），JVM会自动消除这些同步，提升性能。（JIT期间，锁消除，见synchronized之优化）
    - JIT编译器进行嘅优化
        - 即时编译（Just-In-Time Compilation, JIT）
            - 在运行时将热点代码（频繁执行的代码）编译成本地机器码，减少解释执行的开销
            - 常见的JIT编译器有C1、C2和Graal
            - 热点代码检测：JVM会监控运行中的代码，识别热点代码
                - 通过计数器技术（如方法调用计数器、回边计数器）来确定
        - 方法内联（Inlining）：将目标方法的代码嵌入调用方，减少方法调用开销
            - JIT编译器在编译时会分析哪些方法适合内联（如小方法、频繁调用的方法）
        - 循环优化（Loop Optimization）：通过循环展开、循环外提等技术优化循环代码
            - 循环展开（Loop Unrolling）：JVM可以对小规模的循环进行展开，将循环体重复多次，减少循环控制的开销。
            - 循环优化技术：如循环外提（Loop Hoisting）、循环合并（Loop Fusion）等，通过减少不必要的重复计算和合并相似的循环来优化代码。
        - 常量折叠（Constant Folding）：编译期间计算常量表达式的结果，并将其替换为结果值，减少运行时计算的开销。
        - 分支预测（Branch Prediction）：JVM通过分析代码的执行路径，优化条件分支的执行，提高分支命中的概率，减少分支跳转带来的性能损失。
        - ※注：呢啲高级优化亦针对热点代码
        - ※注：Java编译器（`javac`）将Java源代码编译为字节码时无这些高级优化，而是由JVM的JIT编译器在运行时进行
            - 点解？：跨平台之字节码由本地之JIT针对性优化；javac省略优化，快速生成字节码以更快启动；利用运行时信息；利用动态特性
    - 相关问题：点解Java性能优于Python？因为Java除咗解释器仲有JIT编译器，其优化超多，而Python只可逐行解释；以及Python需动态类型检查
- JVM调优参数和工具
    - JVM 调优通常是通过设置 JVM 参数来实现的
    - **讲讲JVM启动时都有哪些参数**
        - 例：`java -Xms512m -Xmx1024m -XX:+UseG1GC -XX:MaxGCPauseMillis=200 -XX:+PrintGCDetails -Dfile.encoding=UTF-8 -jar myapp.jar`
            - 初始堆512M，最大堆1024M，使用 G1 垃圾收集器，最大 GC 暂停时间为 200 毫秒，打印 GC 详细信息，设置系统属性之文件编码为 UTF-8
        - 内存相关参数
            - 堆大小（Heap Size）设置
            - 非堆内存设置
            - 栈内存设置
            - 新生代和老年代（大小、比率）
        - 垃圾回收相关参数
            - 选择垃圾收集器
            - 垃圾收集器参数
        - JIT 编译相关参数：调整即时编译器参数，提高热点代码的执行效率。
            - 启用/禁用 JIT 编译器
            - 设置 JIT 编译器选项
        - 类加载调优：减少类加载次数，优化类加载路径。
            - 减少类加载次数：使用自定义类加载器，按需加载类。使用类加载缓存，避免重复加载相同的类。
            - 优化类加载路径
        - 调试和监控相关参数
            - 远程调试
            - JMX 监控
        - 其他常用参数
            - 系统属性
            - 日志和诊断

**：JIT, Just-in-time compilation 即时编译**

> 作者：lcksuper
> 链接：https://www.zhihu.com/question/21093419/answer/112968115
> 来源：知乎
> 著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。
> 
> A JIT compiler runs **after** the program has started and compiles the code (usually bytecode or some kind of VM instructions) on the fly (or just-in-time, as it's called) into a form that's usually faster, typically the host CPU's native instruction set. A JIT has access to dynamic runtime information whereas a standard compiler doesn't and can make better optimizations like inlining functions that are used frequently.
> 
> This is in contrast to a traditional compiler that compiles **all** the code to machine language **before** the program is first run.
> 
> To paraphrase, conventional compilers build the whole program as an EXE file BEFORE the first time you run it. For newer style programs, an assembly is generated with pseudocode (p-code). Only AFTER you execute the program on the OS (e.g., by double-clicking on its icon) will the (JIT) compiler kick in and generate machine code (m-code) that the Intel-based processor or whatever will understand.

JVM 里面接受字节码的有两块：直接解释执行的 `Java Interpreter` 和将字节码转为 native (machine) code 的 `JIT compiler`。JVM 通过叫做`热点代码（hotspot code）`分析的技术来确定哪些代码编译成本地代码，热点代码通常是频繁执行的代码块（所以叫热点吧），例如循环或经常调用的代码；其他不太频繁执行的代码依然由解释器执行，因为编译成本地机器代码需要时间和资源，不适合所有代码。

与直接编译的语言如C相比，在运行期间收集一些数据以更好地优化代码（激进优化）也是JIT的优势之一。

**：垃圾回收**

[JVM 垃圾回收](https://github.com/Snailclimb/JavaGuide/blob/main/docs/java/jvm/jvm-garbage-collection.md)

内存分配和回收原则：

- 对象优先在 Eden 区分配
- 大对象直接进入老年代
- 长期存活的对象将进入老年代
- 主要进行gc的区域
- 空间分配担保

> Q: 什么分配到 Eden 什么分配到 Old Gen

随便看几个帖子：

- [JVM之堆内存（年经代，老年代）](https://www.cnblogs.com/shoshana-kong/p/9071004.html)
- [Java堆内存、新生代和GC](https://www.jianshu.com/p/da37c441b447)

堆分成两个区域：新生代 Young Gen，老年代 Old Gen

Young Gen 分成三个区域：Eden Space, From Survivor, To Survivor

[How is the java memory pool divided?](https://stackoverflow.com/questions/1262328/how-is-the-java-memory-pool-divided)

总结一下大家的说法应该是

- Heap Memory
    - Young Gen
        - Eden Space
        - Survivor Space
            - From
            - To
    - Tenured Generation or Old Gen
- Non-heap Memory
    - Permanent Generation
    - Code Cache  

新创建的对象分配到 Eden（除非太大直接到 Old Gen（或特殊处理？）（避免 Minor GC 时大量内存复制）），经过第一次 Minor GC 若仍存活则移动到 Survivor 区，Survivor 中每经过一次GC增加1岁，达到一定岁数就移动到 Old Gen。

Survivor Space：设置这个区域是个缓冲，因为直接送到 Old Gen 会让 Old Gen 增长太快，频繁触发开销更大的 Full GC

> Q: Minor GC, Full GC 的特点和区别？

Minor GC 是在 Young Gen 上面，Eden 的存活者复制到 To，From 的存活者中年龄到达阈值的移动到 Old，没到的复制到 To。如此则 Eden 与 From 已空。然后 From 与 To 交换角色：把 To 改为新的 From，原来的 From 作为 To。

Minor GC会一直重复这样的过程，直到“To”区被填满，“To”区被填满之后，会将所有对象移动到年老代中。

Full GC 可能指对所有空间，也可能指对 Old Gen，好像有点混乱？

# § 多线程 et 并发

- 线程概念
    - **线程与进程的区别**（&协程）
        - 核心
            - 进程（Process）是操作系统分配资源的基本单位
                - 进程独立拥有而线程共享之**资源**：内存空间（堆内存、全局变量）、文件描述符/句柄、代码段、数据段等资源
            - 线程（Thread）是进程的基本执行单位，共享进程之资源
            - 协程（Coroutine）协程是由程序本身调度的（用户态），不依赖操作系统（内核态）的线程调度
                - 每个协程自己嘅协程栈、协程上下文比线程嘅更加轻量
                - 协程和线程是多对多的关系，程序管理M个协程，并由具体的调度器（Dispatcher）确定运行时使用N个线程中的哪个运行。协程可以在线程之间切换哟。
        - 线程协程适用场景
            - 协程 适用于 I/O 密集型、高并发短时任务和轻量级任务调度等场景。
            - 线程 更适用于 CPU 密集型任务、需要真正并行执行的任务和硬实时系统等场景。
                - 主要就是协程不是底层所以不能控制并行计算，而线程更能充分利用多核处理器的优势？另外协程调度导致不可测的变化
            - 例如问法：线程与协程的区别，何场景用到协程
- 线程管理（生命周期与状态）
    - 线程创建方式（本质都是实现Runnable接口）
        - 实现Runnable接口
            - 然后传给Thread执行。如：
                - `Runnable myRunnable = () -> System.out.println("Runnable is running");`
                - `Thread thread = new Thread(myRunnable);`
                - `thread.start();`
            - 更推荐，因为与继承Thread相比不受单继承的限制。也更符合面向接口编程的设计原则。
        - 继承Thread类
            - 可以自己写一个类继承Thread并Override run()
            - 也可以直接把函数传给Thread的构造函数
                - `Thread thread = new Thread(() -> System.out.println("Thread is running"));`
                - `thread.start();`
            - Thread类的start()是真正启动线程，而run()是单线程运行
        - 使用Callable和Future
            - Callable本身不是线程，是一个普通接口，唯一抽象方法.call()有返回值、可抛出检查异常，把它送给Executor（线程池框架）会得到一个Future对象以获取返回值
            - `ExecutorService executor = Executors.newFixedThreadPool(2);`
            - `Callable<String> myCallable = new MyCallable();`
            - `Future<String> future = executor.submit(myCallable);`
        - （有时不答）使用线程池（Executor框架）
            - 与Callable方式的区别是这里可以直接使用Runnable
            - `Runnable runnable = new MyRunnable();`
            - `executor.execute(runnable);`
            - Lambda表达式可以直接表示单方法接口（函数式接口（Functional Interface），只有一个抽象方法）的实例，故也适用于Runnable（只有一个.run()），如：
                - `executor.execute(() -> System.out.println("Runnable task " + i + " is running"));`
        - 总结：不需返回值的任务就Runnable，需要返回值就Callable，需要线程池就交给ExecutorService
    - 线程的状态
        - 新建（New）：线程对象被创建，但尚未调用start方法。
        - 就绪（Runnable）：线程已经调用start方法，等待线程调度器分配CPU时间执行。Java的Runnable状态不区分“就绪”和“运行”。
        - 运行（Running）：线程获得CPU时间片，正在执行任务代码。Java中将这个状态包含在Runnable状态中，不单独区分。
        - 阻塞（Blocked）：线程在等待监视器锁，以便进入同步代码块或方法。通常因为尝试获取一个被其他线程持有的锁。
        - 等待（Waiting）：线程在等待另一个线程显式地唤醒。通常因为调用了Object.wait()方法或Thread.join()方法。
        - 超时等待（Timed Waiting）：线程在等待一定时间后会被自动唤醒。通常因为调用了Thread.sleep()方法、Object.wait(long timeout)方法或Thread.join(long millis)方法。
        - 终止（Terminated）：线程的执行已经结束，或者因为异常退出。
    - 线程的状态转换
        - 王道路线：NEW 者.start()则 RUNNABLE，得到处理器资源则 RUNNING，stop()或Exception或Error或run()/call()完成则 TERMINATED
        - RUNNING 者 yield() 或失去处理器资源（线程调度器）则 RUNNABLE
        - RUNNING 者 等待同步锁 则 BLOCKED，后者获取锁则 RUNNABLE
        - RUNNING 转 WAITING：调用Object.wait()方法、Thread.join()方法或LockSupport.park()方法，等待其他线程显式唤醒。
        - WAITING 转 RUNNABLE：线程被其他线程调用notify()、notifyAll()方法唤醒，或者等待的线程结束执行。
        - RUNNING 转 TIMED-WAITING：线程调用Thread.sleep(long millis)、Object.wait(long timeout)方法或Thread.join(long millis)方法，进入超时等待状态。
        - TIMED-WAITING 转 RUNNABLE：等待时间到达
    - 守护线程与用户线程（两种不同的线程种类）
        - 定义： 用户线程（User Thread）是默认的普通的线程，守护线程（Daemon Thread）是特殊线程，后台运行，用于提供服务或进行辅助任务。当所有用户线程都结束时，守护线程会自动终止，JVM也会退出。
        - 生命周期：只要有任何一个用户线程在运行，Java虚拟机（JVM）就不会退出。如果所有的用户线程都结束了，无论守护线程是否还在运行，JVM都会退出。守护线程会被强制终止（finally块不一定执行）。
        - 用途：用户线程，执行主要任务和业务逻辑。守护线程，执行后台任务或辅助任务，例如垃圾回收器（Garbage Collector）、日志记录、监控等。（不该执行重要任务，因为会随时终止）
        - 设置线程为守护线程：调用线程对象的setDaemon(true)方法。需在start前调用。
- 线程安全
    - 线程安全的定义
        - 线程安全是指多个线程访问共享资源时，能够正确地协调访问，避免竞态条件和数据不一致的问题。
    - 竞态条件与临界区
    - 同步机制（synchronized 关键字、显式锁（ReentrantLock 等））
    - `volatile` 关键字
        - 轻量级同步机制，确保变量的**可见性**和**有序性**
            - **可见性**：对 `volatile` 变量的写操作会立即刷新到主内存（而不仅是本地内存（线程缓存）），读操作会从主内存中读取。
            - **有序性**：`volatile` 变量的读写操作不会被重排序（底层概念，CPU或编译器优化的`指令重排序`）。
        - 实现原理：
            - 内存屏障（Memory Barriers 或 Memory Fences）
                - `写内存屏障`：在对 volatile 变量写入之前，插入一个写屏障，确保在写入之前的所有写操作都已完成。
                - `读内存屏障`：在从 volatile 变量读取之后，插入一个读屏障，确保在读取之后的所有读操作不会被重排序到读取之前。
                - 总结：就是一定在前面的代码之后才写，然后一定在其后的代码之前被读。好处之一比如把一个flag设为volatile，则可以确保前面操作完成后（写屏障）才会给flag设true，而if了flag为true（读屏障）后才会进行后续操作（不会提前读没改完的值）
                    - 例如写者有 `a = 42;` `flag = true;`；读者有`if (flag)` `int i = a;` 就能确保a被设置为42后才会读设 i = a
    - `ThreadLocal`：线程局部变量
        - 每个线程都持有一个 ThreadLocalMap 对象，是个 HashMap，键是 ThreadLocal 对象，值是线程局部变量；它是 ThreadLocal 内部的一个静态内部类，故 ThreadLocal 们都可访问。
        - ThreadLocal 的核心方法
            - `set(T value)`：将当前线程的 ThreadLocalMap 中对应当前 ThreadLocal 的值设置为 value
            - `get()`：获取当前线程的 ThreadLocalMap，从中取出当前 ThreadLocal 的值
            - `remove()`：移除当前线程的 ThreadLocalMap 中当前 ThreadLocal 的值。防止内存泄漏。
            - `withInitial(Supplier<? extends T> supplier)`：创建一个带有初始值的 ThreadLocal。
        - 内存泄漏问题
            - ThreadLocalMap 使用弱引用作为键，强引用作为值，这意味着当 ThreadLocal 实例被垃圾收集时，键会被清理，但值不会立即清理。由于线程池中线程会被重复使用（若不复用，变量就随线程一齐GC了），未清理的值会一直存在，导致内存泄漏
            - 故使用后必手动清理：于 finally 中调用 myThreadLocal.remove();
            - ThreadLocalMap在ThreadLocal调用get()、set() 或 remove() 方法时，会自动清理已以被回收的V，以防止你想调用remove而调不了嘅情况
- 线程池
    - 优点
        - 资源：减少线程创建和销毁的开销，资源复用
        - 快速响应：空闲线程立刻，不需要等创建
        - 统一管理：控制并发线程数量；统一的任务调度和管理机制，便于监控和维护
        - 代码的可读性和可维护性：任务嘅创建与执行代码分离；毋需手动管理线程
    - Java 中的线程池实现（JUC包之Executor 框架）
        - Executor 框架的主要组件（接口）
            - `Executor` 接口
                - 概念：是一个顶级接口，定义了一个方法 execute(Runnable command)，用于提交任务以供执行。
                - 作用：提供任务执行的基本抽象。
            - `ExecutorService` 接口
                - 概念：扩展了 Executor 接口，添加了生命周期管理和任务提交的方法，如 shutdown()、submit()、invokeAll() 等。
                - 作用：提供了更丰富的线程池管理和任务调度功能。
            - `ScheduledExecutorService` 接口
                - 概念：扩展了 ExecutorService 接口，支持任务的定时和周期性执行。
        - 主要实现类
            - `ThreadPoolExecutor`：ExecutorService 的核心实现类，提供了可配置的线程池实现。如：（构造器默认）
                - corePoolSize：核心线程池大小。 例：2
                - maximumPoolSize：最大线程池大小。例：4
                - keepAliveTime：非核心线程的最大空闲时间。例：60
                - keepAliveTime单位。例：TimeUnit.SECONDS
                - workQueue：任务队列，用于存储等待执行的任务。例：new ArrayBlockingQueue<>(10)
                - threadFactory：用于创建新线程的工厂。例：Executors.defaultThreadFactory()
                - handler：任务拒绝策略。例：new ThreadPoolExecutor.AbortPolicy()
            - `ScheduledThreadPoolExecutor`：是 ScheduledExecutorService 的实现类，支持scheduled
        - 便捷工厂方法：以创建常见类型的线程池。位于 Executors 类。：
            - `ExecutorService fixedThreadPool = Executors.newFixedThreadPool(4);`：创建一个固定大小的线程池。
            - `ExecutorService cachedThreadPool = Executors.newCachedThreadPool();`：创建一个可缓存的线程池
            - `ExecutorService singleThreadExecutor = Executors.newSingleThreadExecutor();`：创建一个单线程的线程池
            - `ScheduledExecutorService scheduledThreadPool = Executors.newScheduledThreadPool(2);`：scheduled池
- Java内存模型和可见性问题
- 锁（线程锁（Thread Lock），乄分布式锁）
    - 锁的基础概念
        - 定义：控制多个线程访问共享资源的机制，防止并发访问引起的数据不一致。
    - 乐观锁乄悲观锁：锁的基本策略
        - 乐观锁（Optimistic Lock）
            - 定义：假设不会发生冲突，更新数据时才进行版本检查。适用于读多写少。
            - 实现方式：使用CAS（Compare And Swap）操作。（或者用版本号机制，也就是DB中多一个version字段，提交更新时读取判断是否版本和读取时一样，不一样就重试，一样再提交）
        - 悲观锁（Pessimistic Lock）
            - 定义：假设会发生冲突，每次访问数据时都会先加锁。适用于写多读少。
            - 实现方式：使用`ReentrantLock`或`synchronized`关键字。
    - 显式锁乄内置锁
    - 公平锁乄非公平锁（Fair Lock & Unfair Lock）：线程是否按照请求顺序获取
        - 公平锁：
            - 维护一个等待队列以等。避免线程饥饿问题。维护队列开销更大，吞吐量低。
            - `private final ReentrantLock lock = new ReentrantLock(true); // 创建一个公平锁`
        - 非公平锁
            - 无队，若锁空闲，请求的线程直接获得锁。
            - `private final ReentrantLock lock = new ReentrantLock(false); // 创建一个非公平锁`
    - 各类锁的实现的说明
        - 独占锁（Exclusive Lock），也称为互斥锁（Mutex Lock）
            - 定义：一次只允许一个线程访问的锁。
            - 实现方式：`ReentrantLock`、`synchronized`
        - 共享锁（Shared Lock）
            - 定义：一次允许多个线程并发访问的锁，适用于读操作。
            - 实现方式：`ReadWriteLock`中的`readLock`
        - 可重入锁（Reentrant Lock）
            - 定义：允许同一个线程在获取到锁之后再次获取该锁。，避免递归调用或嵌套锁定导致的死锁问题。
            - 实现方式：`ReentrantLock`、`synchronized`
            - 相反地，不可重入锁在同一线程多次获取锁时会导致死锁问题，因此通常不用于Java并发编程中。
                - 就是说，同一个线程锁完一个资源后调用了一个内层方法，内层方法也需要这个锁住的资源。可重入锁使得这个原本线程可以在内层函数继续使用这个资源；不可重入锁则让它内层函数被死锁。
        - 读写锁（ReadWriteLock）
            - 定义：分为读锁和写锁，读锁是共享锁，写锁是独占锁。
            - 实现方式：`ReentrantReadWriteLock`
        - 自旋锁（Spin Lock）
            - 定义：线程在尝试获取锁时不会立即阻塞，而是通过不断循环检查锁的状态。
            - （也就是忙等待 busy wait）
            - 优点：
                - 减少线程上下文切换的开销。
                - 提高系统性能（多核处理器上充分利用并行能力，而不是阻塞在等待队列）。
                - 减少资源争用（在高并发环境下，频繁的线程阻塞和唤醒会导致对操作系统资源的频繁争用）
                - 适用于特定的并发场景：自旋锁适用于锁持有时间非常短的场景，比如在多核处理器上，临界区的代码执行时间非常短。在这种情况下，自旋等待比阻塞等待（如通过操作系统的同步原语）更有效率。
            - 缺点：在高并发下会导致CPU资源浪费。
            - 适用于锁时间短
        - 高级锁机制 - StampedLock
            - 定义：提供三种模式的锁：写锁、悲观读锁和乐观读锁。
            - 实现方式：`StampedLock`
            - 不可重入！！！
            - `long stamp = lock.tryOptimisticRead();` 之后 检查 if `lock.validate(stamp)` 就能知道有没有过更改，如果读取期间没有更改，就成功乐观读，否则程序员手动降级它为悲观读锁 `stamp = lock.readLock(); `，确保读取的正确性
        - 无锁 - CAS操作（Compare And Swap）
            - 支持以底层的硬件指令，因此是无锁的，由硬件本身保证操作的原子性。 `compareAndSet(expectedValue, newValue)`
                - （但是 CAS 的大名里 S 指 Swap 而不是 Set，这个命名可能是用了硬件的传统？）
            - 它由硬件支持，而不通过操作系统的锁，所以是在用户态，因此开销更小
            - 涉及的三个值：内存位置（Memory Location）、预期值（Expected Value）、新值（New Value）
            - 优点：避免使用锁的开销，提高并发性能。
            - 缺点：可能会出现ABA问题。
                - 解决ABA问题：添加版本号，使成为 1A 2B 3A；JDK 1.5 开始引入 Atomic 包的 AtomicStampedReference 实现这个解决
                    - `AtomicStampedReference` 是一种带有版本戳的引用类型，除了保存对象的引用外，还保存一个整数“标记”（stamp），用于记录对象的版本。当进行CAS操作时，除了比较对象的引用，还会比较这个整数标记，从而避免ABA问题。
            - 实现方式：原子类（Atomic Classes），在 `java.util.concurrent.atomic`
                - 包含：AtomicInteger、AtomicLong、AtomicBoolean、AtomicReference
    - （总结Java常用的锁的写法）
        - ReentrantLock
        - synchronized
        - ReentrantReadWriteLock
        - StampedLock
        - CAS 操作如 AtomicInteger
        - CountDownLatch、CyclicBarrier、Semaphore、Exchanger：这些并发工具类也提供了同步的功能，但不总是以传统锁的形式出现。它们是高级同步工具，用于特定的并发控制场景。
    - 线程间通信和锁的结合
        - 使用`Condition`：提供线程间协调通信的方法，与ReentrantLock结合使用。
    - `synchronized` 锁优化机制
        - 优化机制
            - 偏向锁（Biased Locking）：用于减少没有竞争的情况下的同步开销。锁对象头（Mark Word）记录偏向线程 ID，后续相同线程获取锁时无需进行同步操作。
            - 轻量级锁（Lightweight Locking）：在存在竞争但竞争不激烈的情况下，使用 CAS 操作进行锁竞争。如果 CAS 成功，则锁升级为轻量级锁，否则升级为重量级锁。
            - 自旋锁（Spin Lock）：线程在短时间内不断尝试获取锁，而不是直接进入阻塞状态。适用于锁持有时间很短的情况。
            - 自适应自旋（Adaptive Spinning）：基于前一次自旋的结果动态调整自旋时间。自适应自旋能在一定程度上减少线程进入阻塞状态的频率，提高性能。
            - 锁消除（Lock Elimination）：JIT 编译期间，通过逃逸分析消除不必要的锁操作。这种优化并不会改变锁的状态，而是完全消除锁的存在。
            - 锁粗化（Lock Coarsening）：JVM 会将多个连续的锁操作合并为一个较大的锁操作，减少锁的获取和释放次数。
        - 升级顺序
            - 4种状态：无锁（No Lock） ➡️ 偏向锁（Biased Lock） ➡️ 轻量级锁（Lightweight Lock） ➡️ 重量级锁（Heavyweight Lock）
                - 锁可以从低级状态升级到高级状态，但不自动降级。
            - 无锁（No Lock）：初始状态，无需同步操作。
            - 偏向锁（Biased Lock）：当一个线程第一次获取锁时，如果没有竞争，锁会进入偏向锁状态。
            - 轻量级锁（Lightweight Lock）：当偏向锁被另一个线程尝试获取时，会撤销偏向锁，锁进入轻量级锁状态。
            - 重量级锁（Heavyweight Lock）：当轻量级锁的竞争变得激烈时，锁会升级为重量级锁。
                - 一旦升级为重量级锁，自旋锁和自适应自旋也可能用在此阶段以减少阻塞频率。
                - 重量级锁（也称为监视器锁，Monitor Lock）使用操作系统的 Mutex 实现，导致线程在获取锁失败时进入阻塞状态，由操作系统进行线程调度。这种锁开销较大，但保证了线程安全性。
    - 不是这里的线程锁：
        - 数据库的锁：
            - 间隙锁（Gap Lock）等锁是数据库里的锁，锁定索引种的间隙，防止幻读，详见DB
        - 数据结构：
            - 分段锁（Segmented Lock）。。。
    - 综合问题
        - **synchronized与Lock区别？**（灵活高级 vs 易用）（Lock 是接口，常用实现 ReentrantLock）
            - 线程阻塞和中断：synchronized线程在等待时无法中断，只可等释放；Lock提供可中断锁获取方式如`lock.lockInterruptibly()`
            - 锁的获取和释放：synchronized锁的获取和释放是隐式的，i.e.隐式锁（也称为监视器锁），由 JVM 自动管理；Lock：需要显式地获取和释放锁，必须在 finally 块中释放锁以确保锁的释放
            - 锁的公平性：synchronized不支持公平锁，锁的分配由 JVM 决定；Lock支持公平锁和非公平，ReentrantLock 构造函数传false则不公
            - 读写锁：只有Lock支持，ReentrantReadWriteLock，允许多个读线程同时访问，提高并发性能
            - 条件变量：synchronized：通过 wait()、notify() 和 notifyAll() 实现线程间通信。Lock：提供了 Condition 类，更灵活和强大的线程间通信机制。
            - 性能：synchronized：JVM 对 synchronized 进行了很多优化，性能已经非常好。Lock：在高并发场景下，Lock 提供的高级功能（如读写锁）可以提高性能。
- 并发集合：ConcurrentHashMap, CopyOnWriteArrayList等

# § Java各版本新特性

# § DB et MySql

- 数据库基础概念
    - 数据库（Database）定义
    - 数据库管理系统（DBMS）概念
    - SQL 与 NoSQL 的区别
    - 数据模型（层次模型、网状模型、关系模型）
- 关系型数据库
    - 特点与优点
    - 常见的关系型数据库（MySQL, PostgreSQL, etc.）
    - 一些概念
        - 依赖关系：α→β 即 α 决定 β
        - 候选键：是表中能够唯一标识一行数据的一个或多个属性的组合。在一个表中，可能存在多个候选键，每个候选键都是唯一的。
        - 主属性：是指数据库表中属于候选键（Candidate Key）的一部分的属性（字段）。
        - 主键：是从候选键中选择的一个，用于唯一标识表中的每一行
    - 数据库设计范式（第一范式, 第二范式, 第三范式）（递进关系）
        - 第一范式（1NF）：使每一列都是不可分的原子值。比如一列里既有固话又有手机号，就该分立
        - 第二范式（2NF）：消除非主属性对主码的部分依赖。比如一个表以 StuID CoursID 二者组成主键，其中有一列 StuName 只依赖于 StuID 而无关于 CoursID，这就不2NF，应该移到 Stu 表里去
        - 第三范式（3NF）：消除传递依赖。比如不能是主键 StuID 决定非主键 DeparmtID，而 DeparmtID 又决定了 DeparmtName 这一列，应该把 DeparmtName 拆到另表
            - **对每个函数依赖 α→β，（要么平凡），要么α是超键，要么β是主属性**
        - BCNF（Boyce-Codd Normal Form）：并且对于表中的每一个非平凡的函数依赖 X → Y，X 必须是一个候选键（Candidate Key）。
            - **F+里每个α→β，（要么平凡（β是α子集）），要么α是超键，（与3NF相比不允许仅仅β是主属性）**
            - 示例：（3NF但不BCNF的例子）
                - 假设，一个课程coursID只能由一个讲师tcherID讲，而一个讲师一个学期smstr只能教一门课。
                - 候选键：{tcherID, smstr} {coursID, smstr}
                - 关系：
                    - coursID -> tcherID 
                        - 满足3NF因为tcherID是主属性
                        - 不满足BDNF因为coursID不是超键
                    - {tcherID, smstr} -> coursID
                        - 满足3NF和BCNF因为{tcherID, smstr}是超键
                - BCNF化：拆成两个表，
                    - CourseInstructor记录一个coursID唯一对应一个tcherID，coursID做主键
                    - InstructorSemester：记录讲师每学期的唯一授课是哪节，联合主键是 tcherID 和 smstr
        - `第四范式`か`4NF`：没有多值依赖
            - 可以选择多门课程和多个兴趣，则会出现多值依赖。为了满足 4NF，应将这个表分解成两个独立的表，一个记录学生和课程的关系，另一个记录学生和兴趣的关系。
        - `第五范式`か`5NF`：无“lossless joins”
            - 示例：假设有一个表 ProjectAssignments，其中记录了 EmployeeID、ProjectID 和 TaskID，并且有可能一个员工在多个项目上做多项任务。5NF 要求将这个表分解为更小的表，以便每个表只表达一个关系，并避免冗余。
        - 实际很少用到 4NF 5NF，因为3NF BCNF 足够合理，有效减少数据冗余和提高数据完整性。
            - 数据冗余：多次不必要地存相同信息
                - 来由：比如非主属性只依赖候选键的一部分（比如成绩表，候选键是学生ID与课程ID，则学生名字一字段冗余）（拆成别个表呗）
                - 导致问题：使用更大空间、增删改异常（多个地方须同时改动）、降低查询性能
            - 数据完整性：准确性、可靠性
                - 来由：比如非主属性相互依赖，更新时只更新了一部分，数据会不一致；BCNF进一步避免了主属性依赖于非超键的情况
                - 导致问题：增删改异常
        - 观察到 2NF 3NF 都提到了**主属性**，直观理解：
            - 主属性已经是定义记录唯一性的一部分，它与其他主属性之间的关系不太会导致冗余或不一致性。故特殊。
    - 事务（Transaction）与事务日志（Transaction Log）
    - 数据完整性与约束（主键、外键、唯一性约束）
- SQL语句
    - 的编写
    - 优化
    - 常见SQL语句（SELECT、INSERT、UPDATE、DELETE）
    - 关系代数
        - 基本运算
            - 选择（Selection, σ）：从关系中筛选出满足给定条件的元组（行）。
            - 投影（Projection, π）：从关系中选取指定的属性（列），去除重复的元组。
            - 连接（Join, ⋈）：将两个关系的元组按某些条件结合起来。
                - **内连接** `INNER JOIN`：只返回两表皆有之记录。
                    - MySQL 之 `JOIN` 默认 `INNER JOIN`
                    - 例：
                        - `SELECT 员s.号 员s.名, 员s.龄, 部s.名 AS 部_名`
                        - `FROM 员s`
                        - `INNER JOIN 部s ON 员s.部_号 = 部s.号;`
                        - 则无部之人、无人之部不见
                - **左连接** `LEFT JOIN`（左外连接（Left Outer Join））：允许左留而右空
                    - 例：则可见无部之人
                - **右连接** `RIGHT JOIN`：同理
                - **全连接**（全外连接（Full Outer Join））：左右都可空也
                    - MySQL 不直接支持 FULL OUTER JOIN，可以通过 UNION 实现：`...... LEFT JOIN ...... UNION ...... RIGHT JOIN ......;`
                - **自然连接** `NATURAL JOIN`：自动把列名作为 JOIN ON 之条件，内连接。
                    - `SELECT * FROM table1 NATURAL JOIN table2;`
            - 并（Union, ∪）：合并两个关系的所有元组，结果关系包含两个关系中的所有元组（去重）。
            - 差（Difference, -）：从一个关系中去除存在于另一个关系中的元组。
            - 笛卡尔积（Cartesian Product, ×）：返回两个关系中所有元组的组合。
        - 组合运算
            - （见前述）自然连接（Natural Join, ⋈）：连接操作的一种特殊形式，基于两个关系中所有具有相同名字的属性自动进行连接。
                - 自然连接会自动识别并使用两个关系中所有具有相同名字的属性进行连接，而不需要显式指定连接条件。因此，自然连接可以看作是对连接运算的一种组合或简化。
            - 交（Intersection, ∩）：返回两个关系中都存在的元组。
                - 交运算可以通过基本的选择和并运算来实现，属于组合运算。
            - 除（Division, ÷）：从一个关系中选择出与另一个关系中的所有元组匹配的元组。
                - 除运算通常需要借助多个基本运算（如投影、笛卡尔积、差等）来实现，因此被归类为组合运算。
    - SELECT 语句执行流程
        - 解析（Parsing）
            - 词法分析：生成Token
            - 语法分析（Syntax Analysis）：确保符合SQL标准语法规则
        - 预处理（Preprocessing）：
            - 验证对象：检查 SELECT、FROM 的名字是否存在、有权
            - 语义检查：语句逻辑
        - 查询优化（Query Optimization）：生成查询树/图，查询优化器（Query Optimizer）生成多个查询计划，选择最优
            - 这一选择通常基于成本估算（如 I/O 操作、CPU 使用、网络延迟等）。
        - 执行计划（Execution Plan）：执行，其中应用索引
        - 数据检索（Data Retrieval）：读取数据，用 WHERE 过滤
        - 数据处理（Data Processing）：
            - 分组GROUP BY
            - 聚合函数（如 SUM、COUNT 等）
            - 排序ORDER BY
        - 结果集生成（Result Set Generation）
            - 投影：到SELECT指定的列
            - 去重：如果用了DISTINCT
        - 结果返回（Result Return） 
- 事务管理
    - 事务的基本概念
        - 事务定义
        - 事务的ACID特性
    - 数据库的事务隔离级别
        - 未提交读（Read Uncommitted）
        - 已提交读（Read Committed）
        - 可重复读（Repeatable Read）
        - 串行化（Serializable）
    - **MVCC，多版本并发控制（Multiversion Concurrency Control）**
        - 允许多个事务在数据库中同时执行不相冲突。MVCC通过保存数据的多个版本来实现这一点。
        - 基本理解：保存老版本，使得读写并发时，读操作可以读老版本，而不是正在写的新版本，于是读不会被写阻塞：提高并发性能，避免锁的开销，但导致读到的不一定最新。
        - 两种读的方式对比
            - `快照读 (Snapshot Read)`：不被写操作阻塞。返回的不是正在写的最新版本，而是之前的版本，不受之后写操作影响
                - 例如：普通 SELECT 语句不显式加锁时
            - `当前读 (Current Read)`被写操作阻塞。确保数据最新。
                - 例如：SELECT ... FOR UPDATE 和 SELECT ... LOCK IN SHARE MODE 会显式加锁
        - MVCC具体实现涉及的三大组件
            - `三个隐式字段`：
                - 事务ID（Transaction ID）：`trx_id`，创建或更新该数据行的事务ID
                - 回滚指针（Rollback Pointer）：`roll_pointer`，指向Undo日志中的上一个版本，用于实现数据的回滚和多版本控制
                - 删除标志（Delete Flag）：标识数据行是否已被删除，但实际上并不会立即从数据库中移除
            - `Undo日志`：用于记录对数据行的每一次修改（插入、更新、删除）的前一个版本
            - `Read View（读视图）`：在快照读中，为事务提供一个一致性的快照，使在读操作期间，看到的数据不受其他事务的影响。
                - 含以下信息：
                    - 活跃事务列表：创建Read View时正在活跃的所有事务ID。这些事务的修改对当前事务不可见
                    - 最小活跃事务ID（`min_trx_id`）：活跃事务列表中最小的事务ID，表示在创建Read View时最早开始的活跃事务。
                    - 最大事务ID（`max_trx_id`）：创建Read View时系统分配的下一个事务ID，表示所有ID小于此值的事务在Read View创建时已经存在。
                - 判断是否可见：
                    - 数据版本的事务ID 小于 `min_trx_id`：创建视图时已提交，故可见
                    - 数据版本的事务ID 大于等于 `max_trx_id`：视图创建后才开始的事务，不可见
                    - 数据版本的事务ID 介于 `min_trx_id` 和 `max_trx_id` 之间：需要检查是否在活跃事务列表，在则尚未提交，不可见；不在则已经提交，可见
                        - （例如，一个事务 minID + 2可能在`min_trx_id`之后创建，但是 minID 的事务运行时间比较久，而此时 minID+2 可能已经提交了，故不在活跃事务列表中）
        - 具体运行过程：每次查询，先筛选出来需要的数据行，然后再逐一检查对此读操作的可见性
    - 并发控制中的锁机制
        - 行锁（Row Lock）
        - 表锁（Table Lock）
        - 间隙锁（Gap Lock）
        - 意向锁（Intention Lock）
- 索引
    - 作用
    - 类型
        - 主键索引（Primary Index）：通过 PRIMARY KEY 关键字定义，用于唯一标识表中的每一行
        - 二级索引（Secondary Index）：通过 INDEX 或 KEY 关键字定义，用于在非主键列上创建索引，提高查询性能。
        - 唯一索引（Unique Index）：通过 UNIQUE 关键字定义，确保索引列中的值是唯一的。
        - 全文索引（Fulltext Index）：通过 FULLTEXT 关键字定义，用于加速对文本数据的搜索。
- 索引结构
    - 分类：
        - B树索引/B+树索引（笔记见下一节）
        - Hash索引：使用哈希函数将键映射到对应的值，适用于等值查询。Memory引擎（HEAP引擎）支持Hash索引，但不支持范围查询。
        - Full-Text（全文）索引：用于快速查找文本数据中的关键词，支持全文搜索功能。MySQL的InnoDB和MyISAM引擎都支持全文索引。
            - MySQL 会进行文本解析（tokenize、stopWords、词长）、倒排索引（Inverted Index）、TF-IDF以提供相关性评分
        - R-树（R-Tree）索引：适用于多维空间数据，如地理信息系统中的二维或三维数据。通常用于范围查询和近邻查询。
        - Bitmap索引：使用位图来表示数据，适用于数据分布相对较少、查询条件复杂的情况。常见于数据仓库和OLAP（联机分析处理）系统中。
        - GiST（Generalized Search Tree）索引
        - SP-GiST（Space-Partitioned Generalized Search Tree）索引
        - Trie（前缀树）索引
        - Inverted（倒排）索引
    - MySQL各引擎与索引结构
        - InnoDB 支持的索引
            - B+树索引：聚簇索引（Clustered Index）（顺序与主键相同，包含整行数据）、辅助索引（Secondary Index）（存储索引列和主键的组合）
            - 自适应哈希索引（Adaptive Hash Index, AHI）：InnoDB有一个自适应哈希索引机制，可以自动创建哈希索引来加速某些频繁访问的查询。这个哈希索引是由InnoDB引擎根据需要动态创建的，不是用户手动创建的。
            - 全文索引（Full-Text Index）：InnoDB支持全文索引，用于加速文本字段中的关键词搜索。这适用于较大文本字段的搜索操作，如MATCH和AGAINST查询。
                - MyISAM引擎在早期版本中对全文索引的支持更好，但从MySQL 5.6开始，InnoDB也增加了对全文索引的支持。
                - InnoDB 会将全文索引数据存储在其内部数据结构中，并通过事务机制来保证索引的一致性和可靠性。
            - 空间索引（Spatial Index）：InnoDB也支持空间索引，但支持是有限的。在较早的版本中，空间索引主要是MyISAM引擎的特性。但从MySQL 5.7开始，InnoDB也支持空间索引，这些索引用于GIS（地理信息系统）应用中的空间数据查询。
        - MyISAM 支持的索引
            - B+树索引：主键索引和辅助索引
            - 全文索引（Full-Text Index）
                - MyISAM 会将全文索引数据存储在专用的索引文件中，并使用 MyISAM 表的锁机制来管理并发访问。
            - 空间索引（Spatial Index）
        - Memory 引擎（也称为 HEAP 引擎），支持Hash 索引（等值查询，非常快速）和BTREE 索引（范围查询和顺序查询）
        - NDB Cluster 引擎：Hash 索引、BTREE 索引
    - 不同索引结构对一些操作的支持
        - 模糊查询：Hash索引无法模糊查询，因为只能用完整的键进行精确匹配；B+树索引支持一部分模糊查询，它不支持通配符在开头的模糊查询 `LIKE '%value'` ，但如果通配符在后面是支持的  `LIKE 'value%'` ，因为有序，可以匹配前缀
        - 多列索引的最左前缀匹配：Hash索引同样不支持因为必须完整的键：B+树索引支持，如果有一个复合索引 (a, b, c)，可以使用这个索引来查询 (a)、(a, b)、(a, b, c) 的组合。
- B树和B+树（常用索引结构）
    - 通用概念：
        - 阶：所有结点的孩子个数的最大值称为阶。通常用m表示
        - 终端结点（但是很多地方直接叫他叶子节点）：最后一排具有关键字的结点。
        - 叶子结点（常用性存疑）：也叫失败结点，没有任何信息的一排结点。 
    - B树
        - 也叫作多路平衡查找树、B-树。
        - 定义：
            - 每个结点最多有m棵子树。
            - 具有k个子树的非叶结点包含k -1个键。
            - 每个非叶子结点（除了根）具有至少 **⌈m/2⌉子树** ，即最少有 **⌈ m/2⌉-1个关键字** 。
            - 如果**根不是终端结点，则根结点至少有一个关键字**，即至少有2棵子树。【根的关键字取值范围是[1，m-1]，子树的取值范围是[2,m]】
            - 所有叶子结点都出现在同一水平，没有任何信息（高度一致）。【带有关键字那个叫做终端结点】
    - B+树
        - B+树是应数据库所需要而出现的一种B树的变形树。
        - 定义：
            - 每个结点最多有m棵子树。
            - 如果**根不是终端结点，则根结点至少有一个关键字**，即至少有2棵子树。【根的关键字取值范围是[1，m-1]】
            - **每个关键字对应一棵子树（与B树的不同）**，具有k个子树的非叶结点包含k 个键。
            - 每个非叶子结点（除了根）具有至少 **⌈ m/2⌉子树** ，即最少有 **⌈m/2⌉个关键字** 。
            - 终端结点包含全部关键字及相应记录的指针，叶结点中将关键字按大小顺序排序，并且相邻叶结点按大小顺序相互链接起来。
            - 所有分支结点（可以视为索引的索引）中仅包含他的各个子节点（即下一级的索引块）中关键字最大值，及指向其子结点的指针。
        - 特点（尤其是对比B树）
            - 多路性（Multi-way）：而非二叉
                - 高扇出（High Fan-out）：每个节点可以包含多个子节点（并且比B树更多）
                    - 也因此树高更低（与二叉树相比）
                    - 也因此拆分和合并的频率更低
            - 平衡：所有叶子节点都在同一层次，节点通过分裂或合并保持平衡
            - 所有数据存储在叶子节点
                - 内部节点不存数据，所以在遍历内部节点时内存可存更多节点，减IO
                - 也因此插入删除只需改叶子节点而更少重组内部节点，影响的节点数也更少，减复杂度和IO
            - 高效的范围查询：叶子节点通过链表相连
                - 因为B+树在叶子节点里面是顺序遍历，而B树想范围扫描的话要不停切换节点中序遍历，属于随机访问，磁盘等介质的顺序访问性能远高于随机访问。
            - 磁盘友好：啲特点适合磁盘
            - 对于锁定和并发访问的优势：
                - 内部节点只供导航，不存数据，故减少了锁定需求，大部分操作在叶子节点即可完成
                - 操作叶子节点时，只需要锁定相关叶节点和相邻节点，不需要锁定树，减少锁定范围
                - 范围操作时，可以按链表顺序锁定，避免来回跳转复杂锁定
                - 乐观并发控制：由于叶子节点是线性排列的，可以采用乐观并发控制策略，即先读取节点数据，在进行实际修改之前检查数据是否发生变化，如果没有变化则进行修改，从而减少锁定时间。
- MySQL
    - 引擎
        - InnoDB：适用于需要事务支持、高并发和外键约束的应用，是大多数应用的默认选择。
            - 使用 B+ 树作为索引数据结构
        - MyISAM：适用于读多写少的应用，如数据仓库和日志存储。
            - 使用 B+ 树作为索引数据结构
        - MEMORY：适用于需要快速访问的临时数据，如会话管理和缓存。
        - NDB：适用于需要高可用性和高扩展性的分布式应用。
        - ARCHIVE：适用于归档和长期存储不频繁访问的数据。
        - CSV：适用于数据交换和与外部系统的数据导入导出。
        - BLACKHOLE：适用于日志过滤和数据流控制。
        - Federated：适用于分布式数据库访问和跨数据库查询。
- 数据库性能优化
    - 查询优化：索引的使用与优化、查询语句的优化
    - 数据库设计优化：表的规范化与反规范化、分区表（Partitioned Table）
    - 硬件优化：存储设备、内存和CPU
    - 数据库参数配置：缓存大小、并发连接数
    - 负载均衡与集群：主从复制（Master-Slave Replication）、读写分离、数据库集群（如 MySQL Cluster）
- 数据库安全性
    - 用户权限管理
    - 数据加密：传输加密（SSL/TLS）、存储加密
    - 审计与监控：审计日志、监控工具（如 Prometheus, Grafana）
- 数据库备份与恢复
    - 备份策略：全量备份、增量备份、差异备份
    - 恢复策略：恢复流程、恢复测试
- MongoDB
    - 基本概念
        - ：开源的NoSQL文档数据库。以JSON样式的BSON（Binary JSON）格式存储数据。
        - 优势：灵活的文档模型。丰富的查询和聚合能力。高可扩展性和高性能。
        - 文档存储模型
            - MongoDB 以BSON（Binary JSON）格式存储文档数据，文档是MongoDB的基本存储单元。
            - BSON 结构使得MongoDB能够灵活存储复杂数据结构，支持嵌套文档和数组。
    - 核心概念
        - 数据库（Database）数据库是 MongoDB 中的命名空间，用于存储集合。
        - 集合（Collection）集合类似于关系数据库中的表，存储一组文档。
        - 文档（Document）集合中的数据实体，以BSON格式存储。
        - 字段（Field）文档中的数据属性，相当于关系数据库中的列。
    - 操作
        - 数据库操作：创建数据库、删除数据库、查看数据库。
        - 集合操作：创建集合、删除集合、查看集合。
        - 文档操作：增、删、改、查文档。
    - 查询
        - 基本查询
            - 条件查询：find、findOne。
            - 投影查询：指定返回的字段。
        - 高级查询
            - 正则表达式查询。
            - 数组查询和嵌套文档查询。
        - 聚合查询
            - 聚合管道（Aggregation Pipeline）：`$match`、`$group`、`$sort`等。
    - 索引
        - 索引通过B+树结构实现，支持高效的数据检索和排序。
        - 索引类型
            - 单字段索引、复合索引。
            - 多键索引、全文索引。
        - 索引管理
            - 创建索引、删除索引、查看索引。
        - 索引优化
            - 使用覆盖查询。
            - 分析和优化慢查询。
    - 分布式架构
        - 副本集（Replica Set）
            - 提供高可用性和数据冗余。副本集由一个主节点（primary）和多个从节点（secondary）组成。
        - 分片（Sharding）
            - 水平分片，提升可扩展性。
            - 分片键的选择和分片策略。
    - 性能优化
        - 查询优化：使用合适的索引。优化查询语句。
        - 写入优化：批量插入和更新。使用合适的写入模式。
        - 集群管理：监控和管理副本集和分片集群。
    - WiredTiger 存储引擎
        - 默认存储引擎，自MongoDB 3.2版本起成为默认存储引擎。
        - 支持压缩、文档级并发控制和写入日志。
- ElasticSearch
    - 基本概念
        - ：开源的分布式搜索和分析引擎。用于全文搜索、结构化搜索、分析和日志处理。
        - 优势：全文、实时、分布式
        - 倒排索引（Inverted Index）
            - ElasticSearch 使用倒排索引来实现全文搜索。倒排索引将文档中的每个词映射到包含该词的文档列表。
            - 通过倒排索引，ElasticSearch 可以快速定位包含特定词语的文档，实现高效的全文搜索。
            - 同时也使用了 B+ 树和 BKD 树等其他数据结构来优化特定类型的查询，如数值范围查询和地理空间查询
    - 核心概念
        - 索引（Index）：索引类似于关系数据库中的数据库，包含了相关的数据集合。
        - 类型（Type）：索引中的数据分类，ElasticSearch 7.0 之后已废弃。
        - 文档（Document）：索引中的数据实体，相当于关系数据库中的行。
        - 字段（Field）：文档中的数据属性，相当于关系数据库中的列。
        - 映射（Mapping）：定义文档及其字段的结构和数据类型。
    - 操作
        - 索引操作：创建索引、删除索引、查看索引。
        - 文档操作：增、删、改、查文档。
        - 搜索操作
            - 基础查询：match, term, range 等。
            - 复合查询：bool, must, should, must_not。
            - 聚合查询：bucket 聚合、metric 聚合。
    - 分布式架构
        - 节点（Node）：ElasticSearch 集群中的一个实例。
        - 集群（Cluster）：由一个或多个节点组成的集群。
        - 分片（Shard）：数据分片，用于提高索引和搜索的性能。
        - 副本（Replica）：分片的副本，用于高可用性和故障恢复。
    - 性能优化
        - 索引优化：分片和副本配置。索引模板和别名。
        - 查询优化：使用过滤器缓存。减少复杂查询和嵌套查询。
        - 集群管理：节点和集群监控。分片再平衡和故障恢复。
    - Lucene 库：底层存储
        - ElasticSearch 基于Apache Lucene库构建，Lucene提供了高效的文本索引和搜索功能。
        - 每个分片实际上是一个Lucene索引，ElasticSearch在此基础上实现了分布式和高可用特性。

# § 缓存 et Redis

- 基本概念
    - **Redis 單線程但係快嘅原因**
        - （一般多线程之用于一些后台操作，而整体以单线程为主）
        - （完全基于内存操作；高效的数据结构；单线程模型避免线程切换和锁；非阻塞 I/O 和事件驱动机制；优化的内存管理；高效的网络协议）
        - （基于内存，高效数据结构，合理线程模型，（虚拟内存机制已废弃））
        - 基于内存的数据存储：内存访问快
        - 高效的数据结构：针对不同的使用场景进行了优化，如跳表（Skip List）用于有序集合，能够快速执行范围查询和插入
        - 单线程模型：避免上下文切换和竞争条件；
        - 高效 I/O 机制：利用I/O多路复用技术（如epoll），非阻塞 I/O 和事件驱动机制：能够高效地处理大量并发连接
            - I/O多路复用技术是操作系统用于同时监视多个I/O流的机制，使得一个单独的线程或进程可以高效地处理多个I/O操作
                - epoll是Linux内核提供的一种高级I/O多路复用机制，用于处理大量文件描述符
            - 非阻塞I/O是在进行I/O操作时，调用不会阻塞进程或线程，而是立即返回结果。
            - Redis 的事件循环持续运行并检查是否有事件需要处理，当有事件发生时，调用相应的事件处理函数；；用I/O多路复用技术（如epoll）来监听多个文件描述符的事件，高效地处理大量连接
        - 内存管理：使用内存池和对象共享机制来管理内存，减少了内存碎片和分配/释放的开销
            - 内存池：Redis预先分配一块大的内存池，减少频繁的内存分配和释放带来的开销。
            - 对象共享：对于常用的小对象（如整数），Redis会进行对象共享，避免重复创建相同的对象。
        - 数据分片（Sharding），将数据和请求分布到多个节点上，减少单节点的压力，提高整体的处理能力
        - 高效网络协议：使用的是一种简单、快速的基于 TCP 的协议，称为 RESP（REdis Serialization Protocol）
- 支持的数据结构
    - 字符串（String）、哈希（Hash）、列表（List）、集合（Set）、有序集合（Sorted Set）、位图（Bitmap）、HyperLogLog、Geospatial 索引、Streams。
    - 字符串（String）
        - 基本操作：GET、SET、INCR、DECR、APPEND、STRLEN
    - 哈希（Hash）
        - 基本操作：HGET、HSET、HGETALL、HDEL
    - 列表（List）
        - 基本操作：LPUSH、RPUSH、LPOP、RPOP、LRANGE
    - 集合（Set）
        - 基本操作：SADD、SREM、SMEMBERS、SINTER
    - 有序集合（Sorted Set）
        - 基本操作：ZADD、ZREM、ZRANGE、ZRANK
    - 位图（Bitmap）
        - 基本操作：SETBIT、GETBIT、BITCOUNT
    - HyperLogLog
        - 基本操作：PFADD、PFCOUNT、PFMERGE
    - Geospatial 索引
        - 基本操作：GEOADD、GEODIST、GEORADIUS、GEORADIUSBYMEMBER
    - Streams
        - 基本操作：XADD、XREAD、XGROUP、XACK
- Redis 各使用場景
    - **緩存**
        - 为什么使用缓存：提高数据访问速度、减轻数据库压力。
        - 常见缓存策略：LRU（Least Recently Used）、LFU（Least Frequently Used）、TTL（Time To Live）。
        - **穿透、擊穿、雪崩**（緩存三兄弟）（三者嘅邏輯：冇key，單key，群key。皆大量请求直入DB之乱）
            - **緩存穿透**：查詢**不存在**之數據。因而查不到，不寫入緩存，每次皆查DB而慢。
                - 解方一：緩存空數據。優：簡單。缺：佔內存；可能不一致。
                - 解方二：布隆過濾器（Bloom Filter）。緩存預熱時先預Bloom；來請求先Bloom，存在纔可查Redis。
                    - 優：少佔內存，冇多餘key。缺：實現複雜，存在誤判。
                    - 原理：。位圖（bitmap）。N個hash函數，每id使這N位爲1，唔得則判其不存。
                    - 布隆過濾器實現方案：Redisson、Guava
            - **緩存擊穿**：某個key設咗過期時間，到期時恰好此key來大量併發請求，瞬間壓垮DB。
                - 解方一：互斥鎖。只一請求可進且更新redis，他請求退避
                    - 強一致，性能差（鎖需要等，亦可能死鎖）。
                - 解方二：邏輯過期。設過期時間字段，請求則返回之，程序知其過期，而不直刪於redis；另開一線程同步數據
                    - 高可用，性能優；不保證一致。
            - **緩存雪崩**：大量key同時失效，或者redis服務器宕機，導致大量請求DB
                - 解方一：給不同key之TTL加隨機值。（如1-5分，時間分散開）
                - 解方二：利用Redis集羣提高可用性。哨兵模式、集羣模式。
                - 解方三：給緩存業務添加降級限流策略。nginx或spring cloud gateway。
                    - **降級**可以做爲系統嘅保底策略，通用於此三兄弟
                - 解方四：添加多級緩存。Grava或Caffeine。
    - **分佈式鎖**
        - Redis 分布式锁实现方式：SETNX、EXPIRE、DEL。
        - **setnx**
        - **redisson**
    - **消息隊列**（何種數據類型）
        - 使用 Redis 实现简单的消息队列：LPUSH、RPOP。
        - Redis 的 Pub/Sub 功能：PUBLISH、SUBSCRIBE。
    - **計數器** 
        - 使用 INCR 和 DECR 实现计数器功能。
    - **保存token**（何種數據類型）
    - **延遲隊列**（何種數據類型）
- **一致性**（双写一致性）：DB改Redis亦要改，保一致
    - （&**插入数据如何确保redis和数据库同步**）
    - 分场景：对一致性要求高，或，允许延迟一致
    - 读操作：命中则返，未则查DB写入缓存设TTL
    - 写操作：
        - 强（一致性要求高）
            - （不强一致但常讨论 ）延迟双删
                - 即先删缓存，再改DB，再延时删缓存。
                    - 避有线程读完老数被挂起而在改DB后往Redis写老数（脏数据 ）
                    - 同时亦留时间畀DB从结点更新 
                - 控制风险，但只控制一部份
            - 同步锁
                - 用 redisson 的读写锁 
        - 终（允许延迟一致）
            - MQ 异步通知：item-service 写入DB后发消息畀cache-service写Redis
                - 需要MQ可靠性
            - Ali Canal 异步通知：基于 MySQL 主从同步实现，canal 伪装成 DB 从结点监听 binlog，并畀 cache-service 通知数据变更情况
                - 好處：对业务代码几乎零侵入
                - 二进制日志（BINLOG）记录咗所有DDL（数据定义语言）语句和DML（数据操纵语言）语句，但不包括查询（SELECT, SHOW ）
                - 用于允许短暂延时  
- Redis **持久化**
    - **RDB（Redis Database）**
        - RDB 快照生成和恢复。
        - RDB 的优缺点。
    - **AOF（Append Only File）**
        - AOF 记录日志和重写机制。
        - AOF 的优缺点。
    - 混合持久化
        - RDB 和 AOF 的结合使用。
- **數據過期、淘汰策略**
- Redis 高可用（主从-哨兵-集群是递进关系，一步步添加组部）
    - **主从复制（Master-Slave Replication）**
        - 基本原理：主节点（Master）同步数据到从节点（Slave）。
        - 主从复制的配置。
    - **哨兵模式（Sentinel）**
        - 基本概念和工作机制：监控主节点和从节点，自动故障转移。
        - 哨兵的配置和管理。
    - **集群模式（Cluster）**
        - 基本概念：分片（sharding）、节点（node）。
        - 数据分布和一致性哈希。
        - 集群的配置和管理。
- Redis 性能优化
    - 内存优化
        - 数据压缩、内存回收。
        - 合理使用数据结构和对象编码。
    - 性能优化
        - 使用 Pipeline 技术。
        - 合理设置最大内存和淘汰策略。
    - 集群扩展
        - 水平扩展、垂直扩展。
        - 分片和负载均衡。
- Redis 安全性
    - 权限控制：设置密码、用户认证。
    - 数据加密：使用 SSL/TLS 加密数据传输。
    - 访问控制：配置防火墙规则，限制访问源 IP。
- **事務**
- 相关资料
    - 有意思的动画讲解视频 https://www.bilibili.com/video/BV1Fd4y1T7pD

# § 框架 et Spring et MyBatis

- Spring 系列介绍及Spring框架基本
    - 核心概念：IoC、AOP、MVC
    - Spring 启动过程
        - 创建 Spring 应用上下文（ApplicationContext）
            - ApplicationContext 是 Spring IoC 容器的核心接口，负责 Bean 的创建和管理。常见的实现包括 ClassPathXmlApplicationContext、FileSystemXmlApplicationContext 和 AnnotationConfigApplicationContext。
        - 读取和解析配置文件
            - 配置文件可以是 XML 文件、Java 配置类或注解配置。Spring 通过配置文件确定需要创建的 Bean 以及它们的依赖关系。
            - 如果是Spring Boot，会自动加载application.properties或application.yml等配置文件。Spring Boot通过@EnableAutoConfiguration注解启用自动配置，这些配置类会根据当前类路径中的依赖和外部配置，自动配置相应的Bean。
        - BeanDefinition 注册
            - Spring 解析配置文件后，会将 Bean 的配置信息封装成 BeanDefinition 对象，并注册到 BeanDefinitionRegistry 中。BeanDefinition 包含了 Bean 的类名、作用域（scope）、构造函数参数、属性依赖等信息。
        - `BeanFactoryPostProcessor`执行：BeanFactoryPostProcessor接口的实现类会在Bean实例化之前修改Bean的定义信息，例如PropertyPlaceholderConfigurer用于处理占位符配置。
        - 对单例 Bean 们：
            - 实例化单例 Bean：
                - Spring 容器在启动过程中会实例化所有非延迟加载（非 @Lazy 注解）的单例（singleton）Bean。
            - 依赖注入：
                - Spring 容器在实例化 Bean 时会进行依赖注入。包括通过构造函数注入、Setter 方法注入或字段注入，将依赖的 Bean 注入到目标 Bean 中。
            - 初始化单例 Bean：
                - 在依赖注入完成后，Spring 容器会调用 @PostConstruct 注解的方法或实现 InitializingBean 接口的 afterPropertiesSet 方法进行 Bean 的初始化。
        - AOP代理创建：如果有定义AOP切面（例如@Aspect），Spring会为这些切面创建代理对象。AOP主要用于实现横切关注点（例如日志记录、事务管理）。
        - 发布容器事件：
            - Spring 容器在启动和运行过程中会发布一些事件，例如 ContextRefreshedEvent、ContextStartedEvent、ContextStoppedEvent 和 ContextClosedEvent。应用程序可以通过实现 ApplicationListener 接口来监听这些事件。
        - 容器以外嘅步骤
            - 启动嵌入式服务器（对于Spring Boot应用）：如果使用的是Spring Boot，且定义了Web应用，Spring Boot会启动一个嵌入式服务器（例如Tomcat、Jetty或Undertow），并将应用程序部署到这个服务器上。
            - 处理Servlet容器初始化（对于Web应用）：Spring会初始化Servlet容器（例如DispatcherServlet），并注册相应的Servlet、过滤器和监听器。
            - 初始化Spring MVC组件（对于Web应用）：如果应用程序使用Spring MVC，Spring会初始化相关组件，例如：DispatcherServlet：中央调度Servlet，处理所有请求。HandlerMapping：将请求映射到处理器。HandlerAdapter：适配处理器。ViewResolver：解析视图。
            - 启动Spring Security（如果有配置）：如果应用程序使用Spring Security，Spring会初始化安全配置，注册相应的过滤器链，处理认证和授权。
            - 注册监控和度量（如果有配置）：如果应用程序使用Spring Boot Actuator，Spring会注册监控和度量的端点，例如健康检查、度量指标等。
    - 核心模块之 Spring Core, Spring IOC & 核心功能之 依赖注入、IOC容器
        - Spring IOC 启动
            - Spring容器启动时，默认（即无@Lazy者）把所有单例（singleton）Bean都完成初始化
            - `BeanFactory`：Spring 的核心接口之一，定义了 Bean 容器的基本功能，负责创建和管理 Bean 的生命周期。
            - `ApplicationContext`：BeanFactory 的扩展，Spring IoC容器的核心接口，提供了更多高级功能，如国际化支持、事件传播、应用生命周期管理等。
                - 例如`SpringApplication.run(StudlingApplication.class, args);`即会创建并返回一个 `ConfigurableApplicationContext` 对象
                - Spring启动时，会创建并初始化ApplicationContext（例如ClassPathXmlApplicationContext、AnnotationConfigApplicationContext）
                    - Bean定义解析：ApplicationContext会解析配置文件或注解，读取bean的定义和依赖关系，并将这些信息存储在一个内部数据结构（通常是一个Map）中
                    - Bean实例化：当ApplicationContext被初始化时，Spring会根据bean的定义创建bean实例
            - 对比：`FactoryBean`：用于创建复杂 Bean 的工厂接口，允许用户定制 Bean 的创建逻辑。
        - Bean：Spring IOC 容器管理的对象称为 Bean。
            - Bean 线程安全问题
                - **单例的bean是线程安全的吗？**： 不是
                    - 单例即默认嘅 `@Scope("singleton")` ，多例用 prototype
            - Bean 的生命周期：从实例化到销毁的整个过程。
                - **实例化**：创建 Bean 实例。
                - **属性注入**：设置 Bean 的属性。（包括其依赖之其他Bean）
                - **初始化**：执行 Bean 的初始化方法。
                    - 调用 @PostConstruct 方法或实现 InitializingBean 接口的 afterPropertiesSet 方法。
                - （使用过程）
                - **销毁**：执行 Bean 的销毁方法。
                - 构造函数 ➡️ 依赖注入 ➡️ Aware 接口 ➡️ BeanPostProcessor#before ➡️ 初始化方法 ➡️ BeanPostProcessor#after ➡️ 销毁bean
                - Bean 的生命周期回调：InitializingBean 和 DisposableBean 接口，以及 @PostConstruct 和 @PreDestroy 注解，用于在 Bean 的生命周期中执行特定的初始化和销毁逻辑。
            - Bean 的配置方式
                - **XML 配置**：在 XML 文件中定义 Bean。
                - **注解配置**：使用注解定义 Bean（如 @Component、@Service、@Repository、@Controller）。
                - **Java 配置**：使用 Java 配置类定义 Bean（@Configuration 和 @Bean）。
            - `依赖注入（Dependency Injection）`机制
                - **构造函数注入**：通过构造函数注入依赖。（构造函数上标@Autowired）
                - **Setter 方法注入**：通过 Setter 方法注入依赖。（setter上标@Autowired）
                - **字段注入**：（目前被作为不推荐，难以进行单元测试）直接在字段上使用 @Autowired 注解进行注入。
            - **Bean循环引用**（循环依赖）
                - 解决以：三级缓存
                    - 三级（singletonFactories），对象工厂，即早期引用
                    - 二级（earlySingletonObject），早期bean对象，生命周期未走完
                    - 一级（singletonObjects），单例，已经经历完生命周期、初始化完成
                - 解决以：构造函数上引用写 `@Lazy` 进行懒加载，即 `public A(@Lazy B b) { ... }`
            - 延迟加载（Lazy Loading）：用 `@Lazy` 注解标记的 Bean，会在第一次被注入或访问时才进行实例化和初始化。
                - 反概念：一般皆 即时加载（Eager Loading）
            - **Bean 的作用域**
                - 定义如 `@Scope("singleton")`
                - 分类
                    - `singleton`：IOC每次返回同一个Bean实例
                    - `prototype`：IOC每次返回新的Bean实例
                    - `request`（不常用）：仅对HTTP请求有效，每次HTTP请求创建新Bean
                    - `session`：同一个session（HTTP 会话）共享一个Bean实例
                    - `globalSession`（不常用）：所有session共享一个Bean
                    - `application`（不常用）：整个Web应用范围共享Bean
                    - `websocket`（不常用）：WebSocket 作用域，每个 WebSocket 会话一个实例。
                        - WebSocket会话在持续连接和实时通信方面优于HTTP会话
    - 核心模块之 Spring AOP & 核心功能之 面向切面编程（Aspect-Oriented Programming, AOP）
        - AOP 常见场景：日志、缓存处理、spring内置事务
    - 核心模块之 Spring Transaction & 核心功能之 事务管理（Transaction Management）
        - 事务本质用AOP实现
        - **事务失效嘅场景有：** 
            - 捕获异常而未抛出；
            - 抛出了检查（checked）异常；
            - 方法非public
        - **事务扩散规则**
    - 核心模块之 Spring JDBC, Spring ORM & 核心功能之 数据访问框架（Data Access Framework）
    - 核心模块之 Spring Web, Spring Web MVC & 核心功能之 MVC 框架
    - 常见注解
        - 在类上以实例化Bean：@Component 通用，@Controller 控制器层，@Service 服务层，@Repository 持久层
        - 注入：@Autowired：自动注入 Bean，@Qualifier：指定具体的 Bean 名称进行注入，@Primary：标记优先注入的 Bean，@Value：注入配置文件中的属性值。
        - @Scope 作用域
        - @Configuration：配置类嚟㗎。创建容器时从该类加载注解
        - @Bean：用于方法，方法返回值存到Spring容器
        - @ComponentScan：指定Spring容器初始化时扫描嘅包
        - @Import：使用其导入嘅类会加入容器
        - AOP：@Aspect, @Before, @After, @Around, @Pointcut
- SpringMVC
    - ：SpringMVC 是 Spring 的一部分，一个基于 Servlet 的 WEB 框架
    - 基本概念：模型-视图-控制器（MVC）架构
        - **模型（Model）**：负责数据的存储和业务逻辑处理。
            - 通常包括数据访问对象（DAO）和业务逻辑层（Service）。
        - **视图（View）**：负责数据的呈现。
            - 通常是HTML、CSS和JavaScript文件。
            - 在传统的服务器端渲染（例如JSP、Thymeleaf）中，视图也会包含模板引擎。
        - **控制器（Controller）**：负责处理用户请求，并协调Model和View。
            - 接收用户输入，调用Model更新数据，并选择适当的View来展示结果。
    - 关键组件
        - **前端控制器（DispatcherServlet）**：前端控制器，负责请求的接收和分发。
        - **处理器映射（HandlerMapping）**：处理器映射，用于将请求映射到具体的处理器。
        - **处理器适配器（HandlerAdapter）**：调用具体的处理器方法。
        - **处理器（Controller）**：处理请求的核心组件。
            - 其实Controller系**Handler**嘅一种最常用嘅实现，以处理HTTP请求
        - ModelAndView：封装模型数据和视图名称的对象。
        - **视图解析器（ViewResolver）**：视图解析器，用于将视图名称解析为具体的视图。
        - **视图（View）**：渲染模型数据，生成响应。
    - 工作流程
        - 1️⃣ 用户请求 -> 👑️DispatcherServlet -> HandlerMapping --(Controller & HandlerAdapter)--> 👑️DispatcherServlet
        - 2️⃣ 👑️DispatcherServlet -> HandlerAdapter -> Controller --(ModelAndView)--> HandlerAdapter -> 👑️DispatcherServlet
        - ⛔️对于前后端分离，止焉：Controller 直接返回 JSON 数据而非 ModelAndView。JSON数据直接畀前端。
        - 3️⃣ 👑️DispatcherServlet -> ViewResolver --(View)--> 👑️DispatcherServlet
        - 4️⃣ 👑️DispatcherServlet --(View を渲染)--> HTML响应 -> 用户
            - DispatcherServlet将模型数据传递给视图对象，由视图对象渲染最终的HTML响应。
    - Spring MVC 常见注解
        - 控制器：@RestController = @Controller + @ResponseBody
            - @ResponseBody：将方法的返回值直接作为 HTTP 响应体返回。
        - @RequestMapping：用与方法，映射 HTTP 请求到处理方法；用于类上，则表示所有方法以此父路径
            - 特定HTTP方法快捷方式：@GetMapping、@PostMapping、@PutMapping、@DeleteMapping、@PatchMapping
            - 例如：UserController 类上写 @RestController @RequestMapping("/users")，然后get方法 @GetMapping("/{id}") public User getUserById(@PathVariable Long id)
        - 请求参数绑定：
            - @RequestParam 请求参数，
            - @PathVariable 从请求路径获取变量（/user/{id}）
            - @RequestBody 请求体中的JSON数据
            - @RequestHeader 请求头数据
- SpringBoot
    - ：基于 Spring 框架的一个子项目，旨在简化 Spring 应用程序的创建、配置和部署。
    - 基本概念
        - 自动配置（Auto Configuration）：根据项目的依赖和配置，自动配置 Spring 应用程序。
        - 起步依赖（Starter Dependency）：一组预定义的依赖集合，简化项目依赖管理。
        - 独立运行（Standalone Application）：Spring Boot 应用可以打包成可执行 JAR 文件，独立运行。
        - 嵌入式服务器（Embedded Server）：内置的 Tomcat、Jetty 或 Undertow 服务器，无需外部服务器环境。
    - **SpringBoot 自动配置（Auto-Configuration）原理**
        - `@SpringBootApplication`中包含3个注解
            - `@SpringBootConfiguration`：与`@Configuration`注解作用相同，以声明此类为配置类
            - `@ComponentScan`：组件扫描，默认扫当前引导类所在包及其子包
            - `@EnableAutoConfiguration`：SpringBoot实现自动配置嘅核心注解
        - 其中嘅`@EnableAutoConfiguration`：
            - 是实现自动配置嘅核心注解，通过`@Import`注解导入对应的配置选择器。内部就是读取了该项目和该项目引用的Jar包的classpath路径下`META-INF/spring.factories`文件中的所配置的类的全类名。在这些配置类中所定义的Bean会根据条件注解所指定的条件来决定是否需要将其导入到Spring容器中。
            - 条件判断会有像`@ContitionalOnClass`这样的注解，判断是否有对应的class文件，如果有则加载该类，把这个配置类的所有的Bean放入Spring容器中使用。
            - 底层原理：其中最主要有注解 `@Import({AutoConfigurationImportSelector.class})`（导入该类进Spring容器。导入嘅系自动配置嘅选择器，其中加载`META-INF/spring.factories`文件。）
            - `META-INF/spring.factories`：
                - 底层原理：其中包含很多类，都以AutoConfiguration结尾（如Cache..., RabbitMQ..., Aop..., Redis...），皆自动配置类也。每个呢种自动配置类有 `@ContitionalOnClass`注解，如`@ContitionalOnClass({RedisOperations.class})`，就系你导入此嘢（如Redis）嘅启动依赖时会有此class（字节码）。此自动配置类负责创建此配置嘅Bean（如 redisTemplate）。
        - （意义：SpringBoot最核心个思想。通过分析应用的类路径、定义的Beans和各种配置属性，自动配置Spring应用程序以合理的默认值运行。开发者可以专注于业务逻辑，而无需编写大量的配置代码。）（自动配置Web服务器、数据源等。）
        - 与传统 Spring 对比：
            - 1. 创建Maven项目并添加依赖：Spring要添加更多依赖（Spring核心依赖、Spring JDBC依赖、Spring ORM依赖、数据库驱动等），而 Spring Boot 已包含其中好多常用嘅（spring-boot-starter简化了依赖管理）
            - 2. 定义Spring配置类：Spring 要在@Configuration配置类显示定义配置各种，如数据源、实体管理器工厂和事务管理器等等；SB只需要定义Spring Boot主类，并在 `application.properties` 中进行简单配置
            - 3. 创建实体类：两者一样
            - 4. 配置Spring上下文：传统Spring需要手动初始化上下文，SB不须
                - Spring: `ApplicationContext context = new AnnotationConfigApplicationContext(AppConfig.class);`
            - 总之：依赖管理と配置过程
    - 自动装配（Auto-Wiring）
        - 自动装配原理：基于条件注解（@Conditional），根据存在的类、属性、方法等条件，自动装配相应的 Bean。
        - 实现
            - @Autowired 标记需要自动装配嘅Bean
            - @ComponentScan 用于指定Spring扫描的包，以自动发现和注册带有@Component、@Service、@Repository和@Controller等注解的Bean
                - 对立概念：@Bean通常用于配置类（带有@Configuration注解的类）中，用于定义那些无法通过自动扫描注解创建的Bean，或者需要更多自定义逻辑的Bean。
        - 常见自动装配注解
            - @SpringBootApplication：组合注解，包含 @SpringBootConfiguration、@EnableAutoConfiguration、@ComponentScan。
            - @EnableAutoConfiguration：启用 Spring Boot 自动配置。
            - @ConditionalOnClass：当类路径上存在指定类时，进行自动配置。
            - @ConditionalOnMissingBean：当上下文中没有指定的 Bean 时，进行自动配置。
    - Spring Boot 装配
        - 依赖注入（Dependency Injection）：@Autowired：自动注入 Bean。@Qualifier：指定具体的 Bean 进行注入。@Primary：标记优先注入的 Bean。
        - 配置文件（application.properties 或 application.yml）
            - 常用配置项（server.port、spring.datasource、logging.level 等）。
            - 配置文件分环境管理（如 application-dev.properties）。
    - 常见注解
        - @SpringBootApplication：组合注解，包含 @SpringBootConfiguration、@EnableAutoConfiguration、@ComponentScan。
        - @SpringBootConfiguration：封装了 @Configuration 的配置类
        - @EnableAutoConfiguration：打开自动配置的功能，也可以关闭某嘅自动配置嘅选项
        - @ComponentScan Spring 组件扫描
- MyBatis
    - 执行流程
    - 延迟加载
    - 一二级缓存
        - 一级，作用域系 session
        - 二级，作用域系 namespace 与 mapper
    - MyBatis与Hibernate的区别
    - MyBatis 如何进行分页
    - MyBatis Plus
        - CRUD 快捷方法：提供了丰富的 CRUD 方法，如 insert、update、delete、selectById、selectList 等，减少了编写 SQL 语句的工作量。
            - 也就是说这些基本的代码不用手写
        - 条件构造器：提供了 QueryWrapper 和 UpdateWrapper 等类，简化了条件查询和更新的构造。
            - 就是形如 `queryWrapper.eq("name", "Alice").gt("age", 20);` `updateWrapper.eq("name", "Alice").lt("age", 25).set("name", "Alice Smith");`
        - 分页插件：内置分页插件，方便进行分页查询。
        - 代码生成器：提供代码生成器，可以自动生成 Mapper、实体类和 Service 等代码。
            - 是一个单独的工具，而不是运行组件，也就是说应该用它生成基本代码然后自己改

# § 微服 et 分布式 et SpringCloud

- 高并发系统常见的三大策略：限流、缓存、熔断
- SpringCloud
    - （地位：呢啲功能好多都可以让 Kubernetes 或者 Kubernetes+服务网格 嚟实现。云原生、容器化之背景下，Spring Cloud 本身地位尴尬。）
    - ：提供了一整套分布式系统的解决方案。简化了微服务的开发、配置和部署。
    - 5大组件：（祝君远断关）
        - **服务注册与发现**：**Eureka**、Consul、Zookeeper
            - 替代：Nacos
        - **负载均衡**：**Ribbon**
            - Ribbon 嘅各种负载均衡策略
        - **远程调用**：**Feign**
            - Feign 是一个声明式的 HTTP 客户端。
        - **服务熔断与降级**：**Hystrix**
        - **API 网关**：**Zuul**、**Spring Cloud Gateway**
    - 其他组件：
        - 配置管理：Spring Cloud Config
        - 分布式追踪：
            - Spring Cloud Sleuth。与 Zipkin 的集成。
        - 消息驱动：
            - Spring Cloud Stream。与消息中间件（如 Kafka、RabbitMQ）的集成。
        - 分布式任务调度：Spring Cloud Task
        - Spring Cloud 安全：Spring Cloud Security
    - 具体理解一个用呢啲组件嘅项目：
        - eureka-server 同 gateway-service 作为单独嘅子目录，而其他3个（ribbon, feign, hystrix）不需要
            - 仲有 config-service/ 同 common/ 两个系公共嘅，其他子目录系各个微服务
    - 服务雪崩系咩，点算？
        - 啥：一个服务故障，使依赖佢嘅服务皆故障
        - 抓：
            - Hystix  服务熔断降级（解决）
                - 服务降级：提供备用嘅fallback响应
                - 服务熔断：暂时使唔可响应，一段时间后尝试允许一次请求，唔可则继续
            - 限流（预防）：防止突发流量导致系统崩溃
    - 监控
        - skywalking; Prometheus + Grafana; Springboot-admin; Zipkin
        - skywalking: 链路追踪，分布式追踪
        - Prometheus + Grafana: 时间序列数据的监控和可视化
    - 实战
        - 构建微服务架构
        - 微服务治理：服务监控和日志管理。服务的容错和恢复。
        - 性能优化：缓存的使用。性能监控和调优。
    - 常见问题与解决方案
        - 服务注册失败。：服务注册重试机制。
        - 配置中心连接异常。：配置中心高可用配置。
        - 服务调用超时。：调整 Hystrix 超时配置。
- 业务相关
    - 限流
        - 限流的必要性：突发流量；恶意刷接口
        - 实现方式：
            - Tomcat：可设置最大连接数
            - Nginx，漏桶算法（Leaky Bucket Algorithm）
                - 漏桶以固定速率漏出（处理）请求，而超出桶容量嘅请求被抛弃（或等待）
                - 适用于：需要严格控制流量速率的场景，如网络传输速率控制。
            - 网关，令牌桶算法（Token Bucket Algorithm）
                - 桶容量固定，其中固定速率生成令牌，请求取到令牌方可处理，否则抛弃（或等待）
                - 特点：（令牌数量固定时）允许一定的突发流量（受令牌生成速率约束），更灵活，但实现较复杂
                - 适用于：需要既控制流量速率又允许突发流量的场景，如API请求限流。
                - 相关知识：Nginx服务器作为第一关（进行初步的限流、负载均衡等），API网关作为第二关（进行身份验证、授权、限流、熔断等），微服务系第三层（业务逻辑）
                    - Nginx以漏桶限流整体，网关以令牌桶给不同服务限流
            - 自定义拦截器
        - Nginx和网关限流实现
    - 分布式事务
        - 分布式事务理论：
            - CAP定理
                - ：分布式系统有呢三个指标，而无法同时满足：
                    - Consistency（一致性）：每节点一致
                    - Availability（可用性）：访问健康节点应得响应而非超时或拒绝
                    - Partition tolerance （分区容错性）：Partition（分区）指系统嘅一部份与其他失去网络连接而独立；分区容错指出现分区时仍提供服务
                - 分布式节点以网络连接，故一定有分区（P），有P时CA无法同时满足
            - BASE理论
                - BASE理论是对CAP的一种解决思路，包含三个思想：
                    - Basically Available （基本可用）：分布式系统在出现故障时，允许损失部分可用性，即保证核心可用。
                    - Soft State（软状态）：在一定时间内，允许出现中间状态，比如临时的不一致状态。
                    - Eventually Consistent（最终一致性）：虽然无法保证强一致性，但是在软状态结束后，最终达到数据一致。
            - 解决分布式事务的思想和模型：
                - 最终一致思想：各分支事务分别执行并提交，如果有不一致的情况，再想办法恢复数据（AP）
                    - 最终一致性的实现：
                        - 异步复制：更改先应用在一个节点，再复制出去
                        - 冲突检测和解决：
                            - 常见方法：
                                - 最后写入者胜出（Last Write Wins, LWW）：
                                - 向量时钟（Vector Clock）：追踪每个节点的更新历史，合并冲突的数据。
                                - 应用层解决：让应用层代码根据业务逻辑来解决冲突。
                        - 背景同步和修复：系统会定期在后台进行数据同步和修复
                            - 反熵算法（Anti-Entropy）：节点之间定期比较数据并进行同步，纠正不一致的部分。
                            - 读修复（Read Repair）：在读取数据时，如果发现不一致，会主动进行修复。
                        - 基于事件的架构：
                            - 通过发布和订阅模式，确保所有节点接收到相同的事件，并按照相同的顺序处理事件。
                    - 实例分析
                        - Amazon DynamoDB：异步复制+向量时钟+反熵算法
                        - Apache Cassandra：异步复制+时间戳（最后写入者胜出（LWW））+读修复
                - 强一致思想：各分支事务执行完业务不要提交，等待彼此结果。而后统一提交或回滚（CP）
        - 分布式事务框架：
            - Seata（包括XA、AT、TCC模式）
            - MQ分布式事务
    - 保证一致性的常见方法
        - 两阶段提交（2PC）：一种强一致性协议，通过协调器协调多个参与者的事务提交，确保所有参与者都达成一致。
        - 分布式锁：使用分布式锁（如Redis、Zookeeper）来控制对共享资源的并发访问。
        - 事件溯源（Event Sourcing）：通过记录所有改变状态的事件来重现系统的当前状态。
        - 最终一致性：系统允许临时的不一致，最终达到一致性，常见于AP类型系统。
    - 分布式服务接口`幂等性（Idempotence）`：（重复调用不应影响系统状态）（再调无妨）
        - 幂等性设计的必要性及
        - 实现方式：
            - 数据库唯一索引：数据库约束（`UNIQUE`），防止重复插入
            - Token+Redis：“幂等性键（Idempotency Key）”，服务端查询Redis中若已有此Token则说明已被处理，直接返回结果
            - 分布式锁：（如使用Redis或Zookeeper实现）
    - 分布式任务调度：支持任务的分片、重试和故障转移
        - XXL-Job的使用
            - 路由策略
            - 任务执行失败的解决方案
            - 大数据量任务的处理方式
    - 消息中间件：RabbitMQ、Kafka
- 分布式会话（session）管理
    - 可以通过：数据库、缓存、粘性会话（Sticky Sessions）（就是会话固定于一个节点，在负载均衡器（如 NGINX、HAProxy、Spring Cloud Ribbon）中配置）、共享文件系统、基于JWT令牌的无状态会话

# § 消息中件 et RabbitMQ et al

- 基本概念
    - 消息中间件是一种用于在分布式系统中实现消息传递的中间件。
    - 异步通信、解耦、削峰填谷、可靠性传输等功能。
- MQ 如何保证消息顺序消费
- 常见的：RabbitMQ、Kafka、RocketMQ、ActiveMQ
- 消息模型
    - 点对点（Point-to-Point）模型
        - 消息生产者（Producer）和消息消费者（Consumer）。
        - 消息队列（Queue）的概念。
        - 消费者拉取消息的方式。
    - 发布/订阅（Publish/Subscribe）模型
        - 消息发布者（Publisher）和消息订阅者（Subscriber）。
        - 主题（Topic）的概念。
        - 消息的多播和广播。
- 消息传递方式
    - 同步消息传递：生产者发送消息后等待消费者确认。
    - 异步消息传递：生产者发送消息后立即返回，不等待消费者确认。
- 消息保证机制
    - 消息持久化：持久化消息存储在磁盘中，保证消息不丢失。
    - 消息确认机制：消费者接收到消息后，发送确认（ACK）给消息中间件。
    - 消息重发机制：消息中间件未收到确认时，重新发送消息。
    - 死信队列（Dead Letter Queue, DLQ）：用于存储无法被正常消费的消息（如消息被拒绝、处理失败、TTL超时等）。等待进行人工干预或特殊处理。
- 消息顺序消费：保证消息按照生产的顺序被消费。
    - RabbitMQ：通过绑定一个消费者到一个队列，确保消息顺序消费。多个队列下的顺序消费需要业务逻辑处理。
        - 在RabbitMQ中，单个队列中的消息是有序的
        - 单队列单消费者模型，性能受限
    - RocketMQ：通过顺序消息（Orderly Message）模式，确保消息按照生产顺序被消费。
        - 内置的顺序消息支持，通过消息队列选择器（MessageQueueSelector）保证分区内顺序，适合高并发场景
        - 当生产者发送消息时，使用MessageQueueSelector接口选择一个合适的消息队列。通过顺序键（Order Key），MessageQueueSelector可以确保相同顺序键的消息被路由到同一个队列，从而保持顺序。
        - RocketMQ的消费者有两种消费模式：并发消费（Concurrently）和顺序消费（Orderly）。在顺序消费模式下，消费者会按照消息在队列中的顺序进行处理。
    - Kafka：通过分区（Partition）和有序的日志（Log）来保证分区内的消息顺序。使用相同的Key确保同一分区的顺序消费。
- 高可用性：主从复制、故障转移、集群
- 消息中间件的性能优化
    - 消息批处理：批量发送和接收消息，提高吞吐量。
    - 压缩：消息内容压缩，减少传输数据量。
    - 流控：控制消息生产和消费的速率，防止系统过载。
- 使用场景：异步处理、系统解耦、日志收集、实时监控、分布式事务。。。
- 消息中间件的常见问题与解决方案
    - 消息丢失
        - 使用消息持久化和确认机制
    - 消息重复（重复消费）
        - 幂等性设计
    - 消息积压：消息队列积压，导致延迟增加
        - 提高消费者的消费能力，进行流控。
    - 消息顺序消费：如何保证消息顺序消费
    - 死信队列（DLQ）：如何处理无法正常消费的消息
- RabbitMQ
    - 消息不丢失
        - 生产者确认机制：确保消息成功发送到消息中间件并得到确认。
        - 消息持久化：确保消息在队列中的存储是持久的，防止数据丢失。
        - 消费者确认机制：消费者处理完消息后向中间件确认，确保消息被成功处理​​。
    - 消息重复消费
        - 使用唯一ID和幂等机制：每条消息设置唯一ID，通过分布式锁或数据库锁确保幂等性，防止消息重复处理​​。
    - 高可用机制
        - RabbitMQ：普通集群、镜像集群和仲裁队列来实现高可用​​。
        - Kafka：通过集群模式和分区备份机制实现高可用，多个broker实例提供服务，保证系统容错性​​。
    - 消息堆积
        - 当生产速度超过消费速度时，队列中的消息会堆积，RabbitMQ提供了惰性队列、增加消费者等解决方案​​。
    - 延迟队列
        - 使用死信交换机和TTL（生存时间）实现延迟消费，用于处理超时订单、限时优惠等场景​​。
    - 死信队列
        - 当消息无法被正常消费时，进入死信队列，以便后续处理​​。
    - RabbitMQ 五种工作模式
        - **简单队列（Simple Queue）**就是生产者消费者一对一；**工作队列（Work Queue）**就是一对多负载均衡；**发布/订阅（Publish/Subscribe）**就是多了一个属性叫交换机（Exchange），生产者们可以通过交换机名这个属性来使得只有订阅这个交换机的消费者收到消息；**路由（Routing）**就是在交换机下面又有多了个属性叫路由键（Routing Key），以做简单的分级，比如说severity的不同，使得订阅此交换机此分级的消费者才会处理；**主题（Topic）**模式就是在交换机下面多了个属性叫主题（Topic），消费者可以用通配符来匹配交换机的主题
        - 如何指定工作模式
            - 在 Spring AMQP 中，交换器类型通过以下类来指定：（指定3种有交换器的类型）
                - DirectExchange：用于路由模式（Routing Mode）
                - FanoutExchange：用于发布/订阅模式（Publish/Subscribe Mode）
                - TopicExchange：用于主题模式（Topic Mode）
                - HeadersExchange：基于消息头部进行路由
            - 简单队列、工作队列用不到交换机，你把消费者启动多个实例就成了工作队列，否则就是简单队列
- Kafka
    - 消息不丢失
    - 消息重复消费
    - 高可用机制
        - Kafka：通过集群模式和分区备份机制实现高可用，多个broker实例提供服务，保证系统容错性​​。
    - 高性能设计
        - 通过消息分区、顺序读写、页缓存、零拷贝、消息压缩和分批发送等技术提升性能​​。
    - 数据储存和清理
        - 采用分段存储结构和日志清理机制，根据消息保留时间或存储大小进行数据清理，提高磁盘利用率和查找效率​​。

# § 测试 et Mockito

- JUnit 单元测试框架

Mockito，生成模拟的对象。

```java
@BeforeMethod
void setUp() {
    pass;
}

@Test
public void testSomething() {
    // mock()

    // when().thenReturn()

    // doAnswer().when(someClass).someMethod()

    // als-Args-gegeben-zu-werdende Methoden:
    // eq(); any();


    // loe assertEquals()
    assertEquals(thing1, thing2);

    SomeException throwable =
        expectThrows(SomeException.class, () -> service.get(id));
    assertEquals(throwable.getStatus(), HttpStatus.NOT_FOUND);


    // loe verify() de Mockito
    // it's used to verify interaction's times, order, arg, etc.
    // 能验证的只能是 mock 的对象
    verify(someObj, times(1))
        .someMethod(eq(
            someThingInner
        ));
    verify(someObj, never()).someMethod(any());
}


```

# § 他具 id-al labor-instrum

（此章节充满了先GenAI时代的古老学生不借助好教材时自学内容之难处）

- Maven或Gradle的使用
- Git的常用命令和工作流程

`BATIS` is a persistence framework which automates the mapping between SQL databases and objects in Java, .NET, and Ruby on Rails. In Java, the objects are POJOs (Plain Old Java Objects).

MyBatis

In software engineering, a p`lain old Java object (POJO)` is an ordinary Java object, not bound by any special restriction.

`JPA` 全称是 Java Persistence API，jpa 定义了各种注解（用来定义实体，映射关系）。JPA 仅仅是一个规范，它的实现比较出名的是 Hibernate。JPA 的函数定义方式

`Protocol Buffers`（简称：`ProtoBuf`）是一种序列化数据结构的协议。对于透过管道(pipeline)或存储资料进行通信的程序开发上是很有用的。这个方法包含一个接口描述语言，描述一些数据结构，并提供程序工具根据这些描述产生代码，用于将这些数据结构产生或解析资料流。

**：Java 及 JDK 版本**

Java8 发布于 2014，带来很多重要功能。近年 LTS 版本有 Java17 Java21 Java22。

Oracle JDK 自 Java 11 开始改变了授权协议，对于商业用途需要付费。但是，社区提供了多个开源的 Java 发行版本，如 AdoptOpenJDK（现在称为 Adoptium）、OpenJDK、Amazon Corretto 等，这些版本仍然可以免费商用。这意味着企业和开发者可以选择使用这些开源发行版而不需要支付许可费用。

**：IntelliJ IDEA IDE**

用免费版（CE）差唔多足够运行我嘅 maven 管理嘅 Spring Boot 项目？

**：Gradle**

Java 之 Gradle (et al.), Node.js 之 npm，Python 之 pip，皆包管理工具。

**：Maven**

`Apache Maven` ist ein auf Java basierendes Build-Management-Tool der Apache Software Foundation, mit dem insbesondere die Erstellung von Java-Programmen standardisiert verwaltet und durchgeführt werden kann.

- Maven versucht, den Grundgedanken „Konvention vor Konfiguration“ (englisch _Convention over Configuration_) konsequent für den gesamten Zyklus der Softwareerstellung abzubilden. Dabei sollen Softwareentwickler von der Anlage eines Softwareprojekts über das Kompilieren, Testen und Verpacken bis zum Verteilen der Software so unterstützt werden, dass möglichst viele Schritte automatisiert werden können. Folgt man dabei den von Maven vorgegebenen Standards, braucht man für die meisten Aufgaben des Build-Managements nur sehr wenige Konfigurationseinstellungen vorzunehmen, um den Lebenszyklus eines Softwareprojekts abzubilden.

**：Spring**

[A Comparison Between Spring and Spring Boot - Baeldung](https://www.baeldung.com/spring-vs-spring-boot)

> What Is Spring?
> 
> Simply put, the Spring framework provides comprehensive infrastructure support for developing Java applications.
> 
> It's packed with some nice features like Dependency Injection, and out of the box modules like:
>
> - Spring JDBC
> - Spring MVC
> - Spring Security
> - Spring AOP
> - Spring ORM
> - Spring Test
> 
> These modules can drastically reduce the development time of an application.

为 java 开发提供基础设施支持，有依赖注入等特性以及很多方便的模块

> 我们一般说 Spring 框架指的都是 Spring Framework，它是很多模块的集合，使用这些模块可以很方便地协助我们进行开发，比如说 Spring 支持 IoC（Inversion of Control:控制反转） 和 AOP(Aspect-Oriented Programming:面向切面编程)、可以很方便地对数据库进行访问、可以很方便地集成第三方组件（电子邮件，任务，调度，缓存等等）、对单元测试支持比较好、支持 RESTful Java 应用程序的开发。

**即 Spring 框架提供了 IoC、AOP 的支持以及许多其他模块，协助开发**

- IoC（控制反转，Inversion of Control）是一种理念，而 DI（依赖注入，Dependency Injection）是实现 IoC 的一种具体方法。
    - IoC，反转了传统的程序控制流程，控制权转移给框架或容器
        - 框架管理应用程序的组件及其依赖关系，应用程序各个部分不再负责自己的依赖项的创建和管理
    - DI，指将组件的依赖关系注入（传递）给组件
        - 具体方式：
            - 构造函数注入
            - 方法参数注入：在方法的参数上使用 `@Autowired` 注解。适合：依赖项只用于此方法而不是整个组件
            - 属性注入：在组件的属性上写注解 `@Autowired` 或 `@Resource`。要注意确保依赖项已注入，以防空指针异常
            - setter：可以给想注入的依赖项写个 `@Autowired public void setMyDependency(MyDependency myDependency) { this.myDependency = myDependency; }`

**：：Spring IoC Container**

[5. The IoC container - Spring.io](https://docs.spring.io/spring-framework/docs/3.2.x/spring-framework-reference/html/beans.html)

> IoC is also known as dependency injection (DI).
>
> -- [Spring.io](https://docs.spring.io/spring-framework/docs/3.2.x/spring-framework-reference/html/beans.html)

[IoC容器 - 廖雪峰](https://www.liaoxuefeng.com/wiki/1252599548343744/1266265100383840)

> Spring的核心就是提供了一个IoC容器，它可以管理所有轻量级的JavaBean组件，提供的底层服务包括组件的生命周期管理、配置和组装服务、AOP支持，以及建立在AOP基础上的声明式事务服务等。

Spring IoC container 管理的对象（还是说组件？）称为 Bean

**：Spring Boot**

Spring Boot 是 Spring 的扩展，方便了开发、测试和部署。

- 有人说，四大组件分别是：starter， autoconfigure, CLI 以及actuator
- 消除了 XML 配置，而是用注解
    - 传统的 Spring 应用使用大量 XML 配置文件来定义 Bean、依赖关系、应用程序的行为
    - 约定优于配置（Convention over Configuration）
- Starter依赖项： Starter依赖项是预配置的依赖项集，用于快速添加特定功能，例如Web应用程序、数据库连接、消息队列等。通过添加Starter依赖项，您可以一键式地集成各种功能，而不必手动配置。
    - 也可以自定义 starter
- Autoconfigure（自动配置）：
    - > autoconfigure在我们的开发中并不会被感知，因为它是存在与我们的starter中的。所以我们的每个starter都是依赖autoconfigure的
    - > autocinfigure是starter体现出来的能力的代码实现
- CLI 是其命令行工具
- actuator 是其监视管理模块
- Spring Boot 内置 Web 服务器，默认使用 Tomcat，也可用 Jetty 或 Undertow 等

> Spring Boot is basically an extension of the Spring framework, which eliminates the boilerplate configurations required for setting up a Spring application.
> 
> It takes an opinionated view of the Spring platform, which paves the way for a faster and more efficient development ecosystem.
> 
> Here are just a few of the features in Spring Boot:
> 
> - Opinionated ‘starter' dependencies to simplify the build and application configuration
> - Embedded server to avoid complexity in application deployment
> - Metrics, Health check, and externalized configuration
> - Automatic config for Spring functionality – whenever possible

某开发实践

- entity 层：同 model 层，存放实体类，属性值同于数据库，提供 get、set
- dao 层（数据访问层）（后端用嘅数据）：即 mapper 层，对数据库进行持久化操作，他的方法是针对数据库操作的，基本用到的就是增删改查。它只是个接口，只有方法名字，具体实现在 mapper.xml 中。（可以写 SQL 语句的一些部分）
- service 层（业务逻辑层）（后端用嘅方法）：业务层，存放业务逻辑处理，不直接对数据库进行操作，有接口和接口实现类，提供 controller 层调用的方法。（里面的东西还是后端的类型。）
- controller 层（表示层）（前端用嘅方法）：控制器层，导入 service 层，调用 service 方法，controller 通过接收前端传过来的参数进行业务操作，在返回一个指定的路径或者数据表。（里面的东西转成前端的 request、response 等类型）
  总结：具体的一个项目中有：controller 层调用了 Service 层的方法，Service 层调用 Dao 层的方法，其中调用的参数是使用 Entity 层进行传递的。

简单理解其作用，可以帮我们把繁杂的那堆 http 请求自动解析、读取，转化为程序（比如在 controller 层）具体需要的信息。

[可能是最漂亮的 Spring 事务管理详解](https://blog.csdn.net/qq_34337272/article/details/80394121)

在 Spring4.x 中增加了新的特性：如果类只提供了一个带参数的构造方法，则不需要对对其内部的属性写 @Autowired 注解，Spring 会自动为你注入属性。

**：：@Transactional**

By default, Spring only roll back transactions for unchecked exceptions.

**：Spring Cloud**

在 Spring Boot 基础上集合了一系列框架，主要服务于微服务架构的软件的开发。

> Spring Cloud 是什么
> 
> - Spring Cloud是一系列框架的有序集合。它利用Spring Boot的开发便利性巧妙地简化了分布式系统基础设施的开发，如服务发现注册、配置中心、智能路由、消息总线、负载均衡、断路器、数据监控等，都可以用Spring Boot的开发风格做到一键启动和部署。
> - Spring Cloud并没有重复制造轮子，它只是将各家公司开发的比较成熟、经得起实际考验的服务框架组合起来，通过Spring Boot风格进行再封装屏蔽掉了复杂的配置和实现原理，最终给开发者留出了一套简单易懂、易部署和易维护的分布式系统开发工具包。

**：OpenAPI**

```java
// org.openapitools.codegen.languages.SpringCodegen
```

[OpenAPI Generator](https://github.com/OpenAPITools/openapi-generator)

# § 计算机网络

# § 操作系统

# § 计组

# § 安全

# § 设计：系统设计 et 设计模式 et 其他架构设计

- ¶ 设计模式
    - （非设计模式：）简单工厂：一个工厂类负责创建各手机，但添加新手机需要改工厂代码
    - 创造
        - 工厂方法：一个工厂类负责创建一种手机，添加新手机只需添加新嘅工厂类，实现同一工厂接口
        - 抽象工厂：按多维创建，例如品牌-品类两维度，如华为工厂-华为手机工厂
    - 结构
    - 行为
        - 策略：例如登陆功能，同样是登陆，可以根据用户选择切换为邮箱、手机号、微信等各种实现方式；支付等等同理。（很像工厂方法？但是行为）
- ¶ 系统设计

# § 技术新趋势 neo tek

（我也不知道记录什么范围的信息好。。。相关点都了解下吧。）

- AI相关
    - （其他笔记有好多讨论）
- 云原生
    - 函数即服务 (FaaS) 与 Serverless 架构
    - （微服务架构：见主笔记）
- Java&Spring本身新特性
    - Java 17 和未来版本：Java 的最新版本引入了许多新特性，如封闭类、记录（Record）、模式匹配、增强的 Switch 表达式等。这些特性提高了开发效率和代码可读性。
    - Project Loom：目标是简化并发编程，通过引入轻量级线程（虚拟线程），大大提高高并发程序的性能。
    - Spring AI
- 架构与设计
    - 领域驱动设计（DDD）
- 反应式编程与Reactor/Vert.x：适用于需要处理复杂异步数据流和高并发
    - Reactor 和 Vert.x：适用于需要处理复杂异步数据流和高并发的应用。Reactor 是 Spring 生态的一部分，而 Vert.x 是一个通用的反应式工具包，适用于多种编程语言。
    - 响应式系统：反应式编程不仅限于异步编程，还包括系统的可伸缩性、容错性和响应性。
- 服务网格（Service Mesh）
    - Istio、Linkerd：服务网格在微服务架构中扮演重要角色，提供流量管理、安全和可观察性功能。它们简化了微服务的通信和管理。
- 容器化
    - Docker 和 Kubernetes：容器化技术已经成为标准，Docker 提供了轻量级的容器解决方案，而 Kubernetes 提供了强大的容器编排功能，帮助管理和部署大规模的容器化应用。
- 数据库
    - 向量数据库（Vector Database）：适用于 AI 和机器学习应用，支持高效的向量相似性搜索，如 Milvus 和 FAISS。
    - 图数据库（Graph Database）：适用于处理复杂关系和连接查询，如 Neo4j 和 ArangoDB。
    - NewSQL 数据库：结合传统 RDBMS 的 ACID 特性和 NoSQL 的可扩展性，如 Google Spanner、CockroachDB 和 TiDB。
    - 时序数据库（Time Series Database）：适用于处理时间序列数据，如 InfluxDB、TimescaleDB 和 Prometheus。
    - 文档数据库（Document Database）：使用灵活的文档结构存储数据，如 MongoDB 和 CouchDB。
    - 列式数据库（Columnar Database）：适用于数据分析和读取密集型应用，如 Apache Cassandra 和 ClickHouse。
    - 多模型数据库（Multi-Model Database）：支持多种数据模型，如 ArangoDB 和 OrientDB。
- API 管理和网关：随着微服务的普及，API 管理变得越来越重要。工具如 Kong、Apigee 和 Spring Cloud Gateway 提供了强大的 API 管理功能。
- 持续集成和持续部署（CI/CD）：在 DevOps 文化中，CI/CD 工具如 Jenkins、GitLab CI 和 GitHub Actions 有助于自动化构建、测试和部署流程。
- 安全性：随着安全问题的增加，框架如 Spring Security 和工具如 Vault 变得越来越重要，用于保护应用和数据的安全。
- 监控和可观察性：工具如 Prometheus、Grafana 和 ELK Stack 提供了强大的监控和日志管理功能，帮助开发者实时监控和诊断系统问题。
- 其他语言新特性赏
    - C++
    - Rust
    - Go
    - JS
    - Python
    - 仓颉
