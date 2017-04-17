!function(t){function o(r){if(e[r])return e[r].exports;var n=e[r]={exports:{},id:r,loaded:!1};return t[r].call(n.exports,n,n.exports,o),n.loaded=!0,n.exports}var e={};return o.m=t,o.c=e,o.p="/build/",o(0)}([function(t,o,e){e(4);$(document).ready(function(){function t(t){var o=["about","portfolio","contact"];o.forEach(function(o){o===t?$("."+o).addClass("highlight"):$("."+o).removeClass("highlight")})}function o(){window.scrollY>2800?t("contact"):window.scrollY>400?t("portfolio"):window.scrollY<400&&t("about")}function e(t){return"form-email"===t.attr("id")?r.test(t.val())?t.next().css("opacity","0"):t.next().css("opacity","1"):t.val()?t.next().css("opacity","0"):t.next().css("opacity","1")}var r=/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;o(),$(window).on("scroll",o),$("#form-email").on("keyup",function(t){r.test(t.target.value)?$("#form-email").removeClass("false-input"):$("#form-email").addClass("false-input")}),$("body").on("click",".nav-bar a",function(t){t.preventDefault();var o=$(this);$("body,html").stop().animate({scrollTop:$(o.attr("href")).offset().top},1e3)}),$("form").submit(function(t){return t.preventDefault(),e($("#form-name")),e($("#form-email")),e($("#form-message")),!1})})},function(t,o,e){o=t.exports=e(2)(),o.push([t.id,"@import url(https://fonts.googleapis.com/css?family=Quattrocento:400,700);",""]),o.push([t.id,"@import url(https://fonts.googleapis.com/css?family=Istok+Web);",""]),o.push([t.id,"@import url(https://use.fonticons.com/3c624b60.js);",""]),o.push([t.id,"#about li,#contact button,#portfolio li,.content{border-top-left-radius:15px;border-top-right-radius:15px;border-bottom-right-radius:15px;border-bottom-left-radius:15px}#contact .warning-message,#contact a,#contact button,.nav-bar i,.nav-bar li{-webkit-transition:all .5s;-moz-transition:all .5s;-o-transition:all .5s}body,input,textarea{background-color:#dbdbdb;margin:0;font-family:Quattrocento,Times New Roman,serif}h1,h2,h3,h4{font-family:Istok Web,Helvetica,Arial,sans-serif}button,input,label,p,textarea,ul{font-size:1.2em}ul{list-style:none;padding-left:0}a{text-decoration:none}.nav-bar{position:fixed;top:0;left:0;z-index:999;height:100%;width:90px;background-color:#3e3e3b}.nav-bar ul{display:flex;flex-direction:column}.nav-bar li{align-self:center;margin-bottom:1.1em;opacity:.3}.nav-bar li.highlight,.nav-bar li:hover{opacity:1}.nav-bar li.highlight i{color:#65a66a}.nav-bar i{color:#fff;font-size:2.5em}.about:after,.about:before,.contact:after,.contact:before,.portfolio:after,.portfolio:before{position:absolute;opacity:0;visibility:hidden;transition:all .3s}.about:before,.contact:before,.portfolio:before{text-align:center;font-size:.9em;width:auto;height:40px;line-height:40px;color:#fff;background:#3e3e3b;padding:0 10px;border-radius:.25em;left:100px}.about:before{content:'About';top:23px}.portfolio:before{content:'Portfolio';top:92px}.contact:before{content:'Contact';top:163px}.about:after,.contact:after,.portfolio:after{content:'';width:0;height:0;border:9px solid transparent;border-right-color:#3e3e3b;left:83px}.about:after{top:33px}.portfolio:after{top:102px}.contact:after{top:173px}.about:hover:after,.about:hover:before,.contact:hover:after,.contact:hover:before,.portfolio:hover:after,.portfolio:hover:before{opacity:1;visibility:visible}.about:hover:before,.contact:hover:before,.portfolio:hover:before{left:105px}.about:hover:after,.contact:hover:after,.portfolio:hover:after{left:87px}.content{display:flex;background-color:#f5f5f5;flex-wrap:wrap;margin:40px 40px 10px 130px;box-shadow:0 1px 2px #888}.content ul{margin:1.9em 0 0}.content-title{text-align:center;color:#fff;padding:.5em 0;border-top-left-radius:15px;border-top-right-radius:15px;width:100%}.content-title h1{display:inline-block;margin:.5em 0}#about .content-title{background-color:#65a66a}#portfolio .content-title{background-color:#de6a6a}#contact .content-title{background-color:#569ae8}.left-column,.right-column{flex:1;margin:2em 3em;text-align:justify}#about .left-column{flex:2}#about .left-column p:first-child{margin-top:0}#about .right-column{text-align:center}#about img{height:250px;width:250px;padding:5px;margin-top:auto;margin-bottom:auto;border-radius:50%}#about li{display:inline-block;color:#fff;background-color:#65a66a;font-weight:700;padding:8px;border:2px solid #65a66a;margin-right:.4em}#portfolio img{height:auto;width:100%;padding:2px;border:1px solid #888}#portfolio h3{margin:0 0 .6em}#portfolio p,#portfolio ul{margin-top:.8em}#portfolio li{display:inline-block;color:#fff;background-color:#de6a6a;font-weight:700;padding:8px;border:2px solid #de6a6a;margin-top:.4em;margin-right:.4em}#portfolio .left-column,#portfolio .right-column{flex-basis:30%}#contact .left-column p:first-child,#contact .right-column p:first-child{margin-top:0}#contact form span{background-color:#569ae8;display:inline-block;height:15px;width:15px;border-radius:50%;margin-right:8px;margin-bottom:-1px}#contact label{display:inline-block;margin-bottom:.5em}#contact input,#contact textarea{background-color:#f5f5f5;display:block;width:100%;padding:0;border:none;border-bottom:1px solid #3e3e3b}#contact input:focus,#contact textarea:focus{outline:0}#contact input.false-input{border-bottom:1px solid red}#contact textarea{font-size:1.2rem;resize:none}#contact .warning-message{color:red;font-size:.8em;text-align:center;margin-top:2px;opacity:0}#contact button{color:#fff;background-color:#569ae8;position:relative;padding:10px 25px;border:1px solid #569ae8;width:100%}#contact button:hover{background-color:#144e91}#contact i{padding-right:.5em}#contact a{color:#569ae8;display:inline-block;padding-top:1.5em}#contact a:hover{color:#144e91}#footer{display:flex;color:#3e3e3b;background-color:#dbdbdb;flex-wrap:wrap;justify-content:center;margin:40px 40px 10px 130px}#footer .left-c,#footer .right-c{flex:0 0 20em;text-align:center}#footer .divider{border-left:1px solid #3e3e3b;margin:0 2em}#footer h3{margin-top:0;margin-bottom:1.5em}#footer li{text-align:center;display:inline-block;padding:0 .5em}#footer i{color:#3e3e3b}#footer i:hover{color:#65a66a}#footer .copyright{text-align:center;font-size:.9em;margin:0;padding:3.4em 0 5px;width:100%}@media (max-width:1100px){.content{flex-direction:column}.content .left-column{margin:1em 3em}.content .right-column{margin:1em 3em 4em}#about .left-column{order:2;margin:1em 3em 4em}#about .right-column{order:1;margin:1em 3em}#about img{height:auto;width:auto}#contact button{display:inline-block;width:40%;margin-left:30%;margin-right:30%}#footer .left-c,#footer .right-c{flex:1}}@media (max-width:690px){button,h1,h2,h3,h4,input,label,p,textarea,ul{font-size:1em}.nav-bar{height:80px;width:100%;background-color:rgba(62,62,59,.97)}.nav-bar ul{flex-direction:row;justify-content:space-around;text-align:center;height:100%;margin:0}.nav-bar li{flex:1;padding:16px 0;margin:0}.about:hover:after,.about:hover:before,.contact:hover:after,.contact:hover:before,.portfolio:hover:after,.portfolio:hover:before{opacity:0;visibility:hidden}.content{margin:0}.content,.content .content-title{border-radius:0}.content ul{text-align:center}.content .left-column{margin:10px 5% 15px}.content .right-column{margin:5px 5% 80px}#about{margin-top:80px}#about .left-column{margin:5px 5% 80px}#about .right-column{margin:10px 5% 15px}#contact .contact-email,#portfolio .project-title,#portfolio h3{text-align:center}#contact textarea{font-size:1em}#footer{flex-direction:column;margin:40px 0 0}#footer h3{margin-bottom:.5em}#footer p,#footer ul{margin-top:.5em;margin-bottom:2em}#footer .divider{position:absolute;opacity:0;visibility:hidden}#footer .copyright{padding-top:1em}}",""])},function(t,o){t.exports=function(){var t=[];return t.toString=function(){for(var t=[],o=0;o<this.length;o++){var e=this[o];e[2]?t.push("@media "+e[2]+"{"+e[1]+"}"):t.push(e[1])}return t.join("")},t.i=function(o,e){"string"==typeof o&&(o=[[null,o,""]]);for(var r={},n=0;n<this.length;n++){var i=this[n][0];"number"==typeof i&&(r[i]=!0)}for(n=0;n<o.length;n++){var a=o[n];"number"==typeof a[0]&&r[a[0]]||(e&&!a[2]?a[2]=e:e&&(a[2]="("+a[2]+") and ("+e+")"),t.push(a))}},t}},function(t,o,e){function r(t,o){for(var e=0;e<t.length;e++){var r=t[e],n=d[r.id];if(n){n.refs++;for(var i=0;i<n.parts.length;i++)n.parts[i](r.parts[i]);for(;i<r.parts.length;i++)n.parts.push(f(r.parts[i],o))}else{for(var a=[],i=0;i<r.parts.length;i++)a.push(f(r.parts[i],o));d[r.id]={id:r.id,refs:1,parts:a}}}}function n(t){for(var o=[],e={},r=0;r<t.length;r++){var n=t[r],i=n[0],a=n[1],l=n[2],c=n[3],f={css:a,media:l,sourceMap:c};e[i]?e[i].parts.push(f):o.push(e[i]={id:i,parts:[f]})}return o}function i(t,o){var e=h(),r=v[v.length-1];if("top"===t.insertAt)r?r.nextSibling?e.insertBefore(o,r.nextSibling):e.appendChild(o):e.insertBefore(o,e.firstChild),v.push(o);else{if("bottom"!==t.insertAt)throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");e.appendChild(o)}}function a(t){t.parentNode.removeChild(t);var o=v.indexOf(t);o>=0&&v.splice(o,1)}function l(t){var o=document.createElement("style");return o.type="text/css",i(t,o),o}function c(t){var o=document.createElement("link");return o.rel="stylesheet",i(t,o),o}function f(t,o){var e,r,n;if(o.singleton){var i=x++;e=g||(g=l(o)),r=p.bind(null,e,i,!1),n=p.bind(null,e,i,!0)}else t.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(e=c(o),r=u.bind(null,e),n=function(){a(e),e.href&&URL.revokeObjectURL(e.href)}):(e=l(o),r=s.bind(null,e),n=function(){a(e)});return r(t),function(o){if(o){if(o.css===t.css&&o.media===t.media&&o.sourceMap===t.sourceMap)return;r(t=o)}else n()}}function p(t,o,e,r){var n=e?"":r.css;if(t.styleSheet)t.styleSheet.cssText=y(o,n);else{var i=document.createTextNode(n),a=t.childNodes;a[o]&&t.removeChild(a[o]),a.length?t.insertBefore(i,a[o]):t.appendChild(i)}}function s(t,o){var e=o.css,r=o.media;if(r&&t.setAttribute("media",r),t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}function u(t,o){var e=o.css,r=o.sourceMap;r&&(e+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(r))))+" */");var n=new Blob([e],{type:"text/css"}),i=t.href;t.href=URL.createObjectURL(n),i&&URL.revokeObjectURL(i)}var d={},m=function(t){var o;return function(){return"undefined"==typeof o&&(o=t.apply(this,arguments)),o}},b=m(function(){return/msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase())}),h=m(function(){return document.head||document.getElementsByTagName("head")[0]}),g=null,x=0,v=[];t.exports=function(t,o){o=o||{},"undefined"==typeof o.singleton&&(o.singleton=b()),"undefined"==typeof o.insertAt&&(o.insertAt="bottom");var e=n(t);return r(e,o),function(t){for(var i=[],a=0;a<e.length;a++){var l=e[a],c=d[l.id];c.refs--,i.push(c)}if(t){var f=n(t);r(f,o)}for(var a=0;a<i.length;a++){var c=i[a];if(0===c.refs){for(var p=0;p<c.parts.length;p++)c.parts[p]();delete d[c.id]}}}};var y=function(){var t=[];return function(o,e){return t[o]=e,t.filter(Boolean).join("\n")}}()},function(t,o,e){var r=e(1);"string"==typeof r&&(r=[[t.id,r,""]]);e(3)(r,{});r.locals&&(t.exports=r.locals)}]);