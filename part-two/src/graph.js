// Instantiate a new graph
const Graph = function() {
  this.node = {};
  this.edge = {};
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  this.node[node] = node;
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  for (let key in this.node) {
    if (this.node[key] === node) {
      return true;
    }
    return false;
  }
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  this.removeEdge(this.edge[node], node);
  for (let key in this.node) {
    if (this.node[key] === node) {
      delete this.node[key];
    }
  }
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  for (let key in this.edge) {
    if (
      (key === fromNode.toString() && this.edge[key] === toNode) ||
      (key === toNode.toString() && this.edge[key] === fromNode)
    ) {
      return true;
    }
  }
  return false;
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  this.edge[fromNode] = toNode;
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  for (let key in this.edge) {
    if (
      (key === fromNode.toString() && this.edge[key] === toNode) ||
      (key === toNode.toString() && this.edge[key] === fromNode)
    ) {
      delete this.edge[key];
    }
  }
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  for (let key in this.node) {
    cb(this.node[key], key, this.node);
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */

module.exports = Graph;

/* 
this.edge = {
    "fromNode": toNode,
    "toNode" :fromNode
} 
*/
