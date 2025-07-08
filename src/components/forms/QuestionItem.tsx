"use client";

import React from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { FormDescription, FormMessage } from "@/components/ui/form";
import GuidanceRenderer from "./GuidanceRenderer";

// Extend this as needed for more types
type QuestionType = "text" | "textarea" | "selectWithNote" | "bulletList";

interface Question {
  id: string;
  label: string;
  placeholder: string;
  supplement?: string;
  type?: QuestionType;
  // Add other fields as needed (options, etc.)
}

interface QuestionItemProps {
  question: Question;
  value?: string;
  error?: string;
  onChange?: (value: string) => void;
}

export default function QuestionItem({ question, value = "", error, onChange }: QuestionItemProps) {
  // Determine input type (default to text)
  const type = question.type || "text";

  return (
    <div>
      <label htmlFor={question.id} className="block font-medium mb-1">
        {question.label}
      </label>
      {question.supplement && (
        <GuidanceRenderer guidance={question.supplement} />
      )}
      <div className="mt-2">
        {type === "textarea" ? (
          <Textarea
            id={question.id}
            value={value}
            onChange={e => onChange?.(e.target.value)}
            placeholder={question.placeholder}
            rows={4}
            required
          />
        ) : (
          <Input
            id={question.id}
            value={value}
            onChange={e => onChange?.(e.target.value)}
            placeholder={question.placeholder}
            required
          />
        )}
      </div>
      {error && (
        <FormMessage className="mt-1">{error}</FormMessage>
      )}
    </div>
  );
}