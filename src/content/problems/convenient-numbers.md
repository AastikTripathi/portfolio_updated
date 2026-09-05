---
title: Convenient Numbers
author: Saad Hassan
category: combinatorics
superCategory: JEE
difficulty: Intermediate
publishDate: 2026-08-28
tags:
  - Combinatorics
  - Reflection Principle
  - Bijection
  - Mathematical Circle
references:
  - title: Mathematical Circles
---
## Problem Content

Call a positive integer $n$ to be **convenient** if $n^2+1$ is divisible by $1000001$. Prove that the total number of convenient numbers less than $1000000$ are even.

## Solution & Proof

For every convenient integer $a<1000000$, consider $$ b=1000001-a. $$ Then $$ b^2+1=(1000001-a)^2+1\equiv a^2+1\equiv 0\pmod{1000001}. $$ Thus, $b$ is also convenient. Moreover, if

$$ a=b\quad\Longrightarrow\quad 2a=1000001, $$ which is impossible since $1000001$ is odd. Therefore, every convenient integer $a$ is paired with a distinct convenient integer $b=1000001-a $.

Hence, convenient integers less than $1000000$ occur in pairs and, therefore, their total number is even.
