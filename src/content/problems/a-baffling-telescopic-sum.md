---
title: A baffling telescopic sum
author: Saad Hassan
category: algebra
superCategory: JEE
difficulty: Intermediate
publishDate: 2026-08-29
tags:
  - TelescopicSum
  - Sum
references:
  - title: Telescopic Sum
---
## Problem Content \

Given that the $r$th term of a sequence, $T_{r}$, is
$$  T_{r} = \frac{2r^2-r^3+2r-2}{2^r r(r+1)}  $$
then calculate $ S_{n} = \sum_{r=1}^n T_{r} $\

## Solution & Proof\

Vibe, check! Does this problem give you the vibe that it might be telescoped? We hope so! In the absence of any bright idea, let us try to telescope this sum. That we want to find $V_{r}$ such that $T_{r}=V_{r}-V_{r-1}$ or $V_{r-1}-V_{r}.$ Look at the denominator, it has something like $r(r+1) $. So, it is already in the given form. But there is a nagging factor of $2$ in the denominator! So, if we can find a sequence $u_{r}$ such that $$     T_{r} = \frac{2r^2-r^3+2r-2}{2^r r(r+1)}  = \frac{2 (r+1) u_{r}- r u_{r+1}}{2^r r(r+1)}    $$ then we are done. Notice, given all clues $u_{r}$ must be a polynomial. So, we have $ 2r^2-r^3+2r-2 = 2 (r+1) u_{r}- r u_{r+1}. $ Therefore, let $u_{r}=ar^2 + br+ c$ and compare the coefficients on both sides, we get: $u_{r}=(r-1)^2$ $$  \implies  T_{r} = \frac{2r^2-r^3+2r-2}{2^r r(r+1)}  =  \frac{2(r+1)(r-1)^2-r (r)^2}{2^r r(r+1)}  $$ $$  \implies T_{r} = \frac{(r-1)^2}{2^{r-1}r}- \frac{r^2}{2^r(r+1)} $$ $$  \implies \sum_{r=1}^{n} T_{r} =  \sum_{r=1}^n \left ( \frac{(r-1)^2}{2^{r-1}r}- \frac{r^2}{2^r(r+1)} \right) = - \frac{n^2}{2^n(n+1)}. $$
