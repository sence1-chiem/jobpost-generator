// Step 1 validators (Q1–Q3)

// Q1 expects a non-empty string
export function validateQ1(value: string): true | string {
  if (typeof value !== "string" || value.trim() === "") {
    return "職種名を入力してください";
  }
  return true;
}

// Q2 expects at least one choice selected OR a non-empty supplement string
export function validateQ2(
  value: { choices: string[]; supplement?: string }
): true | string {
  const hasChoices = Array.isArray(value.choices) && value.choices.length > 0;
  const hasSupplement =
    typeof value.supplement === "string" && value.supplement.trim().length > 0;

  if (!hasChoices && !hasSupplement) {
    return "少なくとも1つ選択するか、自由記述を入力してください";
  }
  return true;
}

// Q3 follows the same validation as Q2
export function validateQ3(
  value: { choices: string[]; supplement?: string }
): true | string {
  const hasChoices = Array.isArray(value.choices) && value.choices.length > 0;
  const hasSupplement =
    typeof value.supplement === "string" && value.supplement.trim().length > 0;

  if (!hasChoices && !hasSupplement) {
    return "少なくとも1つ選択するか、自由記述を入力してください";
  }
  return true;
}
