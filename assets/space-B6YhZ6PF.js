import{j as e}from"./jsx-runtime--26OcTxz.js";import{useMDXComponents as o}from"./index-8CGhsCZi.js";import{s as a}from"./index-V43a0mYS.js";import{M as m}from"./chunk-HLWAVYOI-D4aQKLT3.js";/* empty css                    */import"./index-BLgStI3F.js";import"./_commonjsHelpers-BosuxZz1.js";import"./iframe-ICGnvP6a.js";import"../sb-preview/runtime.js";import"./react-18-dx9qDk38.js";import"./index-B99Sp-t6.js";import"./index-JYYDrx1V.js";import"./index-BQuT9bWn.js";import"./index-B_J8iUie.js";import"./index-DLle_QMf.js";import"./index-DrFu-skq.js";const d=({tokens:s,hasRemValue:r=!1})=>e.jsxs("table",{className:"tokens-grid",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Name"}),e.jsx("th",{children:"Value"}),r&&e.jsxs(e.Fragment,{children:[e.jsx("th",{children:"Pixels"}),e.jsx("th",{children:"Preview"})]})]})}),e.jsx("tbody",{children:Object.entries(s).map(([n,t])=>e.jsxs("tr",{children:[e.jsx("td",{children:n}),e.jsx("td",{children:t}),r&&e.jsxs(e.Fragment,{children:[e.jsxs("td",{children:[Number(t.replace(/rem/,""))*16,"px"]}),e.jsx("td",{children:e.jsx("div",{className:"rem-bar",style:{width:`${Number(t.replace(/rem/,""))*16}px`}})})]})]},n))})]});d.__docgenInfo={description:"",methods:[],displayName:"TokensGrid",props:{tokens:{required:!0,tsType:{name:"Record",elements:[{name:"string"},{name:"string"}],raw:"Record<string, string>"},description:""},hasRemValue:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}}}};function i(s){const r={h1:"h1",p:"p",...o(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(m,{title:"Tokens/Spaces"}),`
`,e.jsx(r.h1,{id:"spaces",children:"Spaces"}),`
`,e.jsx(r.p,{children:"Esses são os espaçamentos padronizados do nosso UI"}),`
`,e.jsx(d,{hasRemValue:!0,tokens:a})]})}function R(s={}){const{wrapper:r}={...o(),...s.components};return r?e.jsx(r,{...s,children:e.jsx(i,{...s})}):i(s)}export{R as default};