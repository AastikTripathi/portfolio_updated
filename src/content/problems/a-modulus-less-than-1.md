---
title: A modulus less than 1
author: Saad Hassan
category: calculus
superCategory: JEE
year: 1997
difficulty: Intermediate
publishDate: 2026-08-29
tags:
  - Calculus
  - Limits
  - Derivatives
references:
  - title: JEE, 1997
---
## Problem Statement


Find a fifth degree polynomial $p(x)$ such that $p(x)+1$ is divisible by $(x-1)^3$ and $p(x)-1$ is divisible by $(x+1)^3.$


## Solution & Proof 

**Rumination:** Skip to the solution if you do not want to read what led me to the solution. I wonder if this problem would be rather easy if the condition given to us was simply this $(x-1)^3$ divides $p(x) .$ This would give us $p(1)=p'(1)=p''(1)=0$ and likewise for the other condition. But notice $ p(1)=-1$ but $ p'(1)=p''(1)=0. $ Ah, and there it is our solution.**Solution:** Since $p(x)+1$ is divisible by $(x-1)^3,  $ therefore we must have $$ p(x)+1 = q_{1}(x)(x-1)^3  $$ where $ q_{1}(x) $ is a polynomial of degree two. Notice that $$  p(1) = -1, \ p'(1) = p''(1) = 0 \tag{A}  $$ Similarly, since $p(x)-1$ is divisible by $(x+1)^3,  $, therefore, we must have $$ p(x)-1 = q_{2}(x)(x+1)^3  $$ where $ q_{2}(x) $ is a polynomial of degree two. Notice that $$  p(-1) = 1, \ p'(-1) = p''(-1) = 0 \tag{B}  $$ Since $p(x)$ is a polynomial of degree $5$, therefore, $p'(x)$ is a polynomial of degree $4$ whose zeros are $-1,1$ with multiplicity $2$ each. $$ \implies   p'(t) = A(t^2-1)^2 \implies \int_{-1}^{x} p'(t) dt =  \int_{-1}^{x} A(t^2-1)^2 dt  $$ $$ p(x)-p(-1) = p(x) -1 = A \left(\frac{x^5}{5}-  \frac{2x^3}{3} + x + \frac{8}{15} \right)   $$ Since $p(1)=-1,$ this gives us $A= \frac{-15}{8}$ $$  \implies p(x) = \frac{-3}{8} x^5 + \frac{5}{4}x^3 + \frac{-15}{8}x $$
