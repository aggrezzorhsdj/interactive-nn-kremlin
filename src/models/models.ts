import {Group, Mesh, Scene} from "three";
import {ThreeEvent} from "@react-three/fiber";

export interface BuildingItem {
	name: string;
	x: number;
	y?: number;
	z: number;
	url: string;
	textureUrls: string[];
	angle?: number;
	scale?: number;
	depthY?: number;
	title?: string;
	text?: string;
	image?: string;
}
export interface BuildingProps {
	building: BuildingItem;
	onClick?: (e: ThreeEvent<MouseEvent>, building: BuildingItem) => void,
	onPointerEnter?: (e: ThreeEvent<MouseEvent>, building: BuildingItem) => void,
	onPointerLeave?: (e: ThreeEvent<MouseEvent>, building: BuildingItem) => void,
}
export interface BaseModelProps {
	mesh: Mesh
}

export interface GLTFLoaderResult {
	nodes: Record<string, Group | Scene>;
	scene: Group;
}

export enum BaseGroups {
	TERRAIN = "terrain",
	ROAD = "road",
	STAIRS = "stairs",
	BASE = "base",
	WALL = "wall",
	TOWER = "tower"
}

export const baseGroupsMap: Map<string, BaseGroups> = new Map([
	["terrain", BaseGroups.TERRAIN],
	["stairs", BaseGroups.STAIRS],
	["walls", BaseGroups.WALL],
	["road1", BaseGroups.ROAD],
	["road2", BaseGroups.ROAD],
	["road3", BaseGroups.ROAD],
	["road4", BaseGroups.ROAD],
	["belaya", BaseGroups.TOWER],
	["borisoglebovskaya", BaseGroups.TOWER],
	["chasovaya", BaseGroups.TOWER],
	["dmitrievskaya", BaseGroups.TOWER],
	["georgievskaya", BaseGroups.TOWER],
	["ivanovskaya", BaseGroups.TOWER],
	["kladovaya", BaseGroups.TOWER],
	["koromislova", BaseGroups.TOWER],
	["nikolskaya", BaseGroups.TOWER],
	["porohovaya", BaseGroups.TOWER],
	["severnaya", BaseGroups.TOWER],
	["tainitskaya", BaseGroups.TOWER],
	["zachatskaya", BaseGroups.TOWER],
]);

export type CameraParams = [number, number, number, number, number, number];

export const DEFAULT_CAMERA_PARAMS: CameraParams = [
	-2000,
	1000,
	0,
	0,
	0,
	0
];
