---
title: A curious digital sum
author: Saad Hassan
category: number-theory
superCategory: IMO
year: 1975
difficulty: Intermediate
publishDate: 2026-08-29
tags:
  - Fermat'sLittleTheorem
  - NumberTheory
  - IMO
references:
  - title: IMO 1975
---
## Problem Statement

For any number $n$, we define $f(n)$ as the sum of digits of $n$. Further, define

$$

\begin{aligned}

\underbrace{f(f(\dots f(n))) }_{k \ \text{times}} = f\underbrace{(f(\dots f(n))) }_{k-1 \ \text{times}}. \cr

\end{aligned}

$$

Let $N=4444^{4444}$. Find $f(f(f(N)))$.

## Solution & Proof

Notice that $4444 \equiv -2 (\mod{9}) \implies 4444^{4444} \equiv (2)^{4444} (\mod{9}).$ Since $2$ and $9$ are coprime and $\phi(9)=6,$ using Euler's extension of Fermat's Little Theorem, we have: $$ 2^{\phi(9)} \equiv 1 (\mod{9}) \implies 2^6 \equiv 1 (\mod{9}).  $$ $$ \implies 2^{4440} \equiv 1 (\mod{9}) \implies 2^{4444} \equiv 2^4 (\mod{9}) \equiv 7 (\mod{9}). $$ Notice that for $N=4444^{4444}$, the number $N$ is fewer than $(10^4)^{4444}$ and therefore has fewer than $17777 $ digits. $$  \implies f(N) < 17777 \times 9 = 159993. $$ So, $f(N)$ is at best a six-digit number. $$\implies f(f(N)) < 9 \times 6 =54 $$ Therefore, $f(f(N))$ is at most a two digit number less than $54$. $$ f(f(f(N))) \le 13 $$ Since we know that $f(f(\dots(N) )) (\mod{9}) $ is the same as $ f(N) (\mod{9}) $ and $f(N) \equiv 7 \mod{9} $, therefore $ f(f(f(N))) \equiv 7 (\mod{9}). $ But, we know that $f(f(f(N))) \le 13 \implies f(f(f(N))) = 7. $
