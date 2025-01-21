import {TexturesMaps} from "../constants/textures";
import {BuildingItem} from "../models/models";

// здания с описанными параметрами

export const buildings: BuildingItem[] = [
	{
		name: "arsenal",
		title: "Арсенал",
		x: 382,
		z: -730,
		url: "./models/arsenal.glb",
		textureUrls: [TexturesMaps.SHEET, TexturesMaps.BRICK_RED, TexturesMaps.PUTTY],
		angle: -1,

	},
	{
		name: "hozkorpus",
		title: "Хозяйственный корпус",
		x: 688,
		z: 986,
		url: "./models/hozkorpus.glb",
		textureUrls: [TexturesMaps.ROOFING_FELT, TexturesMaps.BRICK_RED],
		angle: 0,

	},
	{
		name: "sovet",
		title: "Здание советов",
		x: -119,
		z: -646,
		url: "./models/sovet.glb",
		textureUrls: [
			TexturesMaps.WOOD,
			TexturesMaps.GLASS,
			TexturesMaps.GLASS,
			TexturesMaps.PUTTY,
			TexturesMaps.GLASS,
			TexturesMaps.ROOFING_FELT,
			TexturesMaps.ROOFING_FELT,
			TexturesMaps.PUTTY,
			TexturesMaps.PUTTY_GREY,
			TexturesMaps.PUTTY_GREY,
			TexturesMaps.PUTTY
		],
		angle: 0,

	},
	{
		name: "garage",
		title: "Гараж",
		x: -336,
		z: -1380,
		url: "./models/garage.glb",
		textureUrls: [
			TexturesMaps.METAL,
			TexturesMaps.GLASS,
			TexturesMaps.PUTTY_GREY,
			TexturesMaps.PUTTY,
			TexturesMaps.ROOFING_FELT,
		],
		angle: 0,

	},
	{
		name: "kazar",
		title: "Казармы",
		x: 729,
		z: 347,
		url: "./models/kazar.glb",
		textureUrls: [
			TexturesMaps.SHEET,
			TexturesMaps.BRICK_RED,
			TexturesMaps.BRICK_RED,
			TexturesMaps.BRICK_RED,
			TexturesMaps.BRICK_RED,
		],
		depthY: -2,

	},
	{
		name: "services",
		title: "Арбитражный суд",
		x: -139,
		z: -1240,
		url: "./models/services.glb",
		textureUrls: [
			TexturesMaps.PUTTY_GREY,
			TexturesMaps.PUTTY_GREY,
			TexturesMaps.SHEET_GREEN,
			TexturesMaps.WOOD,
			TexturesMaps.GLASS,
			TexturesMaps.PUTTY_BEIGE
		],
		angle: -1,
		depthY: 0,

	},
	{
		name: "vicegub",
		title: "Дом вице-губернатора",
		x: 420,
		z: 132,
		url: "./models/vicegub.glb",
		textureUrls: [
			TexturesMaps.PUTTY_GREY,
			TexturesMaps.PUTTY_GREY,
			TexturesMaps.SHEET_GREEN,
			TexturesMaps.PUTTY,
			TexturesMaps.PUTTY
		],
		depthY: 0,

	},
	{
		name: "hospital",
		title: "Казарма гарнизонного батальона",
		x: 420,
		z: -126,
		url: "./models/hospital.glb",
		textureUrls: [
			TexturesMaps.PUTTY_BEIGE,
			TexturesMaps.PUTTY,
			TexturesMaps.PUTTY,
			TexturesMaps.PUTTY,
			TexturesMaps.PUTTY,
			TexturesMaps.PUTTY,
			TexturesMaps.PUTTY_GREY,
			TexturesMaps.METAL,
			TexturesMaps.WOOD,
			TexturesMaps.WOOD,
			TexturesMaps.WOOD,
			TexturesMaps.ROOFING_FELT,
			TexturesMaps.GLASS,
			TexturesMaps.GLASS
		],
		depthY: 0,

	},
	{
		name: "kotel",
		title: "Котельная",
		x: -266,
		z: -1135,
		url: "./models/kotel.glb",
		textureUrls: [
			TexturesMaps.ROOFING_FELT,
			TexturesMaps.WOOD,
			TexturesMaps.WOOD,
			TexturesMaps.GLASS,
			TexturesMaps.PUTTY_GREY,
			TexturesMaps.PUTTY
		],
		depthY: 0
	},
	{
		name: "muzei",
		title: "Художественный музей",
		x: -291,
		z: -974,
		url: "./models/muzei.glb",
		textureUrls: [
			TexturesMaps.WOOD,
			TexturesMaps.GLASS,
			TexturesMaps.SHEET,
			TexturesMaps.WOOD,
			TexturesMaps.METAL,
			TexturesMaps.METAL,
			TexturesMaps.PUTTY,
			TexturesMaps.PUTTY,
			TexturesMaps.PUTTY,
			TexturesMaps.PUTTY
		],
		depthY: -2,

	},
	{
		name: "obkom",
		title: "Правительство Нижегордской области",
		x: 140,
		z: 0,
		url: "./models/obkom.glb",
		textureUrls: [
			TexturesMaps.GLASS,
			TexturesMaps.WOOD,
			TexturesMaps.WOOD,
			TexturesMaps.GLASS,
			TexturesMaps.PUTTY,
			TexturesMaps.PUTTY,
			TexturesMaps.PUTTY,
		]

	},
	{
		name: "minin",
		title: "Обелиск К. Минину и Д. Пожарскому",
		x: -355,
		z: 131,
		url: "./models/minin.glb",
		textureUrls: [
			TexturesMaps.GLASS,
			TexturesMaps.PUTTY_DARK_GREY,
			TexturesMaps.PUTTY_DARK_GREY,
			TexturesMaps.PUTTY,
			TexturesMaps.PUTTY,
			TexturesMaps.PUTTY
		],
		depthY: -2,

	},
	{
		name: "stella",
		title: "Георгий Победоносец на коне, поражающий змея",
		x: 687,
		z: -158,
		url: "./models/stella.glb",
		textureUrls: [
			TexturesMaps.PUTTY_GREY,
			TexturesMaps.PUTTY_DARK_GREY,
			TexturesMaps.PUTTY
		],
		depthY: -2,

	},
	{
		name: "church",
		title: "Собор Архангела Михаила",
		x: -78,
		z: 360,
		url: "./models/church.glb",
		textureUrls: [
			TexturesMaps.METAL,
			TexturesMaps.WOOD_GREEN,
			TexturesMaps.PAINT_GREEN,
			TexturesMaps.PAINT_GREEN,
			TexturesMaps.PAINT_GREEN,
			TexturesMaps.PAINT_GREEN,
			TexturesMaps.PAINT_GREEN,
			TexturesMaps.PAINT_GREEN,
			TexturesMaps.PAINT_GREEN,
			TexturesMaps.PUTTY,
			TexturesMaps.GLASS,
			TexturesMaps.PUTTY,
			TexturesMaps.PUTTY,
			TexturesMaps.PUTTY,
			TexturesMaps.PUTTY,
			TexturesMaps.PUTTY
		],
		depthY: 0,

	},
	{
		name: "prisut",
		title: "Заксобрание",
		x: 231,
		z: 733,
		url: "./models/prisut.glb",
		textureUrls: [
			"./images/zoloto.jpg",
			TexturesMaps.PUTTY,
			TexturesMaps.SHEET_GREEN,
			TexturesMaps.PUTTY,
			TexturesMaps.WOOD,
			TexturesMaps.PUTTY_GREY,
		],
		depthY: -1,

	},
	{
		name: "ministry",
		title: "Здание министерств",
		x: 387,
		z: 1182,
		url: "./models/ministry.glb",
		textureUrls: [
			TexturesMaps.PUTTY,
			TexturesMaps.PUTTY_BEIGE,
			TexturesMaps.PUTTY,
			TexturesMaps.ROOFING_FELT,
			TexturesMaps.ROOFING_FELT
		],

	},
	{
		name: "manezh",
		title: "Манеж",
		x: 33,
		z: 1251,
		url: "./models/manezh.glb",
		textureUrls: [
			TexturesMaps.PUTTY_GREY,
			TexturesMaps.SHEET_GREEN,
			TexturesMaps.BRICK_RED,
			TexturesMaps.GOLD,
			TexturesMaps.GOLD,
			TexturesMaps.SHEET_GREEN,
			TexturesMaps.PUTTY,
			TexturesMaps.BRICK_RED,
			TexturesMaps.BRICK_RED,
			TexturesMaps.PUTTY,
			TexturesMaps.PUTTY,
		],

	},
	{
		name: "financial",
		title: "Банковская контора",
		x: 33,
		z: 1048,
		url: "./models/financial.glb",
		textureUrls: [
			TexturesMaps.PUTTY,
			TexturesMaps.PUTTY_BEIGE,
			TexturesMaps.PUTTY,
			TexturesMaps.PUTTY,
			TexturesMaps.ROOFING_FELT,
			TexturesMaps.ROOFING_FELT,
			TexturesMaps.PUTTY,
		],

	},
];
