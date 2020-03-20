const Queue = function() {
  const someInstance = {};

  // Use an object with numeric keys to store values
  const storage = {};

  let count = 0;

  // Implement the methods below

  someInstance.enqueue = function(value) {
    storage[count] = value;
    count++;
  };

  someInstance.dequeue = function() {
    if (count < 1) {
      return;
    }
    var pullData = storage[0];

    for (let i = 1; i < count; i++) {
      storage[i - 1] = storage[i];
    }
    count--;
    return pullData;
  };

  someInstance.size = function() {
    return count;
  };

  return someInstance;
};

if (typeof module === 'object' && typeof module.exports === 'object') {
  module.exports = {
    Queue
  };
}
