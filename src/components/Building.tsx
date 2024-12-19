import React, {FC, useEffect, useLayoutEffect, useRef, useState} from "react";
import {useFrame, useLoader, useThree} from "@react-three/fiber";
import {
	Box3,
	BoxGeometry,
	BoxHelper, BufferGeometry,
	DoubleSide,
	Group,
	MathUtils,
	Mesh,
	MeshPhongMaterial, MeshStandardMaterial, MirroredRepeatWrapping, Plane, PlaneGeometry,
	TextureLoader,
	Vector3
} from "three";
import {getIntersectionPoint} from "../utils/position.utils";
import {OBJLoader} from "three/examples/jsm/loaders/OBJLoader";
import {GLTFLoader} from "three/examples/jsm/loaders/GLTFLoader";
import {useHelper, useTexture} from "@react-three/drei";
import {TexturesMaps} from "../constants/textures";
import {BaseGroups} from "../models/models";

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
	const {
		x,
		z,
		url,
		name,
		loaderType = OBJLoader,
		textureUrls,
		angle,
		scale,
		depthY = 0
	} = building;
	const {scene} = useThree();
	const [position, setPosition] = useState<Vector3>(null!);
	const loadedObject = useLoader(loaderType, url);
	const groupRef = useRef<Group>(null);
	// const helper = useHelper(groupRef, BoxHelper);
	let helper: BoxHelper;
	const [
		platform,
		setPlatform
	] = useState<{position: Vector3, geometry: [width?: number, height?: number, depth?: number]}>(null!);

	const map = useTexture(TexturesMaps.ASPHALT);
	map.needsUpdate = true;
	map.wrapS = MirroredRepeatWrapping;
	map.wrapT = MirroredRepeatWrapping;
	map.repeat.set( 1, 1);
	map.anisotropy = 12;

	let object: Group;

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

	const loader = new TextureLoader();

	useEffect(() => {
		const terrain = scene.children
			.find(item => item.name === BaseGroups.BASE)?.children
			.find(item => item.name === BaseGroups.TERRAIN) as Mesh;

		const point = getIntersectionPoint(x, z, scene) || new Vector3(0, 0, 0);

		const box = new Box3().setFromObject(groupRef.current);
		const center = new Vector3();
		const size = new Vector3();
		box.getCenter(center);
		box.getSize(size);

		const edgeHeight = size.x / 2;
		const edgeWidth = size.z / 2;


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

		/*setPlatform({
			position: new Vector3(x, Math.min(...intersections), z),
			geometry: [size.x, 50, size.z]
		});*/

		setPosition(new Vector3(x, Math.min(...intersections), z));
	}, [scene]);

	return (
		<>
			<group
				name={name}
				ref={groupRef}
				position={position}
				rotation-y={MathUtils.DEG2RAD * (angle ?? 0)} scale={scale ?? 1}
			>
				{object?.children?.map((mesh: Mesh, index) => {
					const map = loader.load(textureUrls[index]);

					return <mesh
						castShadow
						receiveShadow
						geometry={mesh.geometry}
						material={new MeshPhongMaterial({map, side: DoubleSide})}
					/>
				})}
			</group>
			{platform && <mesh position={platform.position}>
				<boxGeometry args={platform.geometry}/>
				<meshStandardMaterial map={map}/>
			</mesh>}
		</>
	);
}
