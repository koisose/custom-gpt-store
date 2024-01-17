import streamlit as st
from clarifai.modules.css import ClarifaiStreamlitCSS
from langchain.llms import Clarifai
from langchain import PromptTemplate
from langchain.chains import ConversationChain
from langchain.memory import ConversationBufferMemory, ChatMessageHistory
from langchain.schema import HumanMessage, AIMessage
import streamlit.components.v1 as components
import os
st.set_page_config(page_title="Clarifai Bot",layout="wide")
ClarifaiStreamlitCSS.insert_default_css(st)

pat = os.environ.get('CLARIFAI_API_KEY')

default_llm = "GPT-4"
st.title(f"Chatting with GPT-4")
llm = Clarifai(pat=pat, user_id="openai", app_id="chat-completion", model_id=default_llm)

template = """
Current conversation:
{chat_history}
Human: {input}
AI Assistant:"""

prompt = PromptTemplate(template=template, input_variables=["chat_history", "input"])

conversation = ConversationChain(
  prompt=prompt,
  llm=llm,
  verbose=True,
  memory=ConversationBufferMemory(ai_prefix="AI Assistant", memory_key="chat_history"),
)
st.session_state.clear()
if "chat_history" not in st.session_state.keys():
  st.session_state['chat_history'] = [{"role": "system", "content": """you can answer anything"""}]


# After every input from user, the streamlit page refreshes by default which is unavoidable.
# Due to this, all the previous msgs from the chat disappear and the context is lost from LLM's memory.
# Hence, we need to save the history in seession_state and re-initialize LLM's memory with it.
def show_previous_chats():
  # Display previous chat messages and store them into memory
  chat_list = []
  for message in st.session_state['chat_history']:
    with st.chat_message(message["role"]):
      if message["role"] == 'user':
        msg = HumanMessage(content=message["content"])
      else:
        msg = AIMessage(content=message["content"])
      chat_list.append(msg)
      st.write(message["content"])
  conversation.memory.chat_memory = ChatMessageHistory(messages=chat_list)


def chatbot():
  if message := st.chat_input(key="input"):
    st.chat_message("user").write(message)
    st.session_state['chat_history'].append({"role": "user", "content": message})
    with st.chat_message("assistant"):
      with st.spinner("Thinking..."):
        response = conversation.predict(input=message, chat_history=st.session_state["chat_history"])
        # llama response format if different. It seems like human-ai chat examples are appended after the actual response.
        if st.session_state['chosen_llm'].find('lama') > -1:
          response = response.split('Human:',1)[0]
        st.write(response)
        message = {"role": "assistant", "content": response}
        st.session_state['chat_history'].append(message)
    st.write("\n***\n")

if "chosen_llm" in st.session_state.keys():
  show_previous_chats()
  chatbot()


