"use strict";
console.log("main.js loaded");

let	compiler = require('./compiler'),
	$ = require('jquery');



compiler.outputTo($('#solarSystem'));
