/*
 * Student Info: Name=Lo,WeiShun , ID= 13108
 * Subject: CourseNo_HWNo_Summer_2015
 * Author: raliclo
 * Filename: Queue1.js.js
 * Date and Time: Apr 12, 2016 2:58:34 PM
 * Project Name: Javascript-linkedlist_Queue1_Stack
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
//Double pointer Queue
//
//FIFO

var Node = function (data) {
    this.data = data;
    this.next = null;
};

var Queue1 = function () {
    this.size = 0;
    this.first = null;
};

Queue1.prototype.add = function (data) {
    var node = new Node();
    node.data = data;
    if (this.size === 0) {
        this.first = node;
        this.size++;
        return "Queue1 +1, Queue1 size :" + this.size;
    }
    if (this.size >= 1) {
        if (this.first.next !== null) {
            var last = this.first.next;
            while (last.next !== null) {
                last = last.next;
            }
            last.next = node;
            this.size++;
            return "Queue1 +1, Queue1 size :" + this.size;
        } else {
            this.first.next = node;
            this.size++;
            return "Queue1 +1, Queue1 size :" + this.size;
        }
    }
};

Queue1.prototype.del = function () {
    if (this.size >= 1) {
        this.first = this.first.next;
        this.size--;
        return "Queue1 -1, Queue1 size :" + this.size;
    }
    return "Nothing in Queue1";
};
