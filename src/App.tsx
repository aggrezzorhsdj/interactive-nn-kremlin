import React, {Suspense} from "react";
import {Canvas} from "@react-three/fiber";
import {Lights} from "./Light";
import {Scene} from "./Scene";
import {Loader} from "@react-three/drei";

export const App = () => {

	return (
		<>
			{/* установка three js Canvas c параметрами камеры */}
			<Canvas shadows="soft" camera={{
				fov: 60,
				aspect: window.innerWidth / window.innerHeight,
				near: 1,
				far: 100000
			}}>
				<Suspense fallback={null}>
					{/* компонент отображения сцены */}
					<Scene />

					{/* компонент отображения освещения */}
					<Lights/>
				</Suspense>
			</Canvas>
			<Loader/>
		</>
	);
};
