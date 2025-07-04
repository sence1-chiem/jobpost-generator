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
    st.write("職種タイトル:", job_title)
    st.write("雇用形態:", employment_type)
    st.write("勤務地:", location)
    st.write("業務内容:", job_description)
    st.write("必須スキル:", required_skills)
    st.write("歓迎スキル:", preferred_skills)
    st.write("想定年収・報酬:", salary)
    st.write("備考:", notes)
