---
title: A system of five variables
author: Saad Hassan
category: algebra
superCategory: JEE
difficulty: Intermediate
publishDate: 2026-09-05
tags:
  - Algebra
  - Vieta's
references:
  - title: Math Prize for Girls, 2025
---
## Problem Statement

Find the value of $a$ satisfying the equations
$$  a-b+c-d+e = 1  $$
$$  a-2b+4c-8d+ 16e = 128    $$
$$ a-3b+9c-27d+81e = 2187   $$
$$ a-4b+16c -64d+256e = 16384  $$
$$ a -5b +25c-125d+625e = 78125  $$

## Solution & Proof

**Rumination:** Skip to the solution if you do not want to know what led me to the solution. At first sight, I was also intimidated by the problem only to realise that there is a pattern. That is simply because, I did not want to solve this problem in a way that would make me question myself. These are powers of natural numbers. And once you see this, the solution is almost immediate.

**Solution:** Clearly, the equations are as follows.

$$ a r^0 - br^1 + cr^2 -dr^3+er^4 = r^7  $$

for $r=1,2,3,4,5.$ In other words, the zeros of the equation

$$ r^7- er^4 + dr^3 - cr^2 + br -a = 0  $$

We know that this is a seven degree polynomial whose leading coefficient is $1$ and whose five of the zeros are $1,2,3,4,5.$ Let the other zeros be $\alpha, \beta$

$$ \implies  r^7- er^4 + dr^3 - cr^2 + br -a = (r-1)(r-2)(r-3)(r-4)(r-5)(r-\alpha)(r-\beta)  $$

Since the coefficients of $r^6$ and $r^5$ are $0,$ we compare the coefficients to get

$$ 1+2+3+4+5+\alpha + \beta = 0 \implies \alpha + \beta = -15, \ \text{and}  $$

$$     \alpha \cdot \beta = 140  $$

Put $r=0$ in the equation to get

$$  - a = (-1)(-1)(-3)(-4)(-5)(\alpha \cdot \beta)  $$

$$  \implies a= 140 \cdot 5! = 16800. $$
