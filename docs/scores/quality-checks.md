---
title: Quality checks
sidebar_position: 7
---

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

Only after passing these checks does data flow into the agents and affect scores.  
If something looks wrong, data can be **flagged, downweighted or excluded**.
