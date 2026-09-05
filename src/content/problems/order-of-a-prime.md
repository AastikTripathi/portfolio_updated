---
title: Order of a prime
author: Saad Hassan
category: number-theory
superCategory: JEE
difficulty: Intermediate
publishDate: 2026-08-30
tags:
  - NumberTheory
  - Prime
  - Order
references: []
---
## Problem Statement

The **order** of $a$ modulo $p$ is defined to be the smallest positive integer $k$ such that $a^k \equiv 1 (\text{mod} \ p)$. Show that the order of $a$ must divide $p-1$, if $p$ is prime.

## Solution & Proof

If $a^k \equiv 1 (\text{mod} \ p) $, then obviously $p$ does not divide $a$. Therefore, by Fermat's little theorem we have:
$$  a^{p-1} \equiv 1 (\text{mod} \ p) \tag{A}  $$
Say $k$ is the order of $a$ modulo $p$. That is, $k$ is the smallest positive integer such that $a^k \equiv 1 (\text{mod} \ p)$. So, we have
$$   a^k \equiv 1 (\text{mod} \ p)  \tag{B} $$
And say, for the sake of contradiction, that $k$ does not divide $p-1$. So, we have
$$  p-1 = kq + r, \ \text{where} \ q \  \text{is an integer and } \ \ 1\le r \le k-1
\tag{C}  $$
Using $(B)$ one can deduce that $ a^{kq} \equiv 1 (\text {mod} \ p) $. Using this and $(A)$ we get
$$ p \ | a^{p-1}- a^{kq} \implies p \ |a^{kq}(a^{p-1-kq} -1 ) \implies p|a^{kq}(a^{r}-1)  $$
Since $p$ does not divide $a^{kq} \implies p|(a^{r}-1) \implies a^r \equiv 1 (\mod{p}) $. But $r<k$ and we had assumed $k$ to be the smallest positive integer for which $a^k \equiv 1 (\text{mod} \ p)$. So, we have reached a contradiction; therefore, our original assumption must be incorrect and $k$ divides $p-1$.
