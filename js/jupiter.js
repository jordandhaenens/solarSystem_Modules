"use strict";
console.log("jupiter.js loaded");

let $ = require('jquery');

let dataObj = {
	name: "Jupiter",
	discovered: "2127",
	mass: "mass",
	size: "size",
	distToSun: "distToSun",
	atmosphere: "atmosphere",
	satellites: ["you", "me", "she"],
	visitors: ["abe", "there", "where"]
};

function data(){
	return dataObj;
}





module.exports = {data};

