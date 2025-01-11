import {Intersection, MathUtils, Mesh, Raycaster, Scene, Vector3} from "three";
import {BaseGroups} from "../models/models";

/*
* метод определения точки соприкосновения модели с рельефом
* @param x - координата x
* @param z - координата z
* @param scene - сцена three.js для доступа к рельфеу
 */
export function getIntersectionPoint(x: number, z: number, scene: Scene): Vector3 {
	// получение модели рельефа
	const target = scene.children
		.find(item => item.name === BaseGroups.BASE)?.children
		.find(item => item.name === BaseGroups.TERRAIN) as Mesh;

	// создание луча для определения пересечения модели с рельефом
	const rayCaster = new Raycaster(),
		coords = new Vector3(x, 0, z),
		directions = [new Vector3(0, MathUtils.DEG2RAD * 90, 0), new Vector3(0, MathUtils.DEG2RAD * -90, 0)];
	let intersection: Intersection;
	target.updateMatrixWorld();

	// поиск пересечения модели с рельефом
	for (const direction of directions) {
		rayCaster.set(coords, direction);
		const intersections = rayCaster.intersectObject(target);
		if (intersections?.length && intersections[0].point) {
			intersection = intersections[0];
			break;
		}
	}
	return intersection?.point;

}
