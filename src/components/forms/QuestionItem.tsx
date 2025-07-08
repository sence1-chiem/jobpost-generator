"use client";

import React from "react";
import { useFormContext } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  FormField,
  FormControl,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import GuidanceRenderer from "./GuidanceRenderer";
import type { JobFormQuestion } from "@/types/questionTypes";

interface QuestionItemProps {
  question: JobFormQuestion;
}

export default function QuestionItem({ question }: QuestionItemProps) {
  const { control, formState } = useFormContext();
  const error = formState.errors?.[question.id]?.message as string | undefined;

  return (
    <FormField
      name={question.id}
      control={control}
      render={({ field }) => (
        <FormItem>
          <FormLabel htmlFor={question.id}>{question.label}</FormLabel>
          {question.guidance && (
            <GuidanceRenderer guidance={question.guidance} />
          )}
          <FormControl>
            {question.type === "text" ? (
              <Input
                id={question.id}
                placeholder={question.placeholder}
                {...field}
                value={field.value ?? ""}
              />
            ) : question.type === "textarea" ? (
              <Textarea
                id={question.id}
                placeholder={question.placeholder}
                {...field}
                value={field.value ?? ""}
              />
              ) : question.type === "checkbox" && Array.isArray((question as any).choices) ? (
                <div className="flex flex-col gap-2">
                  {(question as any).choices.map((opt: string, idx: number) => {
                    return (
                      <FormItem
                        key={opt ?? idx}
                        className="flex flex-row items-center space-x-2 space-y-0"
                      >
                        <FormControl>
                          <input
                            type="checkbox"
                            name={question.id}
                            id={`${question.id}-${opt}`}
                            value={opt}
                            checked={Array.isArray(field.value) ? field.value.includes(opt) : false}
                            onChange={(e) => {
                              const checked = e.target.checked;
                              let newValue: string[] = Array.isArray(field.value) ? [...field.value] : [];
                              if (checked) {
                                newValue.push(opt);
                              } else {
                                newValue = newValue.filter((v) => v !== opt);
                              }
                              field.onChange(newValue);
                            }}
                          />
                        </FormControl>
                        <FormLabel htmlFor={`${question.id}-${opt}`}>{opt}</FormLabel>
                      </FormItem>
                    );
                  })}
                </div>

            ) : (
              <p className="text-muted-foreground text-sm">
                未対応の入力タイプ: {question.type}
              </p>
            )}
          </FormControl>
          {error && <FormMessage>{error}</FormMessage>}
        </FormItem>
      )}
    />
  );
}
