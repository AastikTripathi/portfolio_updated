---
title: No Overtaking on a Strange Railway Track!
author: Saad Hassan
category: combinatorics
superCategory: HMMT
difficulty: Advanced
publishDate: 2026-07-21
tags:
  - combinatorics
  - probability
  - Recurrence
  - JaneStreet
references:
  - title: Harvard-MIT Mathematics Tournament (HMMT) 2012
    url: https://www.hmmt.org/
    details: Guts Round, Problem 18
  - title: Stirling Numbers of the First Kind & Harmonic Numbers
    url: https://en.wikipedia.org/wiki/Stirling_numbers_of_the_first_kind
    details: Concrete Mathematics (Graham, Knuth, Patashnik)
---
## Problem Statement

On a strange railway line, there is just one infinitely long track, so overtaking is impossible. Any time a train catches up to the one in front of it, they link up to form a single train moving at the speed of the slower train. At first, there are three equally spaced trains, each moving at a different speed. You watch, and eventually (after all the linking that will happen has happened), you count the trains. You wonder what would have happened if the trains had started in a different order (but each of the original three trains had kept its same starting speed). On average (averaging over all possible orderings), how many trains will there be after a long time has elapsed?

What would be the average number of trains if there were $n$ trains to begin with?

$$
\begin{aligned}
&\text{(A)}\ \frac{1+2+3+\cdots+n}{n!} \cr
&\text{(B)}\ \frac{\displaystyle\sum_{r=1}^{n} r}{n^n} \cr
&\text{(C)}\ 1+\frac{1}{2}+\frac{1}{3}+\cdots+\frac{1}{n} \cr
&\text{(D)}\ \frac{1^2+2^2+3^2+\cdots+n^2}{n!}
\end{aligned}
$$

## Solution & Proof

Say that there are $n$ trains running on a railway track $T_{1}, T_{2}, \dots, T_{n} $. Say that their respective speeds are $v_{1},v_{2}, \dots, v_{n}$ such that $v_{1}< v_{2}< \dots < v_{n}$.

Define $\mathbf{a_{n}}$ as the total number of trains after all the link ups have occurred. So, the question asks us to find $\frac{a_{n}}{n!}$. Obviously, $a_{1}=1$.

Refer to the diagram below. $(T_{n},T_{n-1}, \dots, T_{1}), \dots, (T_{k},T_{l}, T_{p}, \dots, T_{r})$ are all the $(n!)$ permutations of these $n$ trains. Say that a new train $T_{n+1}$ comes in with a speed $v_{n+1}$ such that $v_{n+1}>v_{n}> \dots > v_{1}$. Notice that in all $n!$ permutations it can embed itself in one of those $(n+1)$ spots, denoted by the arrows. Since the speed of $T_{n+1}$ is the highest, therefore, if it embeds itself in the spot indicated by the top arrow, then it would add one more train to the total number of existing trains, and there are $n!$ such arrangements. If it embeds itself in any of the other (n) slots, it will link up with the train moving in front of it and start moving with the speed of that train, thereby the total number of trains in these cases will remain the same.

```tikz
\begin{tikzpicture}
\node at (-0.2,0) {$T_n$};
\node at (-0.2,-1.6) {$T_{n-1}$};
\node at (-0.2,-3.2) {$T_{n-2}$};
\node at (-0.2,-4.8) {$\vdots$};
\node at (-0.2,-6.4) {$T_1$};

\draw[->] (-3,0.8)--(-0.8,0.8);
\draw[->] (-3,-0.8)--(-0.8,-0.8);
\draw[->] (-3,-2.4)--(-0.8,-2.4);
\draw[->] (-3,-4.0)--(-0.8,-4.0);
\draw[->] (-3,-5.6)--(-0.8,-5.6);
\draw[->] (-3,-7.2)--(-0.8,-7.2);

\node at (1.6,0) {$\cdots$};
\node at (1.6,-1.6) {$\cdots$};
\node at (1.6,-3.2) {$\cdots$};
\node at (1.6,-4.8) {$\cdots$};
\node at (1.6,-6.4) {$\cdots$};

\node at (4.3,0) {$T_k$};
\node at (4.3,-1.6) {$T_l$};
\node at (4.3,-3.2) {$T_p$};
\node at (4.3,-4.8) {$\vdots$};
\node at (4.3,-6.4) {$T_r$};
\end{tikzpicture}
```

This gives the recurrence:

$$
\begin{aligned}
a_{n+1} &= \underbrace{a_n + n!}*{\text{when } T*{n+1} \text{ is in the top spot}} + \underbrace{n a_n}*{\text{when } T*{n+1} \text{ is in other spots}} \cr
&\implies a_{r+1} = a_r + r! + r a_r \cr
&\implies a_{r+1} = (r+1)a_r + r! \cr
&\implies \frac{a_{r+1}}{(r+1)!} = \frac{a_r}{r!} + \frac{1}{r+1} \cr
&\implies \sum_{r=1}^{n-1} \left( \frac{a_{r+1}}{(r+1)!} - \frac{a_r}{r!} \right) = \sum_{r=1}^{n-1} \frac{1}{r+1} \cr
&\implies \frac{a_n}{n!} - \frac{a_1}{1!} = \frac{1}{2} + \frac{1}{3} + \dots + \frac{1}{n} \cr
&\implies \frac{a_n}{n!} = \frac{1}{1} + \frac{1}{2} + \dots + \frac{1}{n} \quad \square
\end{aligned}
$$

The answer is **(C)**.
