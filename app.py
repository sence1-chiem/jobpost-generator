import streamlit as st

st.title("Job Post Form")

with st.form("job_form"):

    job_title = st.text_input("職種タイトル")
    employment_type = st.selectbox(
        "雇用形態",
        ["正社員", "業務委託", "アルバイト", "契約社員", "インターン"],
    )
    location = st.text_input("勤務地")
    job_description = st.text_area("業務内容")
    required_skills = st.text_area("必須スキル")
    preferred_skills = st.text_area("歓迎スキル")
    salary = st.text_input("想定年収・報酬")
    notes = st.text_area("備考")

    submitted = st.form_submit_button("Submit")

if submitted:
    preview = f"""
### 職種タイトル
{job_title} を募集しています。

### 雇用形態・勤務地
雇用形態は {employment_type}、勤務地は {location} です。

【業務内容】
{job_description}

【必須スキル】
{required_skills}

【歓迎スキル】
{preferred_skills}

【想定年収・報酬】
{salary}

【備考】
{notes}
"""
    st.markdown(preview)
