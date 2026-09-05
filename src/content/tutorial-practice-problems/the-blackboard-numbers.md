---
title: 'Practice Challenge 2: The Blackboard Numbers'
tutorialSlug: invariance-principle
difficulty: Intermediate
statement: >-
  The numbers $1, 2, 3, \dots, 2026$ are written on a blackboard. At each step,
  you pick any two numbers $a$ and $b$, erase them, and write the value $|a -
  b|$ in their place. This operation is repeated until only a single number
  remains. Can the final number be $0$?
hint1: >-
  Look at what happens to the total sum of all numbers on the board after each
  operation.
hint2: >-
  Notice that $|a - b| \equiv a + b \pmod 2$ because $(a + b) - |a - b| = 2
  \min(a, b)$, which is always an even number.
hint3: >-
  If replacing $a$ and $b$ with $|a - b|$ preserves the parity (sum modulo 2) of
  the board, calculate the parity of the initial sum $1 + 2 + \dots + 2026$.
---
1. **Initial State Parity**: The sum of the first $n$ integers is $S = \frac{n(n+1)}{2}$. For $n = 2026$, $S_0 = \frac{2026 \times 2027}{2} = 1013 \times 2027$, which is the product of two odd numbers and therefore **odd** ($S_0 \equiv 1 \pmod 2$).
1. **The Invariant**: Replacing $a$ and $b$ with $|a - b|$ changes the total sum from $S$ to $S - (a + b) + |a - b|$. Since $(a + b) - |a - b| = 2\min(a, b)$ is always even, the total sum always changes by an even integer. Thus, the **parity of the sum modulo 2 is strictly invariant** ($S_{\text{step}} \equiv 1 \pmod 2$).
1. **Target State Analysis**: If the final remaining number were $0$, the final sum would be $S_{\text{final}} = 0 \equiv 0 \pmod 2$.
1. **Conclusion**: Because $1 \not\equiv 0 \pmod 2$, the sum can never be even. Therefore, it is **impossible** for the final remaining number to be $0$.
