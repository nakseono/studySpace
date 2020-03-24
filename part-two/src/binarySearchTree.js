const BinarySearchTree = function (value) {
  const newTree = Object.create(newTreeMethods);
  newTree.value = value;
  newTree.left = null;
  newTree.right = null;

  return newTree;
};

const newTreeMethods = {};

newTreeMethods.insert = function (value) {
  const node = new BinarySearchTree(value);

  const nodeAdd = function (target) {
    if (target.value <= node.value) {
      if (target.left === null) {
        target.left = node;
      } else {
        nodeAdd(target.left);
      }
    } else if ((target.right = null)) {
      target.right = node;
    } else {
      nodeAdd(target.right);
    }
  };

  nodeAdd(this);
};

newTreeMethods.contains = function(target){
  const container = function(some){
    if(some.value >= target){
      if(some.left.value === target){
        return true;
      } else {
        container(some.left.value);
      }
    } else {
      if(some.right.value === target){
        return true;
      } else {
        container(some.right.value);
      }
    } 
  }
  container(this);
  return false;
};


newTreeMethods.depthFirstLog = fucntion(func){
  function myFunc(some) {
    if(some.value !== null){
      func(some.value);
        if(some.left !== null){
          myFunc(some.left);
        } 
        if(some.right !== null){
          myFunc(some.right);
        }
    }
  }
  myFunc(this);
};
  


/*
 * Complexity: What is the time complexity of the above functions?
 */

module.exports = BinarySearchTree;
