"use strict";
console.log("mars.js loaded");

let $ = require('jquery');

let dataObj = {
	name: "Mars",
	discovered: "2127",
	mass: "mass",
	size: "size",
	distToSun: "distToSun",
	atmosphere: "atmosphere",
	satellites: ["you", "me", "she"],
	visitors: ["ben", "there", "where"]
};

function data(){
	return dataObj;
}








module.exports = {data};

