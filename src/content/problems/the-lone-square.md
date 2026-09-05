---
title: The Lone Square
author: Saad Hassan
category: number-theory
superCategory: JEE
difficulty: Intermediate
publishDate: 2026-08-30
tags:
  - NMTC
  - NumberTheory
  - Squares
references:
  - title: NMTC,2025
---
## Problem Statement

Prove that for each prime $p>2$ there exists exactly one positive integer $n$, such that $n^2+np$ is a perfect square.

## Solution & Proof

Say that $n^2+np$ is a perfect square. $$  \implies n^2+np = k^2 \implies n(n+p) = k^2  $$ Since $p$ is a prime number, there can be one of the two cases:

**(A)** $p$ does not divide $n$, in which case gcd$(p,n)=1$. Therefore, gcd$(n, n+p)=1$. Since $n(n+p)$ is a perfect square and $n$ and $n+p$ are co-prime, therefore, $n$ and $n+p$ are perfect squares. Therefore, assume that

$$  n = k^2, \ n+p = m^2  $$

$$ p = (m^2-k^2) = (m-k)(m+k)  $$

Since $p$ is prime, it forces $m-k$ to be $1$, that is, $m-k=1$. Therefore, we have $p=m+k = 2k+1.$ And therefore, $n = k^2= \left( \frac{p-1}{2} \right)^2, $ which is unique.

**(B)** $p$ divides $n$ that is $n = Ip$ for some positive integer $I>1$. It is trivial to see that for $n=p $ the expression is not a perfect square. So, the given equality becomes

$$  Ip (Ip+p) = k^2 \implies p^2 I(I+1) = k^2 $$

For this to be true, $I(I+1)$ must be a perfect square. But for every $I>0$, we have $$  I^2 < I(I+1)<(I+1)^2  $$ and therefore can never be a perfect square. Hence, this case is ruled out.
