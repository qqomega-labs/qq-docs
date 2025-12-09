---
title: Update frequency
sidebar_position: 6
---

## Score update frequency

Timing matters.

QQ tries to stay as **close as possible to the real-time data sources**, with different frequencies depending on the type of data:

- **On-chain data** → near real-time updates (blocks / minutes).
- **Market data (price, volume, orderbooks)** → intraday / minute-level.
- **Social & narrative signals** → frequent pulls (e.g. every few minutes / hours).
- **Off-chain / fundamentals (team, docs, legal)** → slower updates (daily / weekly).

Keeping the pipeline **fresh, robust and close to the source** is a **core priority**.  
If a data source degrades in quality or latency, it is reviewed or replaced.
