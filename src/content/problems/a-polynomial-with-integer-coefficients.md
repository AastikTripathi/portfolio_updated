---
title: 'A polynomial with integer coefficients '
author: Saad Hassan
category: algebra
superCategory: ISI
year: 2026
difficulty: Intermediate
publishDate: 2026-08-29
tags:
  - Polynomial
  - ISI
  - Divisibility
references:
  - title: ISI 2026
---
## Problem Content

Suppose $P$ is a polynomial with integer coefficients.

(a) Show that for distinct integers $m$ and $n, \ \frac{P(m)-P(n)}{m-n}$ is an integer.

(b) Hence or otherwise, prove that there do not exist distinct integers $a,b,c$ such that

$$    P(a)=b, \ P(b) =  c, \ \text{and} \ P(c) = a.   $$ \

## Solution & Proof

(a)Say that $P(x)=a_{k}x^k + a_{k-1}x^{k-1}+ \dots + a_{1}x + a_{0} $, is a polynomial of degree $k$, where $a_{k}\neq 0$ and $a_{i}$ for all $  i \in \lbrace 0,1,\dots, k \rbrace $ are integers. $$ P(m) = a_{k}m^k + a_{k-1}m^{k-1}+ \dots + a_{1}m + a_{0}, \ \text{and}  $$ $$ P(n) = a_{k}n^k + a_{k-1}n^{k-1}+ \dots + a_{1}n + a_{0}  $$ $$ \implies P(m)-P(n) = \sum_{r=1}^{k} a_{r} (m^r-n^r)  $$ Since $m-n| m^r - n^r $ for all $r \in \mathbb{N} $, therefore $ m-n| P(m)-P(n) $.

(b) For the sake of contradiction, suppose that there exist distinct integers $a,b,c$ such that $P(a)=b, P(b)=c, $ and $P(c)=a$. Using the previous result, we have:

$$ \begin{aligned} \text{(A)}\quad & b-a \mid c-b,\ \text{(B)}\quad & c-b \mid a-c,\ \text{(C)}\quad & c-a \mid a-b. \end{aligned} $$

But $ b-a|b-a \implies b-a| (b-a)+(c-b) \implies b-a| c-a.$ Using $(C)$, we know that $ c-a| a-b \implies c-a|b-a \implies c-a = \pm (a-b) $. So, we have

(A) If $c-a=b-a \implies c= b$, but that violates the assumption that $a,b,c$ are distinct. \
(B) If $ c-a = a-b \implies b,a,c $ are in AP. Similarly, it can be argued that $a,b,c$ are in AP, which gives us $a=b=c$, which is again a violation of the given condition.

Therefore, our assumption is incorrect, and there do not exist any such integers $a,b,c$.

**Here a | b means a divides b.**
