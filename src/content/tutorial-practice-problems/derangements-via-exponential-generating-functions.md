---
title: 'Practice Challenge 2: Derangements via Exponential Generating Functions'
tutorialSlug: generating-functions
difficulty: Advanced
statement: >-
  A derangement $D_n$ is a permutation of $n$ elements with no fixed points.
  Using exponential generating functions (EGF), find the closed-form expression
  for the EGF $D(x) = \sum_{n=0}^{\infty} D_n \frac{x^n}{n!}$ and extract the
  formula for $D_n$.
hint1: >-
  Every permutation of $n$ elements can be uniquely decomposed into choosing $k$
  fixed points and deranging the remaining $n - k$ elements: $n! = \sum_{k=0}^n
  \binom{n}{k} D_{n-k}$.
hint2: >-
  The identity $n! = \sum_{k=0}^n \binom{n}{k} 1^k D_{n-k}$ represents the
  product of two exponential generating functions: $P(x) = E(x) D(x)$, where
  $P(x) = \sum_{n=0}^\infty n! \frac{x^n}{n!} = \frac{1}{1-x}$ and $E(x) = e^x$.
hint3: >-
  Solve for $D(x) = \frac{e^{-x}}{1-x}$ and take the Cauchy product of the
  expansions of $e^{-x}$ and $\frac{1}{1-x}$.
---
1. **Decomposition Identity**: Every permutation is formed by choosing $k$ fixed points and deranging the remaining $n-k$ elements:
   $$n! = \sum_{k=0}^n \binom{n}{k} D_{n-k}$$
1. **EGF Product Relation**: In terms of exponential generating functions:
   $$\sum_{n=0}^\infty n! \frac{x^n}{n!} = \left(\sum_{k=0}^\infty \frac{x^k}{k!}\right) \left(\sum_{m=0}^\infty D_m \frac{x^m}{m!}\right) \implies \frac{1}{1 - x} = e^x D(x)$$
1. **Solve for $D(x)$**:
   $$D(x) = \frac{e^{-x}}{1 - x} = \left(\sum_{i=0}^\infty \frac{(-1)^i x^i}{i!}\right) \left(\sum_{j=0}^\infty x^j\right)$$
1. **Extract Coefficients**:
   $$[x^n] D(x) = \sum_{i=0}^n \frac{(-1)^i}{i!} \implies \frac{D_n}{n!} = \sum_{i=0}^n \frac{(-1)^i}{i!}$$
1. **Conclusion**: The number of derangements is $D_n = n! \sum_{i=0}^n \frac{(-1)^i}{i!}$.
