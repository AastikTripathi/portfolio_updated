---
title: The Focal Angle
author: Saad Hassan
category: coordinate-geometry
superCategory: JEE
difficulty: Intermediate
publishDate: 2026-08-29
tags:
  - Ellipse
  - Focii
  - FocalAngle
references: []
---
## Problem Statement

Suppose the points $F_{1},F_{2}$ are the left and right focii of the ellipse $\frac{x^2}{16}+ \frac{y^2}{4} =1 $ respectively. The point $P$ is on the line $l: x - \sqrt{3}y +8 + 2\sqrt{3} = 0. $ When $\angle F_{1}PF_{2} $ reaches maximum, then find the value of $\frac{|PF_{1}|}{|PF_{2}|}.$

## Solution & Proof

![](/images/problems/the-focal-angle/Screenshot%202026-08-29%20at%208.22.32%E2%80%AFPM.png)

Since $l$ is a fixed line and $F_{1}$ and $F_{2}$ are two fixed points. Therefore, the largest angle subtended by the segment $F_{1}F_{2}$ must be at a point $P$ such that the circle passing through $F_{1},F_{2}$ and $P$ is tangent to $l$ at $P$. Using the rule of sines,
$$ \frac{|PF_{1}|}{|PF_{2}|} = \frac{\sin{(\angle PF_{2}F_{1}) }}{\sin{( \angle PF_{1}F_{2} })} \tag{A} $$
Now $\angle PF_{2}F_{1} = \angle TPF_{1} $(\textbf{Alternate segment theorem}). And since angles $ \angle PF_{1}F_{2} $ and $ \angle PF_{1}T $ are supplementary, therefore their sines are equal $ \implies \sin{(\angle PF_{1}F_{2})} = \sin{(\angle PF_{1}T)}.  $ Returning to equation $(A)$
$$  \frac{|PF_{1}|}{|PF_{2}|} = \frac{\sin{(\angle PF_{2}F_{1}) }}{\sin{( \angle PF_{1}F_{2} })} = \frac{\sin{(\angle TPF_{1} )}}{\sin{(\angle PF_{1}T)}} = \frac{|F_{1}T|}{|PT|} \tag{B} $$
The last result is due to the rule of sine in the triangle $ \Delta PF_{1}T. $ Notice that $|F_{1}T| = 8$ and $ F_{2}T = 8+4 \sqrt{3} $. Using the Secant-Tangent theorem $PT^2 = |F_{1}T| |F_{2}T| = 8 (8+4 \sqrt{3} ) \implies |PT|= 4 (\sqrt{3}+1). $ Returning to $(B)$
$$  \frac{|PF_{1}|}{|PF_{2}|} = \frac{\sin{(\angle PF_{2}F_{1}) }}{\sin{( \angle PF_{1}F_{2} })} = \frac{\sin{(\angle TPF_{1} )}}{\sin{(\angle PF_{1}T)}} = \frac{|F_{1}T|}{|PT|} = \frac{8}{4 (\sqrt{3}+1)} = \frac{2}{(\sqrt{3}+1)}= \sqrt{3}-1. $$
