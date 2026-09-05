---
title: The Fundamental Period
author: Saad Hassan
category: number-theory
superCategory: IOQM
year: 2025
difficulty: Intermediate
publishDate: 2026-08-30
tags:
  - Period
  - PeriodicFunction
  - FundamentalPeriod
references:
  - title: IOQM,2025
---
## Problem Statement

Let $f$ be a function defined by:

$$ f(n)= \text{remainder when} \ n^n \ \text{divided by 7},  $$

for all positive integers $n$. Find the smallest integer $T$ for which $f(n+T)=f(n)$ for all positive integers $n$.

## Solution & Proof

The question asks us to find the fundamental period of $f$, where $f$ is defined as the remainder obtained by dividing $n^n$ by $7$. Consider the complete set of residues modulo $7$,

$$ A_7= \lbrace 0,1,2,3,4,5,6 \rbrace. $$

For any non-zero residue $a \in A_7$, Fermat's little theorem gives

$$ a^6\equiv 1 \pmod 7. $$

Hence,

$$ a^{n+6}\equiv a^n \pmod 7, $$

that is, $6$ is a common period for the powers of all non-zero residues modulo $7$. Since the base itself repeats after every $7$ integers, we obtain

$$ f(n+42)=f(n) $$

for all positive integers $n$. Thus, $42$ is a period of $f$.

It remains to show that $42$ is the smallest such period. Let $T$ be any period of $f$. Since
$$
f(7)=0,
$$
we must have $f(7+T)=0$, forcing $7\mid T$. Now, taking $n=3$, we get
$$
3^{3+T}\equiv (3+T)^{3+T}\equiv 3^3 \pmod 7,
$$
as $3+T\equiv 3\pmod 7$. Therefore,
$$
3^T\equiv 1\pmod 7.
$$
Since $3$ has the fundamental period $6$ modulo $7$, it follows that $6\mid T$. Hence,
$$
42=\operatorname{lcm}(6,7)\mid T.
$$
Therefore, the smallest positive integer $T$ for which $f(n+T)=f(n)$ for all positive integers $n$ is
$$
\boxed{42}.
$$
