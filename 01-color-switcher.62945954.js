const t=document.querySelector("button[data-start]"),e=document.querySelector("button[data-stop]"),o=document.querySelector("body");let n=null;console.log(e),t.addEventListener("click",(function(){return t.disabled=!0,n=setInterval((()=>{const t=`#${Math.floor(16777215*Math.random()).toString(16).padStart(6,0)}`;o.style.backgroundColor=t}),1e3),n})),e.addEventListener("click",(()=>{clearInterval(n),t.disabled=!1}));
//# sourceMappingURL=01-color-switcher.62945954.js.map
