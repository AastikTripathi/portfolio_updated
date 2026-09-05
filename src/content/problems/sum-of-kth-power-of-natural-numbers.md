---
title: Sum of kth power of natural numbers
author: Saad Hassan
category: algebra
superCategory: ISI
year: 2026
difficulty: Intermediate
publishDate: 2026-08-29
tags:
  - Bernoulli'sNumbers
  - SumOfKthPowers
  - Algebra
  - ISI2026
references:
  - title: ISI 2026
---
## Problem Content

Let $k$ be a non-negative integer.

(a) Show that there exists a unique polynomial $P_{k}$ of degree $k+1$ with real coefficients such that

$$  \sum_{i=1}^{n} i^k = P_{k}(n) \ \text{for all} \ n \ge 1. $$

(b) Determine the coefficient of $x^{k+1}$ in $P_{k}(x).$

(c) Hence or otherwise, determine the coefficient of $x^k$ in $P_{k}(x). $\

## Solution & Proof

(a) Obviously, for $k=1$

$$ \sum_{i=1}^n i = \frac{n(n+1)}{2} =P_{1}(n), \ \text{and for}  k=2 $$

$$  \sum_{i=1}^n i^2 = \frac{n(n+1)(2n+1)}{6} =P_{2}(n), \ \text{and for } k=3 $$

$$   \sum_{i=1}^n i^3 = \left(\frac{n(n+1)}{2} \right)^2 =P_{3}(n) $$

**Proof via strong induction:** It has been shown that for values of $k=1,2,3$, the polynomial $P_{k}(n)$ is unique and of degree $k+1$. Suppose that this is true for all values of $ k \le r-1$. We shall prove it for $k=r$. Notice that

$$ (i+1)^{r+1} - i^{r+1} = \binom{r+1}{1} (i)^{r} + \binom{r+1}{2} (i)^{r-1}+ \dots   $$

$$  \implies \sum_{i=0}^{n} \left((i+1)^{r+1} - i^{r+1} \right) =\sum_{i=0}^{n} \left( \binom{r+1}{1} (i)^{r} + \binom{r+1}{2} (i)^{r-1}+ \dots \right)  $$

$$  \implies (n+1)^{r+1} = (r+1) \sum_{i=0}^{n} i^r + \frac{r(r+1)}{2} \sum_{i=0}^{n} (i)^{r-1}+ \dots  \tag{A} $$

By the inductive hypothesis, the expression $ \frac{r(r+1)}{2} \sum_{i=0}^{n} (i)^{r-1}+ \dots  $ is a polynomial in $n$ of degree $r$, so let us call this polynomial $P_{r-1}(n)$. Consequently, we have

$$ (n+1)^{r+1} = (r+1) \sum_{i=0}^{n} i^r  + \frac{r(r+1)}{2} P_{r-1}(n) + \dots $$

$$ \implies \sum_{i=1}^{n} i^r = \frac{(n+1)^{r+1}}{r+1} -\frac{r(r+1)}{2} \frac{P_{r-1}(n)}{r+1} + \dots \tag{B}  $$

Hence, we have proved that $ \sum_{i=1}^{n} i^r $ is a unique polynomial in $n$ of degree $r+1$. \newline \newline \textbf{(b):} So, we have established that

$$  \sum_{i=1}^{n} i^r = \frac{(x+1)^{r+1}}{r+1} -\frac{r(r+1)}{2} \frac{P_{r-1}(x)}{r+1} + \dots   $$

**Claim:** The coefficient of $x^{k+1}$ in $P_{k}(x)$ is $\frac{1}{k+1}. $

**Proof via strong induction:** Obviously, the claim is true for $k=1,2,3 $. Say that the result is true for all values of $ k \le r-1 $. And we have already established:

$$  \sum_{i=1}^{n} i^r = \frac{(x+1)^{r+1}}{r+1} -\frac{r(r+1)}{2} \frac{P_{r-1}(x)}{r+1} + \dots  $$

Since $P_{r-1}(x)$ and onwards constitute a polynomial of degree $r$, therefore, the coefficient of $x^{r+1}$ is $\frac{1}{r+1}$. **Alternate Method:** Say that

$$  \sum_{i=1}^{n} i^r = a_{r+1}n^{r+1} + a_{r}n^r + \dots + a_{0} $$

$$ \frac{1}{n} \sum_{i=1}^{n} \left(\frac{i}{n} \right)^r = a_{r+1} + \frac{a_{r}}{n} + \dots + \frac{a_{0}}{n^{r+1}}  $$

$$ \underset{n \rightarrow \infty}{\lim} \frac{1}{n} \sum_{i=1}^{n} \left(\frac{i}{n} \right)^r =  \underset{n \rightarrow \infty}{\lim} \left( a_{r+1} + \frac{a_{r}}{n} + \dots + \frac{a_{0}}{n^{r+1}} \right) $$

$$ \implies a_{r+1} = \int_{0}^{1} x^r dx = \frac{1}{r+1}.  $$

(c) Since we have established in $(B)$.

$$ \sum_{i=1}^{x} i^k = \frac{(x+1)^{k+1}}{k+1} -\frac{k(k+1)}{2} \frac{P_{k-1}(x)}{k+1} + \dots  $$

$$  \implies  \sum_{i=1}^{x} i^k = \frac{(x+1)^{k+1}}{k+1} - \frac{k}{2} P_{k-1}(x) + \dots  $$

Since $ \sum_{i=1}^{x}(i)^{k-2} $ will produce a polynomial of degree $k-1$ and will not contribute to the coefficient of $x^k$. Therefore, the coefficient of $x^k$ will come from $  \frac{(x+1)^{k+1}}{k+1} $ and $   - \frac{k}{2} P_{k-1}(x)  $. Since we know the coefficient of $x^k$ in $P_{k-1}(x)$ is $\frac{1}{k}$(using the result of part (b), therefore, we have the coefficient of $x^k$ equal to

$$  \frac{\binom{k+1}{1}}{k+1} - \frac{1}{2} = 1- \frac{1}{2} = \frac{1}{2}. $$
