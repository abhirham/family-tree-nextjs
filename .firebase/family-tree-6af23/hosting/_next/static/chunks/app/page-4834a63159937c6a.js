(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{9446:(e,r,a)=>{Promise.resolve().then(a.bind(a,7892))},7892:(e,r,a)=>{"use strict";a.r(r),a.d(r,{default:()=>Q});var t=a(7437),n=a(2265),o=a(4120),i=a(5593),s=a(591),d=a(9830),m=a(3147);function h(e){let r=(0,n.forwardRef)(e);return r.withProps=e=>{let a=(0,n.forwardRef)((a,n)=>(0,t.jsx)(r,{...e,...a,ref:n}));return a.extend=r.extend,a.displayName="WithProps(".concat(r.displayName,")"),a},r.extend=m.yR,r}var l=a(6449),c={root:"m_1b7284a3"};let p={},g=(0,i.Z)((e,r)=>{let{radius:a,shadow:t}=r;return{root:{"--paper-radius":void 0===a?void 0:(0,o.H5)(a),"--paper-shadow":(0,o.Xj)(t)}}}),u=h((e,r)=>{let a=(0,s.w)("Paper",p,e),{classNames:n,className:o,style:i,styles:m,unstyled:h,withBorder:u,vars:b,radius:y,shadow:v,variant:f,mod:w,...I}=a,j=(0,d.y)({name:"Paper",props:a,classes:c,className:o,style:i,classNames:n,styles:m,unstyled:h,vars:b,varsResolver:g});return(0,t.jsx)(l.x,{ref:r,mod:[{"data-with-border":u},w],...j("root"),variant:f,...I})});u.classes=c,u.displayName="@mantine/core/Paper";let[b,y]=function(e){let r=(0,n.createContext)(null);return[e=>{let{children:a,value:n}=e;return(0,t.jsx)(r.Provider,{value:n,children:a})},()=>{let a=(0,n.useContext)(r);if(null===a)throw Error(e);return a}]}("Card component was not found in tree");var v={root:"m_e615b15f",section:"m_599a2148"};let f={},w=h((e,r)=>{let{classNames:a,className:n,style:o,styles:i,vars:d,withBorder:m,inheritPadding:h,mod:c,...p}=(0,s.w)("CardSection",f,e),g=y();return(0,t.jsx)(l.x,{ref:r,mod:[{"with-border":m,"inherit-padding":h},c],...g.getStyles("section",{className:n,style:o,styles:i,classNames:a}),...p})});w.classes=v,w.displayName="@mantine/core/CardSection";let I={},j=(0,i.Z)((e,r)=>{let{padding:a}=r;return{root:{"--card-padding":(0,o.bG)(a)}}}),x=h((e,r)=>{let a=(0,s.w)("Card",I,e),{classNames:o,className:i,style:m,styles:h,unstyled:l,vars:c,children:p,padding:g,...y}=a,f=(0,d.y)({name:"Card",props:a,classes:v,className:i,style:m,classNames:o,styles:h,unstyled:l,vars:c,varsResolver:j}),x=n.Children.toArray(p),S=x.map((e,r)=>"object"==typeof e&&e&&"type"in e&&e.type===w?(0,n.cloneElement)(e,{"data-first-section":0===r||void 0,"data-last-section":r===x.length-1||void 0}):e);return(0,t.jsx)(b,{value:{getStyles:f},children:(0,t.jsx)(u,{ref:r,unstyled:l,...f("root"),...y,children:S})})});x.classes=v,x.displayName="@mantine/core/Card",x.Section=w;var S={root:"m_4081bf90"};let k={preventGrowOverflow:!0,gap:"md",align:"center",justify:"flex-start",wrap:"wrap"},_=(0,i.Z)((e,r,a)=>{let{grow:t,preventGrowOverflow:n,gap:i,align:s,justify:d,wrap:m}=r,{childWidth:h}=a;return{root:{"--group-child-width":t&&n?h:void 0,"--group-gap":(0,o.bG)(i),"--group-align":s,"--group-justify":d,"--group-wrap":m}}}),N=(0,m.d5)((e,r)=>{let a=(0,s.w)("Group",k,e),{classNames:i,className:m,style:h,styles:c,unstyled:p,children:g,gap:u,align:b,justify:y,wrap:v,grow:f,preventGrowOverflow:w,vars:I,variant:j,__size:x,mod:N,...C}=a,E=n.Children.toArray(g).filter(Boolean),G=E.length,R=(0,o.bG)(null!=u?u:"md"),J="calc(".concat(100/G,"% - (").concat(R," - ").concat(R," / ").concat(G,"))"),z=(0,d.y)({name:"Group",props:a,stylesCtx:{childWidth:J},className:m,style:h,classes:S,classNames:i,styles:c,unstyled:p,vars:I,varsResolver:_});return(0,t.jsx)(l.x,{...z("root"),ref:r,variant:j,mod:[{grow:f},N],size:x,...C,children:E})});N.classes=S,N.displayName="@mantine/core/Group";var C={root:"m_9e117634"};let E={},G=(0,i.Z)((e,r)=>{let{radius:a,fit:t}=r;return{root:{"--image-radius":void 0===a?void 0:(0,o.H5)(a),"--image-object-fit":t}}}),R=h((e,r)=>{let a=(0,s.w)("Image",E,e),{classNames:o,className:i,style:m,styles:h,unstyled:c,vars:p,onError:g,src:u,radius:b,fit:y,fallbackSrc:v,mod:f,...w}=a,[I,j]=(0,n.useState)(!u);(0,n.useEffect)(()=>j(!u),[u]);let x=(0,d.y)({name:"Image",classes:C,props:a,className:i,style:m,classNames:o,styles:h,unstyled:c,vars:p,varsResolver:G});return I&&v?(0,t.jsx)(l.x,{component:"img",ref:r,src:v,...x("root"),onError:g,mod:["fallback",f],...w}):(0,t.jsx)(l.x,{component:"img",ref:r,...x("root"),src:u,onError:e=>{null==g||g(e),j(!0)},mod:f,...w})});R.classes=C,R.displayName="@mantine/core/Image";var J={root:"m_6d731127"};let z={gap:"md",align:"stretch",justify:"flex-start"},D=(0,i.Z)((e,r)=>{let{gap:a,align:t,justify:n}=r;return{root:{"--stack-gap":(0,o.bG)(a),"--stack-align":t,"--stack-justify":n}}}),H=(0,m.d5)((e,r)=>{let a=(0,s.w)("Stack",z,e),{classNames:n,className:o,style:i,styles:m,unstyled:h,vars:c,align:p,justify:g,gap:u,variant:b,...y}=a,v=(0,d.y)({name:"Stack",props:a,classes:J,className:o,style:i,classNames:n,styles:m,unstyled:h,vars:c,varsResolver:D});return(0,t.jsx)(l.x,{ref:r,...v("root"),variant:b,...y})});H.classes=J,H.displayName="@mantine/core/Stack";var M=a(5027),O=a(2442),A={root:"m_b6d8b162"};let B={inherit:!1},L=(0,i.Z)((e,r)=>{let{variant:a,lineClamp:t,gradient:n,size:i,color:s}=r;return{root:{"--text-fz":(0,o.yv)(i),"--text-lh":(0,o.Dp)(i),"--text-gradient":"gradient"===a?(0,O.u)(n,e):void 0,"--text-line-clamp":"number"==typeof t?t.toString():void 0,"--text-color":s?(0,M.p)(s,e):void 0}}}),P=h((e,r)=>{let a=(0,s.w)("Text",B,e),{lineClamp:n,truncate:o,inline:i,inherit:m,gradient:h,span:c,__staticSelector:p,vars:g,className:u,style:b,classNames:y,styles:v,unstyled:f,variant:w,mod:I,size:j,...x}=a,S=(0,d.y)({name:["Text",p],props:a,classes:A,className:u,style:b,classNames:y,styles:v,unstyled:f,vars:g,varsResolver:L});return(0,t.jsx)(l.x,{...S("root",{focusable:!0}),ref:r,component:c?"span":"p",variant:w,mod:[{"data-truncate":function(e){return"start"===e?"start":"end"===e||e?"end":void 0}(o),"data-line-clamp":"number"==typeof n,"data-inline":i,"data-inherit":m},I],size:j,...x})});P.classes=A,P.displayName="@mantine/core/Text";var Z={root:"m_347db0ec","root--dot":"m_fbd81e3d",label:"m_5add502a",section:"m_91fdda9b"};let T={},W=(0,i.Z)((e,r)=>{let{radius:a,color:t,gradient:n,variant:i,size:s,autoContrast:d}=r,m=e.variantColorResolver({color:t||e.primaryColor,theme:e,gradient:n,variant:i||"filled",autoContrast:d});return{root:{"--badge-height":(0,o.ap)(s,"badge-height"),"--badge-padding-x":(0,o.ap)(s,"badge-padding-x"),"--badge-fz":(0,o.ap)(s,"badge-fz"),"--badge-radius":void 0===a?void 0:(0,o.H5)(a),"--badge-bg":t||i?m.background:void 0,"--badge-color":t||i?m.color:void 0,"--badge-bd":t||i?m.border:void 0,"--badge-dot-color":"dot"===i?(0,M.p)(t,e):void 0}}}),Y=h((e,r)=>{let a=(0,s.w)("Badge",T,e),{classNames:n,className:o,style:i,styles:m,unstyled:h,vars:c,radius:p,color:g,gradient:u,leftSection:b,rightSection:y,children:v,variant:f,fullWidth:w,autoContrast:I,circle:j,mod:x,...S}=a,k=(0,d.y)({name:"Badge",props:a,classes:Z,className:o,style:i,classNames:n,styles:m,unstyled:h,vars:c,varsResolver:W});return(0,t.jsxs)(l.x,{variant:f,mod:[{block:w,circle:j,"with-right-section":!!y,"with-left-section":!!b},x],...k("root",{variant:f}),ref:r,...S,children:[b&&(0,t.jsx)("span",{...k("section"),"data-position":"left",children:b}),(0,t.jsx)("span",{...k("label"),children:v}),y&&(0,t.jsx)("span",{...k("section"),"data-position":"right",children:y})]})});function q(e){let{user:r,onClick:a}=e;return(0,t.jsxs)(x,{shadow:"sm",padding:"lg",style:{width:300,cursor:"pointer"},radius:"md",withBorder:!0,onClick:a,children:[(0,t.jsx)(x.Section,{children:(0,t.jsx)(R,{src:"https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-8.png",height:160,alt:"Norway"})}),(0,t.jsxs)(N,{justify:"space-between",mt:"md",mb:"xs",children:[(0,t.jsx)(P,{fw:500,children:r.name}),(0,t.jsx)(Y,{color:"pink",children:"On Sale"})]})]})}Y.classes=Z,Y.displayName="@mantine/core/Badge";var F=a(9212),X=a.n(F);let K=[{memberId:"memberId1",name:"John Smith",dob:"1970-01-01",dod:"2040-06-15",photo:"/images/john_smith.jpg",parents:[],spouse:["memberId2","memberId3"],children:["memberId4","memberId5","memberId6","memberId7"],story:"John Smith grew up in a small town and always had a passion for building things. He became an engineer and dedicated his career to working on infrastructure projects across the country. John had two marriages; his first with Jane Doe and later with Emily Davis. He loved spending time with his children and teaching them about engineering and the world."},{memberId:"memberId2",name:"Jane Doe",dob:"1972-03-15",dod:"2035-11-22",photo:"/images/jane_doe.jpg",parents:[],spouse:["memberId1"],children:["memberId4","memberId5"],story:"Jane Doe always loved art and pursued a career as an art teacher. She met John Smith during a community project, and they quickly connected over their love for creativity. Jane dedicated her life to her family and her students, and although she and John later separated, they remained good friends for the sake of their children."},{memberId:"memberId3",name:"Emily Davis",dob:"1975-07-22",photo:"/images/emily_davis.jpg",parents:[],spouse:["memberId1"],children:["memberId6","memberId7"],story:"Emily Davis is a passionate environmentalist who has worked with various NGOs to promote sustainable living. She met John Smith during a charity event, and their mutual respect grew into love. Emily loves spending time in nature and often takes her children on hikes to teach them about the environment."},{memberId:"memberId4",name:"Michael Smith",dob:"1995-08-10",photo:"/images/michael_smith.jpg",parents:["memberId1","memberId2"],spouse:["memberId8"],children:["memberId10","memberId11"],story:"Michael Smith followed in his father's footsteps and became an engineer. He specialized in renewable energy and is now working on projects that aim to create a greener future. Michael married Lisa Brown, and they share a passion for sustainability. Together, they are raising two wonderful children."},{memberId:"memberId5",name:"Anna Smith",dob:"1997-04-12",photo:"/images/anna_smith.jpg",parents:["memberId1","memberId2"],spouse:[],children:[],story:"Anna Smith is an accomplished pianist and music teacher. She has always loved music and began learning the piano at a very young age. Anna has performed in various concerts and enjoys teaching children to appreciate and play music. She is currently focusing on her career and dreams of opening her own music school someday."},{memberId:"memberId6",name:"David Smith",dob:"2000-02-15",photo:"/images/david_smith.jpg",parents:["memberId1","memberId3"],spouse:["memberId9"],children:["memberId12","memberId13"],story:"David Smith is a software developer who loves technology. He has always been fascinated by how things work and started coding at a young age. David now works for a leading tech company and spends his free time developing apps that solve everyday problems. He married Rachel Green, and they have two children together."},{memberId:"memberId7",name:"Sophia Smith",dob:"2003-06-18",photo:"/images/sophia_smith.jpg",parents:["memberId1","memberId3"],spouse:[],children:[],story:"Sophia Smith is an avid traveler and photographer. She has a knack for capturing beautiful moments through her lens. Sophia has traveled to over 20 countries, documenting her experiences and sharing them with others through her photography blog. She dreams of turning her passion into a full-time career."},{memberId:"memberId8",name:"Lisa Brown",dob:"1996-05-20",photo:"/images/lisa_brown.jpg",parents:[],spouse:["memberId4"],children:["memberId10","memberId11"],story:"Lisa Brown is a nutritionist who loves helping people live healthier lives. She met Michael Smith at a community event, and they bonded over their love for the environment and healthy living. Lisa enjoys cooking nutritious meals for her family and spends her weekends working on community health programs."},{memberId:"memberId9",name:"Rachel Green",dob:"2002-11-15",photo:"/images/rachel_green.jpg",parents:[],spouse:["memberId6"],children:["memberId12","memberId13"],story:"Rachel Green is a yoga instructor who believes in the power of mindfulness and wellness. She met David Smith through mutual friends and was drawn to his enthusiasm for technology. Rachel runs her own yoga studio and hopes to inspire others to lead a balanced life through yoga and meditation."},{memberId:"memberId10",name:"Noah Smith",dob:"2025-03-12",photo:"/images/noah_smith.jpg",parents:["memberId4","memberId8"],spouse:["memberId14"],children:["memberId16"],story:"Noah Smith is a budding architect with a passion for sustainable urban design. He aims to create buildings that harmonize with the environment. Noah married Grace Wilson, and together they dream of building an eco-friendly home for their family."},{memberId:"memberId11",name:"Emma Smith",dob:"2027-05-25",photo:"/images/emma_smith.jpg",parents:["memberId4","memberId8"],spouse:[],children:[],story:"Emma Smith is a college student studying marine biology. She loves the ocean and is committed to marine conservation. Emma volunteers with local organizations to help protect marine life and hopes to work on international conservation projects after finishing her studies."},{memberId:"memberId12",name:"Lucas Smith",dob:"2030-09-25",photo:"/images/lucas_smith.jpg",parents:["memberId6","memberId9"],spouse:["memberId15"],children:["memberId17"],story:"Lucas Smith is an entrepreneur who started his own tech company straight out of college. He loves finding creative solutions to complex problems and has developed a series of successful apps. Lucas is married to Olivia Martinez, and they are raising a young daughter together."},{memberId:"memberId13",name:"Ella Smith",dob:"2032-11-22",photo:"/images/ella_smith.jpg",parents:["memberId6","memberId9"],spouse:[],children:[],story:"Ella Smith is an artist who creates beautiful illustrations inspired by nature. She sells her work online and enjoys teaching art workshops for children. Ella has always been inspired by her mother Rachel's passion for mindfulness, and she incorporates that philosophy into her artwork."},{memberId:"memberId14",name:"Grace Wilson",dob:"2024-04-14",photo:"/images/grace_wilson.jpg",parents:[],spouse:["memberId10"],children:["memberId16"],story:"Grace Wilson is an environmental lawyer who works tirelessly to protect natural resources. She is married to Noah Smith, and together they share a vision of building a greener, more sustainable future. Grace enjoys hiking and spending time in nature with her family."},{memberId:"memberId15",name:"Olivia Martinez",dob:"2028-02-18",photo:"/images/olivia_martinez.jpg",parents:[],spouse:["memberId12"],children:["memberId17"],story:"Olivia Martinez is a culinary chef who specializes in plant-based cuisine. She loves experimenting with flavors and creating healthy yet delicious dishes. Olivia met Lucas Smith at a tech conference and they bonded over their love for innovation—her in the kitchen, and him in the tech world."},{memberId:"memberId16",name:"Jack Smith",dob:"2050-10-30",photo:"/images/jack_smith.jpg",parents:["memberId10","memberId14"],spouse:[],children:[],story:"Jack Smith is an aspiring filmmaker who loves telling stories through his camera lens. He enjoys creating documentaries about nature and the environment, inspired by his mother Grace's passion for protecting natural resources. Jack is currently working on his first full-length documentary."},{memberId:"memberId17",name:"Ava Smith",dob:"2060-07-20",photo:"/images/ava_smith.jpg",parents:["memberId12","memberId15"],spouse:[],children:[],story:"Ava Smith is a talented dancer who has been training in ballet since she was a child. She dreams of joining a prestigious dance company and traveling the world to perform. Ava also loves teaching young children to dance and hopes to inspire the next generation of dancers."}].reduce((e,r)=>({...e,[r.memberId]:r}),{});function Q(){let[e,r]=(0,n.useState)("memberId1"),a=K[e];return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(x,{children:(0,t.jsxs)(N,{wrap:"no-wrap",align:"start",gap:50,children:[(0,t.jsx)(R,{src:"https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-8.png",height:250}),(0,t.jsxs)(H,{children:[(0,t.jsxs)(N,{justify:"space-between",children:[(0,t.jsx)(P,{fw:700,children:a.name}),(0,t.jsx)(P,{c:"dimmed",children:[a.dob,a.dod].filter(e=>!!e).map(e=>X()(e).format("D MMM, YYYY")).join(" - ")})]}),(0,t.jsx)(P,{children:a.story})]})]})}),["spouse","parents","children"].filter(e=>a[e].length>0).map(e=>(0,t.jsxs)(H,{children:[(0,t.jsx)("h1",{children:e}),(0,t.jsx)(N,{children:a[e].map(e=>(0,t.jsx)(q,{user:K[e],onClick:a=>r(K[e].memberId)},e))})]},e))]})}}},e=>{var r=r=>e(e.s=r);e.O(0,[990,311,130,215,744],()=>r(9446)),_N_E=e.O()}]);