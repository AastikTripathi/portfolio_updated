---
title: "Practice Challenge 2: Grid Token Invariant"
tutorialSlug: invariance-principle
difficulty: Advanced
statement: "A token is placed at $(0,0)$ of an infinite grid. In one move, a token at $(x,y)$ splits into two tokens at $(x+1, y)$ and $(x, y+1)$. Can you clear the region $x + y \\le 1$ of all tokens?"
hint1: "Assign a weight $w(x,y)$ to cell $(x,y)$ such that total weight remains invariant when a token splits."
hint2: "Try exponential weight $w(x,y) = 2^{-(x+y)}$. Check if $2^{-(x+y)} = 2^{-(x+1+y)} + 2^{-(x+y+1)}$."
hint3: "The total weight of ALL grid cells outside $x+y \\le 1$ is $\\sum_{k=2}^{\\infty} (k+1) 2^{-k} = \\frac{3}{4} < 1$."
---

1. **Weight Function**: Assign weight $w(x,y) = 2^{-(x+y)}$ to cell $(x,y)$.
2. **Splitting Invariant**: $2^{-(x+y+1)} + 2^{-(x+y+1)} = 2 \cdot 2^{-(x+y+1)} = 2^{-(x+y)}$. Total weight is **strictly invariant**!
3. **Initial Weight**: $w(0,0) = 2^0 = 1$.
4. **Maximum Weight Outside Region**: The sum of weights of all cells with $x+y \ge 2$ is $\frac{3}{4} < 1$.
5. **Conclusion**: It is **impossible** to clear the region $x+y \le 1$.
