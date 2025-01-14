import React, {Suspense, useEffect, useRef} from "react";
import {Canvas} from "@react-three/fiber";
import {CameraControls, Loader} from "@react-three/drei";
import Scene from "./components/Scene";
import {useAppStore} from "./Store";
import Info from "./components/Info";
import {DEFAULT_CAMERA_PARAMS} from "./models/models";
import {MathUtils, Vector3} from "three";

/*
 * Корневой компонент
*/
export const App = () => {
	const cameraRef = useRef<CameraControls>();

	// получение параметров камеры из менеджера состояния
	const {cameraParameters} = useAppStore();

	// установка положения камера при выборе объекта на сцене
	useEffect(() => {
		if (cameraRef?.current) {
			cameraRef.current.setLookAt(...cameraParameters, true).then();
		}
	}, [cameraParameters]);

	return (
		<>
			<Canvas
				shadows="soft"
				camera={{
					fov: 60,
					aspect: window.innerWidth / window.innerHeight,
					near: 1,
					far: 100000,
					position: new Vector3(...DEFAULT_CAMERA_PARAMS.slice(0, 2))
				}}
			>
				{/* компонент отображения сцены */}
				<Suspense fallback={null}>
					<Scene />
				</Suspense>

				{/* установка взаимодействия с камерой и ограничений*/}
				<CameraControls ref={cameraRef} maxPolarAngle={MathUtils.DEG2RAD * 95}/>
			</Canvas>

			{/* Загрузчик страницы */}
			<Loader/>

			{/* Компонент отображения модульного окна */}
			<Info/>
		</>
	);
};
