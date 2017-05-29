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
	visitors: ["here", "there", "where"]
};

function outputTo(domElement) {
	let string = `<h3>${dataObj.name}</h3><p>Discovered in ${dataObj.discovered}</p>
				<p>Mass: ${dataObj.mass}</p><p>Size: ${dataObj.size}</p>
				<p>Distance from the Sun: ${dataObj.distToSun}</p>
				<p>Atmospheric composition: ${dataObj.atmosphere}</p>
				<p>Natural Satellites: `;
	dataObj.satellites.forEach(function(currVal){
		string += `${currVal} `;
	});
	string += `</p><p>Visitors to ${dataObj.name}:`;
	dataObj.visitors.forEach(function(currVal){
		string += ` ${currVal}`;
	});
	string += `</p>`;

	$(domElement).append(string);
}








module.exports = {outputTo};

