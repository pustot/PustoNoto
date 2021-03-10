basierten der 50 Fragen Jahrs 2019s

- [数据结构与算法 - PustoNote](../TP301.6-数据结构与算法.md)
- [labuladong/fucking-algorithm](https://github.com/labuladong/fucking-algorithm)
    - [labuladong的算法小抄](https://labuladong.gitee.io/algo/)
- [wolverinn/Waking-Up](https://github.com/wolverinn/Waking-Up)
- 剑指Offer（mal gibt es in 微信读书）
- 力扣
    - 力扣美国同步到中国： https://leetcode-cn.com/accounts/transfer_from_us/

# Algorithm

[AlgoVorbereitung - PustoNote](./AlgoVorbereitung.md)

分类从婊哥

- 1 滑动窗口
- 2 双指针
- 3 快慢指针
- 4 区间合并
- 5 循环排序
- 6 链表反转
- 7 树上的广度优先遍历
- 8 树上的深度优先遍历
- 9 双堆
- 10 子集
- 11 二分变式
- 12 前K问题
- 13 多路归并
- 14 拓扑排序
- 15 LeetCode多线程问题的Goroutine解法
- 16 动规

## 滑窗 SlidWin

https://github.com/labuladong/fucking-algorithm/blob/master/%E7%AE%97%E6%B3%95%E6%80%9D%E7%BB%B4%E7%B3%BB%E5%88%97/%E6%BB%91%E5%8A%A8%E7%AA%97%E5%8F%A3%E6%8A%80%E5%B7%A7.md



## 深搜 BiTree

如何把题目的要求细化成每个节点需要做的事情。

```java
/* 二叉树遍历框架 */
void traverse(TreeNode root) {
    // 前序遍历
    traverse(root.left)
    // 中序遍历
    traverse(root.right)
    // 后序遍历
}
```


## 二分 BiSearch

> Although the basic idea of binary search is comparatively straightforward, the details can be surprisingly tricky ... 
> — Donald Knuth 
> (https://en.wikipedia.org/wiki/Binary_search_algorithm#Implementation_issues)

[fucking-algorithm/算法思维系列/二分查找详解.md](https://github.com/labuladong/fucking-algorithm/blob/master/%E7%AE%97%E6%B3%95%E6%80%9D%E7%BB%B4%E7%B3%BB%E5%88%97/%E4%BA%8C%E5%88%86%E6%9F%A5%E6%89%BE%E8%AF%A6%E8%A7%A3.md)

注意几个边界：初始左右开闭，循环是否等于，判完加一减一，返回是否减一。

### 单左右总结

**单两右减一；改左皆加一；找区开环左；找右返减一（左加右减开区间）**

```java
int binarySearch(int[] nums, int target) {
    int left = 0, right = ...;

    while(...) {
        int mid = left + (right - left) / 2;
        if (nums[mid] == target) {
            ...
        } else if (nums[mid] < target) {
            left = ...
        } else if (nums[mid] > target) {
            right = ...
        }
    }
    return ...;
}
```

### 找单个数

```java
int binarySearch(int[] nums, int target) {
    int left = 0; 
    int right = nums.length - 1; // 注意

    while(left <= right) {
        int mid = left + (right - left) / 2;
        if(nums[mid] == target)
            return mid; 
        else if (nums[mid] < target)
            left = mid + 1; // 注意
        else if (nums[mid] > target)
            right = mid - 1; // 注意
    }
    return -1;
}
```

### 找左边界

```java
int left_bound(int[] nums, int target) {
    if (nums.length == 0) return -1;
    int left = 0;
    int right = nums.length; // 注意
    
    while (left < right) { // 注意
        int mid = (left + right) / 2;
        if (nums[mid] == target) {
            right = mid;
        } else if (nums[mid] < target) {
            left = mid + 1;
        } else if (nums[mid] > target) {
            right = mid; // 注意
        }
    }
    return left;
}
```

### 找右边界

```java
int right_bound(int[] nums, int target) {
    if (nums.length == 0) return -1;
    int left = 0, right = nums.length;
    
    while (left < right) {
        int mid = (left + right) / 2;
        if (nums[mid] == target) {
            left = mid + 1; // 注意
        } else if (nums[mid] < target) {
            left = mid + 1;
        } else if (nums[mid] > target) {
            right = mid;
        }
    }
    return left - 1; // 注意
}
```


## 动规 Dynamische Programmierung DP

按 labuladong，框架 `明确 base case -> 明确「状态」-> 明确「选择」 -> 定义 dp 数组/函数的含义`

```py
# 初始化 base case
dp[0][0][...] = base
# 进行状态转移
for 状态1 in 状态1的所有取值：
    for 状态2 in 状态2的所有取值：
        for ...
            dp[状态1][状态2][...] = 求最值(选择1，选择2...)
```
