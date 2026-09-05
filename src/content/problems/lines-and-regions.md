---
title: Lines and Regions
author: Saad Hassan
category: combinatorics
superCategory: JEE
difficulty: Intermediate
publishDate: 2026-09-02
tags:
  - Combinatorics
  - LinesAndRegions
  - Recurrences
references: []
---
## Problem Statement

Find the maximum number of regions in which $n$ straight lines divide a plane.

## Solution & Proof

For $n$ lines to divide a plane into a maximum number of regions, no two lines should be parallel, and no three lines must be concurrent. Let $L_{n}$ be the maximum number of regions in which $n$ lines divide a plane, then clearly $$   L_{0} =1, L_{1} = 2, L_{2} =4 $$

![](/images/problems/lines-and-regions/Screenshot%202026-09-02%20at%206.34.18%E2%80%AFPM.png)

Suppose that there are $(r-1)$ lines in the plane, they have divided the plane into $ L_{r-1} $ regions. To maximise the number of regions the incoming $r$th line will hit all the lines at a distinct point. As soon as the $r$th line hits a distinct line, it splits the original region and thereby adds one more region. And finally when it leaves the final line, it adds one more region. Therefore, it adds a total of $(r-1)+1=r$ regions. Therefore, we have the following recurrence:

$$   L_{r} = L_{r-1} + r $$ $$ \implies L_{r}-L_{r-1} = r  $$ $$ \implies \sum_{r=1}^{n} (L_{r}-L_{r-1}) = \sum_{r=1}^n r   $$ $$ \implies L_{n}-L_{0} = \frac{n(n+1)}{2}  $$ $$  \implies L_{n} = \frac{n(n+1)}{2}+1   $$\
\
Comment: You learnt something about a birthday party, right! The maximum number of regions you can divide a cake with $n$ strokes of a knife.
