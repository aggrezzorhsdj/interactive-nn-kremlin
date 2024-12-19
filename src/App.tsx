import React from "react";
import {Canvas} from "@react-three/fiber";
import {Lights} from "./Light";
import {Scene} from "./Scene";
import {Box} from "@react-three/drei";

export const App = () => {

	return (
		<Canvas shadows="soft" camera={{
			fov: 60,
			aspect: window.innerWidth / window.innerHeight,
			near: 1,
			far: 100000
		}}>
			<Scene />
			<color attach="background" args={[0, 0, 0]}/>
			<Lights/>
			<axesHelper args={[1000]}/>
		</Canvas>
	);
};
