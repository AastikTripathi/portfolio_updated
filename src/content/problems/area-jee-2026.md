---
title: Area, JEE, 2026
author: Saad Hassan
category: calculus
superCategory: JEE
year: 2026
difficulty: Intermediate
publishDate: 2026-08-29
tags:
  - Calculus
  - AreasBetweenTwoCurves
  - PolarCoordinates
references:
  - title: JEE 2026
---
## Problem Statement

Consider the ellipses given by $$  4x^2+y^2 =1 \ \text{and} \ x^2+4y^2 $$ If $\alpha$ is the area of the common regions that lies inside both the given ellipses, then the value of $\cot{\alpha}$ is

## Solution & Proof

Let us begin by plotting the curves

![](/images/problems/area-jee-2026/diagram.png)

Since the two curves can be obtained by interchanging $x$ and $y$, therefore the curves are simply reflections of each other in the line $y=x.$ The symmetry guarantees that the area of the region being asked is $8$ times the area of the region $R_{1}.$ It would be a terrible idea to set up the integral in a Cartesian system. Given the symmetry of the ellipse, let us invoke polar co-ordinates. Let the radius from the origin be of length $\rho$ and say that the radius vector makes an angle $\theta$ with the positive $x-$ axis. The co-ordinates of the point are $(\rho \cos{\theta}, \rho \sin{\theta}).$ Since it lies on the ellipse $4x^2+y^2=1. $ Therefore, we have
$$  4 \rho^2 \cos^2{\theta} + \rho^2 \sin^2{\theta} =1 \implies \rho^2 = \frac{1}{4 \cos^2{\theta}+ \sin^2{\theta} }.    $$
Since the boundaries of the region $R_{1}$ are contained by the rays $ \theta =0 $ and $\theta = \frac{\pi}{4}.$ So the given area is
$$  \int_{0}^{\frac{\pi}{4}} \frac{1}{2} \rho^2(\theta ) d\theta =  \frac{1}{2} \int_{0}^{\frac{\pi}{4}}  \frac{1}{4 \cos^2{\theta}+ \sin^2{\theta} } d \theta  $$
$$   \frac{1}{2} \int_{0}^{\frac{\pi}{4}}  \frac{1}{\tan^2\theta+4 } \cdot  \sec^2 \theta d \theta  $$
Put $ \tan \theta = t \implies \sec^2 \theta d\theta = dt. $ The given integral transforms into
$$   \frac{1}{2} \int_{0}^{1} \frac{1}{t^2+4} dt  = \frac{1}{4} \left[\tan^{-1}\left(\frac{t}{2} \right )\right]_{0}^{1} = \frac{1}{4} \tan^{-1}\left (\frac{1}{2} \right)   $$
$$ \implies \alpha =  8 \cdot \frac{1}{4} \tan^{-1}\left (\frac{1}{2} \right)  =  2  \tan^{-1}\left (\frac{1}{2} \right)  $$
$$  \implies \cot{\left( 2  \tan^{-1}\left (\frac{1}{2} \right) \right)} =\frac{3}{4}.  $$
