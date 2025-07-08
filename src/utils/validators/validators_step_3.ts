export function validateQ7(value: string[] | undefined): true | string {
  if (!value || value.length === 0) {
    return "雇用形態を1つ以上選択してください。";
  }
  return true;
}

export function validateQ8(value: { options?: string[]; supplement?: string } | undefined): true | string {
  const hasOptions = value?.options && value.options.length > 0;
  const hasSupplement = value?.supplement && value.supplement.trim().length > 0;
  if (!hasOptions && !hasSupplement) {
    return "勤務時間や休日に関する情報を選択または入力してください。";
  }
  return true;
}

export function validateQ9(
  value:
    | {
        type?: string;
        min?: number;
        max?: number;
        notes?: string;
      }
    | undefined
): true | string {
  if (!value || !value.type || !value.min || !value.max) {
    return "給与に関するすべての項目を入力してください。";
  }
  if (value.min <= 0 || value.max <= 0) {
    return "給与は正の数値で入力してください。";
  }
  if (value.max < value.min) {
    return "最大金額は最小金額以上にしてください。";
  }
  return true;
}

export function validateQ10(value: { options?: string[]; supplement?: string } | undefined): true | string {
  const hasOptions = value?.options && value.options.length > 0;
  const hasSupplement = value?.supplement && value.supplement.trim().length > 0;
  if (!hasOptions && !hasSupplement) {
    return "福利厚生に関する情報を選択または入力してください。";
  }
  return true;
}
