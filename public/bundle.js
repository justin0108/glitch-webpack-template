(()=>{"use strict";var e={568:(e,r)=>{Object.defineProperty(r,"__esModule",{value:!0}),r.randomNumber=void 0,r.randomNumber=(e,r)=>Math.random()*(r-e)+e}},r={};function t(o){var n=r[o];if(void 0!==n)return n.exports;var d=r[o]={exports:{}};return e[o](d,d.exports,t),d.exports}(()=>{const e=t(568);document.getElementById("my-content").textContent=`hello world ${(0,e.randomNumber)(0,100)}`})()})();