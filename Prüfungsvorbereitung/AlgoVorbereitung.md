# 2021-0103 LC 509 Fibonacci Number, Easy, @DP

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

# 2021-0103 LC 322. Coin Change, Medium, @DP

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

# 2021-0105 LC 226. Invert Binary Tree, Easy, @BiTree

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

# 2021-0105 LC 114. Flatten Binary Tree to Linked List, Medium, @BiTree

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

# 2021-0105 LC 116. Populating Next Right Pointers in Each Node, Medium, @BiTree

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

# 2020-0105 LC 654. Maximum Binary Tree, Medium, @BiTree

https://leetcode.com/problems/maximum-binary-tree/

```py
# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def constructMaximumBinaryTree(self, nums: List[int]) -> TreeNode:
        if nums == []:
            return None
        
        ind = nums.index(max(nums))
        l = self.constructMaximumBinaryTree(nums[:ind])
        r = self.constructMaximumBinaryTree(nums[ind+1:])
        return TreeNode(nums[ind], l, r)
```

# 2020-0106 LC 105. Construct Binary Tree from Preorder and Inorder Traversal, Medium, @BiTree

https://leetcode.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/

```py
# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def buildTree(self, preorder: List[int], inorder: List[int]) -> TreeNode:
        t, _ = self.builder(preorder, inorder, None)
        return t
    
    def builder(self, preorder: List[int], inorder: List[int], v: int) -> (TreeNode, int):
        if inorder == []: # attention that dass nicht pre- sondern in-
            return None, v
        
        ind = inorder.index(preorder[0])
        l, lastv = self.builder(preorder[1:], inorder[:ind], preorder[0])
        r, lastv = self.builder(preorder[preorder.index(lastv)+1:], inorder[ind+1:], lastv)
        return TreeNode(preorder[0], l, r), lastv
```

# 2020-0106 LC 106. Construct Binary Tree from Inorder and Postorder Traversal, Medium, @BiTree

https://leetcode.com/problems/construct-binary-tree-from-inorder-and-postorder-traversal/

lastv 是我用来找前/后序数组中两子树分割点的，在后序中跟前序中的获得方法差不多。

```py
# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def buildTree(self, inorder: List[int], postorder: List[int]) -> TreeNode:
        t, _ = self.builder(inorder, postorder, None)
        return t
    
    def builder(self, inorder: List[int], postorder: List[int], v: int) -> (TreeNode, int):
        if inorder == []:
            return None, v
        
        ind = inorder.index(postorder[-1])
        r, lastv = self.builder(inorder[ind+1:], postorder[:-1], postorder[-1])
        l, lastv = self.builder(inorder[:ind], postorder[:postorder.index(lastv)], lastv)
        
        return TreeNode(postorder[-1], l, r), lastv
```

# 2021-0308 53. Maximum Subarray, Easy, @DP

https://leetcode.com/problems/maximum-subarray/

```java
class Solution {
    public int maxSubArray(int[] nums) {
        int n = nums.length;
        int[] dp = new int[n + 5];
        dp[0] = nums[0];
        for(int i = 1; i < n; i ++) {
            if (nums[i] > nums[i] + dp[i - 1]) {
                dp[i] = nums[i];
            } else {
                dp[i] = nums[i] + dp[i - 1];
            }
        }
        int max = -100005;
        for (int i = 0; i < n; i ++) {
            if (dp[i] > max) {
                max = dp[i];
            }
        }
        return max;
    }
}
```

# 2021-0308 875. Koko Eating Bananas, Medium, @BiSearch-左

https://leetcode.com/problems/koko-eating-bananas/

参考：  https://labuladong.gitee.io/algo/%E9%AB%98%E9%A2%91%E9%9D%A2%E8%AF%95%E7%B3%BB%E5%88%97/koko%E5%81%B7%E9%A6%99%E8%95%89.html

用二分查找加速原本的暴力搜索。最大端不用看，所以一直搜最小端。

