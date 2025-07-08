import {
  validateQ11,
  validateQ12
} from "@/utils/validators/validators_step_4"


describe("validateQ11", () => {
  it("returns true when a radio option is selected", () => {
    expect(validateQ11("internal")).toBe(true);
  });

  it("returns error message when no option is selected", () => {
    expect(validateQ11("")).toBe("出力形式を選択してください。");
    expect(validateQ11(undefined as any)).toBe("出力形式を選択してください。");
  });
});

describe("validateQ12", () => {
  it("returns true when at least one checkbox is selected", () => {
    expect(validateQ12({ choices: ["丁寧め"], supplement: "" })).toBe(true);
  });

  it("returns true when only supplement is provided", () => {
    expect(validateQ12({ choices: [], supplement: "柔らかい雰囲気で" })).toBe(true);
  });

  it("returns true when both choices and supplement are provided", () => {
    expect(validateQ12({ choices: ["固め"], supplement: "フォーマルな文体でお願いします" })).toBe(true);
  });

  it("returns error message when neither choices nor supplement are provided", () => {
    expect(validateQ12({ choices: [], supplement: "" })).toBe("文体の希望を選択または記入してください（任意）。");
  });
});
