const LinkedList = function () {
  const list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function (value) {
    const newNode = new Node(value);

    if (this.head === null) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    return newNode;
  };

  list.removeHead = function () {
    const newHead = this.head.next;

    const removeValue = this.head;
    removeValue.next = null;

    this.head = newHead;

    return removeValue.value;
  };

  list.contains = function (target) {
    let current = this.head;

    while (current) {
      if (current.value === target) {
        return true;
      }
      current = current.next;
    }
    return false;
  };

  return list;
};

const Node = function (value) {
  this.value = value;
  this.next = null;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
module.exports = LinkedList;
