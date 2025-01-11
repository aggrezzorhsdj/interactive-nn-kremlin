import React, {FC, memo} from "react";
import {buildings} from "../data/buildings";
import {towers} from "../data/towers";
import {BaseGroups, baseGroupsMap, BuildingItem} from "../models/models";
import {ThreeEvent} from "@react-three/fiber";
import Building from "./Building";
import {useAppStore} from "../Store";

const Buildings: FC = () => {
	const store = useAppStore(state => state);

	const hoveredObject = {
		baseMaterial: null,
		obj: null
	};

	const sceneHandler = (e: ThreeEvent<MouseEvent>, building: BuildingItem) => {
		if (baseGroupsMap.get(building.name) === BaseGroups.TOWER) {
			store.setCameraParameters([
				e.point.x - 300,
				50,
				e.point.z - 100,
				e.point.x,
				e.point.y,
				e.point.z
			]);
			store.setSelectedBuilding(building);
		}
	}

	// Отображение массива зданий с указанными координатами и текстурами

	return (
		<>
			{
				buildings.map(item => <Building key={item.name} building={item} />)
			}
			{
				towers.map(item => <Building
					key={item.name}
					building={item}
					onClick={sceneHandler}
				/>)
			}
		</>
	);
}

export default memo(Buildings);
