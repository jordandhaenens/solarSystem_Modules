"use strict";
console.log("venus.js loaded");

let $ = require('jquery');

let dataObj = {
	name: "Venus",
	discovered: "2127",
	mass: "mass",
	size: "size",
	distToSun: "distToSun",
	atmosphere: "atmosphere",
	satellites: ["you", "me", "she"],
	visitors: ["here", "gregory", "where"]
};

function data(){
	return dataObj;
}








module.exports = {data};

