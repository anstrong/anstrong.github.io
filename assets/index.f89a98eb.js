var k=Object.defineProperty,C=Object.defineProperties;var P=Object.getOwnPropertyDescriptors;var p=Object.getOwnPropertySymbols;var R=Object.prototype.hasOwnProperty,A=Object.prototype.propertyIsEnumerable;var g=(t,a,i)=>a in t?k(t,a,{enumerable:!0,configurable:!0,writable:!0,value:i}):t[a]=i,f=(t,a)=>{for(var i in a||(a={}))R.call(a,i)&&g(t,i,a[i]);if(p)for(var i of p(a))A.call(a,i)&&g(t,i,a[i]);return t},b=(t,a)=>C(t,P(a));import{j as v,L as u,r as I,S as D,R as d,W as L,a as M,b as m,c as x,q as j}from"./vendor.5c9add80.js";const H=function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const r of o)if(r.type==="childList")for(const l of r.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&s(l)}).observe(document,{childList:!0,subtree:!0});function i(o){const r={};return o.integrity&&(r.integrity=o.integrity),o.referrerpolicy&&(r.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?r.credentials="include":o.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(o){if(o.ep)return;o.ep=!0;const r=i(o);fetch(o.href,r)}};H();const T={icon:"far fa-file-alt",sections:[{title:"Experience",render:"makeJob",records:[{title:"Undergraduate Researcher",place:"Wellesley College",duration:"Spring 2022",description:"Wellesley CrowdNets Lab",details:["Developing a mobile app using React Native to carry out an experiment about incentivizing data collection in the general population."],tags:["research","app development","React Native"],links:[{address:"",type:""}]},{title:"Peer Tutor",place:"Wellesley College",duration:"Fall 2021",description:"Computer Science and Math Departments",details:["Guided students through course material for Fundamental Algorithms, covering topics like greedy algorithms, dynamic programming, divide-and-conquer, and NP-hardness","Assisted students with questions and problems for a variety of math courses, including Calculus, Multivariable Calculus, Combinatorics and Graph Theory, Linear Algebra, and Differential Equations"],tags:["teaching","algorithms","mathematics"],links:[{address:"",type:""}]},{title:"TLDP Intern",place:"Travelers Insurance",duration:"Summer 2021",description:"Data Analytics Group",details:["Supported transition to Salesforce by collaborating with business users to iteratively build a library of template reports while designing and implementing report governance strategies","Completed extensive training through Trailhead on use and administration of the Salesforce platform"],tags:["Salesforce","DevOps"],links:[{address:"",type:""}]},{title:"Technology Intern",place:"Travelers Insurance",duration:"Summer 2020",description:"Innovation Technology Group",details:["Contributed in the development of a web-based event hub using React, Node, and MongoDB","Collaborated on the design and early development of IoT (Internet of Things) software architecture using Python with AWS","Researched and analyzed IoT sensors, systems, and vendors with respect to business objectives"],tags:["React","Node","MongoDB","Python","AWS","IoT"],links:[{address:"",type:""}]},{title:"Bookkeeping and Office Assistant",place:"Gallagher Holdings, Inc.",duration:"January 2020",details:["Reconciled bank statements, invoices and other expenses in support of year-end financial close","Designed and implemented new filing system"],tags:["organization","bookkeeping"],links:[{address:"",type:""}]},{title:"Summer Programs Teaching Assistant",place:"Choate Rosemary Hall",duration:"Summer 2019",description:"Introduction to Robotics",details:["Designed and presented lesson plans","Developed projects and assessed student performance"],tags:["robotics","VEX","teaching"],links:[{address:"",type:""}]},{title:"Lifeguard and Swim Instructor",place:"Various Employers",duration:"Summer 2017 & Summer 2018",details:["Supervised waterfront activity for unsafe behaviors","Instructed children of all ages in swimming basics and stroke development, periodically assessing skill levels and writing progress reports","Managed injuries and incidents when necessary"],tags:["teaching"],links:[{address:"",type:""}]}]},{title:"Education",render:"makeDegree",records:[{title:"High School Diploma",place:"Choate Rosemary Hall",duration:"Class of 2019",description:"",details:["3.8 GPA and awarded Dean's List recognition for all terms","Head Programmer for Choate Robotics' VEX and FIRST teams for three years","Peer Tutor in Physics for three years","Selected as a Prefect","Notable courses: Robotics I, II, and III; Introduction to Web Development, AP Computer Science, Mobile App Development"],tags:["C","Java","HTML","CSS","JavaScript","Python","Swift","Ionic","robotics","VEX","FIRST"],links:[{address:"",type:""}]},{title:"Bachelors of Arts",place:"Wellesley College",duration:"Class of 2023",description:"Double major in Computer Science and Cognitive Science",details:["4.0 GPA","Notable Computer Science courses: Data Structures, Introduction to Computer Systems, Fundamentals of Algorithms, Principles of Programming Languages, Human-Computer Interaction, Mobile App Development","Notable Cognitive Sciece courses: Statistics, Sensation and Perception, Psychology of Language, 2D Design","Notable Mathematics courses: Multivariable Calculus, Combinatorics and Graph Theory, Linear Algebra, Differential Equations"],tags:["Java","C","Racket","HTML","CSS","React","React Native","R","Tidyverse","SPSS","prototyping","tutoring"],links:[{address:"",type:""}]}]},{title:"Certifications",render:"makeDegree",records:[{title:"Red Cross Lifeguard",place:"Expired",duration:"June 2017",description:"",details:["Certified in both pool and waterfront lifeguarding","Regularly certified and re-certified in CPR and AED administration, including on children and babies"],tags:[],links:[{address:"",type:""}]}]},{title:"Awards and Recognitions",render:"makeDegree",records:[{title:"National Merit Scholar",place:"Winner",duration:"Spring 2019",description:"National Merit Scholarship Corporation",details:["Selected for a 2019 National Merit Scholarship award based on high PSAT scores and high academic achievement"],tags:[],links:[{address:"",type:""}]},{title:"Excellence in Advanced Computer Science",place:"Winner",duration:"Spring 2017",description:"Choate Rosemary Hall",details:["Selected as a sophomore to be one of two winners of recognition from the CRH CS department due to my achievement in CS and robotics courses as well as my leadership in Choate Robotics"],tags:[],links:[{address:"",type:""}]}]}]},E={icon:"fas fa-code-branch",sections:[{title:"Programming",render:"makeDegree",records:[{title:"This Website",place:"Web App",duration:"CS 220: Human-Computer Interaction",description:"A website that allows me to elaborate on my professional skills and background",details:["React architecture enables flexible design elements and easy data input","Designed with simplicity in mind with respect to both structure and aesthetics","Projected to include either automatic parsing of my job history database from Notion or an input interface to abstract from typing in a JSON file, which frankly I'm getting rather sick of by this point"],tags:["React","HTML","CSS","JSON","Bootstrap"],links:[{address:"",type:""}]},{title:"Introspect",place:"App Concept and Website",duration:"CS 220: Human-Computer Interaction",description:"A journaling app designed to help users romanticize their own lives",details:["Journal: leads a user through prompted reflection on their day and allows a user to upload photos, audio, location data, and other media among stickers and drawings to capture the highlights","Calendar: displays a user's entries in calendar form with personalized icons and colors to summarize each day for an easy glance at recent wellness","Comfort Catalogue: saves a user's music, movie, TV, and book inputs in an easily searchable format so they can quickly recognize and rediscover media that has previously brought them comfort"],tags:["Balsamiq","user research"],links:[{address:"https://cs.wellesley.edu/~mac220/Introspect/",type:""}]},{title:"Quibble",place:"Full-Stack App",duration:"Personal",description:"An app that scrapes WizardingWorld.com quizzes for a Harry Potter Trivial Pursuit companion app",details:["Uses BS4 and Selenium to load and scrape quiz and question data","Saves data in MongoDB cluster","Serves access to database using a RESTful API utilizing Python, Flask, and Heroku","Will soon feature a React Native iOS app with a swipable card interface"],tags:["Python","MongoDB","Selenium","BeautifulSoup4","Flask","Heroku","React Native"],links:[{address:"",type:""}]},{title:"Kindle Vocab Parser",place:"CLI App",duration:"Personal",description:"A script that scrapes vocabulary data from Kindle and uploads it to a Notion database",details:["Loads data off of Kindle SQL database","Matches lookups and words to definitions and grammer information","Saves the consolidated data to a Notion page for easy multi-device access"],tags:["Python","Notion API","SQL","RapidAPI"],links:[{address:"",type:""}]},{title:"Neopixel Clock",place:"Arduino Project",duration:"Personal",description:"An Arduino program that represents the current time on Adafruit NeoPixel circles",details:["Features two NeoPixel strips, one 12-LED circle and one 60-LED circle, mounted on a LEGO square in a hand-built wood frame","Will soon make use of custom 3D CAD file to streamline the clock's physical footprint"],tags:["Arduino","Neopixel","C","soldering","woodworking","CAD"],links:[{address:"",type:""}]}]}]},F={icon:"far fa-user",sections:[{title:"Developer.  Designer. Problem-Solver.",render:"makeDegree",records:[]}]};var h={resume:T,projects:E,about:F};const e=v.exports.jsx,n=v.exports.jsxs,W=t=>e("ul",{class:"nav justify-content-center",children:t.pages.map(a=>n(u,{href:"/"+a,title:a,className:"home-nav-button",children:[e("i",{className:t.data[a].icon+" fa-3x home-nav-icon"}),e("p",{className:"button-label",children:a})]}))}),q=["https://cdn.glitch.me/47315a0e-1265-4e95-aa84-887a21ec6fb2%2Flogo.png?v=1635296262360"];var B=0;function z(){var t=h,a=["about","resume","projects"];return n("div",{className:"content",children:[e("img",{class:"profile",src:q[B]}),e("div",{className:"heading",children:e("h1",{className:"title",children:"Annabelle Strong"})}),e(W,{pages:a,data:t})]})}const O=t=>n("div",{className:"header card-title",children:[e("h3",{class:"name",children:t.left}),e("h3",{class:"place",children:t.right})]}),G=t=>e("ul",{className:"details",children:t.details.map(a=>n("li",{children:[" ",a," "]}))}),J=t=>e("ul",{className:"tags",children:t.list.map(a=>e("span",{class:"badge badge-pill",children:a}))}),V=t=>n("li",{className:"record",children:[e("h4",{children:t.header}),n("div",{className:"card p-3 text-left",children:[e(O,{left:t.title,right:t.place}),n("div",{className:"card-content",children:[e("i",{children:t.subtitle}),e(G,{details:t.content})]}),e("div",{className:"record-footer",children:e(J,{list:t.footer})})]})]}),S=t=>n("div",{className:"section",id:t.title,children:[e("h2",{children:n("b",{children:[" ",t.title," "]})}),e("ul",{className:"record-list",children:t.records.map(a=>Q(a))})]});function Q(t){return e(V,{header:t.duration,title:t.title,place:t.place,subtitle:t.description,content:t.details,footer:t.tags})}I.exports.forwardRef((t,{ref:a})=>e(S,b(f({},t),{ref:a})));const K=t=>e("ul",{className:"nav justify-content-center sticky-top",id:"page-nav",children:t.sections.map(a=>e("button",{type:"button",className:"btn",children:a.title},a.title))}),X=t=>n("span",{children:[n("header",{className:"justify-content-center",children:[e(u,{href:"/",children:e("img",{className:"logo",title:"Home",src:"https://cdn.glitch.me/47315a0e-1265-4e95-aa84-887a21ec6fb2%2Flogo.png?v=1635296262360"})}),e("h1",{className:"title",children:t.title})]}),e(K,{sections:t.sections})]}),w=t=>{var a=h[t.name.toLowerCase()].sections;return console.log(a),n("div",{className:"page",children:[e(X,{title:`My ${t.name}`,sections:a}),e("ul",{children:a.map(i=>e(S,{title:i.title,records:i.records},i.title))})]})};function $(){return e(w,{name:"Resume"})}function U(){return e(w,{name:"Projects"})}function N(){return h.about.sections,n("div",{className:"page",children:[n("header",{className:"justify-content-center",children:[e(u,{href:"/",children:e("img",{className:"portrait",title:"Home",src:"https://cdn.glitch.me/47315a0e-1265-4e95-aa84-887a21ec6fb2%2F2021%2520Portrait.jpg?v=1635389451629"})}),e("h1",{className:"title",children:"About Me"})]}),n("li",{className:"record",children:[e("h4",{}),n("div",{className:"card p-3 text-center",children:[e("h2",{className:"tagline",children:"Developer. Designer. Problem-Solver."}),n("div",{className:"about-me",children:[e("p",{children:"Hi there! I'm Annabelle Strong, a college junior double majoring in Computer Science and Cognitive and Linguistic Sciences (the latter with a concentration in cognitive psychology). I'm passionate about technology, cognition, design, and the many intersections between the three, especially in areas like AI/ML, HCI/HCD, and human-oriented software engineering in general."}),e("p",{children:"I have over 10 years of experience with development and design spanning technologies from robotics, memory allocation, and Arduino to software architecture and HCI. I'm also interested in art, with particular skill in graphite and Procreate on iPad."}),e("p",{children:e("b",{children:"I'm currently seeking a summer internship in technology and/or design for Summer 2022. Please don't hesitate to reach out if you would like to hear more about my qualifications. My contact information in listed at the top of my resum\xE9, a PDF of which is available through the button on the bottom right."})})]})]})]})]})}var _=()=>n(D,{children:[e(d,{path:"/",component:z}),e(d,{path:"/about",component:N}),e(d,{path:"/resume",component:$}),e(d,{path:"/projects",component:U})]});const Y="Annabelle Strong",Z="The personal website and portfolio of Annabelle L. Strong",ee="glitch-default",te="https://cdn.glitch.com/605e2a51-d45f-4d87-a285-9410ad350515%2Fhello-react-social.png?v=1616712747908";var c={"glitch-help-instructions":"For a custom domain, change the 'url' parameter from 'glitch-default' to your domain _without_ a traling slash, like 'https://www.example.com'",title:Y,description:Z,url:ee,image:te};const ae=()=>{const t=window.location.hostname;return n(L,{children:[e("title",{children:c.title}),e("meta",{name:"description",content:c.description}),e("meta",{name:"robots",content:"index,follow"}),e("link",{rel:"canonical",href:t}),e("meta",{property:"og:title",content:c.title}),e("meta",{property:"og:type",content:"article"}),e("meta",{property:"og:url",content:t}),e("meta",{property:"og:description",content:c.description}),e("meta",{property:"og:image",content:c.image}),e("meta",{name:"twitter:card",content:"summary"})]})},ne=t=>e("a",{href:t.address,title:t.label,children:e("i",{className:"fab social-icon "+t.icon})}),y=t=>e("ul",{children:t.buttons.map(a=>e(ne,{address:a.address,icon:a.icon,label:a.label},a.label))}),ie=(t,a,i)=>{if(typeof window=="undefined"||typeof window.matchMedia=="undefined")return i;const s=window.matchMedia(t),[o,r]=m.useState(!!s.matches);return m.useEffect(()=>{const l=()=>r(!!s.matches);return s.addListener(l),()=>s.removeListener(l)},[]),o?a:i};function oe(){const t=[{label:"LinkedIn",icon:"fa-linkedin-in",address:"https://www.linkedin.com/in/annabellestrong/"},{label:"GitHub",icon:"fa-github",address:"https://github.com/anstrong"}];return ie({query:"(max-width: 1000px)"})?n(M,{children:[e(ae,{}),n("main",{role:"main",className:"wrapper",children:[e("div",{className:"links top-bar",children:e(u,{href:"/",children:e("i",{class:"fas fa-home back"})})}),e("div",{className:"content",children:e(_,{})})]}),n("footer",{className:"footer fixed-bottom",children:[e("div",{className:"links",children:e(y,{buttons:t})}),e("div",{children:e("a",{href:"https://github.com/anstrong/anstrong.github.io/blob/9161a71522d17336688c04306876db832a1ad1d6/assets/Resume.pdf",className:"download-button",title:"View PDF Resume",children:e("i",{className:"fas fa-file-download fa-2x download-icon"})})})]})]}):n("main",{role:"main",className:"wrapper",children:[n("div",{className:"links top-bar",children:[e(y,{buttons:t}),e("div",{children:e("a",{href:"https://github.com/anstrong/anstrong.github.io/blob/9161a71522d17336688c04306876db832a1ad1d6/assets/Resume.pdf",className:"download-button",title:"View PDF Resume",children:e("i",{className:"fas fa-file-download fa-2x download-icon"})})})]}),n("div",{className:"content",children:[e(N,{}),e("i",{children:" hi! thank you for your interest. this site is much nicer on a computer if you want more information."})]})]})}x.render(e(m.StrictMode,{children:e(j,{children:e(oe,{})})}),document.getElementById("root"));
