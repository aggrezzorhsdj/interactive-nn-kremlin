import {Group, Mesh, Scene} from "three";
import {ThreeEvent} from "@react-three/fiber";
import {GLTF} from "three-stdlib";

/*
* @param name - машинное имя
* @param x - координата по оси x
* @param z - координата по оси z
* @param url - ссылка на файл модели
* @param textureUrls - список текстур для модели
* @param angle - угол поворота модели
* @param depthY - положение модели относительно конечной координаты y
* @param title - отображаемой название
* @param text - отображаемой название
* @param image - изображение реального здания
*/
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

/*
* Параметры компоненты зданий
* @param building - параметры здания
* @param isSelected - флаг для проверки выбрано ли здание
* @param clickable - флаг для проверки возможности выбора здания
* @param onClick - обработчик нажатия на модель
 */
export interface BuildingProps {
	building: BuildingItem;
	isSelected?: boolean;
	clickable?: boolean;
	onClick?: (e: ThreeEvent<MouseEvent>, building: BuildingItem) => void
}

/*
* Расширенный интерфейс загрузчика GLTFLoader
 */
export interface GLTFLoaderResult extends GLTF {
	nodes?: Record<string, Group | Scene | Mesh>;
}

/*
* Типы загружаемых моделей
 */
export enum BaseGroups {
	TERRAIN = "terrain",
	ROAD = "road",
	STAIRS = "stairs",
	BASE = "base",
	WALL = "wall",
	TOWER = "tower"
}

/*
* маппинг загружаемых моделей главной сцены для применения параметров материала
 */
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

/*
* Параметры камеры
* @param positionX - позиция по x
* @param positionY - позиция по y
* @param positionZ - позиция по z
* @param targetX - направление камеры по x
* @param targetY - направление камеры по y
* @param targetZ - направление камеры по z
 */
export type CameraParams = [positionX: number, positionY: number, positionZ: number, targetX: number, targetY: number, targetZ: number];

// параметры камеры по умолчанию
export const DEFAULT_CAMERA_PARAMS: CameraParams = [
	-2000,
	1000,
	0,
	0,
	0,
	0
];
