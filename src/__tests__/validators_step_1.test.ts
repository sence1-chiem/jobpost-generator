import {
  validateQ1,
  validateQ2,
  validateQ3
} from "@/utils/validators/validators_step_1"


describe("validateQ1", () => {
  it("returns true for valid job title", () => {
    expect(validateQ1("エンジニア")) .toBe(true);
  });

  it("returns error for empty string", () => {
    expect(validateQ1("")).toBe("職種名を入力してください");
  });

  it("returns error for whitespace-only string", () => {
    expect(validateQ1("   ")).toBe("職種名を入力してください");
  });
});

describe("validateQ2", () => {
  it("returns true for selected choices", () => {
    expect(validateQ2({ choices: ["期待する役割1"] })).toBe(true);
  });

  it("returns true for non-empty supplement", () => {
    expect(validateQ2({ choices: [], supplement: "補足内容あり" })).toBe(true);
  });

  it("returns error for empty input", () => {
    expect(validateQ2({ choices: [], supplement: "" })).toBe(
      "少なくとも1つ選択するか、自由記述を入力してください"
    );
  });
});

describe("validateQ3", () => {
  it("returns true for selected choices", () => {
    expect(validateQ3({ choices: ["募集背景1"] })).toBe(true);
  });

  it("returns true for non-empty supplement", () => {
    expect(validateQ3({ choices: [], supplement: "補足背景あり" })).toBe(true);
  });

  it("returns error for empty input", () => {
    expect(validateQ3({ choices: [], supplement: "" })).toBe(
      "少なくとも1つ選択するか、自由記述を入力してください"
    );
  });
});
