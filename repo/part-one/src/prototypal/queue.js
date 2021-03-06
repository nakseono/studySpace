const Queue = function () {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  const someInstance = Object.create(queueMethods);

  someInstance.storage = {};
  someInstance.count = 0;

  return someInstance;
};

const queueMethods = {};

queueMethods.enqueue = function (value) {
  this.storage[this.count] = value;
  this.count++;
};

queueMethods.dequeue = function () {
  if (this.count < 1) {
    return;
  }
  const pullData = this.storage[0];

  for (let i = 1; i < this.count; i++) {
    this.storage[i - 1] = this.storage[i];
  }
  this.count--;
  return pullData;
};

queueMethods.size = function () {
  return this.count;
};

module.exports = {
  Queue,
  queueMethods,
};
