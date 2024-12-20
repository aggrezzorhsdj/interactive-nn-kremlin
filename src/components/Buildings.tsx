import React, {FC} from "react";
import {Building} from "./Building";
import {buildings} from "../data/buildings";

export const Buildings: FC = () => {
	// Отображение массива зданий с указанными координатами и текстурами
	return (
		<>
			{
				buildings.map(item => <Building building={item} />)
			}
		</>
	);
}
