---
title: Reducible to Cauchy
author: Saad Hassan
category: algebra
superCategory: JEE
difficulty: Intermediate
publishDate: 2026-08-29
tags:
  - FunctionalEquation
  - Cauchy
references: []
---
## Problem Content\

If $f : \mathbb{N} \rightarrow \mathbb{Q} $ be a function such that
$$  f(x+y) = \left(1+ \frac{y}{x+1} \right) f(x) + \left(1+ \frac{x}{y+1} \right) f(y) + x^2y + xy + xy^2 $$
then, evaluate $ \underset{n \rightarrow \infty}{\lim} \frac{f(n)}{n^3} $.

## Solution & Proof \

\
The following functional equation can be rearranged as
$$  f(x+y) =  \left( \frac{x+y+1}{x+1}  \right)f(x) + \left( \frac{x+y+1}{y+1}  \right)f(y) + xy(x+y+1) $$
$$  \implies \frac{f(x+y)}{x+y+1} = \frac{f(x)}{x+1} + \frac{f(y)}{y+1} + xy  \tag{A} $$
Define $g(t)= \frac{f(t)}{t+1}$, so $(A)$ transforms into:
$$   g(x+y) = g(x) + g(y) + xy  \tag{B} $$
**This is almost Cauchy's Functional Equation, except for the nagging xy at the end.**
Define $  g(x) - \frac{x^2}{2} =  h(x) $, So $(B)$ transforms into
$$  2 h(x+y) + (x+y)^2 = 2h(x)+ x^2 + 2h(y) + y^2 + 2xy   $$
$$  \implies h(x+y) = h(x) + h(y)  $$
This is Cauchy's functional equation and we know it is satisfied only by $h(x) = cx $, where $c = h(1)$. Now $h(1)= g(1)-\frac{1}{2} = \frac{f(1)}{2} - \frac{1}{2} = \frac{1}{4}$. So we have $h(x) = \frac{1}{4}x \implies g(x)= \frac{x}{4} + \frac{x^2}{2} $ and, therefore, $f(x) = \frac{1}{4} x (x+1)(2x+1) $.
$$\implies \underset{n \rightarrow \infty}{\lim} \frac{f(n)}{n^3} = \frac{1}{2}.  $$
