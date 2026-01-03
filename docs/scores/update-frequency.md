---
title: Frequency & Quality checks
sidebar_position: 3
---

## Score Update Frequency

Timing matters.

Initially, for simplicity, we may rely on tools that aggregate data. The final objective is to stay as **close as possible to <span className="pink-glow-text">real-time data sources</span>**.

QQ Omega works with different update frequencies depending on the type of data:

- **On-chain data** → near real-time updates  
- **Market data (price, volume, order books)** → intraday or minute-level updates  
- **Social and narrative signals** → frequent pulls, every few minutes or hours  
- **Off-chain and fundamentals (team, docs, legal)** → daily or weekly updates  

Keeping the pipeline **fresh, robust, and close to the source** is a <span className="pink-glow-text">**core priority**</span>.  
If a data source degrades in quality or latency, it is reviewed or replaced.

## Quality Checks and Anti-Spam Filters

To keep scores clean and trustworthy, QQ applies multiple safeguards:

- **Data validation**
  - Check for missing values, impossible numbers, and duplicated entries.
- **Outlier detection**
  - Flag suspicious spikes, such as fake volume, wash trading, or bot-driven social spam.
- **Source cross-checking**
  - Compare information across multiple providers when possible.
- **Anti-gaming heuristics**
  - Detect patterns of behavior aimed only at farming a better score, such as short-term liquidity injections or wash activity designed to look active.

Only after passing these <span className="pink-glow-text">checks</span> does data flow into the agents and affect scores.  
If something looks wrong, data can be **flagged, downweighted, or excluded**.
