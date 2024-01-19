import streamlit as st
from my_component import my_component
st.set_page_config(
    page_title="Clarifai",
    page_icon="👋",
)
num_clicks = my_component("World")
st.sidebar.write("")
