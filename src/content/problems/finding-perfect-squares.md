---
title: Finding perfect squares
author: Saad Hassan
category: number-theory
superCategory: JEE
difficulty: Intermediate
publishDate: 2026-08-30
tags:
  - NumberTheory
  - Squares
references: []
---
## Problem Statement

Let $\lbrace a_{n}\rbrace_{n\ge1}$ be a sequence of natural numbers defined by

$$  a_{1}=1, \ a_{2} = 3, \ \text{and for every integer} \ n \ge 3,    $$

$$ a_{n} = (n+1) a_{n-1} - n a_{n-2}.   $$

Determine all positive integers $n$ for which $a_{n}$ is a perfect square.

## Solution & Proof

The given recurrence can be rewritten as
$$ (a_{n}-a_{n-1}) = n(a_{n-1}-a_{n-2}), \ \text{for} \ n \ge 3.  $$
Define $ a_{n}-a_{n-1} = b_{n}$, so we have $b_{2}=2$. The given recurrence becomes
$$  b_{n} = n b_{n-1} \implies \prod_{r=3}^{n} \frac{b_{r}}{b_{r-1}} = \prod_{r=3}^{n} r  $$
$$ \implies \frac{b_{n}}{b_{2}} = 3 \cdot 4 \cdots n \implies b_{n}=n! $$
Returning to the original recurrence, we have the following.
$$ a_{r} - a_{r-1} = r!   $$
$$ \sum_{r=2}^{n} (a_{r} - a_{r-1}) = \sum_{r=2}^{n} r!  $$
$$ \implies a_{n} - a_{1} = \sum_{r=2}^{n} r!   $$
$$ \implies a_{n} = \sum_{r=1}^{n} r!   $$
Clearly $a_{1},a_{3}$ are perfect squares, whereas $a_{2}$ and $a_{4}$ are not. For $n \ge 5$, we have $a_{n} \equiv 3 (\mod{10}) $ and therefore can never be a perfect square. So, the only perfect squares are $a_{1}$ and $a_{3}$.
