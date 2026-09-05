---
title: A polynomial with no integer root
author: Saad Hassan
category: algebra
superCategory: ISI
year: 2026
difficulty: Intermediate
publishDate: 2026-08-29
tags:
  - ISI
  - Integer Root
  - Polynomial
references:
  - title: ISI 2026
---
## Problem Content\

\
Let $p(x)$ be a polynomial with integer coefficients of degree greater than or equal to $5$. Suppose $p(0)$ and $p(1)$ are both odd integers. Then $|{x \in \mathbb{Z}: p(x)=0}|$ equals\

## Solution & Proof\

Given that $p(x)$ is a polynomial with integer coefficients such that $p(0)$ and $p(1)$ are odd.

**Claim:** The equation $p(x)=0$ does not have any integer root.

**Proof:** For the sake of contradiction, suppose that an integer $a$ is a zero of the polynomial $p(x) \implies p(a)=0.$ So, we have

$$  a-0 | p(a)- p(0) \implies a | p(0)  $$

Since $p(0)$ is odd, therefore, $a$ is odd. Similarly,

$$ a-1 | p(a)-p(1) \implies a-1 | p(1)  $$

Since $p(0)$ is odd, therefore, $a-1$ is odd. However, $a$ and $a-1$ cannot be simultaneously odd. Therefore, our assumption was incorrect. Therefore, there is no integer root of the equation. Hence $|{x \in \mathbb{Z}: p(x)=0}|=0. $
