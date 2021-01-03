basierten der 50 Fragen Jahrs 2019s

- [数据结构与算法 - PustoNote](../TP301.6-数据结构与算法.md)
- [labuladong/fucking-algorithm](https://github.com/labuladong/fucking-algorithm)
    - [labuladong的算法小抄](https://labuladong.gitee.io/algo/)
- [wolverinn/Waking-Up](https://github.com/wolverinn/Waking-Up)
- 剑指Offer（mal gibt es in 微信读书）

# Algorithm

[AlgoVorbereitung - PustoNote](./AlgoVorbereitung.md)

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
