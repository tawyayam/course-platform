import type { Course, CurriculumSection } from "@/types/course";
import coverImg from "@/assets/images/covers/course-4.webp";
import posterImg from "@/assets/images/poster.webp";
import avatar1 from "@/assets/images/avatar-1.webp";
import avatar2 from "@/assets/images/avatar-2.webp";
import avatar3 from "@/assets/images/avatar-3.webp";

const sections: CurriculumSection[] = [
  {
    id: "fs-sec-1",
    title: "HTML5 & Modern CSS Systems",
    weekRange: "Week 1-3",
    description: "Deep foundation in semantic structures, flexbox, CSS grid, and responsive styling tokens.",
    lessons: [
      { id: "fs-1-1", title: "Semantic HTML Elements and Accessibility", type: "video", locked: false, videoSrc: "/media/videos/lesson-placeholder.mp4" },
      { id: "fs-1-2", title: "CSS Box Model & Specificity", type: "video", locked: true, videoSrc: "/media/videos/lesson-placeholder.mp4" },
      { id: "fs-1-3", title: "Flexbox Mastery Guide", type: "pdf", locked: false, questionCount: 0, durationMinutes: 15, pdfSrc: "/media/course-overview.pdf" },
      { id: "fs-1-4", title: "CSS Grid Advanced Techniques", type: "video", locked: true, videoSrc: "/media/videos/lesson-placeholder.mp4" },
      { id: "fs-1-5", title: "Responsive Design & Container Queries", type: "video", locked: true, videoSrc: "/media/videos/lesson-placeholder.mp4" },
      { id: "fs-1-6", title: "Modern CSS Architecture & BEM", type: "video", locked: true, videoSrc: "/media/videos/lesson-placeholder.mp4" },
      { id: "fs-1-7", title: "Foundations Quiz", type: "exam", locked: false, questionCount: 5, durationMinutes: 15, examId: "exam-fs" },
    ],
  },
  {
    id: "fs-sec-2",
    title: "Modern JavaScript & Async Programming",
    weekRange: "Week 4-6",
    description: "Core language runtime, closures, event loop, Promises, async/await, and modern ESNext features.",
    lessons: [
      { id: "fs-2-1", title: "Execution Contexts & Closures", type: "video", locked: true, videoSrc: "/media/videos/lesson-placeholder.mp4" },
      { id: "fs-2-2", title: "Prototypes & Inheritance", type: "video", locked: true, videoSrc: "/media/videos/lesson-placeholder.mp4" },
      { id: "fs-2-3", title: "Event Loop and Microtasks", type: "video", locked: true, videoSrc: "/media/videos/lesson-placeholder.mp4" },
      { id: "fs-2-4", title: "Promises & Async Patterns", type: "video", locked: true, videoSrc: "/media/videos/lesson-placeholder.mp4" },
      { id: "fs-2-5", title: "ES Modules and Bundling", type: "video", locked: true, videoSrc: "/media/videos/lesson-placeholder.mp4" },
      { id: "fs-2-6", title: "Web APIs & Fetch", type: "video", locked: true, videoSrc: "/media/videos/lesson-placeholder.mp4" },
      { id: "fs-2-7", title: "Async JavaScript Assessment", type: "exam", locked: false, questionCount: 5, durationMinutes: 20, examId: "exam-fs" },
    ],
  },
  {
    id: "fs-sec-3",
    title: "React Fundamentals & State Architecture",
    weekRange: "Week 7-9",
    description: "Virtual DOM, JSX compilation, hooks ecosystem, reconciliation, and reactive UI patterns.",
    lessons: [
      { id: "fs-3-1", title: "React Architecture & Component Lifecycle", type: "video", locked: true, videoSrc: "/media/videos/lesson-placeholder.mp4" },
      { id: "fs-3-2", title: "useState and useReducer Deep Dive", type: "video", locked: true, videoSrc: "/media/videos/lesson-placeholder.mp4" },
      { id: "fs-3-3", title: "useEffect Rules and Pitfalls", type: "video", locked: true, videoSrc: "/media/videos/lesson-placeholder.mp4" },
      { id: "fs-3-4", title: "Context API and State Colocation", type: "video", locked: true, videoSrc: "/media/videos/lesson-placeholder.mp4" },
      { id: "fs-3-5", title: "Custom Hooks Architecture", type: "video", locked: true, videoSrc: "/media/videos/lesson-placeholder.mp4" },
      { id: "fs-3-6", title: "Memoization & Performance Optimization", type: "video", locked: true, videoSrc: "/media/videos/lesson-placeholder.mp4" },
      { id: "fs-3-7", title: "React Component Patterns Cheatsheet", type: "pdf", locked: true, questionCount: 0, durationMinutes: 20, pdfSrc: "/media/course-overview.pdf" },
    ],
  },
  {
    id: "fs-sec-4",
    title: "Server-Side Engineering with Node.js",
    weekRange: "Week 10-12",
    description: "RESTful architecture, Node.js streams, database persistence, and authentication flows.",
    lessons: [
      { id: "fs-4-1", title: "Node.js Core Modules and Event Emitter", type: "video", locked: true, videoSrc: "/media/videos/lesson-placeholder.mp4" },
      { id: "fs-4-2", title: "HTTP Servers and Middleware Pipeline", type: "video", locked: true, videoSrc: "/media/videos/lesson-placeholder.mp4" },
      { id: "fs-4-3", title: "PostgreSQL Schema Design and Relations", type: "video", locked: true, videoSrc: "/media/videos/lesson-placeholder.mp4" },
      { id: "fs-4-4", title: "ORM & Query Optimization", type: "video", locked: true, videoSrc: "/media/videos/lesson-placeholder.mp4" },
      { id: "fs-4-5", title: "JWT & Session Security", type: "video", locked: true, videoSrc: "/media/videos/lesson-placeholder.mp4" },
      { id: "fs-4-6", title: "Backend API Benchmark Exam", type: "exam", locked: false, questionCount: 5, durationMinutes: 25, examId: "exam-fs" },
    ],
  },
  {
    id: "fs-sec-5",
    title: "Production Deployment & Next.js Ecosystem",
    weekRange: "Week 13-16",
    description: "Server Components, caching strategies, CI/CD pipelines, containerization, and observability.",
    lessons: [
      { id: "fs-5-1", title: "Next.js App Router Architecture", type: "video", locked: true, videoSrc: "/media/videos/lesson-placeholder.mp4" },
      { id: "fs-5-2", title: "Server and Client Component Composition", type: "video", locked: true, videoSrc: "/media/videos/lesson-placeholder.mp4" },
      { id: "fs-5-3", title: "Data Fetching & Static Site Generation", type: "video", locked: true, videoSrc: "/media/videos/lesson-placeholder.mp4" },
      { id: "fs-5-4", title: "Docker Containerization for Web Apps", type: "video", locked: true, videoSrc: "/media/videos/lesson-placeholder.mp4" },
      { id: "fs-5-5", title: "CI/CD Pipeline with Automated Testing", type: "video", locked: true, videoSrc: "/media/videos/lesson-placeholder.mp4" },
      { id: "fs-5-6", title: "Full Stack Capstone Review", type: "video", locked: true, videoSrc: "/media/videos/lesson-placeholder.mp4" },
    ],
  },
];

