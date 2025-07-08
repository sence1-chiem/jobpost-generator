import {
  validateQ7,
  validateQ8,
  validateQ9,
  validateQ10
} from "@/utils/validators/validators_step_3"


describe("validateQ7", () => {
  it("should return error when no options selected", () => {
    expect(validateQ7([])).toBe("雇用形態を1つ以上選択してください。");
  });

  it("should return true when at least one option is selected", () => {
    expect(validateQ7(["正社員"])).toBe(true);
  });
});

describe("validateQ8", () => {
  it("should return error when both options and supplement are empty", () => {
    expect(validateQ8({ options: [], supplement: "" })).toBe("勤務時間や休日に関する情報を選択または入力してください。");
  });

  it("should return true when options are provided", () => {
    expect(validateQ8({ options: ["フレックス"], supplement: "" })).toBe(true);
  });

  it("should return true when supplement is provided", () => {
    expect(validateQ8({ options: [], supplement: "補足説明" })).toBe(true);
  });
});

describe("validateQ9", () => {
  it("should return error when any required field is missing", () => {
    expect(validateQ9({})).toBe("給与に関するすべての項目を入力してください。");
    expect(validateQ9({ type: "月給" })).toBe("給与に関するすべての項目を入力してください。");
  });

  it("should return error if min or max is less than or equal to 0", () => {
    expect(validateQ9({ type: "月給", min: 0, max: 50 })).toBe("給与は正の数値で入力してください。");
  });

  it("should return error if max < min", () => {
    expect(validateQ9({ type: "月給", min: 50, max: 40 })).toBe("最大金額は最小金額以上にしてください。");
  });

  it("should return true for valid input", () => {
    expect(validateQ9({ type: "月給", min: 30, max: 40 })).toBe(true);
  });
});

describe("validateQ10", () => {
  it("should return error when both options and supplement are empty", () => {
    expect(validateQ10({ options: [], supplement: "" })).toBe("福利厚生に関する情報を選択または入力してください。");
  });

  it("should return true when options are provided", () => {
    expect(validateQ10({ options: ["書籍購入補助"], supplement: "" })).toBe(true);
  });

  it("should return true when supplement is provided", () => {
    expect(validateQ10({ options: [], supplement: "補足" })).toBe(true);
  });
});
