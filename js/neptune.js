"use strict";
console.log("neptune.js loaded");

let $ = require('jquery');

let dataObj = {
	name: "Neptune",
	discovered: "2127",
	mass: "mass",
	size: "size",
	distToSun: "distToSun",
	atmosphere: "atmosphere",
	satellites: ["you", "me", "she"],
	visitors: ["here", "daniel", "where"]
};

function data(){
	return dataObj;
}








module.exports = {data};

