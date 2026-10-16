# Course Platform — Implementation Spec

A small, working course platform in **Next.js (App Router) + TypeScript**: a **Courses page** (free design) and a **Course Player page** (exact imitation of the supplied Desktop and Mobile references). This file is the single source of truth for the implementing agent.

---
## 0. Working rules for the agent (mandatory)

1. **Imitate, don't redesign.** The Course Player must reproduce the references exactly: layout, sizes, spacing, fonts, colours, content. Never "improve" anything. Only the items listed in §3.4 (screenshot leftovers) and §20 (decisions) may differ.
2. **No other technology.** Next.js App Router + TypeScript (`strict`). Styling with **Tailwind CSS**, icons from **lucide-react**. No UI component library and no state library. Runtime dependencies: `next`, `react`, `react-dom`, `lucide-react` only; build/dev tools (tailwindcss, postcss, eslint, prettier, playwright…) are fine.
3. **Never invent values.** Use the measurements in this file. If a value is missing or ambiguous: list options, recommend one, ask the owner, and record the answer in `docs/DECISIONS.md`.
4. **Work stage by stage** (§17 and `PHASES.md`) — never implement the site in one go. After each phase: stop, report (what was done, commands run + output, visual-diff result, deviations, open questions), wait for review.
5. **Never claim something works unless you ran it.** Show the command and its output.
6. **Small commits**, Conventional Commits, each expressing one step (`feat(player): add video block`, `style(player): match desktop spacing`, `fix(accordion): …`). Never commit `.next`, `node_modules`, `.env*`, `visual-diff/`.
7. Write code the owner can explain line by line: simple, readable patterns; a short comment only where the *why* is non-obvious.

---
## 1. Required deliverables

* **A) Courses page** — free design but visually consistent with the player. ≥ 6 sample courses; each with image, name, short description **or** instructor name, status, progress %, and a **"Start" / "Continue"** button. Selecting a course navigates to its player page.
* **B) Course Player page** — the main page; highest possible match with the Desktop and Mobile references: layout, sizes, spacing, fonts, colours; video, lesson data, curriculum list, current-lesson state; Course Materials, Course Progress, comments; the popups and interactive states shown.
* **Functions:** data from structured mock data/JSON; select a lesson → content updates and the current lesson is marked; open popups; show materials and progress; add a demo comment and show it in the list.
* **Responsive:** Desktop **and Tablet and Mobile** (not only two sizes); no horizontal scroll, overlap or breakage; test different text lengths and lesson counts; buttons easy to use on mobile.
* **Code quality:** small reusable components, clear names, sensible folders, data separated, no duplication, no fixed dimensions that break responsiveness, a clear **README**, Git commits that express the stages.
* **Performance & accessibility:** test the production build on mobile and desktop; compress images and use suitable formats/sizes; avoid unnecessary files; minimise bundle size; semantic HTML, alt text, colour contrast.
* **README** must explain the architectural decisions: folder organisation, Server/Client Components, image handling and performance.

---
## 2. Stack and constraints

Next.js (latest stable at start; pin the exact version), React, TypeScript `strict` + `noUncheckedIndexedAccess`, ESLint, Prettier. Styling: **Tailwind CSS v4 (CSS-first config)** — design tokens live in `@theme` inside `globals.css` (§5.3–5.4). Fonts via `next/font`. Images via `next/image`. Icons: **`lucide-react`** (§8.1). **The UI is in English**, except the instructor message inside the Leaderboard popup, which is Arabic (right-to-left) exactly as in the reference (§3.2, §10).

---
## 3. Reading the references

### 3.1 Files (`reference/`)
| File | What it is |
|---|---|
| `desktop_reference_2x.png` | Desktop Course Player, 2625×4246 px = **2×**. **CSS px = PNG px ÷ 2.** The PNG has a **7 CSS px transparent margin on the left**: the real frame starts at PNG x=14 and is **1305×2123 CSS px**. **All x values in this file are frame-relative** (already minus 7). y values need no offset. Test viewport **1304**. |
| `mobile_reference_2x.png` | Mobile Course Player, composed from the supplied Figma pieces (856×5160 = 2×, frame 428 wide). Design viewport: **iPhone 14 Pro Max 430×932**. Pieces are upscaled low-res crops → mobile numbers are less exact than desktop. |
| `popup_leaderboard_2x.png`, `popup_exam_2x.png`, `progress_group_2x.png` | Popup / component references (2×). |
| `figma_annotations.png` | The designer's written notes (Arabic) — behaviour instructions, translated in §9. |

### 3.2 What is design, what is data, what is explanation
The Figma file is made of **screenshots pasted as images** (intentionally: the task is to read a UI and infer sizes, spacing and relations without components or styles). Only the **Course Player** is provided (Desktop + Mobile + popups); the Courses page is free.

* **Inside the screens = design → reproduce it**, including the **Arabic instructor message in the Leaderboard popup** (right-to-left, with the 💪 emoji).
* **Text written around the screens** (side notes, arrows, labels such as "Course Player:", "Course Materials:", "Mobile View"…) = **explanation for the developers**, not UI and not shown to the student. Its content is translated into requirements in §9.
* **Sample content vs structure.** The values shown in the screens (course title, `63%`, instructor, `3 weeks`, lesson names, comments…) are the **seed data of the first course**. This is a **real, working, data-driven project**: every course supplies its own data and the pages render it. The H1 is the course's title (the same title shown on the Courses page); status and progress come from the same course data on both pages. **Layout, sizes, spacing, fonts, colours, component styling and element order are the design to reproduce exactly.**

### 3.3 Precedence
Designer's behaviour notes (§9) > desktop reference > mobile reference > inference. If this file and an image disagree, the image wins: fix this file and log it in `docs/DECISIONS.md`.

