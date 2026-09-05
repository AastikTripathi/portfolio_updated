---
title: Odd North-Eastern Paths
author: Saad Hassan
category: combinatorics
superCategory: IOQM
year: 2025
difficulty: Intermediate
publishDate: 2026-09-04
tags:
  - Combinatorics
  - IOQM
  - NorthEasternPaths
references:
  - title: IOQM,2025
---
## In the plane, let the positive end of the x-axis be directed towards east and the positive end of the y-axis be directed towards north. Suppose you are at $(0,0)$ and want to go to $(7,12).$ At every move you are allowed to move unit length towards east or unit length towards north from your current position, but you are not allowed to visit any point $(h,k)$ where $h,k$ are both odd. Find the number of such paths $n.$

IOQM,2025

## Solution & Proof

![](/images/problems/odd-north-eastern-paths/Screenshot%202026-09-04%20at%205.27.12%E2%80%AFPM.png)

Look at this $7 \times 12$ grid. We have to go from $(0,0)$ to $(7,12)$ without going through odd-odd lattice points, which have been represented by dots. It is not possible to take exactly an odd number of steps in one direction and then change direction. In effect, we must take 2 steps to the right or 2 steps to the up at once. Denote 2 steps towards the east by $R$ and 2 steps towards the north by $U.$  Since we have to go from $(0,0)$ to $(7,12)$, we must have a string of 3 $R$s and 6 $U$s.

In fact, for every string of 3 $R$s and 6 $U$s, we have one path from $(0,0)$ to $(7,12).$ And for every path from $(0,0)$ to $(7,12)$ we have a string of 3 $R$s and 6 $U$s.

Therefore, the total number of paths from $(0,0)$ to $(7,12)$ is equal to the total number of strings of 3 $R$s and 6 $U$s, which is equal to:

$$  \binom{9}{3}= 84. $$
