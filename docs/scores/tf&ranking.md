---
title: Timeframes & Ranking
sidebar_position: 2
---

## Timeframes & Risk Profiles

QQ Omega analyzes **four different timeframes**, designed for different styles and risk levels:

- **<span className="gradient-text">Daily – Scalper</span> (High risk / Fast decisions)**
  - Data focus: intraday price and volume, funding, short-term on-chain flows, news spikes.  
  - Weighting: **Silicon** (TA) and fast **Hydrogen** (on-chain) dominate, both computed on **intraday and last-24h windows**. **Carbon** and **Gold** are almost muted.  
  - Example: a clean intraday breakout with 24h inflows can score high here even if fundamentals are only average.

- **<span className="gradient-text">Weekly – Tactical</span> (Medium risk)**
  - Data focus: 7d momentum, narrative persistence, net flows, positioning shifts.  
  - Weighting: more balanced between **Silicon** and **Hydrogen**, evaluated on **rolling 7d charts and 7d on-chain flows**, with **Oxygen** (regime) starting to matter more.  
  - Example: a coin with 7d whale accumulation and improving structure can still look strong on this horizon even with messy intraday action.

- **<span className="gradient-text">Monthly – Swing</span> (Balanced)** 
  - Data focus: 30d trend health, unlock clusters, liquidity rotation, protocol usage.  
  - Weighting: **Hydrogen** (usage and ownership) relies on **30d flow and activity windows**. **Gold** (token design and unlocks) gains weight, while **Silicon** is reduced to a **timing overlay** using daily and weekly structure.  
  - Example: solid 30d usage and healthy token flows can offset a noisy daily chart and weak short-term sentiment.

- **<span className="gradient-text">Yearly – Holder</span> (Low frequency / Structural)** 
  - Data focus: fundamentals, governance, business model, long on-chain trends, macro regime backdrop.  
  - Weighting: **Carbon** (fundamentals), **Gold** (tokenomics), and **Oxygen** (macro) dominate. **Hydrogen** focuses on **365d ownership and usage trends**, and **Silicon** is used only as a **coarse higher-timeframe risk check** based on weekly and monthly structure.  
  - Example: a project with excellent fundamentals and ownership structure can rank high here even if short-term price is under pressure.

Phosphorus reads these horizon-specific views together and surfaces profiles such as “structurally strong, tactically weak”, “structurally fragile, currently euphoric”, or “improving structurally, neutral tactically”.

## Ranking Views

For each timeframe, QQ Omega can rank crypto assets in several ways:

- <span className="pink-glow-text">**Global Ranking**</span> → sorted by the **global QQ Score**, showing the best overall opportunities for that timeframe  
- <span className="pink-glow-text">**Per-area Rankings**</span>* → sorted by a **single swarm score**, allowing specialist leaderboards such as:
  - **Carbon Ranking** → Best Fundamentals  
  - **Gold Ranking** → Best Tokenomics  
  - **Hydrogen Ranking** → Best On-chain  
  - **Silicon Ranking** → Best Technical Analysis  

This lets you answer quickly: *“Who is best overall right now?”* and *“Who is strongest on a specific pillar for this timeframe?”*
 
:::note
**Oxygen Swarm is not included in per-project rankings.**  
Oxygen describes the macro regime and risk appetite of the current timeframe, which are shared across all crypto assets. Since it is a single contextual score, ranking projects by Oxygen **would be meaningless**.
:::
