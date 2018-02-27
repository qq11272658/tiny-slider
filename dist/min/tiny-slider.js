var tns=function(){function e(){for(var e,t,n,i=arguments[0]||{},a=1,r=arguments.length;a<r;a++)if(null!==(e=arguments[a]))for(t in e)n=e[t],i!==n&&void 0!==n&&(i[t]=n);return i}function t(e){return["true","false"].indexOf(e)>=0?JSON.parse(e):e}function n(e,t,n){return n&&localStorage.setItem(e,t),t}function i(){var e=window.tnsId;return window.tnsId=e?e+1:1,"tns"+window.tnsId}function a(){var e=document,t=e.body;return t||(t=e.createElement("body"),t.fake=!0),t}function r(e){var t="";return e.fake&&(t=I.style.overflow,e.style.background="",e.style.overflow=I.style.overflow="hidden",I.appendChild(e)),t}function o(e,t){e.fake&&(e.remove(),I.style.overflow=t,I.offsetHeight)}function s(e){var t=document.createElement("style");return e&&t.setAttribute("media",e),document.querySelector("head").appendChild(t),t.sheet?t.sheet:t.styleSheet}function l(e,t,n,i){"insertRule"in e?e.insertRule(t+"{"+n+"}",i):e.addRule(t,n,i)}function c(e){return("insertRule"in e?e.cssRules:e.rules).length}function u(e,t){return Math.atan2(e,t)*(180/Math.PI)}function f(e,t){var n=!1,i=Math.abs(90-Math.abs(e));return i>=90-t?n="horizontal":i<=t&&(n="vertical"),n}function d(e,t,n){for(var i=0,a=e.length;i<a;i++)t.call(n,e[i],i)}function v(e,t){return e.className.indexOf(t)>=0}function h(e,t){v(e,t)||(e.className+=" "+t)}function p(e,t){v(e,t)&&(e.className=e.className.replace(t,""))}function m(e,t){return e.hasAttribute(t)}function y(e,t){return e.getAttribute(t)}function g(e){return void 0!==e.item}function b(e,t){if(e=g(e)||e instanceof Array?e:[e],"[object Object]"===Object.prototype.toString.call(t))for(var n=e.length;n--;)for(var i in t)e[n].setAttribute(i,t[i])}function x(e,t){e=g(e)||e instanceof Array?e:[e],t=t instanceof Array?t:[t];for(var n=t.length,i=e.length;i--;)for(var a=n;a--;)e[i].removeAttribute(t[a])}function T(e){e.style.cssText=""}function E(e){m(e,"hidden")||b(e,{hidden:""})}function C(e){m(e,"hidden")&&x(e,"hidden")}function w(e){return e.offsetWidth>0&&e.offsetHeight>0}function N(e){return"boolean"==typeof e.complete?e.complete:"number"==typeof e.naturalWidth?0!==e.naturalWidth:void 0}function O(e){for(var t=document.createElement("fakeelement"),n=(e.length,0);n<e.length;n++){var i=e[n];if(void 0!==t.style[i])return i}return!1}function D(e,t){var n=!1;return/^Webkit/.test(e)?n="webkit"+t+"End":/^O/.test(e)?n="o"+t+"End":e&&(n=t.toLowerCase()+"end"),n}function k(e,t){for(var n in t){var i=("touchstart"===n||"touchmove"===n)&&H;e.addEventListener(n,t[n],i)}}function A(e,t){for(var n in t){var i=["touchstart","touchmove"].indexOf(n)>=0&&H;e.removeEventListener(n,t[n],i)}}function M(){return{topics:{},on:function(e,t){this.topics[e]=this.topics[e]||[],this.topics[e].push(t)},off:function(e,t){if(this.topics[e])for(var n=0;n<this.topics[e].length;n++)if(this.topics[e][n]===t){this.topics[e].splice(n,1);break}},emit:function(e,t){this.topics[e]&&this.topics[e].forEach(function(e){e(t)})}}}function P(e,t,n,i,a,r,o){function s(){r-=l,u+=f,e.style[t]=n+u+c+i,r>0?setTimeout(s,l):o()}var l=Math.min(r,10),c=a.indexOf("%")>=0?"%":"px",a=a.replace(c,""),u=Number(e.style[t].replace(n,"").replace(i,"").replace(c,"")),f=(a-u)/r*l;setTimeout(s,l)}Object.keys||(Object.keys=function(e){var t=[];for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.push(n);return t}),function(){"use strict";"remove"in Element.prototype||(Element.prototype.remove=function(){this.parentNode&&this.parentNode.removeChild(this)})}();var I=document.documentElement,S=!1;try{var W=Object.defineProperty({},"passive",{get:function(){S=!0}});window.addEventListener("test",null,W)}catch(e){}var H=!!S&&{passive:!0},L=navigator.userAgent,z=!0,B={};try{B=localStorage,B.tnsApp&&B.tnsApp!==L&&["tC","tSP","tMQ","tTf","tTDu","tTDe","tADu","tADe","tTE","tAE"].forEach(function(e){B.removeItem(e)}),B.tnsApp=L}catch(e){z=!1}z&&!localStorage&&(B={});var R=document,j=window,q={ENTER:13,SPACE:32,PAGEUP:33,PAGEDOWN:34,END:35,HOME:36,LEFT:37,UP:38,RIGHT:39,DOWN:40},G=t(B.tC)||n("tC",function(){var e=document,t=a(),n=r(t),i=e.createElement("div"),s=!1;t.appendChild(i);try{for(var l,c=["calc(10px)","-moz-calc(10px)","-webkit-calc(10px)"],u=0;u<3;u++)if(l=c[u],i.style.width=l,10===i.offsetWidth){s=l.replace("(10px)","");break}}catch(e){}return t.fake?o(t,n):i.remove(),s}(),z),F=t(B.tSP)||n("tSP",function(){var e,t,n=document,i=a(),s=r(i),l=n.createElement("div"),c=n.createElement("div");return l.style.cssText="width: 10px",c.style.cssText="float: left; width: 5.5px; height: 10px;",e=c.cloneNode(!0),l.appendChild(c),l.appendChild(e),i.appendChild(l),t=c.offsetTop!==e.offsetTop,i.fake?o(i,s):l.remove(),t}(),z),U=t(B.tMQ)||n("tMQ",function(){var e,t=document,n=a(),i=r(n),s=t.createElement("div"),l=t.createElement("style"),c="@media all and (min-width:1px){.tns-mq-test{position:absolute}}";return l.type="text/css",s.className="tns-mq-test",n.appendChild(l),n.appendChild(s),l.styleSheet?l.styleSheet.cssText=c:l.appendChild(t.createTextNode(c)),e=window.getComputedStyle?window.getComputedStyle(s).position:s.currentStyle.position,n.fake?o(n,i):s.remove(),"absolute"===e}(),z),X=t(B.tTf)||n("tTf",O(["transform","WebkitTransform","MozTransform","msTransform","OTransform"]),z),V=t(B.tTDu)||n("tTDu",O(["transitionDuration","WebkitTransitionDuration","MozTransitionDuration","OTransitionDuration"]),z),Y=t(B.tTDe)||n("tTDe",O(["transitionDelay","WebkitTransitionDelay","MozTransitionDelay","OTransitionDelay"]),z),K=t(B.tADu)||n("tADu",O(["animationDuration","WebkitAnimationDuration","MozAnimationDuration","OAnimationDuration"]),z),Q=t(B.tADe)||n("tADe",O(["animationDelay","WebkitAnimationDelay","MozAnimationDelay","OAnimationDelay"]),z),J=t(B.tTE)||n("tTE",D(V,"Transition"),z),Z=t(B.tAE)||n("tAE",D(K,"Animation"),z);U||(F=!1);var $=function(t){function n(){return j.innerWidth||R.documentElement.clientWidth||R.body.clientWidth}function a(e){var t;do{t=e.clientWidth,e=e.parentNode}while(!t);return t}function r(e){var n=t[e];return!n&&bt&&gt.indexOf(e)>=0&&bt.forEach(function(t){yt[t][e]&&(n=!0)}),n}function o(e,n){n=n?n:Tt;var i,a={slideBy:"page",edgePadding:!1,autoHeight:!0};if(!nt&&e in a)i=a[e];else if("items"===e&&o("fixedWidth"))i=Math.floor(mt/(o("fixedWidth")+o("gutter")));else if("autoHeight"===e&&"outer"===At)i=!0;else if(i=t[e],bt&&gt.indexOf(e)>=0)for(var r=0,s=bt.length;r<s;r++){var l=bt[r];if(!(n>=l))break;e in yt[l]&&(i=yt[l][e])}return"slideBy"===e&&"page"===i&&(i=o("items")),i}function g(e){return G?G+"("+100*e+"% / "+Gt+")":100*e/Gt+"%"}function O(e,t,n){var i="";if(e){var a=e;t&&(a+=t),i=n?"margin: 0px "+(mt%(n+t)+t)/2+"px":ct?"margin: 0 "+e+"px 0 "+a+"px;":"padding: "+a+"px 0 "+e+"px 0;"}else if(t&&!n){var r="-"+t+"px",o=ct?r+" 0 0":"0 "+r+" 0";i="margin: 0 "+o+";"}return i}function D(e,t,n){return e?(e+t)*Gt+"px":G?G+"("+100*Gt+"% / "+n+")":100*Gt/n+"%"}function I(e,t,n){var i="";if(ct){if(i="width:",e)i+=e+t+"px";else{var a=nt?Gt:n;i+=G?G+"(100% / "+a+")":100/a+"%"}i+=cn+";"}return i}function S(e){var t="";if(e!==!1){t=(ct?"padding-":"margin-")+(ct?"right":"bottom")+": "+e+"px;"}return t}function W(e){e=e||j.event,clearTimeout(wt),wt=setTimeout(function(){if(lt){var t=n();Tt!==t&&(Tt=t,H(),"outer"===At&&tn.emit("outerResized",Je(e)))}},100)}function H(){var e=xt,t=Qt,n=Dt,i=ln;if(mt=a(ut),st=a(ft),bt&&L(),e!==xt||It){var r=St,s=zt,u=It,f=Pt,d=Mt,v=on;if(Dt=o("items"),kt=o("slideBy"),on=o("disable"),ln=!!on||!!sn&&pt<=Dt,Dt!==n&&($t=Gt-Dt,li()),on!==v&&_(on),ln!==i&&(ln&&(Qt=nt?qt:0),z()),e!==xt&&(Wt=o("speed"),Pt=o("edgePadding"),Mt=o("gutter"),It=o("fixedWidth"),on||It===u||me(),(zt=o("autoHeight"))!==s&&(zt||(ft.style.height=""))),St=!ln&&o("arrowKeys"),St!==r&&(St?k(R,hn):A(R,hn)),yn){var h=kn,p=An;kn=!ln&&o("controls"),An=o("controlsText"),kn!==h&&(kn?C(Mn):E(Mn)),An!==p&&(wn.innerHTML=An[0],Nn.innerHTML=An[1])}if(gn){var m=In;In=!ln&&o("nav"),In!==m&&(In?(C(Sn),Qe()):E(Sn))}if(Tn){var y=ni;ni=!ln&&o("touch"),ni!==y&&nt&&(ni?k(dt,pn):A(dt,pn))}if(En){var g=oi;oi=!ln&&o("mouseDrag"),oi!==g&&nt&&(oi?k(dt,mn):A(dt,mn))}if(xn){var b=Xn,x=Qn,T=Zn,w=Kn;if(ln?Xn=Qn=Zn=!1:(Xn=o("autoplay"),Xn?(Qn=o("autoplayHoverPause"),Zn=o("autoplayResetOnVisibility")):Qn=Zn=!1),Kn=o("autoplayText"),Vn=o("autoplayTimeout"),Xn!==b&&(Xn?(Jn&&C(Jn),qn||Fn||ke()):(Jn&&E(Jn),qn&&Ae())),Qn!==x&&(Qn?k(dt,dn):A(dt,dn)),Zn!==T&&(Zn?k(R,vn):A(R,vn)),Jn&&Kn!==w){var N=Xn?1:0,M=Jn.innerHTML,P=M.length-w[N].length;M.substring(P)===w[N]&&(Jn.innerHTML=M.substring(0,P)+Kn[N])}}if(!U){if(ln||Pt===f&&Mt===d||(ft.style.cssText=O(Pt,Mt,It)),nt&&ct&&(It!==u||Mt!==d||Dt!==n)&&(dt.style.width=D(It,Mt,Dt)),ct&&(Dt!==n||Mt!==d||It!=u)){var W=I(It,Mt,Dt)+S(Mt);Bt.removeRule(c(Bt)-1),l(Bt,"#"+rn+" > .tns-item",W,c(Bt))}It||Qt!==t||ge(0)}Qt!==t&&(tn.emit("indexChanged",Je()),ge(0),Jt=Qt),Dt!==n&&(ie(),le(),te(),navigator.msMaxTouchPoints&&oe())}ct||on||(re(),Ye(),me()),B(!0),te()}function L(){xt=0,bt.forEach(function(e,t){Tt>=e&&(xt=t+1)})}function z(){var e="tns-transparent";if(ln){if(!Ot){if(Pt&&(ft.style.margin="0px"),qt)for(var t=qt;t--;)nt&&h(ht[t],e),h(ht[Gt-t-1],e);Ot=!0}}else if(Ot){if(Pt&&!It&&U&&(ft.style.margin=""),qt)for(var t=qt;t--;)nt&&p(ht[t],e),p(ht[Gt-t-1],e);Ot=!1}}function B(e){It&&Pt&&(ln||mt<=It+Mt?"0px"!==ft.style.margin&&(ft.style.margin="0px"):e&&(ft.style.cssText=O(Pt,Mt,It)))}function _(e){var t=ht.length;if(e){if(Bt.disabled=!0,dt.className=dt.className.replace(an.substring(1),""),T(dt),Lt)for(var n=qt;n--;)nt&&E(ht[n]),E(ht[t-n-1]);if(ct&&nt||T(ft),!nt)for(var i=Qt,a=Qt+pt;i<a;i++){var r=ht[i];T(r),p(r,it),p(r,ot)}}else{if(Bt.disabled=!1,dt.className+=an,ct||re(),me(),Lt)for(var n=qt;n--;)nt&&C(ht[n]),C(ht[t-n-1]);if(!nt)for(var i=Qt,a=Qt+pt;i<a;i++){var r=ht[i],o=i<Qt+Dt?it:ot;r.style.left=100*(i-Qt)/Dt+"%",h(r,o)}}}function ee(){if(Rt&&!on){var e=Qt,t=Qt+Dt;for(Pt&&(e-=1,t+=1);e<t;e++)d(ht[e].querySelectorAll(".tns-lazy-img"),function(e){var t={};t[J]=function(e){e.stopPropagation()},k(e,t),v(e,"loaded")||(e.src=y(e,"data-src"),h(e,"loaded"))})}}function te(){if(zt&&!on){for(var e=[],t=Qt,n=Qt+Dt;t<n;t++)d(ht[t].querySelectorAll("img"),function(t){e.push(t)});0===e.length?ae():ne(e)}}function ne(e){e.forEach(function(t,n){N(t)&&e.splice(n,1)}),0===e.length?ae():setTimeout(function(){ne(e)},16)}function ie(){ee(),se(),ve(),Qe(),ce()}function ae(){for(var e,t=[],n=Qt,i=Qt+Dt;n<i;n++)t.push(ht[n].offsetHeight);e=Math.max.apply(null,t),ft.style.height!==e&&(V&&he(Wt),ft.style.height=e+"px")}function re(){Ct=[0];for(var e,t=ht[0].getBoundingClientRect().top,n=1;n<Gt;n++)e=ht[n].getBoundingClientRect().top,Ct.push(e-t)}function oe(){ut.style.msScrollSnapPointsX="snapInterval(0%, "+100/Dt+"%)"}function se(){for(var e=Qt+Math.min(pt,Dt),t=Gt;t--;){var n=ht[t];t>=Qt&&t<e?m(n,"tabindex")&&(b(n,{"aria-hidden":"false"}),x(n,["tabindex"]),h(n,Cn)):(m(n,"tabindex")||b(n,{"aria-hidden":"true",tabindex:"-1"}),v(n,Cn)&&p(n,Cn))}}function le(){if(!nt){for(var e=Qt+Math.min(pt,Dt),t=Gt;t--;){var n=ht[t];t>=Qt&&t<e?(h(n,"tns-moving"),n.style.left=100*(t-Qt)/Dt+"%",h(n,it),p(n,ot)):n.style.left&&(n.style.left="",h(n,ot),p(n,it)),p(n,at)}setTimeout(function(){d(ht,function(e){p(e,"tns-moving")})},300)}}function ce(){if(In&&(zn=Ln!==-1?Ln:Qt%pt,Ln=-1,zn!==Bn)){var e=Pn[Bn],t=Pn[zn];b(e,{tabindex:"-1","aria-selected":"false"}),b(t,{tabindex:"0","aria-selected":"true"}),p(e,Rn),h(t,Rn)}}function ue(e){return"button"===e.nodeName.toLowerCase()}function fe(e){return"true"===e.getAttribute("aria-disabled")}function de(e,t,n){e?t.disabled=n:t.setAttribute("aria-disabled",n.toString())}function ve(){if(kn&&!Ht&&!Lt){var e=On?wn.disabled:fe(wn),t=Dn?Nn.disabled:fe(Nn),n=Qt===Zt,i=!Ht&&Qt===$t;n&&!e&&de(On,wn,!0),!n&&e&&de(On,wn,!1),i&&!t&&de(Dn,Nn,!0),!i&&t&&de(Dn,Nn,!1)}}function he(e,t){e=e?e/1e3+"s":"",t=t||dt,t.style[V]=e,nt||(t.style[K]=e),ct||(ft.style[V]=e)}function pe(){var e;if(ct)if(It)e=-(It+Mt)*Qt+"px";else{var t=X?Gt:Dt;e=100*-Qt/t+"%"}else e=-Ct[Qt]+"px";return e}function me(e){e||(e=pe()),dt.style[Xt]=Vt+e+Yt}function ye(e,t,n,i){for(var a=e,r=e+Dt;a<r;a++){var o=ht[a];i||(o.style.left=100*(a-Qt)/Dt+"%"),V&&he(Wt,o),rt&&Y&&(o.style[Y]=o.style[Q]=rt*(a-e)/1e3+"s"),p(o,t),h(o,n),i&&jt.push(o)}}function ge(e,t){isNaN(e)&&(e=Wt),qn&&!w(dt)&&(e=0),V&&he(e),ci(e,t)}function be(e,t){Ut&&li(),(Qt!==Jt||t)&&(tn.emit("indexChanged",Je()),tn.emit("transitionStart",Je()),qn&&e&&["click","keydown"].indexOf(e.type)>=0&&Ae(),_t=!0,ge())}function xe(e){return e.toLowerCase().replace(/-/g,"")}function Te(e){if(nt||_t){if(tn.emit("transitionEnd",Je(e)),!nt&&jt.length>0)for(var t=0;t<Dt;t++){var n=jt[t];n.style.left="",V&&he(0,n),rt&&Y&&(n.style[Y]=n.style[Q]=""),p(n,at),h(n,ot)}if(!e||!nt&&e.target.parentNode===dt||e.target===dt&&xe(e.propertyName)===xe(Xt)){if(!Ut){var i=Qt;li(),Qt!==i&&(tn.emit("indexChanged",Je()),V&&he(0),me())}te(),"inner"===At&&tn.emit("innerLoaded",Je()),_t=!1,Bn=zn,Jt=Qt}}}function Ee(e,t){if(!ln)if("prev"===e)Ce(t,-1);else if("next"===e)Ce(t,1);else if(!_t){var n=Qt%pt,i=0;if(n<0&&(n+=pt),"first"===e)i=-n;else if("last"===e)i=pt-Dt-n;else if("number"!=typeof e&&(e=parseInt(e)),!isNaN(e)){var a=e%pt;a<0&&(a+=pt),i=a-n}Qt+=i,Qt%pt!=Jt%pt&&be(t)}}function Ce(e,t){if(!_t){var n;if(!t){e=e||j.event;for(var i=e.target||e.srcElement;i!==Mn&&[wn,Nn].indexOf(i)<0;)i=i.parentNode;var a=[wn,Nn].indexOf(i);a>=0&&(n=!0,t=0===a?-1:1)}if(Ht){if(Qt===Zt&&t===-1)return void Ee("last",e);if(Qt===$t&&1===t)return void Ee(0,e)}t&&(Qt+=kt*t,be(n||e&&"keydown"===e.type?e:null))}}function we(e){if(!_t){e=e||j.event;for(var t,n=e.target||e.srcElement;n!==Sn&&!m(n,"data-nav");)n=n.parentNode;m(n,"data-nav")&&(t=Ln=[].indexOf.call(Pn,n),Ee(t,e))}}function Ne(){jn=setInterval(function(){Ce(null,Yn)},Vn),qn=!0}function Oe(){clearInterval(jn),qn=!1}function De(e,t){b(Jn,{"data-action":e}),Jn.innerHTML=$n[0]+e+$n[1]+t}function ke(){Ne(),Jn&&De("stop",Kn[1])}function Ae(){Oe(),Jn&&De("start",Kn[0])}function Me(){Xn&&!qn&&(ke(),Fn=!1)}function Pe(){qn&&(Ae(),Fn=!0)}function Ie(){qn?(Ae(),Fn=!0):(ke(),Fn=!1)}function Se(){R.hidden?qn&&(Oe(),Un=!0):Un&&(Ne(),Un=!1)}function We(){qn&&(Oe(),Gn=!0)}function He(){Gn&&(Ne(),Gn=!1)}function Le(e){switch(e=e||j.event,e.keyCode){case q.LEFT:Ce(e,-1);break;case q.RIGHT:Ce(e,1)}}function ze(e){switch(e=e||j.event,e.keyCode){case q.LEFT:case q.UP:case q.PAGEUP:wn.disabled||Ce(e,-1);break;case q.RIGHT:case q.DOWN:case q.PAGEDOWN:Nn.disabled||Ce(e,1);break;case q.HOME:Ee(0,e);break;case q.END:Ee(pt-1,e)}}function Be(e){e.focus()}function Re(e){function n(e){return t.navContainer?e:Wn[e]}var i=R.activeElement;if(m(i,"data-nav")){e=e||j.event;var a=e.keyCode,r=[].indexOf.call(Pn,i),o=Wn.length,s=Wn.indexOf(r);switch(t.navContainer&&(o=pt,s=r),a){case q.LEFT:case q.PAGEUP:s>0&&Be(Pn[n(s-1)]);break;case q.UP:case q.HOME:s>0&&Be(Pn[n(0)]);break;case q.RIGHT:case q.PAGEDOWN:s<o-1&&Be(Pn[n(s+1)]);break;case q.DOWN:case q.END:s<o-1&&Be(Pn[n(o-1)]);break;case q.ENTER:case q.SPACE:Ln=r,Ee(r,e)}}}function je(){ge(0,dt.scrollLeft()),Jt=Qt}function qe(e){return e.target||e.srcElement}function Ge(e){return e.type.indexOf("touch")>=0}function Fe(e){e.preventDefault?e.preventDefault():e.returnValue=!1}function Ue(e){if(ri=0,Nt=!1,ii=ai=null,!_t){e=e||j.event;var t;Ge(e)?(t=e.changedTouches[0],tn.emit("touchStart",Je(e))):(t=e,Fe(e),tn.emit("dragStart",Je(e))),ii=parseInt(t.clientX),ai=parseInt(t.clientY),_n=parseFloat(dt.style[Xt].replace(Vt,"").replace(Yt,""))}}function Xe(e){if(!_t&&null!==ii){e=e||j.event;var n;if(Ge(e)?n=e.changedTouches[0]:(n=e,Fe(e)),ei=parseInt(n.clientX)-ii,ti=parseInt(n.clientY)-ai,0===ri&&(ri=f(u(ti,ei),15)===t.axis),ri){Ge(e)?tn.emit("touchMove",Je(e)):(si||(si=!0),tn.emit("dragMove",Je(e))),Nt||(Nt=!0);var i=_n;if(ct)if(It)i+=ei,i+="px";else{var a=X?ei*Dt*100/(st*Gt):100*ei/st;i+=a,i+="%"}else i+=ti,i+="px";X&&he(0),dt.style[Xt]=Vt+i+Yt}}}function Ve(e){if(!_t&&Nt){e=e||j.event;var t;Ge(e)?(t=e.changedTouches[0],tn.emit("touchEnd",Je(e))):(t=e,tn.emit("dragEnd",Je(e))),ei=parseInt(t.clientX)-ii,ti=parseInt(t.clientY)-ai;var n=Boolean(ct?ei:ti);if(ri=0,Nt=!1,ii=ai=null,ct){var i=-ei*Dt/st;i=ei>0?Math.floor(i):Math.ceil(i),Qt+=i}else{var a=-(_n+ti);if(a<=0)Qt=Zt;else if(a>=Ct[Ct.length-1])Qt=$t;else{var r=0;do{r++,Qt=ti<0?r+1:r}while(r<Gt&&a>=Ct[r+1])}}if(be(e,n),si){si=!1;var o=qe(e);k(o,{click:function e(t){Fe(t),A(o,{click:e})}})}}}function Ye(){ft.style.height=Ct[Qt+Dt]-Ct[Qt]+"px"}function Ke(){Wn=[];for(var e=Qt%pt%Dt;e<pt;)!Lt&&e+Dt>pt&&(e=pt-Dt),Wn.push(e),e+=Dt;(Lt&&Wn.length*Dt<pt||!Lt&&Wn[0]>0)&&Wn.unshift(0)}function Qe(){In&&!bn&&(Ke(),Wn!==Hn&&(d(Pn,function(e,t){Wn.indexOf(t)<0?E(e):C(e)}),Hn=Wn))}function Je(e){return{container:dt,slideItems:ht,navContainer:Sn,navItems:Pn,controlsContainer:Mn,hasControls:yn,prevButton:wn,nextButton:Nn,items:Dt,slideBy:kt,cloneCount:qt,slideCount:pt,slideCountNew:Gt,index:Qt,indexCached:Jt,navCurrentIndex:zn,navCurrentIndexCached:Bn,visibleNavIndexes:Wn,visibleNavIndexesCached:Hn,sheet:Bt,event:e||{}}}t=e({container:R.querySelector(".slider"),mode:"carousel",axis:"horizontal",items:1,gutter:0,edgePadding:0,fixedWidth:!1,slideBy:1,controls:!0,controlsText:["prev","next"],controlsContainer:!1,nav:!0,navContainer:!1,navAsThumbnails:!1,arrowKeys:!1,speed:300,autoplay:!1,autoplayTimeout:5e3,autoplayDirection:"forward",autoplayText:["start","stop"],autoplayHoverPause:!1,autoplayButton:!1,autoplayButtonOutput:!0,autoplayResetOnVisibility:!0,loop:!0,rewind:!1,autoHeight:!1,responsive:!1,lazyload:!1,touch:!0,mouseDrag:!1,nested:!1,freezable:!0,onInit:!1},t||{}),["container","controlsContainer","navContainer","autoplayButton"].forEach(function(e){"string"==typeof t[e]&&(t[e]=R.querySelector(t[e]))});var Ze=j.console&&"function"==typeof j.console.warn;if(!t.container||!t.container.nodeName)return void(Ze&&console.warn("Can't find container element."));if(t.container.children.length<2)return void(Ze&&console.warn("Slides less than 2."));if(t.responsive){var $e={},_e=t.responsive;for(var et in _e){var tt=_e[et];$e[et]="number"==typeof tt?{items:tt}:tt}t.responsive=$e,$e=null,0 in t.responsive&&(t=e(t,t.responsive[0]),delete t.responsive[0])}var nt="carousel"===t.mode;if(!nt){t.axis="horizontal",t.rewind=!1,t.loop=!0,t.edgePadding=!1;var it="tns-fadeIn",at="tns-fadeOut",rt=!1,ot=t.animateNormal||"tns-normal";J&&Z&&(it=t.animateIn||it,at=t.animateOut||at,rt=t.animateDelay||rt)}var st,lt,ct="horizontal"===t.axis,ut=R.createElement("div"),ft=R.createElement("div"),dt=t.container,vt=dt.parentNode,ht=dt.children,pt=ht.length,mt=a(vt),yt=t.responsive,gt=[],bt=!1,xt=0,Tt=n();if(yt){bt=Object.keys(yt).map(function(e){return parseInt(e)}).sort(function(e,t){return e-t}),bt.forEach(function(e){gt=gt.concat(Object.keys(yt[e]))});var Et=[];gt.forEach(function(e){Et.indexOf(e)<0&&Et.push(e)}),gt=Et,L()}var Ct,wt,Nt,Ot,Dt=o("items"),kt="page"===o("slideBy")?Dt:o("slideBy"),At=t.nested,Mt=o("gutter"),Pt=o("edgePadding"),It=o("fixedWidth"),St=o("arrowKeys"),Wt=o("speed"),Ht=t.rewind,Lt=!Ht&&t.loop,zt=o("autoHeight"),Bt=s(),Rt=t.lazyload,jt=[],qt=Lt?2*pt:0,Gt=nt?pt+2*qt:pt+qt,Ft=!(!It||Lt||Pt),Ut=!nt||!Lt,Xt=ct?"left":"top",Vt="",Yt="",Kt=o("startIndex"),Qt=Kt?function(e){return e%=pt,e<0&&(e+=pt),e=Math.min(e,Gt-Dt)}(Kt):nt?qt:0,Jt=Qt,Zt=0,$t=Gt-Dt,_t=!1,en=t.onInit,tn=new M,nn=dt.id,an=" tns-slider tns-"+t.mode,rn=dt.id||i(),on=o("disable"),sn=t.freezable,ln=!!on||!!sn&&pt<=Dt,cn="inner"===At?" !important":"",un={click:Ce,keydown:ze},fn={click:we,keydown:Re},dn={mouseover:We,mouseout:He},vn={visibilitychange:Se},hn={keydown:Le},pn={touchstart:Ue,touchmove:Xe,touchend:Ve,touchcancel:Ve},mn={mousedown:Ue,mousemove:Xe,mouseup:Ve,mouseleave:Ve},yn=r("controls"),gn=r("nav"),bn=t.navAsThumbnails,xn=r("autoplay"),Tn=r("touch"),En=r("mouseDrag"),Cn="tns-slide-active";if(yn)var wn,Nn,On,Dn,kn=o("controls"),An=o("controlsText"),Mn=t.controlsContainer;if(gn)var Pn,In=o("nav"),Sn=t.navContainer,Wn=[],Hn=Wn,Ln=-1,zn=Qt%pt,Bn=zn,Rn="tns-nav-active";if(xn)var jn,qn,Gn,Fn,Un,Xn=o("autoplay"),Vn=o("autoplayTimeout"),Yn="forward"===t.autoplayDirection?1:-1,Kn=o("autoplayText"),Qn=o("autoplayHoverPause"),Jn=t.autoplayButton,Zn=o("autoplayResetOnVisibility"),$n=["<span class='tns-visually-hidden'>"," animation</span>"];if(Tn)var _n,ei,ti,ni=o("touch"),ii=null,ai=null,ri=0;if(En)var oi=o("mouseDrag"),si=!1;ln&&(kn=In=ni=oi=St=Xn=Qn=Zn=!1),X&&(Xt=X,Vt="translate",Vt+=ct?"X(":"Y(",Yt=")"),function(){ut.appendChild(ft),vt.insertBefore(ut,dt),ft.appendChild(dt),st=a(ft);var e="tns-outer",n="tns-inner",i=r("gutter");if(nt?ct&&(r("edgePadding")||i&&!t.fixedWidth)?e+=" tns-ovh":n+=" tns-ovh":i&&(e+=" tns-ovh"),ut.className=e,ft.className=n,ft.id=rn+"-iw",zt&&(ft.className+=" tns-ah",ft.style[V]=Wt/1e3+"s"),""===dt.id&&(dt.id=rn),an+=F?" tns-subpixel":" tns-no-subpixel",an+=G?" tns-calc":" tns-no-calc",nt&&(an+=" tns-"+t.axis),dt.className+=an,nt&&J){var s={};s[J]=Te,k(dt,s)}e=n=null;for(var u=0;u<pt;u++){var f=ht[u];f.id||(f.id=rn+"-item"+u),h(f,"tns-item"),!nt&&ot&&h(f,ot),b(f,{"aria-hidden":"true",tabindex:"-1"})}if(Lt||Pt){for(var v=R.createDocumentFragment(),m=R.createDocumentFragment(),y=qt;y--;){var T=y%pt,C=ht[T].cloneNode(!0);if(x(C,"id"),m.insertBefore(C,m.firstChild),nt){var w=ht[pt-1-T].cloneNode(!0);x(w,"id"),v.appendChild(w)}}dt.insertBefore(v,dt.firstChild),dt.appendChild(m),ht=dt.children}for(var N=Qt,A=Qt+Math.min(pt,Dt);N<A;N++){var f=ht[N];b(f,{"aria-hidden":"false"}),x(f,["tabindex"]),h(f,Cn),nt||(f.style.left=100*(N-Qt)/Dt+"%",h(f,it),p(f,ot))}if(nt&&ct&&(F?(l(Bt,"#"+rn+" > .tns-item","font-size:"+j.getComputedStyle(ht[0]).fontSize+";",c(Bt)),l(Bt,"#"+rn,"font-size:0;",c(Bt))):d(ht,function(e,t){e.style.marginLeft=g(t)})),U){var M=O(t.edgePadding,t.gutter,t.fixedWidth);l(Bt,"#"+rn+"-iw",M,c(Bt)),nt&&ct&&(M="width:"+D(t.fixedWidth,t.gutter,t.items),l(Bt,"#"+rn,M,c(Bt))),(ct||t.gutter)&&(M=I(t.fixedWidth,t.gutter,t.items)+S(t.gutter),l(Bt,"#"+rn+" > .tns-item",M,c(Bt)))}else if(ft.style.cssText=O(Pt,Mt,It),nt&&ct&&(dt.style.width=D(It,Mt,Dt)),ct||Mt){var M=I(It,Mt,Dt)+S(Mt);l(Bt,"#"+rn+" > .tns-item",M,c(Bt))}if(ct||on||(re(),Ye()),yt&&U&&bt.forEach(function(e){var t=yt[e],n="",i="",a="",s="",l=o("items",e),c=o("fixedWidth",e),u=o("edgePadding",e),f=o("gutter",e);("edgePadding"in t||"gutter"in t)&&(i="#"+rn+"-iw{"+O(u,f,c)+"}"),nt&&ct&&("fixedWidth"in t||"gutter"in t||"items"in t)&&(a="#"+rn+"{width:"+D(c,f,l)+"}"),("fixedWidth"in t||r("fixedWidth")&&"gutter"in t||!nt&&"items"in t)&&(s+=I(c,f,l)),"gutter"in t&&(s+=S(f)),s.length>0&&(s="#"+rn+" > .tns-item{"+s+"}"),n=i+a+s,n.length>0&&Bt.insertRule("@media (min-width: "+e/16+"em) {"+n+"}",Bt.cssRules.length)}),nt&&!on&&me(),navigator.msMaxTouchPoints&&(h(ut,"ms-touch"),k(ut,{scroll:je}),oe()),gn){var P=nt?qt:0;if(Sn)b(Sn,{"aria-label":"Carousel Pagination"}),Pn=Sn.children,d(Pn,function(e,t){b(e,{"data-nav":t,tabindex:"-1","aria-selected":"false","aria-controls":ht[P+t].id})});else{for(var L="",q=bn?"":" hidden",N=0;N<pt;N++)L+='<button data-nav="'+N+'" tabindex="-1" aria-selected="false" aria-controls="'+ht[P+N].id+q+'" type="button"></button>';L='<div class="tns-nav" aria-label="Carousel Pagination">'+L+"</div>",ut.insertAdjacentHTML("afterbegin",L),Sn=ut.querySelector(".tns-nav"),Pn=Sn.children}if(Qe(),V){var X=V.substring(0,V.length-18).toLowerCase(),M="transition: all "+Wt/1e3+"s";X&&(M="-"+X+"-"+M),l(Bt,"[aria-controls^="+rn+"-item]",M,c(Bt))}b(Pn[zn],{tabindex:"0","aria-selected":"true"}),h(Pn[zn],Rn),k(Sn,fn),In||E(Sn)}if(xn){var Y=Xn?"stop":"start";Jn?b(Jn,{"data-action":Y}):t.autoplayButtonOutput&&(ft.insertAdjacentHTML("beforebegin",'<button data-action="'+Y+'" type="button">'+$n[0]+Y+$n[1]+Kn[0]+"</button>"),Jn=ut.querySelector("[data-action]")),Jn&&k(Jn,{click:Ie}),Xn?(ke(),Qn&&k(dt,dn),Zn&&k(dt,vn)):Jn&&E(Jn)}yn&&(Mn?(wn=Mn.children[0],Nn=Mn.children[1],b(Mn,{"aria-label":"Carousel Navigation",tabindex:"0"}),b(wn,{"data-controls":"prev"}),b(Nn,{"data-controls":"next"}),b(Mn.children,{"aria-controls":rn,tabindex:"-1"})):(ut.insertAdjacentHTML("afterbegin",'<div class="tns-controls" aria-label="Carousel Navigation" tabindex="0"><button data-controls="prev" tabindex="-1" aria-controls="'+rn+'" type="button">'+An[0]+'</button><button data-controls="next" tabindex="-1" aria-controls="'+rn+'" type="button">'+An[1]+"</button></div>"),Mn=ut.querySelector(".tns-controls"),wn=Mn.children[0],Nn=Mn.children[1]),On=ue(wn),Dn=ue(Nn),ve(),k(Mn,un),kn||E(Mn)),ni&&k(dt,pn),oi&&k(dt,mn),St&&k(R,hn),"inner"===At?tn.on("outerResized",function(){H(),tn.emit("innerLoaded",Je())}):(k(j,{resize:W}),"outer"===At&&tn.on("innerLoaded",te)),ee(),te(),z(),B(),tn.on("indexChanged",ie),"function"==typeof en&&en(Je()),"inner"===At&&tn.emit("innerLoaded",Je()),on&&_(!0),lt=!0}();var li=function(){return Lt?function(){var e=Zt,t=$t;if(nt)if(e+=kt,t-=kt,Pt)e+=1,t-=1;else if(It){var n=Mt?Mt:0;mt%(It+n)>n&&(t-=1)}if(Qt>t)for(;Qt>=e+pt;)Qt-=pt;else if(Qt<e)for(;Qt<=t-pt;)Qt+=pt}:function(){Qt=Math.max(Zt,Math.min($t,Qt))}}(),ci=function(){return nt?function(e,t){t||(t=pe()),Ft&&Qt===$t&&(t=-((It+Mt)*Gt-st)+"px"),V||!e?(me(t),e&&w(dt)||Te()):P(dt,Xt,Vt,Yt,t,Wt,Te),ct||Ye()}:function(e){jt=[];var t={};t[J]=t[Z]=Te,A(ht[Jt],t),k(ht[Qt],t),ye(Jt,it,at,!0),ye(Qt,ot,it),J&&Z&&e||Te()}}();return{getInfo:Je,events:tn,goTo:Ee,play:Me,pause:Pe,isOn:lt,rebuild:function(){return $(t)},destroy:function(){if(A(j,{resize:W}),A(R,hn),Bt.disabled=!0,Lt)for(var e=qt;e--;)nt&&ht[0].remove(),ht[ht.length-1].remove();var n=["tns-item",Cn];nt||(n=n.concat("tns-normal",it));for(var i=pt;i--;){var a=ht[i];a.id.indexOf(rn+"-item")>=0&&(a.id=""),n.forEach(function(e){p(a,e)})}if(x(ht,["style","aria-hidden","tabindex"]),ht=rn=pt=Gt=qt=null,kn&&(A(Mn,un),t.controlsContainer&&(x(Mn,["aria-label","tabindex"]),x(Mn.children,["aria-controls","aria-disabled","tabindex"])),Mn=wn=Nn=null),In&&(A(Sn,fn),t.navContainer&&(x(Sn,["aria-label"]),x(Pn,["aria-selected","aria-controls","tabindex"])),Sn=Pn=null),Xn&&(clearInterval(jn),Jn&&A(Jn,{click:Ie}),A(dt,dn),A(dt,vn),t.autoplayButton&&x(Jn,["data-action"])),dt.id=nn||"",dt.className=dt.className.replace(an,""),T(dt),nt&&J){var r={};r[J]=Te,A(dt,r)}A(dt,pn),A(dt,mn),vt.insertBefore(dt,ut),ut.remove(),ut=ft=dt=Qt=Jt=Dt=kt=zn=Bn=yn=Wn=Hn=this.getInfo=this.events=this.goTo=this.play=this.pause=this.destroy=null,this.isOn=lt=!1}}};return $}();
//# sourceMappingURL=../sourcemaps/tiny-slider.js.map
