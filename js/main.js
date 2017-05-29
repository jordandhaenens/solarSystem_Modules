"use strict";
console.log("main.js loaded");

let mercury = require('./mercury'),
	mars = require('./mars'),
	venus = require('./venus'),
	saturn = require('./saturn'),
	jupiter = require('./jupiter'),
	neptune = require('./neptune'),
	uranus = require('./uranus'),
	$ = require('jquery');


mercury.outputTo($('#solarSystem'));
mars.outputTo($('#solarSystem'));
venus.outputTo($('#solarSystem'));
saturn.outputTo($('#solarSystem'));
jupiter.outputTo($('#solarSystem'));
neptune.outputTo($('#solarSystem'));
uranus.outputTo($('#solarSystem'));

