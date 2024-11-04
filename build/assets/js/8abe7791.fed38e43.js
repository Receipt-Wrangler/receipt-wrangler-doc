"use strict";(self.webpackChunkreceipt_wrangler_doc=self.webpackChunkreceipt_wrangler_doc||[]).push([[2901],{22930:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>l,contentTitle:()=>r,default:()=>h,frontMatter:()=>o,metadata:()=>s,toc:()=>c});const s=JSON.parse('{"id":"configuration/configuration","title":"config.prod.json Setup","description":"Receipt Wrangler has one main configuration file to set up. In a production environment, this file","source":"@site/docs/configuration/configuration.md","sourceDirName":"configuration","slug":"/configuration/","permalink":"/docs/next/configuration/","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{},"sidebar":"tutorialSidebar","previous":{"title":"Configuration","permalink":"/docs/next/category/configuration"},"next":{"title":"Self-hosted AI","permalink":"/docs/next/configuration/self-hosted-ai"}}');var t=i(74848),a=i(28453);const o={},r="config.prod.json Setup",l={},c=[{value:"Misc",id:"misc",level:2},{value:"AiSettings",id:"aisettings",level:2},{value:"EmailSettings",id:"emailsettings",level:2},{value:"Features",id:"features",level:2},{value:"Database",id:"database",level:2}];function d(e){const n={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,a.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.header,{children:(0,t.jsx)(n.h1,{id:"configprodjson-setup",children:"config.prod.json Setup"})}),"\n",(0,t.jsxs)(n.p,{children:["Receipt Wrangler has one main configuration file to set up. In a production environment, this file\nis ",(0,t.jsx)(n.code,{children:"config.prod.json"}),"."]}),"\n",(0,t.jsx)(n.h1,{id:"configuration",children:"Configuration"}),"\n",(0,t.jsx)(n.p,{children:"Sample config:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'{\n  "secretKey": "secretKey",\n  "aiSettings": {\n    "type": "openAi",\n    "url": "http://192.168.0.1:1234/v1/chat/completions",\n    "key": "openAiKey",\n    "model": "model",\n    "numWorkers": 1,\n    "ocrEngine": "tesseract"\n  },\n  "emailPollingInterval": 1800,\n  "emailSettings": [\n    {\n      "host": "emailHost",\n      "port": "emailPort",\n      "username": "emailAddress",\n      "password": "password/apiKey"\n    }\n  ],\n  "features": {\n    "enableLocalSignUp": true,\n    "aiPoweredReceipts": true\n  },\n  "database": {\n    "rootPassword": "root",\n    "user": "wrangler",\n    "password": "changeMe",\n    "name": "wrangler",\n    "host": "localhost",\n    "port": 3306,\n    "engine": "sqlite",\n    "filename": "wrangler.sqlite"\n  }\n}\n'})}),"\n",(0,t.jsx)(n.h2,{id:"misc",children:"Misc"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"secretKey: This key is used to sign jwts generated from the server."}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"aisettings",children:"AiSettings"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["aiSettings.type: Options are:","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"openAi"}),"\n",(0,t.jsx)(n.li,{children:"openAiCustom"}),"\n",(0,t.jsx)(n.li,{children:"gemini"}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.li,{children:"aiSettings.model: This value is currently only used when the type is set to openAiCustom. This field is optional, but\nallows the model to be explicit, instead of whichever model is currently loaded on the server."}),"\n",(0,t.jsxs)(n.li,{children:["aiSettings.url: This value is only used if the type is set to openAiCustom.\nF.ex, ",(0,t.jsx)(n.a,{href:"http://192.168.0.200:3000/api/v1/chat/completions",children:"http://192.168.0.200:3000/api/v1/chat/completions"})]}),"\n",(0,t.jsx)(n.li,{children:"aiSettings.key: API key used for openAi, and gemini"}),"\n",(0,t.jsxs)(n.li,{children:["aiSettings.numWorkers: Applies to Quick Scan and defaults to 1. This value limits how many GoRoutines can run ",(0,t.jsx)(n.em,{children:"per"}),"\nquick scan request.\nFor example, if this\nvalue is set to 2, and Jen and Bob quick scan 5 files each at the same time, then Jen and Bob will have at max two of\ntheir\nfiles each processed in parallel. GoRoutines are much lighter than threads, so this value can be higher. The value\ndepends on memory resources, and instance size. If you have a small instance, a value between 5 or 10 could be fine.\nOn a server with a lot of traffic, then a value like 1 or 2 would be more appropriate. If you're not sure, set it to 3\nand test it out. If the server runs out of memory, it may crash, and you'll need to lower the value."]}),"\n",(0,t.jsxs)(n.li,{children:["ocrEngine: This value determines what OCR engine to use when reading receipts. Check\nout ",(0,t.jsx)(n.a,{href:"/docs/concepts/ocr",children:"the ocr docs"}),"\nfor more\ndetail. The supported options are:","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"tesseract"}),"\n",(0,t.jsx)(n.li,{children:"easyOcr"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"emailsettings",children:"EmailSettings"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"emailPollingInterval: This tells the API how often to check the configured email, in seconds"}),"\n",(0,t.jsx)(n.li,{children:"emailSettings.host: Email provider's imap server"}),"\n",(0,t.jsx)(n.li,{children:"emailSettings.port: Email provider's imap port"}),"\n",(0,t.jsx)(n.li,{children:"emailSettings.username: Your email"}),"\n",(0,t.jsx)(n.li,{children:"emailSettings.password: Your password, or API Key when 2fa is enabled"}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"features",children:"Features"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"features.enabledLocalSignUp: This field will enable local sign up. If set to false, then only admins can register\nusers"}),"\n",(0,t.jsx)(n.li,{children:"features.aiPoweredReceipts: This field will enable AI features, such as Magic Fill, Quick Scan, and Email Integration\nif it is setup"}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"database",children:"Database"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"database.rootPassword: This is the root password for the database"}),"\n",(0,t.jsx)(n.li,{children:"database.user: This is the user that will be used to connect to the database"}),"\n",(0,t.jsx)(n.li,{children:"database.password: This is the password for the user that will be used to connect to the database"}),"\n",(0,t.jsx)(n.li,{children:"database.name: This is the name of the database"}),"\n",(0,t.jsx)(n.li,{children:"database.host: This is the host of the database"}),"\n",(0,t.jsx)(n.li,{children:"database.port: This is the port of the database (Only used for postgresql connections)"}),"\n",(0,t.jsx)(n.li,{children:"database.engine: This is the engine of the database. Valid options are: sqlite, mysql, mariadb, and postgresql"}),"\n",(0,t.jsx)(n.li,{children:"database.filename: This is the filename of the sqlite database. This is only used if the engine is set to sqlite"}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},28453:(e,n,i)=>{i.d(n,{R:()=>o,x:()=>r});var s=i(96540);const t={},a=s.createContext(t);function o(e){const n=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),s.createElement(a.Provider,{value:n},e.children)}}}]);