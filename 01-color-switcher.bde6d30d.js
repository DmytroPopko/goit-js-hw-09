!function(){var t,e,o,n;t=document.querySelector("[data-start]"),e=document.querySelector("[data-stop]"),o=null,n=null,t.addEventListener("click",(function(){t.setAttribute("disabled",!0),e.removeAttribute("disabled"),o=setInterval((function(){n="#".concat(Math.floor(16777215*Math.random()).toString(16)),document.body.style.backgroundColor=n}),1e3)})),e.addEventListener("click",(function(){clearInterval(o),document.body.style.backgroundColor=n,e.setAttribute("disabled",!0),t.removeAttribute("disabled")}))}();
//# sourceMappingURL=01-color-switcher.bde6d30d.js.map
