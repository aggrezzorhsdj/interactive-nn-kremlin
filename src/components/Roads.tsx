import {FC} from "react";
import {
	DoubleSide,
	MeshPhongMaterial,
	MirroredRepeatWrapping,
	Vector3
} from "three";
import {useTexture} from "@react-three/drei";
import {TexturesMaps} from "../constants/textures";
import {useControls} from "leva";
import {BaseModelProps} from "../models/models";

export const Roads: FC<BaseModelProps> = ({mesh}) => {
	mesh.updateMatrixWorld(true);
	const map = useTexture(TexturesMaps.ASPHALT);
	map.needsUpdate = true;
	map.wrapS = MirroredRepeatWrapping;
	map.wrapT = MirroredRepeatWrapping;
	map.repeat.set( 1, 1);
	map.anisotropy = 12;

	const material = new MeshPhongMaterial({map, side: DoubleSide});

	const {roadX, roadY, roadZ, scale, roadRotate} = useControls({
		roadX: {value: 0, min: -1000, max: 1000},
		roadY: {value: 0, min: -1000, max: 1000},
		roadZ: {value: 0, min: -1000, max: 1000},
		roadRotate: {value: 0, min: -360, max: 360},
		scale: {value: 0, min: 0, max: 1000}
	});

	return (
		<mesh
			geometry={mesh.geometry}
			material={material}
			position={mesh.position}
		/>
	)
}
