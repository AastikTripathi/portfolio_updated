---
title: Unruly non-real Roots
author: Saad Hassan
category: algebra
superCategory: JEE
difficulty: Intermediate
publishDate: 2026-08-29
tags:
  - ComplexNumbers
  - Non-realRoot
references: []
---
## Problem Content

Let $\alpha$ and $\beta$ are the roots of the equation $2z^2-3z-2i=0,$ where $i = \sqrt{-1},$ then find the value of $$  16 \cdot \Re \left( \frac{\alpha^{19}+\beta^{19}+\alpha^{11}+\beta^{11}}{\alpha^{15}+\beta^{15}} \right) \cdot \Im \left( \frac{\alpha^{19}+\beta^{19}+\alpha^{11}+\beta^{11}}{\alpha^{15}+\beta^{15}} \right)  $$ where $\Re (z)$ and $\Im (z)$ denote the real and imaginary parts of the complex number $z.$

## Solution & Proof

\
\
Using Vieta's, we can conclude that:

$$   \alpha + \beta = \frac{3}{2}, \alpha \beta = -i \tag{A}   $$

$$ \implies \alpha^4 \beta^4 =1 \implies \alpha^4 = \frac{1}{\beta^4} \tag{B} $$

Now, $  \left( \frac{\alpha^{19}+\beta^{19}+\alpha^{11}+\beta^{11}}{\alpha^{15}+\beta^{15}} \right). $ This is equal to

$$   \left( \frac{\alpha^{15} \alpha^4 +\beta^{15} \beta^4 +\alpha^{15} \beta^4 +\beta^{15} \alpha^4}{\alpha^{15}+\beta^{15}} \right)   = \left( \frac{(\alpha^4+\beta^4)(\alpha^{15}+\beta^{15})}{\alpha^{15}+\beta^{15}} \right) = \alpha^4+\beta^4   $$

The question essentially asks us to find

$$  16 \Re (\alpha^4+\beta^4 ) \Im(\alpha^4+\beta^4 ) $$

Notice that using $(A)$, we get $\alpha^2+\beta^2 = (\alpha + \beta)^2 - 2 \alpha \beta = \frac{9}{4} + 2i.  $ And similarly

$$  \alpha^4+\beta^4 = (\alpha^2+\beta^2)^2 - 2 \alpha^2 \beta^2 = \left(\frac{9}{4} + 2i \right)^2 +2 = \frac{49}{16} + 9i  $$

$$ \implies 16 \Re (\alpha^4+\beta^4 ) \Im(\alpha^4+\beta^4 ) = 411  $$
