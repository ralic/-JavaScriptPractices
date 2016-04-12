/*
 * Student Info: Name=Lo,WeiShun , ID= 13108
 * Subject: CourseNo_HWNo_Summer_2015
 * Author: raliclo
 * Filename: Stack.js
 * Date and Time: Apr 12, 2016 2:58:27 PM
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


'use strict';

var Node = function (data) {
    this.data = data;
    this.next = null;
};

//LIFO
var Stack = function () {
    this.size = 0;
    this.last = null;
};

Stack.prototype = {
    push: function (data) {
        var node = new Node(data);
        node.next = this.last;
        this.last = node;
        this.size++;
        return "Stack Pushed +1, value=" + node.data + ",size:" + this.size;
    },
    pop: function () {
        if (this.size > 1) {
            this.last = this.last.next;
            this.size--;
            return "Stack Poped -1, value =" + this.last.data + ",size:" + this.size;
        }
        return "Nothing in Stack for pop";
    }
};

//
// Usage: Search Stack from top, with specify sequence of element
// Syntax : Stack.find(num)
// Parameter: num starts from 0, maximu of num has to be less than queue.size
//
//
Stack.prototype.find = function (num) {
    if (this.size <= num) {
        return "Out of range, Stack has only " + this.size + " elements";
    }
    if (num < 0) {
        return "You are searching Negative number";
    }
    var count = 0;
    var search = this.last;
    while (count++ < num) {
//        console.log(search);
        search = search.next;
    }
    return search;
};
