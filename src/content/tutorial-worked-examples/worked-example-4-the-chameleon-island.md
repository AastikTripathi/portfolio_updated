---
title: 'Worked Example 4: The Chameleon Island'
tutorialSlug: invariance-principle
statement: >-
  An island has 13 red, 15 green, and 17 blue chameleons. Whenever two
  chameleons of different colors meet, they both change into the third color.
  Can all 45 chameleons ever become the same color?
insight: >-
  The difference between the counts of any two colors modulo 3 remains constant
  after every meeting.
---
1. **Initial State Analysis**: The chameleon counts are $R = 13$, $G = 15$, and $B = 17$. The pairwise differences are $R - G = -2 \equiv 1 \pmod 3$, $G - B = -2 \equiv 1 \pmod 3$, and $B - R = 4 \equiv 1 \pmod 3$.
1. **The Invariant**: When two chameleons of different colors meet (e.g., Red and Green produce two Blue), the counts change by $\Delta R = -1$, $\Delta G = -1$, and $\Delta B = +2$. The change in difference between any two colors is always $0$ or $\pm 3$, meaning $(R - G) \pmod 3$, $(G - B) \pmod 3$, and $(B - R) \pmod 3$ remain invariant.
1. **Target State Analysis**: To make all 45 chameleons the same color, two colors must simultaneously equal 0 (e.g., $45$ Red, $0$ Green, $0$ Blue). This target state requires the difference between the two zero-count groups to be $0 - 0 = 0 \equiv 0 \pmod 3$.
1. **Conclusion**: Since the initial differences are all congruent to $1 \pmod 3$, the system can never reach a state where any pairwise difference is congruent to $0 \pmod 3$. Therefore, it is **impossible** for all chameleons to become the same color.
