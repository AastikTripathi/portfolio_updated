---
title: The Sliding Right Angle
author: Saad Hassan
category: coordinate-geometry
superCategory: JEE
difficulty: Intermediate
publishDate: 2026-08-29
tags:
  - SlidingRightAngle
  - CoordinateGeometry
  - SLLoney
references: []
---
## Problem Statement

A right-angled triangle $ABC$, having $C$ a right angle, is of given magnitude, that is $BC=a$ and $CA=b$. The angular points $A$ and $B$ slide along the positive $x$ and positive $y$ axes respectively. Find the locus of the vertex $C$.

## Solution & Proof

![](/images/problems/the-sliding-right-angle/Screenshot%202026-08-29%20at%207.58.04%E2%80%AFPM.png)

Say that the coordinates of $C$ are $(h,k)$. Let $O$ be the origin $(0,0)$. Since $\angle AOB + \angle ACB = \pi $, therefore the quadrilateral $OACB$ is cyclic. Therefore, we have $\angle AOC = \angle ABC $.

$$  \implies \tan (\angle AOC) = \tan (\angle ABC) \tag{A}  $$

Notice that $  \tan(\angle AOC)  $ is simply the slope of the line $OC$, which is equal to $\frac{k}{h}$, and in the right triangle $ABC$, we have $ \tan (\angle ABC) = \frac{AC}{BC} = \frac{b}{a}. $ Therefore, using $(A)$ we have

$$    \frac{k}{h} =  \frac{b}{a} \implies y =\frac{bx}{a}. $$

Which is the required locus.
