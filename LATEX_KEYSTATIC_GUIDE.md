# LaTeX & Keystatic — Known Behavior & Workarounds

## The Problem

Keystatic uses a rich-text editor (ProseMirror) that interprets standard Markdown syntax in real time. In Markdown, wrapping text with underscores (`_text_`) triggers **italic formatting**. Unfortunately, LaTeX uses underscores extensively for subscripts (e.g., `a_{n+1}`, `T_{n}`, `\text{hello}`).

This means:

- You type `\underbrace{a_{n}+n!}_{\text{when T is on top}}`
- Keystatic sees the `_` characters and interprets parts of your LaTeX as italic text
- On save, it may serialize `_` as `*` in the `.md` file, producing damaged LaTeX like `\underbrace{a*{n}+n!}*{\text{when T is on top}}`

**This is a known limitation of Keystatic's `fields.markdoc` editor.** There is no configuration option to disable italic formatting in `fields.markdoc` (unlike the older, deprecated `fields.document` which did support this). The Keystatic team has not exposed a way to turn off inline marks in the markdoc editor.

---

## How the Website Handles It (Auto-Heal Engine)

An **auto-heal engine** is built into the rendering pipeline. It runs at build/render time — after Keystatic saves the `.md` file but before KaTeX renders the math.

### Where it lives

- **Problems page**: `src/pages/problems/[...slug].astro` (lines ~165–185)
- **Articles page**: `src/pages/articles/[...slug].astro` (lines ~161–181)

### What it does

Inside every `$$ ... $$` display math block, the engine applies these corrections:

| Damage Pattern | What Keystatic Did | Auto-Heal Fixes To |
|---|---|---|
| `**text**` | Applied bold formatting | Strips `**` entirely |
| `\underbrace{X}*{\text{Y}}*` | Italicized the subscript | `\underbrace{X}_{\text{Y}}` |
| `T*{n+1}` | Italicized the subscript | `T_{n+1}` |
| `a*n` | Italicized the subscript | `a_n` |
| `*text*` | Generic italic wrapper | Strips `*` wrappers |

### The flow

```
1. You write LaTeX in Keystatic editor
2. Keystatic may convert _ to * on save (the .md file is "damaged")
3. At render time, the auto-heal engine reads the .md file
4. It finds all $$ ... $$ blocks and reverses the italic/bold damage
5. KaTeX receives clean LaTeX and renders correctly
6. Website visitor sees correct math ✓
```

### Important: The editor will look wrong, the website will look right

The Keystatic editor may visually show italic formatting on your LaTeX code. **This is cosmetic only.** The published website will always render the math correctly because the auto-heal runs before KaTeX.

---

## Best Practices for Writing LaTeX in Keystatic

### 1. Use the code block approach when possible

For complex display math, consider wrapping your LaTeX in a fenced code block inside the editor, then switching to raw `.md` file editing for the final version. This prevents Keystatic from interpreting the underscores.

### 2. Write math in `$$ ... $$` blocks

The auto-heal engine specifically targets content inside `$$ ... $$` (display math) blocks. Always use display math for multi-line equations.

### 3. Don't panic if the editor shows italics

If you see italic formatting appear in the Keystatic editor after typing subscripts, it's expected. The website output will be correct.

### 4. Verify on the live site, not in the editor

Always check the published page (e.g., `saadhassan.in/problems/your-problem`) to verify math rendering. The Keystatic editor preview is **not** a reliable indicator of final output for LaTeX content.

### 5. For inline math (`$ ... $`)

The auto-heal engine currently targets `$$ ... $$` (display math) blocks only. For inline math, avoid patterns that Keystatic could misinterpret. If inline math issues arise, the auto-heal can be extended to cover `$ ... $` blocks as well.

---

## Technical Reference

### Files involved

| File | Role |
|---|---|
| `keystatic.config.ts` | Defines all content collections and editor configuration |
| `src/pages/problems/[...slug].astro` | Renders problem pages with auto-heal |
| `src/pages/articles/[...slug].astro` | Renders article pages with auto-heal |
| `src/content/problems/*.md` | Raw markdown files (may contain damaged LaTeX) |
| `src/content/articles/*.md` | Raw markdown files (may contain damaged LaTeX) |

### Why not use `fields.document` instead?

`fields.document` is **deprecated** by the Keystatic team. It did support `formatting: { inlineMarks: { italic: false } }` to disable italics, but migrating to it would mean using an unsupported API that could break in future Keystatic updates. The auto-heal approach is more future-proof.

### Adding auto-heal to new page types

If you create a new page type that renders LaTeX (e.g., tutorials), copy the auto-heal block from `src/pages/problems/[...slug].astro` into your new page's rendering logic. The key section is the `renderSolutionSafe` function or the `$$` splitting logic with the `cleanMath` variable.

---

## Quick Troubleshooting

| Symptom | Cause | Fix |
|---|---|---|
| Italic formatting appears in Keystatic editor on LaTeX | Keystatic interpreting `_` as italic | Ignore — website will render correctly |
| Math renders wrong on website | Auto-heal missed a pattern | Add a new regex rule to the `cleanMath` block in the relevant `[...slug].astro` file |
| `\end{aligned}` breaks | Backslash stripping | Already handled — `\end{...}` patterns are protected |
| New collection's math is broken | Auto-heal not added to that page | Copy the auto-heal block from `problems/[...slug].astro` |
