/*
 * Student Info: Name=Lo,WeiShun , ID= 13108
 * Subject: CourseNo_HWNo_Summer_2015
 * Author: raliclo
 * Filename: minimumbinary.js
 * Date and Time: Apr 4, 2016 8:12:17 AM
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

//
//1) Given a sorted array, write an algorithm to create a binary search tree with minimal height
//
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes
//http://collabedit.com/np8xk

var sortedA = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

//
// Following function will build a balanced tree for sorted array.
//
BST.prototype.mintree = function (list, entry, end) {
    if (this.size < list.length) {
        var newentry = Math.floor((entry + end) / 2);
        console.log("Added:", list[newentry]);
        this.add(new Node(list[newentry]));
        var nextI = newentry + 1;
        var prevI = newentry - 1;
        console.log("entry", entry, "prevI", prevI, "newentry", newentry, "nextI", nextI, "end", end);
        // right part
        if (nextI < end) {
            this.mintree(list, newentry, end);
        }
        // left part
        if (prevI > entry) {
            this.mintree(list, entry, newentry);
        }
        if (prevI === 0) {
            this.add(new Node(list[prevI]));
        }
    }
};

var bst3 = new BST();
bst3.mintree(list, 0, list.length);
console.log(bst3);
bst3.inorder(bst3.root);
//bst3.add();
// Tree built
//           6
//      3          9
//   2    4     7    10
// 1        5     8     11