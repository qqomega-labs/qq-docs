---
title: What is QQ
sidebar_position: 2
description: QQ Omega is a precision scoring engine using AI agents to rate crypto assets 0-100 across fundamentals, tokenomics, on-chain data, technicals, and macro trends.
keywords:
  - QQ Omega
  - crypto scoring engine
  - AI crypto scoring
  - cryptocurrency ratings
  - crypto asset evaluation
  - token analysis
  - quantitative crypto analysis
  - qualitative crypto analysis
  - crypto rankings
  - investment timeframes
image: /img/qq-og-image.png
---

import RadialScoreChart from "@site/src/components/RadialScoreChart";

## What is QQ Omega?

QQ Omega is an <span className="pink-glow-text">AI scoring and ranking system</span> for crypto assets.

It takes large amounts of noisy information (market data, on-chain signals, token design, fundamentals, and macro context), structures it, and turns it into a set of <span className="pink-glow-text">clear, comparable scores</span> that update automatically as conditions change.

You can use QQ Omega as a continuously updating base layer to answer one question with more clarity:

*"How strong is this asset, and how attractive is it for *my* investment horizon?"*

### How the scoring works

Each crypto asset is evaluated across <span className="pink-glow-text">five categories</span>: **Fundamentals, Tokenomics, On-chain, Technicals, and Macro-Economic Regime**.

Behind every category is a swarm of <span className="pink-glow-text">specialized AI agents</span>, each focused on a narrow slice of analysis (for example: distribution quality, unlock pressure, liquidity depth, holder behavior, momentum structure, or regime shifts). For a deeper view into the architecture behind each category, see the <span className="pink-badge">[AI AGENTS SWARMS](/docs/ai/what)</span> section.

All category signals are aggregated into a global <span className="pink-glow-text">QQ score</span>: a 0–100 score that updates as new data and events unfold.

QQ Omega produces <span className="pink-glow-text">multiple QQ scores</span> for different timeframes by applying different weights to the underlying agents (short-term views lean more on On-chain + Technicals, long-term views prioritize Fundamentals + Tokenomics). This creates separate rankings per timeframe: "top assets" can differ depending on whether you care about weeks, months, or years. To understand how timeframes and rankings are built and how to read them, see <span className="pink-badge">[TIMEFRAMES & RANKING](/docs/scores/tf-ranking)</span>.

The result is a side-by-side view of structural strength vs. market excess, helping you spot assets that look <span className="pink-glow-text">undervalued</span> or <span className="pink-glow-text">overvalued</span> relative to your horizon.

### Multi-Dimensional Analysis

<RadialScoreChart
  data={[
    {
      name: "Fundamentals",
      score: 85,
      fill: "#2A2B36",
      description: "Team, vision, technology, and execution capability",
    },
    {
      name: "Tokenomics",
      score: 72,
      fill: "#E92A78",
      description: "Token distribution, utility, and economic model",
    },
    {
      name: "On-Chain",
      score: 68,
      fill: "#316CFD",
      description: "Transaction activity, holder distribution, and network health",
    },
    {
      name: "Technical Analysis",
      score: 78,
      fill: "#8F67FB",
      description: "Chart patterns, indicators, and price action analysis",
    },
    {
      name: "Macro & Market Regime",
      score: 65,
      fill: "#BFC3D1",
      description: "Market conditions, sentiment, and macroeconomic factors",
    },
  ]}
  centerLabel="QQ Score"
/>

:::note
Think of QQ Omega as a <span className="pink-glow-text">**quant + qual crypto analyst**</span>: it ingests data, structures it, and compresses complexity into **clear scores, rankings, and explainable evaluations** you can use as a base layer to make **conscious investment decisions**.
:::
