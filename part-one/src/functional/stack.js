const Stack = function() {
  const someInstance = {};

  // Use an object with numeric keys to store values
  const storage = {};

  var count = 0;

  // Implement the methods below
  someInstance.push = function(value) {
    storage[count] = value;
    count++;
  };

  someInstance.pop = function() {
    if (count < 1) {
      return;
    }

    let pullData = storage[count - 1];

    delete storage[count - 1];

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
    Stack
  };
}
