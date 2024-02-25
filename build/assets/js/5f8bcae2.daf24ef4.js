"use strict";(self.webpackChunkreceipt_wrangler_doc=self.webpackChunkreceipt_wrangler_doc||[]).push([[409],{4431:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>l,contentTitle:()=>s,default:()=>p,frontMatter:()=>i,metadata:()=>t,toc:()=>c});var r=a(4848),o=a(8453);const i={},s="Examples",t={id:"configuration-examples/mariadb/examples",title:"Examples",description:"Below are some examples for a mariadb/mysql based configuration.",source:"@site/docs/configuration-examples/mariadb/examples.md",sourceDirName:"configuration-examples/mariadb",slug:"/configuration-examples/mariadb/examples",permalink:"/docs/configuration-examples/mariadb/examples",draft:!1,unlisted:!1,editUrl:"https://github.com/Receipt-Wrangler/docs/configuration-examples/mariadb/examples.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Configuration Examples",permalink:"/docs/category/configuration-examples"},next:{title:"Examples",permalink:"/docs/configuration-examples/postgresql/examples"}},l={},c=[{value:"Config",id:"config",level:2},{value:"Docker compose microservices",id:"docker-compose-microservices",level:2},{value:"Docker compose monolithic",id:"docker-compose-monolithic",level:2}];function m(e){const n={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,o.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"examples",children:"Examples"}),"\n",(0,r.jsx)(n.p,{children:"Below are some examples for a mariadb/mysql based configuration."}),"\n",(0,r.jsx)(n.h2,{id:"config",children:"Config"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-javascript",children:'{\n  "secretKey": "secretKey",\n  "aiSettings": {\n    "type": "openAi",\n    "url": "urlToLocallyHostedLLM",\n    "key": "openAiKey"\n  },\n  "emailPollingInterval": 1800,\n  "emailSettings": [\n    {\n      "host": "emailHost",\n      "port": "emailPort",\n      "username": "emailAddress",\n      "password": "password/apiKey"\n    }\n  ],\n  "features": {\n    "enableLocalSignUp": true,\n    "aiPoweredReceipts": true\n  },\n  "database": {\n    "user": "wrangler",\n    "password": "changeMe",\n    "name": "wrangler",\n    "host": "db:3306",\n    "engine": "mariadb"\n  }\n}\n\n'})}),"\n",(0,r.jsx)(n.h2,{id:"docker-compose-microservices",children:"Docker compose microservices"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",metastring:"docker-compose.yaml",children:'version: "3.5"\nservices:\n  db:\n    image: library/mariadb:10\n    restart: always\n    command: --sql-mode="ANSI_QUOTES"\n    environment:\n      MYSQL_ROOT_PASSWORD: change_me\n      MYSQL_USER: wrangler\n      MYSQL_PASSWORD: change_me\n      MYSQL_DATABASE: wrangler\n    volumes:\n      - ./mariadb:/var/lib/mysql\n    healthcheck:\n      test: ["CMD", "mysqladmin", "ping", "--silent"]\n      interval: 10s\n      timeout: 10s\n      retries: 5\n\n  proxy:\n    image: noah231515/receipt-wrangler-proxy:latest\n    ports:\n      - 9082:80\n    depends_on:\n      - api\n      - frontend\n\n  api:\n    image: noah231515/receipt-wrangler-api:latest\n    restart: always\n    working_dir: /go/api\n    command: ./api --env prod\n    ports:\n      - 9080:8081\n    volumes:\n      - ./config:/go/api/config\n      - ./data:/go/api/data\n      - ./logs:/go/api/logs\n    depends_on:\n      db:\n        condition: service_healthy\n\n  frontend:\n    image: noah231515/receipt-wrangler-desktop:latest\n    restart: always\n    ports:\n      - 9081:80\n'})}),"\n",(0,r.jsx)(n.h2,{id:"docker-compose-monolithic",children:"Docker compose monolithic"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",metastring:"docker-compose.yaml",children:'services:\n  db:\n    image: library/mariadb:10\n    restart: always\n    environment:\n      MYSQL_ROOT_PASSWORD: change_me\n      MYSQL_USER: wrangler\n      MYSQL_PASSWORD: change_me\n      MYSQL_DATABASE: wrangler\n    volumes:\n      - ./mariadb:/var/lib/mysql\n    healthcheck:\n      test: ["CMD", "mysqladmin", "ping", "--silent"]\n      interval: 10s\n      timeout: 10s\n      retries: 5\n\n  wrangler:\n    image: noah231515/receipt-wrangler:latest\n    entrypoint: ./entrypoint.sh\n    restart: always\n    volumes:\n      - ./config:/app/receipt-wrangler-api/config\n      - ./data:/app/receipt-wrangler-api/data\n      - ./sqlite:/app/receipt-wrangler-api/sqlite\n    depends_on:\n      db:\n        condition: service_healthy\n    ports:\n      - 9082:80\n'})})]})}function p(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(m,{...e})}):m(e)}},8453:(e,n,a)=>{a.d(n,{R:()=>s,x:()=>t});var r=a(6540);const o={},i=r.createContext(o);function s(e){const n=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function t(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);