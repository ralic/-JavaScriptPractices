/*
 * Student Info: Name=Lo,WeiShun , ID= 13108
 * Subject: CourseNo_HWNo_Summer_2015
 * Author: raliclo
 * Filename: LinkedListDeepCopy.js.js
 * Date and Time: Jun 29, 2016 11:02:50 AM
 * Project Name: Javascript-linkedlist_Queue_Stack
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



//2) Deep copy a linked list, where the node has the next and random pointers.
//        As an example linked list below, copy it to a new linked list
//        Root - > nodeA - > nodeB - > nodeC - > nodeD
//        nodeA.random - > nodeC                      nodeD.random - > nodeA


// linkedList structure
// var nodeD = {
//     value: 12,
//     next: null,
//     random: nodeA
// };

// var nodeC = {
//     value: 18,
//     next: nodeD,
//     random: null
// };

// var nodeB = {
//     value: 74,
//     next: nodeC,
//     random: null
// };

// var nodeA = {
//     value: 465,
//     next: nodeB,
//     random: nodeC
// };
// Ralic solution for Q2.

var Node = function (value, next, random) {
    this.value = value;
    this.next = next;
    this.random = random;
};

var LinkedList = function () {
    this.root = null;
    this.counter = 0;
};

nodeD = new Node(12, null, nodeA);
nodeC = new Node(18, nodeD, null);
nodeB = new Node(74, nodeC, null);
nodeA = new Node(465, nodeB, nodeC);

link1 = new LinkedList();
link1.root = nodeA;
link1.counter = 4;

var duplinknext = function (link1) {
    var node1 = link1.root;
    var link2 = new LinkedList();
    link2.root = new Node(node1.value, null, null);
    link2.counter++;
    var node2 = link2.root;
    while (node1.next !== null) {
        node1 = node1.next;
        node2.next = new Node(node1.value, null, null);
        node2 = node2.next;
        link2.counter++;
    }
    node1 = link1.root;
    node2 = link2.root;
    while (node1.next !== null) {
        if (node1.random !== null) {
            node2Ran = findnode(node1, node2, node1.random.value);
            node2.random = node2Ran;
        }
        node1 = node1.next;
        node2 = node2.next;
    }
    return link2;
};

var findnode = function (node1, node2, value) {
    while (node1.value !== value) {
        node1 = node1.next;
        node2 = node2.next;
    }
    return node2;
};
link2 = duplinknext(link1);