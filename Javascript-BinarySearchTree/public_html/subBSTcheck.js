/*
 * Student Info: Name=Lo,WeiShun , ID= 13108
 * Subject: CourseNo_HWNo_Summer_2015
 * Author: raliclo
 * Filename: subBSTcheck.js
 * Date and Time: Apr 5, 2016 9:26:21 AM
 * Project Name: Javascript-BinarySearchTree
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

//http://collabedit.com/69c7g
//2) You have two very large binary trees: T1, with millions of nodes, and T2, with hundreds
//of nodes. Create an algorithm to decide if T2 is a subtree of T1.

countBST2size = 0;
subBSTcheck = function (BST1, BST2) {
    countBST2size = 0;
    var rootInTree = BST1.findelement(BST2.root);
    if (rootInTree !== false) {
        equalBSTcheck(rootInTree, BST2.root);
        if (countBST2size === BST2.size) {
            return true;
        } else {
            return false;
        }
    }
};

equalBSTcheck = function (root1, root2) {
    countBST2size++;
//    console.log(root1);
//    console.log(root2);
//    console.log(countBST2size);
    if (root1.left !== null && root2.left !== null) {
        equalBSTcheck(root1.left, root2.left);
    }
    if (root1.right !== null && root2.right !== null) {
        equalBSTcheck(root1.right, root2.right);
    }
};


bst4 = new BST();
bst4.add(new Node(2));
bst4.add(new Node(1));
bst5 = new BST();
bst5.add(new Node(5));
bst5.add(new Node(1));
bst6 = new BST();
bst6.add(new Node(9));
bst6.add(new Node(7));
bst6.add(new Node(10));
bst6.add(new Node(11));
bst6.add(new Node(8));

console.log(bst3.findelement(bst4.root));
console.log(bst4);
console.log(subBSTcheck(bst3, bst4));
console.log(subBSTcheck(bst3, bst5));
console.log(subBSTcheck(bst3, bst6));