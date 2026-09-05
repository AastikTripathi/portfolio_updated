---
title: Circles and Regions
author: Saad Hassan
category: combinatorics
superCategory: JEE
difficulty: Intermediate
publishDate: 2026-09-02
tags:
  - CirclesAndRegions
  - Combinatorics
  - Recurrences
references: []
---
## Problem Statement

Find the maximum number of regions that $n$ circles divide a plane into.

## Solution & Proof

Let $C_{n}$ be the maximum number of regions in which $n$ circles divide a plane. Clearly, $ C_{1} = 2, C_{2} =4, C_{3}=8 $ but $C_{4}=14,$ whoops!

![](/images/problems/circles-and-regions/Screenshot%202026-09-02%20at%207.39.32%E2%80%AFPM.png)

The number of regions will be maximum if every two circles intersect in two distinct points and no three circles intersect in one point. Suppose that there are $(r-1)$ circles in a plane and they have divided the plane into $C_{r-1}$ regions.  Every time the $r$th circle intersects another circle, it splits the original region into two, thereby adding one more region. Since the $r$th circle will intersect each of the $(r-1)$ circles in $2$ distinct points, therefore, it will add $2(r-1)$ regions. Therefore, we have the following recurrence $$   C_{r} = C_{r-1} + 2(r-1)  \implies C_{r} - C_{r-1} = 2(r-1) $$ $$ \implies \sum_{r=2}^{n} ( C_{r} - C_{r-1})  =  \sum_{r=2}^{n} 2(r-1)  $$ $$ \implies C_{n} - 2 = n(n-1)   $$ $$  \implies C_{n} = n^2-n+2  $$

**Comment:** Quite often, sets are represented by circles in Venn diagrams. This result clearly shows that $n$ circles cannot form an $n$-set Venn diagram for $n\ge4$. Indeed, $n$ sets have $2^n$ possible membership patterns, whereas $n$ circles can divide the plane into at most $n^2-n+2$ regions. Since $$ 2^n>n^2-n+2\qquad(n\ge4), $$ the circles cannot realise all $2^n$ patterns.
