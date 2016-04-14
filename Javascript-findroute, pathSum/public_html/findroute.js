/*
 * Student Info: Name=Lo,WeiShun , ID= 13108
 * Subject: CourseNo_HWNo_Summer_2015
 * Author: raliclo
 * Filename: findroute.js
 * Date and Time: Apr 7, 2016 8:37:20 AM
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


//http://collabedit.com/rdc48

//1) Given a directed graph, design an algorithm to find out whether there is a route between
//two nodes.

//
// Ravi
//
//        let doesPathExist = function(graph, startNode, endNode) {
//        for (let i = 0; i < graph.nodes.length; i++) {
//        graph.nodes[i].visited = false;
//        }
//        let frontier = [startNode];
//                startNode.visited = true;
//                while (frontier.length != 0) {
//        let next = [];
//                for (let i = 0; i < frontier.length; i++) {
//        let curNode = frontier[i];
//                // console.log(`check curNode ${curNode.val} neighbors ${curNode.neighbors.map(node => node.val)}`);
//                if (curNode === endNode) {
//        return true;
//        }
//        for (let j = 0; j < curNode.neighbors.length; j++) {
//        let neighbor = curNode.neighbors[j];
//                if (!neighbor.visited) {
//        neighbor.visited = true;
//                next.push(neighbor);
//        }
//        }
//        }
//        frontier = next;
//        }
//        return false;
//                }
//
//let A = {
//  val: 3,
//  neighbors: []
//}
//let B = {
//  val: 5,
//  neighbors: []
//}
//let C = {
//  val: 4,
//  neighbors: []
//}
//let D = {
//  val: 9,
//  neighbors: []
//}
//let E = {
//  val: 2,
//  neighbors: []
//}
//let F = {
//  val: 10,
//  neighbors: []
//}
//A.neighbors = [C, E];
//B.neighbors = [A, E, C];
//C.neighbors = [B];
//D.neighbors = [A];
//E.neighbors = [D];
//let graph = {
//  nodes: [A, B, C, D, E, F]
//}
//
//console.log(doesPathExist(graph, A, C));
//console.log(doesPathExist(graph, A, D));
//console.log(doesPathExist(graph, D, E));
//console.log(doesPathExist(graph, A, F));  // Be careful of cycles!

//"use strict";
var gNode = function (val, neighbors) {
    this.val = val;
    this.neighbors = neighbors;
};
var A = new gNode(3, []);
var B = new gNode(5, []);
var C = new gNode(4, []);
var D = new gNode(9, []);
var E = new gNode(2, []);
var F = new gNode(10, []);
A.neighbors = [C, E];
B.neighbors = [A, E, C];
C.neighbors = [B];
D.neighbors = [A];
E.neighbors = [D];
var graph = function () {
    this.nodes = [A, B, C, D, E, F];
    return this.nodes;
};
k = graph();
var popCheckerArr = function (graph) {
    return new Array(graph.length).fill(0);
};
var checker = [];
var count = 0;
var doesPathExist = function (graph, startNode, endNode) {
    // Initialize checker array;
    if (checker.length === 0) {
        count = 0;
        checker = popCheckerArr(graph);
    }
    var marker = function (graph, gnode) {
        for (var i in graph) {
//            console.log(graph[i]);
            if (gnode === graph[i]) {
//                console.log("Marked", gnode, graph[i], checker[i]);
                checker[i] += 1;
                return checker[i];
            }
        }
        return false;
    };
//    console.log("start", startNode);
//    console.log("end", endNode);
//    marker(k, A);
//    console.log(checker);

    // If start = end , return true, else , check all neighbors
    if (startNode === endNode) {
        console.log("There is an end way1", startNode, endNode);
//  Reset checker array for next graph set.
        checker = [];
        return true;
    } else {
        for (var i in startNode.neighbors) {
//        console.log("start.neighbors[" + i + "]", startNode.neighbors[i], "EndNode", endNode);
// Every gNode can be only visited once
            if (marker(k, startNode.neighbors[i]) < 2) {
                return doesPathExist(graph, startNode.neighbors[i], endNode);
            }
        }
    }
    return false;
};
console.log("Test1", doesPathExist(k, A, C));
console.log("Test2", doesPathExist(k, A, D));
console.log("Test3", doesPathExist(k, D, E));
console.log("Test4", doesPathExist(k, A, F));
