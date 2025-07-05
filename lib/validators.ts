type Validator = (value: any) => boolean;

export const validators: Record<string, Validator> = {
  // Q1, Q2, Q3: non-empty string
  q1: (value) => typeof value === "string" && value.trim().length > 0,
  q2: (value) => typeof value === "string" && value.trim().length > 0,
  q3: (value) => typeof value === "string" && value.trim().length > 0,

  // Q4, Q5: array with 3 to 5 items
  q4: (value) => Array.isArray(value) && value.length >= 3 && value.length <= 5,
  q5: (value) => Array.isArray(value) && value.length >= 3 && value.length <= 5,

  // Q6, Q7, Q8, Q10: at least one selection (array with length >= 1)
  q6: (value) => Array.isArray(value) && value.length >= 1,
  q7: (value) => Array.isArray(value) && value.length >= 1,
  q8: (value) => Array.isArray(value) && value.length >= 1,
  q10: (value) => Array.isArray(value) && value.length >= 1,

  // Q9: object with min > 0 and max >= min
  q9: (value) =>
    value &&
    typeof value === "object" &&
    typeof value.min === "number" &&
    typeof value.max === "number" &&
    value.min > 0 &&
    value.max >= value.min,

  // Q11: must be either "internal" or "indeed"
  q11: (value) => value === "internal" || value === "indeed",

  // Q12: optional, but if present, must match a known tone preset or allow any string
  // (Assume always valid if string or empty)
  q12: (value) => typeof value === "string" || value === "",
};