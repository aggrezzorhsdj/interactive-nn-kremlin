import {Group, Mesh, Scene} from "three";

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
	SIDEWALK = "sidewalk",
	BASE = "base",
	WALL = "wall"
}

