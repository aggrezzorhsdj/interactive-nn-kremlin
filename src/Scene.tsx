import React, {FC, useEffect, useRef} from "react";
import {CameraControls, useTexture} from "@react-three/drei";
import {DoubleSide, Mesh, MeshStandardMaterial, MirroredRepeatWrapping, Texture} from "three";
import {Buildings} from "./components/Buildings";
import {useLoader} from "@react-three/fiber";
import {GLTFLoader} from "three/examples/jsm/loaders/GLTFLoader";
import {TexturesMaps} from "./constants/textures";
import {BaseGroups, GLTFLoaderResult} from "./models/models";

export const Scene: FC = () => {
	const cameraRef = useRef<CameraControls>();
	// загрузка основной модели с рельефом, стенами, дорогой и тротуарами
	const base: GLTFLoaderResult = useLoader(GLTFLoader as any, "./models/base.glb");

	base.scene.name = "base";

	// установка текстур базовым моделям
	base.scene.children.forEach((mesh: Mesh) => {
		let map: Texture = useTexture(TexturesMaps.BRICK_RED);

		switch (mesh.name) {
			case BaseGroups.TERRAIN:
				map = useTexture(TexturesMaps.GRASS);
				map.wrapS = MirroredRepeatWrapping;
				map.wrapT = MirroredRepeatWrapping;
				map.repeat.set( 20, 20);
				map.anisotropy = 12;
				break;
			case BaseGroups.ROAD:
			case BaseGroups.SIDEWALK:
				map = useTexture(TexturesMaps.ASPHALT);
				break;
		}

		map.needsUpdate = true;
		mesh.material = new MeshStandardMaterial({map, side: DoubleSide});
	})


	// установка положения камера
	useEffect(() => {
		cameraRef.current.setPosition(-2000, 1000, 0).then();
	}, []);

	return (
		<>
			{/* установка базовой модели на сцену */}
			<primitive object={base.scene}></primitive>

			{/* установка зданий */}
			<Buildings/>

			{/* установка взаимодействия с камерой */}
			<CameraControls ref={cameraRef}/>
		</>
	);
}
