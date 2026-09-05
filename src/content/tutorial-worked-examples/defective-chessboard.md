---
title: "Worked Example 1: The Defective Chessboard"
tutorialSlug: invariance-principle
statement: "Consider a standard $8 \\times 8$ chessboard. Two diagonally opposite corner squares are removed. Can the remaining $62$ squares be completely covered with $31$ non-overlapping $1 \\times 2$ dominoes?"
insight: "Each domino covers exactly one black square and one white square on the chessboard."
---

1. **Initial State Analysis**: A standard $8 \times 8$ chessboard contains 32 white squares and 32 black squares.
2. **Modification**: Diagonally opposite corners on a chessboard always have the **same color**. Suppose we remove two white corners. The remaining board has 30 white squares and 32 black squares.
3. **The Invariant**: Every $1 \times 2$ domino placed on the board covers exactly 1 white square and 1 black square. Thus, 31 dominoes will always cover exactly 31 white squares and 31 black squares.
4. **Conclusion**: Since $30 \neq 32$, it is **impossible** to tile the defective board with 31 dominoes.
