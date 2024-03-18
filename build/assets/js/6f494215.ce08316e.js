"use strict";(self.webpackChunkreceipt_wrangler_doc=self.webpackChunkreceipt_wrangler_doc||[]).push([[98],{3268:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>l,default:()=>p,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var i=t(4848),r=t(8453);const o={},l="API",s={id:"development/api",title:"API",description:"Receipt Wrangler API is a Go application. Below we'll go through on setting it up in a development environment, and walk",source:"@site/docs/development/api.md",sourceDirName:"development",slug:"/development/api",permalink:"/docs/development/api",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Development",permalink:"/docs/category/development"},next:{title:"Desktop/Web",permalink:"/docs/development/desktop"}},a={},c=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Setup",id:"setup",level:2},{value:"Running the application",id:"running-the-application",level:2},{value:"Tech overview",id:"tech-overview",level:2}];function d(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",ul:"ul",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"api",children:"API"}),"\n",(0,i.jsx)(n.p,{children:"Receipt Wrangler API is a Go application. Below we'll go through on setting it up in a development environment, and walk\nthrough some of the important technologies."}),"\n",(0,i.jsx)(n.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Debian environment (highly recommended)"}),"\n",(0,i.jsxs)(n.li,{children:["Go ",(0,i.jsx)(n.a,{href:"https://go.dev/doc/install",children:"https://go.dev/doc/install"})]}),"\n",(0,i.jsxs)(n.li,{children:["Python 3.8+ ",(0,i.jsx)(n.a,{href:"https://www.python.org/downloads/",children:"https://www.python.org/downloads/"})]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"setup",children:"Setup"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["Clone the repository ",(0,i.jsx)(n.a,{href:"https://github.com/Receipt-Wrangler/receipt-wrangler-api.git",children:"https://github.com/Receipt-Wrangler/receipt-wrangler-api.git"})]}),"\n",(0,i.jsxs)(n.li,{children:["Install tesseract dependencies. If you are running a debian derivative (recommended),\nrun ",(0,i.jsx)(n.code,{children:"sudo sh set-up-tesseract-env.sh"}),", otherwise see ",(0,i.jsx)(n.a,{href:"https://github.com/otiai10/gosseract",children:"https://github.com/otiai10/gosseract"})," for other installation\ndetails."]}),"\n",(0,i.jsxs)(n.li,{children:["Install OpenAPI generator ",(0,i.jsx)(n.a,{href:"https://openapi-generator.tech/docs/installation",children:"https://openapi-generator.tech/docs/installation"})," (I personally use the jar installation)"]}),"\n",(0,i.jsxs)(n.li,{children:["Set up a db instance however you like. Sqlite is the easiest route to go. Otherwise, docker is recommended.\nExample mariadb docker\ncommand: ",(0,i.jsx)(n.code,{children:"docker run --name receipt-wrangler-db -e MYSQL_ROOT_PASSWORD=123456 -e MYSQL_USER=wrangler -e MYSQL_PASSWORD=123456 -e MYSQL_DATABASE=wrangler -p 9001:3306 -d library/mariadb"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:["Add a config.dev.json, and configure as needed. See the ",(0,i.jsx)(n.a,{href:"/docs/configuration",children:"config documentation"})," for more details."]}),"\n",(0,i.jsx)(n.li,{children:"In the terminal navigate to the root project directory"}),"\n",(0,i.jsxs)(n.li,{children:["Run ",(0,i.jsx)(n.code,{children:"go run ."})]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"running-the-application",children:"Running the application"}),"\n",(0,i.jsxs)(n.p,{children:["Once the application is running it will be running on ",(0,i.jsx)(n.code,{children:"http://0.0.0.0:8081"}),", and will accept connections from the mobile\napp, and desktop app."]}),"\n",(0,i.jsx)(n.h2,{id:"tech-overview",children:"Tech overview"}),"\n",(0,i.jsx)(n.p,{children:"This project uses:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Go for API"}),"\n",(0,i.jsx)(n.li,{children:"Python for Imap client"}),"\n",(0,i.jsx)(n.li,{children:"mariadb/mysql/postgresql/sqlite"}),"\n",(0,i.jsx)(n.li,{children:"GORM as the ORM (currently no migration tracking. Any needed data backpops/fixes are done after deployment via\nendpoint)"}),"\n",(0,i.jsx)(n.li,{children:"Overall, no framework is used for the API"}),"\n",(0,i.jsx)(n.li,{children:"Uses built in test runner"}),"\n",(0,i.jsxs)(n.li,{children:["Uses OpenAPI 3.0, maintained by hand to generate clients. Example command to generate\nclient: ",(0,i.jsx)(n.code,{children:"java -jar swagger-codegen-cli.jar generate -i ./receipt-wrangler-api/swagger.yml -o ./receipt-wrangler-core/projects/core/src/lib/api/ -l typescript-angular"})]}),"\n"]})]})}function p(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>l,x:()=>s});var i=t(6540);const r={},o=i.createContext(r);function l(e){const n=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),i.createElement(o.Provider,{value:n},e.children)}}}]);