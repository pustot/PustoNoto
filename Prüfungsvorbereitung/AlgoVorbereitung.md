# 2021-0103 LeetCode 509 Fibonacci Number, Easy, @DP

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

# 2021-0103 LeetCode 322. Coin Change, Medium, @DP

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

# 2021-0105 LeetCode 226. Invert Binary Tree, Easy, @BiTree

https://leetcode.com/problems/invert-binary-tree/

```py
# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def invertTree(self, root: TreeNode) -> TreeNode:
        if root == None:
            return None
        
        root.left = self.invertTree(root.left)
        root.right = self.invertTree(root.right)
        root.left, root.right = root.right, root.left
        
        return root
```

```java
/**
 * Definition for a binary tree node.
 * public class TreeNode {
 *     int val;
 *     TreeNode left;
 *     TreeNode right;
 *     TreeNode() {}
 *     TreeNode(int val) { this.val = val; }
 *     TreeNode(int val, TreeNode left, TreeNode right) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */
class Solution {
    public TreeNode invertTree(TreeNode root) {
        if(root == null) {
            return null;
        }
        
        root.left = this.invertTree(root.left);
        root.right = this.invertTree(root.right);
        
        TreeNode t = new TreeNode();
        t = root.left;
        root.left = root.right;
        root.right = t;
        
        return root;
    }
}
```

# 2021-0105 LeetCode 114. Flatten Binary Tree to Linked List, Medium, @BiTree

https://leetcode.com/problems/flatten-binary-tree-to-linked-list/

就是后序遍历。二叉树节点处该干啥，冷静分析从容应对。

```py
# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def flatten(self, root: TreeNode) -> None:
        """
        Do not return anything, modify root in-place instead.
        """
        if root == None:
            return

        self.flatten(root.right)
        self.flatten(root.left)

        # 找左子树之最右p
        p = root.left
        if p != None:
            while p.right != None:
                p = p.right

            # 左子树以为右子树，原右子树以为p之右
            p.right = root.right
            root.right = root.left
            root.left = None
```

# 2021-0105 LeetCode 116. Populating Next Right Pointers in Each Node, Medium, @BiTree

https://leetcode.com/problems/populating-next-right-pointers-in-each-node/

```py
"""
# Definition for a Node.
class Node:
    def __init__(self, val: int = 0, left: 'Node' = None, right: 'Node' = None, next: 'Node' = None):
        self.val = val
        self.left = left
        self.right = right
        self.next = next
"""

class Solution:
    def connect(self, root: 'Node') -> 'Node':
        if root == None:
            return None
        
        # make internal perfect
        root.left = self.connect(root.left) 
        root.right = self.connect(root.right) 
        
        # per layer, left's rightmost -> right's leftmost
        p = root.left
        q = root.right
        while p != None and q != None:
            p.next = q
            p = p.right
            q = q.left
            
        return root
```