var X=Object.defineProperty;var J=(n,e,t)=>e in n?X(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t;var k=(n,e,t)=>(J(n,typeof e!="symbol"?e+"":e,t),t);import{E as U,V as f,b as V,T as Z,d as g,B as Q,e as v,G as $,R as ee,C as te,S as oe,f as se,g as ne,P as ie,W as re,h as F,A as ae,i as ce,D as he,j as le,k as de,l as me,m as ue,p as fe,q as pe,r as O,n as we,o as ve,c as ge}from"./index-24f95784.js";const x=new U(0,0,0,"YXZ"),b=new f,ye={type:"change"},ke={type:"lock"},xe={type:"unlock"},W=Math.PI/2;class be extends V{constructor(e,t){super(),this.domElement=t,this.isLocked=!1,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.pointerSpeed=1;const o=this;function s(r){if(o.isLocked===!1)return;const l=r.movementX||r.mozMovementX||r.webkitMovementX||0,d=r.movementY||r.mozMovementY||r.webkitMovementY||0;x.setFromQuaternion(e.quaternion),x.y-=l*.002*o.pointerSpeed,x.x-=d*.002*o.pointerSpeed,x.x=Math.max(W-o.maxPolarAngle,Math.min(W-o.minPolarAngle,x.x)),e.quaternion.setFromEuler(x),o.dispatchEvent(ye)}function i(){o.domElement.ownerDocument.pointerLockElement===o.domElement?(o.dispatchEvent(ke),o.isLocked=!0):(o.dispatchEvent(xe),o.isLocked=!1)}function a(){console.error("THREE.PointerLockControls: Unable to use Pointer Lock API")}this.connect=function(){o.domElement.ownerDocument.addEventListener("mousemove",s),o.domElement.ownerDocument.addEventListener("pointerlockchange",i),o.domElement.ownerDocument.addEventListener("pointerlockerror",a)},this.disconnect=function(){o.domElement.ownerDocument.removeEventListener("mousemove",s),o.domElement.ownerDocument.removeEventListener("pointerlockchange",i),o.domElement.ownerDocument.removeEventListener("pointerlockerror",a)},this.dispose=function(){this.disconnect()},this.getObject=function(){return e},this.getDirection=function(){const r=new f(0,0,-1);return function(l){return l.copy(r).applyQuaternion(e.quaternion)}}(),this.moveForward=function(r){b.setFromMatrixColumn(e.matrix,0),b.crossVectors(e.up,b),e.position.addScaledVector(b,r)},this.moveRight=function(r){b.setFromMatrixColumn(e.matrix,0),e.position.addScaledVector(b,r)},this.lock=function(){this.domElement.requestPointerLock()},this.unlock=function(){o.domElement.ownerDocument.exitPointerLock()},this.connect()}}const Ee=""+new URL("blocks-a4d47609.png",import.meta.url).href,M=new Z().load(Ee);M.repeat.set(.0625,.0625);function P(n,e){let t=M.clone();return t.offset.set(n/16,e/16),t}let j=M.clone(),K=M.clone(),I=M.clone();j.offset.set(0,15/16);K.offset.set(2/16,15/16);I.offset.set(1/16,15/16);let T=M.clone();T.offset.set(4/16,15/16);const Me=new g({map:j}),H=new g({map:K}),_=new g({map:I}),Le=new g({map:T}),Y=new g({map:P(1,13)}),C=new g({map:P(0,13)}),_e=new g({map:P(2,13)}),L=new Q(1,1,1),Ce=new v(L,H),De=new v(L,[_,_,Me,H,_,_]),Pe=new v(L,Le),Be=new v(L,[C,C,Y,Y,C,C]),Ae=new v(L,_e);class E{constructor(e){const{position:t}=e;this.mesh=Ce.clone(),t&&this.mesh.position.set(t.x,t.y,t.z)}}class Se extends E{constructor(e){super(e);const{position:t}=e;this.mesh=De.clone(),t&&this.mesh.position.set(t.x,t.y,t.z)}}class Ge extends E{constructor(e){const{position:t}=e;super(e),this.mesh=Pe.clone(),t&&this.mesh.position.set(t.x,t.y,t.z)}}class Re extends E{constructor(e){const{position:t}=e;super(e),this.mesh=Ae.clone(),t&&this.mesh.position.set(t.x,t.y,t.z)}}class ze extends E{constructor(e){const{position:t}=e;super(e),this.mesh=Be.clone(),t&&this.mesh.position.set(t.x,t.y,t.z)}}const qe=Object.freeze(Object.defineProperty({__proto__:null,default:E,BaseBox:E,GrassBox:Se,CoalBox:Ge,StoneBox:Re,FireBox:ze},Symbol.toStringTag,{value:"Module"})),c=[151,160,137,91,90,15,131,13,201,95,96,53,194,233,7,225,140,36,103,30,69,142,8,99,37,240,21,10,23,190,6,148,247,120,234,75,0,26,197,62,94,252,219,203,117,35,11,32,57,177,33,88,237,149,56,87,174,20,125,136,171,168,68,175,74,165,71,134,139,48,27,166,77,146,158,231,83,111,229,122,60,211,133,230,220,105,92,41,55,46,245,40,244,102,143,54,65,25,63,161,1,216,80,73,209,76,132,187,208,89,18,169,200,196,135,130,116,188,159,86,164,100,109,198,173,186,3,64,52,217,226,250,124,123,5,202,38,147,118,126,255,82,85,212,207,206,59,227,47,16,58,17,182,189,28,42,223,183,170,213,119,248,152,2,44,154,163,70,221,153,101,155,167,43,172,9,129,22,39,253,19,98,108,110,79,113,224,232,178,185,112,104,218,246,97,228,251,34,242,193,238,210,144,12,191,179,162,241,81,51,145,235,249,14,239,107,49,192,214,31,181,199,106,157,184,84,204,176,115,121,50,45,127,4,150,254,138,236,205,93,222,114,67,29,24,72,243,141,128,195,78,66,215,61,156,180];for(let n=0;n<256;n++)c[256+n]=c[n];function D(n){return n*n*n*(n*(n*6-15)+10)}function w(n,e,t){return e+n*(t-e)}function u(n,e,t,o){const s=n&15,i=s<8?e:t,a=s<4?t:s==12||s==14?e:o;return(s&1?-i:i)+(s&2?-a:a)}class Fe{noise(e,t,o){const s=Math.floor(e),i=Math.floor(t),a=Math.floor(o),r=s&255,l=i&255,d=a&255;e-=s,t-=i,o-=a;const m=e-1,p=t-1,h=o-1,y=D(e),B=D(t),N=D(o),A=c[r]+l,S=c[A]+d,G=c[A+1]+d,R=c[r+1]+l,z=c[R]+d,q=c[R+1]+d;return w(N,w(B,w(y,u(c[S],e,t,o),u(c[z],m,t,o)),w(y,u(c[G],e,p,o),u(c[q],m,p,o))),w(B,w(y,u(c[S+1],e,t,h),u(c[z+1],m,t,h)),w(y,u(c[G+1],e,p,h),u(c[q+1],m,p,h))))}}class Oe{constructor(){k(this,"get",(e,t,o)=>this.noise.noise(e,t,o));this.noise=new Fe,this.seed=1.75*.6,this.quality=10,this.scale=10,this.seedGrass=1.75,this.qualityGrass=10,this.scaleGrass=10,this.seedCoal=1.75*.8,this.qualityCoal=10,this.scaleCoal=10}}class We{constructor(){k(this,"blocks",[]);this.width=50,this.height=50,this.fixY=0,this.startY=-5}createGround(){const e=new Oe;let t=[];for(let o=0;o<this.width;o++)for(let s=0;s<this.height;s++){let i=e.get(o/e.quality,s/e.quality,e.seed)*e.scale,a=e.get(o/e.qualityGrass,s/e.qualityGrass,e.seedGrass)*e.scaleGrass,r=e.get(o/e.qualityCoal,s/e.qualityCoal,e.seedCoal)*e.scaleCoal,l=~~i+this.fixY,d=~~a+this.fixY,m=~~r+this.fixY,p=Math.max(l,d,m);for(let h=this.startY;h<p;h++)h>l?h<m?t.push({x:o,y:h,z:s,type:"CoalBox"}):t.push({x:o,y:h,z:s,type:"GrassBox"}):t.push({x:o,y:h,z:s,type:"BaseBox"})}return t}}new $;class Ye{constructor(e){k(this,"onWindowResize",()=>{const e=window.innerWidth,t=window.innerHeight;this.renderer.setSize(e,t),this.camera.aspect=e/t,this.camera.updateProjectionMatrix()});k(this,"onKeyDown",e=>{const t=this._controls;switch(e.code){case"ArrowUp":case"KeyW":t.moveForward=!0;break;case"ArrowDown":case"KeyS":t.moveBackward=!0;break;case"ArrowLeft":case"KeyA":t.moveLeft=!0;break;case"ArrowRight":case"KeyD":t.moveRight=!0;break;case"Space":t.canJump===!0&&(this.velocity.y+=50),t.canJump=!1;break}});k(this,"onKeyUp",e=>{const t=this._controls;switch(e.code){case"ArrowUp":case"KeyW":t.moveForward=!1;break;case"ArrowDown":case"KeyS":t.moveBackward=!1;break;case"ArrowLeft":case"KeyA":t.moveLeft=!1;break;case"ArrowRight":case"KeyD":t.moveRight=!1;break}});this.parentDom=e.dom,this.dom=e.dom,this.blocks=[],this._controls={moveForward:!1,moveBackward:!1,moveLeft:!1,moveRight:!1,canJump:!1},this.raycaster=new ee(new f,new f(0,-1,0),0,10),this.velocity=new f,this.direction=new f,this.vertex=new f,this.init()}init(){this.clock=new te,this.scene=new oe,this.setCamera(),this.setRenderer(),this.setGround(),this.setLight(),this.composer=new se(this.renderer),this.setController(),this.render(),this.animate(),this.onEvent()}onEvent(){window.addEventListener("resize",this.onWindowResize),document.addEventListener("keydown",this.onKeyDown),document.addEventListener("keyup",this.onKeyUp),this.dom.addEventListener("click",()=>{this.controls.lock()}),this.controls.addEventListener("lock",function(){}),this.controls.addEventListener("unlock",function(){})}addCameraHelper(){const e=new ne(this.camera);this.scene.add(e)}setCamera(){this.camera=new ie(75,this.parentDom.offsetWidth/this.parentDom.offsetHeight,.1,1e3),this.camera.position.z=10,this.camera.position.x=10,this.camera.position.y=5}setRenderer(){this.renderer=new re({}),this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=void 0,this.renderer.setSize(this.parentDom.offsetWidth,this.parentDom.offsetHeight),this.parentDom.appendChild(this.renderer.domElement),this.renderer.domElement.id="test"}setGround(){new We().createGround().forEach(o=>{let s=new qe[o.type]({position:o}).mesh;this.blocks.push(s),this.scene.add(s)})}setLight(){this.scene.background=new F(8900331),this.ambientLight=new ae(15790320),new ce(16777215,30,100).position.set(50,50,50);const o=new he("#ffffff",1);o.position.set(-40,60,-10),o.shadow.camera.near=20,o.shadow.camera.far=200,o.shadow.camera.left=-50,o.shadow.camera.right=50,o.shadow.camera.top=50,o.shadow.camera.bottom=-50,o.shadow.mapSize.height=1024,o.shadow.mapSize.width=1024,this.scene.add(o);var s=new le(16711680,3);s.position.set(0,1,0),s.rotation.set(-Math.PI/2,0,0),s.width=4,s.height=9.9,this.scene.add(this.ambientLight)}createParticles(){for(var e=new(void 0),t=new(void 0)({size:4,vertexColors:!0,color:16777215}),o=-5;o<5;o++)for(var s=-5;s<5;s++){var i=new f(o*10,s*10,0);e.vertices.push(i),e.colors.push(new F(Math.random()*65535))}var a=new(void 0)(e,t);this.scene.add(a)}setController(){this.controls=new be(this.camera,document.body),this.scene.add(this.controls.getObject())}render(){this.renderer.render(this.scene,this.camera)}animate(){requestAnimationFrame(this.animate.bind(this));const e=this.clock.getDelta(),t=10,o=this.controls,s=this.raycaster,i=this.velocity,a=this.direction,{moveForward:r,moveBackward:l,moveLeft:d,moveRight:m,canJump:p}=this._controls;if(o.isLocked===!0){s.ray.origin.copy(o.getObject().position),s.ray.origin.y-=4;const y=s.intersectObjects(this.blocks,!1).length>0;i.x-=i.x*10*e,i.z-=i.z*10*e,i.y-=9.8*20*e,a.z=Number(r)-Number(l),a.x=Number(m)-Number(d),a.normalize(),(r||l)&&(i.z-=a.z*t*e),(d||m)&&(i.x-=a.x*t*e),y===!0&&(i.y=Math.max(0,i.y),this._controls.canJump=!0),o.moveRight(-i.x*e),o.moveForward(-i.z*e),o.getObject().position.y+=i.y*e,o.getObject().position.y<10&&(i.y=0,o.getObject().position.y=10,this._controls.canJump=!0)}this.render()}addModel(){const e=new v(new de(90,90,10,10),new me({color:10530223,shininess:150}));e.rotation.x=-Math.PI/2,e.receiveShadow=!0,e.position.set(0,-10,0);let t=new v(new ue(10,100,0,2*Math.PI),new fe({color:16711680,side:pe}));t.position.set(0,20,0),this.scene.add(e),this.scene.add(t)}}const Ie={__name:"World",setup(n){const e=O(null);return O(2),we(()=>{new Ye({dom:e.value})}),(t,o)=>(ve(),ge("div",{class:"three",ref_key:"box",ref:e},null,512))}};export{Ie as default};