---
title: An endless prime chain?
author: Saad Hassan
category: number-theory
superCategory: JEE
difficulty: Intermediate
publishDate: 2026-08-29
tags:
  - NumberTheory
  - Fermat'sLittleTheorem
references: []
---
## Problem Statement

Let $\lbrace a_n\rbrace _{n=0}^{\infty}$ be a sequence of integers satisfying

$$ a_{n+1}=2a_n+1. $$

Is there an $a_0$ such that the sequence consists entirely of prime numbers.

## Solution

Say that there is one such $a_{0}$ for which the sequence consists entirely of primes. The given recurrence can be rewritten as

$$  a_{n+1}+1  = 2(a_{n}+1) $$

Say that $a_{n}+1=b_{n}$

$$  \implies b_{n+1} = 2 b_{n} $$

So, the sequence $ \lbrace b_{i}\rbrace_{i \ge 0} $ is a Geometric progression. And therefore, $$   b_{n} = b_{0} 2^{n} = (a_{0}+1)2^n = a_{n}+1 \implies a_{n} = (a_{0}+1)2^n -1  $$

$$ \implies a_{n} = 2^n a_{0} + 2^n-1 $$

Since $a_{0}$ is also a prime, so let $a_{0}=p$(a prime number).

$$ a_{p-1} = 2^{p-1} p + 2^{p-1}-1  $$

Using Fermat's $2^{p-1}-1$ is divisible by $p$ and $ 2^{p-1} p$ is divisible by $p$, therefore $a_{p-1}$ is divisible by $p$ and hence cannot be a prime. So, this sequence cannot output only primes.
