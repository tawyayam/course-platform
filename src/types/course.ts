import type { StaticImageData } from "next/image";

export type LessonType = "video" | "pdf" | "exam";
export type CourseStatus = "not-started" | "in-progress" | "completed";

export interface Lesson {
  id: string;
  title: string;
  type: LessonType;
  locked: boolean;
  durationMinutes?: number; // → "N MINUTES"
  questionCount?: number; // → "N QUESTION"
  videoSrc?: string;
  pdfSrc?: string;
  examId?: string;
}

export interface CurriculumSection {
  id: string;
  title: string; // mobile/tablet accordion heading
  weekRange: string; // desktop card heading
  description: string; // desktop card description
  lessons: Lesson[];
}

export interface CourseFact {
  id: "instructor" | "duration" | "lessons" | "enrolled" | "language";
  label: string;
  value: string;
}

export interface CourseComment {
  id: string;
  author: string;
  dateISO: string;
  text: string;
  avatar?: StaticImageData;
}

export interface LeaderboardEntry {
  id: string;
  name: string;
  points: number;
  avatar?: StaticImageData;
  isCurrentUser?: boolean;
}

export interface ExamQuestion {
  id: string;
  text: string;
  options: { id: string; label: string }[];
  correctOptionId: string;
}

export interface Exam {
  id: string;
  title: string;
  durationSeconds: number;
  questions: ExamQuestion[];
}

export interface Course {
  id: string;
  slug: string;
  title: string;
  shortDescription: string;
  instructor: string;
  cover: StaticImageData;
  poster: StaticImageData;
  progressPercent: number; // 0–100: single source of truth for status AND progress on both pages (seed 63)
  duration: string;
  language: string;
  enrolledCount: number; // e.g. "3 weeks", "English", 65
  currentLessonId: string;
  sections: CurriculumSection[];
  comments: CourseComment[];
  leaderboard: LeaderboardEntry[]; // ≥ 6 entries
  studentPercentile: number; // 60 for the SEO course
  exams: Exam[];
}
