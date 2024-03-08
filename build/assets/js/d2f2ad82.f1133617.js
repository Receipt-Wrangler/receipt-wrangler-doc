"use strict";(self.webpackChunkreceipt_wrangler_doc=self.webpackChunkreceipt_wrangler_doc||[]).push([[204],{7301:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>l,contentTitle:()=>s,default:()=>d,frontMatter:()=>t,metadata:()=>a,toc:()=>c});var o=n(4848),i=n(8453);const t={},s="sqlite",a={id:"configuration-examples/sqlite",title:"sqlite",description:"Below are some examples for a sqlite based configuration.",source:"@site/docs/configuration-examples/sqlite.md",sourceDirName:"configuration-examples",slug:"/configuration-examples/sqlite",permalink:"/docs/configuration-examples/sqlite",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"postgresql",permalink:"/docs/configuration-examples/postgresql"}},l={},c=[{value:"Main config",id:"main-config",level:2},{value:"Docker compose microservices",id:"docker-compose-microservices",level:2},{value:"Docker compose monolithic",id:"docker-compose-monolithic",level:2}];function p(e){const r={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,i.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(r.h1,{id:"sqlite",children:"sqlite"}),"\n",(0,o.jsx)(r.p,{children:"Below are some examples for a sqlite based configuration."}),"\n",(0,o.jsx)(r.h2,{id:"main-config",children:"Main config"}),"\n",(0,o.jsx)(r.pre,{children:(0,o.jsx)(r.code,{className:"language-javascript",metastring:'title="config.prod.json"',children:'{\r\n  "secretKey": "secretKey",\r\n  "aiSettings": {\r\n    "type": "openAi",\r\n    "url": "urlToLocallyHostedLLM",\r\n    "key": "openAiKey"\r\n  },\r\n  "emailPollingInterval": 1800,\r\n  "emailSettings": [\r\n    {\r\n      "host": "emailHost",\r\n      "port": "emailPort",\r\n      "username": "emailAddress",\r\n      "password": "password/apiKey"\r\n    }\r\n  ],\r\n  "features": {\r\n    "enableLocalSignUp": true,\r\n    "aiPoweredReceipts": true\r\n  },\r\n  "database": {\r\n    "engine": "sqlite",\r\n    "filename": "wrangler.sqlite"\r\n  }\r\n}\r\n\n'})}),"\n",(0,o.jsx)(r.h2,{id:"docker-compose-microservices",children:"Docker compose microservices"}),"\n",(0,o.jsx)(r.pre,{children:(0,o.jsx)(r.code,{className:"language-yaml",metastring:'title="docker-compose.yaml"',children:'version: "3.5"\r\nservices:\r\n  api:\r\n    image: noah231515/receipt-wrangler-api:latest\r\n    restart: always\r\n    working_dir: /go/api\r\n    command: ./api --env prod\r\n    ports:\r\n      - 9080:8081\r\n    volumes:\r\n      - ./config:/go/api/config\r\n      - ./data:/go/api/data\r\n      - ./sqlite:/go/api/sqlite\r\n      - ./logs:/go/api/logs\r\n  proxy:\r\n    image: noah231515/receipt-wrangler-proxy:latest\r\n    ports:\r\n      - 9082:80\r\n    depends_on:\r\n      - api\r\n      - frontend\r\n\r\n  frontend:\r\n    image: noah231515/receipt-wrangler-desktop:latest\r\n    restart: always\r\n    ports:\r\n      - 9081:80\n'})}),"\n",(0,o.jsx)(r.h2,{id:"docker-compose-monolithic",children:"Docker compose monolithic"}),"\n",(0,o.jsx)(r.pre,{children:(0,o.jsx)(r.code,{className:"language-yaml",metastring:'title="docker-compose.yaml"',children:"services:\r\n  wrangler:\r\n    image: noah231515/receipt-wrangler:latest\r\n    entrypoint: ./entrypoint.sh\r\n    restart: always\r\n    environment:\r\n      DB_FILENAME: wrangler.sqlite\r\n      DB_ENGINE: sqlite\r\n    volumes:\r\n      - ./config:/app/receipt-wrangler-api/config\r\n      - ./data:/app/receipt-wrangler-api/data\r\n      - ./sqlite:/app/receipt-wrangler-api/sqlite\r\n      - ./logs:/app/receipt-wrangler-api/logs\r\n    depends_on:\r\n      db:\r\n        condition: service_healthy\r\n    ports:\r\n      - 9082:80\n"})})]})}function d(e={}){const{wrapper:r}={...(0,i.R)(),...e.components};return r?(0,o.jsx)(r,{...e,children:(0,o.jsx)(p,{...e})}):p(e)}},8453:(e,r,n)=>{n.d(r,{R:()=>s,x:()=>a});var o=n(6540);const i={},t=o.createContext(i);function s(e){const r=o.useContext(t);return o.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function a(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),o.createElement(t.Provider,{value:r},e.children)}}}]);