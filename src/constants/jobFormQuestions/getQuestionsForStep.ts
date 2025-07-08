import { jobFormQuestionsStep1 } from "./jobFormQuestionsStep1";
import { jobFormQuestionsStep2 } from "./jobFormQuestionsStep2";
import { jobFormQuestionsStep3 } from "./jobFormQuestionsStep3";
import { jobFormQuestionsStep4 } from "./jobFormQuestionsStep4";
import type { JobFormQuestion } from "@/types/questionTypes";

export function getQuestionsForStep(stepId: string): JobFormQuestion[] | undefined {
  switch (stepId) {
    case "step1":
      return jobFormQuestionsStep1;
    case "step2":
      return jobFormQuestionsStep2;
    case "step3":
      return jobFormQuestionsStep3;
    case "step4":
      return jobFormQuestionsStep4;
    default:
      return undefined;
  }
}