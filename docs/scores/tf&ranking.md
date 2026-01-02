---
title: Timeframes & Ranking
sidebar_position: 2
---

## Timeframes & risk profiles

QQ Omega analyze **4 different timeframes**, for different styles and risk levels:

- **<span className="gradient-text">Daily – Scalper</span> (High risk / Fast decisions)**
  - Data focus: intraday price/volume, funding, short-term on-chain flows, news spikes.  
  - Weighting: **Silicon** (TA) and fast **Hydrogen** (on-chain) dominate, both computed on **intraday / last-24h windows**; **Carbon/Gold** are almost muted.  
  - Example: a clean intraday breakout with 24h inflows can score high here even if fundamentals are only average.

- **<span className="gradient-text">Weekly – Tactical</span> (Medium risk)**
  - Data focus: 7d momentum, narrative persistence, net flows, positioning shifts.  
  - Weighting: more balanced between **Silicon** and **Hydrogen**, which are evaluated on **rolling 7d charts and 7d on-chain flows**, with **Oxygen** (regime) starting to matter more.  
  - Example: a coin with 7d whale accumulation and improving structure, but messy intraday action, can still look strong on this horizon.

- **<span className="gradient-text">Monthly – Swing</span> (Balanced)** 
  - Data focus: 30d trend health, unlock clusters, liquidity rotation, protocol usage.  
  - Weighting: **Hydrogen** (usage/ownership) leans on **30d flow and activity windows**, **Gold** (token design, unlocks) gains weight, while **Silicon** is down-weighted to a **timing overlay** using daily/weekly structure.  
  - Example: solid 30d usage and healthy token flows can offset a noisy daily chart and weak short-term sentiment.

- **<span className="gradient-text">Yearly – Hodler</span> (Low frequency / Structural)** 
  - Data focus: fundamentals, governance, business model, long on-chain trends, macro regime backdrop.  
  - Weighting: **Carbon** (fundamentals), **Gold** (tokenomics), and **Oxygen** (macro) dominate; **Hydrogen** focuses on **365d ownership and usage trends**, and **Silicon** is only used as a **coarse higher-timeframe risk check** (weekly/monthly structure, not intraday).  
  - Example: a project with excellent fundamentals and ownership structure can rank high here even if short-term price is under pressure.

Phosphorus reads these horizon-specific views together and surfaces profiles like “structurally strong, tactically weak”, “structurally fragile, currently euphoric”, or “improving structurally, neutral tactically”.


## Ranking views

For each timeframe QQ Omega can rank crypto assets in many ways:

- <span className="pink-glow-text">**Global Ranking**</span> → sorted by the **global QQ Score** (overall best opportunities in that timeframe)
- <span className="pink-glow-text">**Per-area Rankings**</span>* → sorted by a **single swarm score**, so you can view specialists leaderboards like:
  - **Carbon** Ranking → Best Fundamentals
  - **Gold** Ranking → Best Tokenomics
  - **Hydrogen** Ranking → Best On-chain
  - **Silicon** Ranking → Best Technical Analysis
  
This lets you answer fast: *“Who’s best overall right now?”* and *“Who’s best at one specific pillar, in this timeframe?”*
 
:::note
****Oxygen Swarm is not included in per-project rankings.**  
Oxygen describes the macro regime / risk appetite of the current timeframe, which is shared across all crypto assets. Since it’s a single contextual score, ranking projects by Oxygen **would be meaningless**.*
:::