export const fullstackMasteryCourse: Course = {
  id: "full-stack-web-development-mastery",
  slug: "full-stack-web-development-mastery",
  title: "Full Stack Web Development Mastery",
  shortDescription:
    "From fundamentals to production deployment: complete guide to modern web engineering.",
  instructor: "Edward Norton",
  cover: coverImg,
  poster: posterImg,
  progressPercent: 20,
  duration: "16 weeks",
  language: "English",
  enrolledCount: 450,
  currentLessonId: "fs-1-1",
  studentPercentile: 25,
  sections,
  comments: [
    {
      id: "comment-fs-1",
      author: "Maya Lin",
      dateISO: "2021-12-10T14:00:00.000Z",
      text: "Comprehensive curriculum. The sections on React hooks and Node.js middleware were particularly well structured.",
      avatar: avatar1,
    },
    {
      id: "comment-fs-2",
      author: "Samuel Vance",
      dateISO: "2021-12-14T09:30:00.000Z",
      text: "The sheer volume of practical exercises makes this course stand out.",
      avatar: avatar2,
    },
    {
      id: "comment-fs-3",
      author: "Zainab Rashid",
      dateISO: "2021-12-18T17:15:00.000Z",
      text: "Great pace and clear explanations from beginner to advanced topics.",
      avatar: avatar3,
    },
  ],
  leaderboard: [
    { id: "lead-fs-1", name: "Maya Lin", points: 4200, avatar: avatar1 },
    { id: "lead-fs-2", name: "Samuel Vance", points: 4050, avatar: avatar2 },
    { id: "lead-fs-3", name: "Zainab Rashid", points: 3890, avatar: avatar3 },
    { id: "lead-fs-4", name: "Alex Morgan", points: 2100, avatar: avatar1, isCurrentUser: true },
    { id: "lead-fs-5", name: "Kenneth Cole", points: 1980, avatar: avatar2 },
    { id: "lead-fs-6", name: "Nadia Belov", points: 1850, avatar: avatar3 },
  ],
  exams: [
    {
      id: "exam-fs",
      title: "Full Stack Engineering Assessment",
      durationSeconds: 1200,
      questions: [
        {
          id: "fsq1",
          text: "Which HTTP method is idempotent and used to replace an entire resource representation?",
          options: [
            { id: "fso1-1", label: "POST" },
            { id: "fso1-2", label: "PUT" },
            { id: "fso1-3", label: "PATCH" },
            { id: "fso1-4", label: "CONNECT" },
          ],
          correctOptionId: "fso1-2",
        },
        {
          id: "fsq2",
          text: "What data structure in the V8 engine handles microtask callbacks such as Promise.then?",
          options: [
            { id: "fso2-1", label: "Microtask Queue" },
            { id: "fso2-2", label: "Task Queue" },
            { id: "fso2-3", label: "Call Stack" },
            { id: "fso2-4", label: "Heap Memory" },
          ],
          correctOptionId: "fso2-1",
        },
        {
          id: "fsq3",
          text: "Which React hook is designed for synchronizing state with external systems?",
          options: [
            { id: "fso3-1", label: "useState" },
            { id: "fso3-2", label: "useMemo" },
            { id: "fso3-3", label: "useEffect" },
            { id: "fso3-4", label: "useRef" },
          ],
          correctOptionId: "fso3-3",
        },
        {
          id: "fsq4",
          text: "What is the primary benefit of React Server Components (RSC)?",
          options: [
            { id: "fso4-1", label: "Zero bundle size added to client JavaScript" },
            { id: "fso4-2", label: "Support for browser click handlers" },
            { id: "fso4-3", label: "Direct access to localStorage during SSR" },
            { id: "fso4-4", label: "Automatic CSS-in-JS compilation" },
          ],
          correctOptionId: "fso4-1",
        },
        {
          id: "fsq5",
          text: "In SQL, which clause is used to filter aggregated group results?",
          options: [
            { id: "fso5-1", label: "WHERE" },
            { id: "fso5-2", label: "HAVING" },
            { id: "fso5-3", label: "GROUP BY" },
            { id: "fso5-4", label: "ORDER BY" },
          ],
          correctOptionId: "fso5-2",
        },
      ],
    },
  ],
};
