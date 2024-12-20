import React from "react";

export const Lights = () => {
	return (
		<>
			<directionalLight
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
