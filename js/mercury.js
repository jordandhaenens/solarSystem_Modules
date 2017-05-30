"use strict";
console.log("mercury.js loaded");

let $ = require('jquery');

let dataObj = {
	name: "Mercury",
	discovered: "2127",
	mass: "mass",
	size: "size",
	distToSun: "distToSun",
	atmosphere: "atmosphere",
	satellites: ["you", "me", "she"],
	visitors: ["here", "there", "cathy"]
};

function data(){
	return dataObj;
}



module.exports = {data};

