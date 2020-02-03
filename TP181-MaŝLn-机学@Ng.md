# 第一课 绪论 Intrduction

# 第二课 单变量线性回归 Linear regression with one variable

# 第三课 线代 Linear Algebra review (optional)

求和号转向量乘：求和的两个乘数为俩向量。

# 第四课 多变量线性回归 Linear Regression with multiple variables

# 第五课 Octave 教程 Octave Tutorial

# 第六课 对数几率回归 Logistic Regression

- 假设表示
  - 对数几率函数（S型函数）： $g(z)=1/(1+e^{-z})$，以使结果 0~1
  - 假设函数： $h_θ(x)=g(θ^T x)$，推测 y=1 的概率 $即 =P(y=1 | x;θ)$
- 决策边界
  - 对率函数图像知，假设函数≥0.5条件是$θ^T x≥0$；因而$θ^T x=0$即边界
  - 线性边界，非线性边界（引入非线性特征）
- 惩罚函数
  - 误差值：y=1 时 $-log(h_θ(x))$，y=0时 $-log(1-h_θ(x))$
    - 缩写：$-ylog(h_θ(x))-(1-y)log(1-h_θ(x))$
  - 惩罚函数：$J(θ) = -1/m Σ_{i=1 \to m} Cost(h_θ(x),y)$
- 梯度下降：$θ_j = θ_j - α \frac{∂}{∂θ_j} J(θ) = θ_j - α Σ_{i=1 \to m} (h-y)x$
- 高级优化
- 多类别分类：一对全

# 第七课 过拟合&正则化 Regularization

# 第八课 神经网络之表示 Neural Networks: Representation

# 第九课 神经网络之学习 Neural Networks: Learning

# 第十课 机器学习应用建议 Advice for applying machine learning

# 第十一课 机器学习系统设计 Machine learning system design