parcelRequire=function(e){var r="function"==typeof parcelRequire&&parcelRequire,n="function"==typeof require&&require,i={};function u(e,u){if(e in i)return i[e];var t="function"==typeof parcelRequire&&parcelRequire;if(!u&&t)return t(e,!0);if(r)return r(e,!0);if(n&&"string"==typeof e)return n(e);var o=new Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}return u.register=function(e,r){i[e]=r},i=e(u),u.modules=i,u}(function (require) {var a={};function d(t){return(d="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function f(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function g(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&h(t,e)}function h(t,e){return(h=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function j(t){var e=l();return function(){var n,r=c(t);if(e){var o=c(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return k(this,n)}}function k(t,e){return!e||"object"!==d(e)&&"function"!=typeof e?b(t):e}function b(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function l(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(t){return!1}}function c(t){return(c=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function m(){var t=require("YkLP").element("style");t.id="svelte-hskmjo-style",t.textContent="div.svelte-hskmjo.svelte-hskmjo{display:flex;flex-flow:column nowrap;margin:auto;width:75%}span.svelte-hskmjo.svelte-hskmjo{font-family:\"IBM Plex Sans\";font-size:3vh;font-weight:100;color:white}span.svelte-hskmjo ul.svelte-hskmjo{font-family:\"IBM Plex Sans\";font-size:3vh;font-weight:100;color:white;list-style:none}span.svelte-hskmjo li.svelte-hskmjo:before{content:\"-\";padding-right:0.25vw}",require("YkLP").append(document.head,t)}function p(t){var e,n,r,o=new(require("L1RX").default)({});return{c:function(){require("YkLP").create_component(o.$$.fragment),e=require("YkLP").space(),(n=require("YkLP").element("div")).innerHTML="<h1>Education</h1> \n\n    <h2>Rice University</h2> \n\n    <span class=\"svelte-hskmjo\"><b>Attended from:</b>\n        August 2018 to present\n        <br> \n        <b>Major:</b>\n        Bachelor of Arts in Computer Science, Statistics\n        <br> \n        <b>Minors:</b>\n        Biochemistry and Cell Biology\n        <br> \n        <b>GPA:</b>\n        3.569 / 4.0\n        <br> \n        <b>Major GPA (Computer Science):</b>\n        3.621 / 4.0\n        <br> \n        <b>Major GPA (Statistics):</b>\n        3.785 / 4.0\n        <br> \n        <b>Relevant Courses:</b> \n        <ul class=\"svelte-hskmjo\"><li class=\"svelte-hskmjo\">\n                COMP 382: Reasoning About Algorithms\n                <i>(future)</i></li> \n            <li class=\"svelte-hskmjo\">\n                COMP 215: Introduction to Program Design\n                <i>(future)</i></li> \n            <li class=\"svelte-hskmjo\">COMP 182: Algorithmic Thinking</li> \n            <li class=\"svelte-hskmjo\">COMP 140: Computational Thinking</li> \n            <li class=\"svelte-hskmjo\">\n                STAT 413: Introduction to Statistical Machine Learning\n                <i>(future)</i></li> \n            <li class=\"svelte-hskmjo\">STAT 410: Linear Regression</li> \n            <li class=\"svelte-hskmjo\">STAT 405: R for Data Science</li> \n            <li class=\"svelte-hskmjo\">MATH 355: Linear Algebra</li> \n            <li class=\"svelte-hskmjo\">\n                MATH: 212: Multivariable Calculus\n                <i>(in-progress)</i></li> \n            <li class=\"svelte-hskmjo\">\n                MATH 211: Ordinary Differential Equations and Linear Algebra\n            </li></ul></span>",require("YkLP").attr(n,"class","svelte-hskmjo")},m:function(t,i){require("YkLP").mount_component(o,t,i),require("YkLP").insert(t,e,i),require("YkLP").insert(t,n,i),r=!0},p:require("YkLP").noop,i:function(t){r||(require("YkLP").transition_in(o.$$.fragment,t),r=!0)},o:function(t){require("YkLP").transition_out(o.$$.fragment,t),r=!1},d:function(t){require("YkLP").destroy_component(o,t),t&&require("YkLP").detach(e),t&&require("YkLP").detach(n)}}}require("YkLP"),require("L1RX");var q=function(t){g(n,require("YkLP").SvelteComponent);var e=j(n);function n(t){var r;return f(this,n),r=e.call(this),document.getElementById("svelte-hskmjo-style")||m(),require("YkLP").init(b(r),t,null,p,require("YkLP").safe_not_equal,{}),r}return n}();a.default=q;if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=a}else if(typeof define==="function"&&define.amd){define(function(){return a})}a.__esModule=true;return{"WzKJ":a};});