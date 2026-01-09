---
title: Hydrogen Swarm
sidebar_position: 4
---

## <img src="/img/Iht.png" alt="Hydrogen" style={{height: '2.5em', verticalAlign: 'middle'}} />Hydrogen | On-chain Flows Swarm

Hydrogen is the simplest and most abundant element in the universe: it flows, combines, and reveals where energy actually goes.  
In QQ Omega, <span className="gradient-text">**Hydrogen swarm**</span> plays a similar role for **on-chain behavior**: it shows who really holds a token, how capital moves between actors, and how these flows change over time.

### What Hydrogen Is

The Hydrogen Swarm focuses on <span className="pink-glow-text">**on-chain flows and holder behavior**</span>:  
who owns the token, how concentrated that ownership is, and how balances move between clusters of actors.

Some agents track **how much capital is committed** to a protocol, including TVL across chains, vaults, and strategies.  
Others follow **how fast value circulates**, including trading volume, transfer activity, lending flows, liquidations, and more.  
Another set of agents maps **who the key holders are**, classifying them into clear categories such as CEXs, companies, institutions, investors, smart contracts, dead wallets, and unknown whales, and observing how their positions evolve over different timeframes.

Hydrogen aims to answer a primary question: *“What are the biggest on-chain actors actually doing with real money, both now and over time?”*

### Core Dimensions

Across the swarm, Hydrogen continuously evaluates and updates a set of core flow dimensions, such as:

- **TVL: committed capital**  
  An agent focused on **Total Value Locked (TVL)** measures how much capital is actually parked in the protocol’s smart contracts and related vaults.  
  It tracks:
  - Aggregate TVL by chain and by major product line (lending, LPs, staking, structured products, and similar categories)  
  - Asset composition, including stablecoins, major assets, and long-tail assets  
  - TVL changes over time  
  This provides a view of how **sticky or flighty** the capital is, and how sensitive it is to market moves or incentives.

- **Volumes: how fast value circulates**  
  Another agent monitors **volumes** across all relevant activities, including:
  - Trading volumes on DEXs, including spot markets and on-chain perpetuals where visible, adjusted for abnormal events  
  - Transfer volumes between key contracts and addresses  
  - Lending and borrowing flows, liquidations, and repayments  
  - Bridge flows when they are part of the protocol’s actual usage  
  Over time, this shows whether the protocol is seeing **organic usage**, speculative churn, or idle liquidity sitting still.

- **Holder composition: who actually owns the token**  
  A dedicated agent classifies token balances by **actor category**, building a map of who controls supply.  
  Typical clusters include:
  - Centralized exchanges (CEXs)  
  - Companies and project-related entities  
  - Institutions and funds  
  - Retail and individual investors  
  - Smart contracts, including AMMs, lending markets, and staking contracts  
  - Dead wallets and burn addresses  
  - Unknown whales, meaning large holders without clear labels  

  For each cluster, it measures:
  - Percentage of **circulating supply** held  
  - Number of wallets and concentration, such as the top 100 holders  
  - Share of liquid versus locked or staked positions  

  This reveals whether the token is broadly distributed, dominated by a few players, or heavily parked on intermediaries such as CEXs and DeFi contracts.

- **Holder dynamics: who is accumulating or distributing**  
  Another agent tracks **changes in balances** across the same clusters over different timeframes.  
  It looks at changes in the percentage of supply held by each cluster, indicating accumulation or distribution, for example:
  - Net inflows and outflows to and from CEXs  
  - Behavior of large holders and unknown whales  
  - Shifts between self-custody, smart contracts, and centralized venues  

  The output is a set of clear signals indicating whether:
  - Whales are quietly accumulating or exiting  
  - CEX balances are rising, which may indicate future sell pressure, or falling, which may reflect withdrawals to long-term holding or DeFi  
  - Protocol contracts are gaining or losing deposits in a way consistent with TVL and volume trends  

Taken together, these agents turn raw on-chain data into **behavioral insight**: not just who holds what, but how their posture changes across different time horizons.

### How it Connects to the Rest of QQ Omega

The Hydrogen swarm forms the <span className="pink-glow-text">**behavioral layer**</span> of QQ Omega’s scoring and decision system.  
It provides the on-chain truth that either **confirms or contradicts** what other swarms observe.

It ensures the system always maintains a grounded, data-driven view of:
- who actually controls the token today,  
- how concentrated or diversified ownership really is,  
- whether key actors are **adding risk, reducing exposure, or staying flat**,  
- how TVL and volumes evolve across different timeframes in response to market and protocol events.

Other swarms use Hydrogen’s insights to:
- validate whether strong narratives and “good tokenomics” are supported by real capital flows,  
- detect early accumulation or distribution by important actors,  
- adjust conviction when on-chain behavior diverges from off-chain storylines.

Hydrogen is where speculation meets reality. If something matters, it eventually shows up on-chain, and Hydrogen is watching.
