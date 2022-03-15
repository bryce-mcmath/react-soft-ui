import o from"react";import r from"styled-components";
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */const t=r.button`
  cursor: pointer;
  border-radius: 5px;
  display: inline-block;
  font-family: inherit;
  color: var(--soft-text-primary);
  background-color: var(--soft-bg-color);
  border: none;
  padding: 12px 6px; 
  box-shadow:
    -5px 5px 10px var(--soft-dark-shadow),
    5px -5px 10px var(--soft-light-shadow);
  &:hover {
    box-shadow: inset 1px 1px 1px var(--soft-light-shadow),
      -12px -12px 24px var(--soft-light-shadow),
      inset -1px -1px 1px var(--soft-dark-shadow),
      12px 12px 24px var(--soft-dark-shadow);
  }
  &:active {
    box-shadow: inset 1px 1px 1px var(--soft-light-shadow),
      -12px -12px 24px var(--soft-light-shadow),
      inset -1px -1px 1px var(--soft-dark-shadow),
      12px 12px 24px var(--soft-dark-shadow);
  }
`,p=r=>{var{size:p,primary:a,disabled:e,text:s,onClick:x}=r,i=function(o,r){var t={};for(var p in o)Object.prototype.hasOwnProperty.call(o,p)&&r.indexOf(p)<0&&(t[p]=o[p]);if(null!=o&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(p=Object.getOwnPropertySymbols(o);a<p.length;a++)r.indexOf(p[a])<0&&Object.prototype.propertyIsEnumerable.call(o,p[a])&&(t[p[a]]=o[p[a]])}return t}(r,["size","primary","disabled","text","onClick"]);return o.createElement(t,Object.assign({type:"button",onClick:x,primary:a,disabled:e,size:p},i),s)};export{p as SoftButton};
//# sourceMappingURL=index.js.map
