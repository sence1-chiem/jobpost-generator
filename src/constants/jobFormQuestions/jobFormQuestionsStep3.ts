import { JobFormQuestion } from "@/types/questionTypes";

export const jobFormQuestionsStep3: JobFormQuestion[] = [
  {
    id: "q7",
    step: 3,
    type: "tagSelector",
    label: "雇用形態について教えてください",
    required: true,
    placeholder: "例：正社員／契約社員／業務委託など",
    guidance: "複数選択可。検討中でも構いません。",
    choices: ["正社員", "契約社員", "業務委託", "副業", "インターン", "アルバイト", "パート"],
  },
  {
    id: "q8",
    step: 3,
    type: "tagSelectorWithSupplement",
    label: "勤務時間や休日について教えてください",
    required: true,
    placeholder: "例：フレックスタイム制（コアタイム11〜15時）、完全週休二日制（土日祝）",
    guidance: "選択肢＋自由記述。働き方に特徴がある場合はぜひ記載を。",
    choices: [
      "フルフレックス制",
      "一部フレックス（コアタイムあり）",
      "裁量労働制",
      "固定時間勤務（9時〜18時など）",
      "時短勤務制度あり",
      "土日祝休み",
      "完全週休二日制",
      "週3〜4勤務可",
      "副業OK"
    ],
    supplementPlaceholder: "その他、勤務形態の補足があればご記入ください"
  },
  {
    id: "q9",
    step: 3,
    type: "salaryRange",
    label: "想定している給与レンジがあれば教えてください",
    required: true,
    placeholder: "例：月給30〜40万円／年収500〜700万円 など",
    guidance: "形式（年収／月給）を選んで、金額レンジと補足を入力できます。",
    choices: ["月給", "年収", "時給"],
    supplementPlaceholder: "補足（例：試用期間あり、インセンティブ制度あり など）"
  },
  {
    id: "q10",
    step: 3,
    type: "tagSelectorWithSupplement",
    label: "その他、福利厚生や制度などで伝えておきたいことがあれば",
    required: false,
    placeholder: "例：書籍購入制度・勉強会参加支援など",
    guidance: "選択肢から選んだあとに、自由記述で補足できます。",
    choices: [
      "書籍購入補助",
      "勉強会・カンファレンス参加支援",
      "リモートワーク制度",
      "副業OK",
      "時短勤務制度",
      "ウェルカムランチ・社内交流イベント",
      "住宅手当・家賃補助",
      "子育て支援・ファミリーサポート"
    ],
    supplementPlaceholder: "その他の制度や補足事項があればご記入ください"
  }
];
