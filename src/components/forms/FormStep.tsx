"use client";

import React from "react";
import { Form } from "@/components/ui/form";
import QuestionItem from "./QuestionItem";
import type { JobFormQuestion } from "@/types/questionTypes";
import { useForm, FormProvider } from "react-hook-form";
import { getQuestionsForStep } from "@/constants/jobFormQuestions/getQuestionsForStep";

interface FormStepProps {
  stepId: string;
}

export default function FormStep({ stepId }: FormStepProps) {
  const methods = useForm();
  console.log("FormProvider methods:", methods);

  // Load questions for the current step
  const questions: JobFormQuestion[] | undefined = getQuestionsForStep(stepId);

  console.log("FormStep rendering questions:", questions);

  return (
    <FormProvider {...methods}>
      <Form className="space-y-8 border border-red-500">
        <div className="border border-blue-500">
          {(questions ?? []).length === 0 ? (
            <p className="text-muted-foreground text-sm">質問がありません</p>
          ) : (
            (questions ?? []).map((q) => {
              try {
                return (
                  <div key={q.id} className="space-y-2">
                    <QuestionItem question={q} />
                  </div>
                );
              } catch (err) {
                console.error("Error rendering question", q, err);
                return (
                  <p key={q.id} className="text-red-500 text-sm">
                    この質問の表示中にエラーが発生しました: {q.id}
                  </p>
                );
              }
            })
          )}
        </div>
      </Form>
    </FormProvider>
  );
}

interface QuestionItemProps {
  question: JobFormQuestion;
}