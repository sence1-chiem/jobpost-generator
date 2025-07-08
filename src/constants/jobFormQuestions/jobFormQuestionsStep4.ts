import { JobFormQuestion } from "@/types/questionTypes";

export const jobFormQuestionsStep4: JobFormQuestion[] = [
  {
    id: "q11",
    step: 4,
    type: "radio",
    valueType: "string",
    label: "出力フォーマット",
    required: true,
    placeholder: "",
    guidance:
      "自社サイト用は、社内共有や自社ブログなどでの掲載を想定した出力です\nIndeed用は、掲載ガイドラインに準拠した構成と文体に自動調整されます（NGワード除去、構成変換など）\n選択に応じて、出力テンプレート・文体が自動で切り替わります",
    choices: [
      { label: "自社サイト・社内利用向け", value: "internal" },
      { label: "Indeed掲載向け", value: "indeed" }
    ]
  },
  {
    id: "q12",
    step: 4,
    type: "radio",
    valueType: "string",
    label: "文体スタイル",
    required: false,
    placeholder: "",
    guidance:
      "文体スタイルは出力文の「語り口」に影響します\n迷った場合は未選択のままでOKです（媒体ごとに自動設定されます）\n自社のトーンや雰囲気を明示したい場合は、補足欄に書き添えてください（例：代表の語りを強調したい など）",
    choices: [
      {
        label: "誠実でビジネスライク",
        value: "polite-business"
      },
      {
        label: "カジュアルで親しみやすい",
        value: "casual-friendly"
      },
      {
        label: "柔らかく丁寧",
        value: "gentle-polite"
      },
      {
        label: "情熱・ストーリー調",
        value: "passionate-story"
      }
    ],
    withSupplementField: true,
    supplementPlaceholder:
      "例：社員同士の距離感が近く、Slackでラフにやりとりしています。候補者にもカジュアルな雰囲気が伝わる文体を希望します。"
  }
];
