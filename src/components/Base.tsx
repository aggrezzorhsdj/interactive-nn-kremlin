import React, {FC, memo} from "react";
import {GLTF} from "three-stdlib";
import {useGLTF, useTexture} from "@react-three/drei";
import {DoubleSide, Mesh, MeshPhongMaterial, MeshStandardMaterial, Texture} from "three";
import {TexturesMaps} from "../constants/textures";
import {BaseGroups, baseGroupsMap} from "../models/models";
import {loadTexture} from "../utils/texture";

const Base: FC = () => {
	// получение модели с помощью загрузчика GLTFLoader
	const base: GLTF = useGLTF("./models/base.glb", true);

	base.scene.name = "base";

	// установка текстур базовым моделям
	base.scene.children.forEach((mesh: Mesh) => {
		if (mesh.isMesh) {
			let map: Texture = useTexture(TexturesMaps.BRICK_RED);

			switch (baseGroupsMap.get(mesh.name)) {
				case BaseGroups.TERRAIN:
					map = loadTexture(TexturesMaps.GRASS);
					mesh.material = new MeshPhongMaterial({
						map,
						shininess: 0,
						side: DoubleSide
					});

					break;
				case BaseGroups.WALL:
				case BaseGroups.TOWER:
					const bumpMap = loadTexture(TexturesMaps.BRICK_RED_BUMP);
					mesh.material = new MeshPhongMaterial({
						map,
						bumpMap,
						shininess: 1,
						bumpScale: 12,
						side: DoubleSide
					});
					break;
				case BaseGroups.STAIRS:
				case BaseGroups.ROAD:
					map = loadTexture(TexturesMaps.ASPHALT);
					mesh.material = new MeshStandardMaterial({map, side: DoubleSide});

					break;
			}
			mesh.receiveShadow = true;
			mesh.castShadow = true;

			map.needsUpdate = true;
		}

	});

	return <primitive object={base.scene}></primitive>;
}

export default memo(Base);
