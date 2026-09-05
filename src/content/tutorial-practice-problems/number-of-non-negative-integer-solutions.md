---
title: 'Practice Challenge 1: Number of Non-Negative Integer Solutions'
tutorialSlug: generating-functions
difficulty: Introductory
statement: >-
  Find the number of integer solutions to $x_1 + x_2 + x_3 + x_4 = 20$ such that
  $1 \le x_1 \le 5$, $x_2 \ge 0$, $x_3 \ge 2$, and $x_4 \in \{0, 1, 2, 3\}$
  using generating functions.
hint1: >-
  Write a polynomial or formal power series factor for each variable $x_i$
  representing its allowed values as powers of $x$.
hint2: >-
  The factors are $(x + x^2 + \dots + x^5)$, $(1 + x + x^2 + \dots)$, $(x^2 +
  x^3 + \dots)$, and $(1 + x + x^2 + x^3)$.
hint3: >-
  Multiply the four factors together and extract the coefficient of $x^{20}$,
  which is $[x^{20}] F(x) = [x^{17}] \frac{(1 - x^5)(1 - x^4)}{(1 - x)^4}$.
---
1. **Construct the Generating Function**:
   - For $x_1$: $x(1 + x + x^2 + x^3 + x^4) = x\frac{1 - x^5}{1 - x}$
   - For $x_2$: $1 + x + x^2 + \dots = \frac{1}{1 - x}$
   - For $x_3$: $x^2(1 + x + x^2 + \dots) = \frac{x^2}{1 - x}$
   - For $x_4$: $1 + x + x^2 + x^3 = \frac{1 - x^4}{1 - x}$
1. **Combine Factors**:
   $$F(x) = \left(x\frac{1 - x^5}{1 - x}\right) \left(\frac{1}{1 - x}\right) \left(\frac{x^2}{1 - x}\right) \left(\frac{1 - x^4}{1 - x}\right) = x^3 \frac{(1 - x^5)(1 - x^4)}{(1 - x)^4}$$
1. **Extract the Coefficient**: We want $[x^{20}] F(x) = [x^{17}] \frac{1 - x^4 - x^5 + x^9}{(1 - x)^4}$.
   Using the series expansion $\frac{1}{(1-x)^4} = \sum_{k=0}^{\infty} \binom{k+3}{3} x^k$:
   $$[x^{17}] = \binom{17+3}{3} - \binom{13+3}{3} - \binom{12+3}{3} + \binom{8+3}{3}$$
   $$= \binom{20}{3} - \binom{16}{3} - \binom{15}{3} + \binom{11}{3} = 1140 - 560 - 455 + 165 = 290$$
1. **Conclusion**: There are **290** integer solutions satisfying the given constraints.
