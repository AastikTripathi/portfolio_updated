---
title: The Invariance Principle
subtitle: Parity, Modular Residues, Colorings & Monovariants
category: Combinatorics
difficulty: Intermediate
publishDate: 2026-08-14
author: deMath Academic Team
icon: ⚡
estimatedReadTime: 15 min lesson
tags:
  - Parity
  - Grid Tiling
  - State Machines
  - Monovariants
---

## Introduction & Core Concept

In many competition problems, you are presented with a system that changes according to specified rules (e.g. numbers written on a blackboard replaced by their difference, tokens moved on a grid, or chameleons changing colors). The question often asks whether a certain state can ever be reached.

Directly tracking all possible sequences of moves rapidly leads to exponential growth. The **Invariance Principle** instructs us to ignore the transient states and look for a property or quantity $I(S)$ of the system state $S$ that remains **constant** under every valid operation:

$$I(S_{\text{initial}}) = I(S_{\text{next}}) = I(S_{\text{final}})$$

If the desired final state $S_{\text{target}}$ has $I(S_{\text{target}}) \neq I(S_{\text{initial}})$, then the target state is **impossible** to reach!

---

## Standard Invariant Taxonomies

1. **Parity Invariants**: Quantities whose oddness/evenness does not change under valid moves. (e.g. Replacing $a, b$ with $|a-b|$ preserves the parity of the sum $a+b$).
2. **Modular Residue Invariants**: Quantities that remain invariant modulo $m$. (e.g. Modulo $3$ invariants in chameleon color-changing problems).
3. **Grid & Coloring Invariants**: Assigning colors or algebraic values ($1, -1, i$) to grid cells to show certain tilings or configurations are impossible.
4. **Monovariants**: Quantities that strictly increase or decrease with each step, proving that processes must terminate or cannot loop.

---

## Standard 4-Step Execution Workflow

1. **Observe**: Identify what changes and what stays the same after one step of the process.
2. **Define**: Define a mathematical function $I(S)$ on the state (e.g. sum, product, parity, count modulo $k$).
3. **Verify**: Verify that $I(S_{\text{after}}) = I(S_{\text{before}})$ for every allowed move.
4. **Conclude**: Compare $I(S_{\text{initial}})$ with $I(S_{\text{target}})$. If they differ, the target state is impossible.
