---
title: The Cubic Carousel
author: Saad Hassan
category: algebra
superCategory: JEE
difficulty: Intermediate
publishDate: 2026-08-29
tags:
  - Cubic
  - TrigonometricSubstitution
references: []
---
## Problem Content\

\
If $\alpha < \beta < \gamma $ be three roots of the equation $x^3-3x+1=0,$ then the value of the
$$  (\alpha^2-\gamma )(\beta^2-\alpha)(\gamma^2-\beta) $$
is equal to\

## \

## Solution & Proof

Consider the function $f(x)=x^3-3x+1.$ Let us find out its point of extrema. $f'(x)= 3(x^2-1)$, which is zero at $ x=-1,1. $ Notice that $$  f(-2) = -1 <0, f(-1) = 1>0, f(1) =-1, f(2)= 3>0 $$

Therefore, by intermediate value theorem $f$ has three real zeros such that

$$ -2 < \alpha < -1 < \beta < 1 < \gamma <2.  $$

Since the zeros of $f$ lie in the interval $(-2,2),$ therefore, say $x=2 \cos{\theta}.$ The equation $f(x)=0$ becomes

$$  8 \cos^3{\theta} - 6 \cos{\theta} + 1 =0 $$ $$ \implies 4 \cos^3{\theta} - 3 \cos{\theta} = \frac{-1}{2}  $$

$$  \implies \cos({3 \theta}) = \frac{-1}{2} \implies 3\theta = 2n\pi \pm \frac{2\pi}{3}, \ \text{since} \ \cos{3 \theta} = 4 \cos^3{\theta} - 3 \cos{\theta}.  $$

$$ \theta = \frac{2n\pi}{3} \pm \frac{2\pi}{9} $$

Therefore, the roots of the equation are

$$  \left\lbrace 2 \cos{\frac{2\pi}{9} }, 2 \cos\frac{4\pi}{9}, 2 \cos{\frac{8\pi}{9}} \right\rbrace= \left\lbrace  -2 \cos{\frac{\pi}{9}}= \alpha,2 \cos{\frac{2\pi}{9}} = \gamma , 2 \cos\frac{4\pi}{9} = \beta \right \rbrace $$

The given expression becomes

$$ \left( 4 \cos^2{\frac{\pi}{9}} -2 \cos{\frac{2\pi}{9}} \right)  \left( 4 \cos^2{\frac{4\pi}{9}} -2 \cos{\frac{8\pi}{9}} \right)  \left( 4 \cos^2{\frac{2\pi}{9}} -2 \cos{\frac{4\pi}{9}} \right)  $$

$$  8 \left( 2 \cos^2{\frac{\pi}{9}} -\cos{\frac{2\pi}{9}} \right)\left( 2 \cos^2{\frac{4\pi}{9}} -\cos{\frac{8\pi}{9}} \right)\left( 2 \cos^2{\frac{2\pi}{9}} -\cos{\frac{4\pi}{9}} \right) \tag{A}  $$

Using the fact $ 2\cos^2{\theta} - \cos{2 \theta} = 1, $ we obtain the value of the expression in $(A)$ as $8.$  \

**Comment and Anecdote:** I was asked to solve this problem in the class, and as perhaps anyone would, I headed into this problem using Vieta's formula. And, as expected, I came to a deadlock. I was compelled to look for other ways. The number $3$ in the equation proved to be crucial. To begin with, I guessed that it had to be an identity involving $\tan{\theta}.$ But very soon I gave up. Then I turned my gaze towards $\cos{\theta}.$ The only problem that I had was $\cos{3 \theta} = 4 \cos^3{\theta} - 3 \cos{\theta}.$ And there was no $4$ in sight. This is when in the original solution I said let $x=2y. $ That converts the whole thing in terms of $\cos{3 \theta}.$ But you require an additional justification that roots indeed belong to the interval $[-2,2].$ Using calculus I found that it was indeed true. If you are wondering why the derivatives have been invoked because apparently they have no role to play, then remember that to begin with, I did not know that the cubic had three real roots and one of the ways to find out if a cubic has three real roots is to evaluate the cubic at its points of extrema. So, in some ways, the solution you see is upside down, at least with respect to the manner in which it was conceived. That is the case in many nice problems. There is yet another solution on stack exchange, which I recommend you should see.
