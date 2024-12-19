import React, {FC, useEffect, useRef} from "react";
import {CameraControls, useTexture} from "@react-three/drei";
import {DoubleSide, Group, MathUtils, Mesh, MeshStandardMaterial, MirroredRepeatWrapping, Texture} from "three";
import {Buildings} from "./components/Buildings";
import {useLoader} from "@react-three/fiber";
import {GLTFLoader} from "three/examples/jsm/loaders/GLTFLoader";
import {TexturesMaps} from "./constants/textures";
import {BaseGroups, GLTFLoaderResult} from "./models/models";
import {Wall} from "./components/Wall";

export const Scene: FC = () => {
	const cameraRef = useRef<CameraControls>();
	const base: GLTFLoaderResult = useLoader(GLTFLoader as any, "./models/base.glb");

	base.scene.name = "base";
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



	useEffect(() => {
		cameraRef.current.setPosition(0, 2500, 0).then();
		// cameraRef.current.setLookAt(0,0,0, -231, 100, -841)
		cameraRef.current.rotate(MathUtils.DEG2RAD * -90, MathUtils.DEG2RAD * -90).then();

	}, []);

	return (
		<>
			{/*<Buildings/>
			<Wall/>*/}
			{/*<Terrain mesh={terrain}/>*/}
			{/*<Sidewalks/>*/}
			{/*<Roads mesh={road}/>*/}
			<primitive object={base.scene}></primitive>
			{/*<Wall/>*/}
			<Buildings/>
			<CameraControls ref={cameraRef}/>
		</>
	);
}
