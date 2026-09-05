---
title: Cubes modulo n+5
author: Saad Hassan
category: number-theory
superCategory: AIME
year: 2020
difficulty: Intermediate
publishDate: 2026-08-30
tags:
  - NumberTheory
  - AIME
  - SumOfCubes
references:
  - title: AIME,2020
---
## Problem Statement

Find the sum of all positive integers $n$ such that when $1^3+2^3+3^3+\dots+n^3$ is divided by $n+5$, the remainder is $17.$

## Solution & Proof

The question can be rewritten as:

$$ n+5 \mid 1^3+2^3+3^3+\cdots+n^3 - 17, \quad \text{where } a \mid b \text{ means } a \text{ divides } b. $$

$$ \implies n+5 \mid 1^3+2^3+3^3+ \dots + (n+4)^3 - \big((n+1)^3 + \dots + (n+4)^3\big) - 17 \tag{$\alpha$} $$

The above formulation works according to the parity of $n$:

**(A) Say that $n$ is even:**
Therefore $n+4$ is even, so there is an even number of terms from $1, 2, \dots, n+4.$ Notice:

$$ r^3 + (n+5-r)^3 \equiv 0 \pmod{n+5} $$

$$ \implies \underbrace{1^3+2^3+\cdots+(n+3)^3+(n+4)^3}_{\substack{1^3 \longleftrightarrow (n+4)^3 \cr 2^3 \longleftrightarrow (n+3)^3 \cr \vdots}} \equiv 0 \pmod{n+5}. $$

Therefore, $(\alpha)$ transforms into:

$$ n+5 \mid \big((n+1)^3 + \dots + (n+4)^3\big) + 17 $$

$$ \implies n+5 \mid (-4)^3 + (-3)^3 + (-2)^3 + (-1)^3 + 17 $$

$$ \implies n+5 \mid 83 \implies n = 78. $$

**(B) Say that $n$ is odd:**
Similarly, notice:

$$ r^3 + (n+5-r)^3 \equiv 0 \pmod{n+5}. $$

Therefore:

$$ \underbrace{1^3+2^3+\cdots+\left(\frac{n+3}{2}\right)^3 +\left(\frac{n+5}{2}\right)^3 +\left(\frac{n+7}{2}\right)^3+\cdots+(n+4)^3}_{\substack{1^3 \longleftrightarrow (n+4)^3 \cr 2^3 \longleftrightarrow (n+3)^3 \cr \vdots}} \equiv \left(\frac{n+5}{2}\right)^3 \pmod{n+5}, $$

since $\left(\frac{n+5}{2}\right)^3$ is the unique unpaired term.

$$ 1^3+2^3+3^3+ \dots + (n+4)^3 \equiv \left(\frac{n+5}{2}\right)^3 \pmod{n+5} \tag{$\beta$} $$

Say $m = n+5$, where $m$ is even:

$$ m \mid \frac{m^3}{8} - 83 \implies 8m \mid m^3 - 664, \quad \text{but } 8m \mid 8m^3 $$

$$ \implies 8m \mid 8m^3 - 8(m^3 - 664) \implies 8m \mid 8 \cdot 664 \implies m \mid 664 $$

The possible values of $m$ are $2, 4, 8, 166, 332, 664$, out of which only $m = 166$ works. This gives $n = 161$.

So, the only values of $n$ for which this is possible are $n = 78, 161.$ Their sum is equal to $\mathbf{239}.$
