---
title: Evolution & limitations
sidebar_position: 4
---

## How agents contributes to the final score over time

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
- The system <span className="pink-glow-text">**learns**</span> which signals are **truly predictive** vs **pure noise**.

QQ Omega is designed as a **living system** that evolves with new data, not a fixed static model.

## Known limitations of the system

QQ Omega is powerful, but <span className="pink-glow-text">**not magic**</span>. Be conscious of:

- **Data availability**
  - We know that timing matters, but also accuracy. its for this that we try to go more close to source of datas. maintain this to the top is a evergreen priority for us, but can happen that some projects have opaque data, under-documented or very new and need time.
- **Model assumptions**
  - Some rules reflect the current market structure: if the market changes, rules must be updated.
- **Black swans**
  - Have an adjusted risk of your portfolio help you in case of extreme events (regulation, hacks, bans, macro shocks) can momentanly shake the market outside any model.

QQ Omega should be used as a **decision support tool**, not as an oracle that work without money management.
