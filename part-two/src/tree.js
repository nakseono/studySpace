const Tree = function(value) {
  const newTree = {};
  newTree.value = value;
  newTree.children = [];
  extend(newTree, treeMethods);
  return newTree;
};

const treeMethods = {};
treeMethods.addChild = function(value) {
  const tree = new Tree(value);
  this.children.push(tree);
};

treeMethods.contains = function(target) {
  let result = false;
  function container(child) {
    for (let i = 0; i < child.length; i++) {
      if (child[i].value === target) {
        result = true;
      } else {
        container(child[i].children);
      }
    }
  }
  container(this.children);
  return result;
};

const extend = function(to, from) {
  for (const key in from) {
    to[key] = from[key];
  }
};

module.exports = Tree;
