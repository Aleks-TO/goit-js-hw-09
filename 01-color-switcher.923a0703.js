!function(){var t=document.querySelector("button[data-start]"),e=document.querySelector("button[data-stop]"),n=document.querySelector("body"),r=null;t.addEventListener("click",(function(){return r=setInterval((function(){var t="#".concat(Math.floor(16777215*Math.random()).toString(16).padStart(6,0));n.style.backgroundColor=t}),1e3)})),e.addEventListener("click",(function(){return clearInterval(r)}))}();
//# sourceMappingURL=01-color-switcher.923a0703.js.map