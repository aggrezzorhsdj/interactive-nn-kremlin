(()=>{"use strict";var e,t,a,r={1274:(e,t,a)=>{var r=a(5338),s=a(6540),l=a(7859),i=a(3865),n=a(2402);class o{static WOOD="./images/dver.jpg";static WOOD_GREEN="./images/zelderevo.jpg";static GLASS="./images/okno1.jpg";static PUTTY="./images/shpaklevka.jpg";static PUTTY_GREY="./images/sershpak.jpg";static PUTTY_DARK_GREY="./images/TSerShpak.jpg";static PUTTY_BEIGE="./images/bezhshpak.jpg";static ROOFING_FELT="./images/rubiroid.jpg";static METAL="./images/temnmetall.jpg";static SHEET="./images/proff1.jpg";static SHEET_GREEN="./images/zelproff.jpg";static BRICK_RED="./images/kirpich1.jpg";static BRICK_RED_BUMP="./images/kirpich.jpg";static PAINT_GREEN="./images/zelkraska.jpg";static ASPHALT="./images/asfalt1.jpg";static GRASS="./images/planee.jpg";static GOLD="./images/zoloto.jpg"}const m=[{name:"arsenal",title:"Арсенал",x:382,z:-730,url:"./models/arsenal.glb",textureUrls:[o.SHEET,o.BRICK_RED,o.PUTTY],angle:-1},{name:"hozkorpus",title:"Хозяйственный корпус",x:688,z:986,url:"./models/hozkorpus.glb",textureUrls:[o.ROOFING_FELT,o.BRICK_RED],angle:0},{name:"sovet",title:"Здание советов",x:-119,z:-646,url:"./models/sovet.glb",textureUrls:[o.WOOD,o.GLASS,o.GLASS,o.PUTTY,o.GLASS,o.ROOFING_FELT,o.ROOFING_FELT,o.PUTTY,o.PUTTY_GREY,o.PUTTY_GREY,o.PUTTY],angle:0},{name:"garage",title:"Гараж",x:-336,z:-1380,url:"./models/garage.glb",textureUrls:[o.METAL,o.GLASS,o.PUTTY_GREY,o.PUTTY,o.ROOFING_FELT],angle:0},{name:"kazar",title:"Казармы",x:729,z:347,url:"./models/kazar.glb",textureUrls:[o.SHEET,o.BRICK_RED,o.BRICK_RED,o.BRICK_RED,o.BRICK_RED],depthY:-2},{name:"services",title:"Арбитражный суд",x:-139,z:-1240,url:"./models/services.glb",textureUrls:[o.PUTTY_GREY,o.PUTTY_GREY,o.SHEET_GREEN,o.WOOD,o.GLASS,o.PUTTY_BEIGE],angle:-1,depthY:0},{name:"vicegub",title:"Дом вице-губернатора",x:420,z:132,url:"./models/vicegub.glb",textureUrls:[o.PUTTY_GREY,o.PUTTY_GREY,o.SHEET_GREEN,o.PUTTY,o.PUTTY],depthY:0},{name:"hospital",title:"Казарма гарнизонного батальона",x:420,z:-126,url:"./models/hospital.glb",textureUrls:[o.PUTTY_BEIGE,o.PUTTY,o.PUTTY,o.PUTTY,o.PUTTY,o.PUTTY,o.PUTTY_GREY,o.METAL,o.WOOD,o.WOOD,o.WOOD,o.ROOFING_FELT,o.GLASS,o.GLASS],depthY:0},{name:"kotel",title:"Котельная",x:-266,z:-1135,url:"./models/kotel.glb",textureUrls:[o.ROOFING_FELT,o.WOOD,o.WOOD,o.GLASS,o.PUTTY_GREY,o.PUTTY],depthY:0},{name:"muzei",title:"Художественный музей",x:-291,z:-974,url:"./models/muzei.glb",textureUrls:[o.WOOD,o.GLASS,o.SHEET,o.WOOD,o.METAL,o.METAL,o.PUTTY,o.PUTTY,o.PUTTY,o.PUTTY],depthY:-2},{name:"obkom",title:"Правительство Нижегордской области",x:140,z:0,url:"./models/obkom.glb",textureUrls:[o.GLASS,o.WOOD,o.WOOD,o.GLASS,o.PUTTY,o.PUTTY,o.PUTTY]},{name:"minin",title:"Обелиск К. Минину и Д. Пожарскому",x:-355,z:131,url:"./models/minin.glb",textureUrls:[o.GLASS,o.PUTTY_DARK_GREY,o.PUTTY_DARK_GREY,o.PUTTY,o.PUTTY,o.PUTTY],depthY:-2},{name:"stella",title:"Георгий Победоносец на коне, поражающий змея",x:687,z:-158,url:"./models/stella.glb",textureUrls:[o.PUTTY_GREY,o.PUTTY_DARK_GREY,o.PUTTY],depthY:-2},{name:"church",title:"Собор Архангела Михаила",x:-78,z:360,url:"./models/church.glb",textureUrls:[o.METAL,o.WOOD_GREEN,o.PAINT_GREEN,o.PAINT_GREEN,o.PAINT_GREEN,o.PAINT_GREEN,o.PAINT_GREEN,o.PAINT_GREEN,o.PAINT_GREEN,o.PUTTY,o.GLASS,o.PUTTY,o.PUTTY,o.PUTTY,o.PUTTY,o.PUTTY],depthY:0},{name:"prisut",title:"Заксобрание",x:231,z:733,url:"./models/prisut.glb",textureUrls:["./images/zoloto.jpg",o.PUTTY,o.SHEET_GREEN,o.PUTTY,o.WOOD,o.PUTTY_GREY],depthY:-1},{name:"ministry",title:"Здание министерств",x:387,z:1182,url:"./models/ministry.glb",textureUrls:[o.PUTTY,o.PUTTY_BEIGE,o.PUTTY,o.ROOFING_FELT,o.ROOFING_FELT]},{name:"manezh",title:"Манеж",x:33,z:1251,url:"./models/manezh.glb",textureUrls:[o.PUTTY_GREY,o.SHEET_GREEN,o.BRICK_RED,o.GOLD,o.GOLD,o.SHEET_GREEN,o.PUTTY,o.BRICK_RED,o.BRICK_RED,o.PUTTY,o.PUTTY]},{name:"financial",title:"Банковская контора",x:33,z:1048,url:"./models/financial.glb",textureUrls:[o.PUTTY,o.PUTTY_BEIGE,o.PUTTY,o.PUTTY,o.ROOFING_FELT,o.ROOFING_FELT,o.PUTTY]}],c=[{name:"zachatskaya",title:"Зачатская башня",image:"./images/zachatskaya.jpg",text:"Башня получила название по существовавшему рядом женскому монастырю в честь Зачатия Пресвятой Богородицы. В некоторых документах башня называется Белой «четвероугольной» (в отличие от соседней Белой круглой башни), что указывает на наличие в ней, наряду с кирпичными, белокаменных частей.",z:-366,x:-1070,url:"./models/zachatskaya.glb",textureUrls:[o.BRICK_RED],scale:.11,angle:-17},{name:"borisoglebovskaya",title:"Борисоглебовская башня",text:"Башня получила своё название от находившейся рядом церкви Бориса и Глеба. Круглая в плане, не проездная, как и все остальные башни, вынесена за плоскость стены. Такое расположение позволяло создать дополнительные боковые бойницы, из которых простреливалось пространство вдоль стены, а ещё быстро и без лишних усилий перемещать тяжелое вооружение. С момента постройки подвергалась интенсивному воздействию грунтовых вод и в середине XVIII века была смещена оползнем.",image:"./images/Borisoglebskaya-min.jpg",z:-1019,x:-875,url:"./models/borisoblebovskaya.glb",textureUrls:[o.BRICK_RED],scale:.13,angle:6},{name:"georgievskaya",title:"Георгиевская башня",text:"Своё название башня получила от церкви святого Георгия, находившейся неподалеку. Квадратная проездная башня занимает угловое положение на самой кромке волжского откоса, поэтому проезд башни изгибается под углом. Этим исключалась возможность сквозного обстрела. Ворота в ней были закрыты ещё в начале XVII века.",image:"./images/georgievskaya-min.jpg",z:-1606,x:-428,url:"./models/georgievskaya.glb",textureUrls:[o.BRICK_RED],scale:.11,angle:-90,depthY:-3},{name:"porohovaya",title:"Пороховая башня",text:"Своё название башня получила по назначению: там хранили ядра, порох и другие боеприпасы. По документам XVII века башня именовалась Спасской — по Спасо-Преображенскому собору, в XVIII веке — Стрелецкой — по располагавшейся на верхнем посаде стрелецкой слободе. Круглая крепостная башня. Все четыре яруса башни были боевыми, при этом в нижних ярусах нет фронтальных бойниц, а из боковых можно легко простреливать пространство вдоль рва. В результате позднейшей подсыпки грунта первый и часть второго яруса оказались под землей.",image:"./images/porohovaya.png",z:-905,x:288,url:"./models/porohovaya.glb",textureUrls:[o.BRICK_RED],scale:.11},{name:"dmitrievskaya",z:-459,x:718,url:"./models/dmitrievskaya.glb",textureUrls:[o.BRICK_RED],scale:.11,angle:10,title:"Дмитриеская башня",text:"В память о великом князе Дмитрии Константиновиче и его покровителе Дмитрии Солунском центральную башню Нижегородского кремля назвали Дмитриевской. Опорный пункт защиты Верхнего Посада. Прямоугольная, проезжая башня соединялась каменным арочным мостом с предмостным укреплением — пятиугольной отводной стрельницей в окружении крепостного рва.",image:"./images/dmit-bashnya-min.png"},{name:"kladovaya",title:"Кладовая башня",text:"В XVI веке Тверская — от слова «твердь» — укрепление, крепкое место; в XVII–XVIII веке Алексеевская — по расположенной неподалёку церкви, построенной в 1642 году; в XIX веке — Цейхгаузная. Своё нынешнее название башня получила от слова «кладь»: использовалась как складское место. Круглая, 4 боевых яруса. Нижний в настоящее время находится под землей, 2-й и 3-й ярусы оборудованы боковыми боевыми камерами. В башне нет бойниц среднего боя, так как перед ней нет мёртвого пространства — она расположена между двумя более крупными квадратными башнями.",image:"./images/kladovaya-min.jpg",z:157,x:900,url:"./models/kladovaya.glb",textureUrls:[o.BRICK_RED],scale:.11,angle:0},{name:"nikolskaya",title:"Никольская башня",text:"Название получила от церкви Николая Чудотворца, стоявшей на противоположной стороне Зеленского съезда. Квадратная, проездная, имеет 3 боевых яруса. Снаружи башни уровень земли значительно ниже, чем с внутренней стороны, и соответствует дну рва. Через ров в древности был переброшен подъёмный мост. Серьёзно была продумана оборона воротного яруса: в случае нападения подъёмный мост поднимался с помощью специального механизма и закрывал проём ворот, закрывались створчатые ворота, а между ними опускались чугунные решётки — герсы. Высота башни вместе с дозорной вышкой составляет почти 30 метров.",image:"./images/nikolskaya.png",z:784,x:1072,url:"./models/nikolskaya.glb",textureUrls:[o.BRICK_RED],scale:.11,angle:10},{name:"koromislova",title:"Коромыслова башня",text:"Народная молва связывает происхождение названия с двумя вариантами популярной легенды. По одной из них здесь живьём закопана молодая женщина, шедшая поутру с коромыслами за водой для придания башне крепости. Подобный обычай существовал в очень далекие, языческие времена и вряд ли ещё бытовал в период строительства крепости. По другой версии здесь похоронена смелая нижегородка, шедшая за водой на речку Почайну и погибшая во время схватки с врагами. Нескольких она успела убить коромыслом, но и сама погибла. Похоронили её в основании строящейся башни, которую и назвали Коромысловой. Почти полностью, включая внутренние помещения, выложена из белого камня.",image:"./images/koromislova.png",z:1340,x:900,url:"./models/koromislova.glb",textureUrls:[o.BRICK_RED],scale:.11,angle:10},{name:"tainitskaya",title:"Тайнитская башня",text:"Своё название получила по подземному тайному ходу, который вел от неё вниз по склону к реке Почайне. Остатки этого хода были обнаружены и уничтожены в 80-х годах XIX века при работах по благоустройству Зеленского съезда. В документах XVII века она называется Мироносицкой — от названия церкви Святых жён Мироносиц, находившейся на противоположном склоне оврага, и «на Зелене» — от «зелейного двора» — порохового завода, тоже находившегося напротив. От «Зелейного двора» получил своё название и Зеленский съезд. Круглая крепостная башня имеет 4 боевых яруса, то есть все они оборудованы бойницами. С прясла стены в башню ведут два входа — один на 4-й ярус, другой на 3-й (в настоящее время заложен).",image:"./images/tainitskaya-min.jpg",z:1568,x:7,url:"./models/tainitskaya.glb",textureUrls:[o.BRICK_RED],scale:.11,angle:10},{name:"severnaya",title:"Северная башня",text:"Прясло от Тайницкой башни в сторону Северной совпадает с направлением на север. Документы XVII века называют башню Ильинской, либо «наугольной» — угловой. Название «Ильинская» происходит от церкви на противоположной стороне Почаинского оврага, по легенде поставленной нижегородцами на месте, где был убит мурза ногайский во время осады Нижнего Новгорода в 1505 году.",image:"./images/Severnaya.png",z:1247,x:-486,url:"./models/severnaya.glb",textureUrls:[o.BRICK_RED],scale:.11,angle:0},{name:"chasovaya",title:"Часовая башня",text:"Получила своё название по часам, которые находились в пятиугольном бревенчатом срубе в верхней части башни. В течение двух веков они были главными городскими часами. В соответствии с древнерусским исчислением времени циферблат был разделен на 17 частей, по количеству часов наиболее продолжительного летнего дня. Забота о регулярной перестановке механизма и правильности их хода была сложным делом и возлагалась на специального «часовника», который жил возле башни. Является единственной из башен Нижегородского кремля, расположенной на углу уступом внутрь. По этой причине здесь не было вооружения. Однако высота башни и дозорная вышка позволяют предположить, что строение предназначалось для наблюдательного и командного пункта. Самая высокая башня кремля — 33 метра.",image:"./images/chasovaya-min.jpg",z:1043,x:-459,url:"./models/chasovaya.glb",textureUrls:[o.BRICK_RED],scale:.11,angle:0,depthY:-3},{name:"ivanovskaya",title:"Ивановская башня",text:"Являлась ведущей в подгорной части кремля. Имела особую задачу — прикрывать своим огнём территорию древнего нижегородского торга, а также волжский рейд со стоявшими на нём судами. С внутренней стороны имела пристрой с «городовой лестницей», по которой защитники кремля поднимались на стены. В том же пристрое была камера для пленных и преступников.  В Ивановской башне несколько ворот: главные и боковые, выходившие на деревоземляной обруб, на котором располагались самые мощные пушки. В 1531 году башня была разрушена от взрыва пороховых складов, однако быстро восстановлена. Это единственная башня, через которую проходит боевой ход.",image:"./images/ivanovskaya.png",z:720,x:-883,url:"./models/ivanovskaya.glb",textureUrls:[o.BRICK_RED],scale:.11,angle:12,depthY:-1},{name:"belaya",title:"Белая башня",text:"Документы XVII–XVIII веков называют башню Симеоновской — по находившемуся рядом с ней храму Симеона Cтолпника. Современное название башни, возможно, связано с цветом её нижнего яруса, а может быть, объясняется тем, что построена она на церковной земле, которую в старину называли белой, то есть свободной от податей. Нижняя часть стен с наружной стороны кремля выложена из белого камня, верхняя — кирпичная. Отличается большим количеством боевых печур и бойниц. Имеет два входа с прясла стены — на 3-й и 4-й ярусы, сейчас оба они заложены.",image:"./images/white.jpg",z:149,x:-1037,url:"./models/belaya.glb",textureUrls:[o.BRICK_RED],scale:.11,angle:12,depthY:-5}];let g=function(e){return e.TERRAIN="terrain",e.ROAD="road",e.STAIRS="stairs",e.BASE="base",e.WALL="wall",e.TOWER="tower",e}({});const d=new Map([["terrain",g.TERRAIN],["stairs",g.STAIRS],["walls",g.WALL],["road1",g.ROAD],["road2",g.ROAD],["road3",g.ROAD],["road4",g.ROAD],["belaya",g.TOWER],["borisoglebovskaya",g.TOWER],["chasovaya",g.TOWER],["dmitrievskaya",g.TOWER],["georgievskaya",g.TOWER],["ivanovskaya",g.TOWER],["kladovaya",g.TOWER],["koromislova",g.TOWER],["nikolskaya",g.TOWER],["porohovaya",g.TOWER],["severnaya",g.TOWER],["tainitskaya",g.TOWER],["zachatskaya",g.TOWER]]),T=[-2e3,1e3,0,0,0,0];var u=a(9689),E=a(9437);function R(e,t,a){const r=a.children.find((e=>e.name===g.BASE))?.children.find((e=>e.name===g.TERRAIN)),s=new E.Raycaster,l=new E.Vector3(e,0,t),i=[new E.Vector3(0,90*E.MathUtils.DEG2RAD,0),new E.Vector3(0,-90*E.MathUtils.DEG2RAD,0)];let n;r.updateMatrixWorld();for(const e of i){s.set(l,e);const t=s.intersectObject(r);if(t?.length&&t[0].point){n=t[0];break}}return n?.point}var p=a(920),h=a(9644),x=a(9174);function U(e){const t=(0,x.z)(e);return t.wrapS=E.MirroredRepeatWrapping,t.wrapT=E.MirroredRepeatWrapping,t.repeat.set(20,20),t.anisotropy=12,t}var O=a(2656),b=a(4848);const _=e=>{let{building:t,onClick:a,isSelected:r,clickable:l}=e;const{x:i,z:n,url:o,name:m,textureUrls:c,angle:g,scale:d}=t,{scene:T}=(0,u.z)(),[x,_]=(0,s.useState)(null),P=(0,p.p)(o,!0),Y=(0,s.useRef)(null),v=Object.values(P.nodes).filter((e=>e instanceof E.Mesh)),y=new E.Group;y.add(...v),y.name=m;const[S,I]=(0,s.useState)(!1);return(0,s.useEffect)((()=>{const e=R(i,n,T)||new E.Vector3(0,0,0);!function(e,t,a){const r=(new E.Box3).setFromObject(a),s=new E.Vector3,l=new E.Vector3;r.getCenter(s),r.getSize(l);const i=l.x/2,n=l.z/2,o=[new E.Vector3(e.x-i,e.y,e.z-n),new E.Vector3(e.x+i,e.y,e.z+n),new E.Vector3(e.x-i,e.y,e.z+n),new E.Vector3(e.x+i,e.y,e.z-n)].map((e=>(R(e.x,e.z,t)||new E.Vector3(0,0,0)).y));new E.Vector3(e.x,Math.min(...o),e.z)}(e,T,Y.current),_(e)}),[T]),(0,b.jsx)(b.Fragment,{children:(0,b.jsxs)("group",{name:m,ref:Y,position:new E.Vector3(i,x?.y||0,n),"rotation-y":E.MathUtils.DEG2RAD*(g??0),scale:d??1,onClick:e=>{l&&(a&&a(e,t),I(!1))},onPointerLeave:!r&&(()=>{I(!1),document.body.classList.remove("pointer")}),onPointerEnter:!r&&(()=>{I(!0),document.body.classList.add("pointer")}),children:[y?.children?.map(((e,t)=>{const a=U(c[t]),s=S&&!r?new E.MeshStandardMaterial({color:16440084}):new E.MeshPhongMaterial({map:a,side:E.DoubleSide});return(0,b.jsx)("mesh",{castShadow:!0,receiveShadow:!0,geometry:e.geometry,material:s},e.id)})),S&&!r&&(0,b.jsx)(h.E,{calculatePosition:(e,t,a)=>{const r=(new E.Vector3).setFromMatrixPosition(e.matrixWorld);r.project(t);const s=a.width/2,l=a.height/2;return[r.x*s+s,-r.y*l+l-50]},children:(0,b.jsx)(O.A,{open:!0,title:(0,b.jsx)("h3",{children:t.title||t.name}),content:l&&"Нажмите для просмотра"})})]})})},P=(0,s.memo)(_),Y=(0,a(1511).v)((e=>({selectedBuilding:null,cameraParameters:T,setSelectedBuilding:t=>e((()=>({selectedBuilding:t}))),setCameraParameters:t=>e((()=>({cameraParameters:t})))}))),v=()=>{const e=Y((e=>e)),t=(t,a)=>{d.get(a.name)===g.TOWER&&(e.setCameraParameters([t.point.x-300,50,t.point.z-100,t.point.x,t.point.y,t.point.z]),e.setSelectedBuilding(a))};return(0,b.jsxs)(b.Fragment,{children:[m.map((e=>(0,b.jsx)(P,{building:e},e.name))),c.map((a=>(0,b.jsx)(P,{building:a,clickable:!0,onClick:t,isSelected:e.selectedBuilding?.name===a.name},a.name)))]})},y=(0,s.memo)(v),S=()=>(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)("directionalLight",{castShadow:!0,"shadow-darkness":!0,"shadow-mapSize-height":2048,"shadow-mapSize-width":2048,"shadow-camera-near":.5,"shadow-camera-far":5e3,"shadow-camera-left":-5e3,"shadow-camera-right":5e3,"shadow-camera-bottom":-5e3,"shadow-camera-top":2e3,position:[1e3,500,600]}),(0,b.jsx)("directionalLight",{castShadow:!0,color:1118481,position:[-1,-1,-1]}),(0,b.jsx)("directionalLight",{castShadow:!0,color:16777215,position:[0,1,1]}),(0,b.jsx)("directionalLight",{castShadow:!0,color:2236962,position:[1,0,1]}),(0,b.jsx)("directionalLight",{castShadow:!0,color:2236962,position:[-1,0,1]}),(0,b.jsx)("ambientLight",{intensity:.4,color:12105900})]}),I=(0,s.memo)(S),j=()=>{const e=(0,p.p)("./models/base.glb",!0);return e.scene.name="base",e.scene.children.forEach((e=>{if(e.isMesh){let t=(0,x.z)(o.BRICK_RED);switch(d.get(e.name)){case g.TERRAIN:t=U(o.GRASS),e.material=new E.MeshPhongMaterial({map:t,shininess:0,side:E.DoubleSide});break;case g.WALL:case g.TOWER:const a=U(o.BRICK_RED_BUMP);e.material=new E.MeshPhongMaterial({map:t,bumpMap:a,shininess:1,bumpScale:12,side:E.DoubleSide});break;case g.STAIRS:case g.ROAD:t=U(o.ASPHALT),e.material=new E.MeshStandardMaterial({map:t,side:E.DoubleSide})}e.receiveShadow=!0,e.castShadow=!0,t.needsUpdate=!0}})),(0,b.jsx)("primitive",{object:e.scene})},k=(0,s.memo)(j),f=()=>(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)(k,{}),(0,b.jsx)(y,{}),(0,b.jsx)(I,{})]}),G=(0,s.memo)(f);var w=a(8262),D=a(1653);const z=()=>{const{setSelectedBuilding:e,selectedBuilding:t,setCameraParameters:a}=Y(),r=()=>{e(null),a(T)};return(0,b.jsx)(w.A,{title:t?.title||t?.name,open:!!t,onClose:r,onOk:r,onCancel:r,width:500,footer:(0,b.jsx)(D.Ay,{onClick:r,children:"Закрыть"}),children:(0,b.jsxs)("div",{className:"modal__body",children:[t?.image&&(0,b.jsx)("div",{className:"modal__image",children:(0,b.jsx)("img",{src:t.image,alt:t.name})}),t?.text&&(0,b.jsx)("div",{className:"modal__text",children:t.text})]})})},A=(0,s.memo)(z),L=()=>{const e=(0,s.useRef)(),{cameraParameters:t}=Y();return(0,s.useEffect)((()=>{e?.current&&e.current.setLookAt(...t,!0).then()}),[t]),(0,b.jsxs)(b.Fragment,{children:[(0,b.jsxs)(l.Hl,{shadows:"soft",camera:{fov:60,aspect:window.innerWidth/window.innerHeight,near:1,far:1e5,position:new E.Vector3(...T.slice(0,2))},children:[(0,b.jsx)(s.Suspense,{fallback:null,children:(0,b.jsx)(G,{})}),(0,b.jsx)(i.a,{ref:e,maxPolarAngle:95*E.MathUtils.DEG2RAD})]}),(0,b.jsx)(n.a,{}),(0,b.jsx)(A,{})]})};(0,r.H)(document.getElementById("root")).render((0,b.jsx)(L,{}))}},s={};function l(e){var t=s[e];if(void 0!==t)return t.exports;var a=s[e]={exports:{}};return r[e](a,a.exports,l),a.exports}l.m=r,e=[],l.O=(t,a,r,s)=>{if(!a){var i=1/0;for(c=0;c<e.length;c++){a=e[c][0],r=e[c][1],s=e[c][2];for(var n=!0,o=0;o<a.length;o++)(!1&s||i>=s)&&Object.keys(l.O).every((e=>l.O[e](a[o])))?a.splice(o--,1):(n=!1,s<i&&(i=s));if(n){e.splice(c--,1);var m=r();void 0!==m&&(t=m)}}return t}s=s||0;for(var c=e.length;c>0&&e[c-1][2]>s;c--)e[c]=e[c-1];e[c]=[a,r,s]},l.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return l.d(t,{a:t}),t},a=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,l.t=function(e,r){if(1&r&&(e=this(e)),8&r)return e;if("object"==typeof e&&e){if(4&r&&e.__esModule)return e;if(16&r&&"function"==typeof e.then)return e}var s=Object.create(null);l.r(s);var i={};t=t||[null,a({}),a([]),a(a)];for(var n=2&r&&e;"object"==typeof n&&!~t.indexOf(n);n=a(n))Object.getOwnPropertyNames(n).forEach((t=>i[t]=()=>e[t]));return i.default=()=>e,l.d(s,i),s},l.d=(e,t)=>{for(var a in t)l.o(t,a)&&!l.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})},l.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),l.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),l.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{var e={792:0};l.O.j=t=>0===e[t];var t=(t,a)=>{var r,s,i=a[0],n=a[1],o=a[2],m=0;if(i.some((t=>0!==e[t]))){for(r in n)l.o(n,r)&&(l.m[r]=n[r]);if(o)var c=o(l)}for(t&&t(a);m<i.length;m++)s=i[m],l.o(e,s)&&e[s]&&e[s][0](),e[s]=0;return l.O(c)},a=self.webpackChunkinteractive_nn_kremlin=self.webpackChunkinteractive_nn_kremlin||[];a.forEach(t.bind(null,0)),a.push=t.bind(null,a.push.bind(a))})();var i=l.O(void 0,[874,641,632,8,931,582,587,543,233,169,499],(()=>l(1274)));i=l.O(i)})();