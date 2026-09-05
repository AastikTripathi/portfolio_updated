---
title: A function that is identically zero
author: Saad Hassan
category: calculus
superCategory: JEE
year: 1998
difficulty: Intermediate
publishDate: 2026-08-29
tags:
  - Calculus
  - IntegratingFactor
references:
  - title: JEE,1998
---
## Problem Statement

Let $f$ be a continuous, non-negative function, defined on $x \ge 0 $, and define $ F(x) = \int_{0}^{x} f(t) dt,  $  for $x \ge 0$. If for some $c>0, \ f(x) \le c F(x), $ for all $x \ge 0$, then prove that $f(x)=0$ for all $x \ge 0$.

## Solution & Proof

Since we have $F(x) = \int_{0}^{x} f(t) dt \implies F'(x) = f(x)$. So, the given inequality becomes:
$$    F'(x) - cF(x) \le 0  $$
$$ \implies e^{-cx} F'(x) - c e^{-cx} F(x) \le 0 $$
$$ \implies \frac{d}{dx} (e^{-cx}F(x)) \le 0  $$
So, $g(x)= e^{-cx}F(x) $ is a decreasing function. $\implies  g(x) \le g(0)$ for all $x \ge 0$. Now, $F(0)=0$. $g(x) \le 0$ for $x \ge 0 \implies  e^{-cx}F(x) \le 0  $  for $x \ge 0. $
$$ \implies F(x) \le 0 \ \text{for} \ x \ge 0. $$
Since $f$ is non-negative, therefore $ F(x) =\int_{0}^{x} f(t) dt \ge 0 $ for all $x \ge 0 $. Therefore, we conclude that $F(x)= 0$ for all $x \ge 0$.  Since $f$ is continuous and non-negative and $\int_{0}^{x}f(t)dt = 0$ for all $x \ge 0 \implies f(x)=0$ for all $x \ge 0$.
