import {FC, useEffect, useRef} from "react";
import {useLoader} from "@react-three/fiber";
import {OBJLoader} from "three/examples/jsm/loaders/OBJLoader";
import {DoubleSide, Group, MathUtils, Mesh, MeshPhongMaterial, MirroredRepeatWrapping, Vector3} from "three";
import {useTexture} from "@react-three/drei";
import {useControls} from "leva";
import {GLTFLoader} from "three/examples/jsm/loaders/GLTFLoader";

export const Sidewalks: FC = () => {
	const sidewalks: any = useLoader(GLTFLoader as any, "./models/sidewalks.glb");
	const sidewalksMesh = sidewalks.scene.children[0] as Mesh;
	sidewalksMesh.geometry.center();

	const texture = useTexture("./images/asfalt1.jpg")
	texture.needsUpdate = true;
	texture.wrapS = MirroredRepeatWrapping;
	texture.wrapT = MirroredRepeatWrapping;
	texture.repeat.set( 20, 20);
	texture.anisotropy = 12;
	const ref = useRef<Mesh>();


	const {sideWalksX, sideWalksY, sideWalksZ} = useControls({
		sideWalksX: {value: 60, min: -1000, max: 1000},
		sideWalksY: {value: 62, min: -1000, max: 1000},
		sideWalksZ: {value: 380, min: -1000, max: 1000},
	})

	return (
		<>
			<mesh
				ref={ref}
				castShadow
				name="sidewalks"
				args={[sidewalksMesh.geometry, new MeshPhongMaterial({map: texture, side: DoubleSide, shininess: 0})]}
				position={[sideWalksX, sideWalksY, sideWalksZ]}
			/>
		</>
	);
}
