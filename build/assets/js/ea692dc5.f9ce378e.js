"use strict";(self.webpackChunkreceipt_wrangler_doc=self.webpackChunkreceipt_wrangler_doc||[]).push([[8024],{88952:(e,i,s)=>{s.r(i),s.d(i,{assets:()=>o,contentTitle:()=>a,default:()=>d,frontMatter:()=>l,metadata:()=>t,toc:()=>r});const t=JSON.parse('{"id":"concepts/system-settings/receipt-processing-settings","title":"Receipt Processing Settings","description":"Receipt processing settings allows Administrators to configure OCR and AI Settings to use within the system.","source":"@site/versioned_docs/version-5.x/concepts/system-settings/02-receipt-processing-settings.md","sourceDirName":"concepts/system-settings","slug":"/concepts/system-settings/receipt-processing-settings","permalink":"/docs/concepts/system-settings/receipt-processing-settings","draft":false,"unlisted":false,"tags":[],"version":"5.x","sidebarPosition":2,"frontMatter":{},"sidebar":"tutorialSidebar","previous":{"title":"System Settings","permalink":"/docs/concepts/system-settings/system-settings"},"next":{"title":"Prompts","permalink":"/docs/concepts/system-settings/prompts"}}');var n=s(74848),c=s(28453);const l={},a="Receipt Processing Settings",o={},r=[{value:"Viewing Receipt Processing Settings",id:"viewing-receipt-processing-settings",level:2},{value:"Actions",id:"actions",level:3},{value:"Edit",id:"edit",level:4},{value:"Delete",id:"delete",level:4},{value:"Check Connectivity",id:"check-connectivity",level:4},{value:"Managing Receipt Processing Settings",id:"managing-receipt-processing-settings",level:2},{value:"Header Buttons",id:"header-buttons",level:2},{value:"Fields",id:"fields",level:2},{value:"Name",id:"name",level:3},{value:"Description",id:"description",level:3},{value:"Prompt",id:"prompt",level:3},{value:"OCR Engine",id:"ocr-engine",level:3},{value:"AI Type",id:"ai-type",level:3},{value:"Managing Open AI/Gemini Receipt Processing Settings",id:"managing-open-aigemini-receipt-processing-settings",level:2},{value:"API Key",id:"api-key",level:3},{value:"Model",id:"model",level:3},{value:"Use Vision? (OpenAI Only)",id:"use-vision-openai-only",level:3},{value:"Managing Open AI Custom/Ollama Receipt Processing Settings",id:"managing-open-ai-customollama-receipt-processing-settings",level:2},{value:"URL",id:"url",level:3},{value:"Model (Ollama Only)",id:"model-ollama-only",level:3},{value:"Use Vision? (Ollama Only)",id:"use-vision-ollama-only",level:3},{value:"System Tasks",id:"system-tasks",level:2},{value:"Receipt Processing Settings Connectivity Check",id:"receipt-processing-settings-connectivity-check",level:3},{value:"Quick Scan/Magic Fill",id:"quick-scanmagic-fill",level:3}];function h(e){const i={a:"a",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",img:"img",li:"li",p:"p",ul:"ul",...(0,c.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(i.header,{children:(0,n.jsx)(i.h1,{id:"receipt-processing-settings",children:"Receipt Processing Settings"})}),"\n",(0,n.jsx)(i.p,{children:"Receipt processing settings allows Administrators to configure OCR and AI Settings to use within the system."}),"\n",(0,n.jsx)(i.p,{children:'To access the receipt processing settings, log in as an administrator, and then click on the avatar menu, and then click\nthe "System Settings" button, as shown below.\nThen click on the "Receipt Processing Settings" tab.'}),"\n",(0,n.jsx)(i.p,{children:(0,n.jsx)(i.img,{alt:"System Settings",src:s(10787).A+"",width:"3840",height:"2048"})}),"\n",(0,n.jsx)(i.h2,{id:"viewing-receipt-processing-settings",children:"Viewing Receipt Processing Settings"}),"\n",(0,n.jsx)(i.p,{children:"Once the user has navigated to the receipt processing settings tab, they will be presented with a table containing the\nexisting receipt processing settings."}),"\n",(0,n.jsx)(i.p,{children:(0,n.jsx)(i.img,{alt:"Receipt Processing Settings",src:s(90437).A+"",width:"3840",height:"2048"})}),"\n",(0,n.jsx)(i.p,{children:"Each of the columns can be sorted by clicking on the column header, either ascending or descending, except for the\nactions column."}),"\n",(0,n.jsx)(i.h3,{id:"actions",children:"Actions"}),"\n",(0,n.jsx)(i.p,{children:"The actions column contains the following buttons:"}),"\n",(0,n.jsx)(i.h4,{id:"edit",children:"Edit"}),"\n",(0,n.jsx)(i.p,{children:"This allows the user to edit the receipt processing settings."}),"\n",(0,n.jsx)(i.h4,{id:"delete",children:"Delete"}),"\n",(0,n.jsx)(i.p,{children:"This allows the user to delete the receipt processing settings, as long as it is not set in the system settings.\nOtherwise, a snackbar will be displayed that informs the user what the receipt processing settings is currently related\nto."}),"\n",(0,n.jsx)(i.h4,{id:"check-connectivity",children:"Check Connectivity"}),"\n",(0,n.jsx)(i.p,{children:"This allows the user to check the connectivity of the receipt processing settings. The result is stored as a system\ntask."}),"\n",(0,n.jsx)(i.h2,{id:"managing-receipt-processing-settings",children:"Managing Receipt Processing Settings"}),"\n",(0,n.jsx)(i.p,{children:"To manage the receipt processing settings, click on the name hyperlink of the receipt processing settings you wish to\nview, or click the edit button in the actions column."}),"\n",(0,n.jsx)(i.p,{children:"The following form will be displayed:"}),"\n",(0,n.jsx)(i.p,{children:(0,n.jsx)(i.img,{alt:"Receipt Processing Settings",src:s(71023).A+"",width:"3840",height:"2048"})}),"\n",(0,n.jsx)(i.h2,{id:"header-buttons",children:"Header Buttons"}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsxs)(i.li,{children:["\n",(0,n.jsx)(i.p,{children:"Edit (not pictured): This allows the user to edit the receipt processing settings. This button is only visible when in\nview mode."}),"\n"]}),"\n",(0,n.jsxs)(i.li,{children:["\n",(0,n.jsx)(i.p,{children:"Connectivity Check: This allows the user to check the connectivity of the receipt processing settings. The result is\nstored as a system task, unless it is being created, then a system task will not be created."}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(i.h2,{id:"fields",children:"Fields"}),"\n",(0,n.jsx)(i.p,{children:"Each AI Type may have slightly different settings, but the following fields are common to all AI Types:"}),"\n",(0,n.jsx)(i.h3,{id:"name",children:"Name"}),"\n",(0,n.jsx)(i.p,{children:"This is the name of the receipt processing settings."}),"\n",(0,n.jsx)(i.h3,{id:"description",children:"Description"}),"\n",(0,n.jsx)(i.p,{children:"This is a description of the receipt processing settings."}),"\n",(0,n.jsx)(i.h3,{id:"prompt",children:"Prompt"}),"\n",(0,n.jsxs)(i.p,{children:["This is the prompt that will be used with the configured AI",(0,n.jsx)(i.img,{alt:"favicon.svg",src:s(43230).A+"",width:"32",height:"32"})]}),"\n",(0,n.jsx)(i.h3,{id:"ocr-engine",children:"OCR Engine"}),"\n",(0,n.jsxs)(i.p,{children:["This is the OCR Engine that will be used with the configured AI. Currently, Tesseract, and Easy OCR are the supported\nengines. Check out\nthe ",(0,n.jsx)(i.a,{href:"/docs/concepts/ocr",children:"OCR Engine"})," documentation for more information."]}),"\n",(0,n.jsx)(i.h3,{id:"ai-type",children:"AI Type"}),"\n",(0,n.jsx)(i.p,{children:"This is the type of AI that will be used with the configured OCR Engine. Currently, Open AI, Open AI Custom, Gemini, and\nOllama are supported."}),"\n",(0,n.jsx)(i.h2,{id:"managing-open-aigemini-receipt-processing-settings",children:"Managing Open AI/Gemini Receipt Processing Settings"}),"\n",(0,n.jsx)(i.p,{children:"When selecting Open AI or Gemini as the AI Type, the following fields will be displayed:"}),"\n",(0,n.jsx)(i.p,{children:(0,n.jsx)(i.img,{alt:"Receipt Processing Settings Open AI",src:s(13943).A+"",width:"2256",height:"1281"})}),"\n",(0,n.jsx)(i.h3,{id:"api-key",children:"API Key"}),"\n",(0,n.jsx)(i.p,{children:"This is the API key that will be used with Open AI, or Gemini."}),"\n",(0,n.jsx)(i.p,{children:"The key is stored encrypted in the database using AES 128 encryption, and it is never exposed in the UI, or transmitted\nto the frontend.\nThus, when editing the API key, it will replace the existing key. A confirmation dialog will be displayed to confirm the\nchange."}),"\n",(0,n.jsx)(i.h3,{id:"model",children:"Model"}),"\n",(0,n.jsxs)(i.p,{children:["Model that will be used with Open AI. Model names can be found here: ",(0,n.jsx)(i.a,{href:"https://platform.openai.com/docs/models",children:"https://platform.openai.com/docs/models"}),"."]}),"\n",(0,n.jsx)(i.h3,{id:"use-vision-openai-only",children:"Use Vision? (OpenAI Only)"}),"\n",(0,n.jsxs)(i.p,{children:["This checkbox determines whether the AI will use vision. If checked, OCR will not be used and the image will be sent to\nthe model in the format described here: ",(0,n.jsx)(i.a,{href:"https://platform.openai.com/docs/guides/vision",children:"https://platform.openai.com/docs/guides/vision"}),"."]}),"\n",(0,n.jsx)(i.p,{children:"Models that can perform vision are gpt-4o and gpt-4o-mini."}),"\n",(0,n.jsx)(i.h2,{id:"managing-open-ai-customollama-receipt-processing-settings",children:"Managing Open AI Custom/Ollama Receipt Processing Settings"}),"\n",(0,n.jsx)(i.p,{children:"When selecting the Open AI Custom or Ollama as the AI Type, the following fields will be displayed:"}),"\n",(0,n.jsx)(i.p,{children:(0,n.jsx)(i.img,{alt:"Receipt Processing Settings Open AI Custom",src:s(54812).A+"",width:"2256",height:"1281"})}),"\n",(0,n.jsx)(i.h3,{id:"url",children:"URL"}),"\n",(0,n.jsx)(i.p,{children:"When the type is:"}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsxs)(i.li,{children:["Open AI Custom: This is the full URL to the completion endpoint, such as: ",(0,n.jsx)(i.a,{href:"http://192.168.0.1:1234/v1/chat/completions",children:"http://192.168.0.1:1234/v1/chat/completions"}),"."]}),"\n",(0,n.jsxs)(i.li,{children:["Ollama: This is the FULL URL to the Ollama API, such as: ",(0,n.jsx)(i.a,{href:"http://192.168.0.118:11434/api/chat",children:"http://192.168.0.118:11434/api/chat"})," (Ollama v0.3.0 and above\nsupported on the latest Receipt Wrangler version.)"]}),"\n"]}),"\n",(0,n.jsx)(i.h3,{id:"model-ollama-only",children:"Model (Ollama Only)"}),"\n",(0,n.jsx)(i.p,{children:"This is the model that will be used with Open AI Custom, or Ollama."}),"\n",(0,n.jsx)(i.h3,{id:"use-vision-ollama-only",children:"Use Vision? (Ollama Only)"}),"\n",(0,n.jsxs)(i.p,{children:["This checkbox determines whether the AI will use vision. If checked, OCR will not be used and the image will be sent\ndirectly to the model in the message. The image is sent in the format described\nhere ",(0,n.jsx)(i.a,{href:"https://github.com/ollama/ollama/blob/main/docs/api.md#chat-request-with-images",children:"https://github.com/ollama/ollama/blob/main/docs/api.md#chat-request-with-images"}),"."]}),"\n",(0,n.jsx)(i.h2,{id:"system-tasks",children:"System Tasks"}),"\n",(0,n.jsx)(i.p,{children:"After creating Receipt Processing Settings, system tasks will be created as these settings are being used. Currently,\nsystem tasks are generated when these settings are used to: Quick Scan, Magic Fill or use in Email Integrations."}),"\n",(0,n.jsx)(i.h3,{id:"receipt-processing-settings-connectivity-check",children:"Receipt Processing Settings Connectivity Check"}),"\n",(0,n.jsx)(i.p,{children:"This task is either a true or false. If succeeded, the API was able to connect to the AI server, and set a chat\ncompletion, and the AI has responded. If failed, the API was not able to connect to the AI server, or there was some\nproblem with the chat completion. The resulting error is stored in the task."}),"\n",(0,n.jsx)(i.h3,{id:"quick-scanmagic-fill",children:"Quick Scan/Magic Fill"}),"\n",(0,n.jsx)(i.p,{children:(0,n.jsx)(i.img,{alt:"Receipt Processing Settings System Task",src:s(9483).A+"",width:"3840",height:"2048"})}),"\n",(0,n.jsx)(i.p,{children:"This is an example of a system task created from a Quick Scan. The magic fill system task is the same, except there is\nno Receipt Uploaded step."}),"\n",(0,n.jsx)(i.p,{children:"What we are able to see, is each of the steps in the processing pipeline, the start time, end time, and the status each\nstep."}),"\n",(0,n.jsx)(i.p,{children:"In this example, I quick scanned a Receipt, and we can see the following steps:"}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsx)(i.li,{children:"Raw OCR Processing Details: This is the raw OCR data that was extracted from the image, it has not been modified in\nany way."}),"\n",(0,n.jsx)(i.li,{children:"Raw Chat Completion Details: This is the raw response from whichever AI was used. In this example, open AI was used,\nand we can see the raw response here."}),"\n",(0,n.jsx)(i.li,{children:"Receipt Uploaded: This is the raw receipt that was uploaded to the system."}),"\n"]}),"\n",(0,n.jsx)(i.p,{children:"These system tasks make it extremely easy to debug issues with the AI, or somewhere else in the process. This is\nespecially important, if administrators choose to use customized prompts, then this table will help figure out what's\ngoing on, and which parts may be failing."})]})}function d(e={}){const{wrapper:i}={...(0,c.R)(),...e.components};return i?(0,n.jsx)(i,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}},43230:(e,i,s)=>{s.d(i,{A:()=>t});const t="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIiIGhlaWdodD0iMzIiIHZpZXdCb3g9IjAgMCAzMiAzMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3QgeD0iMTkiIHk9IjE1IiB3aWR0aD0iMTMiIGhlaWdodD0iMiIgZmlsbD0iI0ZGRDYwMCIvPgo8cGF0aCBkPSJNMy4zNTEzNSAzLjI0MzI0TDkuMDgxMDggMTUuMzUxNEwwIDI5LjA4MTFMMTMuNjIxNiAzMkwxNy40MDU0IDE1LjQwMTVWMEwzLjM1MTM1IDMuMjQzMjRaIiBmaWxsPSIjMjdCMUZGIi8+CjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMTQgMjBDMTcuMzEzNyAyMCAyMCAxOC4yMDkxIDIwIDE2QzIwIDEzLjc5MDkgMTcuMzEzNyAxMiAxNCAxMkMxMC42ODYzIDEyIDggMTMuNzkwOSA4IDE2QzggMTguMjA5MSAxMC42ODYzIDIwIDE0IDIwWk0xMy41IDE2QzE1Ljk4NTMgMTYgMTggMTUuMzI4NCAxOCAxNC41QzE4IDEzLjY3MTYgMTUuOTg1MyAxMyAxMy41IDEzQzExLjAxNDcgMTMgOSAxMy42NzE2IDkgMTQuNUM5IDE1LjMyODQgMTEuMDE0NyAxNiAxMy41IDE2WiIgZmlsbD0iI0ZGRDYwMCIvPgo8cGF0aCBkPSJNOS4wODEyMiAxNS4yNDMyTDcuNDU5NTkgMTJMMTcuNDA1NSAxMC4yNzAzVjE1LjI0MzJIOS4wODEyMloiIGZpbGw9IiMyN0IxRkYiLz4KPC9zdmc+Cg=="},71023:(e,i,s)=>{s.d(i,{A:()=>t});const t=s.p+"assets/images/empty-form-7e8c74b2ef16b233b2efb6c739302bb7.png"},54812:(e,i,s)=>{s.d(i,{A:()=>t});const t=s.p+"assets/images/ollama-form-e6533b39d36e30fabe57a8d690354bb3.png"},13943:(e,i,s)=>{s.d(i,{A:()=>t});const t=s.p+"assets/images/open-ai-form-e276194124161291e1299b4eee431f32.png"},9483:(e,i,s)=>{s.d(i,{A:()=>t});const t=s.p+"assets/images/system-tasks-bf5f54a4c5ebcd131ca184ff4b220e34.png"},90437:(e,i,s)=>{s.d(i,{A:()=>t});const t=s.p+"assets/images/table-366d555f8916db2e51de8f28b5111738.png"},10787:(e,i,s)=>{s.d(i,{A:()=>t});const t=s.p+"assets/images/system-settings-arrow-a5bd1af841f1a7fa152cd7d20fd30be4.png"},28453:(e,i,s)=>{s.d(i,{R:()=>l,x:()=>a});var t=s(96540);const n={},c=t.createContext(n);function l(e){const i=t.useContext(c);return t.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function a(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:l(e.components),t.createElement(c.Provider,{value:i},e.children)}}}]);