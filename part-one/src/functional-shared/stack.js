const Stack = function () {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  const someInstance = {
    storage: {},
    count: 0,
  };

  extend(someInstance, stackMethods);
  return someInstance;
};

const stackMethods = {};

stackMethods.push = function (value) {
  this.storage[this.count] = value;
  this.count++;
};

stackMethods.pop = function () {
  if (this.count < 1) {
    return;
  }
  const pullData = this.storage[this.count - 1];

  delete this.storage[this.count - 1];

  this.count--;

  return pullData;
};

stackMethods.size = function () {
  return this.count;
};

var extend = function (to, from) {
  for (const key in from) {
    to[key] = from[key];
  }
};

if (typeof module === 'object' && typeof module.exports === 'object') {
  module.exports = {
    Stack,
    stackMethods,
  };
}
