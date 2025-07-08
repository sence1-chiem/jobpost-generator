// Question schema v2 - Discriminated union for clarity and type safety

export type JobFormQuestion =
  | TextQuestion
  | CheckboxQuestion
  | RadioQuestion
  | RangeQuestion;

interface BaseQuestion {
  id: string;
  step: number;
  label: string;
  required: boolean;
  placeholder?: string;
  guidance?: string; // UI supplement or help text
}

export interface TextQuestion extends BaseQuestion {
  type: "text";
  valueType: "string";
}

export interface CheckboxQuestion extends BaseQuestion {
  type: "checkbox";
  valueType: "string[]";
  choices: string[];
  maxChoices?: number;
  withSupplementField?: boolean;
  supplementPlaceholder?: string;
}

export interface RadioQuestion extends BaseQuestion {
  type: "radio";
  valueType: "string";
  choices: string[];
}

export interface RangeQuestion extends BaseQuestion {
  type: "range";
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
