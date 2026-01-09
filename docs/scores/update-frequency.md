---
title: Frequency & Quality checks
sidebar_position: 3
description: QQ Omega's real-time data updates, quality validation, wash trading detection, and anti-spam filters that ensure accurate crypto scoring.
keywords:
  - real-time crypto data
  - data quality validation
  - wash trading detection
  - anti-spam filters
  - score update frequency
  - data integrity
  - crypto data pipeline
  - QQ Omega data quality
image: /img/qq-og-image.png
---

## Score Update Frequency

Timing matters.

QQ Omega operates with multiple update frequencies calibrated to the nature of each data stream. On-chain inputs are processed as close to real time as possible, while market data such as price action, volume, and order book dynamics are refreshed at intraday or minute level intervals. Off-chain inputs and fundamental information including team updates, documentation changes, and legal or regulatory disclosures are incorporated as new information is published through official channels.

While early implementations may rely on aggregated data providers for simplicity, the long term objective is to remain as close as possible to <span className="pink-glow-text">real-time data sources</span>. Maintaining a data pipeline that is fresh, robust, and close to the source is a <span className="pink-glow-text">core priority</span>, and any data source that degrades in quality or latency is continuously reviewed and replaced when necessary.

## Quality Checks and Anti-Spam Filters

To keep scores clean and trustworthy, QQ applies a layered validation process before any data is allowed to influence agent outputs or final scores. Incoming data is continuously inspected for missing values, impossible figures, and duplicated entries, while statistical methods are used to identify abnormal patterns such as artificial volume spikes, wash trading, or bot driven activity. Whenever possible, information is cross checked across multiple independent data providers to reduce source specific bias.

In parallel, QQ applies anti gaming heuristics designed to detect behaviors aimed solely at inflating scores rather than reflecting genuine activity, including short term liquidity injections or wash activity engineered to appear organic.

Only after passing these <span className="pink-glow-text">quality checks</span> does data propagate through the AI agents and affect scores. When anomalies are detected, inputs can be <span className="pink-glow-text">flagged</span>, <span className="pink-glow-text">downweighted</span>, or <span className="pink-glow-text">excluded</span> to preserve the integrity of the system.
