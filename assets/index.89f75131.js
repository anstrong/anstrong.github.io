var A=Object.defineProperty,P=Object.defineProperties;var D=Object.getOwnPropertyDescriptors;var f=Object.getOwnPropertySymbols;var I=Object.prototype.hasOwnProperty,L=Object.prototype.propertyIsEnumerable;var b=(t,a,n)=>a in t?A(t,a,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[a]=n,y=(t,a)=>{for(var n in a||(a={}))I.call(a,n)&&b(t,n,a[n]);if(f)for(var n of f(a))L.call(a,n)&&b(t,n,a[n]);return t},v=(t,a)=>P(t,D(a));import{j as m,L as h,r as x,S as j,R as l,W as T,a as M,b as H,c as W,q as E}from"./vendor.e92f9715.js";const F=function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const s of o)if(s.type==="childList")for(const d of s.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&r(d)}).observe(document,{childList:!0,subtree:!0});function n(o){const s={};return o.integrity&&(s.integrity=o.integrity),o.referrerpolicy&&(s.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?s.credentials="include":o.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(o){if(o.ep)return;o.ep=!0;const s=n(o);fetch(o.href,s)}};F();const B={title:"My Resume",icon:"far fa-file-alt",img:"logo.png",sections:[{title:"Experience",render:"makeJob",records:[{title:"Undergraduate Researcher",place:"Wellesley College",duration:"Spring 2022",description:"Wellesley CrowdNets Lab",details:["Developing a mobile app using React Native to carry out an experiment about incentivizing data collection in the general population."],tags:["research","app development","React Native"],links:[{address:"",type:""}]},{title:"Peer Tutor",place:"Wellesley College",duration:"Fall 2021",description:"Computer Science and Math Departments",details:["Guided students through course material for Fundamental Algorithms, covering topics like greedy algorithms, dynamic programming, divide-and-conquer, and NP-hardness","Assisted students with questions and problems for a variety of math courses, including Calculus, Multivariable Calculus, Combinatorics and Graph Theory, Linear Algebra, and Differential Equations"],tags:["teaching","algorithms","mathematics"],links:[{address:"",type:""}]},{title:"TLDP Intern",place:"Travelers Insurance",duration:"Summer 2021",description:"Data Analytics Group",details:["Supported transition to Salesforce by collaborating with business users to iteratively build a library of template reports while designing and implementing report governance strategies","Completed extensive training through Trailhead on use and administration of the Salesforce platform"],tags:["Salesforce","DevOps"],links:[{address:"",type:""}]},{title:"Technology Intern",place:"Travelers Insurance",duration:"Summer 2020",description:"Innovation Technology Group",details:["Contributed in the development of a web-based event hub using React, Node, and MongoDB","Collaborated on the design and early development of IoT (Internet of Things) software architecture using Python with AWS","Researched and analyzed IoT sensors, systems, and vendors with respect to business objectives"],tags:["React","Node","MongoDB","Python","AWS","IoT"],links:[{address:"",type:""}]},{title:"Bookkeeping and Office Assistant",place:"Gallagher Holdings, Inc.",duration:"January 2020",details:["Reconciled bank statements, invoices and other expenses in support of year-end financial close","Designed and implemented new filing system"],tags:["organization","bookkeeping"],links:[{address:"",type:""}]},{title:"Summer Programs Teaching Assistant",place:"Choate Rosemary Hall",duration:"Summer 2019",description:"Introduction to Robotics",details:["Designed and presented lesson plans","Developed projects and assessed student performance"],tags:["robotics","VEX","teaching"],links:[{address:"",type:""}]},{title:"Lifeguard and Swim Instructor",place:"Various Employers",duration:"Summer 2017 & Summer 2018",details:["Supervised waterfront activity for unsafe behaviors","Instructed children of all ages in swimming basics and stroke development, periodically assessing skill levels and writing progress reports","Managed injuries and incidents when necessary"],tags:["teaching"],links:[{address:"",type:""}]}]},{title:"Education",render:"makeDegree",records:[{title:"Bachelors of Arts",place:"Wellesley College",duration:"Class of 2023",description:"Double major in Computer Science and Cognitive Science",details:["4.0 GPA","Notable Computer Science courses: Data Structures, Introduction to Computer Systems, Fundamentals of Algorithms, Principles of Programming Languages, Human-Computer Interaction, Mobile App Development","Notable Cognitive Sciece courses: Statistics, Sensation and Perception, Psychology of Language, 2D Design","Notable Mathematics courses: Multivariable Calculus, Combinatorics and Graph Theory, Linear Algebra, Differential Equations"],tags:["Java","C","Racket","HTML","CSS","React","React Native","R","Tidyverse","SPSS","prototyping","tutoring"],links:[{address:"",type:""}]},{title:"High School Diploma",place:"Choate Rosemary Hall",duration:"Class of 2019",description:"",details:["3.8 GPA and awarded Dean's List recognition for all terms","Head Programmer for Choate Robotics' VEX and FIRST teams for three years","Peer Tutor in Physics for three years","Selected as a Prefect","Notable courses: Robotics I, II, and III; Introduction to Web Development, AP Computer Science, Mobile App Development"],tags:["C","Java","HTML","CSS","JavaScript","Python","Swift","Ionic","robotics","VEX","FIRST"],links:[{address:"CRH_Diploma.pdf",type:"Certificate"}]}]},{title:"Certifications",render:"makeDegree",records:[{title:"Red Cross Lifeguard",place:"Expired",duration:"June 2017",description:"",details:["Certified in both pool and waterfront lifeguarding","Regularly certified and re-certified in CPR and AED administration, including on children and babies"],tags:[],links:[{address:"Lifeguarding_Cert.pdf",type:"Certificate"}]}]},{title:"Awards and Recognitions",render:"makeDegree",records:[{title:"National Merit Scholar",place:"Winner",duration:"Spring 2019",description:"National Merit Scholarship Corporation",details:["Selected for a 2019 National Merit Scholarship award based on high PSAT scores and high academic achievement"],tags:[],links:[{address:"",type:""}]},{title:"Excellence in Advanced Computer Science",place:"Winner",duration:"Spring 2017",description:"Choate Rosemary Hall",details:["Selected as a sophomore to be one of two winners of recognition from the CRH CS department due to my achievement in CS and robotics courses as well as my leadership in Choate Robotics"],tags:[],links:[{address:"",type:""}]}]}]},O={title:"My Projects",icon:"fas fa-code-branch",img:"memoji.jpg",sections:[{title:"Programming",render:"makeDegree",records:[{title:"This Website",place:"Web App",duration:"Personal",description:"A website that allows me to elaborate on my professional skills and background",details:["React architecture enables flexible design elements and easy data input","Designed with simplicity in mind with respect to both structure and aesthetics","Projected to include either automatic parsing of my job history database from Notion or an input interface to abstract from typing in a JSON file, which frankly I'm getting rather sick of by this point"],tags:["React","HTML","CSS","JSON","Bootstrap"],links:[{address:"",type:""}]},{title:"Introspect",place:"App Concept and Website",duration:"CS 220: Human-Computer Interaction",description:"A journaling app designed to help users romanticize their own lives",details:["Journal: leads a user through prompted reflection on their day and allows a user to upload photos, audio, location data, and other media among stickers and drawings to capture the highlights","Calendar: displays a user's entries in calendar form with personalized icons and colors to summarize each day for an easy glance at recent wellness","Comfort Catalogue: saves a user's music, movie, TV, and book inputs in an easily searchable format so they can quickly recognize and rediscover media that has previously brought them comfort"],tags:["Balsamiq","user research"],links:[{address:"https://cs.wellesley.edu/~mac220/Introspect/",type:"Website"}]},{title:"Quibble",place:"Full-Stack App",duration:"Personal",description:"An app that scrapes WizardingWorld.com quizzes for a Harry Potter Trivial Pursuit companion app",details:["Uses BS4 and Selenium to load and scrape quiz and question data","Saves data in MongoDB cluster","Serves access to database using a RESTful API utilizing Python, Flask, and Heroku","Will soon feature a React Native iOS app with a swipable card interface"],tags:["Python","MongoDB","Selenium","BeautifulSoup4","Flask","Heroku","React Native"],links:[{address:"",type:""}]},{title:"Kindle Vocab Parser",place:"CLI App",duration:"Personal",description:"A script that scrapes vocabulary data from Kindle and uploads it to a Notion database",details:["Loads data off of Kindle SQL database","Matches lookups and words to definitions and grammer information","Saves the consolidated data to a Notion page for easy multi-device access"],tags:["Python","Notion API","SQL","RapidAPI"],links:[{address:"",type:""}]},{title:"Neopixel Clock",place:"Arduino Project",duration:"Personal",description:"An Arduino program that represents the current time on Adafruit NeoPixel circles",details:["Features two NeoPixel strips, one 12-LED circle and one 60-LED circle, mounted on a LEGO square in a hand-built wood frame","Will soon make use of custom 3D CAD file to streamline the clock's physical footprint"],tags:["Arduino","Neopixel","C","soldering","woodworking","CAD"],links:[{address:"",type:""}]}]},{title:"Research",render:"makeDegree",records:[{title:"COVID, Conflict, and Reddit",place:"Data Science Paper",duration:"CS 315: Data and Text Mining",description:"ABSTRACT: Reddit's r/AmITheAsshole community is a popular and divisive forum in which individuals post descriptions of personal moral dilemmas or accusations for other users to judge. While the judicial dynamics of subreddit are well-documented, few studies have examined the implicit sociological data embedded in its posts. In response to this blind spot, this paper aims to track the common topics behind those submissions over a five-year period (between June 2016 and June 2021, inclusive) to see if and how the COVID-19 pandemic and subsequent social shift impacted the subjects, prevalence, and nature of interpersonal conflict. Through topic modeling analysis, we find that no such shift is evident in the data.",details:[],tags:[],links:[{address:"COVID__Conflict__and_Reddit.pdf",type:"Paper"}]}]}]},q={title:"My Skills",icon:"fa fa-code",img:"logo.png",sections:[{title:"Technologies",render:"",records:[{title:"React",place:"Web Development",duration:"x",description:"y",details:["z"],tags:["Arduino","Neopixel","C","soldering","woodworking","CAD"],links:[{address:"",type:""}]}]}]},z={title:"About Me",icon:"far fa-user",img:"portrait1.jpg",sections:[{title:"Developer.  Designer. Problem-Solver.",render:"makeDegree",records:[]}]};var p={resume:B,projects:O,skills:q,about:z};const e=m.exports.jsx,i=m.exports.jsxs,_=m.exports.Fragment,G=t=>e("ul",{class:"nav justify-content-center",children:t.pages.map(a=>i(h,{href:"/"+a,title:a,className:"home-nav-button",children:[e("i",{className:t.data[a].icon+" fa-3x home-nav-icon"}),e("p",{className:"button-label",children:a})]}))}),J=["/assets/logo.png","/assets/memoji.jpeg"];var V=0;function K(){var t=p,a=["about","resume","projects"];return i("div",{className:"content",children:[e("img",{class:"profile",src:J[V]}),e("div",{className:"heading",children:e("h1",{className:"title",children:"Annabelle Strong"})}),e(G,{pages:a,data:t})]})}const U={Website:"fa fa-external-link",Repository:"fa fa-code-fork",GitHub:"fa fa-github",Certificate:"fa fa-certificate",LinkedIn:"fa fa-linkedin",Paper:"fa fa-file-text-o"},$=t=>e("a",{href:t.address,target:"_blank",title:t.label,children:e("i",{className:`sm_icon ${t.icon}`})});function S(t){return new URL({}[`./files/${t}`],self.location).href}const u=t=>(console.log(S("CRH_Diploma.pdf")),t&&t.address?e($,{address:t.address.includes("http")?t.address:S(t.address),icon:!t.icon||!t.icon.includes("-")?U[t.label]:t.icon,label:t.label,newTab:t.address.includes("http")}):e(_,{})),Q=t=>i("div",{className:"header card-title",children:[e("h3",{class:"name",children:t.left}),e("h3",{class:"place",children:t.right})]}),X=t=>e("ul",{className:"details",children:t.details.map(a=>i("li",{children:[" ",a," "]}))}),Y=t=>e("ul",{className:"tags",children:t.list.map(a=>e("span",{class:"badge badge-pill",children:a}))}),Z=t=>i("li",{className:"record",children:[e("h4",{children:t.header}),i("div",{className:"card p-3 text-left",children:[e(Q,{left:t.title,right:t.place}),i("div",{className:"card-content",children:[e("i",{children:t.subtitle}),e(X,{details:t.content})]}),i("div",{className:"record-footer",children:[e(Y,{list:t.footer}),i("span",{children:[" ",t.links.map(a=>e(u,{address:a.address,label:a.type},a.type))]})]})]})]}),C=t=>i("div",{className:"section",id:t.title,children:[e("h2",{children:i("b",{children:[" ",t.title," "]})}),e("ul",{className:"record-list",children:t.records.map(a=>ee(a))})]});function ee(t){return e(Z,{header:t.duration,title:t.title,place:t.place,subtitle:t.description,content:t.details,footer:t.tags,links:t.links})}x.exports.forwardRef((t,{ref:a})=>e(C,v(y({},t),{ref:a})));const te=t=>e("ul",{className:"nav justify-content-center sticky-top",id:"page-nav",children:t.sections.map(a=>e("button",{type:"button",className:"btn",children:a.title},a.title))}),ae=t=>e(h,{href:"/",children:e("img",{className:"portrait",title:"Home",src:"/assets/"+t.image})}),N=t=>i("span",{children:[i("header",{className:"justify-content-center",children:[e(ae,{image:t.img}),e("h1",{className:"title",children:t.title})]}),e(te,{sections:t.sections})]}),g=t=>{var a=p[t.name.toLowerCase()],n=a.sections;return i("div",{className:"page",children:[e(N,{title:a.title,sections:n,img:a.img}),e("ul",{children:n.map(r=>e(C,{title:r.title,records:r.records},r.title))})]})};function ie(){return e(g,{name:"Resume"})}function ne(){return e(g,{name:"Projects"})}function R(){const t="Developer. Designer. Problem-Solver.",a="Hi there! I'm Annabelle Strong, a college junior double majoring in Computer Science and Cognitive and Linguistic Sciences (the latter with a concentration in cognitive psychology). I'm passionate about technology, cognition, design, and the many intersections between the three, especially in areas like AI/ML, HCI/HCD, and human-oriented software engineering in general.",n="I have over 10 years of experience with development and design spanning technologies from robotics, memory allocation, and Arduino to software architecture and HCI. I'm also interested in art, with particular skill in graphite and Procreate on iPad.",r="I'm currently seeking a summer internship in technology and/or design for Summer 2022. Please don't hesitate to reach out if you would like to hear more about my qualifications. My contact information in listed at the top of my resum\xE9, a PDF of which is available through the button on the bottom right.";return i("div",{className:"page",children:[e(N,{title:"About Me",img:p.about.img,sections:[]}),i("li",{className:"record",children:[e("h4",{}),i("div",{className:"card p-3 text-center",children:[e("h2",{className:"tagline",children:t}),i("div",{className:"about-me",children:[e("p",{children:a}),e("p",{children:n}),e("p",{children:e("b",{children:r})})]})]})]})]})}function oe(){return e(g,{name:"Skills"})}var se=()=>i(j,{children:[e(l,{path:"/",component:K}),e(l,{path:"/about",component:R}),e(l,{path:"/resume",component:ie}),e(l,{path:"/projects",component:ne}),e(l,{path:"/skills",component:oe})]});const re="Annabelle Strong",le="The personal website and portfolio of Annabelle L. Strong",ce="glitch-default",de="https://cdn.glitch.com/605e2a51-d45f-4d87-a285-9410ad350515%2Fhello-react-social.png?v=1616712747908";var c={"glitch-help-instructions":"For a custom domain, change the 'url' parameter from 'glitch-default' to your domain _without_ a traling slash, like 'https://www.example.com'",title:re,description:le,url:ce,image:de};const ue=()=>{const t=window.location.hostname;return i(T,{children:[e("title",{children:c.title}),e("meta",{name:"description",content:c.description}),e("meta",{name:"robots",content:"index,follow"}),e("link",{rel:"canonical",href:t}),e("meta",{property:"og:title",content:c.title}),e("meta",{property:"og:type",content:"article"}),e("meta",{property:"og:url",content:t}),e("meta",{property:"og:description",content:c.description}),e("meta",{property:"og:image",content:c.image}),e("meta",{name:"twitter:card",content:"summary"})]})},w=()=>e("div",{children:e("a",{href:new URL("/files/Resume.pdf",self.location).href,target:"_blank",className:"download-button",title:"View PDF Resume",children:e("i",{className:"fas fa-file-download fa-2x download-icon"})})}),k=()=>i("ul",{children:[e(u,{address:"https://github.com/anstrong",label:"GitHub"}),e(u,{address:"https://www.linkedin.com/in/annabellestrong/",label:"LinkedIn"})]});function me(){const t=window.innerWidth<=800;return console.log(window.innerWidth),t?i("main",{role:"main",className:"wrapper",children:[i("div",{className:"links top-bar",children:[e(k,{}),e(w,{})]}),i("div",{className:"content",children:[e(R,{}),e("i",{children:"please visit this website (anstrong.github.io) on a desktop for more information."})]})]}):i(M,{children:[e(ue,{}),i("main",{role:"main",className:"wrapper",children:[e("div",{className:"links top-bar",children:e(h,{href:"/",children:e("i",{class:"fas fa-home back"})})}),e("div",{className:"content",children:e(se,{})})]}),i("footer",{className:"footer fixed-bottom",children:[e("div",{className:"links",children:e(k,{})}),e(w,{})]})]})}H.render(e(W.StrictMode,{children:e(E,{children:e(me,{})})}),document.getElementById("root"));
