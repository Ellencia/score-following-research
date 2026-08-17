# Accessibility Audit: Score Following 연구 프로젝트 단독 웹앱

**Standard:** WCAG 2.1 AA
**Date:** 2026-05-05
**Audited:** `index.html` + `css/styles.css` + `js/app.js` (rendered at http://172.30.1.22:8000/)
**Audience:** Designer fixing the mockup
**Theme:** dark-mode only (`--bg: #0e1116`)

---

## Summary

**Total findings: 18** — Critical 4 · Major 9 · Minor 5

The good news: the dark theme's text/background contrast is excellent across body copy, headings, muted text, and links — every text-on-surface combination passes AA, often by a wide margin (16:1 for body text). The structural problems live elsewhere: the **modal is not keyboardable** (no focus management, no trap, no labelled name), the **mindmap SVG nodes are not reachable by keyboard at all**, **two of the four colored badges fail text contrast**, and **non-text contrast (borders, focus indicators) is too weak** to communicate structure or focus state. Heading order also skips a level.

The fixes are well-bounded. None require restructuring the visual design — most are CSS adjustments, attribute additions, and a focused rewrite of the modal/SVG interaction logic.

---

## Findings

### Perceivable

| # | Issue | WCAG | Severity | Recommendation |
|---|-------|------|----------|----------------|
| P1 | `.num.learning` badge: `#fff` on `#a371f7` = **3.35:1** (fails 4.5:1). Affects papers 02–05, 08. | 1.4.3 | 🔴 Critical | Add `color: #1a1a1a;` to `.paper-card .num.learning` (matches the override already on `.classical` and `.hybrid`). New ratio: 6.45:1. |
| P2 | `.num.offline` badge: `#fff` on `#ff7b72` = **2.52:1** (fails 4.5:1). Affects paper 09. | 1.4.3 | 🔴 Critical | Add `color: #1a1a1a;` to `.paper-card .num.offline`. New ratio: 9.41:1. |
| P3 | `--border: #2d3340` on `--bg: #0e1116` = **1.49:1**, on `--panel: #161b22` = **1.37:1** — fails 3:1. Used for every card outline, button outline, table divider, and SVG node stroke. The "boundary" of every card is essentially invisible. | 1.4.11 | 🟡 Major | Lighten `--border` to roughly `#3d4452` (≈3:1 against `--bg`) or `#414855` (≈3.1:1 against `--panel`). Verify both pairings — the same token is reused on two backgrounds. |
| P4 | `.paper-card:target` highlight ring is `box-shadow: 0 0 0 2px rgba(88,166,255,0.15)` → effective **1.25:1** against bg. When a mindmap node is clicked and the page jumps to a card, the "you are here" indicator is invisible. | 1.4.11, 1.3.1 | 🟡 Major | Raise alpha to ≥0.5 (`rgba(88,166,255,0.5)`, ≈3.5:1) or use solid `var(--accent)` border. Also see O5 (focus management). |
| P5 | Category color (classical / learning / hybrid / offline) is the **only** visual cue that distinguishes the four research lineages on the `<span class="num">` badges and on mindmap branches. The number "01"–"09" itself carries no category information. Colorblind users (8% of men) can't tell "classical" from "offline" — both warm-colored. | 1.4.1 Use of Color | 🟡 Major | Add a text label or icon: e.g. `<span class="num classical">01 · 고전</span>`, or pair the color with a shape (★/●/■/▲), or add `aria-label="고전 신호처리 노선, 논문 01"`. The legend explains what the colors mean but doesn't help on a non-color channel. |
| P6 | The mindmap `<svg>` has **no `<title>`, no `<desc>`, no `aria-label`**. Screen readers announce nothing — the diagram is invisible to AT users. | 1.1.1 | 🟡 Major | Add directly inside the `<svg>`: `<title>9편 논문 관계도</title><desc>중앙의 Score Following 노드에서 고전 신호처리 4편, 학습 기반 5편으로 분기하는 마인드맵</desc>`. Set `role="img"` on the `<svg>` and `aria-labelledby` to the title. |
| P7 | Decorative leading characters in card labels (`▶ 시작은 여기서`, `📖 용어가 헷갈릴 때`, `📄 docx 다운로드`, the literal "×" close button) are read aloud as "right-pointing triangle", "open book", "page facing up", "X" by NVDA/VoiceOver. | 1.3.1 | 🟢 Minor | Wrap decorative chars in `<span aria-hidden="true">▶</span>` and keep meaningful text outside. The close button already has `aria-label="닫기"` — good — but consider `<span aria-hidden="true">×</span>` so the "×" character isn't doubled by some screen readers. |

### Operable

| # | Issue | WCAG | Severity | Recommendation |
|---|-------|------|----------|----------------|
| O1 | The **mindmap SVG nodes are not keyboard accessible**. Every clickable node uses `<g class="node" onclick="scrollToCard(...)">`. `<g>` has no native focus, no tab stop, no Enter/Space activation. A keyboard-only user cannot reach any of the 9 papers via the mindmap. | 2.1.1 | 🔴 Critical | Replace `<g>` with `<a href="#paper-01" class="node">…</a>` (SVG `<a>` is focusable in modern browsers, allows Enter activation, and keeps URL semantics). Or add `tabindex="0" role="button"` + `keydown` Enter/Space handlers. The native `<a href="#paper-01">` route is simpler and gets keyboard, focus ring, and scroll-to-id for free. |
| O2 | **No `:focus` / `:focus-visible` styles defined anywhere in `styles.css`.** Browser defaults appear, but on the dark theme they're inconsistent — Firefox draws a thin dotted outline, Chrome a 2px ring; on the synthesis-card `<button>` the default outline is partially clipped by the rounded border. | 2.4.7 | 🔴 Critical | Add a global rule: `:focus-visible { outline: 2px solid var(--accent-2); outline-offset: 2px; border-radius: inherit; }`. Override per-component if needed. Verify on every interactive element: synthesis-card, paper-card buttons/links, modal-close, modal-download, mindmap nodes. |
| O3 | **Modal opens without moving focus.** `openDoc()` adds `.open` and unblocks the overlay, but does not call `.focus()` on the dialog or any child. Keyboard users see a flash and don't know where to type. Tab from the previous trigger continues into hidden background buttons. | 2.4.3, 2.4.7, 2.1.2 | 🔴 Critical | After `modal.classList.add('open')`, store the trigger (`lastFocus = document.activeElement;`), then `modal.querySelector('.modal-close').focus()` (or focus the heading with `tabindex="-1"`). On `closeModal()`, call `lastFocus?.focus()` so focus returns to the originating button. |
| O4 | **No focus trap inside the modal.** Tabbing past the last element in the modal jumps into the (visually-hidden but DOM-present) page underneath. Combined with O3, this means a keyboard user can be stranded in invisible territory. | 2.1.2 (no trap), 2.4.3 | 🟡 Major | Either implement a focus trap (loop Tab/Shift+Tab between first and last focusable inside `#modal`), or — preferred — add `inert` to `.container` while the modal is open: `document.querySelector('.container').inert = true;` on open, false on close. `inert` removes the background from focus order and from the AT tree in one stroke. |
| O5 | `scrollToCard()` smoothly scrolls but **does not move focus** to the target paper card. Mouse users see a 1.4s border flash; keyboard users get no announcement that the page moved. | 2.4.3, 2.4.7 | 🟡 Major | After scrolling, call `target.focus({ preventScroll: true })`. The `<article>` will need `tabindex="-1"` so it can receive focus. Combined with O2 the user will see the focus ring on the card they jumped to. |
| O6 | Hidden modal is `opacity: 0; pointer-events: none;` plus `aria-hidden="true"` — but the buttons inside are **still in the tab order**. Tabbing through the page passes through invisible "분석 보고서 / 비전공자 해설 / docx 다운로드 / 닫기" buttons. | 4.1.2, 2.4.3 | 🟡 Major | Use the `inert` attribute on `#modal` when closed (and remove it on open). `inert` simultaneously hides from AT and removes from tab order — replaces both `aria-hidden` and the `pointer-events:none` workaround. |
| O7 | Touch targets on `.paper-card .links` buttons/links are roughly **100 × 30 px**. Modal close is **32 × 32 px**. Both pass WCAG 2.2 AA (24×24, criterion 2.5.8) but fall below the 44×44 recommendation for finger use. | 2.5.5 (AAA, advisory) | 🟢 Minor | Bump button padding from `8px 10px` to `10px 12px` to reach ~44px tall. Modal close: `width: 44px; height: 44px;` (the visible "×" can stay the same size). Also apply to the modal-header download link. |
| O8 | Mindmap SVG is constrained to `min-width: 880px` inside an `overflow: auto` wrap. On a 360px-wide phone viewport you must horizontal-scroll a 2.5× wider element. Pinch-zoom is allowed (no `user-scalable=no`), and a vertical text alternative would be welcome. | 1.4.10 Reflow | 🟢 Minor | At narrow widths, replace the SVG with a stacked text list of the same papers grouped by lineage — the `<article>` cards below already serve as a fallback, so it may suffice to add a visible note "마인드맵을 가로로 스크롤하거나 아래의 카드 목록을 이용하세요." |

### Understandable

| # | Issue | WCAG | Severity | Recommendation |
|---|-------|------|----------|----------------|
| U1 | **Heading order skips h2.** The page goes h1 → h3 with no h2. Screen-reader users navigating by heading level (a primary navigation method) see only h1 and a flat row of h3s, missing the "전체 종합 문서", "논문 마인드맵", "논문 상세" sections — those are styled `<div class="section-title">` elements, not headings. | 1.3.1 | 🟡 Major | Promote each `<div class="section-title">` to `<h2>`. CSS already targets the class, so styling is unaffected. The synthesis-card titles can stay h3 (logical sub-level). |
| U2 | Mermaid renders user-controlled markdown content with `securityLevel: 'loose'`. Not strictly accessibility, but the doc templates are loaded via `fetch('templates/<key>.html')` and could include arbitrary HTML. If a template ever contains malformed accessible content (missing alt text, role abuse) it ships unchecked. | — (related: 1.1.1, 4.1.2) | 🟢 Minor | Out of scope for this audit, but worth a single review pass over the 19 template files for headings, image alts, and table headers. I can run that as a follow-up. |
| U3 | `.modal-download` link has `href="#"` when the document has no DOCX (`doc.docx \|\| '#'`). Activating it does nothing visible; keyboard users hit Enter on a "📄 docx 다운로드" link that silently no-ops. | 3.2.4, 4.1.2 | 🟢 Minor | When `doc.docx` is empty: hide the link (`hidden` attribute) or replace with disabled state (`aria-disabled="true"` and remove `href`). |

### Robust

| # | Issue | WCAG | Severity | Recommendation |
|---|-------|------|----------|----------------|
| R1 | `<div id="modal" role="dialog" aria-modal="true">` has no `aria-labelledby` or `aria-label`. Screen readers announce "dialog" with no name. | 4.1.2 | 🟡 Major | Add `aria-labelledby="modalTitle"` to `#modal` (the `#modalTitle` span already exists in the header). Make the title a heading too: change `<span class="modal-title" id="modalTitle">` to `<h2 class="modal-title" id="modalTitle">` — and the dialog now has both a name and a heading entry point. |
| R2 | `role="dialog"` is on the **overlay** (`<div class="modal-overlay">`) rather than the dialog window (`<div class="modal-window">`). Some screen readers infer the dialog boundary incorrectly — content starts at the backdrop, not at the visible card. | 4.1.2 | 🟢 Minor | Move `role="dialog"`, `aria-modal`, and `aria-labelledby` from `.modal-overlay` to `.modal-window`. Keep the overlay as a presentational backdrop. |
| R3 | Mindmap `<g class="node" onclick="…">` produces no name/role/value pair. Even with a sighted-user click handler, the elements report `role="generic"` to AT. | 4.1.2 | 🟡 Major | Resolved by O1 (replace with `<a>` or `role="button" tabindex="0" aria-label="…">`). |

---

## Color Contrast Check

Every text/background pair I could derive from `styles.css`. All ratios computed against the literal token values (no transparency unless noted as "composite").

| Element | Foreground | Background | Ratio | Required | Pass? |
|---------|------------|------------|-------|----------|-------|
| Body text | `#e6edf3` | `#0e1116` | 16.0 | 4.5 | ✅ |
| `header h1` (28px/700) | `#e6edf3` | `#0e1116` | 16.0 | 3.0 | ✅ |
| `header p` muted | `#8b949e` | `#0e1116` | 6.15 | 4.5 | ✅ |
| `header .meta` pill text | `#8b949e` | `#161b22` | 5.62 | 4.5 | ✅ |
| `.section-title` muted | `#8b949e` | `#0e1116` | 6.15 | 4.5 | ✅ |
| `.synthesis-card .label` (accent) | `#58a6ff` | `#161b22` | 6.85 | 4.5 | ✅ |
| `.synthesis-card h3` | `#e6edf3` | `#161b22` | 14.6 | 4.5 | ✅ |
| `.synthesis-card p` muted | `#8b949e` | `#161b22` | 5.62 | 4.5 | ✅ |
| **`.num.classical`** (override #1a1a1a) | `#1a1a1a` | `#f0a500` | 8.36 | 4.5 | ✅ |
| **`.num.learning`** (inherits #fff) | `#ffffff` | `#a371f7` | **3.35** | 4.5 | ❌ |
| **`.num.hybrid`** (override #1a1a1a) | `#1a1a1a` | `#56d364` | 9.03 | 4.5 | ✅ |
| **`.num.offline`** (inherits #fff) | `#ffffff` | `#ff7b72` | **2.52** | 4.5 | ❌ |
| `.badge OFFLINE` (composite) | `#ff7b72` | `#39292e` | 5.44 | 4.5 | ✅ |
| `.paper-card .meta` muted | `#8b949e` | `#161b22` | 5.62 | 4.5 | ✅ |
| `.paper-card .tagline` text | `#e6edf3` | `#1f2630` | 12.9 | 4.5 | ✅ |
| `.links button` text | `#e6edf3` | `#1f2630` | 12.9 | 4.5 | ✅ |
| `.links button.primary` text (composite) | `#79c0ff` | `#1d2938` | 7.57 | 4.5 | ✅ |
| `.node-text` | `#e6edf3` | `#1f2630` | 12.9 | 4.5 | ✅ |
| `.node-text-sub` | `#8b949e` | `#1f2630` | 4.95 | 4.5 | ✅ |
| `.node-tag` (offline 10px/700) | `#ff7b72` | `#161b22` | 6.86 | 4.5 | ✅ |
| `.root-text` (16px/700, large) | `#79c0ff` | `#1f2630` | 7.83 | 3.0 | ✅ |
| `.group-label` muted | `#8b949e` | `#161b22` | 5.62 | 4.5 | ✅ |
| `.modal-title` | `#e6edf3` | `#161b22` | 14.6 | 4.5 | ✅ |
| `.modal-body h2` (accent-2, large) | `#79c0ff` | `#0e1116` | 9.72 | 3.0 | ✅ |
| `.modal-body a` link | `#58a6ff` | `#0e1116` | 7.49 | 4.5 | ✅ |
| `.modal-body th` (accent-2 bold) | `#79c0ff` | `#1f2630` | 7.83 | 4.5 | ✅ |
| `footer` muted | `#8b949e` | `#0e1116` | 6.15 | 4.5 | ✅ |
| **Non-text 1.4.11 (need 3:1)** | | | | | |
| `--border` on `--bg` (card outline) | `#2d3340` | `#0e1116` | **1.49** | 3.0 | ❌ |
| `--border` on `--panel` (modal divider, node stroke) | `#2d3340` | `#161b22` | **1.37** | 3.0 | ❌ |
| `:target` ring (composite α=0.15) | `#192739` | `#0e1116` | **1.25** | 3.0 | ❌ |
| Legend dots (classical/learning/hybrid/offline) | various | `#161b22` | 5.16–8.98 | 3.0 | ✅ |

---

## Keyboard Navigation

| Element | Tab Order | Enter / Space | Escape | Notes |
|---------|-----------|---------------|--------|-------|
| Synthesis cards (`<button>`) | ✅ in order | ✅ activates `openDoc()` | — | Native button — works. |
| Mindmap nodes (`<g class="node">`) | ❌ **not focusable** | ❌ | — | **O1 — Critical.** |
| Paper card buttons (`<button>`) | ✅ | ✅ | — | Works. |
| Paper card "원본 PDF" link (`<a>`) | ✅ | ✅ navigates | — | Works. Also: should this open in new tab? Currently same-tab — back-button works, so OK. |
| Modal-close button | ✅ when modal is open | ✅ | ✅ closes (global keydown) | Works for activation; but focus never reaches it because of O3. |
| Modal-download link | ✅ | ✅ | ✅ closes modal | Broken when href="#" (U3). |
| Paper-card link buttons (after closing modal) | ✅ but focus is lost | ✅ | — | **O3 — focus does not return to the trigger.** |

---

## Screen Reader

| Element | Announced as | Issue |
|---------|--------------|-------|
| `<h1>Score Following 연구 프로젝트</h1>` | "heading level 1, Score Following 연구 프로젝트" | OK |
| `<div class="section-title">전체 종합 문서</div>` | (nothing — read as plain text) | **U1.** Should be h2. |
| `<button class="synthesis-card">▶ 시작은 여기서 / 논문 관계도와 흐름 / 9편의 시간선…</button>` | "right-pointing triangle, 시작은 여기서, heading level 3, 논문 관계도와 흐름, …, button" | **P7.** Triangle is announced verbatim. Otherwise OK — embedded h3 is acceptable in WAI-ARIA. |
| `<svg>…</svg>` (mindmap) | (silent — no role/title/desc) | **P6.** |
| `<g class="node" onclick="…">…</g>` | (silent — `<g>` is a generic group; text inside is read as static when reached via reading mode but is **not focusable** in browse/interactive mode) | **O1, R3.** |
| `<span class="num classical">01</span>` | "01" | **P5.** Category color is invisible to AT. |
| `<div id="modal" role="dialog" aria-modal="true">…` | "dialog" (no name) | **R1.** Add `aria-labelledby="modalTitle"`. |
| Modal opens | (focus stays where it was; user has no signal) | **O3.** |
| `<button class="modal-close" aria-label="닫기">×</button>` | "닫기, button" | OK (the literal × is suppressed by the aria-label). |
| Background buttons while modal is open | reachable by Tab and read by AT despite `aria-hidden` | **O6.** Use `inert`. |

---

## Priority Fixes

In rough order of "what blocks the most users":

1. **O1 — Make mindmap nodes keyboardable.** Replace `<g class="node" onclick=…>` with `<a class="node" href="#paper-XX">` (or `<g role="button" tabindex="0">` + Enter/Space handler). Today, every keyboard or screen-reader user is shut out of the entire mindmap.
2. **O3 + O6 — Modal focus management.** On open, focus the close button and `inert` the background. On close, restore focus to the trigger. This is the single fix that turns the modal from "broken for keyboards" to "working".
3. **O2 — Visible focus indicator.** One CSS rule: `:focus-visible { outline: 2px solid var(--accent-2); outline-offset: 2px; }`. Required for every keyboard fix above to actually be usable.
4. **P1 + P2 — Two badge color fixes.** Add `color: #1a1a1a;` to `.num.learning` and `.num.offline`. One-line CSS each.
5. **P3 — Lighten `--border`.** Bump `#2d3340` → `~#3d4452`. Ripples through every card outline; verify visually.
6. **U1 + R1 — Heading order and dialog label.** Promote `.section-title` to `<h2>`; add `aria-labelledby="modalTitle"` to the dialog.
7. **P5 — Don't rely on color alone.** Add a text/shape token next to `01`–`09` so colorblind users get the lineage info.
8. **P6 — SVG `<title>` and `<desc>`.** Three lines of markup that give the mindmap a name and description for AT.
9. **O5 — Move focus to target card after `scrollToCard`.** One added line in `app.js` plus `tabindex="-1"` on `<article>`.
10. **P4 — Brighten `:target` highlight.** Increase rgba alpha or use a solid border.

The rest (P7, O7, O8, U2, U3, R2) are polish — fix when convenient.

---

## What I couldn't audit from static files

A few things still need a live, focused/keyboard pass to confirm:

- **Real focus ring rendering** in your browsers (Chrome / Firefox / Safari) — the audit assumes browser defaults are present but inconsistent. Once O2 is in, this becomes deterministic.
- **Mermaid-rendered diagrams** inside modals (the templates I haven't seen). Mermaid generates SVG with its own a11y story; `securityLevel: 'loose'` means custom HTML can be injected, which deserves a separate template-by-template pass.
- **Korean screen-reader behavior on Pretendard / Noto Sans KR** — Korean punctuation announcement varies by SR. Worth a 5-minute NVDA spot-check after fixes.

If you want, I can go through the 19 template files in `templates/` next and surface the same kind of report for the modal content.
