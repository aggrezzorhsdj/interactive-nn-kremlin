import React, {FC, memo, useEffect, useRef, useState} from "react";
import {ThreeEvent, useThree} from "@react-three/fiber";
import {
	Camera,
	DoubleSide,
	Group,
	MathUtils,
	Mesh,
	MeshPhongMaterial,
	MeshStandardMaterial,
	Object3D,
	Vector3
} from "three";
import {getClosestBoxPoint, getIntersectionPoint} from "../utils/position";
import {BuildingProps, GLTFLoaderResult} from "../models/models";
import {Html, useGLTF} from "@react-three/drei";
import {loadTexture} from "../utils/texture";
import {Popover} from "antd";

/*
 * Компонент для отображения здания
 * @param props: BuildingProps - параметры компоненты
*/
const Building: FC<BuildingProps> = ({building, onClick, isSelected, clickable}) => {
	// параметры модели
	const {
		x,
		z,
		url,
		name,
		textureUrls,
		angle,
		scale,
	} = building;

	// подключение к общей сцене three.js
	const {scene} = useThree();

	// состояние для хранения и установки позиции модели
	const [position, setPosition] = useState<Vector3>(null!);

	// загрузка glb модели хуком useGLTF
	const loadedObject: GLTFLoaderResult = useGLTF(url, true);

	// доступ к отображаемой группе three.js
	const groupRef = useRef<Group>(null);

	// извлечение группы из загруженной модели
	const meshes: Mesh[] = Object
		.values<any>(loadedObject.nodes)
		.filter((item: any) => item instanceof Mesh);
	const group = new Group();
	group.add(...meshes);
	group.name = name;

	const [hover, setHover] = useState(false);

	useEffect(() => {
		// получение координаты относительно соприкосновения центральной точки модели с рельефом
		const point = getIntersectionPoint(x, z, scene) || new Vector3(0, 0, 0);

		// определение ближайщей вершины соприкосновения модели с рельефом
		const closest = getClosestBoxPoint(point, scene, groupRef.current);

		// установка координаты модели относительно ближайщей вершины к рельефу
		setPosition(point);
	}, [scene]);

	// обработчик наведения на башню
	const buildingEnter = () => {
		setHover(true);
		document.body.classList.add("pointer");
	}

	// обработчик снятия наведения на башню
	const buildingLeave = () => {
		setHover(false);
		document.body.classList.remove("pointer");
	}

	const buildingClick = (e: ThreeEvent<MouseEvent>) => {
		if (!clickable) {
			return;
		}

		if (onClick) {
			onClick(e, building);
		}

		setHover(false);
	}

	// функция расчета положения подсказки над зданием
	const calculatePosition = (el: Object3D, camera: Camera, size: {width: number, height: number}): number[] => {
		const objectPos = new Vector3().setFromMatrixPosition(el.matrixWorld)
		objectPos.project(camera)
		const widthHalf = size.width / 2
		const heightHalf = size.height / 2
		return [objectPos.x * widthHalf + widthHalf, (-(objectPos.y * heightHalf) + heightHalf) - 50]
	}

	// вывод модели
	return (
		<>
			<group
				name={name}
				ref={groupRef}
				position={new Vector3(x, position?.y || 0, z)}
				rotation-y={MathUtils.DEG2RAD * (angle ?? 0)} scale={scale ?? 1}
				onClick={buildingClick}
				onPointerLeave={!isSelected && buildingLeave}
				onPointerEnter={!isSelected && buildingEnter}
			>
				{/* вывод моделей из группы с указанной текстурой из параметров */}
				{group?.children?.map((mesh: Mesh, index) => {
					const map = loadTexture(textureUrls[index]);
					const material = hover && !isSelected ?
						new MeshStandardMaterial({color: 0xfadb14}) :
						new MeshPhongMaterial({map, side: DoubleSide});

					return <mesh
						key={mesh.id}
						castShadow
						receiveShadow
						geometry={mesh.geometry}
						material={material}
					/>
				})}
				{/* Всплывающее окно с выводом названия башни при наведении на нее */}
				{hover && !isSelected && <Html calculatePosition={calculatePosition}>
					<Popover
						open={true}
						title={<h3>{building.title || building.name}</h3>}
						content={clickable && `Нажмите для просмотра`}
					/>
				</Html>}
			</group>
		</>
	);
}

export default memo(Building);
