/*
 * Student Info: Name=Lo,WeiShun , ID= 13108
 * Subject: CourseNo_HWNo_Summer_2015
 * Author: raliclo
 * Filename: links.js.js
 * Date and Time: Mar 17, 2016 8:17:43 AM
 * Project Name: JsLibrary
 */

'use strict';
//LIFO
var Stack = function () {
    this.currentP = null;
    this.size = 0;
};

var Node = function (input) {
    this.data = input;
    this.next = null;
};

Stack.prototype = {
    push: function (data) {
        var node = new Node();
        node.data = data;
        node.next = this.currentP;
        this.currentP = node;
        this.size++;
        return "Stack Pushed +1, value=" + node.data + ",size:" + this.size;
    },
    pop: function () {
        if (this.size > 1) {
            this.currentP = this.currentP.next;
            this.size--;
            return "Stack Poped -1, value =" + this.currentP.data + ",size:" + this.size;
        }
        return "Nothing in Stack for pop";
    }
};

//FIFO
var Queue = function () {
    this.size = 0;
    this.head = null;
};

Queue.prototype.add = function (data) {
    var node = new Node();
    node.data = data;
    if (this.size === 0) {
        this.head = node;
        this.size++;
        return "Queue +1, Queue size :" + this.size;
    }
    if (this.size >= 1) {
        if (this.head.next !== null) {
            var last = this.head.next;
            while (last.next !== null) {
                last = last.next;
            }
            last.next = node;
            this.size++;
            return "Queue +1, Queue size :" + this.size;
        } else {
            this.head.next = node;
            this.size++;
            return "Queue +1, Queue size :" + this.size;
        }
    }
};

Queue.prototype.del = function () {
    if (this.size >= 1) {
        this.head = this.head.next;
        this.size--;
        return "Queue -1, Queue size :" + this.size;
    }
    return "Nothing in Queue";
};
