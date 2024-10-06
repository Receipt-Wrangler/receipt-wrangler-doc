"use strict";(self.webpackChunkreceipt_wrangler_doc=self.webpackChunkreceipt_wrangler_doc||[]).push([[2978],{90723:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>s,metadata:()=>a,toc:()=>l});var r=o(74848),t=o(28453);const s={},i="sqlite",a={id:"configuration-examples/sqlite",title:"sqlite",description:"Below are some examples for a sqlite based configuration.",source:"@site/versioned_docs/version-5.x/configuration-examples/sqlite.md",sourceDirName:"configuration-examples",slug:"/configuration-examples/sqlite",permalink:"/docs/configuration-examples/sqlite",draft:!1,unlisted:!1,tags:[],version:"5.x",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"postgresql",permalink:"/docs/configuration-examples/postgresql"},next:{title:"Development",permalink:"/docs/category/development"}},c={},l=[{value:"Docker compose microservices",id:"docker-compose-microservices",level:2},{value:"Docker compose monolithic",id:"docker-compose-monolithic",level:2}];function p(e){const n={code:"code",h1:"h1",h2:"h2",header:"header",p:"p",pre:"pre",...(0,t.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"sqlite",children:"sqlite"})}),"\n",(0,r.jsx)(n.p,{children:"Below are some examples for a sqlite based configuration."}),"\n",(0,r.jsx)(n.h2,{id:"docker-compose-microservices",children:"Docker compose microservices"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",metastring:'title="docker-compose.yaml"',children:'version: "3.5"\nservices:\n  api:\n    image: noah231515/receipt-wrangler-api:latest\n    restart: always\n    working_dir: /go/api\n    command: ./api --env prod\n    ports:\n      - 9080:8081\n    volumes:\n      - ./data:/go/api/data\n      - ./sqlite:/go/api/sqlite\n      - ./logs:/go/api/logs\n    environment:\n      - ENCRYPTION_KEY=encryptionKey\n      - SECRET_KEY=secretKey\n      - DB_ENGINE=sqlite\n      - DB_FILENAME=wrangler.sqlite\n  proxy:\n    image: noah231515/receipt-wrangler-proxy:latest\n    ports:\n      - 9082:80\n    depends_on:\n      - api\n      - frontend\n\n  frontend:\n    image: noah231515/receipt-wrangler-desktop:latest\n    restart: always\n    ports:\n      - 9081:80\n'})}),"\n",(0,r.jsx)(n.h2,{id:"docker-compose-monolithic",children:"Docker compose monolithic"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",metastring:'title="docker-compose.yaml"',children:"services:\n  wrangler:\n    image: noah231515/receipt-wrangler:latest\n    entrypoint: ./entrypoint.sh\n    restart: always\n    environment:\n      - ENCRYPTION_KEY=encryptionKey\n      - SECRET_KEY=secretKey\n      - DB_ENGINE=sqlite\n      - DB_FILENAME=wrangler.sqlite\n    volumes:\n      - ./data:/app/receipt-wrangler-api/data\n      - ./sqlite:/app/receipt-wrangler-api/sqlite\n      - ./logs:/app/receipt-wrangler-api/logs\n    ports:\n      - 9082:80\n"})})]})}function d(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(p,{...e})}):p(e)}},28453:(e,n,o)=>{o.d(n,{R:()=>i,x:()=>a});var r=o(96540);const t={},s=r.createContext(t);function i(e){const n=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:i(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);