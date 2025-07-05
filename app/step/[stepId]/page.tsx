"use client";

import { useParams } from "next/navigation";
import { useFormContext } from "../../../context/FormContext";
import { questions } from "../../../lib/questions";
import { errorMessages } from "../../../lib/errorMessages";
import { validators } from "../../../lib/validators";
import { Form } from "../../../components/ui/form";
import { Input } from "../../../components/ui/input";
import { Textarea } from "../../../components/ui/textarea";
import { Button } from "../../../components/ui/button";
import React, { useState } from "react";

const stepQuestionMap: Record<string, string[]> = {
  step1: ["q1", "q2", "q3"],
  step2: ["q4", "q5", "q6"],
  step3: ["q7", "q8", "q9", "q10"],
  step4: ["q11", "q12"],
};

export default function StepPage() {
  const params = useParams();
  const stepId = params?.stepId as string;
  const { values, setValue } = useFormContext();

  // Find which questions to show for this step
  const questionIds = stepQuestionMap[stepId] || [];
  const stepQuestions = questions.filter(q => questionIds.includes(q.id));

  // Validation state
  const [touched, setTouched] = useState({});
  const [errors, setErrors] = useState({} as Record<string, string>);

  const handleChange = (id: string, value: string) => {
    setValue(id.toUpperCase() as any, value);
    // Validate on change if already touched
    if (touched[id]) {
      const error = validators[id]?.(value);
      setErrors(prev => ({
        ...prev,
        [id]: error ? errorMessages[id as keyof typeof errorMessages] : "",
      }));
    }
  };

  const handleBlur = (id: string, value: string) => {
    setTouched(prev => ({ ...prev, [id]: true }));
    const error = validators[id]?.(value);
    setErrors(prev => ({
      ...prev,
      [id]: error ? errorMessages[id as keyof typeof errorMessages] : "",
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Validate all fields on submit
    let hasError = false;
    const newTouched: Record<string, boolean> = {};
    const newErrors: Record<string, string> = {};
    for (const q of stepQuestions) {
      newTouched[q.id] = true;
      const value = values[q.id.toUpperCase() as keyof typeof values];
      const error = validators[q.id]?.(value);
      if (error) {
        hasError = true;
        newErrors[q.id] = errorMessages[q.id as keyof typeof errorMessages];
      } else {
        newErrors[q.id] = "";
      }
    }
    setTouched(newTouched);
    setErrors(newErrors);
    if (!hasError) {
      // Navigation or next step logic here
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-8 max-w-xl mx-auto mt-8">
      {stepQuestions.map(q => {
        const value = values[q.id.toUpperCase() as keyof typeof values] || "";
        const isTextarea =
          q.id === "q3" ||
          q.id === "q4" ||
          q.id === "q5" ||
          q.id === "q6" ||
          q.id === "q10" ||
          q.id === "q11" ||
          q.id === "q12";
        return (
          <div key={q.id}>
            <label htmlFor={q.id} className="block font-medium mb-1">
              {q.label} <span className="text-red-500">*</span>
            </label>
            {isTextarea ? (
              <Textarea
                id={q.id}
                value={value}
                onChange={e => handleChange(q.id, e.target.value)}
                onBlur={e => handleBlur(q.id, e.target.value)}
                placeholder={q.placeholder}
                required
                rows={3}
              />
            ) : (
              <Input
                id={q.id}
                value={value}
                onChange={e => handleChange(q.id, e.target.value)}
                onBlur={e => handleBlur(q.id, e.target.value)}
                placeholder={q.placeholder}
                required
              />
            )}
            {q.supplement && (
              <div className="text-sm text-muted-foreground mt-1">{q.supplement}</div>
            )}
            {errors[q.id] && (
              <div className="text-sm text-red-500 mt-1">{errors[q.id]}</div>
            )}
          </div>
        );
      })}
      <Button type="submit" className="w-full mt-6">
        次へ
      </Button>
    </form>
  );
}