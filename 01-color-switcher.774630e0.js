!function(){const t=document.querySelector("[data-start]"),e=document.querySelector("[data-stop]");let d=null,o=null;t.addEventListener("click",(()=>{t.setAttribute("disabled",!0),e.removeAttribute("disabled"),d=setInterval((()=>{o=`#${Math.floor(16777215*Math.random()).toString(16)}`,document.body.style.backgroundColor=o}),1e3)})),e.addEventListener("click",(()=>{clearInterval(d),document.body.style.backgroundColor=o,e.setAttribute("disabled",!0),t.removeAttribute("disabled")}))}();
//# sourceMappingURL=01-color-switcher.774630e0.js.map