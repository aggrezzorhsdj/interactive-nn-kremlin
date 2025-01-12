import React from "react";

/*
 * Компонент для отображения источников света
*/
export const Lights = () => {
	return (
		<>
			<directionalLight
				castShadow
				shadow-darkness={true}
				shadow-mapSize-height={2048}
				shadow-mapSize-width={2048}
				shadow-camera-near={0.5}
				shadow-camera-far={5000}
				shadow-camera-left={-5000}
				shadow-camera-right={5000}
				shadow-camera-bottom={-5000}
				shadow-camera-top={2000}
				position={[1000, 500, 600]}
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
			<ambientLight intensity={0.4} color={0xb8b8ac}/>
		</>
	);
}
