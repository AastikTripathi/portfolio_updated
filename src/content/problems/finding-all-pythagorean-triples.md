---
title: Finding all Pythagorean Triples
author: Saad Hassan
category: number-theory
superCategory: JEE
difficulty: Intermediate
publishDate: 2026-08-30
tags:
  - PythagoreanTriples
  - NumberTheory
references: []
---
## Problem Statement

Find all positive integers $x,y,z$ which satisfy the equation $$  x^2+y^2 = z^2. $$

## Solution & Proof

For any solution $(x_{0},y_{0},z_{0})$ of the equation, we can generate another solution ($kx_{0},k y_{0},k z_{0})$. So,  let $\text{gcd}(x,y,z)=1$. In fact, we can further argue that their pairwise gcd must be 1. Else, say $\text{gcd}(x,y) = d \neq 1$, then $d^2 | (x^2+y^2) \implies d^2| z^2 \implies d| z$. And therefore, $\text{gcd}(x,y,z)=d \neq 1$, which is a violation of our earlier assumption. Therefore, we proceed with the assumption that their pairwise gcd is 1.

**Parity Test:** No, two numbers can be even, else their gcd would not be 1. Therefore, two numbers must be odd and one even. If $x$ and $y$ are odd and $z$ is even, then $x^2+y^2 \equiv 2(\mod{4}) $ but $z^2 \equiv 0 (\mod{4})$, which is not possible.

So, one of the $x,y$ must be even and $z$ is odd. Without loss of generality, say $x$ is even, and therefore $y$ and $z$ are odd.

Rearranging this equation, we get $$  x^2 = (z-y)(z+y)  $$ Obviously, $z-y$ and $z+y$ are even. Say that gcd $(z-y,z+y)=l$, and therefore $ 2 | l$. Also, $ l| (z-y) $ and $l|(z+y) \implies l | (z+y) \pm (z-y) \implies l | 2z $ and $l | 2y$ . Since gcd$(y,z)=1 \implies l|2 \implies l =2$.

So, we have $z+y=2m^2$ and $z-y=2n^2$, where gcd$(m,n)=1$. And finally we have $z=(m^2+n^2)$, $y=m^2-n^2$ and $x= 2mn $, where $m,n$ are positive integers such that gcd$(m,n)=1$ and one of them is odd and the other is even. If both of them are odd, then $y$ and $z$ become even, which violates the assumption that gcd$(x,y,z)=1$. Of course, these solutions are primitive solutions, and more general solutions can be obtained by multiplying the primitive solutions by any positive integer.
