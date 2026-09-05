---
title: Few polynomials satisfy this
author: Saad Hassan
category: calculus
superCategory: JEE
difficulty: Intermediate
publishDate: 2026-08-29
tags:
  - Calculus
  - Polynomials
references:
  - title: Calculus
---
## Problem Statement

Consider differentiable functions $f: \mathbb{R} \rightarrow \mathbb{R} $ with the property that for all $a,b \in \mathbb{R} $ $$ f(b) - f(a) =(b-a) f'\left(\frac{a+b}{2} \right),  $$ then prove that prove that $f$ must be a polynomial of degree $2$ or fewer.

## Solution & Proof

Since $f$ is differentiable once, using the equality $f$ is differentiable twice. Therefore, $f$ is infinitely differentiable. Say $a+b=2x$ and $b-a=2y$, the given equation transforms into: $$ f(x+y)  - f(x-y) = 2y f'(x)  $$ Differentiating with respect to $y$, we get $$ f'(x+y) + f'(x-y) = 2f'(x) $$ Differentiating again with respect to $y$, we get $$ f''(x+y) - f''(x-y) = 0, \ \text{for all} \ x,y \in \mathbb{R}. $$ $$ \implies f''(x+y) = f''(x-y) , \ \text{for all} \ x,y \in \mathbb{R}.  $$ Since $x$ and $y$ can be chosen independently, therefore $x+y$ and $x-y$ are linearly independent and can take any value. $$  \implies f''(t) = 0, \ \text{for all} \ t \in \mathbb{R}. $$ Therefore, $f$ is a polynomial whose degree is $2$ or fewer. \
