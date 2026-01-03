---
title: Burn and POL Mechanism
sidebar_position: 2
---

### How It Works

Fees **received by the dev wallet** are processed according to the rules below.

### Buyback and Burn Allocation
- <span className="pink-glow-text">**15% of the fees**</span> received by the dev wallet are allocated to a <span className="pink-glow-text">**buyback and burn**</span> mechanism for the $QQ token.
- These fees are used to **buy $QQ from the market** and then **burn the tokens permanently** by sending them to a dead wallet.

### POL Allocation (Protocol-Owned Liquidity)
- <span className="pink-glow-text">**15% of the fees**</span> received by the dev wallet are allocated to <span className="pink-glow-text">**POL (Protocol-Owned Liquidity)**</span>.
- POL means the protocol **buys $QQ and $VIRTUAL on the market** and **adds them as liquidity** to strengthen the $QQ/$VIRTUAL pool over time.

### Monthly Burn Cap
- The burn is **capped at a maximum of 25,000,000 $QQ per calendar month** across all executions in that month.
- If, after buybacks, the amount of $QQ exceeds **25,000,000 $QQ in a given month**:
  - **Up to 25,000,000 $QQ → burned**
  - **Any amount above 25,000,000 $QQ → sent to the airdrop wallet**

### Summary
As fees are distributed to the dev wallet, the flow is:

- **15% of fees → <span className="pink-glow-text">buy</span> $QQ on the market**
- **First 25,000,000 $QQ per month → <span className="pink-glow-text">**burned**</span>**
- **Anything above 25,000,000 $QQ per month → <span className="pink-glow-text">**airdrop**</span> wallet**
- **15% of fees → <span className="pink-glow-text">**buy**</span> $QQ and $VIRTUAL and add <span className="pink-glow-text">**liquidity**</span> to the LP**

### Processing Cadence
- Virtuals routes taxed trades through an automated fee pipeline (tax → swap to $VIRTUAL → distribution).
- Distributions are **periodic** and depend on **accumulated trading activity and thresholds**, so timing is not fixed.
- **Each time** a distribution is received, the allocations above are executed.
- We publish a **monthly recap** aggregating all executions within the calendar month.

### Transparency
For full transparency, we will publish **on-chain proofs every month**, clearly showing:
- How much $QQ was bought back
- How much $QQ was burned
- How much $QQ was sent to the airdrop wallet
- How much was allocated to POL and added as liquidity

### Burn Duration
The burn process will continue until the total supply reaches <span className="pink-glow-text">**???.???.???**</span> $QQ.
