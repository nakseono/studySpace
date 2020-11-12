/* CODE GOES HERE
 * Don't forget newlines at the end of all files :) */
var Queue = function() {
  this.storage = {};
  this.count = 0;
};

Queue.prototype.add = function(value) {
  this.storage[this.count] = value;
  this.count++;
};

Queue.prototype.remove = function() {
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

module.exports = Queue;