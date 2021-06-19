import e,{useEffect as n}from"react";function t(e,n){void 0===n&&(n={});var t=n.insertAt;if(e&&"undefined"!=typeof document){var a=document.head||document.getElementsByTagName("head")[0],o=document.createElement("style");o.type="text/css","top"===t&&a.firstChild?a.insertBefore(o,a.firstChild):a.appendChild(o),o.styleSheet?o.styleSheet.cssText=e:o.appendChild(document.createTextNode(e))}}t(".button-size--large{padding:12px 28px;font-size:16px}.button-size--medium{padding:8px 20px;font-size:13px}.button-size--small{padding:6px 14px;font-size:11px}.button-variant--primary{background-color:#000;color:#fff}.button-variant--primary:hover{background-color:#222;transition-duration:.33s}.button-variant--primary:not(:hover){background-color:#000;transition-duration:.33s}.button-variant--secondary{background-color:#fff;color:#000}.button-variant--secondary:hover{background-color:#222;color:#fff;transition-duration:.33s}.button-variant--secondary:not(:hover){background-color:#fff;color:#000;transition-duration:.33s}.button{border-radius:3px;border:1px solid #000}.button:hover{cursor:pointer}");const a=({children:n,onClick:t,size:a,variant:o})=>e.createElement("button",{onClick:t,className:`\n        button\n        button-size--${a?a.toLowerCase():"medium"}\n        button-variant--${o?o.toLowerCase():"primary"}\n      `},n);t(".column{align-items:center}");const o=({children:n,alignment:t})=>e.createElement("div",{className:"\n        column\n      ",style:{justifySelf:`${t?t.toLowerCase():"start"}`}},n);t(":root{--container-topPadding:20px;--contianer-rightPadding:20px;--contianer-bottomPadding:20px;--contianer-leftPadding:20px;--container-backgroundColor:#fff}.container{padding:var(--container-topPadding) var(--contianer-rightPadding) var(--contianer-bottomPadding) var(--contianer-leftPadding);background-color:var(--container-backgroundColor)}");const i=({children:n})=>e.createElement("div",{className:"\n        container\n      "},n);t(".header-size--large{min-height:80px;height:10vh;max-height:100px}.header-size--medium{min-height:60px;height:8vh;max-height:80px}.header-size--small{min-height:40px;height:5vh;max-height:60px}.header-variant--primary{background-color:#fff}.header-variant--secondary{background-color:#000}.header-box-shadow{box-shadow:0 10px 15px -15px rgba(0,0,0,.4)}header{background-color:#fff;display:grid;align-items:center;font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Open Sans,Helvetica Neue,sans-serif}");t(".section{display:grid;column-gap:1rem;align-items:center}");const r=({columns:n,children:t,className:a,sidePadding:o,backgroundColor:i,verticalPadding:r,minHeight:l,verticalAlign:d})=>e.createElement("div",{className:`\n        section\n        ${a}\n      `,style:{gridTemplateColumns:`${n||`repeat(${t&&t.length}, minmax(100px, 1fr))`}`,alignItems:`${d||"center"}`,minHeight:`${l||"0vh"}`,padding:`${r?r.toLowerCase():"0"} ${o?o.toLowerCase():"0vw"}`,backgroundColor:`${i&&i}`}},t),l=({shadow:n,children:t,columns:a,sidePadding:o,size:i,variant:l,backgroundColor:d})=>e.createElement(r,{columns:a,sidePadding:o?o.toLowerCase():"3vw",backgroundColor:d,className:`\n        header\n        header-size--${i?i.toLowerCase():"medium"}\n        header-variant--${l?l.toLowerCase():"primary"}\n        ${n?"header-box-shadow":null}\n      `},t);t(':root{--heading-backgroundImage:""}.heading{font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Open Sans,Helvetica Neue,sans-serif;font-weight:400;margin-block-start:0;margin-block-end:.5em}.heading-1{font-size:4rem}.heading-2{font-size:3rem}.heading-3{font-size:2rem}.heading-4{font-size:1.5rem}.heading-5{font-size:1rem}.heading-6{font-size:.8rem}.heading-background-image{background:var(--backgroundImage);background-attachment:fixed;background-repeat:no-repeat;background-size:cover;background-clip:text;-webkit-background-clip:text;-webkit-text-fill-color:transparent}');const d=({children:t,level:a,backgroundImage:o,size:i,weight:r})=>(n((()=>{o&&document.documentElement.style.setProperty("--heading-backgroundImage",`url(${o})`)})),e.createElement(e.Fragment,null,a?"1"==a.toLowerCase()?e.createElement("h1",{className:`\n            heading heading-1\n            ${o&&"heading-background-image"}\n          `,style:{fontSize:`${i&&i}`,fontWeight:`${r&&r}`}},t):"2"==a.toLowerCase()?e.createElement("h2",{className:`\n            heading heading-2\n            ${o&&"heading-background-image"}\n          `,style:{fontSize:`${i&&i.toLowerCase()}`,fontWeight:`${r&&r}`}},t):"3"==a.toLowerCase()?e.createElement("h3",{className:`\n            heading heading-3\n            ${o&&"heading-background-image"}\n          `,style:{fontSize:`${i&&i.toLowerCase()}`,fontWeight:`${r&&r}`}},t):"4"==a.toLowerCase()?e.createElement("h4",{className:`\n            heading heading-4\n            ${o&&"heading-background-image"}\n            backgr\n          `,style:{fontSize:`${i&&i.toLowerCase()}`,fontWeight:`${r&&r}`}},t):"5"==a.toLowerCase()?e.createElement("h5",{className:`\n            heading heading-5\n            ${o&&"heading-background-image"}\n            backgr\n          `,style:{fontSize:`${i&&i.toLowerCase()}`,fontWeight:`${r&&r}`}},t):"6"==a.toLowerCase()?e.createElement("h6",{className:`\n            heading heading-6\n            ${o&&"heading-background-image"}\n            backgr\n          `,style:{fontSize:`${i&&i.toLowerCase()}`,fontWeight:`${r&&r}`}},t):e.createElement("h2",{className:`\n            heading heading-2\n            ${o&&"heading-background-image"}\n            backgr\n          `,style:{fontSize:`${i&&i.toLowerCase()}`,fontWeight:`${r&&r}`}},t):e.createElement("h2",{className:`\n            heading heading-2\n            ${o&&"heading-background-image"}\n          `,style:{color:"black",background:`url(${o?background:null}) no-repeat`,WebkitTextFillColor:`${o&&"transparent"}`,backgroundClip:`${o&&"text"}`,WebkitBackgroundClip:`${o&&"text"}`}},t)));t(":root{--input-borderColor:#ccc;--input-backgroundColor:#f7f7f7;--input-paddingTop:10px;--input-paddingRight:10px;--input-paddingBottom:10px;--input-paddingLeft:10px;--input-fontSize:16px;--input-fontWeigth:100;--input-lineHeight:1.2em}.input{background-color:var(--input-backgroundColor);border:none;border-bottom:1px solid var(--input-borderColor);display:block;font-size:var(--input-fontSize);font-weight:var(--input-fontWeigth);line-height:var(--input-lineHeight);margin-block-end:.67em;margin-block-start:.67em;padding:var(--input-paddingTop) var(--input-paddingRight) var(--input-paddingBottom) var(--input-paddingLeft);width:calc(100% - var(--input-paddingRight) - var(--input-paddingLeft))}.input:focus{outline:none}");const c=({value:n,id:t,onChange:a,onInput:o,onKeyDown:i,type:r,placeholder:l})=>e.createElement("input",{className:`\n        input\n        input-type--${r}\n      `,id:t,placeholder:l,onChange:a,onInput:o,onKeyDown:i,type:r,value:n});t(".link-variant--primary{color:#000}.link-variant--primary:hover{color:#666;transition-duration:.3s}.link-variant--primary:not(:hover){color:#000;transition-duration:.3s}.link-variant--secondary{color:#ddd}.link-variant--secondary:hover{color:#fff;transition-duration:.3s}.link-variant--secondary:not(:hover){color:#ddd;transition-duration:.3s}.link{color:#000;text-decoration:none;font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Open Sans,Helvetica Neue,sans-serif}");const{useLocation:s}=require("react-router-dom"),{Link:g}=require("react-router-dom"),m=({children:n,to:t,size:a,weight:o,variant:i,href:r})=>{const l=s();return e.createElement(e.Fragment,null,r?e.createElement("a",{href:r,target:"_blank",className:`\n          link\n          link-variant--${i?i.toLowerCase():"primary"}\n        `,style:{fontSize:`${a?a.toLowerCase():"16px"}`,fontWeight:`${o||300}`}},n):e.createElement(g,{to:t||l.pathname,className:`\n          link\n          link-variant--${i?i.toLowerCase():"primary"}\n        `,style:{fontSize:`${a?a.toLowerCase():"16px"}`,fontWeight:`${o||300}`}},n))};t(".logo{font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Open Sans,Helvetica Neue,sans-serif;font-weight:300}.logo:hover{cursor:pointer}.logo-size--small{font-size:14px}.logo-size--medium{font-size:18px}.logo-size--large{font-size:22px}");const h=({size:n,onClick:t})=>e.createElement("div",{onClick:t,className:`\n        logo\n        logo-size--${n?n.toLowerCase():"medium"}\n      `},"Amir Sharapov");t(".menu-child-wrapper-alignment--center:not(:first-child):not(:last-child){margin:0 1.25vw}.menu-child-wrapper-alignment--center:first-child{margin-right:1.25vw}.menu-child-wrapper-alignment--center:last-child{margin-left:1.25vw}.menu-child-wrapper-alignment--left:not(:last-child){margin-right:2.5vw}.menu-child-wrapper-alignment--right:not(:first-child){margin-left:2.5vw}.menu-child-wrapper-direction--horizontal{display:inline}.menu-child-wrapper-direction--vertical{display:block}");const u=({children:n,direction:t,alignment:a,className:o})=>e.createElement("div",null,n.length>1&&n.map(((n,i)=>e.createElement("div",{key:n+i,className:`\n            menu\n            menu-child-wrapper-direction--${t?t.toLowerCase():"horizontal"}\n            menu-child-wrapper-alignment--${a?a.toLowerCase():"center"}\n            ${o}\n          `},n))));t(".modal{position:fixed;top:0;left:0}.modal-background{background-color:rgba(0,0,0,.2);width:100vw;height:100vh;display:grid;align-items:center;justify-content:center}");const p=({children:n,show:t})=>e.createElement("div",{hidden:!t,className:"modal"},e.createElement("div",{className:"modal-background"},n));t("");const f=({minHeight:n,verticalPadding:t,sidePadding:a,children:o,columns:i})=>e.createElement(r,{minHeight:n||"50vh",verticalPadding:t||"8vh",sidePadding:a||"3vw",verticalAlign:"start",columns:i||"1fr"},e.createElement("div",null,o));t(".paragraph{font-size:18px;font-weight:300;line-height:1.8em;font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Open Sans,Helvetica Neue,sans-serif;margin-block-end:2rem}");const b=({children:n})=>e.createElement("p",{className:"\n        paragraph\n      "},n),{BrowserRouter:v}=require("react-router-dom"),k=({children:e})=>React.createElement(v,null,e),{Switch:y}=require("react-router-dom"),w=({children:e})=>React.createElement(y,null,e);export{a as Button,o as Column,i as Container,l as Header,d as Heading,c as Input,m as Link,h as Logo,u as Menu,p as Modal,f as Page,b as Paragraph,k as Router,r as Section,w as Switch};
