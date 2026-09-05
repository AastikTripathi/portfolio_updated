---
title: 'Worked Example 1: Solving the Fibonacci Recurrence'
tutorialSlug: generating-functions
statement: >-
  Find a closed-form formula for the sequence defined by $a_0 = 0$, $a_1 = 1$,
  and $a_n = a_{n-1} + a_{n-2}$ for $n \ge 2$ using ordinary generating
  functions.
insight: >-
  Multiplying the recurrence by $x^n$ and summing over all $n \ge 2$ transforms
  the recurrence into an algebraic equation for $A(x) = \sum_{n=0}^{\infty} a_n
  x^n$.
---
1. **Define the Generating Function**: Let $A(x) = \sum_{n=0}^{\infty} a_n x^n = a_0 + a_1 x + a_2 x^2 + \dots = x + \sum_{n=2}^{\infty} a_n x^n$.
1. **Apply the Recurrence**: Substitute $a_n = a_{n-1} + a_{n-2}$ into the sum:
   $$A(x) - x = \sum_{n=2}^{\infty} (a_{n-1} + a_{n-2})x^n = x \sum_{n=2}^{\infty} a_{n-1}x^{n-1} + x^2 \sum_{n=2}^{\infty} a_{n-2}x^{n-2}$$
   $$A(x) - x = x A(x) + x^2 A(x)$$
1. **Solve for $A(x)$**:
   $$A(x)(1 - x - x^2) = x \implies A(x) = \frac{x}{1 - x - x^2}$$
1. **Partial Fraction Decomposition**: Factoring $1 - x - x^2 = (1 - \phi x)(1 - \hat{\phi} x)$ where $\phi = \frac{1+\sqrt{5}}{2}$ and $\hat{\phi} = \frac{1-\sqrt{5}}{2}$:
   $$A(x) = \frac{1}{\sqrt{5}}\left(\frac{1}{1 - \phi x} - \frac{1}{1 - \hat{\phi} x}\right) = \frac{1}{\sqrt{5}} \sum_{n=0}^{\infty} (\phi^n - \hat{\phi}^n) x^n$$
1. **Conclusion**: Extracting the coefficient of $x^n$ yields Binet's formula: $a_n = \frac{1}{\sqrt{5}}\left(\left(\frac{1+\sqrt{5}}{2}\right)^n - \left(\frac{1-\sqrt{5}}{2}\right)^n\right)$.
