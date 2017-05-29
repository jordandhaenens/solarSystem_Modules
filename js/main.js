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


mercury.outputTo($('#mercury'));
mars.outputTo($('#mars'));
venus.outputTo($('#venus'));
saturn.outputTo($('#saturn'));
jupiter.outputTo($('#jupiter'));
neptune.outputTo($('#neptune'));
uranus.outputTo($('#uranus'));

