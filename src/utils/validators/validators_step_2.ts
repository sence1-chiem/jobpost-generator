export function validateQ4(value: string): true | string {
  if (!value || value.trim() === "") {
    return "この項目は必須です。";
  }
  const lines = value.split("\n").map(line => line.trim()).filter(line => line !== "");
  if (lines.length < 1 || lines.length > 5) {
    return "1〜5個の項目を箇条書きで入力してください。";
  }
  if (!value.includes("\n")) {
    return "1つずつ改行して箇条書きで入力してください。";
  }
  return true;
}

export function validateQ5(value: string): true | string {
  if (!value || value.trim() === "") {
    return "この項目は必須です。";
  }
  const lines = value.split("\n").map(line => line.trim()).filter(line => line !== "");
  if (lines.length < 1 || lines.length > 5) {
    return "1〜5個の項目を箇条書きで入力してください。";
  }
  if (!value.includes("\n")) {
    return "1つずつ改行して箇条書きで入力してください。";
  }
  return true;
}

export function validateQ6(input: { choices: string[]; supplement?: string }): true | string {
  const hasChoice = Array.isArray(input.choices) && input.choices.length > 0;
  const hasSupplement = input.supplement && input.supplement.trim() !== "";

  if (!hasChoice && !hasSupplement) {
    return "1つ以上選択するか、補足情報を入力してください。";
  }
  if (input.choices.length > 5) {
    return "選択肢は最大5つまでです。";
  }
  return true;
}
