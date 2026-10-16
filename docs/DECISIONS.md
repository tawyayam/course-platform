# Decisions Log

This file tracks architectural, design, and calibration decisions for the course platform.
Initial decisions seeded from `docs/spec/SPEC.md §20`.

| ID | Decision | Default / Resolution | Notes |
|---|---|---|---|
| D-02 | Lesson data display | "Now playing" label beside the icon row (§8) | The only UI element added to the reference. |
| D-03 | Styling and icons | Tailwind CSS v4 (tokens in `@theme`) and lucide-react | Specified in §2 and §5.3–5.4. |
| D-04 | Arabic font for the instructor message | GE SS Two Light if supplied, otherwise IBM Plex Sans Arabic 300/400 | Used for Leaderboard popup Arabic message. |
| D-07 | Lesson access | Open lessons: Introduction, Course Overview (video), Course Overview (PDF), Embedding PHP in HTML (exam), Return Values From Functions (exam) | Other lessons display padlock. Three open rows have no padlock, unlike static reference. |
| D-08 | Tablet layout | Inferred responsive layout (§7.2) | Seamless transition between mobile (<1024) and desktop (≥1024). |
| D-09 | Materials facts | Derived from course data (`lessons = total in curriculum`) | Seed course displays real lesson count instead of placeholder "8". |
| D-10 | Comment author names | Realistic seed names | Replaces designer placeholder "Student Name Goes Here". |
| D-11 | Icon glyphs | Lucide icons replace reference icons | Matched size, stroke, and color; glyph shapes may differ slightly. |
| D-12 | Video | Self-hosted MP4 clips, no third-party embeds | Uses native `<video>` element with custom controls (§13.7). |
