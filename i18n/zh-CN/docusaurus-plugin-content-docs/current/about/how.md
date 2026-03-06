---
title: 评分与智能体如何运作
sidebar_position: 3
description: 了解 QQ Omega 的四步流程：数据采集 → 按维度组织的智能体集群 → 加权聚合为分项分数与 QQ 总分 → 持续更新，实现接近实时的加密资产评级。
keywords:
  - QQ Omega 评分
  - 智能体集群
  - 加密评分方法论
  - 链上数据分析
  - 链下数据分析
  - 子评分
  - 分项分数
  - QQ 分数计算
  - 实时加密评分
image: /img/qq-og-image.png
---

## QQ 的评分与智能体如何运作？

:::note
TLDR：**数据 → 智能体 → 分数 → 为决策提供清晰全景。**
:::

1. **数据采集**  
   QQ Omega 会收集并整理链上数据（例如持仓结构、资金流、流动性、代币活动），也会收集链下信息（例如产品、文档、新闻、以及宏观经济背景）。

2. **按维度组织智能体集群**  
   数据会按不同维度分组，并输入到多个结构化的 <span className="pink-glow-text">智能体集群</span> 中。每个集群专注一个分析领域，由多名窄领域智能体协同工作。

   例如：
   - **基本面集群**：一个智能体评估团队，一个评估产品，一个评估安全性，等等。  
   - **代币经济集群**：一个智能体评估回购，一个评估排放/通胀，一个评估解锁，一个评估效用，等等。

3. **从集群到分数**
   - 每个集群会基于自身指标与评估规则产出一个 <span className="pink-glow-text">**分项分数**</span>（例如：基本面分）。  
   - 所有分项分数会通过不同的 **权重** 与 **归一化方法** 聚合为每个资产的 <span className="pink-glow-text">**QQ 总评分**</span>。  
   - 每个资产都会有 <span className="pink-glow-text">**四个 QQ 总评分**</span>：<span className="pink-glow-text">日线</span>、<span className="pink-glow-text">周线</span>、<span className="pink-glow-text">月线</span>、<span className="pink-glow-text">年线</span>，使评分与所使用的数据时间窗口与各维度权重相匹配。

4. **持续更新**  
   当新数据出现（链上资金移动、代币解锁、合作进展、市场情绪变化等），智能体会更新判断，分数也会随之 <span className="pink-glow-text">**随时间演化**</span>。
