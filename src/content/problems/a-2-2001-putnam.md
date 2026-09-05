---
title: A 2 2001 Putnam
author: Saad Hassan
category: combinatorics
superCategory: PUTNAM
year: 2001
difficulty: Intermediate
publishDate: 2026-08-28
tags:
  - Recurrence
  - GeneratingPolynomial
  - Probability
references:
  - title: A2, Putnam, 2021
---
## Problem Statement\

\
You have coins $C_{1},C_{2}, \dots, C_{n}.$ For each $k, C_{k}$ is biased so that, when tossed, it has a probability  $\frac{1}{2k+1}$ of falling Heads. If the $n$ coins are tossed, what is the probability that the number of heads is odd? Express the answer as a rational function of $n$.

## Solution & Proof\

\
Let $P_{k}$ be the probability that the total number of heads is odd when $k$ coins are tossed. Therefore, $P_{k+1}$ will be the sum of probability of an odd number of heads until $k$th  the coin is tossed multiplied by the probability of getting a tail in the $(k+1)$th toss and the probability of getting an even number of heads until the $k$th  the coin is tossed multiplied by the probability of getting a head in the $(k+1)$th toss.

$$

\begin{aligned}

&P_{k+1} = P_{k} \left( \frac{2k+2}{2k+3} \right) + (1-P_{k}) \frac{1}{2k+3} \cr

&(2k+3) P_{k+1} = (2k+1)P_{k} + 1 \cr

&\implies (2k+3) P_{k+1} - (2k+1)P_{k} = 1   \cr

& \implies \sum_{k=0}^{n-1} ( (2k+3) P_{k+1} - (2k+1)P_{k}) = \sum_{k=0}^{n-1} 1    \cr

&\implies (2n+1)P_{n}- 0 = n \ (\text{since} \ P_{0}=0) \cr

&\implies P_{n} = \frac{n}{2n+1}. \cr

\end{aligned}

$$

**Method:2** Consider the Polynomial

$$ \prod_{k=1}^{n} \left(  \frac{x}{2k+1} + \frac{2k}{2k+1}  \right)  $$

The sum of coefficients of odd powers of $x$ is equal to the required probability. Say

$$ P(x) = \prod_{k=1}^{n} \left(  \frac{x}{2k+1} + \frac{2k}{2k+1}  \right)  $$

The sum of coefficients of odd powers of $x$ is equal to $\frac{P(1)-P(-1)}{2}.$ Every factor in the product $P(1)$ is $1$, therefore $P(1)$ is $1$.

$$ P(-1) = \prod_{k=1}^{n} \frac{2k-1}{2k+1} = \frac{1}{2n+1}. $$

$$ P_{n} = \frac{1- \frac{1}{2n+1}}{2} = \frac{n}{2n+1}.  $$
