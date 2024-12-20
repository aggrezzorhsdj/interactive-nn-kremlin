	import React, {FC, useEffect, useRef, useState} from "react";
	import {useLoader, useThree} from "@react-three/fiber";
	import {
		Box3,
		DoubleSide,
		Group,
		MathUtils,
		Mesh,
		MeshPhongMaterial, MirroredRepeatWrapping,
		TextureLoader,
		Vector3
	} from "three";
	import {getIntersectionPoint} from "../utils/position.utils";
	import {OBJLoader} from "three/examples/jsm/loaders/OBJLoader";
	import {GLTFLoader} from "three/examples/jsm/loaders/GLTFLoader";
	import {useTexture} from "@react-three/drei";
	import {TexturesMaps} from "../constants/textures";
	import {BaseGroups} from "../models/models";
	import {useControls} from "leva";

	export interface BuildingProps {
		name: string;
		x: number;
		z: number;
		loaderType?: any;
		url: string;
		textureUrls: string[];
		angle?: number;
		scale?: number;
		depthY?: number;
	}
	export const Building: FC<{building: BuildingProps}> = ({building}) => {
		// параметры модели
		const {
			x,
			z,
			url,
			name,
			loaderType = OBJLoader,
			textureUrls,
			angle,
			scale
		} = building;

		// подключение к общей сцене three.js
		const {scene} = useThree();

		// состояние для хранения и установки позиции модели
		const [position, setPosition] = useState<Vector3>(null!);

		// загрузка модели через Three.Loader в зависимости от loaderType - OBJLoader и GLTFLoader
		const loadedObject = useLoader(loaderType, url);

		// доступ к отображемой группе three.js
		const groupRef = useRef<Group>(null);

		let object: Group;

		// извлечение группы из загруженной модели
		switch (loaderType) {
			case OBJLoader:
				object = loadedObject;
				break;
			case GLTFLoader:
				const meshes: Mesh[] = Object
					.values<any>(loadedObject.nodes)
					.filter((item: any) => item instanceof Mesh);
				const group = new Group();
				group.add(...meshes);
				group.name = name;
				object = group;
				break;
		}

		const cordX = name + "_x";
		const cordZ = name + "_z";
		const cordRotate = name + "_rotate";

		const controls = useControls(`${name}_controls`, {
			[cordX]: {value: x, min: -2000, max: 2000},
			[cordZ]: {value: z, min: -2000, max: 2000},
			[cordRotate]: {value: angle || 0, min: -360, max: 360},
		}, {collapsed: true})

		// загрузчик текстур
		const loader = new TextureLoader();

		useEffect(() => {
			/*
			* метод определения точки соприкосновения модели с рельефом
			* @param x - координата x
			* @param z - координата z
			* @param scene - сцена three.js для доступа к рельфеу
			 */
			const point = getIntersectionPoint(x, z, scene) || new Vector3(0, 0, 0);

			// определение текущей центральной точки модели
			const box = new Box3().setFromObject(groupRef.current);
			const center = new Vector3();
			const size = new Vector3();
			box.getCenter(center);
			box.getSize(size);

			// определение ширины и длины модели
			const edgeHeight = size.x / 2;
			const edgeWidth = size.z / 2;

			// определение вершин нижней плоскости модели для определение ближайщей точки к рельефу
			const intersections = [
				new Vector3(x - edgeHeight, point.y, z - edgeWidth),
				new Vector3(x + edgeHeight, point.y, z + edgeWidth),
				new Vector3(x - edgeHeight, point.y, z + edgeWidth),
				new Vector3(x + edgeHeight, point.y, z - edgeWidth)
			]
				.map(item => {
					const pointY = getIntersectionPoint(item.x, item.z, scene) || new Vector3(0, 0, 0);
					return pointY.y;
				});
			// установка координаты модели относительно ближайщей вершины к рельефу
			setPosition(new Vector3(x, Math.min(...intersections), z));
		}, [scene]);

		// вывод модели
		return (
			<>
				<group
					name={name}
					ref={groupRef}
					position={new Vector3(controls[cordX], position?.y || 0, controls[cordZ])}
					rotation-y={MathUtils.DEG2RAD * (controls[cordRotate] ?? 0)} scale={scale ?? 1}
				>
					{/* вывод моделей из группы с указанной текстурой из параметров */}
					{object?.children?.map((mesh: Mesh, index) => {
						const map = loader.load(textureUrls[index] || TexturesMaps.PUTTY);

						return <mesh
							castShadow
							receiveShadow
							geometry={mesh.geometry}
							material={new MeshPhongMaterial({map, side: DoubleSide})}
						/>
					})}
				</group>

			</>
		);
	}
