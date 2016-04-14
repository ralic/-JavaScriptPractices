/*
 * Student Info: Name=Lo,WeiShun , ID= 13108
 * Subject: CourseNo_HWNo_Summer_2015
 * Author: raliclo
 * Filename: newjavascript.js
 * Date and Time: Apr 7, 2016 10:32:37 AM
 * Project Name: javascript-findroute
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

//2) You are given a binary tree in which each node contains a value. Design an algorithm
//to print all paths which sum up to that value. Note that it can be any path in the tree
//- it does not have to start at the root.

//         7
//    3          5
//  1   4     -1   -8
var t1 = {
    data: 7,
    left: {
        data: 3,
        left: {
            data: 1,
            left: null,
            right: null
        },
        right: {
            data: 4,
            left: {data: 5, left: null, right: null},
            right: {data: 0, left: null, right: null}
        }
    },
    right: {
        data: 5,
        left: {
            data: -1,
            left: null,
            right: null
        },
        right: {
            data: -8,
            left: null,
            right: null
        }
    }
};

// Version-1
//
//var findAllTreePathSums = function (root, target) {
//    var foundPaths = [];
//    clearNodes(root);
//    findPathSum(foundPaths, [], root, target, 0);
//    console.log(target, foundPaths);
//};

//var clearNodes = function (node) {
//    if (node === null) {
//        return;
//    }
//    node.visited = false;
//    clearNodes(node.left);
//    clearNodes(node.right);
//};
//var findPathSum = function (foundPaths, curPath, node, target, curSum) {
//    if (node === null) {
//        return null;
//    }
//    //console.log(curPath, curSum, node.data);
//    curPath.push(node.data);
//    curSum += node.data;
//    if (curSum === target) {
//        foundPaths.push(Object.assign([], curPath));
//    }
//    if (!node.visited) {
//        findPathSum(foundPaths, [], node.left, target, 0);
//        findPathSum(foundPaths, [], node.right, target, 0);
//    }
//    node.visited = true;
//    findPathSum(foundPaths, curPath, node.left, target, curSum);
//    findPathSum(foundPaths, curPath, node.right, target, curSum);
//    curPath.pop();
//};
//
//findAllTreePathSums(t1, 10); // [7,3]
//findAllTreePathSums(t1, 4); // [[3,1], [4], [4,0], [5,-1], [7,5,-8]]


var findAllTreePathSums = function (root, target) {
    var foundPaths = [];
    findPathSum(foundPaths, [], root, target);
    console.log(target, foundPaths);
};

var findPathSum = function (foundPaths, curPath, node, target) {
    if (node === null) {
        return null;
    }
    curPath.push(node.data);
    console.log(curPath);
    var curSum = 0;
    for (var i = curPath.length - 1; i >= 0; i--) {
        curSum += curPath[i];
        if (curSum === target) {
            // Slice is used only to get a copy of the array so it isn't modified.
            foundPaths.push(curPath.slice(i));
        }
    }
    findPathSum(foundPaths, curPath, node.left, target);
    findPathSum(foundPaths, curPath, node.right, target);
    curPath.pop();
};

findAllTreePathSums(t1, 10);  // [7,3]
findAllTreePathSums(t1, 4);   // [[3,1], [4], [4,0], [5,-1], [7,5,-8]]