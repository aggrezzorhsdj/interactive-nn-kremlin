window.onload = function() {

	var scene  = new THREE.Scene();
	// scene.rotation.z = 3;
	// scene.position.y = -500;
	scene.rotation.x = 4.75;
	scene.rotation.z = Math.PI;
	// var camera = new THREE.PerspectiveCamera(65,window.innerWidth/window.innerHeight, 0.1, 10000);
	//  camera = new THREE.PerspectiveCamera( 50, window.innerWidth / window.innerHeight, 1, 1000000 );
	// 			camera.position.z = 1300;
	// 			camera.position.y = -2800;

	var camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 1, 100000);
	camera.position.set(2500, 5, 3);




	// scene.fog=new THREE.Fog( 0xffffff, 0.015, 20000 );


	var render = new THREE.WebGLRenderer({ antialias:true });
	render.setSize(window.innerWidth, window.innerHeight);
	render.setClearColor( 0xFFFFFF );
	render.shadowMap.enabled = true;
	render.shadowMap.soft = true;

//улучшает тени, но сильно падает производительность
	// render.shadowMap.type = THREE.PCFSoftShadowMap;
	// render.shadowMap.type = THREE.PCFShadowMap;
	document.body.appendChild(render.domElement);

	var controls = new THREE.OrbitControls(camera, render.domElement);
	controls.minPolarAngle = Math.PI / 2.7; //раскомментировать для ограничения
	controls.maxPolarAngle = Math.PI / 2.15 ;

	var targetList = [];
	var projector, mouse = { x: 0, y: 0 };

	camera.position.z = 190;


	var arrayObj = [];
	var arrayBoundBox = [];
	var raycaster = new THREE.Raycaster();
	var cameraTarget = new THREE.Vector3( 0, 0, 2000 );
	var mouse = new THREE.Vector2(), INTERSECTED;


	var textMesh1, textGeo;
	var material1 = new THREE.Mesh( [
		new THREE.MeshPhongMaterial( { color: 0xffffff, shading: THREE.FlatShading } ), // front
		new THREE.MeshPhongMaterial( { color: 0xff0000, shading: THREE.SmoothShading } ) // side
	] );
	var chooseText = ["Зачатская","Борисоглебская","Георгиевская","Пороховая","Дмитриевская", "Кладовая","Никольская","Коромыслова","Тайницкая","Северная","Часовая","Ивановская","Белая"];

	var targetRotation = 0;
	var targetRotationOnMouseDown = 0;

	var mouseX = 0;
	var mouseXOnMouseDown = 0;

	var windowHalfX = window.innerWidth / 2;
	var windowHalfY = window.innerHeight / 2;

	var text = "three.js",

		height = 0,
		size = 600,
		hover = 30,

		curveSegments = 4,

		font = "arial", // helvetiker, optimer, gentilis, droid sans, droid serif
		weight = "normal", // normal bold
		style = "normal"; // normal italic


	// var light = new THREE.DirectionalLight(0xfff7e8, 1 );
	// scene.add(light);

	// var amColor = "#faffe3";
	// var amLight = new THREE.AmbientLight(amColor);
	// scene.add(amLight);
//lights

	light = new THREE.DirectionalLight( 0xffffff );
	light.position.set( 1000, -500, 600 );
	light.castShadow = true;
	scene.add( light );

	light.shadowDarkness = 1;
	light.shadow.mapSize.width = 2048;
	light.shadow.mapSize.hight = 2048;
	light.shadow.camera.near = 0.5;
	light.shadow.camera.far = 5000;
	light.shadow.camera.left = -5000;
	light.shadow.camera.bottom = -5000;
	light.shadow.camera.right = 5000;
	light.shadow.camera.top = 2000;

