function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},o={},r=t.parcelRequired7c6;null==r&&((r=function(e){if(e in n)return n[e].exports;if(e in o){var t=o[e];delete o[e];var r={id:e,exports:{}};return n[e]=r,t.call(r.exports,r,r.exports),r.exports}var u=new Error("Cannot find module '"+e+"'");throw u.code="MODULE_NOT_FOUND",u}).register=function(e,t){o[e]=t},t.parcelRequired7c6=r);var u=r("eWCmQ");!function(){function t(e,t){const n=Math.random()>.3;return new Promise(((o,r)=>{setTimeout((()=>{n?o(`✅ Fulfilled promise ${e} in ${t}ms`):r(`❌ Rejected promise ${e} in ${t}ms`)}),t)}))}({firstDelay:document.querySelector('input[name="delay"]'),delayStep:document.querySelector('input[name="step"]'),amount:document.querySelector('input[name="amount"]'),createBtn:document.querySelector("button"),form:document.querySelector(".form")}).form.addEventListener("submit",(n=>{n.preventDefault();const{elements:{delay:o,step:r,amount:l}}=n.target;let i=parseInt(o.value,10);const a=parseInt(r.value,10);for(let n=1;n<=l.value;n++)t(n,i).then((t=>e(u).Notify.success(t))).catch((t=>e(u).Notify.failure(t))),i+=a}))}();
//# sourceMappingURL=03-promises.bc3fb73d.js.map