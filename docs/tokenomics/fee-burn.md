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
- POL means the protocol **allocates protocol fees to market-buy $QQ and $ETH and add them as liquidity**, creating and supporting the $QQ/$ETH pool long term.



### Burn Rules

The burn mechanism is capped at a maximum of **25,000,000 $QQ per calendar month** across all executions within that month. If, following buybacks, the total amount of $QQ acquired in a given month exceeds **25,000,000 $QQ**, up to **25,000,000 $QQ** is burned, while any excess amount is automatically redirected to the airdrop wallet.

The burn process continues until the total supply reaches <span className="pink-glow-text">**???.???.???**</span> $QQ. The exact final supply is not predetermined and depends on protocol activity over time, however the burn mechanism is designed to remove <span className="pink-glow-text">**at least 50% of the initial total supply**</span>.


### Summary
As fees are distributed to the dev wallet, the flow is:

- **15% of fees → <span className="pink-glow-text">buy</span> $QQ on the market**
- **First 25,000,000 $QQ per month → <span className="pink-glow-text">**burned**</span>**
- **Anything above 25,000,000 $QQ per month → <span className="pink-glow-text">**airdrop**</span> wallet**
- **15% of fees → <span className="pink-glow-text">**buy**</span> $QQ and $ETH and add <span className="pink-glow-text">**liquidity**</span> to LP on Uniswap**
- **The total burn has no fixed upper limit, but will be at least <span className="pink-glow-text">50%</span> of the initial total supply**


### Processing Cadence

Virtuals routes taxed trades through an automated fee pipeline that applies the tax, swaps proceeds into $VIRTUAL, and distributes the resulting amounts according to the defined allocation logic. Distributions occur on a periodic basis and are triggered by accumulated trading activity and predefined thresholds rather than by a fixed schedule. Each time a distribution is executed, the full allocation process is applied in accordance with the rules above. All executions within a calendar month are aggregated and reported in a publicly available <span className="pink-glow-text">monthly recap</span>.


### Transparency

To ensure full transparency, QQ Omega publishes **monthly on-chain proofs** that document all protocol-level financial actions. Each entry is traceable on-chain and allows anyone to independently verify how funds are used, moved, or removed from circulation.

The table below provides an example of how these disclosures are presented, using representative entries for each operation type.

| Time     | Type        | Amount           | Transaction Hash              |
|----------|-------------|------------------|-------------------------------|
| 15 feb 2026 | Buyback     | 1,250,000 QQ     | 0x8b..........................................aaaa      |
| 15 feb 2026 | Burn        | 800,000 QQ       | 0x3e..........................................fedc      |
| 15 feb 2026 | Airdrop     | 300,000 QQ       | 0xf6..........................................420f      |
| 15 feb 2026 | POL         | 20,000 USDC     | 0x87..........................................026a      |

These disclosures are published on a recurring basis and serve as a verifiable record of protocol activity, reinforcing accountability and trust through direct on-chain evidence.
