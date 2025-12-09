# How to Read QQ Scores

## How to interpret scores

QQ uses a **0–10 score** for each area (Fundamentals, Tokenomics, On-chain, TA, Macro) and a **global QQ Score** per project.

General reading:

- **8,5 – 10** → VERY CHEAP → very strong on that dimension  
- **6,5 – 8,4** → CHEAP → solid, with some risks or unknowns  
- **3,6 – 6,4** → FAIR VALUE → neutral / mixed signals  
- **1,6 – 3,5** → EXPENSIVE → weak, several red flags  
- **0 – 1,5** → VERY EXPENSIVE → very fragile / highly risky


---

## What “cheap / expensive” means in QQ

In QQ, “undervalued / overvalued” is **not a price prediction**.  
It is a **mismatch signal** between:

- the **quality scores** (Fundamentals, Tokenomics, On-chain, etc.)  
- and the **market behaviour** (price, volume, narrative, flows).

Examples:

- **High quality, weak price → “cheap zone”**  
  - Strong Fundamentals, Tokenomics, On-chain, but price lagging peers.  
- **Low quality, strong price → “expensive zone”**  
  - Weak Fundamentals or bad Tokenomics, but big hype and strong price.

QQ highlights these mismatches so you can decide to build a strategy if you want to:

- **accumulate in cheap zones**, or  
- **take profit / reduce risk in expensive zones**.

---

## Timeframes & risk profiles

QQ supports **3 different timeframes**, for different styles and risk levels:

- **24h view – Short-term (High risk / Fast decisions)**  
  - Focus on intraday moves, narrative spikes, sudden on-chain flows.  
  - For traders who accept noise in exchange for speed.

- **30d view – Swing / Mid-term (Balanced)**  
  - Smooths out daily noise, tracks trends, unlocks, liquidity shifts.  
  - For users who want signal over a few weeks.

- **365d view – Long-term (Low frequency / Structural)**  
  - Focus on structural quality: fundamentals, token design, long on-chain trends.  
  - For investors who care about durability and resilience.

You can see **the same project** with **3 different rankings** depending on timeframe.

---

## Score range & rankings

For each project, QQ can show:

- A **0–10 score** per area and global QQ Score.  
- A **percentile rank** vs all tracked projects  
  - (e.g. “Top 10% in Fundamentals”, “Bottom 20% in Tokenomics”).  
- **3 separate rankings**, one per timeframe:
  - **24h Ranking** – Short-term positioning  
  - **30d Ranking** – Mid-term positioning  
  - **365d Ranking** – Long-term positioning

This lets you see quickly:

- “Great long-term, but currently under pressure short-term”, or  
- “Short-term hot, but weak long-term structure”.

---

## Known limitations of the system

QQ is powerful, but **not magic**. Be consciuous of:

- **Data availability**  
  - We know that timing matters, but also accuracy. its for this that we try to go more close to source of datas.   maintein this to the top is a evergreen priority for us, but can happen that Some projects are opaque, under-documented or very new and need time.
- **Model assumptions**  
  - Some rules reflect the current market structure: if the market changes, rules must be updated.  
- **Lag on off-chain data**  
  - Legal changes, team events, or hidden deals may not be visible immediately.  
- **Black swans**  
  - Have an adjusted risk of your portfolio help you in case of extreme events (regulation, hacks, bans, macro shocks) can momentanly shake the market outside any model.)

QQ should be used as a **decision support tool**, not as an oracle that work without money management.

---

## How an agent contributes to the final score over time

Each agent:

1. **Starts with an initial rule set**  
   - Based on research, backtests, and expert assumptions.
2. **Observes reality over time**  
   - How did the signals correlate with real performance?  
   - Which red flags really mattered? Which didn’t?
3. **Gets iteratively improved**  
   - Thresholds and weights can be adjusted.  
   - New features can be added, useless ones removed.

As a result:

- The **contribution of each agent** to the final score becomes **more calibrated**.  
- The system learns which signals are **truly predictive** vs **pure noise**.

QQ is designed as a **living system**, not a fixed static model.

---

# Pipeline

## Score update frequency

Timing matters.

QQ tries to stay as **close as possible to the real-time data sources**, with different frequencies depending on the type of data:

- **On-chain data** → near real-time updates (blocks / minutes).  
- **Market data (price, volume, orderbooks)** → intraday / minute-level.  
- **Social & narrative signals** → frequent pulls (e.g. every few minutes / hours).  
- **Off-chain / fundamentals (team, docs, legal)** → slower updates (daily / weekly).

Keeping the pipeline **fresh, robust and close to the source** is a **core priority**.  
If a data source degrades in quality or latency, it is reviewed or replaced.

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
```
