import { courses } from "@/data";
import type { Course, CourseFact, CourseStatus } from "@/types/course";

/**
 * Returns all available courses.
 */
export function getAllCourses(): Course[] {
  return courses;
}

/**
 * Retrieves a course by its unique URL slug.
 */
export function getCourseBySlug(slug: string): Course | undefined {
  return courses.find((course) => course.slug === slug);
}

/**
 * Derives course completion status from its progress percentage.
 * 0 -> 'not-started', 1-99 -> 'in-progress', 100 -> 'completed'
 */
export function getCourseStatus(progressPercent: number): CourseStatus {
  if (progressPercent <= 0) return "not-started";
  if (progressPercent >= 100) return "completed";
  return "in-progress";
}

/**
 * Computes the total number of lessons across all curriculum sections.
 */
export function getTotalLessons(course: Course): number {
  return course.sections.reduce(
    (total, section) => total + section.lessons.length,
    0
  );
}

/**
 * Builds the facts list for the course materials card.
 * Total lessons is derived from the curriculum rather than hardcoded.
 */
export function buildCourseFacts(course: Course): CourseFact[] {
  const totalLessons = getTotalLessons(course);
  return [
    { id: "instructor", label: "Instructor:", value: course.instructor },
    { id: "duration", label: "Duration:", value: course.duration },
    { id: "lessons", label: "Lessons:", value: String(totalLessons) },
    {
      id: "enrolled",
      label: "Enrolled:",
      value: `${course.enrolledCount} students`,
    },
    { id: "language", label: "Language:", value: course.language },
  ];
}
