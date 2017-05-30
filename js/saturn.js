"use strict";
console.log("saturn.js loaded");

let $ = require('jquery');

let dataObj = {
	name: "Saturn",
	discovered: "2127",
	mass: "mass",
	size: "size",
	distToSun: "distToSun",
	atmosphere: "atmosphere",
	satellites: ["you", "me", "she"],
	visitors: ["eloise", "there", "where"]
};

function data(){
	return dataObj;
}








module.exports = {data};

