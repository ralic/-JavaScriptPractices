/*
 * Student Info: Name=Lo,WeiShun , ID= 13108
 * Subject: CourseNo_HWNo_Summer_2015
 * Author: raliclo
 * Filename: binarysearchtree.js
 * Date and Time: Mar 29, 2016 7:48:46 AM
 * Project Name: javascript-BinarySearchTree
 */
/*
 * Copyright 2016 raliclo.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/*
 * Tree:
 *       1
 *  4         5
 *7  9    10   11


 Depth First Traversals:
 (a) Inorder
 (b) Preorder
 (c) Postorder

 Algorithm Inorder(tree)
 1. Traverse the left subtree, i.e., call Inorder(left-subtree)
 2. Visit the root.
 3. Traverse the right subtree, i.e., call Inorder(right-subtree)

 Algorithm Preorder(tree)
 1. Visit the root.
 2. Traverse the left subtree, i.e., call Preorder(left-subtree)
 3. Traverse the right subtree, i.e., call Preorder(right-subtree)

 Algorithm Postorder(tree)
 1. Traverse the left subtree, i.e., call Postorder(left-subtree)
 2. Traverse the right subtree, i.e., call Postorder(right-subtree)
 3. Visit the root.
 */


var BST = function () {
    this.root = null;
    this.size = 0;
};
var Node = function (data) {
    this.data = data;
    this.left = null;
    this.right = null;
};
BST.prototype.inorder = function (node) {
    if (node === null) {
        return;
    }
    this.inorder(node.left);
    console.log(node.data);
    this.inorder(node.right);
    return;
};
BST.prototype.preorder = function (node) {
    if (node === null) {
        return;
    }
    console.log(node.data);
    this.preorder(node.left);
    this.preorder(node.right);
};
BST.prototype.postorder = function (node) {
    if (node === null) {
        return;
    }
    this.postorder(node.left);
    this.postorder(node.right);
    console.log(node.data);
};
//http://collabedit.com/mjmeb
BST.prototype.add = function (newnode) {
    this.size++;
    if (this.root === null) {
        this.root = newnode;
    } else {
        var search = this.root;
        while (true) {
            if (search.data > newnode.data) {
                if (search.left !== null) {
                    search = search.left;
                } else {
                    search.left = newnode;
                    return;
                }
            } else if (search.data <= newnode.data)
            {
                if (search.right !== null) {
                    search = search.right;
                } else {
                    search.right = newnode;
                    return;
                }
            }
        }
    }
};

BST.prototype.findlastright = function (node) {
    var search = node;
    while (search.right !== null) {
        search = search.right;
    }
    return search;
};

BST.prototype.findlastleft = function (node) {

};

BST.prototype.findson = function (node) {

};

BST.prototype.del = function (data) {
    var search = this.root;
};


bst = new BST();
//bst.root = new Node(1);
////bst.root.left = new Node(4);
////bst.root.left.left = new Node(7);
////bst.root.left.right = new Node(9);
////bst.root.right = new Node(5);
////bst.root.right.left = new Node(10);
////bst.root.right.right = new Node(11);
bst.inorder(bst.root);
bst.preorder(bst.root);
bst.postorder(bst.root);
bst2 = new BST();
//bst2.add(1);
//bst2.add(4);
//bst2.add(5);
//bst2.add(7);
//bst2.add(9);
//bst2.add(10);
//bst2.add(11);

bst2.add(new Node(7));
bst2.add(new Node(10));
bst2.add(new Node(6));
bst2.add(new Node(11));
bst2.add(new Node(8)); // ??
bst2.add(new Node(3));
bst2.add(new Node(5));
bst2.add(new Node(1));
bst2.add(new Node(4));
bst2.add(new Node(9)); // ??
bst2.add(new Node(2));

