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

## BiTree

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

## Dynamische Programmierung

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
