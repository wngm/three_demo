var xe=Object.defineProperty;var Le=(t,e,n)=>e in t?xe(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var M=(t,e,n)=>(Le(t,typeof e!="symbol"?e+"":e,n),n);import{E as Re,V as y,b as Pe,T as Oe,d as _,B as Ae,e as S,N as Qt,f as en,i as E,g as Ne,h as Te,G as Be,R as Q,C as De,S as Ie,j as Fe,k as Ge,P as We,W as ze,l as ee,A as je,m as Ve,D as He,p as qe,q as Ke,s as Ye,t as Ue,u as Xe,v as Je,r as te,n as $e,o as Ze,c as Qe}from"./index-7723fe0a.js";const C=new Re(0,0,0,"YXZ"),x=new y,et={type:"change"},tt={type:"lock"},nt={type:"unlock"},ne=Math.PI/2;class st extends Pe{constructor(e,n){super(),this.domElement=n,this.isLocked=!1,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.pointerSpeed=1;const s=this;function o(c){if(s.isLocked===!1)return;const a=c.movementX||c.mozMovementX||c.webkitMovementX||0,l=c.movementY||c.mozMovementY||c.webkitMovementY||0;C.setFromQuaternion(e.quaternion),C.y-=a*.002*s.pointerSpeed,C.x-=l*.002*s.pointerSpeed,C.x=Math.max(ne-s.maxPolarAngle,Math.min(ne-s.minPolarAngle,C.x)),e.quaternion.setFromEuler(C),s.dispatchEvent(et)}function r(){s.domElement.ownerDocument.pointerLockElement===s.domElement?(s.dispatchEvent(tt),s.isLocked=!0):(s.dispatchEvent(nt),s.isLocked=!1)}function i(){console.error("THREE.PointerLockControls: Unable to use Pointer Lock API")}this.connect=function(){s.domElement.ownerDocument.addEventListener("mousemove",o),s.domElement.ownerDocument.addEventListener("pointerlockchange",r),s.domElement.ownerDocument.addEventListener("pointerlockerror",i)},this.disconnect=function(){s.domElement.ownerDocument.removeEventListener("mousemove",o),s.domElement.ownerDocument.removeEventListener("pointerlockchange",r),s.domElement.ownerDocument.removeEventListener("pointerlockerror",i)},this.dispose=function(){this.disconnect()},this.getObject=function(){return e},this.getDirection=function(){const c=new y(0,0,-1);return function(a){return a.copy(c).applyQuaternion(e.quaternion)}}(),this.moveForward=function(c){x.setFromMatrixColumn(e.matrix,0),x.crossVectors(e.up,x),e.position.addScaledVector(x,c)},this.moveRight=function(c){x.setFromMatrixColumn(e.matrix,0),e.position.addScaledVector(x,c)},this.lock=function(){this.domElement.requestPointerLock()},this.unlock=function(){s.domElement.ownerDocument.exitPointerLock()},this.connect()}}const ot=""+new URL("blocks-a4d47609.png",import.meta.url).href,P=new Oe().load(ot);P.repeat.set(.0625,.0625);function U(t,e){let n=P.clone();return n.offset.set(t/16,e/16),n}let de=P.clone(),pe=P.clone(),ye=P.clone();de.offset.set(0,15/16);pe.offset.set(2/16,15/16);ye.offset.set(1/16,15/16);let ge=P.clone();ge.offset.set(4/16,15/16);const rt=new _({map:de}),we=new _({map:pe}),D=new _({map:ye}),it=new _({map:ge}),se=new _({map:U(1,13)}),I=new _({map:U(0,13)}),ct=new _({map:U(2,13)}),T=new Ae(1,1,1),at=new S(T,we),lt=new S(T,[D,D,rt,we,D,D]),ut=new S(T,it),ht=new S(T,[I,I,se,se,I,I]),ft=new S(T,ct);class R{constructor(e){const{position:n}=e;this.mesh=at.clone(),n&&this.mesh.position.set(n.x,n.y,n.z)}}class mt extends R{constructor(e){super(e);const{position:n}=e;this.mesh=lt.clone(),n&&this.mesh.position.set(n.x,n.y,n.z)}}class dt extends R{constructor(e){const{position:n}=e;super(e),this.mesh=ut.clone(),n&&this.mesh.position.set(n.x,n.y,n.z)}}class pt extends R{constructor(e){const{position:n}=e;super(e),this.mesh=ft.clone(),n&&this.mesh.position.set(n.x,n.y,n.z)}}class yt extends R{constructor(e){const{position:n}=e;super(e),this.mesh=ht.clone(),n&&this.mesh.position.set(n.x,n.y,n.z)}}const gt=Object.freeze(Object.defineProperty({__proto__:null,default:R,BaseBox:R,GrassBox:mt,CoalBox:dt,StoneBox:pt,FireBox:yt},Symbol.toStringTag,{value:"Module"})),p=[151,160,137,91,90,15,131,13,201,95,96,53,194,233,7,225,140,36,103,30,69,142,8,99,37,240,21,10,23,190,6,148,247,120,234,75,0,26,197,62,94,252,219,203,117,35,11,32,57,177,33,88,237,149,56,87,174,20,125,136,171,168,68,175,74,165,71,134,139,48,27,166,77,146,158,231,83,111,229,122,60,211,133,230,220,105,92,41,55,46,245,40,244,102,143,54,65,25,63,161,1,216,80,73,209,76,132,187,208,89,18,169,200,196,135,130,116,188,159,86,164,100,109,198,173,186,3,64,52,217,226,250,124,123,5,202,38,147,118,126,255,82,85,212,207,206,59,227,47,16,58,17,182,189,28,42,223,183,170,213,119,248,152,2,44,154,163,70,221,153,101,155,167,43,172,9,129,22,39,253,19,98,108,110,79,113,224,232,178,185,112,104,218,246,97,228,251,34,242,193,238,210,144,12,191,179,162,241,81,51,145,235,249,14,239,107,49,192,214,31,181,199,106,157,184,84,204,176,115,121,50,45,127,4,150,254,138,236,205,93,222,114,67,29,24,72,243,141,128,195,78,66,215,61,156,180];for(let t=0;t<256;t++)p[256+t]=p[t];function H(t){return t*t*t*(t*(t*6-15)+10)}function b(t,e,n){return e+t*(n-e)}function v(t,e,n,s){const o=t&15,r=o<8?e:n,i=o<4?n:o==12||o==14?e:s;return(o&1?-r:r)+(o&2?-i:i)}class wt{noise(e,n,s){const o=Math.floor(e),r=Math.floor(n),i=Math.floor(s),c=o&255,a=r&255,l=i&255;e-=o,n-=r,s-=i;const h=e-1,f=n-1,u=s-1,d=H(e),m=H(n),k=H(s),B=p[c]+a,O=p[B]+l,A=p[B+1]+l,J=p[c+1]+a,$=p[J]+l,Z=p[J+1]+l;return b(k,b(m,b(d,v(p[O],e,n,s),v(p[$],h,n,s)),b(d,v(p[A],e,f,s),v(p[Z],h,f,s))),b(m,b(d,v(p[O+1],e,n,u),v(p[$+1],h,n,u)),b(d,v(p[A+1],e,f,u),v(p[Z+1],h,f,u))))}}class Et{constructor(){M(this,"get",(e,n,s)=>this.noise.noise(e,n,s));this.noise=new wt,this.seed=1.75*.6,this.quality=10,this.scale=10,this.seedGrass=1.75,this.qualityGrass=10,this.scaleGrass=10,this.seedCoal=1.75*.8,this.qualityCoal=10,this.scaleCoal=10}}class vt{constructor(){M(this,"blocks",[]);this.width=100,this.height=100,this.fixY=0,this.startY=-5}createGround(){const e=new Et;let n=[];for(let s=0;s<this.width;s++)for(let o=0;o<this.height;o++){let r=e.get(s/e.quality,o/e.quality,e.seed)*e.scale,i=e.get(s/e.qualityGrass,o/e.qualityGrass,e.seedGrass)*e.scaleGrass,c=e.get(s/e.qualityCoal,o/e.qualityCoal,e.seedCoal)*e.scaleCoal,a=~~r+this.fixY,l=~~i+this.fixY,h=~~c+this.fixY,f=Math.max(a,l,h);for(let u=this.startY;u<f;u++)u>a?u<h?n.push({x:s,y:u,z:o,type:"CoalBox"}):n.push({x:s,y:u,z:o,type:"GrassBox"}):n.push({x:s,y:u,z:o,type:"BaseBox"})}return n.push({x:10,y:1,z:10,type:"GrassBox"}),n}}function N(t,e,n,s){const o=t,r=new SyntaxError(String(o));return r.code=t,r.loc=e,r}const K=Symbol(""),G=Symbol(""),kt=Symbol(""),bt=Symbol(""),St=Symbol(""),_t=Symbol(""),Ee=Symbol(""),Mt=Symbol(""),Ct=Symbol(""),xt=Symbol(""),oe=Symbol(""),Lt=Symbol(""),ve=Symbol(""),Rt=Symbol(""),Pt=Symbol(""),Ot=Symbol(""),w={source:"",start:{line:1,column:1,offset:0},end:{line:1,column:1,offset:0}};function Y(t,e,n,s,o,r,i,c=!1,a=!1,l=!1,h=w){return t&&(c?(t.helper(G),t.helper(j(t.inSSR,l))):t.helper(z(t.inSSR,l)),i&&t.helper(Mt)),{type:13,tag:e,props:n,children:s,patchFlag:o,dynamicProps:r,directives:i,isBlock:c,disableTracking:a,isComponent:l,loc:h}}function L(t,e=w){return{type:15,loc:e,properties:t}}function ke(t,e){return{type:16,loc:w,key:E(t)?g(t,!0):t,value:e}}function g(t,e=!1,n=w,s=0){return{type:4,loc:n,content:t,isStatic:e,constType:e?3:s}}function q(t,e=w){return{type:8,loc:e,children:t}}function W(t,e=[],n=w){return{type:14,loc:n,callee:t,arguments:e}}function re(t,e=void 0,n=!1,s=!1,o=w){return{type:18,params:t,returns:e,newline:n,isSlot:s,loc:o}}function At(t,e,n,s=!0){return{type:19,test:t,consequent:e,alternate:n,newline:s,loc:w}}function Nt(t){return{type:21,body:t,loc:w}}const Tt=t=>t.type===4&&t.isStatic;function Bt(t,e,n){const o={source:t.source.slice(e,e+n),start:ie(t.start,t.source,e),end:t.end};return n!=null&&(o.end=ie(t.start,t.source,e+n)),o}function ie(t,e,n=e.length){return Dt(Ne({},t),e,n)}function Dt(t,e,n=e.length){let s=0,o=-1;for(let r=0;r<n;r++)e.charCodeAt(r)===10&&(s++,o=r);return t.offset+=n,t.line+=s,t.column=o===-1?t.column+n:n-o,t}function be(t,e,n=!1){for(let s=0;s<t.props.length;s++){const o=t.props[s];if(o.type===7&&(n||o.exp)&&(E(e)?o.name===e:e.test(o.name)))return o}}function Se(t,e,n=!1,s=!1){for(let o=0;o<t.props.length;o++){const r=t.props[o];if(r.type===6){if(n)continue;if(r.name===e&&(r.value||s))return r}else if(r.name==="bind"&&(r.exp||s)&&It(r.arg,e))return r}}function It(t,e){return!!(t&&Tt(t)&&t.content===e)}function Ft(t){return t.type===7&&t.name==="slot"}function _e(t){return t.type===1&&t.tagType===3}function ce(t){return t.type===1&&t.tagType===2}function z(t,e){return t||e?St:_t}function j(t,e){return t||e?kt:bt}const Gt=new Set([Lt,ve]);function Me(t,e=[]){if(t&&!E(t)&&t.type===14){const n=t.callee;if(!E(n)&&Gt.has(n))return Me(t.arguments[0],e.concat(t))}return[t,e]}function V(t,e,n){let s,o=t.type===13?t.props:t.arguments[2],r=[],i;if(o&&!E(o)&&o.type===14){const c=Me(o);o=c[0],r=c[1],i=r[r.length-1]}if(o==null||E(o))s=L([e]);else if(o.type===14){const c=o.arguments[0];!E(c)&&c.type===15?ae(e,c)||c.properties.unshift(e):o.callee===Rt?s=W(n.helper(oe),[L([e]),o]):o.arguments.unshift(L([e])),!s&&(s=o)}else o.type===15?(ae(e,o)||o.properties.unshift(e),s=o):(s=W(n.helper(oe),[L([e]),o]),i&&i.callee===ve&&(i=r[r.length-2]));t.type===13?i?i.arguments[0]=s:t.props=s:i?i.arguments[0]=s:t.arguments[2]=s}function ae(t,e){let n=!1;if(t.key.type===4){const s=t.key.content;n=e.properties.some(o=>o.key.type===4&&o.key.content===s)}return n}function Wt(t){return t.type===14&&t.callee===Pt?t.arguments[1].returns:t}function zt(t,{helper:e,removeHelper:n,inSSR:s}){t.isBlock||(t.isBlock=!0,n(z(s,t.isComponent)),e(G),e(j(s,t.isComponent)))}function jt(t,e){let n=0;const s=()=>{n--};for(;n<t.children.length;n++){const o=t.children[n];E(o)||(e.parent=t,e.childIndex=n,e.onNodeRemoved=s,X(o,e))}}function X(t,e){e.currentNode=t;const{nodeTransforms:n}=e,s=[];for(let r=0;r<n.length;r++){const i=n[r](t,e);if(i&&(Te(i)?s.push(...i):s.push(i)),e.currentNode)t=e.currentNode;else return}switch(t.type){case 3:e.ssr||e.helper(Ee);break;case 5:e.ssr||e.helper(xt);break;case 9:for(let r=0;r<t.branches.length;r++)X(t.branches[r],e);break;case 10:case 11:case 1:case 0:jt(t,e);break}e.currentNode=t;let o=s.length;for(;o--;)s[o]()}function Ce(t,e){const n=E(t)?s=>s===t:s=>t.test(s);return(s,o)=>{if(s.type===1){const{props:r}=s;if(s.tagType===3&&r.some(Ft))return;const i=[];for(let c=0;c<r.length;c++){const a=r[c];if(a.type===7&&n(a.name)){r.splice(c,1),c--;const l=e(s,a,o);l&&i.push(l)}}return i}}}new RegExp("\\b"+"do,if,for,let,new,try,var,case,else,with,await,break,catch,class,const,super,throw,while,yield,delete,export,import,return,switch,default,extends,finally,continue,debugger,function,arguments,typeof,void".split(",").join("\\b|\\b")+"\\b");Ce(/^(if|else|else-if)$/,(t,e,n)=>Vt(t,e,n,(s,o,r)=>{const i=n.parent.children;let c=i.indexOf(s),a=0;for(;c-->=0;){const l=i[c];l&&l.type===9&&(a+=l.branches.length)}return()=>{if(r)s.codegenNode=ue(o,a,n);else{const l=Ht(s.codegenNode);l.alternate=ue(o,a+s.branches.length-1,n)}}}));function Vt(t,e,n,s){if(e.name!=="else"&&(!e.exp||!e.exp.content.trim())){const o=e.exp?e.exp.loc:t.loc;n.onError(N(28,e.loc)),e.exp=g("true",!1,o)}if(e.name==="if"){const o=le(t,e),r={type:9,loc:t.loc,branches:[o]};if(n.replaceNode(r),s)return s(r,o,!0)}else{const o=n.parent.children;let r=o.indexOf(t);for(;r-->=-1;){const i=o[r];if(i&&i.type===3){n.removeNode(i);continue}if(i&&i.type===2&&!i.content.trim().length){n.removeNode(i);continue}if(i&&i.type===9){e.name==="else-if"&&i.branches[i.branches.length-1].condition===void 0&&n.onError(N(30,t.loc)),n.removeNode();const c=le(t,e);i.branches.push(c);const a=s&&s(i,c,!1);X(c,n),a&&a(),n.currentNode=null}else n.onError(N(30,t.loc));break}}}function le(t,e){const n=t.tagType===3;return{type:10,loc:t.loc,condition:e.name==="else"?void 0:e.exp,children:n&&!be(t,"for")?t.children:[t],userKey:Se(t,"key"),isTemplateIf:n}}function ue(t,e,n){return t.condition?At(t.condition,he(t,e,n),W(n.helper(Ee),['""',"true"])):he(t,e,n)}function he(t,e,n){const{helper:s}=n,o=ke("key",g(`${e}`,!1,w,2)),{children:r}=t,i=r[0];if(r.length!==1||i.type!==1)if(r.length===1&&i.type===11){const a=i.codegenNode;return V(a,o,n),a}else{let a=64;return Y(n,s(K),L([o]),r,a+"",void 0,void 0,!0,!1,!1,t.loc)}else{const a=i.codegenNode,l=Wt(a);return l.type===13&&zt(l,n),V(l,o,n),a}}function Ht(t){for(;;)if(t.type===19)if(t.alternate.type===19)t=t.alternate;else return t;else t.type===20&&(t=t.value)}Ce("for",(t,e,n)=>{const{helper:s,removeHelper:o}=n;return qt(t,e,n,r=>{const i=W(s(Ct),[r.source]),c=_e(t),a=be(t,"memo"),l=Se(t,"key"),h=l&&(l.type===6?g(l.value.content,!0):l.exp),f=l?ke("key",h):null,u=r.source.type===4&&r.source.constType>0,d=u?64:l?128:256;return r.codegenNode=Y(n,s(K),void 0,i,d+"",void 0,void 0,!0,!u,!1,t.loc),()=>{let m;const{children:k}=r,B=k.length!==1||k[0].type!==1,O=ce(t)?t:c&&t.children.length===1&&ce(t.children[0])?t.children[0]:null;if(O?(m=O.codegenNode,c&&f&&V(m,f,n)):B?m=Y(n,s(K),f?L([f]):void 0,t.children,64+"",void 0,void 0,!0,void 0,!1):(m=k[0].codegenNode,c&&f&&V(m,f,n),m.isBlock!==!u&&(m.isBlock?(o(G),o(j(n.inSSR,m.isComponent))):o(z(n.inSSR,m.isComponent))),m.isBlock=!u,m.isBlock?(s(G),s(j(n.inSSR,m.isComponent))):s(z(n.inSSR,m.isComponent))),a){const A=re(me(r.parseResult,[g("_cached")]));A.body=Nt([q(["const _memo = (",a.exp,")"]),q(["if (_cached",...h?[" && _cached.key === ",h]:[],` && ${n.helperString(Ot)}(_cached, _memo)) return _cached`]),q(["const _item = ",m]),g("_item.memo = _memo"),g("return _item")]),i.arguments.push(A,g("_cache"),g(String(n.cached++)))}else i.arguments.push(re(me(r.parseResult),m,!0))}})});function qt(t,e,n,s){if(!e.exp){n.onError(N(31,e.loc));return}const o=Ut(e.exp);if(!o){n.onError(N(32,e.loc));return}const{addIdentifiers:r,removeIdentifiers:i,scopes:c}=n,{source:a,value:l,key:h,index:f}=o,u={type:11,loc:e.loc,source:a,valueAlias:l,keyAlias:h,objectIndexAlias:f,parseResult:o,children:_e(t)?t.children:[t]};n.replaceNode(u),c.vFor++;const d=s&&s(u);return()=>{c.vFor--,d&&d()}}const Kt=/([\s\S]*?)\s+(?:in|of)\s+([\s\S]*)/,fe=/,([^,\}\]]*)(?:,([^,\}\]]*))?$/,Yt=/^\(|\)$/g;function Ut(t,e){const n=t.loc,s=t.content,o=s.match(Kt);if(!o)return;const[,r,i]=o,c={source:F(n,i.trim(),s.indexOf(i,r.length)),value:void 0,key:void 0,index:void 0};let a=r.trim().replace(Yt,"").trim();const l=r.indexOf(a),h=a.match(fe);if(h){a=a.replace(fe,"").trim();const f=h[1].trim();let u;if(f&&(u=s.indexOf(f,l+a.length),c.key=F(n,f,u)),h[2]){const d=h[2].trim();d&&(c.index=F(n,d,s.indexOf(d,c.key?u+f.length:l+a.length)))}}return a&&(c.value=F(n,a,l)),c}function F(t,e,n){return g(e,!1,Bt(t,n,e.length))}function me({value:t,key:e,index:n},s=[]){return Xt([t,e,n,...s])}function Xt(t){let e=t.length;for(;e--&&!t[e];);return t.slice(0,e+1).map((n,s)=>n||g("_".repeat(s+1),!1))}new Be;class Jt{constructor(e){M(this,"onWindowResize",()=>{const e=window.innerWidth,n=window.innerHeight;this.renderer.setSize(e,n),this.camera.aspect=e/n,this.camera.updateProjectionMatrix()});M(this,"onKeyDown",e=>{const n=this._controls;switch(e.code){case"ArrowUp":case"KeyW":n.moveForward=!0;break;case"ArrowDown":case"KeyS":n.moveBackward=!0;break;case"ArrowLeft":case"KeyA":n.moveLeft=!0;break;case"ArrowRight":case"KeyD":n.moveRight=!0;break;case"Space":n.canJump===!0&&(this.velocity.y+=20),n.canJump=!1;break}});M(this,"onKeyUp",e=>{const n=this._controls;switch(e.code){case"ArrowUp":case"KeyW":n.moveForward=!1;break;case"ArrowDown":case"KeyS":n.moveBackward=!1;break;case"ArrowLeft":case"KeyA":n.moveLeft=!1;break;case"ArrowRight":case"KeyD":n.moveRight=!1;break}});this.parentDom=e.dom,this.dom=e.dom,this.blocks=[],this._controls={moveForward:!1,moveBackward:!1,moveLeft:!1,moveRight:!1,canJump:!1},this.raycaster=new Q(new y,new y(0,-1,0),0,1),this.raycaster2=new Q(new y,new y(1,0,0),0,.5),this.velocity=new y,this.direction=new y,this.vertex=new y,this.init()}init(){this.clock=new De,this.scene=new Ie,this.setCamera(),this.setRenderer(),this.setGround(),this.setLight(),this.composer=new Fe(this.renderer),this.setController(),this.render(),this.animate(),this.onEvent()}onEvent(){window.addEventListener("resize",this.onWindowResize),document.addEventListener("keydown",this.onKeyDown),document.addEventListener("keyup",this.onKeyUp),this.dom.addEventListener("click",()=>{this.controls.lock(),console.log("lock")}),this.controls.addEventListener("lock",function(){}),this.controls.addEventListener("unlock",function(){console.log("unlock")})}addCameraHelper(){const e=new Ge(this.camera);this.scene.add(e)}setCamera(){this.camera=new We(50,this.parentDom.offsetWidth/this.parentDom.offsetHeight,.1,1e3),this.camera.position.z=5,this.camera.position.x=5,this.camera.position.y=20,this.camera.lookAt(10,-10,10)}setRenderer(){this.renderer=new ze({}),this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=void 0,this.renderer.setSize(this.parentDom.offsetWidth,this.parentDom.offsetHeight),this.parentDom.appendChild(this.renderer.domElement),this.renderer.domElement.id="test"}setGround(){new vt().createGround().forEach(s=>{let o=new gt[s.type]({position:s}).mesh;this.blocks.push(o),this.scene.add(o)})}setLight(){this.scene.background=new ee(8900331),this.ambientLight=new je(15790320),new Ve(16777215,30,100).position.set(50,50,50);const s=new He("#ffffff",1);s.position.set(-40,60,-10),this.scene.add(s);var o=new qe(16711680,3);o.position.set(0,1,0),o.rotation.set(-Math.PI/2,0,0),o.width=4,o.height=9.9,this.scene.add(this.ambientLight)}createParticles(){for(var e=new(void 0),n=new(void 0)({size:4,vertexColors:!0,color:16777215}),s=-5;s<5;s++)for(var o=-5;o<5;o++){var r=new y(s*10,o*10,0);e.vertices.push(r),e.colors.push(new ee(Math.random()*65535))}var i=new(void 0)(e,n);this.scene.add(i)}setController(){this.controls=new st(this.camera,document.body),this.scene.add(this.controls.getObject())}render(){this.renderer.render(this.scene,this.camera)}animate(){requestAnimationFrame(this.animate.bind(this));const e=this.clock.getDelta(),n=10,s=this.controls;this.raycaster;const o=this.velocity,r=this.direction,{moveForward:i,moveBackward:c,moveLeft:a,moveRight:l,canJump:h}=this._controls;if(s.isLocked){const u=this.getIntersections().length>0;o.x-=o.x*10*e,o.z-=o.z*10*e,o.y-=9.8*10*e,r.z=Number(i)-Number(c),r.x=Number(l)-Number(a),r.normalize(),(i||c)&&(o.z-=r.z*n*e),(a||l)&&(o.x-=r.x*n*e),u===!0&&(o.y=Math.max(0,o.y),this._controls.canJump=!0);let d=new y().copy(o);if(d.y=0,d.normalize(),this.getIntersectionsMove(d).length>0){o.x=0,o.z=0;let k=new y;this.camera.getWorldDirection(k)}s.moveRight(-o.x*e),s.moveForward(-o.z*e),s.getObject().position.y+=o.y*e,s.getObject().position.y<-500&&(s.getObject().position.x=5,s.getObject().position.z=5,s.getObject().position.y=20,o.y=-1)}this.render()}crameVector(){const e=this.camera.up;let n=new y;n.setFromMatrixColumn(e.matrix,0),n.crossVectors(e.up,n),e.position.addScaledVector(n,distance),n.setFromMatrixColumn(e.matrix,0),e.position.addScaledVector(n,distance)}getIntersectionsMove(e){let n=new y().copy(e);const s=2;return n.applyMatrix4(this.camera.matrixWorld),n.setY(0),n.normalize(),this.raycaster2.ray.origin.copy(this.controls.getObject().position),this.raycaster2.ray.direction.copy(n),this.raycaster2.ray.origin.y-=s,this.raycaster2.intersectObjects(this.blocks,!1)}getIntersections(e){return this.raycaster.ray.origin.copy(e||this.controls.getObject().position),this.raycaster.ray.origin.y-=2,this.raycaster.intersectObjects(this.blocks,!1)}addModel(){const e=new S(new Ke(90,90,10,10),new Ye({color:10530223,shininess:150}));e.rotation.x=-Math.PI/2,e.receiveShadow=!0,e.position.set(0,-10,0);let n=new S(new Ue(10,100,0,2*Math.PI),new Xe({color:16711680,side:Je}));n.position.set(0,20,0),this.scene.add(e),this.scene.add(n)}}const tn={__name:"World",setup(t){const e=te(null);return te(2),$e(()=>{new Jt({dom:e.value})}),(n,s)=>(Ze(),Qe("div",{class:"three",ref_key:"box",ref:e},null,512))}};export{tn as default};