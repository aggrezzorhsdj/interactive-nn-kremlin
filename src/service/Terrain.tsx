import {FC, useRef} from "react";
import {DoubleSide, Mesh, MeshPhongMaterial, MirroredRepeatWrapping, Vector3} from "three";
import {useTexture} from "@react-three/drei";
import {useControls} from "leva";
import {BaseModelProps} from "../models/models";

export const Terrain: FC<BaseModelProps> = ({mesh}) => {
	mesh.geometry.center();

	const texture = useTexture("./images/planee.jpg")
	texture.needsUpdate = true;
	texture.wrapS = MirroredRepeatWrapping;
	texture.wrapT = MirroredRepeatWrapping;
	texture.repeat.set( 20, 20);
	texture.anisotropy = 12;
	const ref = useRef<Mesh>();


	const {x, y, z} = useControls({
		x: {value: 0, min: -1000, max: 1000},
		y: {value: 0, min: -1000, max: 1000},
		z: {value: 0, min: -1000, max: 1000},
	})

	return (
		<>
			<mesh
				ref={ref}
				castShadow
				name="terrain"
				args={[mesh.geometry, new MeshPhongMaterial({map: texture, side: DoubleSide, shininess: 0})]}
				position={mesh.position}
			/>
		</>
	);
}
