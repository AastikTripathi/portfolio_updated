---
title: Arithmetic Mean of Subset
author: Saad Hassan
category: combinatorics
superCategory: ISI
year: 2025
difficulty: Intermediate
publishDate: 2026-08-28
tags:
  - Combinatorics
  - ISI
  - Principle of Bijection
references:
  - title: ISI, 2025
---
## Problem Statement

A subset of $\lbrace u_{1},u_{2},u_{3},u_{4},u_{5} \rbrace$ of the first $90$ positive integers can be chosen in $\binom{90}{5}$ ways. Let $u_{\text{max}}$ denote max$ \lbrace u_{1},u_{2},u_{3},u_{4},u_{5}\rbrace $ and $ u_{\text{min}} $ denote min $ \lbrace u_{1},u_{2},u_{3},u_{4},u_{5}\rbrace. $ Then find the arithmetic mean of $u_{\text{max}} + u_{\text{min}} $ over all such subsets.\

## Solution and Proof

For every subset of first $90$ positive numbers

$$ A = \lbrace u_1 < u_2 < u_3 < u_4 < u_5 \rbrace $$

Consider another subset

$$ B = \lbrace 91 - u_{5} < 91-u_{4} < 91-u_{3} < 91-u_{2}< 91-u_{1} \rbrace  $$

Notice  $u_{\text{max}}(A) = u_{5}$ and $ u_{\text{min}}(A) = u_{1} $. However, $u_{\text{max}}(B) = 91- u_{1}$ and  $ u_{\text{min}}(B) = 91-u_{5} $. $ \implies  $ $u_{\text{max}}(A) + u_{\text{min}}(B) =91 $ and $ u_{\text{min}}(A)+ u_{\text{max}}(B) =91. $ Notice that for every subset $A$ of the first $90$ numbers there is another different subset $B$ defined as above. Notice that $A $ and $B$ cannot be equal as:

$$ (u_{1},u_{2},u_{3},u_{4},u_{5} ) \neq (91 - u_{5}, 91-u_{4}, 91-u_{3}, 91-u_{2}, 91-u_{1})  $$

Since $ 2u_{3} \ne 91.$ So for every subset $A$, there is another subset $B$ such that $u_{\text{max}}(A) + u_{\text{min}}(B) =91 $ and $ u_{\text{min}}(A)+ u_{\text{max}}(B) =91. $  Therefore, the  arithmetic mean of $u_{\text{max}} + u_{\text{min}} $ over all such subsets is $91.$
