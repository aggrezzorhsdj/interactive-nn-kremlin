(()=>{"use strict";var e,t,a,r={1274:(e,t,a)=>{var r=a(5338),s=a(6540),l=a(7859),n=a(3865),o=a(2402);class i{static WOOD="./images/dver.jpg";static WOOD_GREEN="./images/zelderevo.jpg";static GLASS="./images/okno1.jpg";static PUTTY="./images/shpaklevka.jpg";static PUTTY_GREY="./images/sershpak.jpg";static PUTTY_DARK_GREY="./images/TSerShpak.jpg";static PUTTY_BEIGE="./images/bezhshpak.jpg";static ROOFING_FELT="./images/rubiroid.jpg";static METAL="./images/temnmetall.jpg";static SHEET="./images/proff1.jpg";static SHEET_GREEN="./images/zelproff.jpg";static BRICK_RED="./images/kirpich1.jpg";static BRICK_RED_BUMP="./images/kirpich.jpg";static PAINT_GREEN="./images/zelkraska.jpg";static ASPHALT="./images/asfalt1.jpg";static GRASS="./images/planee.jpg";static GOLD="./images/zoloto.jpg"}const c=[{name:"arsenal",x:382,z:-730,url:"./models/arsenal.glb",textureUrls:[i.SHEET,i.BRICK_RED,i.PUTTY],angle:-1},{name:"hozkorpus",x:688,z:986,url:"./models/hozkorpus.glb",textureUrls:[i.ROOFING_FELT,i.BRICK_RED],angle:0},{name:"sovet",x:-119,z:-646,url:"./models/sovet.glb",textureUrls:[i.WOOD,i.GLASS,i.GLASS,i.PUTTY,i.GLASS,i.ROOFING_FELT,i.ROOFING_FELT,i.PUTTY,i.PUTTY_GREY,i.PUTTY_GREY,i.PUTTY],angle:0},{name:"garage",x:-336,z:-1380,url:"./models/garage.glb",textureUrls:[i.METAL,i.GLASS,i.PUTTY_GREY,i.PUTTY,i.ROOFING_FELT],angle:0},{name:"kazar",x:729,z:347,url:"./models/kazar.glb",textureUrls:[i.SHEET,i.BRICK_RED,i.BRICK_RED,i.BRICK_RED,i.BRICK_RED],depthY:-2},{name:"services",x:-139,z:-1240,url:"./models/services.glb",textureUrls:[i.PUTTY_GREY,i.PUTTY_GREY,i.SHEET_GREEN,i.WOOD,i.GLASS,i.PUTTY_BEIGE],angle:-1,depthY:0},{name:"vicegub",x:420,z:132,url:"./models/vicegub.glb",textureUrls:[i.PUTTY_GREY,i.PUTTY_GREY,i.SHEET_GREEN,i.PUTTY,i.PUTTY],depthY:0},{name:"hospital",x:420,z:-126,url:"./models/hospital.glb",textureUrls:[i.PUTTY_BEIGE,i.PUTTY,i.PUTTY,i.PUTTY,i.PUTTY,i.PUTTY,i.PUTTY_GREY,i.METAL,i.WOOD,i.WOOD,i.WOOD,i.ROOFING_FELT,i.GLASS,i.GLASS],depthY:0},{name:"kotel",x:-266,z:-1135,url:"./models/kotel.glb",textureUrls:[i.ROOFING_FELT,i.WOOD,i.WOOD,i.GLASS,i.PUTTY_GREY,i.PUTTY],depthY:0},{name:"muzei",x:-291,z:-974,url:"./models/muzei.glb",textureUrls:[i.WOOD,i.GLASS,i.SHEET,i.WOOD,i.METAL,i.METAL,i.PUTTY,i.PUTTY,i.PUTTY,i.PUTTY],depthY:-2},{name:"obkom",title:"Правительство Нижегордской области",x:140,z:0,url:"./models/obkom.glb",textureUrls:[i.GLASS,i.WOOD,i.WOOD,i.GLASS,i.PUTTY,i.PUTTY,i.PUTTY]},{name:"minin",x:-355,z:131,url:"./models/minin.glb",textureUrls:[i.GLASS,i.PUTTY_DARK_GREY,i.PUTTY_DARK_GREY,i.PUTTY,i.PUTTY,i.PUTTY],depthY:-2},{name:"stella",x:687,z:-158,url:"./models/stella.glb",textureUrls:[i.PUTTY_GREY,i.PUTTY_DARK_GREY,i.PUTTY],depthY:-2},{name:"church",x:-78,z:360,url:"./models/church.glb",textureUrls:[i.METAL,i.WOOD_GREEN,i.PAINT_GREEN,i.PAINT_GREEN,i.PAINT_GREEN,i.PAINT_GREEN,i.PAINT_GREEN,i.PAINT_GREEN,i.PAINT_GREEN,i.PUTTY,i.GLASS,i.PUTTY,i.PUTTY,i.PUTTY,i.PUTTY,i.PUTTY],depthY:0},{name:"prisut",x:231,z:733,url:"./models/prisut.glb",textureUrls:["./images/zoloto.jpg",i.PUTTY,i.SHEET_GREEN,i.PUTTY,i.WOOD,i.PUTTY_GREY],depthY:-1},{name:"ministry",x:387,z:1182,url:"./models/ministry.glb",textureUrls:[i.PUTTY,i.PUTTY_BEIGE,i.PUTTY,i.ROOFING_FELT,i.ROOFING_FELT]},{name:"manezh",x:33,z:1251,url:"./models/manezh.glb",textureUrls:[i.PUTTY_GREY,i.SHEET_GREEN,i.BRICK_RED,i.GOLD,i.GOLD,i.SHEET_GREEN,i.PUTTY,i.BRICK_RED,i.BRICK_RED,i.PUTTY,i.PUTTY]},{name:"financial",x:33,z:1048,url:"./models/financial.glb",textureUrls:[i.PUTTY,i.PUTTY_BEIGE,i.PUTTY,i.PUTTY,i.ROOFING_FELT,i.ROOFING_FELT,i.PUTTY]}],m=[{name:"zachatskaya",title:"Зачатская башня",z:-366,x:-1070,url:"./models/zachatskaya.glb",textureUrls:[i.BRICK_RED],scale:.11,angle:-17},{name:"borisoglebovskaya",title:"Борисоглебовская башня",z:-1019,x:-875,url:"./models/borisoblebovskaya.glb",textureUrls:[i.BRICK_RED],scale:.13,angle:6},{name:"georgievskaya",title:"Георгиевская башня",z:-1606,x:-428,url:"./models/georgievskaya.glb",textureUrls:[i.BRICK_RED],scale:.11,angle:-90,depthY:-3},{name:"porohovaya",title:"Пороховая башня",z:-905,x:288,url:"./models/porohovaya.glb",textureUrls:[i.BRICK_RED],scale:.11},{name:"dmitrievskaya",z:-459,x:718,url:"./models/dmitrievskaya.glb",textureUrls:[i.BRICK_RED],scale:.11,angle:10,title:"Дмитриеская башня",text:"В память о великом князе Дмитрии Константиновиче и его покровителе Дмитрии Солунском центральную башню Нижегородского кремля назвали Дмитриевской. Опорный пункт защиты Верхнего Посада. Прямоугольная, проезжая башня соединялась каменным арочным мостом с предмостным укреплением — пятиугольной отводной стрельницей в окружении крепостного рва.",image:"./images/dmit-bashnya-min.png"},{name:"kladovaya",title:"Кладовая башня",z:157,x:900,url:"./models/kladovaya.glb",textureUrls:[i.BRICK_RED],scale:.11,angle:0},{name:"nikolskaya",title:"Никольская башня",z:784,x:1072,url:"./models/nikolskaya.glb",textureUrls:[i.BRICK_RED],scale:.11,angle:10},{name:"koromislova",title:"Коромыслова башня",z:1340,x:900,url:"./models/koromislova.glb",textureUrls:[i.BRICK_RED],scale:.11,angle:10},{name:"tainitskaya",title:"Тайнитская башня",z:1568,x:7,url:"./models/tainitskaya.glb",textureUrls:[i.BRICK_RED],scale:.11,angle:10},{name:"severnaya",title:"Северная башня",z:1247,x:-486,url:"./models/severnaya.glb",textureUrls:[i.BRICK_RED],scale:.11,angle:0},{name:"chasovaya",title:"Часовая башня",z:1043,x:-459,url:"./models/chasovaya.glb",textureUrls:[i.BRICK_RED],scale:.11,angle:0,depthY:-3},{name:"ivanovskaya",title:"Ивановская башня",z:720,x:-883,url:"./models/ivanovskaya.glb",textureUrls:[i.BRICK_RED],scale:.11,angle:12,depthY:-1},{name:"belaya",title:"Белая башня",z:149,x:-1037,url:"./models/belaya.glb",textureUrls:[i.BRICK_RED],scale:.11,angle:12,depthY:-5}];let d=function(e){return e.TERRAIN="terrain",e.ROAD="road",e.STAIRS="stairs",e.BASE="base",e.WALL="wall",e.TOWER="tower",e}({});const T=new Map([["terrain",d.TERRAIN],["stairs",d.STAIRS],["walls",d.WALL],["road1",d.ROAD],["road2",d.ROAD],["road3",d.ROAD],["road4",d.ROAD],["belaya",d.TOWER],["borisoglebovskaya",d.TOWER],["chasovaya",d.TOWER],["dmitrievskaya",d.TOWER],["georgievskaya",d.TOWER],["ivanovskaya",d.TOWER],["kladovaya",d.TOWER],["koromislova",d.TOWER],["nikolskaya",d.TOWER],["porohovaya",d.TOWER],["severnaya",d.TOWER],["tainitskaya",d.TOWER],["zachatskaya",d.TOWER]]),u=[-2e3,1e3,0,0,0,0];var g=a(9689),E=a(9437);function R(e,t,a){const r=a.children.find((e=>e.name===d.BASE))?.children.find((e=>e.name===d.TERRAIN)),s=new E.Raycaster,l=new E.Vector3(e,0,t),n=[new E.Vector3(0,90*E.MathUtils.DEG2RAD,0),new E.Vector3(0,-90*E.MathUtils.DEG2RAD,0)];let o;r.updateMatrixWorld();for(const e of n){s.set(l,e);const t=s.intersectObject(r);if(t?.length&&t[0].point){o=t[0];break}}return o?.point}var h=a(920),p=a(9644),x=a(9174);function U(e){const t=(0,x.z)(e);return t.wrapS=E.MirroredRepeatWrapping,t.wrapT=E.MirroredRepeatWrapping,t.repeat.set(20,20),t.anisotropy=12,t}var O=a(2656),_=a(4848);const b=e=>{let{building:t,onClick:a,isSelected:r,clickable:l}=e;const{x:n,z:o,url:i,name:c,textureUrls:m,angle:d,scale:T}=t,{scene:u}=(0,g.z)(),[x,b]=(0,s.useState)(null),P=(0,h.p)(i,!0),Y=(0,s.useRef)(null),S=Object.values(P.nodes).filter((e=>e instanceof E.Mesh)),v=new E.Group;v.add(...S),v.name=c;const[y,f]=(0,s.useState)(!1);return(0,s.useEffect)((()=>{const e=R(n,o,u)||new E.Vector3(0,0,0);!function(e,t,a){const r=(new E.Box3).setFromObject(a),s=new E.Vector3,l=new E.Vector3;r.getCenter(s),r.getSize(l);const n=l.x/2,o=l.z/2,i=[new E.Vector3(e.x-n,e.y,e.z-o),new E.Vector3(e.x+n,e.y,e.z+o),new E.Vector3(e.x-n,e.y,e.z+o),new E.Vector3(e.x+n,e.y,e.z-o)].map((e=>(R(e.x,e.z,t)||new E.Vector3(0,0,0)).y));new E.Vector3(e.x,Math.min(...i),e.z)}(e,u,Y.current),b(e)}),[u]),(0,_.jsx)(_.Fragment,{children:(0,_.jsxs)("group",{name:c,ref:Y,position:new E.Vector3(n,x?.y||0,o),"rotation-y":E.MathUtils.DEG2RAD*(d??0),scale:T??1,onClick:e=>{l&&(a&&a(e,t),f(!1))},onPointerLeave:!r&&(()=>{f(!1),document.body.classList.remove("pointer")}),onPointerEnter:!r&&(()=>{f(!0),document.body.classList.add("pointer")}),children:[v?.children?.map(((e,t)=>{const a=U(m[t]),s=y&&!r?new E.MeshStandardMaterial({color:16440084}):new E.MeshPhongMaterial({map:a,side:E.DoubleSide});return(0,_.jsx)("mesh",{castShadow:!0,receiveShadow:!0,geometry:e.geometry,material:s},e.id)})),y&&!r&&(0,_.jsx)(p.E,{calculatePosition:(e,t,a)=>{const r=(new E.Vector3).setFromMatrixPosition(e.matrixWorld);r.project(t);const s=a.width/2,l=a.height/2;return[r.x*s+s,-r.y*l+l-50]},children:(0,_.jsx)(O.A,{open:!0,title:(0,_.jsx)("h3",{children:t.title||t.name}),content:l&&"Нажмите для просмотра"})})]})})},P=(0,s.memo)(b),Y=(0,a(1511).v)((e=>({selectedBuilding:null,cameraParameters:u,setSelectedBuilding:t=>e((()=>({selectedBuilding:t}))),setCameraParameters:t=>e((()=>({cameraParameters:t})))}))),S=()=>{const e=Y((e=>e)),t=(t,a)=>{T.get(a.name)===d.TOWER&&(e.setCameraParameters([t.point.x-300,50,t.point.z-100,t.point.x,t.point.y,t.point.z]),e.setSelectedBuilding(a))};return(0,_.jsxs)(_.Fragment,{children:[c.map((e=>(0,_.jsx)(P,{building:e},e.name))),m.map((a=>(0,_.jsx)(P,{building:a,clickable:!0,onClick:t,isSelected:e.selectedBuilding?.name===a.name},a.name)))]})},v=(0,s.memo)(S),y=()=>(0,_.jsxs)(_.Fragment,{children:[(0,_.jsx)("directionalLight",{castShadow:!0,"shadow-darkness":!0,"shadow-mapSize-height":2048,"shadow-mapSize-width":2048,"shadow-camera-near":.5,"shadow-camera-far":5e3,"shadow-camera-left":-5e3,"shadow-camera-right":5e3,"shadow-camera-bottom":-5e3,"shadow-camera-top":2e3,position:[1e3,500,600]}),(0,_.jsx)("directionalLight",{castShadow:!0,color:1118481,position:[-1,-1,-1]}),(0,_.jsx)("directionalLight",{castShadow:!0,color:16777215,position:[0,1,1]}),(0,_.jsx)("directionalLight",{castShadow:!0,color:2236962,position:[1,0,1]}),(0,_.jsx)("directionalLight",{castShadow:!0,color:2236962,position:[-1,0,1]}),(0,_.jsx)("ambientLight",{intensity:.4,color:12105900})]}),f=(0,s.memo)(y),G=()=>{const e=(0,h.p)("./models/base.glb",!0);return e.scene.name="base",e.scene.children.forEach((e=>{if(e.isMesh){let t=(0,x.z)(i.BRICK_RED);switch(T.get(e.name)){case d.TERRAIN:t=U(i.GRASS),e.material=new E.MeshPhongMaterial({map:t,shininess:0,side:E.DoubleSide});break;case d.WALL:case d.TOWER:const a=U(i.BRICK_RED_BUMP);e.material=new E.MeshPhongMaterial({map:t,bumpMap:a,shininess:1,bumpScale:12,side:E.DoubleSide});break;case d.STAIRS:case d.ROAD:t=U(i.ASPHALT),e.material=new E.MeshStandardMaterial({map:t,side:E.DoubleSide})}e.receiveShadow=!0,e.castShadow=!0,t.needsUpdate=!0}})),(0,_.jsx)("primitive",{object:e.scene})},j=(0,s.memo)(G),k=()=>(0,_.jsxs)(_.Fragment,{children:[(0,_.jsx)(j,{}),(0,_.jsx)(v,{}),(0,_.jsx)(f,{})]}),D=(0,s.memo)(k);var w=a(8262),A=a(1653);const z=()=>{const{setSelectedBuilding:e,selectedBuilding:t,setCameraParameters:a}=Y(),r=()=>{e(null),a(u)};return(0,_.jsx)(w.A,{title:t?.title||t?.name,open:!!t,onClose:r,onOk:r,onCancel:r,width:500,footer:(0,_.jsx)(A.Ay,{onClick:r,children:"Закрыть"}),children:(0,_.jsxs)("div",{className:"modal__body",children:[t?.image&&(0,_.jsx)("div",{className:"modal__image",children:(0,_.jsx)("img",{src:t.image,alt:t.name})}),t?.text&&(0,_.jsx)("div",{className:"modal__text",children:t.text})]})})},I=(0,s.memo)(z),L=()=>{const e=(0,s.useRef)(),{cameraParameters:t}=Y();return(0,s.useEffect)((()=>{e?.current&&e.current.setLookAt(...t,!0).then()}),[t]),(0,_.jsxs)(_.Fragment,{children:[(0,_.jsxs)(l.Hl,{shadows:"soft",camera:{fov:60,aspect:window.innerWidth/window.innerHeight,near:1,far:1e5,position:new E.Vector3(...u.slice(0,2))},children:[(0,_.jsx)(s.Suspense,{fallback:null,children:(0,_.jsx)(D,{})}),(0,_.jsx)(n.a,{ref:e,maxPolarAngle:95*E.MathUtils.DEG2RAD})]}),(0,_.jsx)(o.a,{}),(0,_.jsx)(I,{})]})};(0,r.H)(document.getElementById("root")).render((0,_.jsx)(L,{}))}},s={};function l(e){var t=s[e];if(void 0!==t)return t.exports;var a=s[e]={exports:{}};return r[e](a,a.exports,l),a.exports}l.m=r,e=[],l.O=(t,a,r,s)=>{if(!a){var n=1/0;for(m=0;m<e.length;m++){a=e[m][0],r=e[m][1],s=e[m][2];for(var o=!0,i=0;i<a.length;i++)(!1&s||n>=s)&&Object.keys(l.O).every((e=>l.O[e](a[i])))?a.splice(i--,1):(o=!1,s<n&&(n=s));if(o){e.splice(m--,1);var c=r();void 0!==c&&(t=c)}}return t}s=s||0;for(var m=e.length;m>0&&e[m-1][2]>s;m--)e[m]=e[m-1];e[m]=[a,r,s]},l.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return l.d(t,{a:t}),t},a=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,l.t=function(e,r){if(1&r&&(e=this(e)),8&r)return e;if("object"==typeof e&&e){if(4&r&&e.__esModule)return e;if(16&r&&"function"==typeof e.then)return e}var s=Object.create(null);l.r(s);var n={};t=t||[null,a({}),a([]),a(a)];for(var o=2&r&&e;"object"==typeof o&&!~t.indexOf(o);o=a(o))Object.getOwnPropertyNames(o).forEach((t=>n[t]=()=>e[t]));return n.default=()=>e,l.d(s,n),s},l.d=(e,t)=>{for(var a in t)l.o(t,a)&&!l.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})},l.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),l.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),l.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{var e={792:0};l.O.j=t=>0===e[t];var t=(t,a)=>{var r,s,n=a[0],o=a[1],i=a[2],c=0;if(n.some((t=>0!==e[t]))){for(r in o)l.o(o,r)&&(l.m[r]=o[r]);if(i)var m=i(l)}for(t&&t(a);c<n.length;c++)s=n[c],l.o(e,s)&&e[s]&&e[s][0](),e[s]=0;return l.O(m)},a=self.webpackChunkinteractive_nn_kremlin=self.webpackChunkinteractive_nn_kremlin||[];a.forEach(t.bind(null,0)),a.push=t.bind(null,a.push.bind(a))})();var n=l.O(void 0,[874,641,632,8,931,582,587,543,233,169,499],(()=>l(1274)));n=l.O(n)})();