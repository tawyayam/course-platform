# PHASES — build in small stages, never all at once

## How to use
1. Give the agent **one stage prompt at a time** (copy the block under the stage).
2. The agent works only inside that stage, runs the checks, makes small commits, then **stops and reports**.
3. You review the diff and the report (and run the app). Only then start the next stage.
4. If something is wrong, fix it in the same stage before moving on.

## Common header (prepend to every stage prompt)
> Read `SPEC.md` (the sections named in the stage) and follow §0. Execute **only this stage**. Do not touch files outside its scope, do not start the next stage, do not add dependencies other than those named. Make small Conventional Commits. At the end run the checks, then reply with: **Done · Commands + output · Visual diff (if UI) · Deviations/decisions · Open questions**. Then stop.

## Common checks
`npm run lint` · `npm run typecheck` · `npm run build` (all clean). For UI stages also the visual-diff loop (SPEC §18). Fix warnings, don't suppress them.

---
## P0 — Setup
**Read:** §0, §2, §5, §13.2.
**Do**
* `create-next-app`: TypeScript, ESLint, App Router, `src/` dir, **Tailwind (v4)**, import alias `@/*`. Pin exact versions.
* Add `lucide-react` (runtime). Dev: `prettier`, `prettier-plugin-tailwindcss`, `playwright`, `pixelmatch`, `pngjs`.
* TS `strict` + `noUncheckedIndexedAccess`; scripts `lint`, `typecheck`, `build`; `.gitignore` (+ `visual-diff/`); `git init`.
* `src/styles/globals.css` with `@import "tailwindcss"`, the `@theme` tokens and `@theme inline` font mapping (§5.3), base rules (box-sizing, `img{max-width:100%}`, `:focus-visible`).
* `app/layout.tsx`: `next/font` League Spartan + Poppins (variables `--font-spartan`, `--font-poppins`); `lang="en"`.
* Folder skeleton (§13.2), `lib/cx.ts`, copy `assets/*` to `src/assets/images` and `public/media`, `docs/DECISIONS.md` (seed with §20), `scripts/visual-diff.mjs` skeleton.
**Do not:** build any page UI.
**Commits:** `chore: init next app with strict typescript` · `chore: add tailwind, lucide and tooling` · `style: add design tokens` · `feat: load fonts with next/font` · `docs: seed decisions log`
**Done when:** checks pass; a blank page renders in League Spartan/Poppins; a test element using `bg-primary` shows `#41b69d`.

## P1 — Types, data, helpers (no UI)
**Read:** §4, §12, Appendix A.
**Do:** `types/course.ts`; the six courses in `data/courses/*` (§12); `data/index.ts`; `lib/courses.ts` (`getAllCourses`, `getCourseBySlug`, `getCourseStatus`, `getTotalLessons`, `buildCourseFacts`); `lib/format.ts`; `data/level-messages.ts` + `lib/level.ts`. The first course reproduces §4 text exactly.
**Do not:** create components or pages.
**Check:** a small script prints each course: slug, total lessons, progress, status, level. Slugs unique.
**Commits:** `feat(types): define course domain types` · `feat(data): add first course seed data` · `feat(data): add five varied courses` · `feat(lib): add course and level helpers`

## P2 — Desktop shell: band, grid, video block (static)
**Read:** §3.3–3.4, §5, §6 (header, video), §13.5.
**Do:** `app/courses/[slug]/page.tsx` + `generateStaticParams` + `not-found`; `PageBand` (breadcrumb with lucide `ChevronRight`, H1 from data); the ≥1024 grid with named areas and placeholders; `VideoPlayer` showing **poster + play button only** (no behaviour).
**Do not:** controls, icons row, materials, comments, curriculum, mobile styles.
**Check:** visual diff on the band and video box at 1304 (±1px).
**Commits:** `feat(player): add page route and page band` · `feat(player): add desktop grid shell` · `feat(player): add poster and play button`

## P3 — Desktop: icon row, Course Materials, Comments (static)
**Read:** §4, §6, §8, §8.1.
**Do:** `SectionIcons` (4 circles, visual only), `CourseMaterials` (two columns, from `buildCourseFacts`), `CommentItem` list, `CommentForm` (textarea + "Submit Review" button, visual).
**Do not:** click behaviour, scrolling, popups, state.
**Check:** visual diff for each block.
**Commits:** one per block + `style(...)` for each calibration pass.

## P4 — Desktop: right column (progress + curriculum)
**Read:** §4 curriculum, §6 right column, §8 lesson row, tags.
**Do:** "Topics for This Course"; `CourseProgress` (static fill/marker/label from `progressPercent`, clamped); three `CurriculumSection` cards with `LessonRow` (document icon, title, padlock or tags, wrap + stacked tags).
**Do not:** accordion, selection, animation.
**Check:** card 1 height 539, row pitch 55/81, tag layout.
**Commits:** `feat(progress): add static progress block` · `feat(curriculum): add section card and lesson rows` · `feat(curriculum): add tags and wrapping`

## P5 — Desktop calibration
**Read:** §18.
**Do:** run the full 1304×2123 diff; adjust sizes/weights/colours until every box and text baseline is within ±1px; record calibrated values in `docs/DECISIONS.md`.
**Do not:** add features.
**Commits:** `style(desktop): calibrate typography` · `style(desktop): calibrate spacing`

