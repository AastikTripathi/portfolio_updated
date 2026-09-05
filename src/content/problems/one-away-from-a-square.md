---
title: One away from a square
author: Saad Hassan
category: number-theory
superCategory: BMO
year: 2023
difficulty: Intermediate
publishDate: 2026-08-30
tags:
  - BMO
  - BritishMathematicalOlympiad
  - NumberTheory
references:
  - title: BMO
---
## Problem Statement

Find all positive integers $n$ such that $n2^n+1$ is a perfect square.

## Solution & Proof

Say for some positive integer $k$
$$  n2^n+1 = k^2   $$
This immediately suggests that factorisation might be a way out. But before we subject it to our number theoretic scrutiny, let us get our hands dirty and see where this leads.

{% table %}
- $n$
- $n 2^n$
- $n 2^n + 1$
---
- 1
- 2
- 3
---
- 2
- 8
- 9 ($\checkmark$)
---
- 3
- 24
- 25 ($\checkmark$)
---
- 4
- 64
- 65
---
- 5
- 160
- 161
---
- 6
- 384
- 385
{% /table %}

It seems that there are no other solutions. Let us work on this angle. We will only be interested in the values of $n \ge 7.$ $$  \implies n 2^n = (k-1)(k+1) \tag{A} $$ Since $k+1$ and $k-1$ differ only by $2$, it suggests that not many powers of $2$ go into both. Say $k+1 =2 l \implies k-1 = 2(l-1).$ Therefore, equation $(A$) transforms into $$ n 2^{n-2} = l(l-1)   $$ Since gcd$(l,l-1)$ is $1,$ therefore, we can have one of the two cases

**[(A)]** $2^{n-2}$ divides $l \implies l \ge 2^{n-2}$ and $l-1 \le n  \implies 2^{n-2} - n \le 1.$ But we see that $ 2^{n-2} - n = 25$ for $n=7$ and using induction we can prove that this is never less than or equal to $1$ for $n \ge 7.$ This part of the proof is left to the reader.

**[(B)]** Or,   $2^{n-2}$ divides $l-1 \implies l-1 \ge 2^{n-2}$ and $ l \le n \implies 2^{n-2} - n \le -1, $ which is absurd for the same reasons as in the above part.

So, there is no value of $n \ge 7,$ that satisfies the condition. And the only values of $n$ that satisfy the conditions are $n=2,3.$
