!function(){function e(e){return e&&e.__esModule?e.default:e}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},o={},r=n.parcelRequired7c6;null==r&&((r=function(e){if(e in t)return t[e].exports;if(e in o){var n=o[e];delete o[e];var r={id:e,exports:{}};return t[e]=r,n.call(r.exports,r,r.exports),r.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,n){o[e]=n},n.parcelRequired7c6=r);var i=r("iU1Pc");!function(){function n(e,n){var t=Math.random()>.3;return new Promise((function(o,r){setTimeout((function(){t?o("✅ Fulfilled promise ".concat(e," in ").concat(n,"ms")):r("❌ Rejected promise ".concat(e," in ").concat(n,"ms"))}),n)}))}document.querySelector(".form").addEventListener("submit",(function(t){t.preventDefault();for(var o=t.target.elements,r=o.delay,u=o.step,a=o.amount,c=parseInt(r.value,10),f=parseInt(u.value,10),l=1;l<=a.value;l++)n(l,c).then((function(n){return e(i).Notify.success(n)})).catch((function(n){return e(i).Notify.failure(n)})),c+=f}))}()}();
//# sourceMappingURL=03-promises.3da15421.js.map
