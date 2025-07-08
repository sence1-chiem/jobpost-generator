import { JobFormQuestion } from "@/types/questionTypes";

export const jobFormQuestionsStep2: JobFormQuestion[] = [
  {
    id: "q4",
    step: 2,
    label: "具体的にどんな業務をお願いする予定ですか？",
    type: "textarea",
    required: true,
    valueType: "bulletList",
    placeholder: "- 問い合わせ対応とFAQの整備\n- 新規クライアントとの初回ミーティングの設定\n- サービス改善のためのヒアリング活動\n- 顧客管理ツールの入力と更新\n- 提案資料の作成補助",
    guidance: `箇条書き形式で、1〜5項目を目安にご記入ください。
実際に任せる具体的な業務を書いてください（例：ヒアリング、日報作成、運用業務など）。
「業務改善」や「資料作成」など抽象的な表現には、対象や目的を添えると読みやすくなります。`,
    choices: [],
  },
  {
    id: "q5",
    step: 2,
    label: "その業務に必要なスキルや経験があれば教えてください",
    type: "textarea",
    required: true,
    valueType: "bulletList",
    placeholder: "- 営業経験1年以上\n- オンライン商談の経験\n- 業務改善の提案・実行経験\n- ITツール（Slack, Notionなど）の使用経験\n- チームでのプロジェクト運用経験",
    guidance: `箇条書きで記入してください（1〜5項目程度）。
経験年数の目安や、業務環境（例：SaaS、対法人、スタートアップ環境など）を加えるとより明確です。
「できればあると嬉しい」要素も含めてOKです。`,
    choices: [],
  },
  {
    id: "q6",
    step: 2,
    label: "どんな人がこの仕事に向いていそうですか？",
    type: "checkbox-with-supplement",
    required: false,
    valueType: "choiceWithSupplement",
    placeholder: "",
    guidance: `最大5つまで選択できます（おすすめは3つ前後です）。
あれもこれもではなく、チームに合う優先項目を選びましょう。`,
    choices: [
      "主体的に動ける人",
      "自分で課題を見つけられる人",
      "スピード感がある人",
      "論理的に考えられる人",
      "柔軟に対応できる人",
      "チームで協力できる人",
      "相手の立場で考えられる人",
      "丁寧に仕事を進められる人",
      "確認を怠らない人",
      "新しいことを楽しめる人",
      "変化に前向きな人"
    ],
    maxChoices: 5,
    supplementPlaceholder: "例：新しいツールや仕組みの導入にも前向きに取り組める方だと嬉しいです"
  }
];
