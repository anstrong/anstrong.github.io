var __defProp=Object.defineProperty,__defProps=Object.defineProperties,__getOwnPropDescs=Object.getOwnPropertyDescriptors,__getOwnPropSymbols=Object.getOwnPropertySymbols,__hasOwnProp=Object.prototype.hasOwnProperty,__propIsEnum=Object.prototype.propertyIsEnumerable,__defNormalProp=(e,t,n)=>t in e?__defProp(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,__spreadValues=(e,t)=>{for(var n in t||(t={}))__hasOwnProp.call(t,n)&&__defNormalProp(e,n,t[n]);if(__getOwnPropSymbols)for(var n of __getOwnPropSymbols(t))__propIsEnum.call(t,n)&&__defNormalProp(e,n,t[n]);return e},__spreadProps=(e,t)=>__defProps(e,__getOwnPropDescs(t));import{r as react,L as Link,S as Switch,R as Route,z,a as React,b as Router,c as ReactDOM,d as R}from"./vendor.3c1912f6.js";var styles='/******************************************************************************\nSTART Glitch hello-app default styles\n\nThe styles in this section do some minimal CSS resets, set default fonts and \ncolors, and handle the layout for our footer and "Remix on Glitch" button. If\nyou\'re new to CSS they may seem a little complicated, but you can scroll down\nto this section\'s matching END comment to see page-specific styles.\n******************************************************************************/\n/* Our default values set as CSS variables */\n:root {\n  --color-bg: #ffffff;\n  --color-text-main: #00867d;\n  --color-primary: #e0f2f1;\n  --color-accent: #aebfbe;\n  --wrapper-height: 85vh;\n  --image-max-width: 320px;\n  --font-family: "HK Grotesk";\n  --font-family-header: "HK Grotesk";\n}\n\n/* Basic page style resets */\n* {\n  box-sizing: border-box;\n}\n[hidden] {\n  display: none !important;\n}\n\n/* Import fonts */\n@font-face {\n  font-family: HK Grotesk;\n  src: url("https://cdn.glitch.me/605e2a51-d45f-4d87-a285-9410ad350515%2FHKGrotesk-Regular.otf?v=1603136326027")\n    format("opentype");\n}\n@font-face {\n  font-family: HK Grotesk;\n  font-weight: bold;\n  src: url("https://cdn.glitch.me/605e2a51-d45f-4d87-a285-9410ad350515%2FHKGrotesk-Bold.otf?v=1603136323437")\n    format("opentype");\n}\n\n/* Our remix on glitch button */\n.btn--remix {\n  font-family: HK Grotesk;\n  padding: 0.75rem 1rem;\n  font-size: 1.1rem;\n  line-height: 1rem;\n  font-weight: 500;\n  height: 2.75rem;\n  align-items: center;\n  cursor: pointer;\n  background: #FFFFFF;\n  border: 1px solid #000000;\n  box-sizing: border-box;\n  border-radius: 4px;\n  text-decoration: none;\n  color: #000;\n  white-space: nowrap;\n  margin-left: auto;\n}\n.btn--remix img {\n  margin-right: 0.5rem;\n}\n.btn--remix:hover {\n  background-color: #D0FFF1;\n}\n\n/* Navigation grid */\n.footer {\n  display: flex;\n  justify-content: space-between;\n  margin: 1rem auto 0;\n  padding: 1rem 0 0.75rem 0;\n  width: 100%;\n  flex-wrap: wrap;\n}\n\n.footer a:not(.btn--remix):link,\na:not(.btn--remix):visited {\n  font-family: HK Grotesk;\n  font-style: normal;\n  font-weight: normal;\n  font-size: 1.1rem;\n  color: #000;\n  text-decoration: none;\n  border-style: none;\n}\n.footer a:hover {\n  color: var(--color-accent);\n}\n\n.footer .links {\n  padding: 0.5rem 1rem 1.5rem;\n  white-space: nowrap;\n}\n\n.divider {\n  padding: 0 1rem;\n}\n/******************************************************************************\nEND Glitch hello-app default styles\n******************************************************************************/\n\n/* Page structure */\nbody {\n  font-family: HK Grotesk;\n  background-color: var(--color-bg);\n}\n.wrapper {\n  min-height: var(--wrapper-height);\n  display: grid;\n  place-items: center;\n  margin: 0 1rem;\n  min-height: 86vh;\n}\n.content {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  width: 70%;\n  margin-bottom: 100px;\n  position: relative;\n}\n\n/* Page titles */\nh1 {\n  color: var(--color-text-main);\n  font-family: HK Grotesk;\n  font-style: normal;\n  font-weight: bold;\n  font-size: 100px;\n  line-height: 105%;\n  text-align: center;\n}\n\n.page {\n  width: 100%\n}\n\n.page h1 {\n  font-size: 48px;\n  text-align: center;\n  margin-top: 50px;\n}\n\n.page p {\n  line-height: 1.5;\n}\n\n.page a {\n  color: #000;\n}\n\n.page a:hover {\n  text-decoration: none;\n}\n\n/* The React image and "click me" text */\n.btn--click-me {\n  user-select: none;\n  cursor: pointer;\n  white-space: nowrap;\n}\n.btn--click-me:hover {\n  text-decoration: underline;\n}\n\n/* Very light scaling for our illustration */\n.illustration {\n  max-width: 100%;\n  max-height: var(--image-max-width);\n  cursor: pointer;\n  padding-left: 3.5rem;\n}\n\n/* Instructions */\n.instructions {\n  margin: 1rem auto 0;\n}\n.instructions p {\n  font-size: 1rem;\n}\n\nh2 {\n  color: var(--color-text-main);\n}\n  \n\n.record {\n  margin-bottom: 30px;\n  padding-top: 20px;\n  color: var(--color-accent);\n  font-family: HK Grotesk;\n  align: center;\n  list-style: none;\n}\n\n.section {\n  padding: 0;\n  margin-top: 100px;\n  align: center;\n  text-align: left;\n}\n\n.record-list {\n  border-left: dotted var(--color-accent) 1px;\n}\n\n.card {\n  background-color: var(--color-primary);\n  border: none;\n  color: var(--color-text-main);\n  float: center;\n  font-family: HK Grotesk;\n  min-height: 200px;\n}\n\n.name {\n  text-align: left;\n  width: 50%;\n  float: left;\n  text-transform: uppercase;\n}\n\n.place {\n  text-align: right;\n  width: 50%;\n  float: right;\n}\n\n.card-content {\n  list-style: bullet;\n  text-align: center;\n}\n\n.details {\n  padding-top: 20px;\n  text-align: left;\n}\n\nbutton {\n  margin: 8px;\n  background-color: var(--color-bg);\n  color: var(--color-accent);\n}\n\nbutton:hover {\n  color: var(--color-text-main);\n}\n\n.nav {\n  background-color: var(--color-bg);\n}\n\n.logo {\n  height: 150px;\n  margin-top: 20px;\n  display: block;\n  margin-left: auto;\n  margin-right: auto;\n}\n\nheader {\n  width: 100%;\n  align: center;\n}\n\n.record-footer {\n  margin-top: 15px;\n}\n\n.badge {\n  background-color: var(--color-accent);\n  color: var(--color-bg);\n  margin: 5px;\n}\n\n.profile {\n  height: 200px;\n  margin-bottom: 50px;\n  margin-top: 100px;\n}\n\n.social-icon {\n  float: right;\n  margin-right: 10px;\n  color: var(--color-accent);\n}\n\n.active {\n  color: var(--color-text-main);\n}\n\n.download-icon {\n  color: var(--color-text-main);\n}\n\n.download-button {\n  margin-right: 50px;\n}\n\n.home-nav-button {\n  background-color: var(--color-primary);\n  width: 75px;\n  height: 75px;\n  color: var(--color-text-main);\n  border: solid var(--color-accent) 3px;\n  border-radius: 50%;\n  vertical-align: middle; \n  text-align: center; \n  margin: 25px;\n  padding-top: 9px;\n  text-decoration: none;\n}\n\n.home-nav-icon {\n  display: inline-block;\n  color: var(--color-text-main);\n}\n\n.home-nav-button p {\n  margin-top: 25px;\n  color: var(--color-accent);\n}\n\n.home-nav-button:hover {\n  text-decoration: none;\n}\n\n\n';const about={icon:"far fa-file-alt",sections:[{title:"Experience",render:"makeJob",records:[{title:"Peer Tutor",place:"Wellesley College",duration:"Fall 2021",description:"Computer Science and Math Departments",details:["Guided students through course material for Fundamental Algorithms, covering topics like greedy algorithms, dynamic programming, divide-and-conquer, and NP-hardness","Assisted students with questions and problems for a variety of math courses, including Calculus, Multivariable Calculus, Combinatorics and Graph Theory, Linear Algebra, and Differential Equations"],tags:["teaching","algorithms","mathematics"]},{title:"TLDP Intern",place:"Travelers Insurance",duration:"Summer 2021",description:"Data Analytics Group",details:["Supported transition to Salesforce by collaborating with business users to iteratively build a library of template reports while designing and implementing report governance strategies","Completed extensive training through Trailhead on use and administration of the Salesforce platform"],tags:["Salesforce","DevOps"]},{title:"Technology Intern",place:"Travelers Insurance",duration:"Summer 2020",description:"Innovation Technology Group",details:["Contributed in the development of a web-based event hub using React, Node, and MongoDB","Collaborated on the design and early development of IoT (Internet of Things) software architecture using Python with AWS","Researched and analyzed IoT sensors, systems, and vendors with respect to business objectives"],tags:["React","Node","MongoDB","Python","AWS","IoT"]},{title:"Bookkeeping and Office Assistant",place:"Gallagher Holdings, Inc.",duration:"January 2020",details:["Reconciled bank statements, invoices and other expenses in support of year-end financial close","Designed and implemented new filing system"],tags:["organization","bookkeeping"]},{title:"Summer Programs Teaching Assistant",place:"Choate Rosemary Hall",duration:"Summer 2019",description:"Introduction to Robotics",details:["Designed and presented lesson plans","Developed projects and assessed student performance"],tags:["robotics","VEX","teaching"]},{title:"Lifeguard and Swim Instructor",place:"Various Employers",duration:"Summer 2017 & Summer 2018",details:["Supervised waterfront activity for unsafe behaviors","Instructed children of all ages in swimming basics and stroke development, periodically assessing skill levels and writing progress reports","Managed injuries and incidents when necessary"],tags:["teaching"]}]},{title:"Education",render:"makeDegree",records:[{title:"High School Diploma",place:"Choate Rosemary Hall",duration:"Class of 2019",description:"",details:["Supervised waterfront activity for unsafe behaviors","Instructed children of all ages in swimming basics and stroke development, periodically assessing skill levels and writing progress reports","Managed injuries and incidents when necessary"],tags:[]},{title:"Bachelors of Arts",place:"Wellesley College",duration:"Class of 2023",description:"Double major in Computer Science and Cognitive Science",details:["Supervised waterfront activity for unsafe behaviors","Instructed children of all ages in swimming basics and stroke development, periodically assessing skill levels and writing progress reports","Managed injuries and incidents when necessary"],tags:[]}]}]},projects={icon:"fas fa-code-branch",sections:[{title:"Programming",render:"makeDegree",records:[{title:"",place:"",duration:"",description:"",details:[],tags:[]}]},{title:"Human-Centered Design",render:"makeDegree",records:[{title:"",place:"",duration:"",description:"",details:[],tags:[]}]},{title:"Art",render:"makeDegree",records:[{title:"",place:"",duration:"",description:"",details:[],tags:[]}]}]};var myData={about:about,projects:projects};const imgs=["https://cdn.glitch.me/47315a0e-1265-4e95-aa84-887a21ec6fb2%2Flogo.png?v=1635296262360"];var currentImg=0;const Nav$2=e=>react.exports.createElement("ul",{class:"nav justify-content-center"},e.pages.map((t=>react.exports.createElement(Link,{href:"/"+t,title:t,className:"home-nav-button"},react.exports.createElement("i",{className:e.data[t].icon+" fa-3x home-nav-icon"}),react.exports.createElement("p",{className:"button-label"},t)))));function Home$1(){var e=myData;return react.exports.createElement("div",{className:"content"},react.exports.createElement("img",{class:"profile",src:imgs[currentImg]}),react.exports.createElement("div",{className:"heading"},react.exports.createElement("h1",{className:"title"},"Annabelle Strong")),react.exports.createElement(Nav$2,{pages:["about","projects"],data:e}))}const Nav$1=e=>react.exports.createElement("ul",{className:"nav justify-content-center sticky-top",id:"page-nav"},e.sections.map((e=>react.exports.createElement("button",{type:"button",className:"btn",key:e.title},e.title)))),Section$1=e=>react.exports.createElement("div",{className:"section",id:e.title},react.exports.createElement("h2",null,react.exports.createElement("b",null," ",e.title," ")),react.exports.createElement("ul",{className:"record-list"},e.records.map((t=>e.render(t)))));function About(){var sections=myData.about.sections;return console.log(sections),react.exports.createElement("div",{className:"page"},react.exports.createElement("header",{className:"justify-content-center"},react.exports.createElement(Link,{href:"/"},react.exports.createElement("img",{className:"logo",title:"Home",src:"https://cdn.glitch.me/47315a0e-1265-4e95-aa84-887a21ec6fb2%2Flogo.png?v=1635296262360"})),react.exports.createElement("h1",{className:"title"},"My Resumé")),react.exports.createElement(Nav$1,{sections:sections}),react.exports.createElement("ul",null,sections.map((section=>react.exports.createElement(Section$1,{title:section.title,records:section.records,render:eval(section.render),key:section.title})))))}react.exports.forwardRef(((e,{ref:t})=>react.exports.createElement(Section$1,__spreadProps(__spreadValues({},e),{ref:t}))));const Nav=e=>react.exports.createElement("ul",{className:"nav justify-content-center sticky-top",id:"page-nav"},e.sections.map((e=>react.exports.createElement("button",{type:"button",className:"btn",key:e.title},e.title)))),Section=e=>react.exports.createElement("div",{className:"section",id:e.title},react.exports.createElement("h2",null,react.exports.createElement("b",null," ",e.title," ")),react.exports.createElement("ul",{className:"record-list"},e.records.map((t=>e.render(t)))));function Projects(){var sections=myData.projects.sections;return react.exports.createElement("div",{className:"page"},react.exports.createElement("header",{className:"justify-content-center"},react.exports.createElement("a",{href:"/"},react.exports.createElement("img",{className:"logo",title:"Home",src:"https://cdn.glitch.me/47315a0e-1265-4e95-aa84-887a21ec6fb2%2Flogo.png?v=1635296262360"})),react.exports.createElement("h1",{className:"title"},"My Projects")),react.exports.createElement(Nav,{sections:sections}),react.exports.createElement("ul",null,sections.map((section=>react.exports.createElement(Section,{title:section.title,records:section.records,render:eval(section.render),key:section.title})))))}react.exports.forwardRef(((e,{ref:t})=>react.exports.createElement(Section,__spreadProps(__spreadValues({},e),{ref:t}))));var PageRouter=()=>react.exports.createElement(Switch,null,react.exports.createElement(Route,{path:"/",component:Home$1}),react.exports.createElement(Route,{path:"/about",component:About}),react.exports.createElement(Route,{path:"/projects",component:Projects}));const currentLoc=()=>window.location.hash.replace("#","")||"/",useHashLocation=()=>{const[e,t]=react.exports.useState(currentLoc());react.exports.useEffect((()=>{const e=()=>t(currentLoc());return window.addEventListener("hashchange",e),()=>window.removeEventListener("hashchange",e)}),[]);return[e,react.exports.useCallback((e=>window.location.hash=e),[])]},title="Annabelle Strong",description="The personal website and portfolio of Annabelle L. Strong",url="glitch-default",image="https://cdn.glitch.com/605e2a51-d45f-4d87-a285-9410ad350515%2Fhello-react-social.png?v=1616712747908";var SEO={"glitch-help-instructions":"For a custom domain, change the 'url' parameter from 'glitch-default' to your domain _without_ a traling slash, like 'https://www.example.com'",title:title,description:description,url:url,image:image};const Seo=()=>{const e=window.location.hostname;return react.exports.createElement(z,null,react.exports.createElement("title",null,SEO.title),react.exports.createElement("meta",{name:"description",content:SEO.description}),react.exports.createElement("meta",{name:"robots",content:"index,follow"}),react.exports.createElement("link",{rel:"canonical",href:e}),react.exports.createElement("meta",{property:"og:title",content:SEO.title}),react.exports.createElement("meta",{property:"og:type",content:"article"}),react.exports.createElement("meta",{property:"og:url",content:e}),react.exports.createElement("meta",{property:"og:description",content:SEO.description}),react.exports.createElement("meta",{property:"og:image",content:SEO.image}),react.exports.createElement("meta",{name:"twitter:card",content:"summary"}))},SocialButton=e=>React.createElement("a",{href:e.address,title:e.label},React.createElement("i",{className:"fab social-icon "+e.icon})),SocialButtonSet=e=>React.createElement("ul",null,e.buttons.map((e=>React.createElement(SocialButton,{address:e.address,icon:e.icon,label:e.label,key:e.label}))));function Home(){return React.createElement(Router,{hook:useHashLocation},React.createElement(Seo,null),React.createElement("main",{role:"main",className:"wrapper"},React.createElement("div",{className:"content"},React.createElement(PageRouter,null))),React.createElement("footer",{className:"footer fixed-bottom"},React.createElement("div",{className:"links"},React.createElement(SocialButtonSet,{buttons:[{label:"LinkedIn",icon:"fa-linkedin-in",address:"https://www.linkedin.com/in/annabellestrong/"},{label:"GitHub",icon:"fa-github",address:"https://github.com/anstrong"}]})),React.createElement("div",null,React.createElement("a",{href:"",className:"download-button",title:"Download as PDF"},React.createElement("i",{className:"fas fa-file-download fa-2x download-icon"})))))}ReactDOM.render(React.createElement(React.StrictMode,null,React.createElement(R,null,React.createElement(Home,null))),document.getElementById("root"));