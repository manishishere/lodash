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

function Foo() {
  this.c = 3;
}

function Bar() {
  this.e = 5;
}

Foo.prototype.d = 4;
Bar.prototype.f = 6;

cc =_.assign({ 'a': 1 }, new Foo, new Bar);

console.log(cc);


function customizer(objValue, srcValue) {
  return _.isUndefined(objValue) ? srcValue : objValue;
}

var defaults = _.partialRight(_.assignWith, customizer);

defaults({ 'a': 1 }, { 'b': 2 }, { 'a': 3 });

console.log(defaults);


var object = { 'a': [{ 'b': { 'c': 3 } }, 4] };

_.at(object, ['a[0].b.c', 'a[1]']);
// → [3, 4]

_.at(['a', 'b', 'c'], 0, 2);

console.log(object);

function Shape() {
  this.x = 0;
  this.y = 0;
}

function Circle() {
  Shape.call(this);
}

Circle.prototype = _.create(Shape.prototype, {
  'constructor': Circle
});

var circle = new Circle;
circle instanceof Circle;
// → true

circle instanceof Shape;

_.defaults({ 'user': 'barney' }, { 'age': 36 }, { 'user': 'fred' });

_.defaultsDeep({ 'user': { 'name': 'barney' } }, { 'user': { 'name': 'fred', 'age': 36 } });

var users = {
  'barney':  { 'age': 36, 'active': true },
  'fred':    { 'age': 40, 'active': false },
  'pebbles': { 'age': 1,  'active': true }
};

_.findKey(users, function(o) { return o.age < 40; });
// → 'barney' (iteration order is not guaranteed)

// The `_.matches` iteratee shorthand.
_.findKey(users, { 'age': 1, 'active': true });
// → 'pebbles'

// The `_.matchesProperty` iteratee shorthand.
_.findKey(users, ['active', false]);
// → 'fred'

// The `_.property` iteratee shorthand.
_.findKey(users, 'active');
// → 'barney'


var users = {
  'barney':  { 'age': 36, 'active': true },
  'fred':    { 'age': 40, 'active': false },
  'pebbles': { 'age': 1,  'active': true }
};

_.findLastKey(users, function(o) { return o.age < 40; });
// → returns 'pebbles' assuming `_.findKey` returns 'barney'

// The `_.matches` iteratee shorthand.
_.findLastKey(users, { 'age': 36, 'active': true });
// → 'barney'

// The `_.matchesProperty` iteratee shorthand.
_.findLastKey(users, ['active', false]);
// → 'fred'

// The `_.property` iteratee shorthand.
_.findLastKey(users, 'active');
// → 'pebbles'

function Foo() {
  this.a = 1;
  this.b = 2;
}

Foo.prototype.c = 3;

_.forIn(new Foo, function(value, key) {
  console.log(key);
});

function Foo() {
  this.a = 1;
  this.b = 2;
}

Foo.prototype.c = 3;

_.forInRight(new Foo, function(value, key) {
  console.log(key);
});

function Foo() {
  this.a = 1;
  this.b = 2;
}

Foo.prototype.c = 3;

_.forOwn(new Foo, function(value, key) {
  console.log(key);
});


function Foo() {
  this.a = 1;
  this.b = 2;
}

Foo.prototype.c = 3;

_.forOwnRight(new Foo, function(value, key) {
  console.log(key);
})


function Foo() {
  this.a = _.constant('a');
  this.b = _.constant('b');
}

Foo.prototype.c = _.constant('c');

_.functions(new Foo);
// → ['a', 'b']


function Foo() {
  this.a = _.constant('a');
  this.b = _.constant('b');
}

Foo.prototype.c = _.constant('c');

_.functionsIn(new Foo);
var object = { 'a': [{ 'b': { 'c': 3 } }] };

console.log(_.get(object, 'a[0].b.c'));
// → 3

console.log(_.get(object, ['a', '0', 'b', 'c']));
// → 3

console.log(_.get(object, 'a.b.c', 'default'));
// → 'default'

var object = { 'a': { 'b': { 'c': 3 } } };
var other = _.create({ 'a': _.create({ 'b': _.create({ 'c': 3 }) }) });

_.has(object, 'a');
// → true

console.log(_.has(object, 'a.b.c'));
// → true

_.has(object, ['a', 'b', 'c']);
// → true

console.log(_.has(other, 'a'));
// → false


var object = _.create({ 'a': _.create({ 'b': _.create({ 'c': 3 }) }) });

console.log(object);
_.hasIn(object, 'a');
// → true

_.hasIn(object, 'a.b.c');
// → true
console.log(object);
_.hasIn(object, ['a', 'b', 'c']);
// → true

_.hasIn(object, 'b');
// → false


var object = { 'a': 1, 'b': 2, 'c': 1 };

_.invert(object);
// → { '1': 'c', '2': 'b' }

console.log(object);
var object = { 'a': 1, 'b': 2, 'c': 1 };

_.invertBy(object);
// → { '1': ['a', 'c'], '2': ['b'] }
console.log(object);
_.invertBy(object, function(value) {
  return 'group' + value;
});


var object = { 'a': [{ 'b': { 'c': [1, 2, 3, 4] } }] };

_.invoke(object, 'a[0].b.c.slice', 1, 3);
// → [2, 3]


function Foo() {
  this.a = 1;
  this.b = 2;
}

Foo.prototype.c = 3;

_.keys(new Foo);
// → ['a', 'b'] (iteration order is not guaranteed)

_.keys('hi');
// → ['0', '1']

function Foo() {
  this.a = 1;
  this.b = 2;
}

Foo.prototype.c = 3;

_.keysIn(new Foo);
// → ['a', 'b', 'c'] (iteration order is not guaranteed)

_.mapKeys({ 'a': 1, 'b': 2 }, function(value, key) {
  return key + value;
});

console.log(object);