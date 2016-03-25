/*
 * Student Info: Name=Lo,WeiShun , ID= 13108
 * Subject: CourseNo_HWNo_Summer_2015
 * Author: raliclo
 * Filename: CircularQueue.js
 * Date and Time: Mar 24, 2016 8:24:41 AM
 * Project Name: Javascript-Circular-Queue
 */

'use strict';

//FIFO

var Node = function (input) {
    this.data = input;
};

var CQueue = function () {
    if (this.maxN === undefined) {
        this.Que = new Array(10);
        this.maxN = 10;
    }
    this.head = 0;
    this.count = 0;
    this.tail = 0;
};

CQueue.prototype.resize = function (newsize) {
    var tmp = new Array(newsize);
    for (var i = 0; i < this.count; i++) {
        tmp[i] = this.Que[(this.head + i) % this.maxN];
    }
    this.head = 0;
    this.tail = this.maxN;
    this.maxN = newsize;
    delete this.Que;
    this.Que = tmp;
    return this;
};

CQueue.prototype.enque = function (data) {
    this.count++;
    if (this.count > this.maxN) {
        this.resize(this.maxN * 2);
    }
    var node = new Node(data);
    this.Que[this.tail] = node;
    console.log("Added Queue @" + (this.tail) + " Size:" + this.count);
    this.tail = ((this.tail + 1) % this.maxN);
    return "Added Queue # " + (this.tail - 1);
};

CQueue.prototype.deque = function (data) {
    this.count--;
    console.log("Removed Queue @" + (this.head) + " Size:" + this.count);
    delete this.Que[this.head];
    this.head = (this.head + 1) % this.maxN;
    return "Removed Queue # " + (this.head - 1);
};

var cq = new CQueue();
var show = function (cq) {
    var result = '';
    for (var i in cq.Que) {
//        console.log(cq.Que[i]);
        if (cq.Que[i] !== undefined) {
            result = result + ("Queue#" + i + ":" + cq.Que[i].data + "<br>");
        }
    }
    document.getElementById('arr1').innerHTML = result;
    document.getElementById('maxQue').innerHTML = cq.maxN;
};

window.onload = function () {
    cq.enque('hello1');
    cq.enque('hello2');
    cq.deque();
    cq.enque('hello3');
    cq.enque('hello4');
    cq.enque('hello5');
    cq.enque('hello6');
    cq.deque();
    console.log(cq);
    cq.enque('hello7');
    cq.enque('hello8');
    console.log(cq);
    cq.enque('hello9');
    console.log(cq);
    cq.enque('hello10');
    console.log(cq);
    cq.enque('hello11');
    console.log(cq.Que);
    cq.enque('hello12');
    console.log(cq.Que);
    cq.enque('hello13');
    console.log(cq);
    cq.enque('hello14');
    console.log(cq);
    cq.deque();
    console.log(cq);
    cq.deque();
    console.log(cq);
    show(cq);
};

//cq.enque('hello15');
//console.log(cq);
//cq.enque('hello16');
//console.log(cq);
//cq.enque('hello17');
//console.log(cq);
//cq.enque('hello18');
//console.log(cq);
//cq.enque('hello19');
//console.log(cq);
//cq.enque('hello20');
//console.log(cq);
//cq.enque('hello21');
//console.log(cq);
//cq.enque('hello22');
//console.log(cq);
//cq.enque('hello23');
//console.log(cq);
//cq.enque('hello24');
//console.log(cq);
//cq.enque('hello25');
//console.log(cq);
//
//
//Queue.prototype.enque = function (data) {
//    var node = new Node();
//    node.data = data;
//    if (this.size === 0) {
//        this.head = node;
//        this.size++;
//        return "Queue +1, Queue size :" + this.size;
//    }
//    if (this.size >= 1) {
//        if (this.head.next !== null) {
//            var last = this.head.next;
//            while (last.next !== null) {
//                last = last.next;
//            }
//            last.next = node;
//            this.size++;
//            return "Queue +1, Queue size :" + this.size;
//        } else {
//            this.head.next = node;
//            this.size++;
//            return "Queue +1, Queue size :" + this.size;
//        }
//    }
//};
//
//Queue.prototype.del = function () {
//    if (this.size >= 1) {
//        this.head = this.head.next;
//        this.size--;
//        return "Queue -1, Queue size :" + this.size;
//    }
//    return "Nothing in Queue";
//};
//
