"use client";

import React from "react";
import { jobFormQuestionsStep1 } from "@/constants/jobFormQuestions/jobFormQuestionsStep1";
import FormStep from "@/components/forms/FormStep";
import type { JobFormQuestion } from "@/types/questionTypes";

interface FormStepProps {
  questions: JobFormQuestion[];
  stepId: string;
}

export default function Step1Page() {
  // Q1–Q3 for Step1
  const stepQuestions = jobFormQuestionsStep1.slice(0, 3);

  return (
    <main className="max-w-2xl mx-auto p-6">
      <header className="mb-8">
        <h1 className="text-xl font-bold">求人票作成フォーム</h1>
        <div className="text-sm text-muted-foreground mt-1">Step1: ポジションの基本情報</div>
      </header>
      <FormStep stepId="step1" />
    </main>
  );
}