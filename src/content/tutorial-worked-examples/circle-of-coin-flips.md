---
title: 'Worked Example 3: Circle of Coin Flips'
tutorialSlug: invariance-principle
statement: >-
  $10$ coins are arranged in a circle, all showing Heads. In one move, you may
  flip any $4$ consecutive coins. Can you reach a state where all $10$ coins
  show Tails?
insight: Group coins into odd and even indexed positions around the circle.
---
1. **Parity at Odd/Even Positions**: Assign indices $1, 2, \dots, 10$ to the coins in order.

1. **Effect of a Flip**: Any 4 consecutive coins contain exactly 2 odd-indexed coins and 2 even-indexed coins!

1. **The Invariant**: Flipping 2 odd-indexed coins changes the number of Tails at odd positions $T_{\text{odd}}$ by $+2, 0,$ or $-2$.
   Thus, $T_{\text{odd}} \pmod 2$ is **strictly invariant**!

1. **Initial vs Target**:

- Initial State: All coins Heads $\implies T_{\text{odd}} = 0$ (even).
- Target State: All 10 coins Tails $\implies T_{\text{odd}} = 5$ (odd).

5. **Conclusion**: Since $0 \not\equiv 5 \pmod 2$, it is **impossible** to reach all Tails!
