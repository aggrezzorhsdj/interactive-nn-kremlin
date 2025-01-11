import React, {FC, memo, useEffect, useRef, useState} from "react";
import {ThreeEvent, useThree} from "@react-three/fiber";
import {
	Box3,
	DoubleSide,
	Group,
	Material,
	MathUtils,
	Mesh,
	MeshPhongMaterial,
	MeshStandardMaterial,
	Vector3
} from "three";
import {getIntersectionPoint} from "../utils/position";
import {BaseGroups, baseGroupsMap, BuildingProps} from "../models/models";
import {Html, useGLTF} from "@react-three/drei";
import {loadTexture} from "../utils/texture";
import {Popover} from "antd";

const Building: FC<BuildingProps> = ({building, onClick}) => {
	// параметры модели
	const {
		x,
		z,
		url,
		name,
		textureUrls,
		angle,
		scale
	} = building;

	// подключение к общей сцене three.js
	const {scene} = useThree();

	// состояние для хранения и установки позиции модели
	const [position, setPosition] = useState<Vector3>(null!);

	// загрузка модели через Three.Loader в зависимости от loaderType - OBJLoader и GLTFLoader
	const loadedObject: any = useGLTF(url, true);

	// доступ к отображемой группе three.js
	const groupRef = useRef<Group>(null);

	let object: Group;

	// извлечение группы из загруженной модели
	const meshes: Mesh[] = Object
		.values<any>(loadedObject.nodes)
		.filter((item: any) => item instanceof Mesh);
	const group = new Group();
	group.add(...meshes);
	group.name = name;
	object = group;

	const [hover, setHover] = useState(false);

	/*const cordX = name + "_x";
	const cordZ = name + "_z";
	const cordRotate = name + "_rotate";*/

	/*const controls = useControls(`${name}_controls`, {
		[cordX]: {value: x, min: -2000, max: 2000},
		[cordZ]: {value: z, min: -2000, max: 2000},
		[cordRotate]: {value: angle || 0, min: -360, max: 360},
	}, {collapsed: true})*/

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

	const hoveredObject = {
		baseMaterial: null,
		obj: null
	};

	const resetMaterial = () => {
		if (hoveredObject?.obj) {
			hoveredObject.obj.material = hoveredObject.baseMaterial;
		}
	}

	const buildingEnter = (e: ThreeEvent<MouseEvent>) => {
		if (baseGroupsMap.get(building.name) === BaseGroups.TOWER) {
			setHover(true);
			if (hoveredObject.obj?.name !== building.name) {
				resetMaterial();

				const mesh = (e.object as Mesh);
				hoveredObject.obj = mesh;
				hoveredObject.baseMaterial = (mesh.material as Material).clone();
				mesh.material= new MeshStandardMaterial({color: 0x4f4f4f});
			}
		}
	}

	const buildingLeave = () => {
		resetMaterial();
		setHover(false);
	}

	// вывод модели
	return (
		<>
			<group
				name={name}
				ref={groupRef}
				position={new Vector3(x, position?.y || 0, z)}
				rotation-y={MathUtils.DEG2RAD * (angle ?? 0)} scale={scale ?? 1}
				onClick={(e) => onClick && onClick(e, building)}
				onPointerLeave={buildingLeave}
				onPointerEnter={buildingEnter}
			>
				{/* вывод моделей из группы с указанной текстурой из параметров */}
				{object?.children?.map((mesh: Mesh, index) => {
					const map = loadTexture(textureUrls[index]);

					return <mesh
						key={mesh.id}
						castShadow
						receiveShadow
						geometry={mesh.geometry}
						material={new MeshPhongMaterial({map, side: DoubleSide})}
					/>
				})}
				{hover && <Html>
					<Popover title={building.title || building.name} open={true}></Popover>
				</Html>}
			</group>
		</>
	);
}

export default memo(Building);
