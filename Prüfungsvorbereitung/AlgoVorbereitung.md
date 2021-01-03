# 20210103 LeetCode 509 Fibonacci Number, Easy @DP

https://leetcode.com/problems/fibonacci-number/

```py
class Solution:
    def fib(self, n: int) -> int:
        # F(n) = dp(n)
        dp = [0 for i in range(n + 5)]
        dp[0] = 0 
        dp[1] = 1
        for i in range(2, n + 1):
            dp[i] = dp[i - 1] + dp[i - 2]
        return dp[n]
```

```java
class Solution {
    public int fib(int n) {
        // F(n) = dp(n)
        int[] dp = new int[n + 5];
        dp[0] = 0;
        dp[1] = 1;
        for(int i = 2; i < n + 1; i++){
            dp[i] = dp[i - 1] + dp[i - 2];
        }
        return dp[n];
    }
}
```

# 20210103 LeetCode 322. Coin Change, Medium @DP

https://leetcode.com/problems/coin-change/

注意：兼容大输入。

```py
class Solution:
    def coinChange(self, coins: List[int], amount: int) -> int:
        # base case: 1 or 0 coin
        dp = {}
        dp[0] = 0
        for coin in coins:
            dp[coin] = 1
        # state: dp[n] = 1 + dp[n - coin]
        # choice: min per coin
        # dp: min num of coins to get amount, but max_int, i.e. amount + 5, is -1
        # !WRONG: for i in range(max(coins) + 1, amount + 1):
        for i in range(1, amount + 1):
            for coin in coins:
                if i - coin in dp:
                    dp[i] = min(dp.setdefault(i, amount + 5), dp[i - coin] + 1)
        if amount not in dp:
            return -1
        else:
            return dp[amount]
```

```java
import java.util.HashMap;
class Solution {
    public int coinChange(int[] coins, int amount) {
        HashMap<Integer, Integer> dp = new HashMap<>();
        // base
        dp.put(0, 0);
        for(int coin : coins){
            dp.put(coin, 1);
        }
        // state
        for(int i = 1; i < amount + 1; i++){
            // choice
            for(int coin : coins){
                if(dp.containsKey(i - coin))
                    if(dp.get(i - coin) + 1 < dp.getOrDefault(i, amount + 5))
                    dp.put(i, dp.get(i - coin) + 1);
            }
        }
        return dp.getOrDefault(amount, -1);
    }
}
```