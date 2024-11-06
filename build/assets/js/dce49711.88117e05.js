"use strict";(self.webpackChunkreceipt_wrangler_doc=self.webpackChunkreceipt_wrangler_doc||[]).push([[4125],{67273:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>c,frontMatter:()=>a,metadata:()=>n,toc:()=>d});const n=JSON.parse('{"id":"concepts/groups/managing-groups","title":"Managing Groups","description":"To manage, navigate to manage groups as shown in the previous page. Then click on the name of the group, or the edit","source":"@site/versioned_docs/version-4.x/concepts/groups/04-managing-groups.md","sourceDirName":"concepts/groups","slug":"/concepts/groups/managing-groups","permalink":"/docs/4.x/concepts/groups/managing-groups","draft":false,"unlisted":false,"tags":[],"version":"4.x","sidebarPosition":4,"frontMatter":{},"sidebar":"tutorialSidebar","previous":{"title":"Group Table","permalink":"/docs/4.x/concepts/groups/groups-list"},"next":{"title":"AI","permalink":"/docs/4.x/concepts/ai"}}');var s=i(74848),r=i(28453);const a={},o="Managing Groups",l={},d=[{value:"Group Details",id:"group-details",level:2},{value:"Group Name",id:"group-name",level:3},{value:"Status",id:"status",level:3},{value:"Group Members",id:"group-members",level:3},{value:"User",id:"user",level:4},{value:"Role",id:"role",level:4},{value:"Group Settings",id:"group-settings",level:2},{value:"Enable Email Integration",id:"enable-email-integration",level:3},{value:"Email to Read Receipts From field",id:"email-to-read-receipts-from-field",level:3},{value:"Subject Line Regexes",id:"subject-line-regexes",level:3},{value:"Email Whitelist",id:"email-whitelist",level:3},{value:"Default Paid By",id:"default-paid-by",level:3},{value:"Default Status",id:"default-status",level:3},{value:"Caveats",id:"caveats",level:3},{value:"Email attachments",id:"email-attachments",level:4},{value:"Multiple attachments",id:"multiple-attachments",level:4},{value:"Overlapping Configurations",id:"overlapping-configurations",level:4}];function h(e){const t={admonition:"admonition",br:"br",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",img:"img",p:"p",strong:"strong",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.header,{children:(0,s.jsx)(t.h1,{id:"managing-groups",children:"Managing Groups"})}),"\n",(0,s.jsx)(t.p,{children:"To manage, navigate to manage groups as shown in the previous page. Then click on the name of the group, or the edit\npencil."}),"\n",(0,s.jsx)(t.p,{children:"Upon clicking either the name or the edit pencil, the user will be navigated to the group details, where users can view\nor edit group data."}),"\n",(0,s.jsx)(t.h2,{id:"group-details",children:"Group Details"}),"\n",(0,s.jsx)(t.p,{children:"Here group owners can change general group information, and group membership information."}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"group details",src:i(49237).A+"",width:"3840",height:"1960"})}),"\n",(0,s.jsx)(t.h3,{id:"group-name",children:"Group Name"}),"\n",(0,s.jsx)(t.p,{children:"This field will change the group's name. There are no constraints on the group name, other than it is a required field."}),"\n",(0,s.jsx)(t.h3,{id:"status",children:"Status"}),"\n",(0,s.jsx)(t.p,{children:"There are two options for this field:"}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"Active:"})," Active groups show up in the groups list on the sidebar",(0,s.jsx)(t.br,{}),"\n",(0,s.jsx)(t.strong,{children:"Archived:"}),' Archived groups do not show up in the group list on the side, however, receipts in archived groups will\nstill count towards total owed amounts in the "Summary" dashboard widget.']}),"\n",(0,s.jsx)(t.h3,{id:"group-members",children:"Group Members"}),"\n",(0,s.jsxs)(t.p,{children:['Clicking on the blue plus icon next to the "Group Members" header, or clicking on the edit pencil of the group member\nwill display the respective form to add or edit a group member as shown below.\n',(0,s.jsx)(t.img,{alt:"group members",src:i(42513).A+"",width:"3840",height:"1960"})]}),"\n",(0,s.jsx)(t.h4,{id:"user",children:"User"}),"\n",(0,s.jsx)(t.p,{children:"The user to add to the current group."}),"\n",(0,s.jsx)(t.h4,{id:"role",children:"Role"}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"Owner:"})," Can add, edit, and delete receipts in the group, and can add and remove users from the group.",(0,s.jsx)(t.br,{}),"\n",(0,s.jsx)(t.strong,{children:"Editor:"})," Can add, edit, and delete receipts in the group, but cannot add or remove users from the group, or change\nthe group details or settings.",(0,s.jsx)(t.br,{}),"\n",(0,s.jsx)(t.strong,{children:"Viewer:"})," Can only view receipts in the group, but cannot add or edit receipts."]}),"\n",(0,s.jsx)(t.h2,{id:"group-settings",children:"Group Settings"}),"\n",(0,s.jsx)(t.p,{children:'Clicking on the "Group Settings" tab will navigate users to the group settings screen.'}),"\n",(0,s.jsx)(t.h3,{id:"enable-email-integration",children:"Enable Email Integration"}),"\n",(0,s.jsx)(t.p,{children:"This field will enable the integration. After the email is enabled, a connection will be attempted to be made to the\nconfigured email address on the next polling interval."}),"\n",(0,s.jsx)(t.h3,{id:"email-to-read-receipts-from-field",children:"Email to Read Receipts From field"}),"\n",(0,s.jsx)(t.p,{children:'The "Email to Read Receipts From" field must match a username from the email settings configured in the last step, this\nwill tell the api that this group is using this email.'}),"\n",(0,s.jsx)(t.h3,{id:"subject-line-regexes",children:"Subject Line Regexes"}),"\n",(0,s.jsx)(t.admonition,{type:"warning",children:(0,s.jsx)(t.p,{children:"If no subject line regexes are set, then any subject line is permissable."})}),"\n",(0,s.jsx)(t.p,{children:"These regexes drive which emails are read for this group."}),"\n",(0,s.jsx)(t.h3,{id:"email-whitelist",children:"Email Whitelist"}),"\n",(0,s.jsx)(t.admonition,{type:"warning",children:(0,s.jsx)(t.p,{children:"If no subject line regexes are set, or email whitelists are added, then ALL emails will be read."})}),"\n",(0,s.jsx)(t.p,{children:"These emails will allow group owners to only accept emails from certain email addresses."}),"\n",(0,s.jsx)(t.h3,{id:"default-paid-by",children:"Default Paid By"}),"\n",(0,s.jsx)(t.p,{children:"This is the user that will be assigned receipts that are uploaded via email."}),"\n",(0,s.jsx)(t.h3,{id:"default-status",children:"Default Status"}),"\n",(0,s.jsx)(t.p,{children:"This will be the status that will be set on receipts that are uploaded via email."}),"\n",(0,s.jsx)(t.h3,{id:"caveats",children:"Caveats"}),"\n",(0,s.jsx)(t.h4,{id:"email-attachments",children:"Email attachments"}),"\n",(0,s.jsx)(t.p,{children:"Currently email attachments are required, since emails are processed via ocr/ai. If no attachment is found on the email,\nthe email will not be processed."}),"\n",(0,s.jsx)(t.h4,{id:"multiple-attachments",children:"Multiple attachments"}),"\n",(0,s.jsx)(t.p,{children:"Currently there is no way to group multiple attachments into one receipt. So if 20 attachments are sent, then 20\nseparate receipts will be created."}),"\n",(0,s.jsx)(t.h4,{id:"overlapping-configurations",children:"Overlapping Configurations"}),"\n",(0,s.jsx)(t.p,{children:"Let's say that two groups are configured with the same exact group settings. This means that a group is set up to listen\nto the same emails."}),"\n",(0,s.jsx)(t.p,{children:"In this case, nothing is done to prevent this scenario as it is not necessairly a bad thing. So, receipts would be\ncreated for both groups.\nThis could potentially be a privacy issue, since a user could capture another user's emails/receipts if using the same\nemail address to read from. This is going to be addressed by an option to only allow system administrators to edit the\ngroup's email settings."})]})}function c(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},49237:(e,t,i)=>{i.d(t,{A:()=>n});const n=i.p+"assets/images/edit_group_details-36fd290a11b1cd869ff34cc177143c44.png"},42513:(e,t,i)=>{i.d(t,{A:()=>n});const n=i.p+"assets/images/edit_group_member-fdee797a6c2f46162037d610076917ec.png"},28453:(e,t,i)=>{i.d(t,{R:()=>a,x:()=>o});var n=i(96540);const s={},r=n.createContext(s);function a(e){const t=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),n.createElement(r.Provider,{value:t},e.children)}}}]);