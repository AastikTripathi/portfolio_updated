---
title: 'Worked Example 2: Integer Partitions into Coins'
tutorialSlug: generating-functions
statement: >-
  Find the number of ways to make change for $n$ cents using pennies ($1¢$),
  nickels ($5¢$), and dimes ($10¢$).
insight: >-
  Each coin denomination contributes a factor of the geometric series $(1 + x^k
  + x^{2k} + \dots) = \frac{1}{1 - x^k}$ to the product generating function.
---
1. **Construct Individual Generating Functions**:
   - Pennies ($1¢$): $1 + x^1 + x^2 + x^3 + \dots = \frac{1}{1 - x}$
   - Nickels ($5¢$): $1 + x^5 + x^{10} + x^{15} + \dots = \frac{1}{1 - x^5}$
   - Dimes ($10¢$): $1 + x^{10} + x^{20} + x^{30} + \dots = \frac{1}{1 - x^{10}}$
1. **Form the Product Generating Function**: The number of ways to form $n$ cents is $[x^n] F(x)$, where:
   $$F(x) = \frac{1}{(1 - x)(1 - x^5)(1 - x^{10})}$$
1. **Interpret the Expansion**: Multiplying the polynomial series computes every combination $x^{1\cdot a} \cdot x^{5\cdot b} \cdot x^{10\cdot c} = x^{a + 5b + 10c}$.
1. **Conclusion**: The number of non-negative integer solutions to $a + 5b + 10c = n$ is precisely the coefficient of $x^n$ in the Maclaurin expansion of $F(x) = \frac{1}{(1 - x)(1 - x^5)(1 - x^{10})}$.
