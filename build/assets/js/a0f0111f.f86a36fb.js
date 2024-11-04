"use strict";(self.webpackChunkreceipt_wrangler_doc=self.webpackChunkreceipt_wrangler_doc||[]).push([[2133],{4303:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>h,frontMatter:()=>i,metadata:()=>o,toc:()=>d});const o=JSON.parse('{"id":"configuration/self-hosted-ai","title":"Self-hosted AI","description":"Receipt Wrangler can be configured to use a locally hosted LLM (Large Language Model) server that is OpenAI Compliant,","source":"@site/versioned_docs/version-5.x/configuration/self-hosted-ai.md","sourceDirName":"configuration","slug":"/configuration/self-hosted-ai","permalink":"/docs/configuration/self-hosted-ai","draft":false,"unlisted":false,"tags":[],"version":"5.x","frontMatter":{},"sidebar":"tutorialSidebar","previous":{"title":"Environment Variables","permalink":"/docs/configuration/environment-variables"},"next":{"title":"Configuration Examples","permalink":"/docs/category/configuration-examples"}}');var s=t(74848),r=t(28453);const i={},a="Self-hosted AI",l={},d=[{value:"AI Server",id:"ai-server",level:2},{value:"Ollama",id:"ollama",level:2},{value:"LLM Configuration",id:"llm-configuration",level:2}];function c(e){const n={a:"a",admonition:"admonition",br:"br",h1:"h1",h2:"h2",header:"header",p:"p",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"self-hosted-ai",children:"Self-hosted AI"})}),"\n",(0,s.jsx)(n.p,{children:"Receipt Wrangler can be configured to use a locally hosted LLM (Large Language Model) server that is OpenAI Compliant,\ninstead of OpenAI or\nGemini.\nThis way, users can have more control over the model used, the hardware involved, and of course, privacy."}),"\n",(0,s.jsx)(n.p,{children:"Below we'll go over some recommendations for setting up a locally hosted LLM server."}),"\n",(0,s.jsx)(n.h2,{id:"ai-server",children:"AI Server"}),"\n",(0,s.jsx)(n.admonition,{type:"warning",children:(0,s.jsxs)(n.p,{children:["Some LLM servers do not allow for listening on all network interfaces (localhost only), such as GPT4All.",(0,s.jsx)(n.br,{}),"\n","This will only be an issue if the AI server is on a different machine than the Receipt Wrangler server, so we will want\nto\nkeep this in mind as we chose what server to use."]})}),"\n",(0,s.jsx)(n.h2,{id:"ollama",children:"Ollama"}),"\n",(0,s.jsx)(n.p,{children:"Ollama is by far the easiest LLM to set up and get running and it is the recommended option for self-hosted."}),"\n",(0,s.jsx)(n.p,{children:"It is meant\nto be made easy to run, so model parameters are\npreset for\nease of use. Ollama is FOSS, and runs very well on hardware with low VRAM, such as an RTX 3060ti which has 8gb of VRAM.\nIt can still run llama3 8b models, with good results."}),"\n",(0,s.jsxs)(n.p,{children:["Take a look at ",(0,s.jsx)(n.a,{href:"https://github.com/ollama/ollama",children:"Ollama's Github page"})," to set it up, and then follow the\n",(0,s.jsx)(n.a,{href:"/docs/concepts/system-settings/receipt-processing-settings",children:"Receipt Wrangler"}),"\ndocumentation to configure it."]}),"\n",(0,s.jsx)(n.h2,{id:"llm-configuration",children:"LLM Configuration"}),"\n",(0,s.jsx)(n.p,{children:"Receipt Wrangler has been tested with an RTX 3060Ti using LM Studio on Ubuntu 22.04.4 LTS (Virtualized) with Mistral 7B\nInstruct models with pretty good results, however, it should be considered the bare minimum due to the low amount of\nVRAM. The context length can be large with use in Receipt Wrangler, so the more VRAM the better. Somewhere between 8gb\nand 16gb should be sufficient."}),"\n",(0,s.jsx)(n.p,{children:"Anything with similar or better specs should work well. As far as models go, it is recommended to try different models\nto see which one works\nbest."}),"\n",(0,s.jsx)(n.p,{children:"If using a GPU with low VRAM, it is recommended to use smaller models, such as 8b models, and smaller."})]})}function h(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>i,x:()=>a});var o=t(96540);const s={},r=o.createContext(s);function i(e){const n=o.useContext(r);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),o.createElement(r.Provider,{value:n},e.children)}}}]);