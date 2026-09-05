---
title: The Maximum Angle
author: Saad Hassan
category: coordinate-geometry
superCategory: JEE
difficulty: Intermediate
publishDate: 2026-08-29
tags:
  - MaximumAngle
  - Circles
  - Optimisation
references: []
---
## Problem Statement

Let $L$ be a straight and $A$ and $B$ be are fixed points not on $L$. Find the point $P$ on the line $L$ for which the angle $\angle APB $ is maximum.

## Solution & Proof

We claim that to obtain the point $P$, we draw a circle through the points $A$ and $B$ touching the line $L$. This is the required point $P.$ Indeed, any such circle is unique and therefore $P$ is unique. But why is it so? Let us prove this.\
\
**Proof: If we can show that as long as the circle through the points $\mathbf{A}$ and $\mathbf{B}$ intersects the line in two distinct points, say R and S, then a point P can be found on the segment of the line RS such that  $\mathbf{\angle APB > \angle ARB = \angle BSA }, $ then it shows that for the angle $\mathbf{\angle ARS}$ to be maximum, the circle must touch the line at the point P.**

![](/images/problems/the-maximum-angle/Screenshot%202026-08-29%20at%208.44.41%E2%80%AFPM.png)

Let the circle passing through the points $A$ and $B$ intersect the line $L$ in two distinct points $R$ and $S.$ Let $P$ be a point on the line segment $RS$. Join $OP$ and produce it to a point $T$ on the circle. Join $AP,PB,AT,BT, AR, BR,AS$ and $BS.$
$$  \angle ARB = \angle ASB =\angle ATB \ \text{(Angles in the same segment)} \tag{A} $$
$$ \angle APO > \angle ATP, \ \angle BPO > \angle BTP \ \text{(exterior angle of a triangle)}   $$
$$   \angle APO + \angle BPO > \angle ATP + \angle BTP   $$
$$ \implies \angle APB > \angle ATB = \angle ARB = \angle ASB \ \text{(using (A))} $$
So, as long as the circle through the points $A$ and $B$ intersects the line $L$ in two distinct points $R$ and $S$, it is further possible to find a point $P$ on the line segment $RS$ such that $\angle APB > \angle ARS = \angle ASB. $ Therefore, for the angle to be maximum the circle passing through the points $A$ and $B$ must touch the line $L$.
