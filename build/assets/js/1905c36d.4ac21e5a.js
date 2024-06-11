"use strict";(self.webpackChunkreceipt_wrangler_doc=self.webpackChunkreceipt_wrangler_doc||[]).push([[9700],{53348:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>i,contentTitle:()=>o,default:()=>d,frontMatter:()=>c,metadata:()=>a,toc:()=>p});var r=s(74848),n=s(28453);const c={},o="Ocr",a={id:"concepts/ocr",title:"Ocr",description:"Ocr (Optical Character Recognition) is used in Receipt Wrangler to read the text from receipts. Receipt Wrangler",source:"@site/versioned_docs/version-5.x/concepts/ocr.md",sourceDirName:"concepts",slug:"/concepts/ocr",permalink:"/docs/concepts/ocr",draft:!1,unlisted:!1,tags:[],version:"5.x",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Email",permalink:"/docs/concepts/email"},next:{title:"System Tasks",permalink:"/docs/concepts/system-tasks"}},i={},p=[{value:"Tesseract",id:"tesseract",level:2},{value:"EasyOCR",id:"easyocr",level:2}];function l(e){const t={br:"br",h1:"h1",h2:"h2",p:"p",...(0,n.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h1,{id:"ocr",children:"Ocr"}),"\n",(0,r.jsx)(t.p,{children:"Ocr (Optical Character Recognition) is used in Receipt Wrangler to read the text from receipts. Receipt Wrangler\ncurrently supports two different OCR engines: Tesseract and EasyOCR."}),"\n",(0,r.jsx)(t.h2,{id:"tesseract",children:"Tesseract"}),"\n",(0,r.jsxs)(t.p,{children:["Tesseract is the default engine for Receipt Wrangler. In general, it is faster, but less accurate than EasyOCR.",(0,r.jsx)(t.br,{}),"\n","On a Ryzen 7 7840U (8 core/16 thread 5.1ghz boost) laptop, it takes about 2 seconds to process the image, and run OCR\nfrom a scan from the mobile app."]}),"\n",(0,r.jsx)(t.p,{children:"Tesseract performs best with app screenshots, or photos with very little noise, and alignment(skew) issues."}),"\n",(0,r.jsx)(t.h2,{id:"easyocr",children:"EasyOCR"}),"\n",(0,r.jsx)(t.p,{children:"EasyOCR is much slower than tesseract, but also much more accurate on photos of receipts, or receipts with more noise,\nor alignment(skew) issues. On the same Ryzen laptop from above, it takes about 10 seconds to process the image, and run\nOCR with much better results."}),"\n",(0,r.jsx)(t.p,{children:"EasyOCR is an all around performer, with the sacrifice of speed. It is recommended to use this engine if the instance\nhas a faster CPU, or prefers higher accuracy."})]})}function d(e={}){const{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},28453:(e,t,s)=>{s.d(t,{R:()=>o,x:()=>a});var r=s(96540);const n={},c=r.createContext(n);function o(e){const t=r.useContext(c);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:o(e.components),r.createElement(c.Provider,{value:t},e.children)}}}]);