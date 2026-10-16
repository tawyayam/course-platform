import type { Course } from "@/types/course";
import coverImg from "@/assets/images/covers/course-3.webp";
import posterImg from "@/assets/images/poster.webp";
import avatar1 from "@/assets/images/avatar-1.webp";
import avatar2 from "@/assets/images/avatar-2.webp";
import avatar3 from "@/assets/images/avatar-3.webp";

export const rapidFigmaCourse: Course = {
  id: "rapid-figma-to-code",
  slug: "rapid-figma-to-code",
  title: "Rapid Figma to Production Code",
  shortDescription:
    "Convert modern UI/UX design mockups into semantic, responsive web applications in record time.",
  instructor: "Sarah Connor",
  cover: coverImg,
  poster: posterImg,
  progressPercent: 33,
  duration: "1 week",
  language: "English",
  enrolledCount: 120,
  currentLessonId: "figma-l1",
  studentPercentile: 35,
  sections: [
    {
      id: "figma-sec-1",
      title: "Design Token Extraction & Setup",
      weekRange: "Week 1",
      description:
        "Extracting design variables, component primitives, and establishing atomic CSS foundations.",
      lessons: [
        {
          id: "figma-l1",
          title: "Inspecting Figma Tokens and Auto Layout",
          type: "video",
          locked: false,
          videoSrc: "/media/videos/lesson-placeholder.mp4",
        },
        {
          id: "figma-l2",
          title: "CSS Variables and Theme Setup Guide",
          type: "pdf",
          locked: false,
          questionCount: 0,
          durationMinutes: 10,
          pdfSrc: "/media/course-overview.pdf",
        },
        {
          id: "figma-l3",
          title: "Layout Primitives Assessment",
          type: "exam",
          locked: false,
          questionCount: 5,
          durationMinutes: 15,
          examId: "exam-figma",
        },
      ],
    },
  ],
  comments: [
    {
      id: "comment-rf-1",
      author: "Leon S. Kennedy",
      dateISO: "2021-12-01T11:00:00.000Z",
      text: "Super concise and practical. The auto-layout translation tips were gold.",
      avatar: avatar1,
    },
    {
      id: "comment-rf-2",
      author: "Jill Valentine",
      dateISO: "2021-12-03T16:20:00.000Z",
      text: "The token extraction approach cut my development time in half.",
      avatar: avatar2,
    },
    {
      id: "comment-rf-3",
      author: "Claire Redfield",
      dateISO: "2021-12-05T08:45:00.000Z",
      text: "Straight to the point with zero fluff. Excellent mini-course.",
      avatar: avatar3,
    },
  ],
  leaderboard: [
    { id: "lead-rf-1", name: "Jill Valentine", points: 950, avatar: avatar2 },
    { id: "lead-rf-2", name: "Leon S. Kennedy", points: 910, avatar: avatar1 },
    {
      id: "lead-rf-3",
      name: "Alex Morgan",
      points: 820,
      avatar: avatar3,
      isCurrentUser: true,
    },
    { id: "lead-rf-4", name: "Claire Redfield", points: 790, avatar: avatar1 },
    { id: "lead-rf-5", name: "Chris Redfield", points: 720, avatar: avatar2 },
    { id: "lead-rf-6", name: "Ada Wong", points: 680, avatar: avatar3 },
  ],
  exams: [
    {
      id: "exam-figma",
      title: "Figma to Code Practical Test",
      durationSeconds: 900,
      questions: [
        {
          id: "fq1",
          text: "What CSS layout module directly mirrors Figma's Auto Layout functionality?",
          options: [
            { id: "fo1-1", label: "Flexbox" },
            { id: "fo1-2", label: "Float" },
            { id: "fo1-3", label: "Inline-block" },
            { id: "fo1-4", label: "Table" },
          ],
          correctOptionId: "fo1-1",
        },
        {
          id: "fq2",
          text: "Which Figma property corresponds to CSS border-radius?",
          options: [
            { id: "fo2-1", label: "Corner radius" },
            { id: "fo2-2", label: "Border curve" },
            { id: "fo2-3", label: "Smooth edge" },
            { id: "fo2-4", label: "Chamfer" },
          ],
          correctOptionId: "fo2-1",
        },
        {
          id: "fq3",
          text: "What is the recommended export format for complex vector icons from Figma?",
          options: [
            { id: "fo3-1", label: "JPEG" },
            { id: "fo3-2", label: "SVG" },
            { id: "fo3-3", label: "BMP" },
            { id: "fo3-4", label: "TIFF" },
          ],
          correctOptionId: "fo3-2",
        },
        {
          id: "fq4",
          text: "In modern CSS, which unit is best suited for responsive typography rooted in user preferences?",
          options: [
            { id: "fo4-1", label: "rem" },
            { id: "fo4-2", label: "pt" },
            { id: "fo4-3", label: "cm" },
            { id: "fo4-4", label: "in" },
          ],
          correctOptionId: "fo4-1",
        },
        {
          id: "fq5",
          text: "Which CSS property defines the gap between flex items in Auto Layout equivalent containers?",
          options: [
            { id: "fo5-1", label: "margin" },
            { id: "fo5-2", label: "gap" },
            { id: "fo5-3", label: "spacing" },
            { id: "fo5-4", label: "padding-between" },
          ],
          correctOptionId: "fo5-2",
        },
      ],
    },
  ],
};
