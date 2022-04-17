NumericalAnalysis | 数值分析

Numerical Analysis, Analyse Numérique, Numerische Analyse

数学之分支也，研究分析用计算机求解数学计算问题的数值计算方法及其理论。以数字计算机求解数学问题的理论和方法为研究对象，为计算数学的主体部分。

# 绪论

# 插值法

# 函数逼近と曲线拟合

# 数值积分

# 常微分方程の数值方法

- 用途
    - 数模最常用的方程。
    - 微分方程→状态方程（左边は一阶导，右边は变量与各输入の多项式，无导数）→状态空间方程（标准化的微分方程）
    - 通常，仿真即求解微分方程。
    - （可示以系统模型框图。借助Simulink）
- 常微方数值解法的概念：离散化、步进迭代
    - 求解结果
        - 方程的求解结果：普通方程是若干数字，微分方程是若干曲线（仍是函数，只是不再有微分。如质量块位移随时间。）
        - $dy/dx = f(x,y), x∈[a,b]$
        - `初值问题（IVP）`，一阶常微分方程は，只要f连续且关于y满足`Lipschitz条件`，IVP有唯一解
        - 数值求解结果为数据表格，离散的近似解
    - 求解方法
        - 离散化：如差商逼近、数值积分、泰勒展开
        - 步进迭代：单步法、多步法
        - 误差问题
