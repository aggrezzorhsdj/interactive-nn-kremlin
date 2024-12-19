import React, {FC, useEffect, useRef, useState} from "react";
import {useLoader, useThree} from "@react-three/fiber";
import {OBJLoader} from "three/examples/jsm/loaders/OBJLoader";
import {
	Group,
	Mesh,
	MeshPhongMaterial,
	Vector3,
	MathUtils
} from "three";
import {useTexture} from "@react-three/drei";
import {GLTFLoader} from "three/examples/jsm/loaders/GLTFLoader";
import {getIntersectionPoint} from "../utils/position.utils";
import {TexturesMaps} from "../constants/textures";
import {useControls} from "leva";

export const Wall: FC = () => {
	const brickTexture = useTexture(TexturesMaps.BRICK_RED);

	const wall: any = useLoader(OBJLoader as any, "./models/wall.obj");
	const wallRef = useRef<Mesh>(null);
	const wallMesh = wall.children[0] as Mesh;
	wallMesh.geometry.center();
	const {wallX, wallY, wallZ} = useControls({
		wallX: {value: 0, min: -1000, max: 1000},
		wallY: {value: 0, min: -1000, max: 1000},
		wallZ: {value: 0, min: -1000, max: 1000}
	})

	return (
		<>
			<mesh
				castShadow
				name="wall"
				rotation-x={MathUtils.DEG2RAD * -90}
				ref={wallRef}
				material={new MeshPhongMaterial({map: brickTexture, shininess: 0})}
				geometry={wallMesh.geometry}
				position={[wallX, wallY, wallZ]}
				scale={new Vector3(0.09, 0.09, 0.09)}
			/>

		</>
	);
}
