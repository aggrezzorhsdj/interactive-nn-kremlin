import {ArrowHelper, Intersection, MathUtils, Mesh, Raycaster, Scene, Vector3} from "three";
import {BaseGroups} from "../models/models";

export function getIntersectionPoint(x: number, z: number, scene: Scene): Vector3 {
	const target = scene.children
		.find(item => item.name === BaseGroups.BASE)?.children
		.find(item => item.name === BaseGroups.TERRAIN) as Mesh;

	const rayCaster = new Raycaster(),
		coords = new Vector3(x, 0, z),
		directions = [new Vector3(0, MathUtils.DEG2RAD * 90, 0), new Vector3(0, MathUtils.DEG2RAD * -90, 0)];
	let intersection: Intersection;
	target.updateMatrixWorld();

	for (const direction of directions) {
		rayCaster.set(coords, direction);
		const arrowHelper = new ArrowHelper(rayCaster.ray.direction, rayCaster.ray.origin, 100, 0xff0000);
		scene.add(arrowHelper);
		const intersections = rayCaster.intersectObject(target);
		if (intersections?.length && intersections[0].point) {
			intersection = intersections[0];
			break;
		}
	}

	return intersection?.point;

}
