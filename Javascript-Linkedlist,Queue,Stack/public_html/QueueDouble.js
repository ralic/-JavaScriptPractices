/*
 * Student Info: Name=Lo,WeiShun , ID= 13108
 * Subject: CourseNo_HWNo_Summer_2015
 * Author: raliclo
 * Filename: Queue2.js.js
 * Date and Time: Apr 12, 2016 2:58:34 PM
 * Project Name: Javascript-linkedlist_Queue2_Stack
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

'use strict';
//
//Single pointer Queue
//
//FIFO

var Node = function (data) {
    this.data = data;
    this.next = null;
};

var Queue2 = function () {
    this.size = 0;
    this.first = null;
    this.last = null;
};

Queue2.prototype.add = function (data) {
    var node = new Node();
    node.data = data;
    if (this.size === 0) {
        this.first = node;
        this.last = node;
    }
    if (this.size === 1) {
        this.first.next = node;
        this.last = this.first.next;

    }
    if (this.size >= 1) {
        this.last.next = node;
        this.last = this.last.next;
    }
    this.size++;
    return "Queue2 +1, Queue2 size :" + this.size;
};

Queue2.prototype.del = function () {
    if (this.size === 0) {
        return "Nothing in Queue2";
    }
    if (this.size === 1) {
        this.first = null;
        this.last = null;
    }
    if (this.size > 1) {
        this.first = this.first.next;
    }
    this.size--;
    return "Queue2 -1, Queue2 size :" + this.size;
};



//
// Usage: Search Stack from top, with specify sequence of element
// Syntax : Queue2.find(num)
// Parameter: num starts from 0, maximu of num has to be less than queue.size
//
Queue2.prototype.find = function (num) {
    if (this.size <= num) {
        return "Out of range, Queue has only " + this.size + " elements";
    }
    if (num < 0) {
        return "You are searching Negative number";
    }
    var count = 0;
    var search = this.first;
    while (count++ < num) {
        search = search.next;
    }
    return search;
};