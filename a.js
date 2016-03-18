// Load the full build.
var _ = require('lodash');
// Load the core build.
var _ = require('lodash/core');
// Load the fp build for immutable auto-curried iteratee-first data-last methods.
var _ = require('lodash/fp');

// Load a method category.
var array = require('lodash/array');
var object = require('lodash/fp/object');

// Load a single method for smaller builds with browserify/rollup/webpack.
var chunk = require('lodash/chunk');
var extend = require('lodash/fp/extend');

console.log("__________array____________")
console.log(array);
console.log("______________________")



console.log("__________object____________")
console.log(object);
console.log("______________________")



console.log("__________chunk____________")
console.log(chunk);
console.log("______________________")


console.log("__________extend____________")
console.log(extend);
console.log("______________________")

//this file is content all include file needed to use lodash etc
//aftrer including all console.log for printing content of or
//funtion of give immports