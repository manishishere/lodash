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
a=['a','b','c','d','e','f'];

console.log("chunk function--->")
b=array.chunk(a, 2);
console.log(b);


a=['a','',0,'c','','e','f'];
console.log("compact function--->")
a=array.compact(a);
console.log(a);

a=['a','b','c','d','e','f'];
console.log("concat function--->")
b=array.concat(a, b);
console.log(b);

console.log("difference function")
b=array.difference(a, ['a','b']);
console.log(b);


console.log("differenceBy function")
b=array.differenceBy(a,a,a);
console.log(b);


console.log("differenceWith function")
var objects = [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }];

console.log(array.differenceWith(objects, [{ 'x': 1, 'y': 2 }], _.isEqual));


a=['a','b','c','d','e','f'];
console.log("drop function--->")
b=array.drop(a,1);
console.log(b);


a=['a','b','c','d','e','f'];
console.log("dropRight function--->")
b=array.dropRight(a,3);
console.log(b);


a=['a','b','c','d','e','f'];
console.log("dropRightWhile function--->")
b=array.dropRightWhile(a,'b')
console.log(b);


a=['a','b','c','d','e','f'];
console.log("fill function--->")
b=array.fill(a,'s')
console.log(b);

a=[{'a':'a'},{'b':'b'},{'c':'c'},{'d':'d'}];
console.log("findIndex function--->")
b=array.findIndex(a,'c')
console.log(b);


a=[{'a':'a'},{'b':'b'},{'c':'c'},{'d':'d'}];
console.log("findlastIndex  function--->")
b=array.findLastIndex(a,'c')
console.log(b);


a=[{'a':'a'},{'b':'b'},{'c':'c'},{'d':'d'}];
console.log("head  function--->")
b=array.head(a)
console.log(b);

a=[{'a':'a'},[[{'b':'b'}]],[{'c':'c'},{'d':'d'}]];
console.log("flatten  function--->")
b=array.flatten(a)
console.log(b);

a=[{'a':'a'},[[{'b':'b'}]],[{'c':'c'},{'d':'d'}]];
console.log("flattendeep  function--->")
b=array.flattenDeep(a)
console.log(b);

a=[{'a':'a'},{'b':'b'},{'c':'c'},{'d':'d'}];
console.log("fromPairs  function--->")
b=array.fromPairs([['fname','manish'], ['lname','pendse']]);
console.log(b);

a=['a','b','c','d','e','f'];
console.log("indexOf  function--->")
b=array.indexOf(a,'e');
console.log(b);

a=['a','b','c','d','e','f'];
console.log("initial  function--->")
b=array.initial(a);
console.log(b);


a=['a','b','c','d','e','f'];
console.log("intersection  function--->")
b=array.intersection(a,['b','c','e']);
console.log(b);


a=['a','b','c','d','e','f'];
console.log("join  function--->")
b=array.join(a,': :');
console.log(b);

a=['a','b','c','d','e','f'];
console.log("last  function--->")
b=array.last(a,': :');
console.log(b);


a=['a','b','c','d','e','f'];
console.log("pull  function--->")
b=array.pull(a,'f','e');
console.log(b);


a=['a','b','c','d','e','f'];
console.log("reverse  function--->")
b=array.reverse(a);
console.log(b);

a=[1,2,3,4,5,5,4,3,2,1];
console.log("uniq  function--->")
b=array.uniq(a);
console.log(b);


a=['a','b','c','d','e','f'];
console.log("tail  function--->")
b=array.tail(a);
console.log(b);

a=['a','b','c','d','e','f'];
console.log("take  function--->")
b=array.take(a,4);
console.log(b);


a=['a',1,'x'],['b',2,'y'],['c',3,'z'];
console.log("zip  function--->")
b=array.zip(['a',1,'x'],['b',2,'y'],['c',3,'z']);
console.log(b);
console.log("unzipWith function--->")
console.log(array.unzipWith(b, _.add));


a=[1,2,3,88];
console.log("xor function--->")
b=array.xor(a,[88,2,4,5]);
console.log(b);