import React, {useEffect, useRef} from "react";
import {Canvas} from "@react-three/fiber";
import {Lights} from "./components/Light";
import {CameraControls, Loader} from "@react-three/drei";
import Scene from "./components/Scene";
import {useAppStore} from "./Store";
import Info from "./components/Info";
import {DEFAULT_CAMERA_PARAMS} from "./models/models";
import {Vector3} from "three";

/*
 * Корневой компонент
*/
export const App = () => {
	const cameraRef = useRef<CameraControls>();
	const {cameraParameters} = useAppStore();

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
				<Scene />

				{/* компонент отображения освещения */}
				<Lights/>

				{/* установка взаимодействия с камерой */}
				<CameraControls ref={cameraRef}/>
			</Canvas>

			<Loader/>

			<Info/>
		</>
	);
};
