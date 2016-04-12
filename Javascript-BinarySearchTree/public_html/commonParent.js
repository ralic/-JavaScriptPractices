/*
 * Student Info: Name=Lo,WeiShun , ID= 13108
 * Subject: CourseNo_HWNo_Summer_2015
 * Author: raliclo
 * Filename: commonParent.js
 * Date and Time: Apr 12, 2016 8:14:35 AM
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


/* global BST */

//1) Design an algorithm and write code to find the first common ancestor of
//two nodes in a binary tree. Avoid storing any additional nodes in the data structure.
//Note: This is not necessarily a binary search tree.

// Tree built
//           6
//      3          9
//   2    4     7    10
// 1        5     8     11
// commonParent(1,5)= 3
// commonParent(1,8)= 6
// commonParent(3,5)= 3
//http://collabedit.com/e4p67


//commonParent(new Node(3), new Node(5));

BST.prototype.findNode = function (node, data) {
    var search = node;
    while (true) {
        if (search.data === data) {
            return search;
        } else if (search.data > data) {
            if (search.left !== null) {
                search = search.left;
            } else {
                return null;
            }
        } else if (search.data < data)
        {
            if (search.right !== null) {
                search = search.right;
            } else {
                return null;
            }
        }
    }
    return null;
};


//
// Assume data2 > data1
//

BST.prototype.commonParent = function (node, data1, data2) {
    var search = node;
    var nd1 = this.findNode(search, data1);
    var nd2 = this.findNode(search, data2);
    var count = 0;
    if (nd1 !== null) {
        count++;
    }
    if (nd2 !== null) {
        count++;
    }
    if (count === 2) {
        commonParent.push(node);
        if (search.left !== null) {
            this.commonParent(search.left, data1, data2);
        }
        if (search.right !== null) {
            this.commonParent(search.right, data1, data2);
        }
    }
    if (count !== 2) {
        return commonParent;
    }
//    console.log(node);
//    console.log(count);
};

//
// Usage: getParents( BST, data1, data2)
// Results : Print all possible common parents, and smallest parent
//
getParents = function (BST, data1, data2) {
    commonParent = [];
    BST.commonParent(BST.root, data1, data2);
    console.log("All possible common parents are : ");
    console.log(commonParent);
    console.log("The smallest parent is");
    console.log(commonParent[commonParent.length - 1]);
    delete commonParent;
};

getParents(bst3, 2, 4);