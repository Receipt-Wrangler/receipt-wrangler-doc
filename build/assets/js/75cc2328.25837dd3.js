"use strict";(self.webpackChunkreceipt_wrangler_doc=self.webpackChunkreceipt_wrangler_doc||[]).push([[26],{3586:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>h,frontMatter:()=>s,metadata:()=>r,toc:()=>c});var n=i(4848),a=i(8453);const s={},l="Email",r={id:"concepts/email",title:"Email",description:"Email integration is a way for users to upload receipts to a group, as a different way to get receipts into the system.",source:"@site/docs/concepts/email.md",sourceDirName:"concepts",slug:"/concepts/email",permalink:"/docs/concepts/email",draft:!1,unlisted:!1,editUrl:"https://github.com/Receipt-Wrangler/docs/concepts/email.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"AI",permalink:"/docs/concepts/ai"},next:{title:"Configuration",permalink:"/docs/category/configuration"}},o={},c=[{value:"Configuration",id:"configuration",level:2},{value:"Group Settings",id:"group-settings",level:2},{value:"Enable Email Integration",id:"enable-email-integration",level:3},{value:"Email to Read Receipts From field",id:"email-to-read-receipts-from-field",level:3},{value:"Subject Line Regexes",id:"subject-line-regexes",level:3},{value:"Email Whitelist",id:"email-whitelist",level:3},{value:"Default Paid By",id:"default-paid-by",level:3},{value:"Default Status",id:"default-status",level:3},{value:"Caveats",id:"caveats",level:3},{value:"Email attachments",id:"email-attachments",level:4},{value:"Multiple attachments",id:"multiple-attachments",level:4},{value:"Overlapping Configurations",id:"overlapping-configurations",level:4}];function d(e){const t={a:"a",admonition:"admonition",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",ol:"ol",p:"p",...(0,a.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"email",children:"Email"}),"\n",(0,n.jsx)(t.p,{children:"Email integration is a way for users to upload receipts to a group, as a different way to get receipts into the system.\nMultiple images can be sent in attachements, and each image will be assumed to be a different receipt. If the image is malformed (corrupted, not acutally an image), then the file will not be processed."}),"\n",(0,n.jsx)(t.h2,{id:"configuration",children:"Configuration"}),"\n",(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsxs)(t.li,{children:["Modify config.prod.json. Check out ",(0,n.jsx)(t.a,{href:"/docs/configuration#emailsettings",children:"the Email configuration section"})," to see how to set it up."]}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:"All of the emails configured in emailSettings will be polled every polling interval, to read unread emails, and process those that match the group settings, set up in the next step."}),"\n",(0,n.jsxs)(t.ol,{start:"2",children:["\n",(0,n.jsx)(t.li,{children:"Modify group settings\nOnce the email credentials are added to the config, we need to update our group settings to actually read from that email address. The group's settings can be found by clicking on your user avatar, clicking manage groups, then clicking on the edit pencil of the group you'd like to edit."}),"\n"]}),"\n",(0,n.jsx)(t.h2,{id:"group-settings",children:"Group Settings"}),"\n",(0,n.jsx)(t.h3,{id:"enable-email-integration",children:"Enable Email Integration"}),"\n",(0,n.jsx)(t.p,{children:"This field will enable the integration. After the email is enabled, a connection will be attempted to be made to the configured email address on the next polling interval."}),"\n",(0,n.jsx)(t.h3,{id:"email-to-read-receipts-from-field",children:"Email to Read Receipts From field"}),"\n",(0,n.jsx)(t.p,{children:'The "Email to Read Receipts From" field must match a username from the email settings configured in the last step, this will tell the api that this group is using this email.'}),"\n",(0,n.jsx)(t.h3,{id:"subject-line-regexes",children:"Subject Line Regexes"}),"\n",(0,n.jsx)(t.admonition,{type:"warning",children:(0,n.jsx)(t.p,{children:"If no subject line regexes are set, then any subject line is permissable."})}),"\n",(0,n.jsx)(t.p,{children:"These regexes drive which emails are read for this group."}),"\n",(0,n.jsx)(t.h3,{id:"email-whitelist",children:"Email Whitelist"}),"\n",(0,n.jsx)(t.admonition,{type:"warning",children:(0,n.jsx)(t.p,{children:"If no subject line regexes are set, or email whitelists are added, then ALL emails will be read."})}),"\n",(0,n.jsx)(t.p,{children:"These emails will allow group owners to only accept emails from certain email addresses."}),"\n",(0,n.jsx)(t.h3,{id:"default-paid-by",children:"Default Paid By"}),"\n",(0,n.jsx)(t.p,{children:"This is the user that will be assigned receipts that are uploaded via email."}),"\n",(0,n.jsx)(t.h3,{id:"default-status",children:"Default Status"}),"\n",(0,n.jsx)(t.p,{children:"This will be the status that will be set on receipts that are uploaded via email."}),"\n",(0,n.jsx)(t.h3,{id:"caveats",children:"Caveats"}),"\n",(0,n.jsx)(t.h4,{id:"email-attachments",children:"Email attachments"}),"\n",(0,n.jsx)(t.p,{children:"Currently email attachments are required, since emails are processed via ocr/ai. If no attachment is found on the email, the email will not be processed."}),"\n",(0,n.jsx)(t.h4,{id:"multiple-attachments",children:"Multiple attachments"}),"\n",(0,n.jsx)(t.p,{children:"Currently there is no way to group multiple attachments into one receipt. So if 20 attachments are sent, then 20 separate receipts will be created."}),"\n",(0,n.jsx)(t.h4,{id:"overlapping-configurations",children:"Overlapping Configurations"}),"\n",(0,n.jsx)(t.p,{children:"Let's say that two groups are configured with the same exact group settings. This means that a group is set up to listen to the same emails."}),"\n",(0,n.jsx)(t.p,{children:"In this case, nothing is done to prevent this scenario as it is not necessairly a bad thing. So, receipts would be created for both groups.\nThis could potentially be a privacy issue, since a user could capture another user's emails/receipts if using the same email address to read from. This is going to be addressed by an option to only allow system administrators to edit the group's email settings."})]})}function h(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},8453:(e,t,i)=>{i.d(t,{R:()=>l,x:()=>r});var n=i(6540);const a={},s=n.createContext(a);function l(e){const t=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:l(e.components),n.createElement(s.Provider,{value:t},e.children)}}}]);