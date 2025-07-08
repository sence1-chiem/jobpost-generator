import {
  validateQ4,
  validateQ5,
  validateQ6
} from "@/utils/validators/validators_step_2"


describe("validateQ4", () => {
  it("should pass with valid bullet list", () => {
    const input = "業務1\n業務2\n業務3";
    expect(validateQ4(input)).toBe(true);
  });

  it("should fail with empty input", () => {
    expect(validateQ4("")).toBe("この項目は必須です。");
  });

  it("should fail without line breaks", () => {
    expect(validateQ4("業務1, 業務2, 業務3")).toBe("1つずつ改行して箇条書きで入力してください。");
  });

  it("should fail with more than 5 lines", () => {
    const input = "1\n2\n3\n4\n5\n6";
    expect(validateQ4(input)).toBe("1〜5個の項目を箇条書きで入力してください。");
  });
});

describe("validateQ5", () => {
  it("should pass with valid bullet list", () => {
    const input = "スキル1\nスキル2";
    expect(validateQ5(input)).toBe(true);
  });

  it("should fail with empty input", () => {
    expect(validateQ5("")).toBe("この項目は必須です。");
  });

  it("should fail without line breaks", () => {
    expect(validateQ5("スキル1, スキル2")).toBe("1つずつ改行して箇条書きで入力してください。");
  });

  it("should fail with more than 5 lines", () => {
    const input = "1\n2\n3\n4\n5\n6";
    expect(validateQ5(input)).toBe("1〜5個の項目を箇条書きで入力してください。");
  });
});

describe("validateQ6", () => {
  it("should pass with valid choices", () => {
    const input = { choices: ["tag1", "tag2"] };
    expect(validateQ6(input)).toBe(true);
  });

  it("should pass with only supplement", () => {
    const input = { choices: [], supplement: "補足情報" };
    expect(validateQ6(input)).toBe(true);
  });

  it("should fail with neither choices nor supplement", () => {
    const input = { choices: [], supplement: "" };
    expect(validateQ6(input)).toBe("1つ以上選択するか、補足情報を入力してください。");
  });

  it("should fail with too many choices", () => {
    const input = {
      choices: ["1", "2", "3", "4", "5", "6"],
      supplement: ""
    };
    expect(validateQ6(input)).toBe("選択肢は最大5つまでです。");
  });
});
