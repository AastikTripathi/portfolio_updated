---
title: Can 14 be a totient?
author: Saad Hassan
category: number-theory
superCategory: JEE
difficulty: Intermediate
publishDate: 2026-08-29
tags:
  - NumberTheory
  - EulerTotient
references: []
---
## Problem Statement

Does there exist a number $n$ such that $ \phi(n) = 14 $, where $\phi$ is the Euler-Totient function?

## Solution & Proof

Say that there is a number $n$ such that it has $\phi(n)=14$. Say

$$  n = \prod_{i=1}^k p_{i}^{a_{i}} $$

Where $p_{i}$ are prime numbers and $a_{i}$ is the positive exponent of prime in the number $n$. So, we have

$$  \phi(n) = \prod_{i=1}^{k} p_{i}^{a_{i}-1}(p_{i}-1) $$

Obviously, the number $n$ cannot have more than one odd prime as its divisor. For an odd prime number $p_{i}$, the number $(p_{i}-1)$ is a multiple of $2$, so if $n$ has more than one odd divisor, then $\phi(n)$ is  divisible by $4$, but $14$ is not divisible by $4$. So, it must contain at most one odd prime number. Since $14$ is divisible by $7$, the odd prime number must be $7$. But if for some $i$, the odd prime number is $p_{i}=7$, then $p_{i}-1$ is divisible by $3$. But $14$ is not divisible by $3$. Therefore, no such number $n$ exists.
