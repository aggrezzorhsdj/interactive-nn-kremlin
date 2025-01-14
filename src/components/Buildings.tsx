import React, {FC, memo} from "react";
import {buildings} from "../data/buildings";
import {towers} from "../data/towers";
import {BaseGroups, baseGroupsMap, BuildingItem} from "../models/models";
import {ThreeEvent} from "@react-three/fiber";
import Building from "./Building";
import {useAppStore} from "../Store";

/*
 * Компонент для отображения зданий и башен
*/
const Buildings: FC = () => {
	// подключению к состоянию приложения
	const store = useAppStore(state => state);

	// Обратчик кликов по башням. Устанвливает положение камеры у башни через менеджер состояния.
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
				// здания
				buildings.map(item => <Building
					key={item.name}
					building={item}
				/>)
			}
			{
				// башни
				towers.map(item => <Building
					key={item.name}
					building={item}
					clickable={true}
					onClick={sceneHandler}
					isSelected={store.selectedBuilding?.name === item.name}
				/>)
			}
		</>
	);
}

export default memo(Buildings);
