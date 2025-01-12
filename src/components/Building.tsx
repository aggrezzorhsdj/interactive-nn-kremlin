import React, {FC, memo, useEffect, useRef, useState} from "react";
import {useThree} from "@react-three/fiber";
import {
	DoubleSide,
	Group,
	MathUtils,
	Mesh,
	MeshPhongMaterial,
	Vector3
} from "three";
import {getClosestBoxPoint, getIntersectionPoint} from "../utils/position";
import {BaseGroups, baseGroupsMap, BuildingProps, GLTFLoaderResult} from "../models/models";
import {Html, useGLTF} from "@react-three/drei";
import {loadTexture} from "../utils/texture";
import {Popover} from "antd";

/*
 * Компонент для отображения здания
 * @param props: BuildingProps - параметры компоненты
*/
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

	// загрузка glb модели хуком useGLTF
	const loadedObject: GLTFLoaderResult = useGLTF(url, true);

	// доступ к отображаемой группе three.js
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

	useEffect(() => {
		// получение координаты относительно соприкосновения центральной точки модели с рельефом
		const point = getIntersectionPoint(x, z, scene) || new Vector3(0, 0, 0);

		// определение ближайщей вершины соприкосновения модели с рельефом
		const closest = getClosestBoxPoint(point, scene, groupRef.current);

		// установка координаты модели относительно ближайщей вершины к рельефу
		setPosition(closest);
	}, [scene]);

	// обработчик наведения на башню
	const buildingEnter = () => {
		if (baseGroupsMap.get(building.name) === BaseGroups.TOWER) {
			setHover(true);
		}
	}

	// обработчик снятия наведения на башню
	const buildingLeave = () => {
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
				{/* Всплывающее окно с выводом названия башни при наведении на нее */}
				{hover && <Html>
					<Popover title={building.title || building.name} open={true}></Popover>
				</Html>}
			</group>
		</>
	);
}

export default memo(Building);
