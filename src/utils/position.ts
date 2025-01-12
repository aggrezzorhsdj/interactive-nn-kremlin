import {Box3, Group, Intersection, MathUtils, Mesh, Raycaster, Scene, Vector3} from "three";
import {BaseGroups} from "../models/models";

/*
* метод определения координаты относительно соприкосновения центральной точки модели с рельефом
* @param x - координата x
* @param z - координата z
* @param scene - сцена three.js для доступа к рельфеу
* @return Vector3
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

/*
* метод определения вершины соприкосновения модели с рельефом
* @param point - координаты модели выравненной по центральной точке к рельефу
* @param scene - сцена three.js для доступа к рельфеу
* @param group - модель
* @return Vector3
 */
export function getClosestBoxPoint(point: Vector3, scene: Scene, group: Group): Vector3 {
	// определение текущей центральной точки модели
	const box = new Box3().setFromObject(group);
	const center = new Vector3();
	const size = new Vector3();
	box.getCenter(center);
	box.getSize(size);

	// определение ширины и длины модели
	const edgeHeight = size.x / 2;
	const edgeWidth = size.z / 2;

	// определение вершин нижней плоскости модели для определение ближайщей точки к рельефу
	const intersections = [
		new Vector3(point.x - edgeHeight, point.y, point.z - edgeWidth),
		new Vector3(point.x + edgeHeight, point.y, point.z + edgeWidth),
		new Vector3(point.x - edgeHeight, point.y, point.z + edgeWidth),
		new Vector3(point.x + edgeHeight, point.y, point.z - edgeWidth)
	]
		.map(item => {
			const pointY = getIntersectionPoint(item.x, item.z, scene) || new Vector3(0, 0, 0);
			return pointY.y;
		});

	return new Vector3(point.x, Math.min(...intersections), point.z);
}
