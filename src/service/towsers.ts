import {BuildingProps} from "../components/Building";
import {GLTFLoader} from "three/examples/jsm/loaders/GLTFLoader";

export const towers: BuildingProps[] = [
	{
		name: "zachatskaya",
		z: -295,
		x: -967,
		url: "./models/zachatskaya.glb",
		textureUrls: ["./images/kirpich1.jpg"],
		loaderType: GLTFLoader,
		scale: 0.09,
		angle: 6
	},
	{
		name: "borisoblebovskaya",
		z: -880,
		x: -815,
		url: "./models/borisoblebovskaya.glb",
		textureUrls: ["./images/kirpich1.jpg"],
		loaderType: GLTFLoader,
		scale: 0.09,
		angle: 6,
		depthY: -4
	},
	{
		name: "georgievskaya",
		z: -1405,
		x: -321,
		url: "./models/georgievskaya.glb",
		textureUrls: ["./images/kirpich1.jpg"],
		loaderType: GLTFLoader,
		scale: 0.09,
		angle: -90,
		depthY: -3
	},
	{
		name: "porohovaya",
		z: -860,
		x: 234,
		url: "./models/porohovaya.glb",
		textureUrls: ["./images/kirpich1.jpg"],
		loaderType: GLTFLoader,
		scale: 0.09
	},
	{
		name: "dmitrievskaya",
		z: -380,
		x: 710,
		url: "./models/dmitrievskaya.glb",
		textureUrls: ["./images/kirpich1.jpg"],
		loaderType: GLTFLoader,
		scale: 0.09,
		angle: 10
	},
	{
		name: "kladovaya",
		z: 140,
		x: 873,
		url: "./models/kladovaya.glb",
		textureUrls: ["./images/kirpich1.jpg"],
		loaderType: GLTFLoader,
		scale: 0.09,
		angle: 0
	},
	{
		name: "nikolskaya",
		z: 714,
		x: 970,
		url: "./models/nikolskaya.glb",
		textureUrls: ["./images/kirpich1.jpg"],
		loaderType: GLTFLoader,
		scale: 0.09,
		angle: 10
	},
	{
		name: "koromislova",
		z: 1184,
		x: 860,
		url: "./models/koromislova.glb",
		textureUrls: ["./images/kirpich1.jpg"],
		loaderType: GLTFLoader,
		scale: 0.09,
		angle: 10
	},
	{
		name: "tainitskaya",
		z: 1390,
		x: 7,
		url: "./models/tainitskaya.glb",
		textureUrls: ["./images/kirpich1.jpg"],
		loaderType: GLTFLoader,
		scale: 0.09,
		angle: 10
	},
	{
		name: "severnaya",
		z: 1108,
		x: -425,
		url: "./models/severnaya.glb",
		textureUrls: ["./images/kirpich1.jpg"],
		loaderType: GLTFLoader,
		scale: 0.09,
		angle: 0
	},
	{
		name: "chasovaya",
		z: 963,
		x: -420,
		url: "./models/chasovaya.glb",
		textureUrls: ["./images/kirpich1.jpg"],
		loaderType: GLTFLoader,
		scale: 0.09,
		angle: 0,
		depthY: -3
	},
	{
		name: "ivanovskaya",
		z: 662,
		x: -760,
		url: "./models/ivanovskaya.glb",
		textureUrls: ["./images/kirpich1.jpg"],
		loaderType: GLTFLoader,
		scale: 0.09,
		angle: 12,
		depthY: -1
	},
	{
		name: "belaya",
		z: 182,
		x: -913,
		url: "./models/belaya.glb",
		textureUrls: ["./images/kirpich1.jpg"],
		loaderType: GLTFLoader,
		scale: 0.09,
		angle: 12,
		depthY: -5
	}
];
