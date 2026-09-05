---
title: 'Worked Example 3: Deriving the Closed Form for Catalan Numbers'
tutorialSlug: generating-functions
statement: >-
  The Catalan numbers satisfy $C_0 = 1$ and $C_n = \sum_{i=0}^{n-1} C_i
  C_{n-1-i}$ for $n \ge 1$. Find the ordinary generating function $C(x)$ and
  determine $C_n$.
insight: >-
  The convolution in the recurrence corresponds directly to squaring the
  generating function: $C(x)^2$.
---
1. **Set Up the Algebraic Relation**: Let $C(x) = \sum_{n=0}^{\infty} C_n x^n$. Multiplying both sides of the recurrence by $x^n$ and summing for $n \ge 1$:
   $$C(x) - C_0 = x \sum_{n=1}^{\infty} \left(\sum_{i=0}^{n-1} C_i C_{n-1-i}\right) x^{n-1} = x C(x)^2$$
   $$x C(x)^2 - C(x) + 1 = 0$$
1. **Solve the Quadratic Equation**: Using the quadratic formula:
   $$C(x) = \frac{1 \pm \sqrt{1 - 4x}}{2x}$$
   Since $C(0) = C_0 = 1$, we must choose the minus sign to avoid division by zero: $C(x) = \frac{1 - \sqrt{1 - 4x}}{2x}$.
1. **Binomial Series Expansion**: Expanding $\sqrt{1 - 4x} = (1 - 4x)^{1/2}$ via generalized binomial theorem:
   $$(1 - 4x)^{1/2} = 1 - \sum_{n=1}^{\infty} \frac{1}{2n-1}\binom{2n}{n} x^n \frac{1}{2^{2n-1}} \cdot 4^n = 1 - 2\sum_{n=1}^{\infty} \frac{1}{n}\binom{2n-2}{n-1} x^n$$
1. **Conclusion**: Substituting back into $C(x)$ and shifting indices yields $C_n = \frac{1}{n+1}\binom{2n}{n}$.
