import { JobFormQuestion } from "@/types/questionTypes";

export const jobFormQuestionsStep1: JobFormQuestion[] = [
  {
    id: "q1",
    step: 1,
    type: "text",
    valueType: "string",
    label: "どんな職種を募集したいですか？",
    required: true,
    placeholder: "シニアソフトウェアエンジニア",
    guidance: `- 実際に求人票のタイトルに使われる項目です\n- 「Webエンジニア」より「シニアソフトウェアエンジニア」のように具体的に\n- 営業職の場合は「法人営業」「ルートセールス」など、役割が伝わる表記を推奨\n- 一般的で検索されやすい表現を意識してください`
  },
  {
    id: "q2",
    step: 1,
    type: "checkbox",
    valueType: "string[]",
    label: "この人に期待する役割は？",
    required: true,
    choices: [
      "チームの中核を担ってほしい",
      "将来的にマネジメントを任せたい",
      "新規プロジェクトを立ち上げてほしい",
      "顧客対応の質を高めてほしい",
      "サービスの品質改善を推進してほしい",
      "社内フローの改善を進めてほしい",
      "営業戦略を立て実行してほしい",
      "開発プロセスの標準化を図ってほしい",
      "担当領域を広く任せられる人を探している",
      "組織立ち上げフェーズを支えてほしい",
      "急拡大フェーズでの即戦力を探している",
      "離職によるチーム再編のキーパーソンを探している",
      "スタートアップ初期の文化醸成にも関与してほしい"
    ],
    withSupplementField: true,
    supplementPlaceholder: "SlackやNotionの整備から含めて、業務フロー改善の旗振りを期待しています",
    guidance: "自由記述欄は任意だが、非選択肢語彙はログ化対象（今後の項目拡張用）"
  },
  {
    id: "q3",
    step: 1,
    type: "checkbox",
    valueType: "string[]",
    label: "募集の背景を教えてください",
    required: true,
    choices: [
      "事業拡大のため",
      "欠員補充（退職・産休など）",
      "新しいプロジェクトの立ち上げに伴い",
      "現場負担の軽減のため",
      "組織体制の見直し・強化の一環として",
      "社内に新たな専門性を加えたい",
      "海外展開に向けた体制強化",
      "リモート対応強化のため",
      "子会社や新チームの設立に向けて",
      "社内異動による欠員補充"
    ],
    withSupplementField: true,
    supplementPlaceholder: "シリーズA資金調達後の採用第一弾として、事業責任者候補を探しています",
    guidance: "選択肢に該当しない自由記入はログ化対象（改善データとして保持）"
  }
];
