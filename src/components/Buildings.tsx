import React, {FC} from "react";
import {Building} from "./Building";
import {buildings} from "../data/buildings";
import {towers} from "../data/towsers";

export const Buildings: FC = () => {
	return (
		<>
			{
				buildings.map(item => <Building building={item} />)
			}
			{/*
				towers.map(item => <Building building={item} />)
			*/}
		</>
	);
}
