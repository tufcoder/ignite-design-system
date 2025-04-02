import{j as a}from"./index-BDhFyJyw.js";import{g as s,h as v,e as c}from"./index-BwdDlXMc.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-B2KKL2uI.js";import"./index-CgfFrydU.js";const j={title:"Ignite-UI/Form/Tooltip",component:s,tags:["autodocs"],args:{date:new Date,available:!0},decorators:[e=>a.jsx(v,{children:a.jsx(e,{})})]},o={render:e=>a.jsx(s,{...e,children:a.jsx(c,{children:e.available?"Disponível":"Indisponível"})})},r={args:{available:!1},render:e=>a.jsx(s,{...e,children:a.jsx(c,{children:e.available?"Disponível":"Indisponível"})})};var n,t,l;o.parameters={...o.parameters,docs:{...(n=o.parameters)==null?void 0:n.docs,source:{originalSource:`{
  render: args => <Tooltip {...args}>
      <Button>{args.available ? 'Disponível' : 'Indisponível'}</Button>
    </Tooltip>
}`,...(l=(t=o.parameters)==null?void 0:t.docs)==null?void 0:l.source}}};var i,p,d;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    available: false
  },
  render: args => <Tooltip {...args}>
      <Button>{args.available ? 'Disponível' : 'Indisponível'}</Button>
    </Tooltip>
}`,...(d=(p=r.parameters)==null?void 0:p.docs)==null?void 0:d.source}}};const T=["Available","Unavailable"];export{o as Available,r as Unavailable,T as __namedExportsOrder,j as default};