学习一下二分查找！[fucking-algorithm/算法思维系列/二分查找详解.md](https://github.com/labuladong/fucking-algorithm/blob/master/%E7%AE%97%E6%B3%95%E6%80%9D%E7%BB%B4%E7%B3%BB%E5%88%97/%E4%BA%8C%E5%88%86%E6%9F%A5%E6%89%BE%E8%AF%A6%E8%A7%A3.md)

```py
class Solution:
    def minEatingSpeed(self, piles: List[int], h: int) -> int:
        l, r = 1, max(piles)
        while l < r:
            m = (r - l)//2 + l
            if self.daysNeeded(piles, m) <= h:
                # feasible, ensmaller it
                r = m
            else:
                l = m + 1
        return l  
            
    def daysNeeded(self, piles, k):
        piles = [x // k + 1 if x%k > 0 else x // k for x in piles] # +1
        return sum(piles)
```

```java
class Solution {
    public int minEatingSpeed(int[] piles, int h) {
        // 即找左边界
        int max = 0;
        for (int i = 0; i < piles.length; i ++) {
            if (piles[i] > max) max = piles[i];
        }
        int l = 1, r = max; // 注意 l 是 1 即搜索区间左
        while (l < r) {
            int m  = (r - l) / 2 + l;
            if (this.hoursNeeded(piles, m) <= h) {
                // 挪右，右不减
                r = m;
            } else {
                // 挪左，左加
                l = m + 1;
            }
        }
        return l;
    }
    public int hoursNeeded(int[] piles, int k) {
        int res = 0;
        for (int i=0; i < piles.length; i ++) {
            res += piles[i] % k > 0 ? piles[i] / k + 1 : piles[i] / k;
        }
        return res;
    }
}
```

# 2021-0308 704. Binary Search, Easy, @BiSearch-单

https://leetcode.com/problems/binary-search/

```java
class Solution {
    public int search(int[] nums, int target) {
        int imin = 0, imax = nums.length - 1;
        while (imin <= imax) {
            int m = (imax - imin) / 2 + imin; 
            if (nums[m] == target) 
                return m;
            else if (nums[m] < target)
                imin = m + 1;
            else
                imax = m - 1;
        }
        return -1;
    }
}
```

# 2021-0308 34. Find First and Last Position of Element in Sorted Array, Medium, @BiSearch-左, @BiSearch-右

https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/

```java
class Solution {
    public int[] searchRange(int[] nums, int target) {
        if (nums.length == 0) return new int[] {-1, -1};
        int resl, resr;
        // find left point
        int l = 0, r = nums.length;
        while (l < r) {
            int m = (r - l) / 2 + l;
            if (nums[m] >= target)
                r = m;
            else if (nums[m] < target)
                l = m + 1;
        }
        resl = l;
        // find right point
        l = 0; r = nums.length;
        while (l < r) {
            int m = (r - l) / 2 + l;
            if (nums[m] > target)
                r = m;
            else if (nums[m] <= target)
                l = m + 1;
        }
        resr = l - 1;
        // 如何处理结果不在数组的状况！！
        if (resl > resr)
            return new int[] {-1, -1};
        else
            return new int[] {resl, resr};
    }
}
```

# 2021-0301 76. Minimum Window Substring, Hard, @滑窗

It's first time my, sliding window to study. Some points are needed care take.

```cpp
class Solution {
public:
    string minWindow(string s, string t) {
        int left = 0, right = 0;
        int start = 0, minlen = INT_MAX;
        unordered_map<char, int> window;
        unordered_map<char, int> target;
        for (char c : t) target[c] ++;
        int match = 0;
        while (right < s.length()) {
            char c = s[right];
            window[c] ++;
            if (target.count(c) && window[c] == target[c]) // 先 count 防止干扰 target
                match ++;
            right ++;

            while (match == target.size()) {
                // 减小到刚好不match，才有优化动力
                
                if (right - left < minlen) {
                    minlen = right - left;
                    start = left;
                }
                
                char c = s[left];
                left ++;
                if (target.count(c) && window[c] == target[c])
                    match --;
                window[c] --;
            }
        }
        return minlen < INT_MAX ? s.substr(start, minlen) : "";
    }
};
```

# 300. Longest Increasing Subsequence

https://leetcode.com/problems/longest-increasing-subsequence/

# 652. Find Duplicate Subtrees

https://leetcode.com/problems/find-duplicate-subtrees/

https://labuladong.gitee.io/algo/%E6%95%B0%E6%8D%AE%E7%BB%93%E6%9E%84%E7%B3%BB%E5%88%97/%E4%BA%8C%E5%8F%89%E6%A0%91%E7%B3%BB%E5%88%973.html