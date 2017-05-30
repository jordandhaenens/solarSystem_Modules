"use strict";
console.log("uranus.js loaded");

let $ = require('jquery');

let dataObj = {
	name: "Uranus",
	discovered: "2127",
	mass: "mass",
	size: "size",
	distToSun: "distToSun",
	atmosphere: "atmosphere",
	satellites: ["you", "me", "she"],
	visitors: ["here", "there", "Frida"]
};

function data(){
	return dataObj;
}








module.exports = {data};