## P6 — Mobile layout
**Read:** §7.1, §14, §15.
**Do:** block layout below 1024; mobile header (two-line H1); video 3:2; icon row; Course Materials card with inside heading and one column; comments (60px avatars); textarea/button; sticky player CSS (<768). Touch targets ≥44.
**Do not:** accordion, tablet specifics.
**Check:** 430×932 positions vs the stitched reference; no horizontal scroll at 360/390/430.
**Commits:** `feat(layout): single-column layout below 1024` · `style(mobile): match reference spacing` · `feat(player): sticky video on mobile`

## P7 — Mobile curriculum, tablet, stress tests
**Read:** §7.2–7.3, §14.
**Do:** accordion (`aria-expanded`, first open, `Plus`/`Minus`) with the title/weekRange switch; progress in the desktop arrangement; tablet layout (768–1023); run all widths and the stress cases.
**Check:** screenshots at 360/430/768/1024/1304/1920; zero horizontal scroll; long titles wrap.
**Commits:** `feat(curriculum): accordion for small screens` · `style(tablet): infer layout` · `fix(overflow): handle long titles and words`

## P8 — Lesson selection and video
**Read:** §8, §9.1, §12 (lesson access), §13.4–13.5, §13.7.
**Do:** `PlayerShell` (reducer + context); lesson click → current lesson state (`aria-current`, accent), locked rows inert; `VideoPlayer` with `<video>` (`preload="none"`, poster per lesson), play/pause, seek, time; "Now playing" label; 3 self-hosted clips + posters (use the provided placeholder until the owner supplies clips).
**Do not:** Wide, Maximize, popups.
**Commits:** `feat(player): shell state and context` · `feat(curriculum): select lesson` · `feat(video): controls` · `feat(player): now playing label`

## P9 — Wide, Maximize, sticky, scrolling
**Read:** §9.2–9.5.
**Do:** `useFullscreen` + **Maximize** (Fullscreen API → orientation lock → pseudo-fullscreen with rotation fallback; exit button; Esc); **Wide** (≥1024, content below, no horizontal scroll, video stays mounted); verify sticky; Curriculum/Comments icons smooth-scroll with `scroll-margin-top`.
**Check:** desktop, Android, iOS (real device if possible).
**Commits:** `feat(player): fullscreen with rotation fallback` · `feat(player): wide mode` · `feat(player): section scrolling`

## P10 — Progress animation and add comment
**Read:** §9.7, §13.5.
**Do:** `useInView` + one-time fill animation (`prefers-reduced-motion` respected); comment form: validation, append, `aria-live`, initials avatar, date format.
**Commits:** `feat(progress): animate when scrolled into view` · `feat(comments): add demo comment`

## P11 — Dialog base and PDF
**Read:** §10, §13.3, §15.
**Do:** `Dialog` on native `<dialog>` (`showModal`, focus in/restore, Esc, scroll lock, `X` close ≥44px); `PdfDialog` (full screen, iframe/object, open-in-new-tab link); lazy via `next/dynamic`; wire the PDF row.
**Commits:** `feat(dialog): accessible base dialog` · `feat(pdf): fullscreen pdf popup`

## P12 — Exam
**Read:** §10 Exam, §13.5.
**Do:** `ExamDialog` full screen exactly per the reference, 5 questions, countdown timer, styled radio options, Next/Finish, result; persist answers/index/time in `localStorage` and resume; wire the exam rows.
**Commits:** `feat(exam): screen layout` · `feat(exam): timer and answers` · `feat(exam): persist and resume progress` · `feat(exam): result screen`

## P13 — Ask a Question and Leaderboard
**Read:** §9.5, §10, Appendix A.
**Do:** `AskQuestionDialog` (same styling as the comment form; `sessionStorage` draft restored on reopen, cleared on submit); `LeaderboardDialog` (title, Arabic RTL message by level with Arabic-Indic digits and the Arabic font loaded lazily, six rows, own row highlighted).
**Commits:** `feat(ask): popup with session draft` · `feat(leaderboard): popup layout` · `feat(leaderboard): level message and rows`

## P14 — Courses page
**Read:** §11, §12.
**Do:** `/courses` (band, grid 3/2/1), `CourseCard` (image, title, instructor/description, status tag, progress bar, Start/Continue/Review), links to the player, `loading` and `not-found`.
**Commits:** `feat(courses): add listing page and card` · `style(courses): align with player tokens` · `feat(courses): link cards to player`

## P15 — Quality and README
**Read:** §15, §16, §18.
**Do:** production build checks (Lighthouse mobile + desktop, first-load JS per route), image/`sizes` review, accessibility pass (keyboard-only through every popup), contrast notes, remove dead code/unused deps, write `README.md` (§16), `docs/CREDITS.md`.
**Commits:** `perf: …` · `a11y: …` · `docs: write readme`

---
## Review checklist after each stage (owner)
* Can I explain every new file? Is the scope respected (nothing from a later stage)?
* Checks green; no new warnings; dependencies unchanged (except where the stage names them).
* UI stages: overlay looks right at the stated widths; no horizontal scroll.
* Commits are small and named by step.
