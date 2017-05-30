"use strict";

let mercury = require('./mercury'),
	mars = require('./mars'),
	venus = require('./venus'),
	saturn = require('./saturn'),
	jupiter = require('./jupiter'),
	neptune = require('./neptune'),
	uranus = require('./uranus'),
	$ = require('jquery');


function strTemplate(dataObj){
	let string = `<div><h3>${dataObj.name}</h3><p>Discovered in ${dataObj.discovered}</p>
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
	string += `</p></div>`;

	return string;
}
//

function outputTo(domElement){
	let div = "";
	let obj = {
		marsData: mars.data(),
		mercData: mercury.data(),
		venusData: venus.data(),
		saturnData: saturn.data(),
		jupiterData: jupiter.data(),
		neptuneData: neptune.data(),
		uranusData: uranus.data()
	};
	// console.log("obj.mercData", obj.mercData.name);
	for (let item in obj){
		// console.log("obj[item]", obj[item]);
		div += strTemplate(obj[item]);
	}
	$(domElement).append(div);
}



module.exports = {outputTo};


