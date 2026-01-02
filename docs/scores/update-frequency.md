---
title: Frequency & Quality checks
sidebar_position: 3
---

## Score update frequency

Timing matters.

Initially, for simplicity's sake, we could use tools that integrate data, but the final objective is to stay as **close as possible to the <span className="pink-glow-text">real-time data sources</span>**.

QQ Omega work with different frequencies depending on the type of data:

- **On-chain data** → near real-time updates
- **Market data (price, volume, orderbooks)** → intraday / minute-level.
- **Social & narrative signals** → frequent pulls (every few minutes / hours).
- **Off-chain / fundamentals (team, docs, legal)** → (daily / weekly).

Keeping the pipeline **fresh, robust and close to the source** is a <span className="pink-glow-text">**core priority**</span>.  
If a data source degrades in quality or latency, it is reviewed or replaced.

## Quality checks and anti-spam filters

To keep scores clean and trustworthy, QQ applies multiple safeguards:

- **Data validation**
  - Check for missing values, impossible numbers, duplicated entries.
- **Outlier detection**
  - Flag suspicious spikes (e.g. fake volume, wash trading, bot-driven social spam).
- **Source cross-checking**
  - Compare information across multiple providers when possible.
- **Anti-gaming heuristics**
  - Detect patterns of behaviour aimed only at “farming” a better score (e.g. short-term liquidity injections, wash activity to look active).

Only after passing these <span className="pink-glow-text">checks</span> does data flow into the agents and affect scores.  
If something looks wrong, data can be **flagged, downweighted or excluded**.
