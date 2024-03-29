汉字杂集。
（聚焦汉字，不过离不开汉语等语言。用于其它语言的汉字，在强调在其他语言中的应用时，入该语言笔记，比如汉喃文）

# 部首

一个汉字可以有多个偏旁，而其中一个是部首，用于字典把字归类。《说文解字》540部首，《字汇》《康熙字典》214部首，大陆简体中文标准201部首。

## 康熙部首

包含所含汉字数的列表： https://en.wikipedia.org/wiki/Kangxi_radical#Table

这个维基的内容很有意思。字数分布图：

![Radicals_frequency_table.png](https://upload.wikimedia.org/wikipedia/commons/d/dd/Radicals_frequency_table.png)

字数前几为：艸水木手口；心虫竹言糸；金人鸟女肉；目火山衣土；

# 小篆

一般取时代之代表汉字，甲骨文为殷商，籀文为西周，小篆为秦汉，隶书为东汉，楷书为唐后。
小篆是秦统一六国时统一的文字。
其实秦朝也有秦隶。毕竟，隶书产生，尤其是改弯曲为直画的原因就是竹简木简上用毛笔写字，这一点对秦朝人也是一样的。

- [汉字简化和西汉的隶变，哪个在文字发展史上意义更大？ - Zhihu](https://www.zhihu.com/question/28711389)

根据维基百科引用的台师大的资料：

> 小篆：
> - 說文解字，收小篆九千三百五十三字為研究文字之依據。
> 隶书：
> - **不再遵守六書原則**
> 
> https://web.archive.org/web/20160304102024/http://elearning.ice.ntnu.edu.tw/KM/Data/Teacher/770/Data/ebook/230/ebookdata/page/%E5%8D%83%E5%8F%A4%E8%BF%BD%E8%B9%A4--%E6%96%87%E5%AD%97%E7%9A%84%E6%BC%94%E8%AE%8A/page.htm

【不再遵守“六书”原则】，听起来蛮严重？

《说文解字》之字头即皆是小篆，它统一收录的这些小篆很有意义。
但也应注意其包含的讹变

- [《說文》小篆訛形舉隅（楔子） - 趙瑾昀 - Zhihu](https://zhuanlan.zhihu.com/p/20134812)
- [《說文》小篆訛形舉隅——說「者」，兼論舊字形中的帶點「者」 - 趙瑾昀 - Zhihu](https://zhuanlan.zhihu.com/p/20542991)
- [《說文》小篆訛形舉隅——說「兆」 - 趙瑾昀 - Zhihu](https://zhuanlan.zhihu.com/p/20677197)

## 计算机字体

- **北师大说文小篆**：按《说文》收字，收字很多，学术很好用
- **方正小篆体**
    - > 方正小篆體是方正公司請張永明先生手書的。張永明先生雖是書法家，但是在古文字學的方面是下過功夫的，熟讀精研《說文解字》並曉其中諸多訛誤。這是那些照搬《說文》小篆形體的字體（如漢儀小篆體）所不具備的。
    - > ——趙瑾昀《〈說文〉小篆訛形舉隅——說「兆」》
    - 书法家张永明修正了《说文》中的一些讹误，更接近秦汉文字的实际字形，但是是商业字体，收字有限，学术价值较低，并且其也有很多错误
- **汉仪小篆体**：遵照《说文》书写的商业字体

参考资料

- [目前坊间的小篆字体有什么区别？ - 趙瑾昀 - Zhihu](https://www.zhihu.com/question/41780292/answer/92524722)

oppo手机商店可以找到方正和汉仪的字体，点广告的话0.1元就能永久获得，点赞！
不折腾其他换字体的方法的话，比较这俩，发现汉仪的没有把原本为繁体字的字也映射到篆书，
不适合我看繁体字信息的需求，因此使用方正。
方正这套涵盖的字符很多了，而且涵盖繁简，日常使用足够，学术或者方言用字倒是覆盖不完，稍日常点涉及这些的话（比如写粤文）会遇到一些不包含的字，另外日本新字体基本都不支持。
总体上作为能白嫖能方便安装的字体已经很好了，日常用起来。

# 菏と渮 to 开源项目们

nk2028 里的问题：

- [qieyun-autoderiver](https://github.com/nk2028/qieyun-autoderiver)
  - 菏只gha而无ka，只有渮有ka
  - 而且二者没有互相转化为异体字。
    - [nk2028/yitizi](https://github.com/nk2028/yitizi)
- [rime-tupa](https://github.com/nk2028/rime-tupa)
  - > 本倉庫資料來源爲 [nk2028/rime-dict-source](https://github.com/nk2028/rime-dict-source)。
  - gha ka 都只有 菏 无 渮
  - 「菏泽」一词只能用 ka 打（https://github.com/nk2028/rime-dict-source/blob/main/words.tsv），但或许用 gha 更符合现代发音，不知考虑否。

按 [nk2028 的廣韻（澤存堂本）数据](https://github.com/nk2028/qieyun-data/blob/main/%E9%9F%BB%E6%9B%B8/%E5%BB%A3%E9%9F%BB.csv)，对于ka，菏是「字頭覈校前」，渮是「字頭」。这或许可以解释 auto-deriver 之二分：用了校核后的字头。但 rime-tupa 就只有校核前的字头么？还是应该搞一波对应。

OpenCC、rime 里面有 朵-朶 这一对异体字，那么菏渮也都应该有吧！再了解下它们的代码就准备提交吧，也是帮助自己熟悉它们的代码。

- https://github.com/BYVoid/OpenCC/blob/master/data/scheme/variant.txt

帕、帊应该也是一对异体字？推导器现在没联想

## related

郫	縣名在蜀又音皮
