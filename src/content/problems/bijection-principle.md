---
title: Bijection Principle
author: Saad Hassan
category: combinatorics
superCategory: ISI
year: 2026
difficulty: Intermediate
publishDate: 2026-08-28
tags:
  - Combinatorics
  - Combi
  - ISI
  - Bijection
references:
  - title: ISI 2026
---
## Problem Statement

Let $$ S = \lbrace \frac{a}{b}: a,b \in \mathbb{N}, 0 < a< b< 2026, \text{gcd}(a,b)=1 \rbrace .  $$

Which of the following statements are true?

(A) Exactly half of the elements of $S \setminus { \frac{1}{2}} $ are less than $\frac{1}{2}$

(B) The number of elements of $S$ in the intervals $(0,\frac{1}{3}) $ and $(\frac{2}{3},1)$ are the same.

(C) Exactly two-thirds of the elements of $S$ are less than $\frac{1}{2}$

(D) Exactly one-third of the elements of $S$ are less than $\frac{1}{2}$

\

## Solution & Proof

**Answer:A,B**\
Notice that every fraction of the form $\frac{a}{b}$ that lies in $S$ satisfies $ 0< \frac{a}{b} < 1. $ Since gcd$(a,b)= $ gcd$(b-a,b)$. For every fraction $\frac{a}{b},$ such that $0<\frac{a}{b}<\frac{1}{2}$, there is another fraction $\frac{b-a}{b}$ such that $ \frac{1}{2}< 1-\frac{a}{b}< 1.  $  Notice that gcd$(a,b)= $ gcd$(b-a,b) =1.$ Therefore, there is a bijection from the elements of set $S$ lying in the interval $ (0,\frac{1}{2})$ to those elements of $S$ lying in the set $(\frac{1}{2},1).$ Similarly, for every fraction $\frac{a}{b},$ such that $0<\frac{a}{b}<\frac{1}{3}$, there is another fraction $\frac{b-a}{b}$ such that $ \frac{2}{3}< 1-\frac{a}{b}< 1.  $ Therefore, there is a bijection from elements of set $S$ lying in the interval $ (0,\frac{1}{3})$ to the elements of the set $S$ lying in the interval $(\frac{2}{3},1).$ Therefore, options $(A)$ and $(B)$ are correct.
