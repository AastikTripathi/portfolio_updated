---
title: When a prime meets Pythagoras!
author: Saad Hassan
category: number-theory
superCategory: BMO
year: 2014
difficulty: Intermediate
publishDate: 2026-08-30
tags:
  - BMO
  - NumberTheory
  - Prime
  - PythagorasTriples
references:
  - title: BMO,Round-1,2014
---
## Problem Statement

Positive integers $p,a$ and $b$ satisfy the equation $p^2+a^2=b^2.$ Prove that if $p$ is prime number greater than $3$, then $ a $ is a multiple of $12$ and $2(p+a+1)$ is  a perfect square.

BMO,1,2014

## Solution & Proof

To prove that $a$ is divisible by $12,$ we must prove that $a$ is divisible by $3$ and $4.$ Notice that for any integer $x,$ we have $x^2 \equiv 0, 1  (\mod{3})  $. In particular $a^2 \equiv 0 (\mod{3}) $ when $a$ is divisible by $3.$ Since $p$ is a prime number greater than $3,$ therefore $p$ is not divisible by $3 \implies p^2 \equiv 1 (\mod{3}). $ If $a$ is also not divisible by $3,$ then $a^2 \equiv 1 (\mod{3}), $ therefore, $p^2+a^2 = b^2 \equiv 2 (\mod{3}), $ which is impossible. Therefore, $a$ is divisible by $3.$

To prove that $a$ is divisible by $8$, it is natural to check the equation $ (\mod{8}). $ For any integer $x,$ we have $x^2 \equiv 0,1,4 (\mod{8}).  $ Since $p$ is an odd prime, therefore $p^2 \equiv 1 (\mod{8}).$ And we have $p^2 +a^2 =b^2 $, therefore for $b^2 $ to attain one of the values $ {0,1,4 } (\mod{8}), $ we must have $x^2 \equiv 0,1,4 (\mod{8}).  $ Since $p$ is an odd prime, we have $p^2 \equiv 1 (\mod{8}).$ and we have $p^2 +a^2 =b^2 $, therefore for $b^2 $ to attain one of the values $ {0,1,4 } (\mod{8}), $ we have $a^2 \equiv 0 (\mod{8}). $ Therefore, $a^2$ is divisible by $8$ and therefore by $16,$ therefore $a$ is divisible by $4.$ Since, $a$ was divisible by $3$ in the first place, therefore $a$ is divisible by $12.$ Now, we have:
$$ p^2 = b^2 -a^2 = (b-a)(b+a)  $$

Since $p$ is a prime number, therefore $p^2$ can be expressed as the product of two positive integers in the following way $(1,p^2),(p,p),(p^2,1).$ Since $b+a>b-a,$ therefore the only possible factorisation of $p^2$ is $ 1 \cdot p^2.  $ That is, $  b-a=1$ and $b+a=p^2.$ This gives us $a=\frac{p^2-1}{2}.$
$$ 2(p+a+1) = 2 \left(p+ \frac{p^2-1}{2} +1 \right) =(p+1)^2 $$
Which is a perfect square.
