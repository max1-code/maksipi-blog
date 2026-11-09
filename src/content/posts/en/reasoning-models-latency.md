---
title: "Real latency of reasoning models"
description: "Models that 'think' longer improve quality, but latency spikes. I measured real times and when it is worth paying the cost."
pubDate: 2026-11-07
category: "modelos"
lang: "en"
featured: false
metrics:
  cost: "2–8× more reasoning tokens"
  bottleneck: "Perceived latency (8–40s)"
  realUtility: "High only on high-stakes tasks"
conclusion: "Use them when the cost of being wrong is high. For most product flows, a fast model + solid prompt engineering still wins on total cost and user experience."
---

Reasoning (or "thinking") models changed the conversation. It is no longer just about final output quality — it is about how long they take to get there.

### What I measured

On analysis and planning tasks, quality improves noticeably. On simple extraction or classification tasks, the margin shrinks a lot and latency becomes the main problem.

### The real trade-off

- More reasoning tokens = higher cost.
- Longer waits = worse experience in interactive products.
- Quality gains are not linear: past a certain point, returns diminish.

### Practical recommendation

Run two paths. A fast one by default. A deep-reasoning one only when the task justifies it (or when the user explicitly asks).
