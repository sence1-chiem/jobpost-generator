// Question schema v2 - Discriminated union for clarity and type safety

export type JobFormQuestion =
  | TextQuestion
  | CheckboxQuestion
  | OtherQuestionTypes;

type OtherQuestionTypes = never; // Placeholder for future question types

interface BaseQuestion {
  id: string;
  label: string;
  placeholder?: string;
  type: string;
  guidance?: string;
}

export interface TextQuestion extends BaseQuestion {
  valueType: "string";
}

export interface CheckboxQuestion extends BaseQuestion {
  valueType: "string[]";
  type: "checkbox";
  choices: string[];
  maxChoices?: number;
  withSupplementField?: boolean;
  supplementPlaceholder?: string;
}

export interface RadioQuestion extends BaseQuestion {
  valueType: "string";
  choices: string[];
}

export interface RangeQuestion extends BaseQuestion {
  valueType: "object";
  unitChoices: string[];
  minLabel: string;
  maxLabel: string;
  notesPlaceholder?: string;
}

// Helper: Infer the expected answer type for a given question
export type JobFormAnswer<Q extends JobFormQuestion> =
  Q["valueType"] extends "string" ? string :
  Q["valueType"] extends "string[]" ? string[] :
  Q["valueType"] extends "object" ? Record<string, any> :
  never;
