"use strict";(self.webpackChunkreceipt_wrangler_doc=self.webpackChunkreceipt_wrangler_doc||[]).push([[3955],{69353:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>s,default:()=>h,frontMatter:()=>r,metadata:()=>l,toc:()=>c});var o=t(74848),i=t(28453);const r={},s="Self-hosted AI",l={id:"configuration/self-hosted-ai",title:"Self-hosted AI",description:"Receipt Wrangler can be configured to use a locally hosted LLM (Large Language Model) server that is OpenAI Compliant,",source:"@site/docs/configuration/self-hosted-ai.md",sourceDirName:"configuration",slug:"/configuration/self-hosted-ai",permalink:"/docs/next/configuration/self-hosted-ai",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"config.prod.json Setup",permalink:"/docs/next/configuration/"},next:{title:"Configuration Examples",permalink:"/docs/next/category/configuration-examples"}},a={},c=[{value:"AI Server",id:"ai-server",level:2},{value:"LLM Configuration",id:"llm-configuration",level:2}];function d(e){const n={a:"a",admonition:"admonition",br:"br",code:"code",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",...(0,i.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h1,{id:"self-hosted-ai",children:"Self-hosted AI"}),"\n",(0,o.jsx)(n.p,{children:"Receipt Wrangler can be configured to use a locally hosted LLM (Large Language Model) server that is OpenAI Compliant,\ninstead of OpenAI or\nGemini.\nThis way, users can have more control over the model used, the hardware involved, and of course, privacy."}),"\n",(0,o.jsx)(n.p,{children:"Below we'll go over some recommendations for setting up a locally hosted LLM server."}),"\n",(0,o.jsx)(n.h2,{id:"ai-server",children:"AI Server"}),"\n",(0,o.jsx)(n.admonition,{type:"warning",children:(0,o.jsxs)(n.p,{children:["Some LLM servers do not allow for listening on all network interfaces (localhost only), such as GPT4All.",(0,o.jsx)(n.br,{}),"\n","This will only be an issue if the AI server is on a different machine than the Receipt Wrangler server, so we will want\nto\nkeep this in mind as we chose what server to use."]})}),"\n",(0,o.jsxs)(n.p,{children:["The recommended server is ",(0,o.jsx)(n.a,{href:"https://lmstudio.ai/",children:"LM Studio"}),"."]}),"\n",(0,o.jsx)(n.p,{children:"LM Studio is free, and the server is very easy to use. Out of the box, it listens on all network interfaces."}),"\n",(0,o.jsx)(n.p,{children:"To set up LM Studio for use in Receipt Wrangler:"}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsx)(n.li,{children:"Download and install LM Studio on the machine you want to run the AI model on."}),"\n",(0,o.jsx)(n.li,{children:"Download the model you want to use."}),"\n",(0,o.jsx)(n.li,{children:"Load the model you want to use in LM Studio."}),"\n",(0,o.jsx)(n.li,{children:"Navigate to the local server page by clicking the local server on the sidebar."}),"\n",(0,o.jsx)(n.li,{children:"Turn formatted responses off."}),"\n",(0,o.jsx)(n.li,{children:"Start server."}),"\n",(0,o.jsxs)(n.li,{children:["In your ",(0,o.jsx)(n.code,{children:"config.prod.json"})," file, set the ",(0,o.jsx)(n.code,{children:"aiSettings.type"})," to ",(0,o.jsx)(n.code,{children:"openAiCustom"}),", and optionally set ",(0,o.jsx)(n.code,{children:"model"}),"."]}),"\n",(0,o.jsxs)(n.li,{children:["Set the ",(0,o.jsx)(n.code,{children:"aiSettings.url"})," to the URL of the LM Studio server (f.ex ",(0,o.jsx)(n.a,{href:"http://192.168.0.1:1234/v1/chat/completions",children:"http://192.168.0.1:1234/v1/chat/completions"}),")."]}),"\n"]}),"\n",(0,o.jsxs)(n.p,{children:["In general this process will be practically the same for every other AI server, but the specifics will vary.\nFor some alternatives, take a look at ",(0,o.jsx)(n.a,{href:"https://github.com/premAI-io/state-of-open-source-ai/blob/main/desktop-apps.md",children:"https://github.com/premAI-io/state-of-open-source-ai/blob/main/desktop-apps.md"})]}),"\n",(0,o.jsx)(n.h2,{id:"llm-configuration",children:"LLM Configuration"}),"\n",(0,o.jsx)(n.p,{children:"Receipt Wrangler has been tested with an RTX 3060Ti using LM Studio on Ubuntu 22.04.4 LTS (Virtualized) with Mistral 7B\nInstruct models with pretty good results, however, it should be considered the bare minimum due to the low amount of\nVRAM. The context length can be large with use in Receipt Wrangler, so the more VRAM the better. Somewhere between 8gb\nand 16gb should be sufficient."}),"\n",(0,o.jsx)(n.p,{children:"Anything with similar or better specs should work well. As far as models go, it is recommended to try different models\nto see which one works\nbest."}),"\n",(0,o.jsx)(n.p,{children:"Google Gemma 2b models are also an excellent choice, for fast inference and are great for GPUs with low VRAM. Gemma\nmodels are\navailable in LM Studio with presets as well."})]})}function h(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>s,x:()=>l});var o=t(96540);const i={},r=o.createContext(i);function s(e){const n=o.useContext(r);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),o.createElement(r.Provider,{value:n},e.children)}}}]);