!function(){var t={start:document.querySelector("button[data-start]"),stop:document.querySelector("button[data-stop]"),body:document.querySelector("body")},o=null;function e(){t.body.style.backgroundColor="#".concat(Math.floor(16777215*Math.random()).toString(16).padStart(6,0))}t.start.addEventListener("click",(function(){t.start.disabled=!0,o=setInterval(e,1e3),console.log(o)})),t.stop.addEventListener("click",(function(){clearInterval(o),t.start.disabled=!1}))}();
//# sourceMappingURL=index.51476c6d.js.map
