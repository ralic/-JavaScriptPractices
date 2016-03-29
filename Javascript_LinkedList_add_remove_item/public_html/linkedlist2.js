/*
 * Student Info: Name=Lo,WeiShun , ID= 13108
 * Subject: CourseNo_HWNo_Summer_2015
 * Author: raliclo
 * Filename: linkedlist2.js
 * Date and Time: Mar 28, 2016 9:12:13 AM
 * Project Name: Javascript_LinkedList_add_remove_item
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

//1) Basic linked list
var LinkedList = function () {
    this._head = null;
    this._count = 0;
};

var Node = function () {
    this.data = null;
    this.next = null;
};

LinkedList.prototype = {
    add: function (value) {
        var newnode = new Node();
        newnode.data = value;
        if (this._head !== null) {
            var toadd = this._head;
            while (toadd.next !== null) {
                toadd = toadd.next;
            }
            toadd.next = newnode;
        } else {
            this._head = newnode;
        }
        this._count++;
        console.log("[Info] Added Item - Value:" + value + " ItemCount:" + this._count);
        return this;
    },
    item: function (index) {
        if (this._count === 0) {
            return "Nothing in this LinkedList";
        } else if (index < this._count) {
            var toreturn;
            toreturn = this._head;
            for (var n = 0; n < index; n++) {
                toreturn = toreturn.next;
            }
            return toreturn;
        }
        console.log("[Info] Invalid Operation : Index too large," + " Index:" + index + " ItemCount:" + this._count);
        return false;
    },
    remove: function (index) {
//        var self = this;
        if (this._count === 0) {
            console.log("[INFO] Nothing in this LinkedList");
            return this;
        } else if (this._count === 1 && index === 0) {
            var todel = this._head;
            this._head = null;
            this._count = 0;
            delete this.todel;
            console.log("[INFO] Removed the last item");
            return this;
        }
        // version1 Find tojump / todel item only loop once.
        else if (this._count > 1) {
            if (index === 0) {
                var todel = this._head;
                this._head = this._head.next;
                delete this.todel;
                this._count--;
                return this;
            } else if (index < this._count) {
                var tojump = this._head;
                var todel = tojump.next;
                for (var n = 1; n < index; n++) {
                    tojump = tojump.next;
                    todel = tojump.next;
                }
                //                console.log("tojump node before remove");
                //                console.log(tojump);
                //                console.log("todel node before remove");
                //                console.log(todel);
                tojump.next = todel.next;
                //            console.log("tojump node after remove");
                //            console.log(tojump);
                //            console.log(tojump.next);
                delete this.todel;
                this._count--;
                return this;
            }


            // version 2 Loop tojump/todel by using this.item(loop) twice
//        else if (this.item(index) !== false) {
//            if (index === 0) {
//                var todel = this._head;
//                this._head = this._head.next;
//                delete this.todel;
//                this._count--;
//                return this;
//            } else {
//                var tojump = this.item(index - 1);
//            }
//            var todel = tojump.next;
//            tojump.next = todel.next;
//            delete this.todel;
//            this._count--;
//            return this;

        }
        console.log("[Info] Invalid Operation : Index too large," + " Index:" + index + " ItemCount:" + this._count);
        return false;
    }
};
//
// Test for add
//
var linkedList = new LinkedList();
linkedList.add('coffee');
linkedList.add('coke');
linkedList.add('pepsi');
linkedList.add('milk');
linkedList.add('water');
console.log(linkedList);
//console.log(linkedList.item(2));
//console.log(linkedList.remove(2));
//console.log(linkedList.item(2));
//console.log(linkedList.remove(0));
//console.log(linkedList.item(0));
//
// Test add and remove for one unit;
//
var k = new LinkedList();
k.add('test');
k.add('test2');

k.item(3);
k.item(2);
k.item(1);
k.item(0);

k.remove(3);
k.remove(2);
k.remove(1);
k.remove(0);
console.log(k);