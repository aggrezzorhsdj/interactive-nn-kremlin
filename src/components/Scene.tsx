import React, {FC, memo} from "react";
import {useGLTF, useTexture} from "@react-three/drei";
import {DoubleSide, Mesh, MeshStandardMaterial, Texture} from "three";
import {GLTF} from "three-stdlib";
import {TexturesMaps} from "../constants/textures";
import {BaseGroups, baseGroupsMap} from "../models/models";
import Buildings from "./Buildings";
import {loadTexture} from "../utils/texture";

const Scene: FC = () => {
	// загрузка основной модели с рельефом, стенами, дорогой и тротуарами
	const base: GLTF = useGLTF("./models/base.glb", true);

	base.scene.name = "base";

	// установка текстур базовым моделям
	base.scene.children.forEach((mesh: Mesh) => {
		let map: Texture = useTexture(TexturesMaps.BRICK_RED);
		switch (baseGroupsMap.get(mesh.name)) {
			case BaseGroups.TERRAIN:
				map = loadTexture(TexturesMaps.GRASS);
				break;
			case BaseGroups.STAIRS:
			case BaseGroups.ROAD:
				map = useTexture(TexturesMaps.ASPHALT);
				break;
		}

		map.needsUpdate = true;
		mesh.material = new MeshStandardMaterial({map, side: DoubleSide});

	})

	return (
		<>
			{/* установка базовой модели на сцену */}
			<primitive dispose={null} object={base.scene}></primitive>

			{/* установка зданий */}
			<Buildings/>
		</>
	);
}

export default memo(Scene);
