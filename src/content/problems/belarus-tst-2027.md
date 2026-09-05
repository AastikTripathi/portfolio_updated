---
title: Belarus, TST, 2027
author: Saad Hassan
category: number-theory
superCategory: JEE
difficulty: Intermediate
publishDate: 2026-08-30
tags:
  - NumberTheory
  - TST
  - Primes
references:
  - title: Belarus, TST, 2017
---
## Problem Statement

Find all prime numbers $a$ and $b$ such that $$ 20a^3 -b^3 =1  $$

Belarus, TST,2017

## Solution & Proof

**Rumination:** This problem has an obvious line of attack. So, do not be surprised by what I am about to do. To know **the why**, refer to my book **The Olympiad Companion**, page number $\mathbf{3.47-3.48}. $

**Solution:** For any integer $x,$ we have the following:

$$
x^3 \equiv \begin{cases}
-1 \cr
0 \cr
1
\end{cases} \pmod{7}
$$

Since $a^3, b^3 \in \{-1, 0, 1\} \pmod{7}$, and $20 \equiv -1 \pmod{7}$. For $20a^3 - b^3 \equiv 1 \pmod{7}$, we could have either one of the following two cases:

$$
(a^3, b^3) \equiv (-1, 0) \quad \text{or} \quad (0, -1) \pmod{7}
$$

(A) $a^3 \equiv -1 \pmod{7}$ and $b^3 \equiv 0 \pmod{7}.$ Since $b$ is prime, therefore $b$ must be $7 \implies 20a^3 = 7^3 + 1 = 344,$ which does not have an integer solution. Therefore, this case is discarded.

(B) $a^3 \equiv 0 \pmod{7}$ and $b^3 \equiv -1 \pmod{7}.$ Since $a$ is prime, therefore $a$ must be $7.$ The equation then transforms into $20 \cdot 7^3 - 1 = b^3 \implies b = 19.$

**So, the only primes $(a,b)$ that satisfy the given equation are** $\mathbf{(7,19).}$

**Another Solution:** Since there is something like $b^3+1$, which can be factored, so factorisation might just work. Let us try! We have:

$$ 20a^3-b^3=1 \implies b^3+1=20a^3. $$ Therefore,

$$ (b+1)(b^2-b+1)=20a^3. $$

We first observe that $b\neq 2$, since $b=2$ would give
$$
20a^3=9,
$$
which is impossible. Hence, $b$ is odd.

Also,
$$
\gcd(b+1,b^2-b+1)
=\gcd(b+1,3).
$$
If $b=3$, then
$$
20a^3=28,
$$
which is impossible. Therefore $b\neq3$, and hence
$$
\gcd(b+1,b^2-b+1)=1.
$$

Now
$$
20a^3=2^2\cdot5\cdot a^3.
$$
Since $b$ is odd, $b^2-b+1$ is odd. Also, $b^2-b+1>5$ for $b\ge5$. Since the two factors $b+1$ and $b^2-b+1$ are coprime, it follows that
$$
b^2-b+1=a^3
$$
or
$$
b^2-b+1=5a^3.
$$

In the first case,
$$
b+1=20,
$$
so $b=19$. Consequently,
$$
a^3=19^2-19+1=343=7^3,
$$
giving $a=7$.

In the second case,
$$
b+1=4,
$$
so $b=3$, which we have already ruled out.

Therefore, the only primes satisfying the given equation are
$$
\boxed{(a,b)=(7,19)}.
$$

Indeed, $$ 20(7^3)-19^3=6860-6859=1. $$

**Remark: Notice that the second method would not have worked if the equation were something like** $\mathbf{20a^3-b^3=2.}$ **In that sense, the first solution was more general.**
