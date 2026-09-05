---
title: Two Moduli, one number
author: Saad Hassan
category: algebra
superCategory: JEE
difficulty: Intermediate
publishDate: 2026-08-29
tags:
  - Polynomial
  - Polish
references:
  - title: Poland 1995
---
## Problem Content \

For a polynomial $P(x)$ with integer coefficients, $P(5)$ is divisible by $2$ and $P(2)$ is divisible by $5$. Prove that $P(7)$ is divisible by $10.$

## Solution & Proof\

\
Let $p(x)= a_{n}x^n +a_{n-1}x^{n-1} \dots + a_{1}x+a_{0} $ be a polynomial with integer coefficients. So we have $$  2 | P(5) = a_{n}5^n +a_{n-1}5^{n-1} \dots + a_{1}5+a_{0}, \ \text{and} \tag{A} $$ $$  5| P(2)= a_{n}2^n +a_{n-1}2^{n-1} \dots + a_{1}2+a_{0}, \  \tag{B} $$ Also, we have $$  P(7)= a_{n}7^n +a_{n-1}7^{n-1} \dots + a_{1}7+a_{0} $$ Since $7 \equiv 2 (\mod{5}), $ therefore we have $$ P(7) \equiv  a_{n}2^n +a_{n-1}2^{n-1} \dots + a_{1}2+a_{0}  (\mod{5})  $$ So using $(B),$ we have $5$ divides $P(7).$ Similarly, $7\equiv 5 (\mod{2}) $ $$  P(7) \equiv  a_{n}5^n +a_{n-1}5^{n-1} \dots + a_{1}5+a_{0}  (\mod{2})  $$ Using $(A)$ we have $2$ divides $P(7).$ Therefore, $10$ divides $P(7).$
