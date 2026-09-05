---
title: 'The Möbius Triple '
author: Saad Hassan
category: number-theory
superCategory: JEE
difficulty: Intermediate
publishDate: 2026-08-30
tags:
  - MöbiusFunction
  - NumberTheory
references: []
---
## Problem Statement

$$
\mu(n) = \begin{cases}
1, & \text{if } n = 1 \cr
0, & \text{if } p^2 \mid n \text{ for any prime } p \cr
(-1)^r, & \text{if } n = p_1 p_2 \cdots p_r \text{ for each distinct prime } p_i
\end{cases}
$$

Find a value of $n \in \mathbb{N}$ such that $\mu(n) + \mu(n+1) + \mu(n+2) = 3$.

## Solution & Proof

Since $ \mu(n) + \mu(n+1) + \mu(n+2) =3  $, therefore, we have $ \mu(n) = \mu(n+1) = \mu(n+2) =1 $. Notice that, between three consecutive integers, two must be of the same parity! The ones of the same parity cannot be even, because between two consecutive even numbers, one of them must be divisible by $4$ and hence its Möbius would be $0$. So we have established that the first number must be odd. One can see that $n=1$ does not work! So, all the numbers must be the product of an even number of distinct primes. So, you can play with this and get $n=33$ as one of the answers. In fact $n=201$ is another such $n$.

**Does there exist infinitely many values of n**?
