---
title: Burn and POL Mechanism
sidebar_position: 2
description: $QQ burn mechanism - 12% LP fees for buyback/burn, 17% for Protocol-Owned Liquidity (POL). Target 50%+ supply reduction with on-chain transparency.
keywords:
  - QQ token burn
  - buyback and burn
  - Protocol-Owned Liquidity
  - POL mechanism
  - deflationary token
  - LP fee allocation
  - on-chain transparency
  - token supply reduction
  - QQ tokenomics
image: /img/qq-og-image.png
---

### How It Works

LP fees received by the protocol treasury are processed according to the allocation rules below.

### Burn Allocation

<span className="pink-glow-text">**12% of the LP fees**</span> are allocated to a <span className="pink-glow-text">**burn**</span> mechanism for $QQ. These funds are used to burn $QQ permanently, sending tokens to a dead address, reducing circulating supply over time.

### POL Allocation (Protocol-Owned Liquidity)

<span className="pink-glow-text">**17% of the LP fees**</span> are allocated to <span className="pink-glow-text">**POL (Protocol-Owned Liquidity)**</span>. POL means the protocol uses fees to add $QQ + paired assets as liquidity, supporting the $QQ pools on both **Solana** and **Base** long-term.

### Burn Rules

The burn process continues until the total supply reaches <span className="pink-glow-text">**???.???.???**</span> $QQ. The exact final supply is not predetermined and depends on protocol activity over time; however, the burn mechanism is designed to remove <span className="pink-glow-text">**at least 50% of the initial total supply**</span>.

### Monthly Processing & Transparency

Protocol allocations are executed via transparent on-chain transactions on a <span className="pink-glow-text">monthly cadence</span>, aggregating all activity from the prior period. Each month, QQ Omega publishes a public recap with **on-chain proofs** for every protocol-level financial action, allowing anyone to independently verify how funds are used, moved, or removed from circulation.

The table below provides an example of how these disclosures are presented, using representative entries for each operation type.

| Time       | Type         |     Amount     | Transaction Hash                              |
| ---------- | ------------ | :------------: | --------------------------------------------- |
| 1 Mar 2026 | Burn on SOL  |     31 QQ      | 5h3Z....................................4VdW  |
| 1 Mar 2026 | Burn on Base |     33 QQ      | 0x3e.....................................fedc |
| 1 Mar 2026 | Solana POL   | 12 QQ + 20 SOL | 3KfQ....................................CgrXa |
| 1 Mar 2026 | Base POL     | 15 QQ + 2 ETH  | 0xa5.....................................420e |