// Направление камеры с тенями
	// var helper = new THREE.CameraHelper( light.shadow.camera );
	// scene.add(helper);

	light = new THREE.DirectionalLight( 0xffffff );
	light.position.set( -1, -1, -1 );
	// light.castShadow = true;
	scene.add( light );

	light = new THREE.DirectionalLight( 0x111111 );
	light.position.set( 0, -1, 1 );
	// light.castShadow = true;
	scene.add( light );

	light = new THREE.DirectionalLight( 0xffffff );
	light.position.set( 0, 1, 1 );
	// light.castShadow = true;
	scene.add( light );

	light = new THREE.DirectionalLight( 0x222222 );
	light.position.set( 1, 0, 1 );
	// light.castShadow = true;
	scene.add( light );

	light = new THREE.DirectionalLight( 0x222222);
	light.position.set( -1, 0, 1 );
	// light.castShadow = true;
	scene.add( light );

	light = new THREE.AmbientLight( 0x222222 );
	// light.castShadow = true;
	scene.add( light );

	var manager = new THREE.LoadingManager();
	var loader  = new THREE.ImageLoader(manager);


	init();


	function init()
	{

		var textureWalli = new THREE.Texture();
		loader.load( 'model/kirpich1.jpg', function ( image ) {
			textureWalli.image = image;
			textureWalli.needsUpdate = true;
			textureWalli.wrapS = THREE.RepeatWrapping;
			textureWalli.wrapT = THREE.RepeatWrapping;
			textureWalli.repeat.set( 2, 5);
			textureWalli.anisotropy = 12;
			textureWalli.castShadow = true;
		});


///Стена
		var meshesss = [];
///
		var objLoader = new THREE.OBJLoader();
		objLoader.load( 'model/wall.obj', function ( object ) {
			console.log(object, "wall");
			object.traverse( function ( child ) {
				if ( child instanceof THREE.Mesh )
				{
					meshesss.push(child);
				}
			});
			var walli = meshesss[0];
			scene.add(walli);
			walli.scale.x = 0.09;
			walli.scale.y = 0.09;
			walli.scale.z = 0.09;
			walli.position.z = 1;
			walli.castShadow = true;

			var bumpMapWalli = new THREE.TextureLoader().load( 'model/kirpich.jpg');

			walli.material  = new THREE.MeshPhongMaterial({
				map: textureWalli,
				bumpMap: bumpMapWalli,
				// способность материала отражать свет
				shininess: 1,
				bumpScale: 12,
			});
		});



/// Добавление поверхности

		var texturePlane = new THREE.Texture();

		loader.load( 'image/planee.jpg', function ( image ) {
			texturePlane.image = image;
			texturePlane.needsUpdate = true;
			texturePlane.wrapS = THREE.MirroredRepeatWrapping;
			texturePlane.wrapT = THREE.MirroredRepeatWrapping;
			texturePlane.repeat.set( 20, 20);
			texturePlane.anisotropy = 12;
			// textureHead.offset.set(0.73, 0.5);
		});

		var meshesp = [];

		var objLoader = new THREE.OBJLoader();
		objLoader.load( 'model/planeo6.obj', function ( object ) {
			console.log(object, "plane");

			object.traverse( function ( child ) {
				if ( child instanceof THREE.Mesh )
				{
					meshesp.push(child);
				}
			});

			var head = meshesp[0];
			head.castShadow = false;
			head.rotation.x = -1.575;
			head.scale.x = 0.01;
			head.scale.y = 0.01;
			head.scale.z = 0.01;

			head.receiveShadow = true;
			scene.add(head);
			var bumpMapHead = new THREE.TextureLoader().load( 'model/plane.jpg');

			head.material = new THREE.MeshPhongMaterial({
				map:texturePlane,
				shininess: 0,
			});
		});

////Текстуры
		var textureDerevo = new THREE.Texture();

		loader.load( 'image/dver.jpg', function ( image ) {
			textureDerevo.image = image;
			textureDerevo.needsUpdate = true;
			textureDerevo.wrapS = THREE.MirroredRepeatWrapping;
			textureDerevo.wrapT = THREE.MirroredRepeatWrapping;
			textureDerevo.repeat.set( 1, 1);
			textureDerevo.anisotropy = 12;
		});
		var textureSteklo = new THREE.Texture();

		loader.load( 'image/okno1.jpg', function ( image ) {
			textureSteklo.image = image;
			textureSteklo.needsUpdate = true;
			textureSteklo.wrapS = THREE.MirroredRepeatWrapping;
			textureSteklo.wrapT = THREE.MirroredRepeatWrapping;
			textureSteklo.repeat.set( 1, 1);
			textureSteklo.anisotropy = 12;
		});
		var textureRubiroid = new THREE.Texture();

		loader.load( 'image/rubiroid.jpg', function ( image ) {
			textureRubiroid.image = image;
			textureRubiroid.needsUpdate = true;
			textureRubiroid.wrapS = THREE.MirroredRepeatWrapping;
			textureRubiroid.wrapT = THREE.MirroredRepeatWrapping;
			textureRubiroid.repeat.set( 10, 10);
			textureRubiroid.anisotropy = 12;
		});
		var texturePart4 = new THREE.Texture();

		loader.load( 'image/rubiroid.jpg', function ( image ) {
			texturePart4.image = image;
			texturePart4.needsUpdate = true;
			texturePart4.wrapS = THREE.MirroredRepeatWrapping;
			texturePart4.wrapT = THREE.MirroredRepeatWrapping;
			texturePart4.repeat.set( 20, 20);
			texturePart4.anisotropy = 12;
		});
		var textureSerShpak = new THREE.Texture();
		var bumpMapSerShpak = new THREE.TextureLoader().load( 'image/sershpak.jpg');
		loader.load( 'image/sershpak.jpg', function ( image ) {
			textureSerShpak.image = image;
			textureSerShpak.needsUpdate = true;
			textureSerShpak.wrapS = THREE.MirroredRepeatWrapping;
			textureSerShpak.wrapT = THREE.MirroredRepeatWrapping;
			textureSerShpak.repeat.set( 10, 10);
			textureSerShpak.anisotropy = 12;
		});
		var textureShpak = new THREE.Texture();

		loader.load( 'image/shpaklevka.jpg', function ( image ) {
			textureShpak.image = image;
			textureShpak.needsUpdate = true;
			textureShpak.wrapS = THREE.MirroredRepeatWrapping;
			textureShpak.wrapT = THREE.MirroredRepeatWrapping;
			textureShpak.repeat.set( 10, 10);
			textureShpak.anisotropy = 12;
		});

		var textureSzproff = new THREE.Texture();

		loader.load( 'image/zelproff.jpg', function ( image ) {
			textureSzproff.image = image;
			textureSzproff.needsUpdate = true;
			textureSzproff.wrapS = THREE.MirroredRepeatWrapping;
			textureSzproff.wrapT = THREE.MirroredRepeatWrapping;
			textureSzproff.repeat.set( 5, 5);
			textureSzproff.anisotropy = 12;
		});
		var textureTmetal = new THREE.Texture();

		loader.load( 'image/temnmetall.jpg', function ( image ) {
			textureTmetal.image = image;
			textureTmetal.needsUpdate = true;
			textureTmetal.wrapS = THREE.MirroredRepeatWrapping;
			textureTmetal.wrapT = THREE.MirroredRepeatWrapping;
			textureTmetal.repeat.set( 1, 1);
			textureTmetal.anisotropy = 12;
		});

		var textureTSershpak = new THREE.Texture();

		loader.load( 'image/TSerShpak.jpg', function ( image ) {
			textureTSershpak.image = image;
			textureTSershpak.needsUpdate = true;
			textureTSershpak.wrapS = THREE.MirroredRepeatWrapping;
			textureTSershpak.wrapT = THREE.MirroredRepeatWrapping;
			textureTSershpak.repeat.set( 10, 10);
			textureTSershpak.anisotropy = 12;
		});

		var textureBezhShpak = new THREE.Texture();

		loader.load( 'image/bezhshpak.jpg', function ( image ) {
			textureBezhShpak.image = image;
			textureBezhShpak.needsUpdate = true;
			textureBezhShpak.wrapS = THREE.MirroredRepeatWrapping;
			textureBezhShpak.wrapT = THREE.MirroredRepeatWrapping;
			textureBezhShpak.repeat.set( 10, 10);
			textureBezhShpak.anisotropy = 12;
		});

		var textureZoloto = new THREE.Texture();

		loader.load( 'image/zoloto.jpg', function ( image ) {
			textureZoloto.image = image;
			textureZoloto.needsUpdate = true;
			textureZoloto.wrapS = THREE.MirroredRepeatWrapping;
			textureZoloto.wrapT = THREE.MirroredRepeatWrapping;
			textureZoloto.repeat.set( 1, 1);
			textureZoloto.anisotropy = 12;
		});

		var textureZelderevo = new THREE.Texture();

		loader.load( 'image/zelderevo.jpg', function ( image ) {
			textureZelderevo.image = image;
			textureZelderevo.needsUpdate = true;
			textureZelderevo.wrapS = THREE.MirroredRepeatWrapping;
			textureZelderevo.wrapT = THREE.MirroredRepeatWrapping;
			textureZelderevo.repeat.set( 1, 1);
			textureZelderevo.anisotropy = 12;
		});

		var textureZelkraska = new THREE.Texture();
		loader.load( 'image/zelkraska.jpg', function ( image ) {
			textureZelkraska.image = image;
			textureZelkraska.needsUpdate = true;
			textureZelkraska.wrapS = THREE.MirroredRepeatWrapping;
			textureZelkraska.wrapT = THREE.MirroredRepeatWrapping;
			textureZelkraska.repeat.set( 10, 10);
			textureZelkraska.anisotropy = 12;
		});

		var textureDoroga = new THREE.Texture();
		loader.load( 'image/asfalt1.jpg', function ( image ) {
			textureDoroga.image = image;
			textureDoroga.needsUpdate = true;
			textureDoroga.wrapS = THREE.MirroredRepeatWrapping;
			textureDoroga.wrapT = THREE.MirroredRepeatWrapping;
			textureDoroga.repeat.set( 1, 1);
			textureDoroga.anisotropy = 12;
		});

////здание советов

		var meshess = [];

		var objLoader = new THREE.OBJLoader();
		objLoader.load( 'model/ssovet.obj', function ( object ) {
			console.log(object, "sovet");

			object.traverse( function ( child ) {
				if ( child instanceof THREE.Mesh )
				{
					meshess.push(child);
				}
			});

			var part1 = meshess[0];
			var part2 = meshess[1];
			var part3 = meshess[2];
			var part4 = meshess[3];
			var part5 = meshess[4];
			var part6 = meshess[5];

			part1.castShadow = part2.castShadow = part3.castShadow = part4.castShadow = part5.castShadow = part6.castShadow = true;

			part1.position.x = 0;
			part1.position.y = -140;
			part1.position.z = -4;

			part2.position.x = part3.position.x = part4.position.x = part5.position.x = part6.position.x = part1.position.x;
			part2.position.y = part3.position.y = part4.position.y = part5.position.y = part6.position.y = part1.position.y;
			part2.position.z = part3.position.z = part4.position.z = part5.position.z = part6.position.z = part1.position.z;

			scene.add(part1);
			scene.add(part2);
			scene.add(part3);
			scene.add(part4);
			scene.add(part5);
			scene.add(part6);

			part1.material = new THREE.MeshPhongMaterial({
				map:textureDerevo,
			});
			part2.material = new THREE.MeshPhongMaterial({
				map:textureSteklo,
			});
			part3.material = new THREE.MeshPhongMaterial({
				map:textureRubiroid,
			});
			part4.material = new THREE.MeshPhongMaterial({
				map:textureRubiroid,
			});
			part5.material = new THREE.MeshPhongMaterial({
				map:textureSerShpak,
				bumpMap: bumpMapSerShpak,
				shininess: 0,
				bumpScale: 12,
			});
			part6.material = new THREE.MeshPhongMaterial({
				map:textureShpak,
			});

		});

/// Добавление гаража
		var meshesg = [];
///
		var objLoader = new THREE.OBJLoader();
		objLoader.load( 'model/garazh.obj', function ( object ) {
			console.log(object, "garazh");

			object.traverse( function ( child ) {
				if ( child instanceof THREE.Mesh )
				{
					meshesg.push(child);
				}
			});
			var gpart1 = meshesg[0];
			var gpart2 = meshesg[1];
			var gpart3 = meshesg[2];
			var gpart4 = meshesg[3];
			var gpart5 = meshesg[4];

			gpart1.position.x = -10;
			gpart1.position.y = -175;
			gpart1.position.z = -10;

			gpart2.position.x = gpart1.position.x;
			gpart2.position.y = gpart1.position.y;
			gpart2.position.z = gpart1.position.z;

			gpart3.position.x = gpart1.position.x;
			gpart3.position.y = gpart1.position.y;
			gpart3.position.z = gpart1.position.z;

			gpart4.position.x = gpart1.position.x;
			gpart4.position.y = gpart1.position.y;
			gpart4.position.z = gpart1.position.z;

			gpart5.position.x = gpart1.position.x;
			gpart5.position.y = gpart1.position.y;
			gpart5.position.z = gpart1.position.z;

			gpart1.castshadow = gpart2.castshadow = gpart3.castshadow = gpart4.castshadow = gpart5.castshadow = true;

			scene.add(gpart1);
			scene.add(gpart2);
			scene.add(gpart3);
			scene.add(gpart4);
			scene.add(gpart5);

			gpart1.material = new THREE.MeshPhongMaterial({
				map:textureTmetal,
			});
			gpart2.material = new THREE.MeshPhongMaterial({
				map:textureShpak,
			});
			gpart3.material = new THREE.MeshPhongMaterial({
				map:textureSerShpak,
				bumpMap: bumpMapSerShpak,
				shininess: 0,
				bumpScale: 12,
			});
			gpart4.material = new THREE.MeshPhongMaterial({
				map:textureRubiroid,
			});
			gpart5.material = new THREE.MeshPhongMaterial({
				map:textureSteklo,
			});
		});

///Добавление арсенала

		var textureApart1 = new THREE.Texture();

		loader.load( 'image/proff1.jpg', function ( image ) {
			textureApart1.image = image;
			textureApart1.needsUpdate = true;
			textureApart1.wrapS = THREE.MirroredRepeatWrapping;
			textureApart1.wrapT = THREE.MirroredRepeatWrapping;
			textureApart1.repeat.set( 10, 10);
			textureApart1.anisotropy = 12;
		});
		var meshesa = [];
		var objLoader = new THREE.OBJLoader();
		objLoader.load( 'model/arsenal.obj', function ( object ) {
			console.log(object, "arsenal");

			object.traverse( function ( child ) {
				if ( child instanceof THREE.Mesh )
				{
					meshesa.push(child);
				}
			});
			var apart1 = meshesa[0];
			var apart2 = meshesa[1];
			var apart3 = meshesa[2];

			apart1.position.x = -50;
			apart1.position.y = -150;
			// apart1.position.z = -8.5;

			apart2.position.x = -50;
			apart2.position.y = -150;
			// apart2.position.z = -8.5;

			apart3.position.x = -50;
			apart3.position.y = -150;
			// apart3.position.z = -8.5;

			apart1.castShadow = apart2.castShadow = apart3.castShadow = true;

			scene.add(apart1);
			scene.add(apart2);
			scene.add(apart3);

			apart1.material = new THREE.MeshPhongMaterial({
				map: textureApart1,
			});
			apart2.material = new THREE.MeshPhongMaterial({
				map: textureWalli,
			});
			apart3.material = new THREE.MeshPhongMaterial({
				map: textureShpak,
			});

		});


///Добавление зелёного дома

		var meshesz = [];

		var objLoader = new THREE.OBJLoader();
		objLoader.load( 'model/zelhouse.obj', function ( object ) {
			console.log(object, "zelhouse");

			object.traverse( function ( child ) {
				if ( child instanceof THREE.Mesh )
				{
					meshesz.push(child);
				}
			});
			var zpart1 = meshesz[0];
			var zpart2 = meshesz[1];

			zpart1.castShadow = zpart2.castshadow = true;

			scene.add(zpart1);
			scene.add(zpart2);

			zpart1.material = new THREE.MeshPhongMaterial({
				map: textureSzproff,
			});
			zpart2.material = new THREE.MeshPhongMaterial({
				map: textureWalli,
			});
		});



///Добавление хозкорпуса

		var meshesh = [];
		var objLoader = new THREE.OBJLoader();
		objLoader.load( 'model/hozkorpus.obj', function ( object ) {
			console.log(object, "hozkorpus");

			object.traverse( function ( child ) {
				if ( child instanceof THREE.Mesh )
				{
					meshesh.push(child);
				}
			});
			var hpart1 = meshesh[0];
			var hpart2 = meshesh[1];

			hpart1.castShadow = hpart2.castShadow = true;

			scene.add(hpart1);
			scene.add(hpart2);

			hpart1.material = new THREE.MeshPhongMaterial({
				map: textureRubiroid,
			});
			hpart2.material = new THREE.MeshPhongMaterial({
				map: textureWalli,
			});
		});

///Добавление присутственные места

		var meshessp = [];
		var objLoader = new THREE.OBJLoader();
		objLoader.load( 'model/prisyt.obj', function ( object ) {
			console.log(object, "prisyt");

			object.traverse( function ( child ) {
				if ( child instanceof THREE.Mesh )
				{
					meshessp.push(child);
				}
			});
			var ppart1 = meshessp[0];
			var ppart2 = meshessp[1];
			var ppart3 = meshessp[2];
			var ppart4 = meshessp[3];
			var ppart5 = meshessp[4];

			ppart1.castShadow = ppart2.castShadow = ppart3.castShadow = ppart4.castShadow = ppart5.castShadow = true;

			scene.add(ppart1);
			scene.add(ppart2);
			scene.add(ppart3);
			scene.add(ppart4);
			scene.add(ppart5);

			ppart1.material = new THREE.MeshPhongMaterial({
				map: textureZoloto,
			});
			ppart2.material = new THREE.MeshPhongMaterial({
				map: textureShpak,
			});
			ppart3.material = new THREE.MeshPhongMaterial({
				map: textureSzproff,
			});
			ppart4.material = new THREE.MeshPhongMaterial({
				map: textureDerevo,
			});
			ppart5.material = new THREE.MeshPhongMaterial({
				map: textureSerShpak,
			});
		});

///Добавление Казарм
		var meshessk = [];
		var objLoader = new THREE.OBJLoader();
		objLoader.load( 'model/kazar.obj', function ( object ) {
			console.log(object, "kazarmi");

			object.traverse( function ( child ) {
				if ( child instanceof THREE.Mesh )
				{
					meshessk.push(child);
				}
			});
			var kpart1 = meshessk[0];
			var kpart2 = meshessk[1];

			kpart1.castShadow = kpart2.castShadow = true;

			scene.add(kpart1);
			scene.add(kpart2);

			kpart1.material = new THREE.MeshPhongMaterial({
				map: textureApart1,
			});
			kpart2.material = new THREE.MeshPhongMaterial({
				map: textureWalli,
			});

		});

///Добавление Каптёрки
		var meshesska = [];
		var objLoader = new THREE.OBJLoader();
		objLoader.load( 'model/kapterka.obj', function ( object ) {
			console.log(object, "kapterka");

			object.traverse( function ( child ) {
				if ( child instanceof THREE.Mesh )
				{
					meshesska.push(child);
				}
			});
			var kapart1 = meshesska[0];
			var kapart2 = meshesska[1];
			var kapart3 = meshesska[2];
			var kapart4 = meshesska[3];

			kapart1.position.x = -10;
			kapart1.position.y = -170;
			kapart1.position.z = -10;

			kapart2.position.x = kapart1.position.x;
			kapart2.position.y = kapart1.position.y;
			kapart2.position.z = kapart1.position.z;

			kapart3.position.x = kapart1.position.x;
			kapart3.position.y = kapart1.position.y;
			kapart3.position.z = kapart1.position.z;

			kapart4.position.x = kapart1.position.x;
			kapart4.position.y = kapart1.position.y;
			kapart4.position.z = kapart1.position.z;

			kapart1.castShadow = kapart2.castShadow = kapart3.castShadow = kapart4.castShadow = true;

			scene.add(kapart1);
			scene.add(kapart2);
			scene.add(kapart3);
			scene.add(kapart4);

			kapart1.material = new THREE.MeshPhongMaterial({
				map: textureSteklo,
			});
			kapart2.material = new THREE.MeshPhongMaterial({
				map: textureTSershpak,
			});
			kapart3.material = new THREE.MeshPhongMaterial({
				map: textureRubiroid,
			});
			kapart4.material = new THREE.MeshPhongMaterial({
				map:textureSerShpak,
			});

		});
///Добавление Служб
		var meshesslyzh = [];
		var objLoader = new THREE.OBJLoader();
		objLoader.load( 'model/slyzhbi.obj', function ( object ) {
			console.log(object, "slyzhbi");

			object.traverse( function ( child ) {
				if ( child instanceof THREE.Mesh )
				{
					meshesslyzh.push(child);
				}
			});
			var slpart1 = meshesslyzh[0];
			var slpart2 = meshesslyzh[1];
			var slpart3 = meshesslyzh[2];
			var slpart4 = meshesslyzh[3];
			var slpart5 = meshesslyzh[4];
			var slpart6 = meshesslyzh[5];

			slpart1.position.x = -40;
			slpart1.position.y = -180;
			slpart1.position.z = -10;

			slpart2.position.x = slpart1.position.x;
			slpart2.position.y = slpart1.position.y;
			slpart2.position.z = slpart1.position.z;

			slpart3.position.x = slpart1.position.x;
			slpart3.position.y = slpart1.position.y;
			slpart3.position.z = slpart1.position.z;

			slpart4.position.x = slpart1.position.x;
			slpart4.position.y = slpart1.position.y;
			slpart4.position.z = slpart1.position.z;

			slpart5.position.x = slpart1.position.x;
			slpart5.position.y = slpart1.position.y;
			slpart5.position.z = slpart1.position.z;

			slpart6.position.x = slpart1.position.x;
			slpart6.position.y = slpart1.position.y;
			slpart6.position.z = slpart1.position.z;

			slpart1.castShadow = slpart2.castShadow = slpart3.castShadow = slpart4.castShadow = slpart5.castShadow = slpart6.castShadow = true;

			scene.add(slpart1);
			scene.add(slpart2);
			scene.add(slpart3);
			scene.add(slpart4);
			scene.add(slpart5);
			scene.add(slpart6);

			slpart1.material = new THREE.MeshPhongMaterial({
				map: textureSerShpak,
			});
			slpart2.material = new THREE.MeshPhongMaterial({
				map: textureSzproff,
			});
			slpart3.material = new THREE.MeshPhongMaterial({
				map: textureDerevo,
			});
			slpart4.material = new THREE.MeshPhongMaterial({
				map: textureSteklo,
			});
			slpart5.material = new THREE.MeshPhongMaterial({
				map: textureDerevo,
			});
			slpart6.material = new THREE.MeshPhongMaterial({
				map: textureBezhShpak,
			});
		});

///Добавление здания вице губернатор
		var meshesscg = [];
		var objLoader = new THREE.OBJLoader();
		objLoader.load( 'model/vicegub.obj', function ( object ) {
			console.log(object, "vicegub");

			object.traverse( function ( child ) {
				if ( child instanceof THREE.Mesh )
				{
					meshesscg.push(child);
				}
			});
			var cgpart1 = meshesscg[0];
			var cgpart2 = meshesscg[1];
			var cgpart3 = meshesscg[2];

			cgpart1.castShadow = cgpart2.castShadow = cgpart3.castShadow = true;

			scene.add(cgpart1);
			scene.add(cgpart2);
			scene.add(cgpart3);

			cgpart1.material = new THREE.MeshPhongMaterial({
				map: textureShpak,
			});
			cgpart2.material = new THREE.MeshPhongMaterial({
				map: textureSzproff,
			});
			cgpart3.material = new THREE.MeshPhongMaterial({
				map: textureSerShpak,
			});
		});

/// Добавление госпиталя
		var meshessgp = [];
		var objLoader = new THREE.OBJLoader();
		objLoader.load( 'model/gospit.obj', function ( object ) {
			console.log(object, "gospital'");

			object.traverse( function ( child ) {
				if ( child instanceof THREE.Mesh )
				{
					meshessgp.push(child);
				}
			});
			var gppart1 = meshessgp[0];
			var gppart2 = meshessgp[1];
			var gppart3 = meshessgp[2];
			var gppart4 = meshessgp[3];
			var gppart5 = meshessgp[4];
			var gppart6 = meshessgp[5];
			var gppart7 = meshessgp[6];

			gppart1.castShadow = gppart2.castShadow = gppart3.castShadow = gppart4.castShadow = gppart5.castShadow = gppart6.castShadow = gppart7.castShadow = true;

			scene.add(gppart1);
			scene.add(gppart2);
			scene.add(gppart3);
			scene.add(gppart4);
			scene.add(gppart5);
			scene.add(gppart6);
			scene.add(gppart7);

			gppart1.material = new THREE.MeshPhongMaterial({
				map: textureBezhShpak,
			});
			gppart2.material = new THREE.MeshPhongMaterial({
				map: textureShpak,
			});
			gppart3.material = new THREE.MeshPhongMaterial({
				map: textureDerevo,
			});
			gppart4.material = new THREE.MeshPhongMaterial({
				map: textureDerevo,
			});
			gppart5.material = new THREE.MeshPhongMaterial({
				map: textureTmetal,
			});
			gppart6.material = new THREE.MeshPhongMaterial({
				map: textureRubiroid,
			});
			gppart7.material = new THREE.MeshPhongMaterial({
				map: textureSteklo,
			});
		});

///Добавление котельной

		var meshesskt = [];
		var objLoader = new THREE.OBJLoader();
		objLoader.load( 'model/kotel.obj', function ( object ) {
			console.log(object, "kotel'nay");

			object.traverse( function ( child ) {
				if ( child instanceof THREE.Mesh )
				{
					meshesskt.push(child);
				}
			});
			var ktpart1 = meshesskt[0];
			var ktpart2 = meshesskt[1];
			var ktpart3 = meshesskt[2];
			var ktpart4 = meshesskt[3];
			var ktpart5 = meshesskt[4];
			var ktpart6 = meshesskt[5];

			ktpart1.position.x = 10;
			ktpart1.position.y = -160;
			ktpart1.position.z = -4;

			ktpart2.position.x = ktpart3.position.x = ktpart4.position.x = ktpart5.position.x = ktpart6.position.x = ktpart1.position.x;
			ktpart2.position.y = ktpart3.position.y = ktpart4.position.y = ktpart5.position.y = ktpart6.position.y = ktpart1.position.y;
			ktpart2.position.z = ktpart3.position.z = ktpart4.position.z = ktpart5.position.z = ktpart6.position.z = ktpart1.position.z;

			ktpart1.castShadow = ktpart2.castShadow = ktpart3.castShadow = ktpart4.castShadow = ktpart5.castShadow = ktpart6.castShadow = true;

			scene.add(ktpart1);
			scene.add(ktpart2);
			scene.add(ktpart3);
			scene.add(ktpart4);
			scene.add(ktpart5);
			scene.add(ktpart6);

			ktpart1.material = new THREE.MeshPhongMaterial({
				map: textureRubiroid,
			});
			ktpart2.material = new THREE.MeshPhongMaterial({
				map: textureDerevo,
			});
			ktpart3.material = new THREE.MeshPhongMaterial({
				map: textureDerevo,
			});
			ktpart4.material = new THREE.MeshPhongMaterial({
				map: textureSteklo,
			});
			ktpart5.material = new THREE.MeshPhongMaterial({
				map: textureSerShpak,
			});
			ktpart6.material = new THREE.MeshPhongMaterial({
				map: textureShpak,
			});
		});

/// Добавление Музея
		var meshessmz = [];
		var objLoader = new THREE.OBJLoader();
		objLoader.load( 'model/muzei.obj', function ( object ) {
			console.log(object, "muzei");

			object.traverse( function ( child ) {
				if ( child instanceof THREE.Mesh )
				{
					meshessmz.push(child);
				}
			});
			var mzpart1 = meshessmz[0];
			var mzpart2 = meshessmz[1];
			var mzpart3 = meshessmz[2];
			var mzpart4 = meshessmz[3];
			var mzpart5 = meshessmz[4];
			var mzpart6 = meshessmz[5];

			mzpart1.castShadow = mzpart2.castShadow = mzpart3.castShadow = mzpart4.castShadow = mzpart5.castShadow = mzpart6.castShadow = true;

			mzpart1.position.x = 10;
			mzpart1.position.y = -160;
			mzpart1.position.z = 0;

			mzpart2.position.x = mzpart3.position.x = mzpart4.position.x = mzpart5.position.x = mzpart6.position.x = mzpart1.position.x;
			mzpart2.position.y = mzpart3.position.y = mzpart4.position.y = mzpart5.position.y = mzpart6.position.y = mzpart1.position.y;
			mzpart2.position.z = mzpart3.position.z = mzpart4.position.z = mzpart5.position.z = mzpart6.position.z = mzpart1.position.z;

			scene.add(mzpart1);
			scene.add(mzpart2);
			scene.add(mzpart3);
			scene.add(mzpart4);
			scene.add(mzpart5);
			scene.add(mzpart6);

			mzpart1.material = new THREE.MeshPhongMaterial({
				map: textureDerevo,
			});
			mzpart2.material = new THREE.MeshPhongMaterial({
				map: textureSteklo,
			});
			mzpart3.material = new THREE.MeshPhongMaterial({
				map: textureApart1,
			});
			mzpart4.material = new THREE.MeshPhongMaterial({
				map: textureDerevo,
			});
			mzpart5.material = new THREE.MeshPhongMaterial({
				map: textureTmetal,
			});
			mzpart6.material = new THREE.MeshPhongMaterial({
				map: textureShpak,
			});
		});

/// Добавление Обком
		var meshessob = [];
		var objLoader = new THREE.OBJLoader();
		objLoader.load( 'model/obkom.obj', function ( object ) {
			console.log(object, "obkom");

			object.traverse( function ( child ) {
				if ( child instanceof THREE.Mesh )
				{
					meshessob.push(child);
				}
			});
			var obpart1 = meshessob[0];
			var obpart2 = meshessob[1];
			var obpart3 = meshessob[2];
			var obpart4 = meshessob[3];
			var obpart5 = meshessob[4];
			var obpart6 = meshessob[5];

			obpart1.castShadow = obpart2.castShadow = obpart3.castShadow = obpart4.castShadow = obpart5.castShadow = obpart6.castShadow = true;
			obpart1.receiveShadow = obpart2.receiveShadow = obpart3.receiveShadow = obpart4.receiveShadow = obpart5.receiveShadow = obpart6.receiveShadow = true;

			obpart1.position.x = -10;
			obpart1.position.y = 30;
			obpart1.position.z = 10;

			obpart2.position.x = obpart3.position.x = obpart4.position.x = obpart5.position.x = obpart6.position.x = obpart1.position.x;
			obpart2.position.y = obpart3.position.y = obpart4.position.y = obpart5.position.y = obpart6.position.y = obpart1.position.y;
			obpart2.position.z = obpart3.position.z = obpart4.position.z =obpart5.position.z = obpart6.position.z = obpart1.position.z;

			scene.add(obpart1);
			scene.add(obpart2);
			scene.add(obpart3);
			scene.add(obpart4);
			scene.add(obpart5);
			scene.add(obpart6);

			obpart1.material = new THREE.MeshPhongMaterial({
				map: textureSteklo,
			});
			obpart2.material = new THREE.MeshPhongMaterial({
				map: textureDerevo,
			});
			obpart3.material = new THREE.MeshPhongMaterial({
				map:textureSteklo,
			});
			obpart4.material = new THREE.MeshPhongMaterial({
				map: textureShpak,
			});
			obpart5.material = new THREE.MeshPhongMaterial({
				map: textureRubiroid,
			});
			obpart6.material = new THREE.MeshPhongMaterial({
				map: textureTmetal,
			});
		});

/// Добавление Памятника Минину
		var meshesspm = [];
		var objLoader = new THREE.OBJLoader();
		objLoader.load( 'model/minin.obj', function ( object ) {
			console.log(object, "pamyatnik mininu");

			object.traverse( function ( child ) {
				if ( child instanceof THREE.Mesh )
				{
					meshesspm.push(child);
				}
			});
			var pmpart1 = meshesspm[0];
			var pmpart2 = meshesspm[1];
			var pmpart3 = meshesspm[2];

			pmpart1.castShadow = pmpart2.castShadow = pmpart3.castShadow = true;

			// pmpart1.position.x = 10;
			// pmpart1.position.y = -160;
			// pmpart1.position.z = 0;

			// mzpart2.position.x = mzpart3.position.x = mzpart4.position.x;
			// mzpart2.position.y = mzpart3.position.y = mzpart4.position.y;
			// mzpart2.position.z = mzpart3.position.z = mzpart4.position.z;

			scene.add(pmpart1);
			scene.add(pmpart2);
			scene.add(pmpart3);

			pmpart1.material = new THREE.MeshPhongMaterial({
				map:textureSteklo,
			});
			pmpart2.material = new THREE.MeshPhongMaterial({
				map: textureTSershpak,
			});
			pmpart3.material = new THREE.MeshPhongMaterial({
				map: textureSerShpak,
			});
		});

/// Добавление Полиции
		var meshesspl = [];
		var objLoader = new THREE.OBJLoader();
		objLoader.load( 'model/police.obj', function ( object ) {
			console.log(object, "policiya");

			object.traverse( function ( child ) {
				if ( child instanceof THREE.Mesh )
				{
					meshesspl.push(child);
				}
			});
			var plpart1 = meshesspl[0];
			var plpart2 = meshesspl[1];
			var plpart3 = meshesspl[2];
			var plpart4 = meshesspl[3];

			plpart1.castShadow = plpart2.castShadow = plpart3.castShadow = plpart4.castShadow = true;

			// pmpart1.position.x = 10;
			// pmpart1.position.y = -160;
			// pmpart1.position.z = 0;

			// mzpart2.position.x = mzpart3.position.x = mzpart4.position.x;
			// mzpart2.position.y = mzpart3.position.y = mzpart4.position.y;
			// mzpart2.position.z = mzpart3.position.z = mzpart4.position.z;

			scene.add(plpart1);
			scene.add(plpart2);
			scene.add(plpart3);
			scene.add(plpart4);

			plpart1.material = new THREE.MeshPhongMaterial({
				map: textureSteklo,
			});
			plpart2.material = new THREE.MeshPhongMaterial({
				map: textureDerevo,
			});
			plpart3.material = new THREE.MeshPhongMaterial({
				map: textureApart1,
			});
			plpart4.material = new THREE.MeshPhongMaterial({
				map: textureWalli,
			});
		});

/// Добавление Склада
		var meshesskl = [];
		var objLoader = new THREE.OBJLoader();
		objLoader.load( 'model/sklad.obj', function ( object ) {
			console.log(object, "sklad");

			object.traverse( function ( child ) {
				if ( child instanceof THREE.Mesh )
				{
					meshesskl.push(child);
				}
			});
			var sklpart1 = meshesskl[0];
			var sklpart2 = meshesskl[1];
			var sklpart3 = meshesskl[2];
			var sklpart4 = meshesskl[3];
			var sklpart5 = meshesskl[4];

			sklpart1.castShadow = sklpart2.castShadow = sklpart3.castShadow = sklpart4.castShadow = sklpart5.castShadow = true;

			// pmpart1.position.x = 10;
			// pmpart1.position.y = -160;
			// pmpart1.position.z = 0;

			// mzpart2.position.x = mzpart3.position.x = mzpart4.position.x;
			// mzpart2.position.y = mzpart3.position.y = mzpart4.position.y;
			// mzpart2.position.z = mzpart3.position.z = mzpart4.position.z;

			scene.add(sklpart1);
			scene.add(sklpart2);
			scene.add(sklpart3);
			scene.add(sklpart4);
			scene.add(sklpart5);

			sklpart1.material = new THREE.MeshPhongMaterial({
				map: textureSteklo,
			});
			sklpart2.material = new THREE.MeshPhongMaterial({
				map: textureTmetal,
			});
			sklpart3.material = new THREE.MeshPhongMaterial({
				map: textureRubiroid,
			});
			sklpart4.material = new THREE.MeshPhongMaterial({
				map: textureSerShpak,
			});
			sklpart5.material = new THREE.MeshPhongMaterial({
				map: textureShpak,
			});
		});

/// Добавление Стелла
		var meshesstl = [];
		var objLoader = new THREE.OBJLoader();
		objLoader.load( 'model/stella.obj', function ( object ) {
			console.log(object, "stella");

			object.traverse( function ( child ) {
				if ( child instanceof THREE.Mesh )
				{
					meshesstl.push(child);
				}
			});
			var stlpart1 = meshesstl[0];
			var stlpart2 = meshesstl[1];
			var stlpart3 = meshesstl[2];

			stlpart1.castShadow = stlpart2.castShadow = stlpart3.castShadow = true;


			stlpart1.position.x = 0;
			stlpart1.position.y = 0;
			stlpart1.position.z = 4;

			stlpart2.position.x = stlpart3.position.x = stlpart1.position.x;
			stlpart2.position.y = stlpart3.position.y = stlpart1.position.y;
			stlpart2.position.z = stlpart3.position.z = stlpart1.position.z;

			scene.add(stlpart1);
			scene.add(stlpart2);
			scene.add(stlpart3);

			stlpart1.material = new THREE.MeshPhongMaterial({
				map: textureSerShpak,
			});
			stlpart2.material = new THREE.MeshPhongMaterial({
				map: textureTSershpak,
			});
			stlpart3.material = new THREE.MeshPhongMaterial({
				map:textureSerShpak,
			});
		});

/// Добавление Церкви
		var meshessch = [];
		var objLoader = new THREE.OBJLoader();
		objLoader.load( 'model/church.obj', function ( object ) {
			console.log(object, "church");

			object.traverse( function ( child ) {
				if ( child instanceof THREE.Mesh )
				{
					meshessch.push(child);
				}
			});
			var chpart1 = meshessch[0];
			var chpart2 = meshessch[1];
			var chpart3 = meshessch[2];
			var chpart4 = meshessch[3];
			var chpart5 = meshessch[4];
			var chpart6 = meshessch[5];
			var chpart7 = meshessch[6];
			var chpart8 = meshessch[7];


			chpart1.position.z = 10;

			chpart2.position.z = chpart3.position.z = chpart4.position.z = chpart5.position.z = chpart6.position.z = chpart7.position.z =  chpart8.position.z = chpart1.position.z;

			scene.add(chpart1);
			scene.add(chpart2);
			scene.add(chpart3);
			scene.add(chpart4);
			scene.add(chpart5);
			scene.add(chpart6);
			scene.add(chpart7);
			scene.add(chpart8);

			chpart1.castShadow = chpart2.castShadow = chpart3.castShadow = chpart4.castShadow = chpart5.castShadow = chpart6.castShadow = chpart7.castShadow = chpart8.castShadow = true;

			chpart1.material = new THREE.MeshPhongMaterial({
				map: textureTmetal,
			});
			chpart2.material = new THREE.MeshPhongMaterial({
				map: textureSteklo,
			});
			chpart3.material = new THREE.MeshPhongMaterial({
				map: textureZelderevo,
			});
			chpart4.material = new THREE.MeshPhongMaterial({
				map: textureZelkraska,
				shininess: 0,
			});
			chpart5.material = new THREE.MeshPhongMaterial({
				map: textureDerevo,
			});
			chpart6.material = new THREE.MeshPhongMaterial({
				map: textureZoloto,
			});
			chpart7.material = new THREE.MeshPhongMaterial({
				map: textureSteklo,
			});
			chpart8.material = new THREE.MeshPhongMaterial({
				map: textureShpak,
			});
		});

/// Добавление дорог
		var meshessdor = [];
		var objLoader = new THREE.OBJLoader();
		objLoader.load( 'model/doroga1_3.obj', function ( object ) {
			console.log(object, "doroga1");

			object.traverse( function ( child ) {
				if ( child instanceof THREE.Mesh )
				{
					meshessdor.push(child);
				}
			});
			var dorpart1 = meshessdor[0];

			dorpart1.rotation.x = -3.150;
			// dorpart1.position.x = 100;
			dorpart1.position.y = -100;
			dorpart1.position.z = 100;
			dorpart1.scale.x = 0.9;
			dorpart1.scale.y = 0.9;
			dorpart1.scale.z = 0.9;
			dorpart1.receiveShadow = true;


			scene.add(dorpart1);

			dorpart1.material = new THREE.MeshPhongMaterial({
				map: textureDoroga,
			});
		});




//башни
//1
		var meshesb = [];
		var objLoader = new THREE.OBJLoader();
		objLoader.load( 'model/Object_1.obj', function ( object ) {
			console.log(object, "1");
			object.traverse( function ( child ) {
				if ( child instanceof THREE.Mesh )
				{
					meshesb.push(child);
				}
			});
			var b1 = meshesb[0];
			scene.add(b1);
			b1.scale.x = 0.09;
			b1.scale.y = 0.09;
			b1.scale.z = 0.09;
			b1.castshadow = true;
			var bumpMapWalli = new THREE.TextureLoader().load( 'model/kirpich.jpg');

			b1.material  = new THREE.MeshPhongMaterial({
				map: textureWalli,
				bumpMap: bumpMapWalli,
				// способность материала отражать свет
				shininess: 1,
				bumpScale: 12,
			});
		});

//2
		var meshes2 = [];
		var objLoader = new THREE.OBJLoader();
		objLoader.load( 'model/Object_2.obj', function ( object ) {
			console.log(object, "2");
			object.traverse( function ( child ) {
				if ( child instanceof THREE.Mesh )
				{
					meshes2.push(child);
				}
			});
			var b2 = meshes2[0];
			scene.add(b2);
			b2.scale.x = 0.09;
			b2.scale.y = 0.09;
			b2.scale.z = 0.09;
			b2.castShadow = true;
			var bumpMapWalli = new THREE.TextureLoader().load( 'model/kirpich.jpg');

			b2.material  = new THREE.MeshPhongMaterial({
				map: textureWalli,
				bumpMap: bumpMapWalli,
				// способность материала отражать свет
				shininess: 1,
				bumpScale: 12,
			});
		});
//3
		var meshes3 = [];
		var objLoader = new THREE.OBJLoader();
		objLoader.load( 'model/Object_3.obj', function ( object ) {
			console.log(object, "3");
			object.traverse( function ( child ) {
				if ( child instanceof THREE.Mesh )
				{
					meshes3.push(child);
				}
			});
			var b3 = meshes3[0];
			scene.add(b3);
			b3.scale.x = 0.09;
			b3.scale.y = 0.09;
			b3.scale.z = 0.09;
			b3.castShadow = true;
			var bumpMapWalli = new THREE.TextureLoader().load( 'model/kirpich.jpg');

			b3.material  = new THREE.MeshPhongMaterial({
				map: textureWalli,
				bumpMap: bumpMapWalli,
				// способность материала отражать свет
				shininess: 1,
				bumpScale: 12,
			});
		});

//4
		var meshes4 = [];
		var objLoader = new THREE.OBJLoader();
		objLoader.load( 'model/Object_4.obj', function ( object ) {
			console.log(object, "4");
			object.traverse( function ( child ) {
				if ( child instanceof THREE.Mesh )
				{
					meshes4.push(child);
				}
			});
			var b4 = meshes4[0];
			scene.add(b4);
			b4.scale.x = 0.09;
			b4.scale.y = 0.09;
			b4.scale.z = 0.09;
			b4.castShadow = true;
			var bumpMapWalli = new THREE.TextureLoader().load( 'model/kirpich.jpg');

			b4.material  = new THREE.MeshPhongMaterial({
				map: textureWalli,
				bumpMap: bumpMapWalli,
				// способность материала отражать свет
				shininess: 1,
				bumpScale: 12,
			});
		});
//5
		var meshes5 = [];
		var objLoader = new THREE.OBJLoader();
		objLoader.load( 'model/Object_5.obj', function ( object ) {
			console.log(object, "5");
			object.traverse( function ( child ) {
				if ( child instanceof THREE.Mesh )
				{
					meshes5.push(child);
				}
			});
			var b5 = meshes5[0];
			scene.add(b5);
			b5.scale.x = 0.09;
			b5.scale.y = 0.09;
			b5.scale.z = 0.09;
			b5.castShadow = true;
			var bumpMapWalli = new THREE.TextureLoader().load( 'model/kirpich.jpg');

			b5.material  = new THREE.MeshPhongMaterial({
				map: textureWalli,
				bumpMap: bumpMapWalli,
				// способность материала отражать свет
				shininess: 1,
				bumpScale: 12,
			});
		});
//6
		var meshes6 = [];
		var objLoader = new THREE.OBJLoader();
		objLoader.load( 'model/Object_6.obj', function ( object ) {
			console.log(object, "6");
			object.traverse( function ( child ) {
				if ( child instanceof THREE.Mesh )
				{
					meshes6.push(child);
				}
			});
			var b6 = meshes6[0];
			scene.add(b6);
			b6.scale.x = 0.09;
			b6.scale.y = 0.09;
			b6.scale.z = 0.09;
			b6.castShadow = true;
			var bumpMapWalli = new THREE.TextureLoader().load( 'model/kirpich.jpg');

			b6.material  = new THREE.MeshPhongMaterial({
				map: textureWalli,
				bumpMap: bumpMapWalli,
				// способность материала отражать свет
				shininess: 1,
				bumpScale: 12,
			});
		});

//7
		var meshes7 = [];
		var objLoader = new THREE.OBJLoader();
		objLoader.load( 'model/Object_7.obj', function ( object ) {
			console.log(object, "7");
			object.traverse( function ( child ) {
				if ( child instanceof THREE.Mesh )
				{
					meshes7.push(child);
				}
			});
			var b7 = meshes7[0];
			scene.add(b7);
			b7.scale.x = 0.09;
			b7.scale.y = 0.09;
			b7.scale.z = 0.09;
			b7.castShadow = true;
			var bumpMapWalli = new THREE.TextureLoader().load( 'model/kirpich.jpg');

			b7.material  = new THREE.MeshPhongMaterial({
				map: textureWalli,
				bumpMap: bumpMapWalli,
				// способность материала отражать свет
				shininess: 1,
				bumpScale: 12,
			});
		});
//8
		var meshes8 = [];
		var objLoader = new THREE.OBJLoader();
		objLoader.load( 'model/Object_8.obj', function ( object ) {
			console.log(object, "8");
			object.traverse( function ( child ) {
				if ( child instanceof THREE.Mesh )
				{
					meshes8.push(child);
				}
			});
			var b8 = meshes8[0];
			scene.add(b8);
			b8.scale.x = 0.09;
			b8.scale.y = 0.09;
			b8.scale.z = 0.09;
			b8.castShadow = true;
			var bumpMapWalli = new THREE.TextureLoader().load( 'model/kirpich.jpg');

			b8.material  = new THREE.MeshPhongMaterial({
				map: textureWalli,
				bumpMap: bumpMapWalli,
				// способность материала отражать свет
				shininess: 1,
				bumpScale: 12,
			});
		});
//9
		var meshes9 = [];
		var objLoader = new THREE.OBJLoader();
		objLoader.load( 'model/Object_9.obj', function ( object ) {
			console.log(object, "9");
			object.traverse( function ( child ) {
				if ( child instanceof THREE.Mesh )
				{
					meshes9.push(child);
				}
			});
			var b9 = meshes9[0];
			scene.add(b9);
			b9.scale.x = 0.09;
			b9.scale.y = 0.09;
			b9.scale.z = 0.09;
			b9.castShadow = true;
			var bumpMapWalli = new THREE.TextureLoader().load( 'model/kirpich.jpg');

			b9.material  = new THREE.MeshPhongMaterial({
				map: textureWalli,
				bumpMap: bumpMapWalli,
				// способность материала отражать свет
				shininess: 1,
				bumpScale: 12,
			});
		});
//10
		var meshes10 = [];
		var objLoader = new THREE.OBJLoader();
		objLoader.load( 'model/Object_10.obj', function ( object ) {
			console.log(object, "10");
			object.traverse( function ( child ) {
				if ( child instanceof THREE.Mesh )
				{
					meshes10.push(child);
				}
			});
			var b10 = meshes10[0];
			scene.add(b10);
			b10.scale.x = 0.09;
			b10.scale.y = 0.09;
			b10.scale.z = 0.09;
			b10.castShadow = true;
			var bumpMapWalli = new THREE.TextureLoader().load( 'model/kirpich.jpg');

			b10.material  = new THREE.MeshPhongMaterial({
				map: textureWalli,
				bumpMap: bumpMapWalli,
				// способность материала отражать свет
				shininess: 1,
				bumpScale: 12,
			});
		});
//11
		var meshes11 = [];
		var objLoader = new THREE.OBJLoader();
		objLoader.load( 'model/Object_11.obj', function ( object ) {
			console.log(object, "11");
			object.traverse( function ( child ) {
				if ( child instanceof THREE.Mesh )
				{
					meshes11.push(child);
				}
			});
			var b11 = meshes11[0];
			scene.add(b11);
			b11.scale.x = 0.09;
			b11.scale.y = 0.09;
			b11.scale.z = 0.09;
			b11.castShadow = true;
			var bumpMapWalli = new THREE.TextureLoader().load( 'model/kirpich.jpg');

			b11.material  = new THREE.MeshPhongMaterial({
				map: textureWalli,
				bumpMap: bumpMapWalli,
				// способность материала отражать свет
				shininess: 1,
				bumpScale: 12,
			});
		});
//12
		var meshes12 = [];
		var objLoader = new THREE.OBJLoader();
		objLoader.load( 'model/Object_12.obj', function ( object ) {
			console.log(object, "12");
			object.traverse( function ( child ) {
				if ( child instanceof THREE.Mesh )
				{
					meshes12.push(child);
				}
			});
			var b12 = meshes12[0];
			scene.add(b12);
			b12.position.z = 20;
			b12.scale.x = 0.09;
			b12.scale.y = 0.09;
			b12.scale.z = 0.09;
			b12.castShadow = true;
			var bumpMapWalli = new THREE.TextureLoader().load( 'model/kirpich.jpg');

			b12.material  = new THREE.MeshPhongMaterial({
				map: textureWalli,
				bumpMap: bumpMapWalli,
				// способность материала отражать свет
				shininess: 1,
				bumpScale: 12,
			});
		});
//13
		var meshes13 = [];
		var arrayObj = [], arrayBoundBox = [];

		var objLoader = new THREE.OBJLoader();
		objLoader.load( 'model/Object_13.obj', function ( object ) {
			console.log(object, "13");
			object.traverse( function ( child ) {
				if ( child instanceof THREE.Mesh )
				{
					meshes13.push(child);
				}
			});
			var b13 = meshes13[0];
			scene.add(b13);
			b13.scale.x = 0.09;
			b13.scale.y = 0.09;
			b13.scale.z = 0.09;
			b13.castShadow = true;
			targetList.push(object);

			arrayObj.push(object.children[0]);
			var hex  = 0xff0000;
			var bbox = new THREE.BoundingBoxHelper( b13, hex );
			bbox.update();
			scene.add( bbox );
			bbox.visible = false;
			arrayBoundBox.push(bbox);

			var bumpMapWalli = new THREE.TextureLoader().load( 'model/kirpich.jpg');


			b13.material  = new THREE.MeshPhongMaterial({
				map: textureWalli,
				bumpMap: bumpMapWalli,
				// способность материала отражать свет
				shininess: 1,
				bumpScale: 12,
			});
		});

		// var plane = new THREE.Mesh(new THREE.PlaneGeometry(500,400,200,200), new THREE.MeshPhongMaterial({color: 0x42aaf}));
		//      plane.position.z = 200;
		//      // plane.rotation.x = -Math.PI/2;
		//      plane.receiveShadow = true;
		//      plane.castShadow = true;
		//      scene.add(plane);

		// var geometry12 = new THREE.PlaneGeometry(500,400,200,200);
		//     var material12 = new THREE.MeshLambertMaterial({color: 0x008cf0});
		//     var plane12 = new THREE.Mesh(geometry12, material12);
		//     plane12.position.z = 210;
		//     plane12.rotation.x = -Math.PI/2;
		//     plane12.receiveShadow = true;
		//     scene.add(plane12);

// var cube = new THREE.Mesh(new THREE.CubeGeometry(50,50,50,10,10,10), new THREE.MeshLambertMaterial({color:0x42aaf}));
//       cube.position.z = 220;
//       cube.position.y= -100;
//       cube.castShadow = true;
//       // cube.receiveShadow = true;
//       scene.add(cube);


		var onProgress = function ( xhr ) {
			if ( xhr.lengthComputable ) {
				var percentComplete = xhr.loaded / xhr.total * 100;
				console.log( Math.round(percentComplete, 2) + '% downloaded' );
			}
		};
		var onError = function ( xhr ) {
		};


		// objLoader.setMaterials( materials );

		// objLoader.load( 'male02.obj', function ( object ) {
		// 	object.position.y = - 95;
		// 	scene.add( object );
		// }, onProgress, onError );
		// THREE.Loader.Handlers.add( /\.dds$/i, new THREE.DDSLoader() );

		// var mtlLoader = new THREE.MTLLoader();

/// Добавление стен второй способ
		// var i;
		// 		for (i = 1; i<14; i++){
		// 			// mtlLoader.load( 'model/Object_'+ i +'.mtl', function( materials ) {
		// 			// materials.preload();

		// 			var objLoader = new THREE.OBJLoader();

		// 	objLoader.load( 'model/Object_'+ i +'.obj', function ( object11 ) {
		// 			object11.position.y = 0;
		// 			object11.position.x = 0;
		// 			object11.position.z = 0;
		// 			console.log(object11, "122121");
		// 			// objLoader.setMaterials( materials );
		// 			object11.scale.x = object11.scale.y = object11.scale.z = 0.09
		// 			scene.add(object11);
		// 			arrayObj.push( object11.children[0]);
		// 			var hex  = 0xff0000;
		//                   var bbox = new THREE.BoundingBoxHelper( object11, hex );
		//                    // scene.add( arrayObj );
		//                   scene.add( bbox );
		//                   object.castShadow = true;
		//                    // bbox.update();
		// 			bbox.visible = false;
		// 			arrayBoundBox.push(bbox);
		// 		}, onProgress, onError );
		// 	// });
		// };



	}
	document.addEventListener( 'mousedown', onDocumentMouseDown, false );
	window.addEventListener( 'resize', onWindowResize, false );

	// var controls = new THREE.TrackballControls( camera );

	function createText() {

		textGeo = new THREE.TextGeometry( text, {

			size: size,
			height: height,
			curveSegments: curveSegments,
			font: font,
			weight: weight,
			style: style,
			bevelEnabled: true,
			bevelThickness: 30,

			material1: 0,
			extrudeMaterial: 1

		});

		textGeo.computeBoundingBox();
		textGeo.computeVertexNormals();

		var centerOffset = -0.5 * ( textGeo.boundingBox.max.x - textGeo.boundingBox.min.x );

		textMesh1 = new THREE.Mesh( textGeo, material1 );

		textMesh1.position.x = centerOffset;
		textMesh1.position.y = hover;
		textMesh1.position.z = 0;

		textMesh1.rotation.x = 0;
		textMesh1.rotation.y = 0;


	}

	function onDocumentMouseMove( event ) {
		event.preventDefault();

		mouseX = event.clientX - windowHalfX;
		targetRotation = targetRotationOnMouseDown + ( mouseX - mouseXOnMouseDown ) * 0.02;

	}

	function onDocumentMouseDown( event ) {

		event.preventDefault();

		document.addEventListener( 'mousemove', onDocumentMouseMove, false );
		document.addEventListener( 'mouseup', onDocumentMouseUp, false );
		document.addEventListener( 'mouseout', onDocumentMouseOut, false );

		mouse.x = ( event.clientX / window.innerWidth ) * 2 - 1;
		mouse.y = - ( event.clientY / window.innerHeight ) * 2 + 1;

		mouseXOnMouseDown = event.clientX - windowHalfX;
		targetRotationOnMouseDown = targetRotation;

	}

	function onDocumentMouseUp( event ) {

		document.removeEventListener( 'mousemove', onDocumentMouseMove, false );
		document.removeEventListener( 'mouseup', onDocumentMouseUp, false );
		document.removeEventListener( 'mouseout', onDocumentMouseOut, false );

	}

	function onDocumentMouseOut( event ) {

		document.removeEventListener( 'mousemove', onDocumentMouseMove, false );
		document.removeEventListener( 'mouseup', onDocumentMouseUp, false );
		document.removeEventListener( 'mouseout', onDocumentMouseOut, false );

	}


	function onWindowResize() {
		camera.aspect = window.innerWidth / window.innerHeight;
		camera.updateProjectionMatrix();

		render.setSize( window.innerWidth, window.innerHeight );
		//render();
	}



	var rendering = function(){

		// var vector = new THREE.Vector3( mouse.x, mouse.y, 1 ).unproject( camera );
		// 	raycaster.set( camera.position, vector.sub( camera.position ).normalize() );
		// 	var intersects = raycaster.intersectObjects( arrayObj, true );


		// 		if ( intersects.length > 0 ) {

		// 			if ( INTERSECTED != intersects[ 0 ].object ) {

		// 				if ( INTERSECTED )


		// 				INTERSECTED.material.emissive.setHex( INTERSECTED.currentHex );
		// 				INTERSECTED = intersects[ 0 ].object;
		// 				INTERSECTED.currentHex = INTERSECTED.material.emissive.getHex();
		// 				INTERSECTED.material.emissive.setHex( 0xff0000 );

		// 				var trigger = true;
		// 				var i = -1;

// //удаление текста при нажатии на следующую башню
// 						scene.remove(textMesh1);

// 						while (trigger){
// 						i++;
// 						if (arrayObj[i] == intersects[ 0 ].object) trigger = false;
// 						}

// 						text = chooseText[i];
// 				        createText();

//  //поворот интерактивного текста лицом в камере
// 				        textMesh1.rotation.x = 0;
// 						textMesh1.rotation.y = 0;
// 						textMesh1.rotation.z = -scene.rotation.z;


// 						textMesh1.position.x = arrayBoundBox[i].position.x + 500;
// 						textMesh1.position.y = arrayBoundBox[i].position.y;
// 						textMesh1.position.z = arrayBoundBox[i].position.z + 1400;
// // 						scene.add(textMesh1);
// 				}

// 				} else {

//                    	if ( INTERSECTED ) INTERSECTED.material.emissive.setHex( INTERSECTED.currentHex );

// 					INTERSECTED = null;
// 					scene.remove(textMesh1);

// 				}

// 				// scene.rotation.z += ( targetRotation - scene.rotation.z ) * 0.05;
// 				camera.lookAt( cameraTarget );
// 				render.clear();


		requestAnimationFrame(rendering);
		controls.update();
		render.render(scene,camera);
	};

	rendering();

};
