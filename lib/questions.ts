export interface Question {
  id: string;
  label: string;
  placeholder: string;
  supplement?: string;
}

export const questions: Question[] = [
  {
    id: "q1",
    label: "募集職種タイトル",
    placeholder: "例：営業事務スタッフ",
    supplement: "求人票のタイトルとして表示されます。",
  },
  {
    id: "q2",
    label: "想定される役割",
    placeholder: "例：受発注管理、顧客対応",
    supplement: "この職種で期待される主な役割を簡潔に記載してください。",
  },
  {
    id: "q3",
    label: "募集背景",
    placeholder: "例：事業拡大に伴う増員募集です。",
    supplement: "なぜこのポジションを募集するのか、背景を記載してください。",
  },
  {
    id: "q4",
    label: "仕事内容",
    placeholder: "例：電話・メール対応、受発注管理、資料作成など",
    supplement: "具体的な業務内容を箇条書きで記載してください。",
  },
  {
    id: "q5",
    label: "応募資格",
    placeholder: "例：事務経験1年以上、基本的なPCスキル",
    supplement: "必須となる資格や経験、スキルを記載してください。",
  },
  {
    id: "q6",
    label: "歓迎スキル・経験",
    placeholder: "例：営業事務経験、Excelの高度な操作",
    supplement: "あれば尚可のスキルや経験を記載してください。",
  },
  {
    id: "q7",
    label: "勤務地",
    placeholder: "例：東京都新宿区西新宿1-1-1",
    supplement: "勤務するオフィスや拠点の所在地を記載してください。",
  },
  {
    id: "q8",
    label: "勤務時間",
    placeholder: "例：9:00～18:00（休憩1時間）",
    supplement: "始業・終業時刻、休憩時間などを記載してください。",
  },
  {
    id: "q9",
    label: "給与",
    placeholder: "例：月給25万円～35万円（経験・能力による）",
    supplement: "給与形態や想定年収、諸手当について記載してください。",
  },
  {
    id: "q10",
    label: "休日・休暇",
    placeholder: "例：完全週休2日制（土日）、祝日、年末年始休暇",
    supplement: "休日や休暇制度について記載してください。",
  },
  {
    id: "q11",
    label: "待遇・福利厚生",
    placeholder: "例：社会保険完備、交通費支給、昇給年1回",
    supplement: "各種保険や福利厚生、その他待遇について記載してください。",
  },
  {
    id: "q12",
    label: "選考プロセス",
    placeholder: "例：書類選考→面接2回→内定",
    supplement: "選考の流れや面接回数などを記載してください。",
  },
];