汉语杂集。

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

## related

郫	縣名在蜀又音皮
