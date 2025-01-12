import React, {FC, memo} from "react";
import Buildings from "./Buildings";
import Lights from "./Light";
import Base from "./Base";

/*
 * Компонент для отображения сцены
*/
const Scene: FC = () => {
	return (
		<>
			{/* установка базовой модели на сцену */}
			<Base/>

			{/* установка зданий */}
			<Buildings/>

			{/* компонент отображения освещения */}
			<Lights/>
		</>
	);
}

export default memo(Scene);
