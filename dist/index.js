"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("react");function n(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var t=n(e);function a(e,n){void 0===n&&(n={});var t=n.insertAt;if(e&&"undefined"!=typeof document){var a=document.head||document.getElementsByTagName("head")[0],o=document.createElement("style");o.type="text/css","top"===t&&a.firstChild?a.insertBefore(o,a.firstChild):a.appendChild(o),o.styleSheet?o.styleSheet.cssText=e:o.appendChild(document.createTextNode(e))}}a(".button-size--large{padding:12px 28px;font-size:16px}.button-size--medium{padding:8px 20px;font-size:13px}.button-size--small{padding:6px 14px;font-size:11px}.button-variant--primary{background-color:#000;color:#fff}.button-variant--primary:hover{background-color:#222;transition-duration:.33s}.button-variant--primary:not(:hover){background-color:#000;transition-duration:.33s}.button-variant--secondary{background-color:#fff;color:#000}.button-variant--secondary:hover{background-color:#222;color:#fff;transition-duration:.33s}.button-variant--secondary:not(:hover){background-color:#fff;color:#000;transition-duration:.33s}.button{border-radius:3px;border:1px solid #000}.button:hover{cursor:pointer}");a(".column{align-items:center}");a(":root{--container-topPadding:20px;--contianer-rightPadding:20px;--contianer-bottomPadding:20px;--contianer-leftPadding:20px;--container-backgroundColor:#fff}.container{padding:var(--container-topPadding) var(--contianer-rightPadding) var(--contianer-bottomPadding) var(--contianer-leftPadding);background-color:var(--container-backgroundColor)}");a(".header-size--large{min-height:80px;height:10vh;max-height:100px}.header-size--medium{min-height:60px;height:8vh;max-height:80px}.header-size--small{min-height:40px;height:5vh;max-height:60px}.header-variant--primary{background-color:#fff}.header-variant--secondary{background-color:#000}.header-box-shadow{box-shadow:0 10px 15px -15px rgba(0,0,0,.4)}header{background-color:#fff;display:grid;align-items:center;font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Open Sans,Helvetica Neue,sans-serif}");a(".section{display:grid;column-gap:1rem;align-items:center}");const o=({columns:e,children:n,className:a,sidePadding:o,backgroundColor:r,verticalPadding:i,minHeight:l,verticalAlign:d})=>t.default.createElement("div",{className:`\n        section\n        ${a}\n      `,style:{gridTemplateColumns:`${e||`repeat(${n&&n.length}, minmax(100px, 1fr))`}`,alignItems:`${d||"center"}`,minHeight:`${l||"0vh"}`,padding:`${i?i.toLowerCase():"0"} ${o?o.toLowerCase():"0vw"}`,backgroundColor:`${r&&r}`}},n);a(':root{--heading-backgroundImage:""}.heading{font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Open Sans,Helvetica Neue,sans-serif;font-weight:400;margin-block-start:0;margin-block-end:.5em}.heading-1{font-size:4rem}.heading-2{font-size:3rem}.heading-3{font-size:2rem}.heading-4{font-size:1.5rem}.heading-5{font-size:1rem}.heading-6{font-size:.8rem}.heading-background-image{background:var(--backgroundImage);background-attachment:fixed;background-repeat:no-repeat;background-size:cover;background-clip:text;-webkit-background-clip:text;-webkit-text-fill-color:transparent}');a(":root{--input-borderColor:#ccc;--input-backgroundColor:#f7f7f7;--input-paddingTop:10px;--input-paddingRight:10px;--input-paddingBottom:10px;--input-paddingLeft:10px;--input-fontSize:16px;--input-fontWeigth:100;--input-lineHeight:1.2em}.input{background-color:var(--input-backgroundColor);border:none;border-bottom:1px solid var(--input-borderColor);display:block;font-size:var(--input-fontSize);font-weight:var(--input-fontWeigth);line-height:var(--input-lineHeight);margin-block-end:.67em;margin-block-start:.67em;padding:var(--input-paddingTop) var(--input-paddingRight) var(--input-paddingBottom) var(--input-paddingLeft);width:calc(100% - var(--input-paddingRight) - var(--input-paddingLeft))}.input:focus{outline:none}");a(".link-variant--primary{color:#000}.link-variant--primary:hover{color:#666;transition-duration:.3s}.link-variant--primary:not(:hover){color:#000;transition-duration:.3s}.link-variant--secondary{color:#ddd}.link-variant--secondary:hover{color:#fff;transition-duration:.3s}.link-variant--secondary:not(:hover){color:#ddd;transition-duration:.3s}.link{color:#000;text-decoration:none;font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Open Sans,Helvetica Neue,sans-serif}");const{useLocation:r}=require("react-router-dom"),{Link:i}=require("react-router-dom");a(".logo{font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Open Sans,Helvetica Neue,sans-serif;font-weight:300}.logo:hover{cursor:pointer}.logo-size--small{font-size:14px}.logo-size--medium{font-size:18px}.logo-size--large{font-size:22px}");a(".menu-child-wrapper-alignment--center:not(:first-child):not(:last-child){margin:0 1.25vw}.menu-child-wrapper-alignment--center:first-child{margin-right:1.25vw}.menu-child-wrapper-alignment--center:last-child{margin-left:1.25vw}.menu-child-wrapper-alignment--left:not(:last-child){margin-right:2.5vw}.menu-child-wrapper-alignment--right:not(:first-child){margin-left:2.5vw}.menu-child-wrapper-direction--horizontal{display:inline}.menu-child-wrapper-direction--vertical{display:block}");a(".modal{position:fixed;top:0;left:0}.modal-background{background-color:rgba(0,0,0,.2);width:100vw;height:100vh;display:grid;align-items:center;justify-content:center}");a("");a(".paragraph{font-size:18px;font-weight:300;line-height:1.8em;font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Open Sans,Helvetica Neue,sans-serif;margin-block-end:2rem}");const{BrowserRouter:l}=require("react-router-dom"),{Switch:d}=require("react-router-dom");exports.Button=({children:e,onClick:n,size:a,variant:o})=>t.default.createElement("button",{onClick:n,className:`\n        button\n        button-size--${a?a.toLowerCase():"medium"}\n        button-variant--${o?o.toLowerCase():"primary"}\n      `},e),exports.Column=({children:e,alignment:n})=>t.default.createElement("div",{className:"\n        column\n      ",style:{justifySelf:`${n?n.toLowerCase():"start"}`}},e),exports.Container=({children:e})=>t.default.createElement("div",{className:"\n        container\n      "},e),exports.Header=({shadow:e,children:n,columns:a,sidePadding:r,size:i,variant:l,backgroundColor:d})=>t.default.createElement(o,{columns:a,sidePadding:r?r.toLowerCase():"3vw",backgroundColor:d,className:`\n        header\n        header-size--${i?i.toLowerCase():"medium"}\n        header-variant--${l?l.toLowerCase():"primary"}\n        ${e?"header-box-shadow":null}\n      `},n),exports.Heading=({children:n,level:a,backgroundImage:o,size:r,weight:i})=>(e.useEffect((()=>{o&&document.documentElement.style.setProperty("--heading-backgroundImage",`url(${o})`)})),t.default.createElement(t.default.Fragment,null,a?"1"==a.toLowerCase()?t.default.createElement("h1",{className:`\n            heading heading-1\n            ${o&&"heading-background-image"}\n          `,style:{fontSize:`${r&&r}`,fontWeight:`${i&&i}`}},n):"2"==a.toLowerCase()?t.default.createElement("h2",{className:`\n            heading heading-2\n            ${o&&"heading-background-image"}\n          `,style:{fontSize:`${r&&r.toLowerCase()}`,fontWeight:`${i&&i}`}},n):"3"==a.toLowerCase()?t.default.createElement("h3",{className:`\n            heading heading-3\n            ${o&&"heading-background-image"}\n          `,style:{fontSize:`${r&&r.toLowerCase()}`,fontWeight:`${i&&i}`}},n):"4"==a.toLowerCase()?t.default.createElement("h4",{className:`\n            heading heading-4\n            ${o&&"heading-background-image"}\n            backgr\n          `,style:{fontSize:`${r&&r.toLowerCase()}`,fontWeight:`${i&&i}`}},n):"5"==a.toLowerCase()?t.default.createElement("h5",{className:`\n            heading heading-5\n            ${o&&"heading-background-image"}\n            backgr\n          `,style:{fontSize:`${r&&r.toLowerCase()}`,fontWeight:`${i&&i}`}},n):"6"==a.toLowerCase()?t.default.createElement("h6",{className:`\n            heading heading-6\n            ${o&&"heading-background-image"}\n            backgr\n          `,style:{fontSize:`${r&&r.toLowerCase()}`,fontWeight:`${i&&i}`}},n):t.default.createElement("h2",{className:`\n            heading heading-2\n            ${o&&"heading-background-image"}\n            backgr\n          `,style:{fontSize:`${r&&r.toLowerCase()}`,fontWeight:`${i&&i}`}},n):t.default.createElement("h2",{className:`\n            heading heading-2\n            ${o&&"heading-background-image"}\n          `,style:{color:"black",background:`url(${o?background:null}) no-repeat`,WebkitTextFillColor:`${o&&"transparent"}`,backgroundClip:`${o&&"text"}`,WebkitBackgroundClip:`${o&&"text"}`}},n))),exports.Input=({value:e,id:n,onChange:a,onInput:o,onKeyDown:r,type:i,placeholder:l})=>t.default.createElement("input",{className:`\n        input\n        input-type--${i}\n      `,id:n,placeholder:l,onChange:a,onInput:o,onKeyDown:r,type:i,value:e}),exports.Link=({children:e,to:n,size:a,weight:o,variant:l,href:d})=>{const c=r();return t.default.createElement(t.default.Fragment,null,d?t.default.createElement("a",{href:d,target:"_blank",className:`\n          link\n          link-variant--${l?l.toLowerCase():"primary"}\n        `,style:{fontSize:`${a?a.toLowerCase():"16px"}`,fontWeight:`${o||300}`}},e):t.default.createElement(i,{to:n||c.pathname,className:`\n          link\n          link-variant--${l?l.toLowerCase():"primary"}\n        `,style:{fontSize:`${a?a.toLowerCase():"16px"}`,fontWeight:`${o||300}`}},e))},exports.Logo=({size:e,onClick:n})=>t.default.createElement("div",{onClick:n,className:`\n        logo\n        logo-size--${e?e.toLowerCase():"medium"}\n      `},"Amir Sharapov"),exports.Menu=({children:e,direction:n,alignment:a,className:o})=>t.default.createElement("div",null,e.length>1&&e.map(((e,r)=>t.default.createElement("div",{key:e+r,className:`\n            menu\n            menu-child-wrapper-direction--${n?n.toLowerCase():"horizontal"}\n            menu-child-wrapper-alignment--${a?a.toLowerCase():"center"}\n            ${o}\n          `},e)))),exports.Modal=({children:e,show:n})=>t.default.createElement("div",{hidden:!n,className:"modal"},t.default.createElement("div",{className:"modal-background"},e)),exports.Page=({minHeight:e,verticalPadding:n,sidePadding:a,children:r,columns:i})=>t.default.createElement(o,{minHeight:e||"50vh",verticalPadding:n||"8vh",sidePadding:a||"3vw",verticalAlign:"start",columns:i||"1fr"},t.default.createElement("div",null,r)),exports.Paragraph=({children:e})=>t.default.createElement("p",{className:"\n        paragraph\n      "},e),exports.Router=({children:e})=>React.createElement(l,null,e),exports.Section=o,exports.Switch=({children:e})=>React.createElement(d,null,e);
