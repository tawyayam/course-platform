import type { Course } from "@/types/course";
import coverImg from "@/assets/images/covers/course-1.webp";
import posterImg from "@/assets/images/poster.webp";
import avatar1 from "@/assets/images/avatar-1.webp";
import avatar2 from "@/assets/images/avatar-2.webp";
import avatar3 from "@/assets/images/avatar-3.webp";

export const startingSeoCourse: Course = {
  id: "starting-seo-as-your-home-based-business",
  slug: "starting-seo-as-your-home-based-business",
  title: "Starting SEO as your Home Based Business",
  shortDescription:
    "Advanced story telling techniques for writers: Personas, Characters & Plots",
  instructor: "Edward Norton",
  cover: coverImg,
  poster: posterImg,
  progressPercent: 63,
  duration: "3 weeks",
  language: "English",
  enrolledCount: 65,
  currentLessonId: "lesson-1-1",
  studentPercentile: 60,
  sections: [
    {
      id: "section-1",
      title: "Course Introduction",
      weekRange: "Week 1-4",
      description:
        "Advanced story telling techniques for writers: Personas, Characters & Plots",
      lessons: [
        {
          id: "lesson-1-1",
          title: "Introduction",
          type: "video",
          locked: false,
          videoSrc: "/media/videos/lesson-placeholder.mp4",
        },
        {
          id: "lesson-1-2",
          title: "Course Overview",
          type: "video",
          locked: false,
          videoSrc: "/media/videos/lesson-placeholder.mp4",
        },
        {
          id: "lesson-1-3",
          title: "Course Overview",
          type: "pdf",
          locked: false,
          questionCount: 0,
          durationMinutes: 10,
          pdfSrc: "/media/course-overview.pdf",
        },
        {
          id: "lesson-1-4",
          title: "Course Exercise / Reference Files",
          type: "video",
          locked: true,
          videoSrc: "/media/videos/lesson-placeholder.mp4",
        },
        {
          id: "lesson-1-5",
          title: "Code Editor Installation (Optional if you have one)",
          type: "video",
          locked: true,
          videoSrc: "/media/videos/lesson-placeholder.mp4",
        },
        {
          id: "lesson-1-6",
          title: "Embedding PHP in HTML",
          type: "exam",
          locked: false,
          questionCount: 5,
          durationMinutes: 15,
          examId: "exam-seo",
        },
      ],
    },
    {
      id: "section-2",
      title: "JavaScript Language Basics",
      weekRange: "Week 5-8",
      description:
        "Advanced story telling techniques for writers: Personas, Characters & Plots",
      lessons: [
        {
          id: "lesson-2-1",
          title: "Defining Functions",
          type: "video",
          locked: true,
          videoSrc: "/media/videos/lesson-placeholder.mp4",
        },
        {
          id: "lesson-2-2",
          title: "Function Parameters",
          type: "video",
          locked: true,
          videoSrc: "/media/videos/lesson-placeholder.mp4",
        },
        {
          id: "lesson-2-3",
          title: "Return Values From Functions",
          type: "exam",
          locked: false,
          questionCount: 2,
          durationMinutes: 15,
          examId: "exam-seo",
        },
        {
          id: "lesson-2-4",
          title: "Global Variable and Scope",
          type: "video",
          locked: true,
          videoSrc: "/media/videos/lesson-placeholder.mp4",
        },
        {
          id: "lesson-2-5",
          title: "Newer Way of creating a Constant",
          type: "video",
          locked: true,
          videoSrc: "/media/videos/lesson-placeholder.mp4",
        },
        {
          id: "lesson-2-6",
          title: "Constants",
          type: "video",
          locked: true,
          videoSrc: "/media/videos/lesson-placeholder.mp4",
        },
      ],
    },
    {
      id: "section-3",
      title: "Components & Databinding",
      weekRange: "Week 5-8",
      description:
        "Advanced story telling techniques for writers: Personas, Characters & Plots",
      lessons: [
        {
          id: "lesson-3-1",
          title: "Defining Functions",
          type: "video",
          locked: true,
          videoSrc: "/media/videos/lesson-placeholder.mp4",
        },
        {
          id: "lesson-3-2",
          title: "Function Parameters",
          type: "video",
          locked: true,
          videoSrc: "/media/videos/lesson-placeholder.mp4",
        },
        {
          id: "lesson-3-3",
          title: "Return Values From Functions",
          type: "exam",
          locked: false,
          questionCount: 2,
          durationMinutes: 15,
          examId: "exam-seo",
        },
        {
          id: "lesson-3-4",
          title: "Global Variable and Scope",
          type: "video",
          locked: true,
          videoSrc: "/media/videos/lesson-placeholder.mp4",
        },
        {
          id: "lesson-3-5",
          title: "Newer Way of creating a Constant",
          type: "video",
          locked: true,
          videoSrc: "/media/videos/lesson-placeholder.mp4",
        },
        {
          id: "lesson-3-6",
          title: "Constants",
          type: "video",
          locked: true,
          videoSrc: "/media/videos/lesson-placeholder.mp4",
        },
      ],
    },
  ],
  comments: [
    {
      id: "comment-1",
      author: "Sarah Jenkins",
      dateISO: "2021-10-10T12:00:00.000Z",
      text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      avatar: avatar1,
    },
    {
      id: "comment-2",
      author: "Michael Chen",
      dateISO: "2021-10-15T12:00:00.000Z",
      text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      avatar: avatar2,
    },
    {
      id: "comment-3",
      author: "Elena Rostova",
      dateISO: "2021-10-19T12:00:00.000Z",
      text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      avatar: avatar3,
    },
  ],
  leaderboard: [
    {
      id: "lead-1",
      name: "Amira Hassan",
      points: 2850,
      avatar: avatar1,
    },
    {
      id: "lead-2",
      name: "David Miller",
      points: 2720,
      avatar: avatar2,
    },
    {
      id: "lead-3",
      name: "Fatima Al-Sayed",
      points: 2610,
      avatar: avatar3,
    },
    {
      id: "lead-4",
      name: "Alex Morgan",
      points: 2450,
      avatar: avatar1,
      isCurrentUser: true,
    },
    {
      id: "lead-5",
      name: "Omar Farooq",
      points: 2340,
      avatar: avatar2,
    },
    {
      id: "lead-6",
      name: "Sophia Taylor",
      points: 2190,
      avatar: avatar3,
    },
  ],
  exams: [
    {
      id: "exam-seo",
      title: "Midterm Assessment",
      durationSeconds: 572, // 09:32 per popup_exam_2x.png
      questions: [
        {
          id: "q1",
          text: "Among the following status of India, which one has the oldest rock formations in the country?",
          options: [
            { id: "opt-1-1", label: "Asam" },
            { id: "opt-1-2", label: "Bahar" },
            { id: "opt-1-3", label: "Kamaltake" },
            { id: "opt-1-4", label: "Utter Pardesh" },
          ],
          correctOptionId: "opt-1-3",
        },
        {
          id: "q2",
          text: "Which HTML element is used to specify a footer for a document or section?",
          options: [
            { id: "opt-2-1", label: "<bottom>" },
            { id: "opt-2-2", label: "<footer>" },
            { id: "opt-2-3", label: "<section>" },
            { id: "opt-2-4", label: "<foot>" },
          ],
          correctOptionId: "opt-2-2",
        },
        {
          id: "q3",
          text: "Which CSS property controls the text size?",
          options: [
            { id: "opt-3-1", label: "font-style" },
            { id: "opt-3-2", label: "text-size" },
            { id: "opt-3-3", label: "font-size" },
            { id: "opt-3-4", label: "text-style" },
          ],
          correctOptionId: "opt-3-3",
        },
        {
          id: "q4",
          text: "What does SEO stand for in digital marketing?",
          options: [
            { id: "opt-4-1", label: "Search Engine Optimization" },
            { id: "opt-4-2", label: "Site Efficiency Operation" },
            { id: "opt-4-3", label: "System Engine Output" },
            { id: "opt-4-4", label: "Search Entity Operator" },
          ],
          correctOptionId: "opt-4-1",
        },
        {
          id: "q5",
          text: "Which HTTP status code represents a successful request?",
          options: [
            { id: "opt-5-1", label: "404" },
            { id: "opt-5-2", label: "500" },
            { id: "opt-5-3", label: "301" },
            { id: "opt-5-4", label: "200" },
          ],
          correctOptionId: "opt-5-4",
        },
      ],
    },
  ],
};
