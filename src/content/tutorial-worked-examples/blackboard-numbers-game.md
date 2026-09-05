---
title: "Worked Example 2: The Blackboard Numbers Game"
tutorialSlug: invariance-principle
statement: "The numbers $1, 2, 3, \\dots, 2026$ are written on a blackboard. In one step, you choose any two numbers $a$ and $b$, erase them, and write $|a - b|$ in their place. This step is repeated until only one number remains. Can the final number be $0$?"
insight: "Examine how the sum of all numbers on the board changes modulo 2 after each step."
---

1. **Track the Sum**: Let $S$ be the sum of all numbers currently on the blackboard.
2. **Effect of a Move**: When $a$ and $b$ are replaced by $|a - b|$, the new sum becomes:
$$S_{\text{new}} = S - a - b + |a - b|$$
Notice that $|a - b| \equiv a + b \pmod{2}$ because $|a - b|$ and $a + b$ always have the exact same parity.
3. **Parity Invariant**: Therefore:
$$S_{\text{new}} \equiv S - a - b + (a + b) = S \pmod{2}$$
The parity of the sum of numbers on the board is **invariant**!
4. **Initial Sum Calculation**:
$$S_{\text{initial}} = 1 + 2 + \dots + 2026 = \frac{2026 \times 2027}{2} = 1013 \times 2027$$
Since $1013$ and $2027$ are both odd, $S_{\text{initial}}$ is **odd**.
5. **Conclusion**: The final remaining single number must have the same parity as $S_{\text{initial}}$, which is odd. Since $0$ is even, the final number **can never be 0**.
