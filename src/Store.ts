import {create} from "zustand/react";
import {BuildingItem, CameraParams, DEFAULT_CAMERA_PARAMS} from "./models/models";


export interface AppStore {
	selectedBuilding: BuildingItem,
	cameraParameters: CameraParams;
	setSelectedBuilding: (building: BuildingItem) => void;
	setCameraParameters: (params: CameraParams) => void;
}
export const useAppStore = create<AppStore>(set => ({
	selectedBuilding: null,
	cameraParameters: DEFAULT_CAMERA_PARAMS,
	setSelectedBuilding: (building: BuildingItem) => set(() => ({selectedBuilding: building})),
	setCameraParameters: (params) => set(() => {
		return {
			cameraParameters: params
		}
	})
}))
