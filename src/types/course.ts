import type { StaticImageData } from "next/image";

export type LessonType = "video" | "pdf" | "exam";
export type CourseStatus = "not-started" | "in-progress" | "completed";

export interface Lesson {
  id: string;
  title: string;
  type: LessonType;
  locked: boolean;
  durationMinutes?: number;
  questionCount?: number;
  videoSrc?: string;
  pdfSrc?: string;
  examId?: string;
}

export interface CurriculumSection {
  id: string;
  title: string;
  weekRange: string;
  description: string;
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
  progressPercent: number;
  duration: string;
  language: string;
  enrolledCount: number;
  currentLessonId: string;
  sections: CurriculumSection[];
  comments: CourseComment[];
  leaderboard: LeaderboardEntry[];
  studentPercentile: number;
  exams: Exam[];
}
