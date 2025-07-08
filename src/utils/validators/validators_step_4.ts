// validators_step_4.ts

export function validateQ11(value: string): true | string {
  if (!value || value.trim() === "") {
    return "出力形式を選択してください。";
  }
  return true;
}

interface Q12Value {
  choices?: string[];
  supplement?: string;
}

export function validateQ12(value: Q12Value): true | string {
  const hasChoices = Array.isArray(value.choices) && value.choices.length > 0;
  const hasSupplement = typeof value.supplement === "string" && value.supplement.trim().length > 0;

  if (!hasChoices && !hasSupplement) {
    return "文体の希望を選択するか、補足を入力してください。";
  }

  return true;
}
