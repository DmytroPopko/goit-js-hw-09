function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},r={},o=t.parcelRequired7c6;null==o&&((o=function(e){if(e in n)return n[e].exports;if(e in r){var t=r[e];delete r[e];var o={id:e,exports:{}};return n[e]=o,t.call(o.exports,o,o.exports),o.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){r[e]=t},t.parcelRequired7c6=o);var i=o("eWCmQ");!function(){function t(e,t){const n=Math.random()>.3;return new Promise(((r,o)=>{setTimeout((()=>{n?r(`✅ Fulfilled promise ${e} in ${t}ms`):o(`❌ Rejected promise ${e} in ${t}ms`)}),t)}))}document.querySelector(".form").addEventListener("submit",(n=>{n.preventDefault();const{elements:{delay:r,step:o,amount:l}}=n.target;let u=parseInt(r.value,10);const s=parseInt(o.value,10);for(let n=1;n<=l.value;n++)t(n,u).then((t=>e(i).Notify.success(t))).catch((t=>e(i).Notify.failure(t))),u+=s}))}();
//# sourceMappingURL=03-promises.0e3b01c2.js.map
