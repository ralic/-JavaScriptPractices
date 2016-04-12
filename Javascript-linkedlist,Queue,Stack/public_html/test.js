/*
 * Student Info: Name=Lo,WeiShun , ID= 13108
 * Subject: CourseNo_HWNo_Summer_2015
 * Author: raliclo
 * Filename: newjavascript.js
 * Date and Time: Mar 17, 2016 9:01:48 AM
 * Project Name: HTML5Application
 */

'use strict';

var ss = new Stack();
ss.push(1);
ss.push(2);
ss.push(3);
ss.push(4);
ss.push(5);
ss.push(6);
ss.push(7);
ss.pop();
ss.pop();
ss.pop();

//console.log(ss.size);
//console.log(ss);
var result = ss.find(2);
console.log(result);

var result = ss.find(9);
console.log(result);

var qq = new Queue1();
qq.add(1);
qq.add(2);
qq.add(3);
qq.add(4);
qq.del();
qq.del();
qq.del();


var qq2 = new Queue2();
qq2.add(1);
qq2.add(2);
qq2.add(3);
qq2.add(4);
qq2.add(5);
qq2.add(6);
qq2.add(7);
console.log(qq2.find(3));
//qq2.del();
//qq2.del();
//qq2.del();
//qq2.del();
//qq2.del();
//qq2.del();
//qq2.del();
console.log(qq2);