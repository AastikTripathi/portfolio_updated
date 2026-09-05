---
title: Righteous Arrangements
author: Saad Hassan
category: combinatorics
superCategory: ISI
year: 2026
difficulty: Intermediate
publishDate: 2026-08-28
tags:
  - Combinatorics
references: []
---
## Problem Content\

The number of permutations of $ \lbrace1,2, \dots, 10 \rbrace $ such that there is exactly one integer, whose immediate neighbour on the right is smaller than it is equal to

## Solution & Proof\

In fact, let us solve a general problem. Let us find the total number of permutations of $ \lbrace1,2, \dots, n \rbrace  $ such that there is exactly one integer whose immediate neighbour on the right is smaller than it. Call such arrangements **righteous**. Let the total number of such arrangements for the set  $ A_{n}= \lbrace1,2, \dots, n \rbrace  $ be $a_{n}$. By definition, the total number of **righteous** arrangements of the set $ A_{n-1}= \lbrace1,2, \dots, n-1 \rbrace  $ will be $a_{n-1}.$

Consider a **righteous** arrangement of the set $A_{n-1}$ $$  b_{1}< b_{2} < \dots < b_{k} >  b_{k+1} < \dots < b_{n-1}    $$

For every **righteous** arrangement of $A_{n-1}$, there are two **righteous** arrangements of $A_{n},$ that are

$$  b_{1}< b_{2} < \dots < b_{k} > n>  b_{k+1} < \dots < b_{n-1}      $$

$$ b_{1}< b_{2} < \dots < b_{k} >  b_{k+1} < \dots < b_{n-1}  <n $$

And for every arrangement of $A_{n-1}$ in which the $i$th natural number is in its natural position, $n-1$ **righteous** arrangements of $A_{n}$ can be obtained by inserting $n$ before $1$ or $2$ or $3$ or $\dots $ before $n-1$. $$  1,2,3, \dots, n-1  $$ If there are two or more elements in the arrangement of the set $A_{n}$ such that $ b_{k}>b_{k+1} $ and $b_{l}>b_{l+1}$, then no matter where we put $n$, a **righteous** arrangement cannot be obtained. Thus, we have the following recurrence\
$$  a_{n} = 2 a_{n-1} + (n-1) \implies \ a_{r} =  2 a_{r-1}+(r-1) $$ $$  \implies \frac{a_{r}}{2^r} - \frac{a_{r-1}}{2^{r-1}} = \frac{r-1}{2^{r-1}}   $$ $$  \implies \sum_{r=2}^{n} \left( \frac{a_{r}}{2^r} - \frac{a_{r-1}}{2^{r-1}} \right) = \sum_{r=2}^{n} \frac{r-1}{2^{r-1}}  $$ $$  \implies \frac{a_{n}}{2^n} = 1- \frac{(n+1)}{2^n} $$ $$  \implies a_{n} = 2^n - (n+1). $$ The answer to our problem is therefore $2^{10}-11 = 1013.$

## **Method 2:**

The answer is too close to the total number of subsets of $A_{n}$ to leave it to recurrence and not think of complementary counting. Consider a righteous arrangement of $A_{n}$ $$ c_{1} < c_{2}< \dots < c_{k} > c_{k+1} < \dots < c_{n}  $$ Only the first $k$ elements have to be chosen, the remaining must come from the complement of $A_{n}$ and can be arranged in only one way. For example, consider a subset of $A_{10}$, which in this case is $3,6,9$. There is only $\textbf{righteous}$ arrangement that is $$ 3,6,9,1,2,4,5,7,8,10  $$ Therefore, for subset $ c_{1} < c_{2}< \dots < c_{k}  $ of $A_{n}$, there is exactly one righteous arrangement except for the empty set and subsets like $\lbrace1,\dots,r\rbrace$, where $r\le n .$ Therefore, we have a total of $n+1$ subsets which do not correspond to righteous arrangements. every other subset corresponds to exactly one arrangement. Therefore, the total number of righteous arrangements is $2^n-(n+1)$.
