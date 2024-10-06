"use strict";(self.webpackChunkreceipt_wrangler_doc=self.webpackChunkreceipt_wrangler_doc||[]).push([[9727],{4472:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>l,contentTitle:()=>s,default:()=>d,frontMatter:()=>t,metadata:()=>a,toc:()=>c});var r=o(74848),i=o(28453);const t={},s="sqlite",a={id:"configuration-examples/sqlite",title:"sqlite",description:"Below are some examples for a sqlite based configuration.",source:"@site/versioned_docs/version-4.x/configuration-examples/sqlite.md",sourceDirName:"configuration-examples",slug:"/configuration-examples/sqlite",permalink:"/docs/4.x/configuration-examples/sqlite",draft:!1,unlisted:!1,tags:[],version:"4.x",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"postgresql",permalink:"/docs/4.x/configuration-examples/postgresql"},next:{title:"Development",permalink:"/docs/4.x/category/development"}},l={},c=[{value:"Main config",id:"main-config",level:2},{value:"Docker compose microservices",id:"docker-compose-microservices",level:2},{value:"Docker compose monolithic",id:"docker-compose-monolithic",level:2}];function p(e){const n={code:"code",h1:"h1",h2:"h2",header:"header",p:"p",pre:"pre",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"sqlite",children:"sqlite"})}),"\n",(0,r.jsx)(n.p,{children:"Below are some examples for a sqlite based configuration."}),"\n",(0,r.jsx)(n.h2,{id:"main-config",children:"Main config"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-javascript",metastring:'title="config.prod.json"',children:'{\n  "secretKey": "secretKey",\n  "aiSettings": {\n    "type": "openAi",\n    "url": "urlToLocallyHostedLLM",\n    "key": "openAiKey",\n    "numWorkers": 1,\n    "ocrEngine": "tesseract"\n  },\n  "emailPollingInterval": 1800,\n  "emailSettings": [\n    {\n      "host": "emailHost",\n      "port": "emailPort",\n      "username": "emailAddress",\n      "password": "password/apiKey"\n    }\n  ],\n  "features": {\n    "enableLocalSignUp": true,\n    "aiPoweredReceipts": true\n  },\n  "database": {\n    "engine": "sqlite",\n    "filename": "wrangler.sqlite"\n  }\n}\n\n'})}),"\n",(0,r.jsx)(n.h2,{id:"docker-compose-microservices",children:"Docker compose microservices"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",metastring:'title="docker-compose.yaml"',children:'version: "3.5"\nservices:\n  api:\n    image: noah231515/receipt-wrangler-api:latest\n    restart: always\n    working_dir: /go/api\n    command: ./api --env prod\n    ports:\n      - 9080:8081\n    volumes:\n      - ./config:/go/api/config\n      - ./data:/go/api/data\n      - ./sqlite:/go/api/sqlite\n      - ./logs:/go/api/logs\n  proxy:\n    image: noah231515/receipt-wrangler-proxy:latest\n    ports:\n      - 9082:80\n    depends_on:\n      - api\n      - frontend\n\n  frontend:\n    image: noah231515/receipt-wrangler-desktop:latest\n    restart: always\n    ports:\n      - 9081:80\n'})}),"\n",(0,r.jsx)(n.h2,{id:"docker-compose-monolithic",children:"Docker compose monolithic"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",metastring:'title="docker-compose.yaml"',children:"services:\n  wrangler:\n    image: noah231515/receipt-wrangler:latest\n    entrypoint: ./entrypoint.sh\n    restart: always\n    environment:\n      DB_FILENAME: wrangler.sqlite\n      DB_ENGINE: sqlite\n    volumes:\n      - ./config:/app/receipt-wrangler-api/config\n      - ./data:/app/receipt-wrangler-api/data\n      - ./sqlite:/app/receipt-wrangler-api/sqlite\n      - ./logs:/app/receipt-wrangler-api/logs\n    depends_on:\n      db:\n        condition: service_healthy\n    ports:\n      - 9082:80\n"})})]})}function d(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(p,{...e})}):p(e)}},28453:(e,n,o)=>{o.d(n,{R:()=>s,x:()=>a});var r=o(96540);const i={},t=r.createContext(i);function s(e){const n=r.useContext(t);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),r.createElement(t.Provider,{value:n},e.children)}}}]);