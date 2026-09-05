---
title: Tangency and Pythagorean Triplets.
author: Saad Hassan
category: coordinate-geometry
superCategory: ISI
year: 2026
difficulty: Intermediate
publishDate: 2026-08-29
tags:
  - ISI
  - CoordinateGeometry
  - PythagoreanTriples
  - Parabola
  - Tangent
references:
  - title: ISI,2026
---
## Problem Statement

Let $a$ and $b$ be rational numbers. Consider the parabola
$$
y=ax^{2}+b
$$
and the line
$$
y=b^{2}x-a.
$$

Which of the following statements are true?

(A) There exist infinitely many rational pairs $(a,b)$ for which the line is tangent to the parabola.

(B) There exists at least one pair of positive rational numbers $(a,b)$ for which the line is tangent to the parabola.

(C) If the line is tangent to the parabola, then $$ b^{4}=4a(a+b). $$

(D) There exists exactly one rational pair $(a,b)$ for which the line is tangent to the parabola.

## Solution & Proof

Answer:(A,B,C)

**Solution:** The line

$$ y=b^{2}x-a $$

is a tangent to the parabola

$$ y=ax^{2}+b $$

if and only if the equation

$$ ax^{2}-b^{2}x+(a+b)=0 $$

has a repeated root. Hence,

$$ \Delta=b^{4}-4a(a+b)=0, $$

or equivalently, $$ 4a^{2}+4ab-b^{4}=0. $$

Observe that this is a quadratic equation in $a$.
Therefore, $a$ is rational if and only if its discriminant is the square of a rational number
$$
16b^{2}(1+b^{2})
$$
is the square of a rational number.

Now, let
$$
b=\frac{p}{q}, \ \text{where} \ p,q \in \mathbb{Z} \ \text{and gcd}(p,q)=1
$$
and $(p,q,\ell)$ is a Pythagorean triple, that is,
$$
p^{2}+q^{2}=\ell^{2}.
$$
Then
$$
16b^{2}(1+b^{2})
=
16\cdot
\frac{p^{2}}{q^{2}}
\cdot
\frac{p^{2}+q^{2}}{q^{2}}
=
16\cdot
\frac{p^{2}\ell^{2}}{q^{4}}
=
\left(\frac{4p\ell}{q^{2}}\right)^{2},
$$
which is indeed the square of a rational number. Consequently,
$a$ is rational.

Since there exist infinitely many primitive Pythagorean triples, therefore there are infinitely many rational values of $b$, and hence infinitely many rational pairs $(a,b)$ satisfying the given condition.
