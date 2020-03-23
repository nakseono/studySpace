const LinkedList = function() {
  const list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    let newNode = new Node(value);

    if (this.head === null) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail = newNode;
      this.tail.next = newNode;
    }
    return newNode;
  };

  list.removeHead = function() {
    var newHead = this.head.next;

    var removeValue = this.head;
    removeValue.next = null;

    this.head = newHead;

    return removeValue.value;
  };

  list.contains = function(target) {
    var current = this.head;

    while (current) {
      if (current.value === target) {
        return true;
      } else {
        current = current.next;
      }
    }
    return false;
  };

  return list;
};

const Node = function(value) {
  this.value = value;
  this.next = null;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
module.exports = LinkedList;
