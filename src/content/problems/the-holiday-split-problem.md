---
title: The Holiday Split Problem
author: Saad Hassan
category: combinatorics
superCategory: JEE
difficulty: Intermediate
publishDate: 2026-08-28
tags:
  - Combinatorics
  - Generating Polynomial
  - Bijection
  - Miklos Bona
references:
  - title: Miklos Bona
---
## Problem Content

A semester at a Technical University consists of $n$ days. At the beginning of each semester, the Dean of Engineering divides the term into two parts. The first $k$ days will form the theoretical part of the semester, and the remaining $n-k$ days will form the laboratory part, where $1\leq k\leq n-2$. She then chooses one holiday in the first part, and two holidays in the second part. In how many different ways can she design the term with these constraints?\

## Solution & Proof

The first holiday can be chosen in $\binom{k}{1}=k$ ways, and the remaining two holidays can be chosen from $n-k$ days in $\binom{n-k}{2}$ ways. So, the total number of ways is equal to

$$   \sum_{k=1}^{n-2} k \binom{n-k}{2} = \sum_{k=0}^{n} k \binom{n-k}{2}, \ \text{where} \ \binom{n}{r}=0, \ \text{for} \ r > n. \tag{A} $$

Say $n-k=r$, then the equation $A$ transforms into

$$  \sum_{r=0}^{n} (n-r) \binom{r}{2} = n \sum_{r=0}^{n} \binom{r}{2} -  \sum_{r=0}^{n} r \binom{r}{2} $$

$$  n \sum_{r=2}^{n} \frac{r(r-1)}{2} - \sum_{r=1}^n \frac{r \cdot r (r-1)}{2} =  n \sum_{r=2}^{n} \frac{r(r-1)}{2} - \sum_{r=1}^n \frac{(r-2+2) \cdot r (r-1)}{2} $$

$$  = (n-2) \sum_{r=1}^{n} \frac{r(r-1)}{2} - \sum_{r=1}^n \frac{r(r-1)(r-2)}{2}  $$

$$ =\frac{n-2}{6} \sum_{r=2}^n r (r-1)((r+1)-(r-2)) - \sum_{r=1}^n \frac{1}{8} \sum_{r=2} ((r+1)-(r-3)) r (r-1)(r-2)  $$

$$  =\frac{n-2}{6} \sum_{r=2}^n \left( (r+1)r(r-1) - r (r-1)(r-2) \right) $$

$$  - \sum_{r=1}^n \frac{1}{8} ((r+1)r(r-1)(r-2) - r(r-1)(r-2)(r-3) ) $$

$$  \frac{1}{6}(n+1)n(n-1)(n-2) - \frac{1}{8} (n+1)n(n-1)(n-2) $$

$$  = \frac{(n+1)n(n-1)(n-2)}{24} =  \binom{n+1}{4}  $$

**Another Solution:** As noted in the previous problem, there are $k$ ways to do the first part and $\binom{m}{2}$ ways to do the second where $ n-k = m.$ \newline \newline The generating functions of these two sequences are $A(x) =\sum_{k \ge 1}k x^k,$ and $ B(x) = \sum_{m \ge 2} \binom{m}{2}x^m. $ We know from calculus that $\sum_{i \ge 0 } x^i = \frac{1}{1-x}. $ Taking derivatives, we get

$$  A(x) = \frac{x}{(1-x)^2}, \ B(x) = \frac{x^2}{(1-x)^3}.   $$

Let $F(x)$ be the generating function of the sequence ${f_{n}}.$ Then we have $ A(x)B(x) = F(x). $ Therefore,

$$ F(x) = \frac{x^3}{(1-x)^5}  = x^3 \sum_{n \ge 0} \binom{n+4}{4} x^n = \sum_{n \ge 3} \binom{n+1}{4} x^n.   $$

Therefore, $f_{n} = \binom{n+1}{4}.$

**Yet Another Solution:** In effect, we have to select four days

$(i)$ The day on which the holiday will be awarded during the theoretical part

$(ii)$ The last day of the theoretical part

$(iii)$ Two holidays in the laboratory part , all in the same order in which they are mentioned.

Therefore, we can have one of the following two cases

(A) The theoretical part ends with a holiday in which we will select $3$ days from $n$ in $\binom{n}{3}$ ways

(B) The last day of the theoretical part and the holiday of the first theoretical part are different days. In this case, the problem tantamounts to selecting $4$ days, from $n$, which can be done in $\binom{n}{4}$ ways.  Therefore, the total number of ways this can be done is $\binom{n}{3}+ \binom{n}{4}= \binom{n+1}{4}$.

**Even Nicer Solution:** Let the day on which the holiday is awarded in the theoretical part be $a$. Let the day on which the theoretical part ends be $b.$ And let the days on which the holidays are awarded in the laboratory part be $c,d$. Therefore, we are looking for integer quadruples

$$  1 \le a \le b < c < d \le n \iff 0 \le a-1 < b < c< d \le n $$

which is equal to selecting four different things from $n+1$ things and can be done in $\binom{n+1}{4}$ ways.
