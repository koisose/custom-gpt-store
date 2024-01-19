import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

export default component$(() => {
  return (
    <>
    <div class="flex flex-col h-full overflow-y-auto bg-white rounded-xl shadow-md">
    <div class="px-6 py-4">
        <div class="font-bold text-xl mb-2">Chat Box</div>
    </div>
    <div class="px-6 py-4 flex-1 overflow-y-scroll">
        <div class="flex items-start mb-4">
            <div class="flex items-end">
                <div class="flex flex-col space-y-2 text-xs max-w-xs mx-2 order-2 items-start">
                    <div>
                        <span class="px-4 py-2 rounded-lg inline-block rounded-bl-none bg-blue-600 text-white">
                            Message from user
                        </span>
                    </div>
                </div>
            </div>
        </div>
        <div class="flex items-start mb-4 text-sm">
            <div class="flex items-end">
                <div class="flex flex-col space-y-2 text-xs max-w-xs mx-2 order-1 items-start">
                    <div>
                        <span class="px-4 py-2 rounded-lg inline-block rounded-br-none bg-gray-300 text-gray-600">
                            Message from assistant
                        </span>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="bg-gray-200 w-full py-4">
        <div class="flex items-center justify-between px-4">
          <input type="text" class="w-full text-sm px-4 py-2 border rounded-lg focus:outline-none focus:border-indigo-500" />
             <button class="ml-2 text-white bg-indigo-500 px-5 py-2 rounded-lg text-sm">Send</button>
        </div>
    </div>
</div>
    </>
  );
});

export const head: DocumentHead = {
  title: "Chatbot",
  meta: [
    {
      name: "description",
      content: "chat",
    },
  ],
};
