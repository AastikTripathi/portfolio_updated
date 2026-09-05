---
title: A seemingly polynomial equation
author: Saad Hassan
category: algebra
superCategory: JEE
difficulty: Intermediate
publishDate: 2026-08-29
tags:
  - Polynomial
  - Trigonometric Substitution
references:
  - title: STEP
---
## Problem Content

## The total number of real numbers $x,y,z$ satisfying the equations

$$ y+ x^3 = 3x(1+xy),   $$
$$  z+y^3 = 3y(1+yz),     $$
$$  x+z^3 = 3z(1+zx)  $$
is equal to:\

## Solution & Proof \

\
Upon rearranging these equations, we get the following.

$$ y = \frac{3x-x^3}{1-3x^2},  $$

$$  z = \frac{3y-y^3}{1-3y^2},   $$

$$  x = \frac{3z-z^3}{1-3z^2} $$

Since $x,y,z \in \mathbb{R},$ assume that $ x =\tan{\theta}. $

$$ \implies y = \frac{3 \tan{\theta}- \tan^3{\theta}}{1-3\tan^2{\theta}} = \tan{3 \theta}   $$

$$  \text{Analogously}, \ z = \tan{9\theta}, \ \text{and} $$

$$ x = \tan{27 \theta} = \tan{\theta}  $$

Solving the equation, we get $  27 \theta = n \pi + \theta  $

$$ 26 \theta = n \pi, \ \text{where} \ n \ \text{is an integer}.  $$

$$  \theta = \frac{n \pi}{26}, \ n \ \in \lbrace 0,1,2, \dots 25 \rbrace.   $$

In total, there are 26 solutions.
