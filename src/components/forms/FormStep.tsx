"use client";

import React from "react";
import { Form } from "@/components/ui/form";
import QuestionItem from "./QuestionItem";

interface Question {
  id: string;
  label: string;
  placeholder: string;
  supplement?: string;
  // Add other fields as needed (type, options, etc.)
}

interface FormStepProps {
  questions: Question[];
  stepId: string;
}

export default function FormStep({ questions, stepId }: FormStepProps) {
  return (
    <Form className="space-y-8">
      {questions.map((q) => (
        <div key={q.id} className="space-y-2">
          <QuestionItem question={q} />
        </div>
      ))}
    </Form>
  );
}