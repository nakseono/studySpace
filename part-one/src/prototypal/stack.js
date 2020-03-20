const Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = Object.create(stackMethods);

  someInstance.storage = {};
  someInstance.count = 0;

  return someInstance;
};

const stackMethods = {};

stackMethods.push = function(value) {
  this.storage[this.count] = value;
  this.count++;
};

stackMethods.pop = function() {
  if (this.count < 1) {
    return;
  }
  let pullData = this.storage[this.count - 1];

  delete this.storage[this.count - 1];

  this.count--;

  return pullData;
};

stackMethods.size = function() {
  return this.count;
};

module.exports = {
  Stack,
  stackMethods
};
