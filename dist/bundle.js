!function(e){var n={};function t(o){if(n[o])return n[o].exports;var r=n[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,t),r.l=!0,r.exports}t.m=e,t.c=n,t.d=function(e,n,o){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:o})},t.r=function(e){Object.defineProperty(e,"__esModule",{value:!0})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="",t(t.s=1)}([function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var o=function(){function e(e,n){for(var t=0;t<n.length;t++){var o=n[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(n,t,o){return t&&e(n.prototype,t),o&&e(n,o),n}}(),r=function(){function e(){!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,e),console.log(111)}return o(e,[{key:"lalala",value:function(){console.log(222)}}]),e}();n.default=r},function(e,n,t){"use strict";var o;(new(((o=t(0))&&o.__esModule?o:{default:o}).default)).lalala();var r,u=new PIXI.Container,a=0,i=PIXI.autoDetectRenderer(800,600,{backgroundColor:16777215});function l(){i.render(u),requestAnimationFrame(l)}document.body.appendChild(i.view),new GOWN.ThemeParser("../themes/aeon_desktop/aeon_desktop.json").once(GOWN.Theme.COMPLETE,function(){(r=new GOWN.Button).width=150,r.height=100,r.x=320,r.y=30,r.label="third",u.addChild(r),r.on(GOWN.Button.TRIGGERED,function(){window.console&&console.log("you clicked the third button!")}),1==++a&&requestAnimationFrame(l);var e=new GOWN.shapes.Line(0,1,500,1);u.addChild(e)},void 0),GOWN.loader.load()}]);