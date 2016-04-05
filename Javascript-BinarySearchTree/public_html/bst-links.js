/*
 * Student Info: Name=Lo,WeiShun , ID= 13108
 * Subject: CourseNo_HWNo_Summer_2015
 * Author: raliclo
 * Filename: bst-links.js.js
 * Date and Time: Apr 5, 2016 8:17:13 AM
 * Project Name: Javascript-BinarySearchTree-Links
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

//http://collabedit.com/69c7g
//Given a binary search tree, design an algorithm which creates a linked list of all the
//nodes at each depth (i.e., if you have a tree with depth D, you’ll have D linked lists).

// To be continued
var level = 0;
BST.prototype.bstlink = function (node, prev, level) {
    var search = node;
    if (search === this.root) {
        level = 0;
        result = [];
        console.log("Level", level, "Data", search.data);
    }
    if (search.left !== null || search.right !== null) {
        level++;
        if (search.left !== null) {
            console.log("Level", level, "Data", search.left.data);
            this.bstlink(search.left, search, level);
        }
        if (search.right !== null) {
            console.log("Level", level, "Data", search.right.data);
            this.bstlink(search.right, search, level);
        }
    }
};

bst3.bstlink(bst3.root, bst3.root, 0);
console.log(bst3)