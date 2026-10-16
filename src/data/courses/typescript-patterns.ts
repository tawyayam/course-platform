import type { Course } from "@/types/course";
import coverImg from "@/assets/images/covers/course-5.webp";
import posterImg from "@/assets/images/poster.webp";
import avatar1 from "@/assets/images/avatar-1.webp";
import avatar2 from "@/assets/images/avatar-2.webp";
import avatar3 from "@/assets/images/avatar-3.webp";

export const typescriptPatternsCourse: Course = {
  id: "mastering-typescript-design-patterns",
  slug: "mastering-typescript-design-patterns",
  title: "Mastering TypeScript Design Patterns",
  shortDescription:
    "Explore object-oriented and functional architectural patterns implemented in strict TypeScript.",
  instructor: "Anders Hejlsberg",
  cover: coverImg,
  poster: posterImg,
  progressPercent: 100, // Completed course
  duration: "4 weeks",
  language: "English",
  enrolledCount: 280,
  currentLessonId: "ts-1-1",
  studentPercentile: 95,
  sections: [
    {
      id: "ts-sec-1",
      title: "Creational & Structural Patterns",
      weekRange: "Week 1-2",
      description:
        "Factories, builders, singletons, adapters, and decorators with strict type safety.",
      lessons: [
        {
          id: "ts-1-1",
          title: "Factory and Abstract Factory Patterns",
          type: "video",
          locked: false,
          videoSrc: "/media/videos/lesson-placeholder.mp4",
        },
        {
          id: "ts-1-2",
          title: "Builder Pattern with Fluent Interfaces",
          type: "video",
          locked: false,
          videoSrc: "/media/videos/lesson-placeholder.mp4",
        },
        {
          id: "ts-1-3",
          title: "Structural Patterns Reference Handbook",
          type: "pdf",
          locked: false,
          questionCount: 0,
          durationMinutes: 15,
          pdfSrc: "/media/course-overview.pdf",
        },
        {
          id: "ts-1-4",
          title: "Adapter and Facade Implementation",
          type: "video",
          locked: false,
          videoSrc: "/media/videos/lesson-placeholder.mp4",
        },
      ],
    },
    {
      id: "ts-sec-2",
      title: "Behavioral Patterns & Functional Composition",
      weekRange: "Week 3-4",
      description:
        "Observer, strategy, command, monads, and pipeline operators in modern TypeScript.",
      lessons: [
        {
          id: "ts-2-1",
          title: "Observer and Event Bus Patterns",
          type: "video",
          locked: false,
          videoSrc: "/media/videos/lesson-placeholder.mp4",
        },
        {
          id: "ts-2-2",
          title: "Strategy and State Patterns",
          type: "video",
          locked: false,
          videoSrc: "/media/videos/lesson-placeholder.mp4",
        },
        {
          id: "ts-2-3",
          title: "TypeScript Design Patterns Certification Exam",
          type: "exam",
          locked: false,
          questionCount: 5,
          durationMinutes: 20,
          examId: "exam-ts",
        },
      ],
    },
  ],
  comments: [
    {
      id: "comment-ts-1",
      author: "Grace Hopper",
      dateISO: "2021-12-20T10:00:00.000Z",
      text: "The cleanest explanation of type-safe builder patterns I have encountered.",
      avatar: avatar1,
    },
    {
      id: "comment-ts-2",
      author: "Linus Torvalds",
      dateISO: "2021-12-22T15:40:00.000Z",
      text: "Solid pragmatic code examples without unnecessary academic overhead.",
      avatar: avatar2,
    },
    {
      id: "comment-ts-3",
      author: "Margaret Hamilton",
      dateISO: "2021-12-25T11:20:00.000Z",
      text: "Completed the entire curriculum in 3 weeks. Highly recommend to all engineers.",
      avatar: avatar3,
    },
  ],
  leaderboard: [
    {
      id: "lead-ts-1",
      name: "Alex Morgan",
      points: 4800,
      avatar: avatar1,
      isCurrentUser: true,
    },
    { id: "lead-ts-2", name: "Grace Hopper", points: 4750, avatar: avatar2 },
    { id: "lead-ts-3", name: "Linus Torvalds", points: 4620, avatar: avatar3 },
    {
      id: "lead-ts-4",
      name: "Margaret Hamilton",
      points: 4500,
      avatar: avatar1,
    },
    { id: "lead-ts-5", name: "Barbara Liskov", points: 4410, avatar: avatar2 },
    { id: "lead-ts-6", name: "Donald Knuth", points: 4320, avatar: avatar3 },
  ],
  exams: [
    {
      id: "exam-ts",
      title: "TypeScript Patterns Assessment",
      durationSeconds: 1200,
      questions: [
        {
          id: "tsq1",
          text: "Which TypeScript utility type constructs a type with all properties of T set to optional?",
          options: [
            { id: "tso1-1", label: "Partial<T>" },
            { id: "tso1-2", label: "Required<T>" },
            { id: "tso1-3", label: "Readonly<T>" },
            { id: "tso1-4", label: "Record<K, T>" },
          ],
          correctOptionId: "tso1-1",
        },
        {
          id: "tsq2",
          text: "Which design pattern separates object construction from its representation?",
          options: [
            { id: "tso2-1", label: "Builder Pattern" },
            { id: "tso2-2", label: "Singleton Pattern" },
            { id: "tso2-3", label: "Adapter Pattern" },
            { id: "tso2-4", label: "Proxy Pattern" },
          ],
          correctOptionId: "tso2-1",
        },
        {
          id: "tsq3",
          text: "What does the 'unknown' type represent in TypeScript compared to 'any'?",
          options: [
            { id: "tso3-1", label: "A type-safe counterpart of any requiring narrowing before usage" },
            { id: "tso3-2", label: "An alias for undefined" },
            { id: "tso3-3", label: "A type that allows arbitrary method invocation without checks" },
            { id: "tso3-4", label: "The bottom type containing no values" },
          ],
          correctOptionId: "tso3-1",
        },
        {
          id: "tsq4",
          text: "Which pattern defines a family of algorithms and encapsulates each one behind a common interface?",
          options: [
            { id: "tso4-1", label: "Strategy Pattern" },
            { id: "tso4-2", label: "Decorator Pattern" },
            { id: "tso4-3", label: "Observer Pattern" },
            { id: "tso4-4", label: "Facade Pattern" },
          ],
          correctOptionId: "tso4-1",
        },
        {
          id: "tsq5",
          text: "What TypeScript keyword is used to assert that a value will never occur?",
          options: [
            { id: "tso5-1", label: "never" },
            { id: "tso5-2", label: "void" },
            { id: "tso5-3", label: "null" },
            { id: "tso5-4", label: "undefined" },
          ],
          correctOptionId: "tso5-1",
        },
      ],
    },
  ],
};
