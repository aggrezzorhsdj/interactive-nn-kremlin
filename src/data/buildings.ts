import {BuildingProps} from "../components/Building";
import {GLTFLoader} from "three/examples/jsm/loaders/GLTFLoader";
import {TexturesMaps} from "../constants/textures";

export const buildings: BuildingProps[] = [
	{
		name: "arsenal",
		x: 382,
		z: -730,
		url: "./models/arsenal.glb",
		textureUrls: [TexturesMaps.SHEET, TexturesMaps.BRICK_RED, TexturesMaps.PUTTY],
		angle: -1,
		loaderType: GLTFLoader
	},
	{
		name: "hozkorpus",
		x: 688,
		z: 986,
		url: "./models/hozkorpus.glb",
		textureUrls: [TexturesMaps.ROOFING_FELT, TexturesMaps.BRICK_RED],
		angle: 0,
		loaderType: GLTFLoader
	},
	{
		name: "sovet",
		x: -119,
		z: -646,
		url: "./models/sovet2.glb",
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
		loaderType: GLTFLoader
	},
	/*{
		name: "zelhouse",
		x: 638,
		z: 912,
		url: "./models/zelhouse.glb",
		textureUrls: [TexturesMaps.SHEET_GREEN, TexturesMaps.BRICK_RED],
		angle: 0,
		loaderType: GLTFLoader
	},*/
	{
		name: "garage",
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
		loaderType: GLTFLoader
	},
	{
		name: "kazar",
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
		loaderType: GLTFLoader
	},
	/*{
		name: "kapterka",
		x: -226,
		z: -975,
		url: "./models/kapterka.glb",
		textureUrls: [
			TexturesMaps.GLASS,
			"./images/TSerShpak.jpg",
			TexturesMaps.PUTTY_GREY,
			TexturesMaps.ROOFING_FELT,
			TexturesMaps.PUTTY_GREY
		],
		depthY: 0,
		loaderType: GLTFLoader
	},*/
	{
		name: "services",
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
		loaderType: GLTFLoader
	},
	{
		name: "vicegub",
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
		loaderType: GLTFLoader
	},
	{
		name: "hospital",
		x: 420,
		z: -138,
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
		loaderType: GLTFLoader
	},
	{
		name: "kotel",
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
		depthY: 0,
		loaderType: GLTFLoader
	},
	{
		name: "muzei",
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
		loaderType: GLTFLoader
	},
	{
		name: "obkom",
		x: 140,
		z: 0,
		url: "./models/obkom.glb",
		textureUrls: [
			TexturesMaps.GLASS,
			TexturesMaps.WOOD,
			TexturesMaps.WOOD,
			TexturesMaps.GLASS,
			TexturesMaps.PUTTY,
			TexturesMaps.PUTTY
		],
		depthY: -2,
		loaderType: GLTFLoader
	},
	{
		name: "minin",
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
		loaderType: GLTFLoader
	},
	{
		name: "stella",
		x: 687,
		z: -158,
		url: "./models/stella.glb",
		textureUrls: [
			TexturesMaps.PUTTY_GREY,
			TexturesMaps.PUTTY_DARK_GREY,
			TexturesMaps.PUTTY
		],
		depthY: -2,
		loaderType: GLTFLoader
	},
	{
		name: "church",
		x: 18,
		z: 312,
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
		loaderType: GLTFLoader
	},
	{
		name: "prisut",
		x: 208,
		z: 589,
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
		loaderType: GLTFLoader
	},
	{
		name: "ministry",
		x: 392,
		z: 1039,
		url: "./models/ministry.glb",
		textureUrls: [
			TexturesMaps.PUTTY,
			TexturesMaps.PUTTY_BEIGE,
			TexturesMaps.PUTTY,
			TexturesMaps.ROOFING_FELT
		],
		depthY: -2,
		loaderType: GLTFLoader
	},
	{
		name: "manezh",
		x: 40,
		z: 1083,
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
		loaderType: GLTFLoader
	},
];
