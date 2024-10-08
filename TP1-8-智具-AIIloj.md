Artefarita intelekto

Dewey 006.3

# 文字相关 NLP

## 翻译工具

- 浏览器插件 immersive translate 沉浸式翻译，网页翻译到原段下方，或PDF翻译成中英左右双页对照
    - 显示原文真的是好主意，可以参考原文校对意思，而且也可以帮助学习原文的表达。好主意！
    - 支持多语言，我想学的外语基本都在（毕竟是调API）
    - 对 arxiv 专门做了适配，可以一键显示为双语的html版
    - 手机上也有，目前看到iOS端可以在Safari上用
    - 免费版可以用微软、谷歌的接口，其他如 OpenAI DeepL 要收费

## ChatGPT

一些经验贴（和随机资讯）

- 绫香写了好多
- [chatGPT拯救了我的期末考 - Steven Quacles - zhihu](https://zhuanlan.zhihu.com/p/592706418)
- [CNET Has Been Quietly Publishing AI-Written Articles for Months](https://gizmodo.com/cnet-chatgpt-ai-articles-publish-for-months-1849976921)

https://freegpt.one/ 免费而且很快

王炸了，多模态功能推出，它的语音功能好强大好真实！！！可惜要在9月25号的两周内才会陆续开放给所有 Plus 用户。官网新闻链接： https://openai.com/blog/chatgpt-can-now-see-hear-and-speak

2024-03月初，网页端突然发不出去消息了，清除网站数据后重新登陆才暂时解决，不知道会不会再出现。

## 对于 AI （尤其CG）辅助学习的思考

- 能够提供一个知识领域总结和学习路线，避免抓瞎
    - 比如自学转行者或学习条件差的人，没有合适的科班老师给学习者总结过
- 能够解答具体问题
    - 每个人遇到的具体问题都不同，有些小问题具体到很难查找图书或搜索引擎得到解答，学校里可以问老师问大佬同学，但很多人没有这种条件
- 能够适应每个人的知识阶段
    - 无论是书籍还是课堂，都是给一大批人设计的，其难度分级不一定适合每个人所处的阶段。即便1对1的老师，也因投入的心力而不一定完全适合学生的程度。
    - AI让学生自己问，每个人都可以问自己知识阶段想学的东西，并从其回答中发现自己欠缺的方面，着重学习
- 主动提问，而非被动接受
    - 阅读书本、听老师讲，即便学生也在思考，其实总体过程是在书、师设定的框架和进度下学习。
    - AI学习把这个过程反过来，学习者自己按自己想要的顺序提问，得到自己想要的，
    - 并且自己找问题提问的过程也调动了学习积极性
- 提问并理解解答后，可以把自己的理解向 AI 复述，以纠正或加深理解

## 一些 prompt

### 帮助生成 anki 牌组

请根据我提供的文本，制作一套抽认卡。

在制作抽认卡时，请遵循下述要求：
- 保持抽认卡的简单、清晰，并集中于最重要的信息。
- 确保问题是具体的、不含糊的。
- 使用清晰和简洁的语言。使用简单而直接的语言，使卡片易于阅读和理解。
- 答案应该只包含一个关键的事实/名称/概念/术语。

制作抽认卡时，让我们一步一步来：
第一步，使用简单的中文改写内容，同时保留其原来的意思。
第二步，将内容分成几个小节，每个小节专注于一个要点。
第三步，利用小节来生成多张抽认卡，对于超过 15 个字的小节，先进行拆分和概括，再制作抽认卡。

文本：
衰老细胞的特征是细胞内的水分减少，结果使细胞萎缩，体积变小，细胞代谢的速率减慢。细胞内多种酶的活性降低。细胞核的体积增大，核膜内折，染色质收缩、染色加深。细胞膜通透性改变，使物质运输功能降低。
一套卡片：
| 问题 | 答案 |
|---|---|
|衰老细胞的体积会怎么变化？|变小。|
|衰老细胞的体积变化的具体表现是什么？|细胞萎缩。|
|衰老细胞的体积变化原因是什么？|细胞内的水分减少。|
|衰老细胞内的水分变化对细胞代谢的影响是什么？|细胞代谢的速率减慢。 |
|衰老细胞内的酶活性如何变化？|活性降低。|
|衰老细胞的细胞核体积如何变化？|体积变大。|
|衰老细胞的细胞核的核膜如何变化？|核膜内折。 |
|衰老细胞的细胞核的染色质如何变化？|染色质收缩。|
|衰老细胞的细胞核的染色质变化对细胞核形态的影响是？|染色加深。|
|衰老细胞的物质运输功能如何变化？|物质运输功能降低。|
|衰老细胞的物质运输功能为何变化？|细胞膜通透性改变。|

文本：

【这里放入你分析的文本】

一套卡片：

# AI 作图 text-to-image

工具

- midjourney
    - 在官方discord上用
- DALL·E
    - 在官网用
- NovelAI
    - 有创造故事的能力，也有生成图片的能力，可以图生图，也是网上流行的tag（咒语）（使用 Danbooru 的标签）生成图的工具
    - tag generator: https://wolfchen.top/tag/
    - 试试这个？ https://github.com/Limitex/NAIFU
    - 这里面的资源基本都没法用： https://mp.weixin.qq.com/s/8qAZUrES9RJpGhZ7eUKMAA
    - 还是用下边的 Stable diffusion 吧
    - tag 示例（b站随机个帖子）  https://www.bilibili.com/read/cv19345532
- Stable diffusion
    - 在本地跑
    - https://github.com/AUTOMATIC1111/stable-diffusion-webui
    - 可以学它使用： https://www.zhihu.com/question/584053473/answer/2900010564
    - 模型汇总：  https://www.123114514.xyz/
        - 学它使用：  https://www.zhihu.com/question/584053473/answer/2897080304
- pornpen.ai

相关文章们

- [如何评价2023 年2 月AI 绘画的最新水平？ - 知乎](https://www.zhihu.com/question/584053473)
    - 很多经验分享、模型和工具资源分享

## Stable Diffusion

在colab上使用huggingface的diffuser，可以参考这个notebook： https://github.com/huggingface/notebooks/tree/main/diffusers

- 其中模型可以在huggingface上找
    - https://huggingface.co/models?pipeline_tag=text-to-image&sort=likes
    - 如 https://huggingface.co/hakurei/waifu-diffusion
- 使用模型
    - https://huggingface.co/docs/diffusers/v0.8.0/en/using-diffusers/loading

再研究下这个 https://huggingface.co/WarriorMama777/OrangeMixs/discussions/54

- Colab 链接： https://colab.research.google.com/github/TheLastBen/fast-stable-diffusion/blob/main/fast_stable_diffusion_AUTOMATIC1111.ipynb
- 参考模型链接
    - AbyssOrangeMix3 (AOM3): https://civitai.com/api/download/models/17233
        - example from https://civitai.com/models/9942/abyssorangemix3-aom3 
            - prompt: masterpiece, best quality, a girl is sitting on the fence, cofused, adjusting hair, red eyes, grey hair, ponytail, grey eyelashes, black uniform, black gloves, looks into the distance, viewed from below
            - negative prompt: EasyNegative, (worst quality, low quality:1.4), badhandv4
    - https://huggingface.co/WarriorMama777/OrangeMixs/resolve/main/Models/AbyssOrangeMix3/AOM3A1B_orangemixs.safetensors

## midjourney

> 这一周的AI浓度爆满。本学期的game design课的final project，70%的立绘也是我直接给需求，让midjourney帮我画的。虽然很多不尽人意，但在你不断让AI返工的时真正能够看到成品效果在变得越来越好的过程中，心里真的会有一种无穷的快感。
>
> https://zhuanlan.zhihu.com/p/592706418

## DALL·E by OpenAI

https://labs.openai.com/

# 听写（语音转文字） ASR

- Whisper
    - https://github.com/openai/whisper
    - C++ 离线实现： https://github.com/ggerganov/whisper.cpp

# 语音生成 Voice Synthesis

- DiffSinger
    - https://github.com/MoonInTheRiver/DiffSinger
    - > This repository is the official PyTorch implementation of our AAAI-2022 paper, in which we propose **DiffSinger (for Singing-Voice-Synthesis) and DiffSpeech (for Text-to-Speech)**.

# 咒语专区

## Stable Diffusion

### 调教某nft头像：

prompt: （给老婆的就改 girl, female, beautiful）（感叹一下还是女孩子的生成效果好

((best quality)), masterpiece, ultra-detailed, illustration, 8k uhd, high resolution, (1boy:1.2), 1 boy, male, handsome, hat, white skin

nega prompt: 

(worst quality, low quality, normal quality:1.4), (realistic, lip, nose, tooth, rouge, lipstick, eyeshadow:1.0), (dusty sunbeams:1.0), (abs, muscular, rib:1.0), (depth of field, bokeh, blurry:1.4), (greyscale, monochrome:1.0), (text, title, logo, signature,watermark:1.1), (((simple background))), monochrome, lowres, bad anatomy, bad hands, error, missing fingers, extra digit, fewer digits, cropped, blurry, ugly, pregnant, vore, duplicate, morbid, hermaphrodite, long neck, mutated hands, poorly drawn hands, poorly drawn face, mutation, deformed, bad proportions, malformed limbs, extra limbs, cloned face, disfigured, gross proportions, (((missing arms))),(((missing legs))), (((extra arms))),(((extra legs))),pubic hair, plump, bad legs, error legs,bad feet, mask