---
title: Binary Strings and transition
author: Saad Hassan
category: combinatorics
superCategory: BMO
year: 1982
difficulty: Intermediate
publishDate: 2026-09-02
tags:
  - Combinatorics
  - Bijection
  - BMO
references:
  - title: BMO,1982
---
## Problem Statement

Prove that number the of binary sequences of length $n$ which contains exactly $m$ occurrences of $"01"$ is $ \binom{n+1}{2m+1} .$

BMO, 1982

## Solution & Proof

\
**Rumination:** Skip to solution if you do not wish to know what led to the solution. Clearly, such a neat answer indicates the possibility of establishing a bijection. But the crucial question is how come you choose from $n+1$ objects instead of $n$ and how come you choose $2m+1$ things instead of $m$. It indicates that you are introducing $(m+1)$ more things of the other kind and perhaps $(n+2)$ objects that will have $(n+1)$ spaces in between.

**Solution:** Consider the binary sequence

$$
00101010110.
$$

During a transition from one bit to the next, we call it a **change** if the bit changes. Thus, in the above sequence, the changes are

$$ 0\to1,\quad 1\to0,\quad 0\to1,\quad 1\to0,\quad 0\to1,\quad 1\to0,  \quad 0\to1,\quad 1\to0. $$

Notice that changes of the two types necessarily alternate: every $0\to1$ change is followed, if there is another change, by a $1\to0$ change, and vice versa.

Now consider a binary sequence of length $n$ having exactly $m$ occurrences of $01$:

$$ a_1, a_2, \dots, a_n \in \lbrace 0,1 \rbrace . $$

Add $1$ to the left and $0$ to the right. Thus we obtain the **auxiliary sequence**

$$
1a_1a_2\cdots a_n0.
$$

Clearly, there is a bijection between the original sequence and the auxiliary sequence: we can recover the former simply by removing the $1$ on the left and the $0$ on the right.

The auxiliary sequence begins with $1$. Hence, if there is a change at all, its first change must be

$$
1\to0.
$$

Since changes alternate, the subsequent changes must be

$$
0\to1,\quad 1\to0,\quad 0\to1,\quad\ldots
$$

Moreover, the auxiliary sequence ends in $0$, so its final change must also be of the form $1\to0$.

The original sequence has exactly $m$ occurrences of $01$, and these are precisely the $m$ changes of the form $0\to1$ in the auxiliary sequence. Therefore there must be exactly $m+1$ changes of the form $1\to0$. Thus the auxiliary sequence has altogether

$$
m+(m+1)=2m+1
$$

changes.

But the auxiliary sequence contains $n+2$ bits, and hence there are $n+1$ gaps between consecutive bits:

$$
\boxed{1,|,a_1,|,a_2,|,\cdots,|,a_n,|,0}.
$$

A change occurs precisely at one of these gaps. Therefore, we may choose the $2m+1$ gaps at which changes occur in

$$
\binom{n+1}{2m+1}
$$

ways.

Conversely, any choice of $2m+1$ of these $n+1$ gaps uniquely determines the auxiliary sequence: start with $1$, and change the bit whenever one of the chosen gaps is crossed. Since the number of chosen gaps is odd, the final bit is $0$, as required.

Hence the required number of binary sequences is

$$
\boxed{\binom{n+1}{2m+1}}.
$$