- 单步法：欧拉、欧拉改、龙库4阶、变步长RK
    - `欧拉法`：最简单的数值解法
        - `差商`：向前差商（下一步から）、向后差商（上一步へと）
        - `显式欧拉公式`：$y_{n+1} = y_n + hf(x_n, y_n)$
        - `隐式欧拉公式`：$y_{n+1} = y_n + hf(x_{n+1}, y_{n+1})$ （用下一步算下一步）
            - 如果f是线性函数，则可以用其他表示出 yn+1，若非线性则要一般方法，一般为迭代法然难算
        - 梯形公式：$y_{n+1} = y_n + 0.5 h (f(x_n, y_n) + f(x_{n+1}, y_{n+1}))$ （精度更高，但也是隐式）
        - `改进的欧拉法`：
            - 思想——`预测-校正`
                - 先预报（精度低）个，带入（精度高）隐式公式得到修正
            - yp=显式，yn+1=用yp做梯形
    - 局部截断误差
        - `全局截断误差`：x0直到xn，数值解与精确解之差。不知道整体几步故用局部
        - `局部截断误差`：任取一点xn，假设之前无误差，计算到xn+1产生的误差
        - の分析：泰，比较算法与展开式前几项
            - 局部截断误差主项是p+1阶（$O(h^{p+1})$），称算法有`p 阶精度`
        - 显欧隐欧一阶，梯形、改欧二阶
    - `龙库法` **（作业点）** ：
        - 意义：当年讲值分之核即龙库，似牛莱之于微积分
        - 思想：显隐欧用1点而精度1阶，改欧2点2阶，故再加点，即此步下步间多预报些，权均以为近似
        - 可有不同阶。泰展定系数。
            - 2阶龙库一网打尽所有2阶显式算法（欧拉改、中点法）。
            - 三阶龙库其中一组系数谓 `库塔公式`
            - 四阶龙库其中一组系数は `标准四阶龙格-库塔公式`か`经典 R-K 方法`
                - $$\left\{ \begin{aligned}     y_{n+1}&=y_n+h(k_1 /6 + 2k_2 /6 + 2k_3 /6 + k_4 /6 )\\    k_1 &= f(x_n,y_n)\\         k_2&=f(x_n+h/2, y_n+hk_1/2) \\      k_3&=f(x_n+h/2, y_n+hk_2/2) \\      k_4&=f(x_n+h,y_n+hk_3)     \end{aligned} \right.$$
        - 变步长的龙格库塔法：Richardson外推
- 收敛性和稳定性：步长要在稳定区间；隐式法更稳定但更难求；刚性问题
    - `收敛性`：步长细分至极→精确
        - 判断：增量函数满足否 Lipschitz
    - `稳定性`：纵当前节点有误差，对后面计算的影响也不扩大
    - 绝对稳定、绝对稳定域、绝对稳定区间
    - `刚性问题`：系统参数数量级差异巨大，特征是系统状态方程的系数矩阵为刚性矩阵（病态）
        - 隐式法一大优势是稳定区间极大，对刚性问题求解很有效
        - 刚性使系统λ值极大，数值解法必须取很小的步长，拖慢计算，影响精度
        - 解决：改模型结构、用隐式算法
- `线性多步法`：需要单步法给初始多步
    - 不止用到前面一步的函数值也
    - 线性即线性组合

四阶龙库求解微方初值问题代码：

```py
import numpy as np
import sympy as sp
x, y=sp.Symbol('x'), sp.Function('y')
# ODE to solve: y'=f(x,y)
f = -2*x*y(x) / (1+x*x)+1
# inival: y( 0 ) = 0
inix, iniy = 0, 0
# symbolic res by sympy (merely for comparison)
eq_a = sp.dsolve(sp.Eq(y(x).diff(x,1),f), y(x), ics={y(inix):iniy})
y_preci = sp.sympify(str(eq_a)[8:-1])
h = 0.5 # step len
xs=np.arange(inix,inix+10.5,h)
yrk=np.zeros(xs.shape[0]) # by unser R-K
yrk[0]=iniy
ysp=np.zeros(xs.shape[0]) # by sympy (merely for comparison)
for i in range(1,xs.shape[0]):
    k1 = f.evalf(subs={x:xs[i-1], y(x):yrk[i-1]})
    k2 = f.evalf(subs={x: xs[i-1]+h/2, y(x): yrk[i-1]+h/2*k1})
    k3 = f.evalf(subs={x: xs[i-1]+h/2, y(x): yrk[i-1]+h/2*k2})
    k4 = f.evalf(subs={x: xs[i-1]+h, y(x): yrk[i-1]+h*k3})
    yrk[i] = yrk[i-1] + h/6*(k1+2*k2+2*k3+k4)
    ysp[i] = y_preci.evalf(subs={x:xs[i]})
```

# 线代方程组の解法

- 引言
    - 应用：如样条插值、法方程组
    - 线代解法的局限：计算量问题、流程化（编程）精确度问题
    - 解法分类：直接法、迭代法
- `高斯消去法`
    - 即最朴，逐步初等变换使为（上）三角阵，每步用上一行乘k加到下一行，以消下一行首非零元。最后从末行逐次回代得解
    - 适用情况（定理）：系数矩阵非奇异，总可解以带行交换ﾅ高消
        - `主元`（斜对角元素）需全部不为0
        - 即使有0，由于非奇异，该列必有非零行，交换可矣
- `主元素高斯消去法`
    - 计算机小数位数有限，主元数量级太小会使误差增大
    - 故每一行最左边一列选绝对值最大的行交换来作为第一行
    - 有些阵不需要考虑主元换行——`严格对角占优阵`
- `矩阵三角分解`
    - 思想：初等变换是脑力活，不易流程化。视其为两矩阵乘法运算。
        - 若干个（代表使一列清零的初等变换）的矩阵L乘以原阵，得到一个上三角阵U，即$L_{n-1}…L_2L_1A=U$
        - 整理为 $A=LU$，$U$ 指  upper
    - 概念：把一个矩阵，写成两个三角阵相乘 $A=LU$
    - 定理：顺序主子式不为0，则分解存在且唯一
    - 带增广b列时，设高斯消去后b列成Y，有
        - $L^{-1}[A|b]=[U|Y]$
        - 故：
        - $A=LU, \ b=LY, \ Y=UX$
        - 有L即可算Y，有Y即可算X
    - 求解方法：`Doolittle 分解法`（L的对角线为1，本课用之）、`Crout 分解法`（U 的对角线为1）
    - `Doolittle 分解法`：L的对角线为1，是以U的对角线是a运算后的结果，似惯用之高消
        - 直接求解步骤：
            - 求 U 第一行，求 L 第一列，U2L2U3L3……
            - 每次u,l的计算过程……
        - 存储技巧（紧凑格式）：直接覆盖原A阵
        - `主元LU分解法` **（作业点）**
            - 每入下一行时先计算选主元，填置换矩阵P；之后再算U之行L之列
            - $PA=LU$
    - 特殊系数矩阵简化处理：`平方根法（改）`と`追赶法`
        - 源于`Doolittle 分解法`但运算更简，以解特殊形态矩阵
        - `平方根法`：对称正定阵
            - `Cholesky 分解`
        - `追赶法`：三对角阵
- 向量과矩阵의`范数`
    - `范数`か`模`：度量向量和矩阵的大小
    - 向量范数数学定义：非负实值函，正定性（等号iff x=0）、齐次性（系数可提）、三角不等式（和の模≤模の和）
    - 向量の常用范数
        - `无穷范数` $||x||_∞$：最大值
        - `1-范数`：所有绝对值の和
        - `2-范数`：“长度”，平方和の平方根
        - `p-范数` $||x||_p$：绝对值p次方の和のp次方根，$p∈[1,∞)$
    - 矩阵范数数学定义：向量范의定义 && 积の模≤模の积
    - 矩阵常用范数（算子范数）
        - `列范数` $||A||_1$：凡列，各元绝值连加，取大
        - `行范数` $||A||_∞$：凡行，各元绝值连加，取大
        - `2-范数`：$A^TA$ 最大特征值开根
        - `F 范数`か`Frobenius 范数`：凡元，平方相加，开根
- 误差分析
    - `病态问题`：方程组 $AX=B$ 中 $A$ 或 $B$ 某个值可能差之毫厘谬以千里。解を不可信に成らせる
        - 反义词`良态矩阵`
        - 是相对概念
    - 本课解答「咋量化」，不解答「咋办」（病态在于问题本身与算法无关，良方は改善问题）
    - 关键是量化变化程度，而向量、矩阵之变化程度用**范数**
    - `条件数`：任非奇异矩阵 $A$，${\rm cond}(A)_v=||A||_v·||A^{-1}||_v$ 也。其中 $||·||_v$ 指某种矩阵范数
        - 条件数越大，阵越病
- 线性方程组的迭代法
    - 의一般理论
        - 定义（一阶定常迭代法）：一般地，由 $Ax=b$ 变形得到 $x=Bx+f$，用迭代序列 $x^{(k+1)}=Bx^{(k)}+f$ 逐步得到近似解
        - 收敛性：并非所有方组均可以迭
            - $lim x^{(k)}$ 存在谓敛
            - 分析：误差等于 $B^k \ blabla$，故要研何时 $B^k→0$
            - 使敛
                - 法一：（$B$の）谱半径（充要）
                    - 谱半径＜1敛，越小敛越快
                    - 谱半径：特征值绝对值集合的上确界
                    - 步骤：写迭代阵；求特征值，得谱半径；判敛
                    - 可用公式计算迭代次数
                - 法二：（$B$の）范数（充分条件）
                    - 有范数＜1敛
                    - 可用公式做事后误差估计，或预估迭代次数
        - 为解决收敛性和误差估计问题，用矩阵方法规范迭代运算
        - 矩阵分裂为 $A=M-N$，其中 $M$ 为可选非奇异矩阵，且使 $MX=d$ 容易求解
    - `雅可比迭代法`
        - 矩阵分裂为 $A=D+L+U$
            - $DX^{(k+1)} = -(L+U)X^{(k)} + b$
            - $X^{(k+1)} = -D^{-1}(L+U)X^{(k)} + D^{-1}b$
        - 因此，雅可比迭代矩阵：
            - $B_J = -D^{-1}(L+U)$
            - 分裂简单，$D$ 是对角阵容易求逆
            - $X^{(k+1)} = B_JX^{(k)} + F$
    - `高斯-塞德尔迭代法`か`Gauss-Seidel 迭代法` **（作业点）**
        - 在雅迭基础上，每代内实时使用最新值
        - 形式
            - L是下三角，正好乘以新值，Uは旧，故
            - $DX^{(k+1)}=-LX^{(k+1)}-UX^{(k)}+b$
            - daher
            - $(D+L)X^{(k+1)}=-UX^{(k)}+b$
            - $X^{(k+1)}=-(D+L)^{-1}UX^{(k)}+(D+L)^{-1}b$
        - 迭代矩阵
            - $B_G = -(D+L)^{-1}U$
            - $X^{(k+1)} = B_GX^{(k)} + F$
        - 乄雅
            - 存储时可直接覆盖原值
            - 一般收敛较快
            - 也非绝对更快，甚而有时雅敛而高塞散
    - `逐次超松弛迭代法`か`SOR`：提高收敛速度
        - 式子变形加个超参 $ω$，此は对称正定三对角阵可算最优值，其他阵只能试

带主元的 Doolittle 分解法（主元LU分解法の一つ）代码：

```py
import numpy as np
A = np.array([[2.33,0.115,0.119, 0.107], [1.9,-2.33,0.215, 0.115], 
            [2.13,1.09,5.2, 0.15], [5.14, 5.4, 5.33, -1.2]])
B = np.array([[3.00], [5.40], [2.330], [1.5]])
pivoSele = [0,1,2,3] # swap of rows represented here and later to build mtx P
s = np.zeros(A.shape[0])
for rnd in range(A.shape[0]):
    # calc s for selection of pivot
    for i in range(rnd, A.shape[0]):
        s[i] = A[i][rnd]
        for k in range(rnd): 
            s[i]-=A[i][k]*A[k][rnd]
    mxi = np.where(s==max(s))[0][0]
    s[rnd] = float("-inf")
    A[[rnd,mxi],:] = A[[mxi,rnd],:] # Warnin: swap in np, 太坑了
    pivoSele[rnd], pivoSele[mxi] = pivoSele[mxi], pivoSele[rnd]
    # calc u
    for i in range(rnd, A.shape[0]):
        for k in range(rnd): A[rnd][i]-= A[rnd][k]*A[k][i]
    # calc l
    for i in range(rnd+1, A.shape[0]):
        for k in range(rnd): A[i][rnd]-=A[i][k]*A[k][rnd]
        A[i][rnd]/=A[rnd][rnd]
# P ando B
P = np.zeros((A.shape[0], A.shape[0]))
for r in range(A.shape[0]): P[r][pivoSele[r]]=1
B = np.dot(P,B)
# Y y X
y = np.zeros(A.shape[0])
for i in range(A.shape[0]): 
    y[i]=B[i]
    for k in range(i): y[i]-=A[i][k]*y[k]
x = np.zeros(A.shape[0])
for i in range(A.shape[0]-1, -1, -1): 
    x[i]=y[i]
    for k in range(i+1,A.shape[0]): x[i]-=A[i][k]*x[k]
    x[i]/=A[i][i]
print(x)
```

Gauss-Seidel 迭代法代码：

```py
import numpy as np
import math
A = np.array([[2.33,0.115,0.119, 0.107], [1.9,-2.33,0.215, 0.115], 
            [2.13,1.09,5.2, 0.15], [5.14, 5.4, 5.33, -1.2]]) # 为使BG达标，U部宜小요 
B = np.array([[3.00], [5.40], [2.330], [1.5]])
DpL = np.zeros([A.shape[0],A.shape[0]])
U = np.zeros([A.shape[0],A.shape[0]])
for i in range(A.shape[0]):
    for j in range(A.shape[0]):
        if i>=j: DpL[i][j]=A[i][j]
        else: U[i][j]=A[i][j]
BG = - np.dot(np.linalg.inv(DpL), U)
e = 10e-4 # tolerance
# 审敛法一： radius and multiple of tolerance
#eigval, eigenvec = np.linalg.eig(BG)
#eigval=abs(eigval)
#k = math.ceil( math.log(e)/math.log(max(eigval)) ) # times of iteration
# 审敛法二：modulo and tolerance
BG_norm = np.linalg.norm(BG, ord=np.inf)
print(BG_norm)
x = np.zeros([A.shape[0],1])
f = np.dot(np.linalg.inv(DpL), B)
x1 = np.dot(BG, x)+f
indeca = math.log(e*(1-BG_norm)/ np.linalg.norm(x1-x, ord=np.inf) )/math.log(BG_norm)
k = math.ceil(indeca)
for r in range(k): x = np.dot(BG, x)+f
print(x)
```

# 非线性方程と方程组の解法

- 应用现状：皆用牛顿

# 矩阵特征值と特征向量の计算