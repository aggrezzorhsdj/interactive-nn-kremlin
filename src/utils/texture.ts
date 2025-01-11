import {MirroredRepeatWrapping, Texture} from "three";
import {useTexture} from "@react-three/drei";

export function loadTexture(url: string): Texture {
	const map = useTexture(url);
	map.wrapS = MirroredRepeatWrapping;
	map.wrapT = MirroredRepeatWrapping;
	map.repeat.set( 20, 20);
	map.anisotropy = 12;
	return map;
}
