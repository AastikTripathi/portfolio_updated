---
title: Ratios of areas of triangles
author: Saad Hassan
category: coordinate-geometry
superCategory: JEE
difficulty: Intermediate
publishDate: 2026-08-29
tags:
  - CoordinateGeometry
  - ComplexNumbers
  - Similarity
references: []
---
## Problem Statement

If the area of the triangle formed by the points $(2 \alpha, \beta), (\alpha+\beta, 2 \beta+ \alpha)$ and $ (2 \beta, 2 \alpha ) $ is $8$sq. units, then find the area of the triangle formed by the points whose vertex are $(\alpha+\beta, \alpha -\beta), (3 \beta-\alpha, \beta+ 3 \alpha)$ and $(3\alpha - \beta, 3 \beta - \alpha) $. Here $\alpha $ and $\beta$ are real numbers.

## Solution & Proof

Let the vertices of the triangle be represented by $ Z_{1} = 2 \alpha + i \beta, Z_{2} = (\alpha+\beta)+ i (2 \beta+ \alpha), Z_{3} = 2 \beta + i 2 \alpha  $, where $ i = \sqrt{-1}$. Similarly, let the vertices of the other triangle be $ Z_{1}'= \alpha+ \beta + i (\alpha-\beta), Z_{2}'= 3\beta-\alpha + i(\beta+ 3 \alpha)$ and $ Z_{3}'= 3\alpha - \beta + i (3 \beta - \alpha). $ So, we have $$   Z_{1}- Z_{2} = (\alpha - \beta)- i (\alpha+ \beta), Z_{1}-Z_{3} = 2(\alpha-\beta)+ i (\beta - 2 \alpha), \ \text{and}   $$ $$ Z_{1}'-Z_{2}' = 2 (\alpha -  \beta) - 2i ( \beta +  \alpha), Z_{3}'-Z_{2}' = 4(\alpha - \beta) + 2i (\beta - 2 \alpha).   $$ So, it can be seen that $$  \frac{Z_{1}-Z_{2}}{Z_{1}-Z_{3}} = \frac{Z_{1}'-Z_{2}'}{Z_{3}'-Z_{2}'} $$ Therefore, triangles $  \Delta Z_{1}Z_{2}Z_{3} \sim \Delta Z_{1}'Z_{2}'Z_{3}'. $ $$  \implies \frac{\text{area}(Z_{1}'Z_{2}'Z_{3}')}{\text{area}(Z_{1}Z_{2}Z_{3})} = \left|\frac{Z_{1}'-Z_{2}'}{Z_{1}-Z_{2}} \right|^2 = 4.  $$ $$  \implies \text{area}(Z_{1}'Z_{2}'Z_{3}') = 4 \times \text{area}(Z_{1}Z_{2}Z_{3}) = 32 \text{sq units.} $$
