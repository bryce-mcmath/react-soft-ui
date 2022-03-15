"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var t=require("react"),o=require("styled-components");function r(t){return t&&"object"==typeof t&&"default"in t?t:{default:t}}var e=r(t);const a=r(o).default.button`
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
`;exports.SoftButton=t=>{var{size:o,primary:r,disabled:p,text:s,onClick:i}=t,n=
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
***************************************************************************** */
function(t,o){var r={};for(var e in t)Object.prototype.hasOwnProperty.call(t,e)&&o.indexOf(e)<0&&(r[e]=t[e]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(e=Object.getOwnPropertySymbols(t);a<e.length;a++)o.indexOf(e[a])<0&&Object.prototype.propertyIsEnumerable.call(t,e[a])&&(r[e[a]]=t[e[a]])}return r}(t,["size","primary","disabled","text","onClick"]);return e.default.createElement(a,Object.assign({type:"button",onClick:i,primary:r,disabled:p,size:o},n),s)};
//# sourceMappingURL=index.js.map
