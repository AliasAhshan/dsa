class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(val) {
    var newNode = new Node(val);
    if (this.root === null) {
      this.root = newNode;
      return this;
    } else {
      var current = this.root;
      while (true) {
        if (val === current.value) return undefined;
        if (val < current.value) {
          if (current.left === null) {
            current.left = newNode;
            return this;
          } else {
            current = current.left;
          }
        } else if (val > current.value) {
          if (current.right === null) {
            current.right = newNode;
            return this;
          } else {
            current = current.right;
          }
        }
      }
    }
  }

  // find(val) {
  //   if (this.root === null) return false;
  //   var current = this.root,
  //     found = false;
  //   while (current && !found) {
  //     if (val < current.value) {
  //       current = current.left;
  //     } else if (val > current.value) {
  //       current = current.right;
  //     } else {
  //       found = true;
  //     }
  //   }
  //   if (!found) return undefined;
  //   return current;
  // }

  contains(val) {
    if (this.root === null) return false;
    var current = this.root,
      found = false;
    while (current && !found) {
      if (val < current.value) {
        current = current.left;
      } else if (val > current.value) {
        current = current.right;
      } else {
        return true;
      }
    }
    return false;
  }
}

var tree = new BinarySearchTree();

tree.insert(10);
tree.insert(5);
tree.insert(13);
tree.insert(11);
tree.insert(2);
tree.insert(16);
tree.insert(7);

console.dir(tree, { depth: null });
console.log(tree.contains(10));
