import streamlit as st

st.set_page_config(page_title="求人票自動生成フォーム", layout="centered")
st.title("求人票自動生成フォーム")

with st.form("job_form"):
    st.header("ステップ1：ポジションの基本情報")

    job_title = st.text_input("Q1. 募集する職種名を入力してください", placeholder="例：Webエンジニア、営業職、カスタマーサポート")
    
    role_expectation = st.selectbox(
        "Q2. この人に期待する役割は何ですか？",
        ["新規事業を任せたい", "現場の改善を進めてほしい", "まずは人手が欲しい", "その他"],
    )
    role_expectation_note = st.text_input("補足（任意）")

    hiring_reason = st.selectbox(
        "Q3. 募集の背景を教えてください",
        ["事業拡大のため", "欠員補充", "新しいプロジェクト開始に伴い", "その他", "自由記述"],
    )
    hiring_reason_note = st.text_input("補足（任意）")

    st.divider()
    st.header("ステップ2：仕事内容・人物像の整理")

    responsibilities = st.text_area(
        "Q4. この人が担当する仕事を箇条書きで書いてください（3〜5項目）",
        placeholder="例：\n・問い合わせ対応とFAQの整備\n・新規クライアントとの初回ミーティングの設定\n・サービス改善のためのヒアリング活動"
    )

    required_skills = st.text_area(
        "Q5. この仕事に必要だと思うスキル・経験（箇条書き）",
        placeholder="例：\n・営業経験1年以上\n・オンライン商談の経験\n・業務改善の提案・実行経験"
    )

    suitable_personality = st.multiselect(
        "Q6. この仕事に向いている人物像は？",
        ["主体的に動ける人", "論理的に考える人", "人と関わるのが得意な人",
         "丁寧な仕事ができる人", "新しいことを楽しめる人", "チームで協力できる人"]
    )
    personality_note = st.text_input("補足（任意）")

    st.divider()
    st.header("ステップ3：雇用条件の指定")

    employment_type = st.multiselect(
        "Q7. 雇用形態を選んでください",
        ["正社員", "契約社員", "パート・アルバイト", "業務委託", "インターン"]
    )

    work_style = st.multiselect(
        "Q8. 勤務時間・休日を選んでください",
        ["フルタイム（9:00〜18:00など）", "シフト制（週3日〜OKなど）", 
         "完全週休2日制", "週休2日制", "土日祝休み"]
    )
    work_style_note = st.text_input("補足（任意）")

    salary_type = st.radio("Q9. 給与の単位を選択してください", ["月給", "年収"])
    salary_min = st.text_input("最低額（数字のみ）")
    salary_max = st.text_input("最大額（数字のみ）")
    salary_note = st.text_input("手当等（任意）")

    benefits = st.multiselect(
        "Q10. 福利厚生について、伝えたい内容を選んでください",
        ["社会保険完備", "交通費支給", "リモート勤務可", "育休制度あり", "書籍購入補助"]
    )
    benefits_note = st.text_input("補足（任意）")

    st.divider()
    st.header("ステップ4：出力設定")

    output_format = st.selectbox(
        "Q11. 出力フォーマットを選んでください",
        ["自社サイト・社内利用向け", "Indeed掲載向け", "その他媒体向け"]
    )

    tone = st.radio(
        "Q12. 文体スタイルを選択してください（任意）",
        ["自動選択", "カジュアル", "フォーマル", "誠実でわかりやすい", "情熱的／ストーリー調"]
    )

    submitted = st.form_submit_button("生成する")

if submitted:
    st.subheader("生成された求人票")
    st.markdown(f"""
### {job_title}

**このポジションに期待すること**  
{role_expectation}  
{role_expectation_note}

**募集の背景**  
{hiring_reason}  
{hiring_reason_note}

**主な仕事内容**  
{responsibilities}

**必要なスキル・経験**  
{required_skills}

**向いている人物像**  
{", ".join(suitable_personality)}  
{personality_note}

**雇用形態**  
{", ".join(employment_type)}

**勤務時間・休日**  
{", ".join(work_style)}  
{work_style_note}

**給与**  
{salary_type}：{salary_min}〜{salary_max}  
{salary_note}

**福利厚生**  
{", ".join(benefits)}  
{benefits_note}

**出力フォーマット**  
{output_format}

**文体スタイル**  
{tone}
""")

