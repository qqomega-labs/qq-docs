---
title: 什么是 QQ
sidebar_position: 2
description: QQ Omega 是一套高精度的评分与排名系统：通过智能体对加密资产在五大维度上进行 0–100 分评估，并按不同时间尺度输出可比较的排名。
keywords:
  - QQ Omega
  - 加密评分引擎
  - 加密智能评分
  - 加密资产评估
  - 代币分析
  - 加密量化分析
  - 加密定性分析
  - 加密排名
  - 投资时间尺度
  - QQ 总评分
image: /img/qq-og-image.png
---

import RadialScoreChart from "@site/src/components/RadialScoreChart";

## 什么是 QQ Omega？

QQ Omega 是一套面向加密资产的 <span className="pink-glow-text">智能评分与排名系统</span>。

它会吸收大量嘈杂的信息（市场数据、链上信号、代币设计、基本面与宏观背景），将其结构化，并转化为一组 <span className="pink-glow-text">清晰、可比较的分数</span>；当环境变化时，这些分数会自动更新。

你可以把 QQ Omega 当作一层持续更新的“底座”，用来更清晰地回答一个问题：

*"这个资产到底有多强？以 *我的* 投资周期来看，它当前有多吸引人？"*

### 评分如何运作

每个加密资产会在 <span className="pink-glow-text">五个维度</span> 上被评估：**基本面、代币经济、链上行为、技术结构、宏观与市场状态**。

每个维度背后都有一个由 <span className="pink-glow-text">窄领域智能体</span> 组成的集群：每个智能体只负责一小块分析（例如：分布质量、解锁压力、流动性深度、持仓行为、动量结构、状态切换等）。每个集群都会输出一个易于快速理解的 <span className="pink-glow-text">维度分数</span>（摘要化呈现，便于一眼读懂）。若想深入了解每个维度背后的架构，请参阅 <span className="pink-badge">[智能体集群](/docs/ai/what)</span>。

所有 <span className="pink-glow-text">维度分数</span> 会被聚合为一个 <span className="pink-glow-text">QQ 总评分</span>：一个 0–100 分的综合分数，会随着新数据与新事件的出现而持续更新。

QQ Omega 还会通过对底层智能体赋予不同权重，生成面向不同时间尺度的 <span className="pink-glow-text">多套 QQ 总评分</span>（短期更偏向链上 + 技术结构，长期更强调基本面 + 代币经济）。因此，不同时间尺度会有不同的排名：“最强资产”会随着你关注的是日、周、月还是年而改变。要理解时间尺度与排名如何构建、以及如何阅读它们，请参阅 <span className="pink-badge">[时间尺度与排名](/docs/scores/tf-ranking)</span>。

最终，你会得到“结构性强弱 vs 市场过热”的并列视图，从而判断某个资产在你的周期内，看起来更 <span className="pink-glow-text">低估</span> 还是更 <span className="pink-glow-text">高估</span>。

### 多维度分析

<RadialScoreChart
  data={[
    {
      name: "基本面",
      score: 85,
      fill: "#2A2B36",
      description: "团队、愿景、技术与执行能力",
    },
    {
      name: "代币经济",
      score: 72,
      fill: "#E92A78",
      description: "代币分配、效用与经济模型",
    },
    {
      name: "链上",
      score: 68,
      fill: "#316CFD",
      description: "交易活动、持仓分布与网络健康度",
    },
    {
      name: "技术分析",
      score: 78,
      fill: "#8F67FB",
      description: "图表形态、指标与价格行为",
    },
    {
      name: "宏观与市场状态",
      score: 65,
      fill: "#BFC3D1",
      description: "市场环境、情绪与宏观因素",
    },
  ]}
  centerLabel="QQ 总评分"
/>

:::note
把 QQ Omega 当作一个 <span className="pink-glow-text">**量化 + 定性的一体化加密分析师**</span>：它吸收数据、建立结构，并把复杂性压缩为 **清晰的分数、排名与可解释结论**，作为你做出 **有意识投资决策** 的底层依据。
:::
