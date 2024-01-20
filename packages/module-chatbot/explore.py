import streamlit as st
import streamlit.components.v1 as components
import os
_RELEASE = os.environ.get('release')
st.set_page_config(
    page_title="Clarifai",
    page_icon="👋",
    initial_sidebar_state="collapsed"
)
st.markdown('<center><h1>SHOP</h1></center>', unsafe_allow_html=True)
col1, col2 = st.columns([1,1])
with col1:
    st.button('Say hello')
    st.button('Say helddlo',key="haha")

if not _RELEASE:
    _component_func = components.declare_component(

        "my_component",

        url="http://localhost:3001",
    )
    _component_func()
else:

    parent_dir = os.path.dirname(os.path.abspath(__file__))
    build_dir = os.path.join(parent_dir, "frontend/build")
    _component_func = components.declare_component("my_component", path=build_dir)
    _component_func()



