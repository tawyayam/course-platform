import type { Course } from "@/types/course";
import coverImg from "@/assets/images/covers/course-6.webp";
import posterImg from "@/assets/images/poster.webp";
import avatar1 from "@/assets/images/avatar-1.webp";
import avatar2 from "@/assets/images/avatar-2.webp";
import avatar3 from "@/assets/images/avatar-3.webp";

export const webAccessibilityCourse: Course = {
  id: "introduction-to-web-accessibility",
  slug: "introduction-to-web-accessibility",
  title: "Introduction to Web Accessibility (a11y)",
  shortDescription:
    "Learn WCAG standards, ARIA attributes, and building universally accessible digital products.",
  instructor: "Marcy Sutton",
  cover: coverImg,
  poster: posterImg,
  progressPercent: 0, // Not started course
  duration: "2 weeks",
  language: "English",
  enrolledCount: 88,
  currentLessonId: "a11y-1-1",
  studentPercentile: 10,
  sections: [
    {
      id: "a11y-sec-1",
      title: "Core Principles of Accessibility",
      weekRange: "Week 1",
      description:
        "Understanding POUR principles: Perceivable, Operable, Understandable, and Robust interfaces.",
      lessons: [
        {
          id: "a11y-1-1",
          title: "Introduction to Accessibility & Assistive Tech",
          type: "video",
          locked: false,
          videoSrc: "/media/videos/lesson-placeholder.mp4",
        },
        {
          id: "a11y-1-2",
          title: "Semantic HTML vs ARIA Overuse",
          type: "video",
          locked: true,
          videoSrc: "/media/videos/lesson-placeholder.mp4",
        },
        {
          id: "a11y-1-3",
          title: "WCAG 2.2 Quick Reference Checklist",
          type: "pdf",
          locked: false,
          questionCount: 0,
          durationMinutes: 10,
          pdfSrc: "/media/course-overview.pdf",
        },
      ],
    },
    {
      id: "a11y-sec-2",
      title: "Interactive Widgets & Focus Management",
      weekRange: "Week 2",
      description:
        "Building accessible modals, tabs, dropdowns, and managing keyboard navigation.",
      lessons: [
        {
          id: "a11y-2-1",
          title: "Keyboard Navigation and Focus Visible Traps",
          type: "video",
          locked: true,
          videoSrc: "/media/videos/lesson-placeholder.mp4",
        },
        {
          id: "a11y-2-2",
          title: "Accessible Dialogs and Screen Reader Announcements",
          type: "video",
          locked: true,
          videoSrc: "/media/videos/lesson-placeholder.mp4",
        },
        {
          id: "a11y-2-3",
          title: "Accessibility Audit Assessment",
          type: "exam",
          locked: false,
          questionCount: 5,
          durationMinutes: 15,
          examId: "exam-a11y",
        },
      ],
    },
  ],
  comments: [
    {
      id: "comment-a11y-1",
      author: "Rob Dodson",
      dateISO: "2021-12-28T09:00:00.000Z",
      text: "Essential foundation for every frontend developer. Very clearly presented.",
      avatar: avatar1,
    },
    {
      id: "comment-a11y-2",
      author: "Alice Boxhall",
      dateISO: "2021-12-30T13:45:00.000Z",
      text: "Focus management is one of the hardest parts of a11y, and this course breaks it down easily.",
      avatar: avatar2,
    },
    {
      id: "comment-a11y-3",
      author: "Léonie Watson",
      dateISO: "2022-01-02T16:10:00.000Z",
      text: "Great emphasis on native HTML semantics before reaching for ARIA attributes.",
      avatar: avatar3,
    },
  ],
  leaderboard: [
    { id: "lead-a11y-1", name: "Alice Boxhall", points: 890, avatar: avatar2 },
    { id: "lead-a11y-2", name: "Rob Dodson", points: 860, avatar: avatar1 },
    { id: "lead-a11y-3", name: "Léonie Watson", points: 820, avatar: avatar3 },
    { id: "lead-a11y-4", name: "Heydon Pickering", points: 750, avatar: avatar1 },
    { id: "lead-a11y-5", name: "Sara Soueidan", points: 710, avatar: avatar2 },
    { id: "lead-a11y-6", name: "Alex Morgan", points: 0, avatar: avatar3, isCurrentUser: true },
  ],
  exams: [
    {
      id: "exam-a11y",
      title: "Web Accessibility Essentials Quiz",
      durationSeconds: 900,
      questions: [
        {
          id: "aq1",
          text: "What is the First Rule of ARIA use according to the W3C?",
          options: [
            { id: "ao1-1", label: "Use native HTML elements instead of ARIA if available" },
            { id: "ao1-2", label: "Always add aria-label to every button" },
            { id: "ao1-3", label: "Do not use role attributes" },
            { id: "ao1-4", label: "Use role='presentation' on all divs" },
          ],
          correctOptionId: "ao1-1",
        },
        {
          id: "aq2",
          text: "What minimum contrast ratio does WCAG AA require for normal text?",
          options: [
            { id: "ao2-1", label: "3:1" },
            { id: "ao2-2", label: "4.5:1" },
            { id: "ao2-3", label: "7:1" },
            { id: "ao2-4", label: "2:1" },
          ],
          correctOptionId: "ao2-2",
        },
        {
          id: "aq3",
          text: "Which attribute should be applied to decorative images that convey no meaning?",
          options: [
            { id: "ao3-1", label: "alt=''" },
            { id: "ao3-2", label: "aria-hidden='false'" },
            { id: "ao3-3", label: "title='decorative'" },
            { id: "ao3-4", label: "role='image'" },
          ],
          correctOptionId: "ao3-1",
        },
        {
          id: "aq4",
          text: "Which keyboard key is conventionally expected to close an open modal dialog?",
          options: [
            { id: "ao4-1", label: "Escape" },
            { id: "ao4-2", label: "Backspace" },
            { id: "ao4-3", label: "Tab" },
            { id: "ao4-4", label: "Enter" },
          ],
          correctOptionId: "ao4-1",
        },
        {
          id: "aq5",
          text: "What aria attribute communicates whether a disclosure widget or accordion is open?",
          options: [
            { id: "ao5-1", label: "aria-expanded" },
            { id: "ao5-2", label: "aria-haspopup" },
            { id: "ao5-3", label: "aria-selected" },
            { id: "ao5-4", label: "aria-pressed" },
          ],
          correctOptionId: "ao5-1",
        },
      ],
    },
  ],
};
