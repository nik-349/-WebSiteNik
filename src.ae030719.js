parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"clu1":[function(require,module,exports) {

},{"/home/runner/work/-WebSiteNik/-WebSiteNik/src/images/aldain-austria.jpg":[["aldain-austria.62127655.jpg","XHOZ"],"XHOZ"]}],"VyiV":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.refs=void 0;const e={languageIcon:document.querySelector("#language-button"),overlayLang:document.querySelector("#overlay-lang-container"),langEn:document.querySelector("#header-en"),langUk:document.querySelector("#header-uk"),aboutText:document.querySelector(".text-about-me")};exports.refs=e;
},{}],"cGsR":[function(require,module,exports) {
"use strict";var e=require("./refs");function t(t){e.refs.overlayLang.classList.toggle("visually-hidden")}function n(t){let n=e.refs.aboutText.style.color=`#${Math.floor(16777215*Math.random()).toString(16)}`;console.log(n)}e.refs.languageIcon.addEventListener("click",t),e.refs.aboutText.addEventListener("click",n);const o=e=>e.map(e=>{const t=document.createElement("div");return t.textContent=e,t});console.log(o(["html","css","js","react"]));
},{"./refs":"VyiV"}],"Focm":[function(require,module,exports) {
"use strict";require("./sass/main.scss"),require("./js/header.js"),require("./js/refs.js");
},{"./sass/main.scss":"clu1","./js/header.js":"cGsR","./js/refs.js":"VyiV"}]},{},["Focm"], null)
//# sourceMappingURL=/-WebSiteNik/src.ae030719.js.map