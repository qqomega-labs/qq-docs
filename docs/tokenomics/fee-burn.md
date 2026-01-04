---
title: Burn and POL Mechanism
sidebar_position: 2
---

### How It Works

Fees **received by the dev wallet** are processed according to the rules below.

### Buyback and Burn Allocation
- <span className="pink-glow-text">**12% of the fees**</span> received by the dev wallet are allocated to a <span className="pink-glow-text">**buyback and burn**</span> mechanism for the $QQ token.
- These fees are used to **buy $QQ from the market** and then **burn the tokens permanently** by sending them to a dead wallet.

### POL Allocation (Protocol-Owned Liquidity)
- <span className="pink-glow-text">**17% of the fees**</span> received by the dev wallet are allocated to <span className="pink-glow-text">**POL (Protocol-Owned Liquidity)**</span>.
- POL means the protocol **buys $QQ and $VIRTUAL on the market** and **adds them as liquidity** to strengthen the $QQ/$VIRTUAL pool over time.

### Burn Rules
- The burn is **capped at a maximum of 25,000,000 $QQ per calendar month** across all executions in that month.
- If, after buybacks, the amount of $QQ exceeds **25,000,000 $QQ in a given month**:
  - **Up to 25,000,000 $QQ → burned**
  - **Any amount above 25,000,000 $QQ → sent to the airdrop wallet**
- The burn process will continue until the total supply reaches <span className="pink-glow-text">**???.???.???**</span> $QQ.  
  The exact final supply is **not predetermined** and depends on protocol activity, but the burn will account for **at least 50% of the initial total supply**.

### Summary
As fees are distributed to the dev wallet, the flow is:

- **15% of fees → <span className="pink-glow-text">buy</span> $QQ on the market**
- **First 25,000,000 $QQ per month → <span className="pink-glow-text">**burned**</span>**
- **Anything above 25,000,000 $QQ per month → <span className="pink-glow-text">**airdrop**</span> wallet**
- **15% of fees → <span className="pink-glow-text">**buy**</span> $QQ and $VIRTUAL and add <span className="pink-glow-text">**liquidity**</span> to the LP**
- **The total burn has no fixed upper limit, but will be at least 50% of the initial total supply**


### Processing Cadence
- Virtuals routes taxed trades through an automated fee pipeline (tax → swap to $VIRTUAL → distribution).
- Distributions are **periodic** and depend on **accumulated trading activity and thresholds**, so timing is not fixed.
- **Each time** a distribution is received, the allocations above are executed.
- We publish a **monthly recap** aggregating all executions within the calendar month.

### Transparency
For full transparency, we will publish **on-chain proofs every month**, clearly showing:

| Category        | Amount           | Transaction Hash | Wallet / Contract | Notes                |
|-----------------|------------------|------------------|-------------------|----------------------|
| Buyback         | 1,250,000 QQ     | 0x8b.......................aaaa    | Buyback Treasury  | Market buy           |
| Burn            | 800,000 QQ       | 0x3e.......................fedc      | Burn Address      | Permanent removal    |
| Airdrop         | 300,000 QQ       | 0xf6.......................420f      | Airdrop Wallet    | Community rewards    |
| POL / Liquidity | 150,000 USDC     | 0xff.......................9631      | LP Contract       | QQ+VIRTUAL bought and added to pool        | 0x87.......................026a
