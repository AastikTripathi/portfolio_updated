---
title: When Area Equals Perimeter
author: Saad Hassan
category: number-theory
superCategory: JEE
difficulty: Intermediate
publishDate: 2026-08-30
tags:
  - NumberTheory
references: []
---
## Problem Statement

Find all right angle triangles with integer sides in which the perimeter is equal to the area.

## Solution & Proof

Let the sides of the right triangle be $x,y,z$ such that $x^2+y^2 =z^2$. Since the perimeter is equal to the area, we have the following.
$$ x+y+ \sqrt{x^2+y^2} = \frac{1}{2} xy  $$
Rearranging, we get:
$$  2x+2y -xy = 2 (\sqrt{x^2+y^2})  $$
Squaring both sides, we get:
$$ ( 2x+2y -xy )^2 = 4(x^2+y^2) $$
$$ x^2y^2 + 8xy - 4 x^2y -4xy^2 = 0   $$
$$ \implies xy(xy-4x-4y+8) =0 $$
$$ xy-4x-4y+8=0, \ \text{since} \ xy \neq 0.  $$
$$ (x-4)(y-4) = 8   $$
Since $x$ and $y$ are integers, therefore, $(x-4)$ and $(y-4)$ must be divisors of $8$. This gives us $(x-4)=1 $ and $y-4 = 8$ or $x-4 = 2$ and $y-4=4$, which gives us $ x=5, y=12 $ and $x=6, y=8$, respectively. So, the possible right triangles are $(6,8,10)$ and $(5,12,13)$ respectively.
