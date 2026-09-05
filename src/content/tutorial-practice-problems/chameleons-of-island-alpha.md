---
title: "Practice Challenge 1: The Chameleons of Island Alpha"
tutorialSlug: invariance-principle
difficulty: Intermediate
statement: "On an island there are $13$ Red, $15$ Green, and $17$ Blue chameleons. Whenever two chameleons of different colors meet, they both change their color to the third color. Can all chameleons on the island eventually become the same color?"
hint1: "Let $(R, G, B)$ represent the counts. What happens to the differences $(R - G, G - B, B - R)$ after one meeting?"
hint2: "When Red and Green meet, $R \\to R - 1, G \\to G - 1, B \\to B + 2$. Calculate $(R - G) \\pmod 3$."
hint3: "Notice $(R - 1) - (G - 1) = R - G$, so $R - G$ is unchanged! $R - B$ changes by $-3 \\equiv 0 \\pmod 3$. Thus differences modulo 3 are invariant."
---

1. **State Vector**: Let $(R, G, B) = (13, 15, 17)$ initially.
2. **Differences Modulo 3**:
$R - G = 13 - 15 = -2 \equiv 1 \pmod 3$.
Under any valid meeting, $R - G \pmod 3$ is **strictly invariant**!
3. **Target State**: If all 45 chameleons become Blue, $(R, G, B) = (0, 0, 45)$, so $R - G = 0 \equiv 0 \pmod 3$.
4. **Conclusion**: Since $1 \not\equiv 0 \pmod 3$, it is **impossible** for all chameleons to become the same color.