### 3.4 Screenshot leftovers — do NOT draw these (not design)
1. Browser chrome at the top of the mobile reference (URL bar, "iPhone 14 Pro Max 430×932" toolbar).
2. The **red arc** at the bottom of the mobile accordion (leftover of the source template's scroll-to-top button).
3. The faint **vertical divider** right of the social icons in the desktop reference.
4. **Clipped card edges**: the 2nd and 3rd desktop curriculum cards are cut off at the bottom; render them complete, same style as card 1.
5. The **mobile progress group is mis-assembled** (the "You" bubble and "63%" overlap the first accordion header). Overlap is forbidden by the requirements → use the desktop arrangement (bubble above the bar, percentage below) at every size.
6. The reference bar fill ends at ≈66 % while its label says 63 %: not design. Fill width, marker position and label all come from the course's `progressPercent` (clamp the marker so the bubble never leaves the bar at 0 % and 100 %).

Everything else visible in the screens **is design and must be reproduced as shown** (including repeated content such as the third "Week 5-8" card and the two identical Materials columns on desktop — implement them through data).

---
## 4. Course Player — visible content (reproduce exactly)

*All strings in this section are the seed data of the first course; other courses supply their own.*

**Header band:** breadcrumb `Home › Courses › Course Details` ("Home" and "Courses" are links, the last item is the current page); H1 = the course's title (data). For the first course the title is "Starting SEO as your Home Based Business" (full title visible in the mobile reference; the desktop reference crop omits the end).
**Left column (desktop) / main flow (mobile):**
1. Video (poster + play button).
2. Row of four circular icon buttons (replace the social icons — see §9.5).
3. **Course Materials** — desktop: heading *outside/above* a white shadowed card containing **two identical columns**, each: `Duration: 3 weeks`, `Lessons: 8`, `Enrolled: 65 students`, `Language: English`. Mobile: card with heading **"Course Materials"** inside, **one column**: `Instructor: Edward Norton`, `Duration: 3 weeks`, `Lessons: 8`, `Enrolled: 65 students`, `Language: English`.
4. **Comments** — heading, three comments: avatar, author name (the screens show the designer's placeholder "Student Name Goes Here"; seed realistic names, D-10), date (`Oct 10, 2021`, `Oct 15, 2021`, `Oct 19, 2021`), text `Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.` Then a textarea (placeholder **"Write a comment"**) and a teal button **"Submit Review →"** (label exactly as in the design).
**Right column (desktop) / below Materials (mobile):** heading **"Topics for This Course"**; progress (marker **"You"**, **63%**); curriculum.

**Curriculum content**
* Desktop = three always-open cards, each with a heading, description and rows. Mobile = accordion cards (first open "−", others "+").
* Section 1 — desktop heading **Week 1-4**, mobile heading **Course Introduction**; description: `Advanced story telling techniques for writers: Personas, Characters & Plots`. Rows: `Introduction` · `Course Overview` · `Course Overview` [`0 QUESTION`][`10 MINUTES`] · `Course Exercise / Reference Files` · `Code Editor Installation (Optional if you have one)` · `Embedding PHP in HTML`.
* Section 2 — desktop **Week 5-8**, mobile **JavaScript Language Basics**; same description. Rows: `Defining Functions` · `Function Parameters` · `Return Values From Functions` [`2 QUESTION`][`15 MINUTES`] · `Global Variable and Scope` · `Newer Way of creating a Constant` · `Constants`.
* Section 3 — desktop **Week 5-8** (repeated as in the reference) with the same rows as section 2; mobile **Components & Databinding**.
* Every row has a document icon on the left; rows without tags have a padlock icon on the right (see D-07).

---
## 5. Design tokens

### 5.1 Fonts
| Role | Font |
|---|---|
| Headings, breadcrumb, labels, author names, buttons, accordion titles | **League Spartan** (variable, wght 400–700) |
| Body text: descriptions, lesson rows, comment text/date, values, tags, exam, popups | **Poppins** 300/400/500 |

| Instructor message (Leaderboard popup, Arabic) | The reference uses **GE SS Two Light** (commercial). If the owner supplies the font files, self-host with `next/font/local`; otherwise use **IBM Plex Sans Arabic** 300/400 as a documented substitute (D-04). Load it only with the Leaderboard popup (`preload: false`). |

Load with `next/font` (`display: 'swap'`, Latin subset for Spartan/Poppins), expose the variables `--font-spartan`, `--font-poppins`, `--font-arabic-face` and map them in `@theme inline` (§5.3).

### 5.2 Measured type scale (fitted by matching rendered width + height with the real fonts; calibrate with the diff loop)
| Element | Font | Size ≈ | Weight ≈ | Measured box (w×h) |
|---|---|---|---|---|
| Breadcrumb | Spartan | 20 | 400 (last item 500) | "Home" 48.5×14 |
| H1 | Spartan | 46 | 500–600 | "Starting SEO as your Home" 529×41 |
| Section headings ("Course Materials", "Comments") | Spartan | 34 | 500–600 | 246×24 / 152×23.5 |
| "Topics for This Course" | Spartan | 28 | 400–500 | 255×26 |
| Week card title | Spartan | 23 | 600–700 | "Week 1-4" 88×16 |
| Comment author | Spartan | 19 | 500 | 204.5×13.5 |
| Materials label | Spartan | 19 | 400 | "Duration:" 72.5×13 |
| Button label | Spartan | 19–20 | 600–700 | text+arrow 140.5 wide |
| Textarea placeholder | Spartan | 18–19 | 400 | "Write a comment" 136.5×13 |
| Description, lesson row, comment text | Poppins | 15 | 400 | description line 1 = 335.5 wide; comment line 1 = 597.5 wide |
| Materials value | Poppins | 13.5 | 400 | "3 weeks" 53×12 |
| Comment date | Poppins | 14.5 | 400 | "Oct 10, 2021" 81.5 wide |
| Progress "63%" | Poppins | 12.5 | 400 | 22×9 |

Line-heights: comment text 26, description 25, lesson row 26.

### 5.3 Colours (sampled)
```css
/* src/styles/globals.css */
@import "tailwindcss";

@theme {
  --color-bg: #ffffff;
  --color-band: #f5f9fa;          /* header band, popup boxes */
  --color-hairline: #e8e8e8;      /* borders, separators */
  --color-heading: #000000;
  --color-text: #110f15;
  --color-muted: #6c6a7a;         /* descriptions, comment name/date/text */
  --color-placeholder: #939393;
  --color-primary: #41b69d;       /* Submit button */
  --color-tag-green-bg: #f2faf8;  --color-tag-green-text: #30b3a4;   /* ≈ */
  --color-tag-red-bg:   #fdf2f4;  --color-tag-red-text:   #e53047;   /* ≈ */
  --color-play: #e54860;          /* ≈ play triangle */
  --color-progress-fill: #6abd8a;
  --color-progress-track: #e6e6e6;
  --color-marker: #485293;        /* "You" and percentage text */
  --color-marker-border: #c8c8c8;
  --color-icon: #6f6f6f;          /* ≈ icon-circle icons */
}

@theme inline {
  --font-heading: var(--font-spartan);
  --font-body: var(--font-poppins);
  --font-arabic: var(--font-arabic-face);
}
```
This gives utilities such as `bg-band`, `text-heading`, `text-muted`, `border-hairline`, `bg-primary`, `font-heading`, `font-body`. Where this file says `--color-x`, use the matching utility.
Sample the lesson document-icon colour (olive/gold) and the padlock directly from the reference.

### 5.4 Tailwind conventions
* **Mobile-first:** base classes = mobile, then `sm:` (640), `md:` (768), `lg:` (1024). Do not change Tailwind's default breakpoints. Dark mode is not used.
* Measured values from §6–§7 may be written as arbitrary values (`h-[500px]`, `text-[46px]`, `gap-[71px]`), but anything that must stay fluid uses `w-full`, `max-w-*`, `aspect-[3/2]`, `grid-cols-[minmax(0,1fr)_minmax(0,405px)]`, `min()`/`clamp()` — never a fixed width that can overflow.
* Colours and fonts come only from the `@theme` tokens (no raw hex in components).
* No inline `style` except dynamic values passed as CSS variables (progress, marker position).
* Repeated class groups become **small components** (not `@apply`). `@apply` is allowed only for base rules in `globals.css`.
* A tiny `lib/cx.ts` joins class names (no `clsx` dependency). Use `prettier-plugin-tailwindcss` (dev) so class order is consistent.

---
## 6. Course Player — desktop layout (viewport 1304; frame-relative CSS px)

Page padding ≈ **38 left / 39 right**; left column **750** (x 38→788); gap ≈ **71**; right column **≈405.5** (x 859.5→1265). Cap the container at 1304; the header band is full-bleed.

| Block | Position / size |
|---|---|
| Header band | y 0→133, `--color-band` |
| Breadcrumb | text top y=20, x=38.5, chevron separators |
| H1 | text top y=78.5 (incl. descenders to 119.5), x=38.5 |
| Video | x 38→788 (**750**), y 149.5→650 (**500**) → **3:2**, radius ≈5 |
| Play button | white circle ≈80, centred; triangle `--color-play` |
| Icon row | y 691→731; four circles **40×40**, 1px hairline, gap ≈16, first at x=38.5 |
| "Course Materials" heading | text top y=801.5 |
| Materials card | x 38→788, y ≈859→1127 (h ≈268); white; large soft shadow (≈ `0 10px 40px rgba(0,0,0,.06)`, calibrate) |
| Materials rows | 2 columns × 4 rows. Row pitch **57**; separators y 937.5, 994.5, 1051.5 (none under the last row). Padding ≈ 21 top / 19 bottom / **39 left / 29 right**. Column 1 x 77→346, column 2 x 489→759 (≈269 each, gap ≈143). Icon at column start, label at +36, value right-aligned. |
| "Comments" heading | text top y=1196 |
| Comment item | avatar **80×80** at x=38.5, top y=1256; text column x=148.5 (gap 30); author top y=1263; date top y=1294.5; text first line top y=1334.5; separator 1px y=1403.5 across the full 750; next item top y=1434 (**pitch 178** for 2-line text); no separator after the last item |
| Textarea | x 38→788, y 1791→1958.5 (h ≈168); white; radius ≈6; large soft shadow (≈ `0 20px 60px rgba(0,0,0,.08)`); padding ≈20; resize handle visible |
| Submit button | x 38→250.5 (**212.5×60**), y 1988.5→2049.5; `--color-primary`; radius ≈4; label + "→" icon; padding-inline 36; gap above 30 |
| Frame end | y=2123 |

**Right column** (plain stack, scrolls with the page):
| Block | Position / size |
|---|---|
| "Topics for This Course" | text top y=155.5, x=859.5 |
| "You" marker | circle ≈33 with ≈6px pointer, top y=197, tip y=237; 1px `--color-marker-border`; text `--color-marker` ≈12px; centred on the fill end |
| Progress bar | y 243.5→248.5 (**5px**), x 857→1266.5, fully rounded; fill `--color-progress-fill`, track `--color-progress-track` |
| "63%" | text top y=259.5, centred under the marker |
| Curriculum card 1 | x 859.5→1265, y 317→856 (**h 539**); 1px hairline; no/tiny radius; padding **20** |
| Card internals (offsets from card top) | title cap-top **+38.5**; description line 1 **+75.5**, line 2 **+100.5**; first separator **+140**; rows pitch **55** (single line) / **81** (two lines); last separator **+498**; card bottom **+539** |
| Lesson row | padding-block ≈14, line-height 26 → 55 incl. 1px bottom border; document icon ≈14px; title starts ≈20 after the content edge; trailing icon right-aligned |
| Tags | pills ≈26 tall, radius ≈4, padding ≈8×10, uppercase ≈14px, gap 8, **right-aligned**; `0 QUESTION` green, `10 MINUTES` red. When the title needs two lines, pills **stack vertically** right-aligned (see section 2 row "Return Values From Functions"). Title column `flex:1; min-width:0`, tags column `flex-shrink:0`. |
| Gap between cards | ≈50 (cards 2 and 3 use exactly the same component) |

---
## 7. Course Player — mobile and tablet

### 7.1 Mobile (≤ 767; reference 430) — numbers are ≈ (stitched reference)
* Side padding **16**. Header band to y≈137. Breadcrumb top y≈18.5 (20px). H1 wraps to two lines, tops y≈50.5 and 86.5 (**line pitch 36**) → ≈33px / 600.
* Video width 100% − 32, **3:2** (≈398×265), top y≈147.5.
* **Sticky player:** the video block is `position: sticky; top: 0` while the rest scrolls under it. Implement in **block layout** (a sticky grid item is confined to its grid area).
* Icon row below the video (circles 40; hit area ≥44).
* **Course Materials card:** heading inside the card ("Course Materials", Spartan ≈22/600), one column of 5 rows (Instructor, Duration, Lessons, Enrolled, Language), row pitch **57**, hairline separators, icon + label left, value right. Rows span the full card width.
* "Topics for This Course" (28px, same as desktop), progress bar (desktop arrangement, §3.4-5), then the **accordion**: card width 100% (≈399), 1px hairline; header height **≈79**, title Spartan ≈22/500, "+"/"−" icon right; **first card open ("−"), others closed ("+")**; gap between cards **≈31**; row pitch 55 (single) / ≈81 (two lines) / ≈89 (row with stacked tags).
* Comments: avatar **60×60**, text column starts x≈98 (gap ≈20), text 14–15px / line-height 26; textarea and button as desktop, button left-aligned.

### 7.2 Tablet (768–1023) — no reference, infer
Single column like mobile, side padding 32, **player not sticky**, Materials card in **two columns from 640px** (as desktop), curriculum as accordion (as mobile). From **1024** switch to the desktop two-column layout.

### 7.3 Desktop/mobile curriculum switch
≥1024: always-open cards, heading = `weekRange`, description visible. <1024: accordion, heading = section `title`, description hidden. Keep both strings in data; hide the unused one with `display:none` so screen readers read only one.

---
## 8. Component specs and states

**Lesson row** — document icon left; title; right: padlock (locked), nothing (open), or tags. States: *current* (text `--color-primary`, weight 500, 3px left accent, `aria-current="true"`), *completed* (teal check replaces the document icon), *locked* (`aria-disabled`, not actionable, `title` hint). Types: `video` → loads in the player; `pdf` → PDF popup; `exam` → Exam popup. Per the designer's arrows: the row **"Course Overview" with `0 QUESTION · 10 MINUTES` opens the PDF**; the row **"Embedding PHP in HTML" opens the Exam**; rows with `N QUESTION` (N>0) are exams.

**Player controls** (not in the reference; minimal, dark, shown on hover/focus/tap while playing): play/pause, seek bar, time, **Wide** (≥1024 only), **Maximize**. Before first play: poster + big play button only (this is the pixel-match state).

**"Now playing" label** — the only added UI element: small muted text in the empty space right of the icon row: `Lesson 1 of 18 · Introduction` (hidden <640). It shows the lesson data the requirements ask for without touching the reference areas.

**Icon-circle buttons** (Curriculum, Comments, Ask a Question, Leaderboard): 40×40 circle, 1px hairline, icon `--color-icon` 16–18px, `aria-label`, hover/focus: border + icon `--color-primary`.

**Accordion** — `<button aria-expanded aria-controls>` header, content region; open/close ≤200 ms; honour reduced motion.

### 8.1 Icons (lucide-react)
Import each icon by name (`import { Lock } from 'lucide-react'`), never `import * as`. Set `size` and `strokeWidth` to match the reference (thin ≈1.5 for lesson/materials icons, ≈2 for small UI icons). Decorative icons `aria-hidden="true"`; icon-only buttons need `aria-label`. **Verify every name exists in the installed version** (names change between releases); if not, take the closest icon and log it in `docs/DECISIONS.md`. Custom SVG only if lucide has nothing suitable.

| Use | lucide icon | Notes |
|---|---|---|
| Lesson row leading | `FileText` | ≈14–15px, olive/gold sampled from the reference |
| Locked lesson | `Lock` | ≈16px |
| Breadcrumb separator | `ChevronRight` | ≈14px |
| Play button | `Play` | `fill="currentColor"`, colour `--color-play`, ≈26px |
| Section icons | Curriculum `ListVideo` (or `List`), Comments `MessageSquare`, Ask `CircleHelp`, Leaderboard `Trophy` | 16–18px |
| Materials | Instructor `UserRound`, Duration `Clock`, Lessons `LibraryBig`, Enrolled `GraduationCap`, Language `Globe` | ≈24px, black, strokeWidth 1.5 |
| Submit button arrow | `ArrowRight` | ≈16px |
| Accordion | `Plus` / `Minus` | ≈18px |
| Player controls | `Play`/`Pause`, `Maximize`/`Minimize`, Wide `RectangleHorizontal` | |
| Dialogs | `X` (close), `ChevronLeft` (exam back), `AlarmClock` (timer), `Check`, `ExternalLink` | |

---
## 9. Behaviours (translated from the designer's Arabic notes — these are requirements)

1. The **Course Player** opens **in place** at the size shown in the design (not a pop-up).
2. **Mobile:** while scrolling, the player **stays stuck at the top** and the content scrolls under it (like YouTube mobile).
3. **Maximize** opens the player **fullscreen on web and mobile, even if the device's auto-rotate is off**. Implementation: Fullscreen API on the player container → try `screen.orientation.lock('landscape')` in try/catch → if unavailable (iOS Safari) use a CSS pseudo-fullscreen (`position:fixed; inset:0`) and rotate the player 90° via transform when the viewport is portrait. Provide an obvious exit button; Esc exits.
4. **Desktop — Wide:** the player becomes **full viewport width** and the course content moves **below** it. Full-bleed without horizontal scroll (`overflow-x: clip` on the page wrapper). Keep the `<video>` mounted when toggling.
5. The four social icons are **replaced by four section icons: Curriculum, Comments, Ask a Question, Leaderboard.**
   * **Curriculum / Comments** → smooth-scroll to that section (`scroll-margin-top` ≥ sticky player height on mobile).
   * **Ask a Question** → **popup**, same design as the comment form. If closed by mistake, reopening **in the same session** restores what was typed (`sessionStorage`); clear on submit.
   * **Leaderboard** → popup (§10).
6. **Course Materials** = the facts card (§4, §6, §7).
7. **Course Progress** shows the student's progress in the course and level; the bar **animates to its value when the page is scrolled to it** (IntersectionObserver, once; reduced motion → no animation).
8. **PDF** opens in a **full-screen popup**, closable.
9. **Exam** opens in a **full-screen popup**, closable, and **saves the student's current progress** (answers, current question, time left); reopening resumes.
10. A **message from the instructor** ("Eng. Ali Shahin") appears in the Leaderboard popup in his own style with a plain keyboard emoji. It is **Arabic (Egyptian dialect), right-to-left, as in the reference**. Several encouraging/motivating messages (sometimes a friendly push) are written in Appendix A; the one matching the **student's level** is shown.

---
## 10. Popups

All popups: native `<dialog>` + `showModal()`, focus moved in and restored on close, Esc closes, `aria-labelledby`, body scroll locked, close control ≥44×44, lazy-loaded with `next/dynamic`.

**Leaderboard** (`popup_leaderboard_2x.png`, 820×1666 → **410×833**): white card, 1px hairline, radius ≈20. Centred title: line 1 = the course title (regular, navy ≈ `#0b0b5e`), line 2 = **"Leaderboard"** (bold). Message box: bg `--color-band`, radius ≈8, padding ≈24; `lang="ar" dir="rtl"`; Arabic text (Appendix A) in the Arabic font, navy ≈ `#1a1a6c`, ≈17px, line-height ≈34, right-aligned; the emoji (💪, ≈48px) sits at the start (right) side. Numbers in the message are **Arabic-Indic numerals** (`٦٠%`) via `Intl.NumberFormat('ar-EG')`. List container: bg `--color-band`, radius ≈30, padding 24; **six rows**: white, 1px border `#e6e8ea`, radius ≈8, height ≈66, gap ≈24. The reference rows are empty → fill each with rank, avatar, name, points; highlight the student's own row. Mobile: width `min(410px, 100% − 32px)`, `max-height: 90dvh`, internal scroll. (The reference's title font is a neutral sans; Poppins is acceptable, calibrate.)

**Exam** (`popup_exam_2x.png`, 610×1222 → 305×611): full screen. Background vertical gradient (top ≈ `#3f54b5` → bottom ≈ `#5577ff`, sample). Top bar: back arrow (closes), **yellow timer** (≈ `#ffd600`, glow, alarm icon + `09:32`, counts down). Five numbered circles (≈40, 1.5px white border; current = white fill, blue number). White question card (radius ≈24): number `1.` + question (Poppins 600) `Among the following status of India, which one has the oldest rock formations in the country?`, then four option cards (white, soft blue shadow, radius ≈8): square checkbox cell + 1px divider + label (`Asam`, `Bahar`, `Kamaltake`, `Utter Pardesh`); **selected** = bg `#5577ff`, white text, checkbox with dot. Use real radio inputs styled this way. Question number and active circle must agree (the screenshot shows circle 2 with "1." — inconsistent; use matching numbers). Additions needed to be usable: **Next/Finish** button, a result screen. Wide screens: centred column (max ≈480) over the full-screen blue. Create 5 questions.

**PDF**: full-screen dialog; top bar with title + close; `<iframe>`/`<object>` for `/media/course-overview.pdf`; an "Open in new tab" link (mobile Safari shows only page 1).

**Ask a Question**: dialog (max-width ≈560), heading "Ask a Question", same textarea/button styling as Comments.

---
## 11. Courses page (free design, consistent with the player)

Header band (`--color-band`, breadcrumb `Home › Courses`, H1 "Courses"). Grid **3 / 2 / 1** columns (≥1024 / ≥640 / below), gap 30. **Card:** white, 1px hairline, same radius as player cards; image 16:10 (`next/image`); title (Spartan); instructor or short description (Poppins muted); **status tag** (Not started / In progress / Completed — same pill style as lesson tags); **progress bar** (same 5px style) + `%`; **Start** (0 %) / **Continue** (1–99 %) / **Review** (100 %) button in `--color-primary`. The whole card links to `/courses/[slug]`. Title, instructor, cover, status and progress on the card are the **same course data** the player uses; "Continue" opens the player at the course's `currentLessonId`. ≥ 6 courses. States: `loading`, `not-found`.

---
## 12. Data model and mock data

Separate data from components: `src/data/**` (typed constants) + `src/types/course.ts`; helpers in `src/lib/courses.ts`.

```ts
export type LessonType = 'video' | 'pdf' | 'exam';
export type CourseStatus = 'not-started' | 'in-progress' | 'completed';

export interface Lesson {
  id: string; title: string; type: LessonType; locked: boolean;
  durationMinutes?: number;   // → "N MINUTES"
  questionCount?: number;     // → "N QUESTION"
  videoSrc?: string; pdfSrc?: string; examId?: string;
}
export interface CurriculumSection {
  id: string;
  title: string;        // mobile/tablet accordion heading
  weekRange: string;    // desktop card heading
  description: string;  // desktop card description
  lessons: Lesson[];
}
export interface CourseFact { id: 'instructor'|'duration'|'lessons'|'enrolled'|'language'; label: string; value: string; }  // built by buildCourseFacts(course), never stored
export interface CourseComment { id: string; author: string; dateISO: string; text: string; avatar?: StaticImageData; }
export interface LeaderboardEntry { id: string; name: string; points: number; avatar?: StaticImageData; isCurrentUser?: boolean; }
export interface ExamQuestion { id: string; text: string; options: { id: string; label: string }[]; correctOptionId: string; }
export interface Exam { id: string; title: string; durationSeconds: number; questions: ExamQuestion[]; }
export interface Course {
  id: string; slug: string; title: string; shortDescription: string; instructor: string;
  cover: StaticImageData; poster: StaticImageData;
  progressPercent: number;                            // 0–100: single source of truth for status AND progress on both pages (seed 63)
  duration: string; language: string; enrolledCount: number;   // e.g. "3 weeks", "English", 65
  currentLessonId: string;
  sections: CurriculumSection[];
  comments: CourseComment[]; leaderboard: LeaderboardEntry[];   // ≥ 6 entries
  studentPercentile: number;                          // 60 for the SEO course
  exams: Exam[];
}
```

**Courses (≥6), deliberately varied:** (1) the **SEO course** with the exact reference data in §4 (slug `starting-seo-as-your-home-based-business`, 3 sections × 6 lessons, progress 63, percentile 60, instructor Edward Norton, duration "3 weeks", enrolledCount 65, language English); (2) very long course/section/lesson titles; (3) one section with 3 lessons; (4) five sections with 30+ lessons; (5) completed (100); (6) not started (0). Every course must render in the player without errors.

**Derived values (no hard-coding in components):** `lib/courses.ts` exports `getCourseStatus(progressPercent)` → `not-started` (0) / `in-progress` (1–99) / `completed` (100); `getTotalLessons(course)`; `buildCourseFacts(course)` → Instructor, Duration, **Lessons (= total lessons in the curriculum)**, Enrolled (`"{n} students"`), Language. Desktop renders the facts card as the reference shows (two columns × [Duration, Lessons, Enrolled, Language]); mobile renders one column × [Instructor, Duration, Lessons, Enrolled, Language]. `CourseCard`, `StatusTag`, the Start/Continue/Review label and the player's progress block all use these same helpers.

**Lesson access (D-07):** open = Introduction, Course Overview (video), Course Overview (PDF, tags), Embedding PHP in HTML (exam), Return Values From Functions (exam, both sections that contain it). All other lessons locked (padlock). `currentLessonId` = "Introduction".

---
## 13. Architecture

### 13.1 Routes
`/` → redirect `/courses` · `/courses` (static) · `/courses/[slug]` (Server page + client island; **SSG** with `generateStaticParams`) · `not-found` (root and `[slug]`). `generateMetadata` per course. `<html lang="en">`.

### 13.2 Folders
```
src/
  app/ layout.tsx · page.tsx · not-found.tsx · courses/page.tsx · courses/[slug]/{page,not-found}.tsx
  assets/images/            # poster, avatars, covers (static imports)
  components/
    ui/       Button, Tag, ProgressBar, IconCircleButton, Avatar, Dialog
    layout/   PageBand (breadcrumb + title)
    courses/  CourseCard, CourseGrid, StatusTag
    player/   PlayerShell*, VideoPlayer*, PlayerControls*, SectionIcons*, NowPlaying,
              CourseMaterials, CourseProgress*, Curriculum*, CurriculumSection, LessonRow,
              Comments*, CommentItem, CommentForm*,
              dialogs/ PdfDialog*, ExamDialog*, AskQuestionDialog*, LeaderboardDialog*   (* = "use client")
  data/       courses/…, index.ts, level-messages.ts
  lib/        courses.ts, format.ts (date "Oct 10, 2021", Arabic-Indic numbers), level.ts, storage.ts
  hooks/      useFullscreen, useInView, useStoredState
  styles/     globals.css   (@import "tailwindcss"; @theme tokens; base rules)
  types/      course.ts
public/media/ videos/*.mp4 (self-hosted, §13.7), posters/*.webp, course-overview.pdf
scripts/visual-diff.mjs · docs/DECISIONS.md · README.md
```
Styling is Tailwind utility classes inside the components — no per-component CSS files (§5.4).

### 13.3 Server vs Client Components
Server by default: pages, `PageBand`, `CourseMaterials`, `CourseCard/Grid`, comment items, icons. Client only for state/effects/browser APIs: `PlayerShell` (current lesson, wide, open dialog), video + controls (media, Fullscreen API), `SectionIcons`, `Curriculum` (accordion + selection), `CourseProgress` (IntersectionObserver), `Comments`/`CommentForm`, dialogs. The server page passes server-rendered pieces (`PageBand`, `CourseMaterials`) into the client `PlayerShell` as slots/children so they ship no client JS. Dialogs via `next/dynamic`, rendered only after first open. Read `localStorage`/`sessionStorage` **in effects**, never during render (no hydration mismatch).

### 13.4 State
`PlayerShell`: small `useReducer` — `currentLessonId`, `completedLessonIds`, `isWide`, `dialog: null | {kind:'pdf'|'exam'|'ask'|'leaderboard'; lessonId?}`; shared via a small context. Comments state lives in `Comments`.

### 13.5 Page layout implementation
* **≥1024:** CSS grid `grid-template-columns: minmax(0,1fr) minmax(0,405px)`; areas `"player topics" "icons topics" "materials topics" "comments topics"`. DOM order = mobile order (band, player, icons, materials, topics, comments). **<1024: plain block flow** (so the sticky player works).
* **Wide:** `data-wide` on the layout → the player area spans both columns, full-bleed; the rest follows below in its normal arrangement.
* **Video:** one `<video>` kept mounted; changing lesson changes `src` and calls `load()`; `preload="none"`, `playsInline`, `poster`; the play button overlay shows only before first play.
* **Progress animation:** fill with `transform: scaleX()` once ≥40 % visible; marker uses the same value.
* **Exam persistence:** `localStorage['exam:<courseId>:<examId>'] = {answers, currentIndex, secondsLeft, finished}` saved on every change; resume on open.
* **Ask draft:** `sessionStorage['ask:<courseId>']`.
* **Comments:** trim + non-empty, ≤500 chars; new comment appended at the end with author "You", today's date in the same `Oct 10, 2021` format, initials avatar when no image; list has `aria-live="polite"`.
* **Level message:** `lib/level.ts` maps `studentPercentile` to a level (§Appendix A) and picks a variant deterministically (`percentile % 2`), no random during render; the percentage is formatted with `Intl.NumberFormat('ar-EG')`.

### 13.6 Images and media
Static imports from `src/assets/images` (Next derives width/height). Poster: `priority`, `sizes="(min-width:1024px) 750px, 100vw"`, `quality≈75`. Avatars: 160px source for 80/60 display. Covers 800×500 with `sizes="(min-width:1024px) 33vw, (min-width:640px) 50vw, 100vw"`. Video rules are in §13.7; a 68 KB placeholder video and a 2.6 KB sample PDF are provided in `assets/media/`.

### 13.7 Video
**Self-hosted MP4 files with the native `<video>` element. No YouTube or other third-party embeds.** Reasons: the design needs a custom poster + play button and custom controls (Wide, Maximize, fullscreen/rotation fallback, sticky) that an embedded iframe player cannot match; embeds load heavy third-party scripts and cookies (hurts bundle/performance and privacy); embeds can be blocked or removed; production behaviour stays under our control.
* Provide **3 different short clips** (`public/media/videos/lesson-1.mp4` …); lessons point to them via `videoSrc` so that selecting another lesson visibly changes the content. Each lesson also has a poster (`public/media/posters/*.webp`, ≤80 KB). The first course's poster is the reference image (`assets/poster.webp`).
* Specs per clip: H.264 (+AAC only if there is audio), `faststart`, max 1280×720, 10–30 s, **≤3 MB**; total ≤ 8 MB. `preload="none"`, `playsInline`.
* Only royalty-free clips (e.g. Pexels, Pixabay, Coverr) or the owner's own recording. List source + licence in `docs/CREDITS.md`.
* Prepare a clip:
```bash
ffmpeg -i source.mp4 -t 20 -vf "scale=-2:720" -c:v libx264 -crf 30 -preset slow -an -movflags +faststart lesson-1.mp4
ffmpeg -i lesson-1.mp4 -ss 1 -frames:v 1 -vf "scale=1500:-2" poster-1.webp
```
* If an embed is ever unavoidable: `youtube-nocookie.com` behind a click-to-load facade (create the iframe only after the click) and the IFrame API with custom controls — with the trade-offs above. Not the default.

---
## 14. Responsive rules
Breakpoints: 640, 768, 1024 = Tailwind `sm`, `md`, `lg` (plus the 1304 reference and larger screens: content capped at 1304, band full-bleed). No fixed widths/heights except icons, avatars, circles and borders; use `max-width`, `min()`, `clamp()`, `aspect-ratio`, grid/flex. Wide mode hidden/disabled <1024. Touch targets ≥44×44 on mobile.
**Stress cases to test:** very long titles, 1 lesson vs 30+ lessons, long comment, an unbroken 60-character word, empty comments list, long breadcrumb. Titles/words wrap (`overflow-wrap:anywhere` where needed), never overflow.

## 15. Accessibility
One `<main>`, `<nav aria-label="Breadcrumb">`, `<section aria-labelledby>`, headings in order, real buttons/links/inputs, visible `:focus-visible`, `alt` on meaningful images (decorative → `alt=""`), labelled form fields, dialogs per §10, `aria-live` for added comments, reduced-motion respected. Contrast ≥4.5:1 where the design allows; where a reference colour fails, keep the reference colour and note it in `docs/DECISIONS.md`.

## 16. Performance, code quality, README
* Production build tested; report `next build` first-load JS per route (player route as small as possible). Dialogs lazy-loaded. Fonts via `next/font`. Images WebP, correct `sizes`, no layout shift (reserve space). No unused files/dependencies, no dead code, no `any`, no `console.log`, zero lint/type warnings.
* Components small and single-purpose; no magic numbers (tokens); no duplicated markup/styles; meaningful names.
* **README** sections: overview · stack · getting started · **folder structure and why** · **Server vs Client Components** · **images and performance** (bundle numbers, Lighthouse mobile + desktop) · responsive strategy (breakpoints, sticky/wide/fullscreen) · accessibility · design-reading decisions (§3.4, §20, the inferred tablet layout) · known limitations.

---
## 17. Implementation stages (one at a time — full prompts in `PHASES.md`)

The work is split into small stages. Each stage has its own prompt, scope, "do not" list, checks and commits in `PHASES.md`. **Run one stage per session; stop and report at its end.**

P0 Setup · P1 Types, data, helpers · P2 Desktop shell (band, grid, video block) · P3 Desktop icon row, Materials, Comments · P4 Desktop right column (progress, curriculum) · P5 Desktop calibration · P6 Mobile layout · P7 Mobile curriculum, tablet, stress tests · P8 Lesson selection and video · P9 Wide, Maximize, sticky, scrolling · P10 Progress animation and add comment · P11 Dialog base and PDF · P12 Exam · P13 Ask a Question and Leaderboard · P14 Courses page · P15 Quality and README

## 18. Verification
**Pixel-match loop (every UI step):** `scripts/visual-diff.mjs` (Playwright + pixelmatch + pngjs, dev deps). Desktop: viewport **1304×2123, deviceScaleFactor 2**, full-page screenshot of `/courses/starting-seo-as-your-home-based-business`; crop the reference to **x 14→2624, y 0→4246**; output diff image + mismatch % + 50 % overlay in `visual-diff/`. Fix until boxes and text baselines are within **±1 CSS px**; record calibrated values in `docs/DECISIONS.md`. Mobile: 430×932 ×2 against the stitched reference — compare **positions**, ignore §3.4.
**Device matrix:** 360, 390, 430, 768, 1024, 1304, 1440, 1920 — `document.documentElement.scrollWidth <= innerWidth`, no overlap, no clipped text. Test on a real phone (sticky, Maximize, touch targets).
**Functional checklist:** courses page (6 cards, status/progress/button label, card opens player) · select lesson → video changes, current lesson marked, label updates, locked rows inert · play/pause/seek · Wide (content below, no horizontal scroll, playback continues) · Maximize (desktop, Android, iOS; landscape even with auto-rotate off; exit works) · mobile sticky · icon scrolling not hidden under the sticky player · progress animates once, marker/fill/label all 63 · PDF opens/closes full screen · Exam opens/closes/saves/resumes/shows result · Ask draft restored in the same session, cleared on submit · Leaderboard message matches level, 6 rows, own row highlighted · add comment appears immediately, validated, announced · direct URL for every slug works, unknown slug → not-found · no console errors in dev or production.

---
## 19. Requirements traceability
| Requirement (task document) | Where |
|---|---|
| Courses page: ≥6 courses, image, name, description/instructor, status + progress, Start/Continue, navigates to player | §11, §12 |
| Player: exact match — layout, sizes, spacing, fonts, colours | §4–§7, §18 |
| Video, lesson data, curriculum, current lesson state | §4, §8, §13.5 |
| Course Materials, Course Progress, comments | §4, §6, §9.6–9.7, §13.5 |
| Popups and interactive states shown | §9, §10 |
| Mock data/JSON; select lesson; open popups; materials + progress; add comment | §12, §13.4–13.5 |
| Desktop + Tablet + Mobile; no horizontal scroll/overlap; varied text/lesson counts; mobile buttons | §7, §14 |
| Small reusable components, naming, folders, data separation, no duplication, no fixed dimensions | §13.2, §16 |
| README + Git commits expressing stages | §0.6, §16 |
| Production tested; compressed images; minimal bundle; semantic HTML, alt, contrast | §13.6, §15, §16 |
| Next.js App Router + TypeScript only; README explains folders, Server/Client, images, performance | §2, §13.3, §16 |

---
## 20. Decisions log (defaults; owner may override — copy into `docs/DECISIONS.md`)
| ID | Decision | Default |
|---|---|---|
| D-02 | Lesson data display | "Now playing" label beside the icon row (§8) — the only UI element added to the reference |
| D-03 | Styling and icons | Tailwind CSS v4 (tokens in `@theme`) and lucide-react (owner decision) |
| D-04 | Arabic font for the instructor message | GE SS Two Light if the owner supplies it, otherwise IBM Plex Sans Arabic 300/400 |
| D-07 | Lesson access | The five lessons listed in §12 are open, the others show the padlock. Three open rows (Introduction, Course Overview, Embedding PHP in HTML) therefore have no padlock, unlike the reference |
| D-08 | Tablet | Inferred layout (§7.2) |
| D-09 | Materials facts | Derived from course data (instructor, duration, language, enrolled, **lessons = total in curriculum**), so the first course shows its real lesson count instead of the sample "8" |
| D-10 | Comment author names | Realistic seed names instead of the designer's placeholder "Student Name Goes Here" |
| D-11 | Icon glyphs | lucide icons replace the reference's icons; size, stroke and colour are matched, glyph shapes may differ slightly |
| D-12 | Video | Self-hosted MP4 clips, no YouTube (§13.7) |

---
## Appendix A — Instructor messages (Arabic, shown in the Leaderboard popup)

Drafts to be reviewed by the owner (Egyptian dialect, Ali's friendly style, plain keyboard emoji). Pick the level from `studentPercentile`, then variant `percentile % 2` (index 0 or 1). `{percent}` = the percentile formatted with `Intl.NumberFormat('ar-EG')` (e.g. `٦٠`). The first course (percentile 60 → Level 4, variant 1) shows exactly the sentence in the reference.

| Level | Range | Tone |
|---|---|---|
| 1 | 0–19 | A friendly push ("شدّة من علي") — playful, never insulting |
| 2 | 20–39 | Encouraging, asks for more speed |
| 3 | 40–59 | Positive, challenges to go further |
| 4 | 60–79 | Proud, points at the leaderboard |
| 5 | 80–100 | Celebrates, asks to defend the top spot |

**Level 1** — (1) `فين المجهود يا صديقي؟ 😅 أنت لسه أحسن من {percent}% بس من باقي الطلبة.. مش ده مستواك. افتح الدرس الجاي دلوقتي وخلّينا نشوف حاجة تانية!` (2) `بصراحة؟ أداءك لسه محتاج شغل.. أنت أحسن من {percent}% من الطلبة بس. ابدأ بدرس واحد النهاردة ومتستناش المزاج 💪`
**Level 2** — (1) `بداية كويسة يا صديقي 🙂 أنت أحسن من {percent}% من باقي الطلبة.. لسه قدامك طريق، كمّل ومتقفش.` (2) `ماشي في السكة الصح بس محتاج شوية سرعة.. أداءك أفضل من {percent}% من الطلبة. ركّز في الدروس الجاية 👍`
**Level 3** — (1) `كده تمام 👍 أداءك أفضل من {percent}% من باقي الطلبة.. شوية تركيز كمان وهتدخل المنافسة.` (2) `في النص بالظبط يا صديقي.. أنت أحسن من {percent}% من الطلبة. الفرق بين النص والقمة هو الاستمرار 💪`
**Level 4** — (1) `عظيم يا صديقي.. أداءك في الكورس ده أفضل من {percent}% من باقي الطلبة.. كمّل عايز أشوف اسمك في الليدر بورد هنا 💪` (2) `برافو عليك 👏 أنت أحسن من {percent}% من الطلبة.. كمان خطوتين وتبقى في الصدارة.`
**Level 5** — (1) `أسطورة! 🔥 أنت أفضل من {percent}% من باقي الطلبة.. حافظ على مكانك ومتسيبش حد ياخده منك.` (2) `ده مستوى المحترفين يا صديقي 🏆 أداءك أفضل من {percent}% من الطلبة.. كمّل وخلّي اسمك أول اسم في الليدر بورد.`

Implementation: `src/data/level-messages.ts` exports `levelMessages: Record<1|2|3|4|5, [string, string]>`; `lib/level.ts` exports `getLevel(percentile)` and `getLevelMessage(percentile)`. Render the message inside an element with `lang="ar" dir="rtl"`.
