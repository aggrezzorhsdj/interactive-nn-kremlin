import {useControls} from "leva";
import React, {useEffect, useRef} from "react";
import {
	DirectionalLight, DirectionalLightHelper, DirectionalLightShadow,
	PointLight, SpotLight, SpotLightHelper
} from "three";
import {RectAreaLightUniformsLib} from "three/examples/jsm/lights/RectAreaLightUniformsLib";
import {useHelper} from "@react-three/drei";

export const Lights = () => {
	const ref = useRef<DirectionalLight>(null);
	useHelper(ref, DirectionalLightHelper);


	RectAreaLightUniformsLib.init();
	useEffect(() => {
	}, []);

	return (
		<>
			<directionalLight
				ref={ref}
				castShadow
				position={[1000, -500, 600]}
			/>

			<directionalLight
				castShadow
				color={0x111111}
				position={[-1, -1, -1]}
			/>

			<directionalLight
				castShadow
				color={0xffffff}
				position={[0, 1, 1]}
			/>

			<directionalLight
				castShadow
				color={0x222222}
				position={[1, 0, 1]}
			/>

			<directionalLight
				castShadow
				color={0x222222}
				position={[-1, 0, 1]}
			/>
			<ambientLight intensity={0.1} color={0xffffff}/>
		</>
	);
}
