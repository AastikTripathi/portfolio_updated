---
title: Eight Positive Roots
author: Saad Hassan
category: algebra
superCategory: JEE
year: 2003
difficulty: Intermediate
publishDate: 2026-08-29
tags:
  - Polynomial
  - APMO
  - CauchySchwarzInequality
references:
  - title: 'APMO 2003 '
---
## Problem Content

Let $a,b,c,d,e,f$ be real numbers such that the polynomial
$$   p(x) = x^8 -4x^7 + 7x^6 + ax^5+bx^4+cx^3+dx^2+ex+f $$
factorises into eight linear factors $x-x_{i}$ with $x_{i}>0$ for $i=1,2,3,\dots, 8.$ Determine all possible values of $f.$

## Solution & Proof\

\
**Rumination:** Skip to the solution if you do not want to read what led me to the solution. I see a polynomial whose eight roots are positive, and yet only three coefficients are known. These few conditions lead me to suspect that some inequality is at work, perhaps AM-GM or Cauchy Schwarz.\
\
**Solution:**

The given polynomial has positive zeros $x_{i}$, where $i=1,2,3,\dots, 8.$ Using Vieta's we have
$$ \sum_{i=1}^{8}  x_{i} = 4, \ \text{and} \tag{A} $$
$$ \sum_{1\le i < j \le 8} x_{i}x_{j} =7 \tag{B}  $$
Using $(A)$ and $(B)$ we have the following.
$$  \sum_{i=1}^8 x_{i}^2 = \left(\sum_{i=1}^8 x_{i}  \right)^2 -2 \sum_{1\le i < j \le 8} x_{i}x_{j} = (4)^2 - 2 \cdot 7 =2 \tag{C} $$
Using the Cauchy-Schwarz Inequality, we have
$$ (1^2+1^2+\dots+1^2)(x_{1}^2+x_{2}^2+\dots +x_{8}^2) \ge (x_{1}+x_{2}+\dots +x_{8})^2  \tag{D} $$
Using $(A),(B),(C)$ we get that equality holds in $(D).$ Therefore,
$$ x_{1}=x_{2} = \dots = x_{8} =\frac{1}{2}.   $$
Using Vieta's again
$$ f = \prod_{i=1}^8 x_{i}  = \left(\frac{1}{2} \right)^8 \qed  $$
