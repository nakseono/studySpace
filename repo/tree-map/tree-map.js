/**
 *
 * Implement a `addChild` and map` method on this Tree class, using psuedoclassical instantiation.
 *
 * Map accepts a mapping function as its only argument. It traverses the tree,
 * passing each node's value into the mapping function, and generates a new
 * tree containing the results.
 *
 * So `map` should return a tree with the same structure, and different values,
 * but it should NOT modify the tree that was passed in.
 *
 * Example:
 *   var root1 = new Tree(1);
 *   var branch2 = root1.addChild(2);
 *   var branch3 = root1.addChild(3);
 *   var leaf4 = branch2.addChild(4);
 *   var leaf5 = branch2.addChild(5);
 *   var leaf6 = branch3.addChild(6);
 *   var leaf7 = branch3.addChild(7);
 *   var newTree = root1.map(function (value) {
 *     return value * 2;
 *   })
 *  newTree.value // 2
 *  newTree.children[0].value // 4
 *  newTree.children[1].value // 6
 *  newTree.children[0].children[1].value // 10
 *  newTree.children[1].children[1].value // 14
 *  root1.value // still 1
 */

var Tree = function(value) {
  this.value = value;
  this.children = [];
};

Tree.prototype.addChild = function(child) {
<<<<<<< HEAD
  // your code here
};

Tree.prototype.map = function(callback) {
  // your code here
=======
  const tree = new Tree(child);
  this.children.push(tree);
};

Tree.prototype.map = function(callback) {
  // callback을 사용할 새로운 트리를 하나 만든다.
  var newTree = new Tree();

  // 루트 노드에 callback 함수를 먼저 돌린다.
  newTree.value = callback(this.value);


  // 자식 노드가 존재한다면 ? -> 자식 노드들에다 callback 돌려야함.
  // so, for문을 통해 모든 자식 노드들 하나하나에 돌리자.
  if(this.children[0] !== null){
    for (let i = 0; i < this.children.length; i++){
      // 여기서 i의 크기를 this.children.length 로 정의하는 이유는 원본 tree의 자식을 모두 가져오기 위해서!
      newTree.children[i] = this.children[i].map(callback);
    }
  }
  return newTree;
>>>>>>> project/master
};

module.exports = Tree;
