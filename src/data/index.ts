import type { Course } from "@/types/course";
import { startingSeoCourse } from "./courses/starting-seo";
import { enterpriseArchitectureCourse } from "./courses/enterprise-architecture";
import { rapidFigmaCourse } from "./courses/rapid-figma";
import { fullstackMasteryCourse } from "./courses/fullstack-mastery";
import { typescriptPatternsCourse } from "./courses/typescript-patterns";
import { webAccessibilityCourse } from "./courses/web-accessibility";

export const courses: Course[] = [
  startingSeoCourse,
  enterpriseArchitectureCourse,
  rapidFigmaCourse,
  fullstackMasteryCourse,
  typescriptPatternsCourse,
  webAccessibilityCourse,
];

export {
  startingSeoCourse,
  enterpriseArchitectureCourse,
  rapidFigmaCourse,
  fullstackMasteryCourse,
  typescriptPatternsCourse,
  webAccessibilityCourse,
};
