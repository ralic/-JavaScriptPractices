/*
 * Student Info: Name=Lo,WeiShun , ID= 13108
 * Subject: CourseNo_HWNo_Summer_2015
 * Author: raliclo
 * Filename: anytree.js
 * Date and Time: Apr 14, 2016 8:29:40 AM
 * Project Name: javascript-anytree
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

/*
 * 1) Given two binary trees ( not BST) , return true if both of them have same inorder else return false.
 Eg.


 B
 /      \
 A       C

 A
 \
 B
 \
 C
 Both of the trees have same inorder ( A-B-C) hence function will return true

 P.S.
 Please note, we can write inorder method call it once for first tree and then second tree,
 and finally compare both inorder.

 We want to parallely do inorder on both tree, if there is mismatch between
 inorder nodes of both trees, we can stop the traversal and return false
 */
//http://collabedit.com/3u2ty

var Node = function (data) {
    this.data = data;
    this.left = null;
    this.right = null;
//    this.next = null;
};

var Tree = function () {
    this.root = null;
    this.size = 0;
};

var t1 = new Tree();
var t2 = new Tree();

t1.root = new Node("B");
t1.root.left = new Node("A");
t1.root.right = new Node("C");
t1.size = 3;

t2.root = new Node("A");
t2.root.right = new Node("B");
t2.root.right.right = new Node("C");
t2.size = 3;

// inorder Walk 
// -- temporay registered a pointer for inroder walk array.


Tree.prototype.inorder = function (node) {
    if (this.INORDER === undefined) {
        this.INORDER = [];
    }
    if (node === null) {
        return;
    }
    this.inorder(node.left);
    this.INORDER.push(node.data);
//    console.log(node.data);
    this.inorder(node.right);
    return;
};

var findinorder = function (tree) {
    tree.inorder(tree.root);
    ans = tree.INORDER;
    return ans;
};

var compareTree = function (t1, t2) {
    var i = 0;
    if (t1.size === t2.size) {
        var temp1 = findinorder(t1);
        var temp2 = findinorder(t2);
//        console.log(temp1);
//        console.log(temp2);
        while (i < temp1.length) {
            if (temp1[i] !== temp2[i]) {
                delete t1.INORDER;
                delete t2.INORDER;
                return false;
            }
            i++;
        }
    } else {
        delete t1.INORDER;
        delete t2.INORDER;
        return false;
    }
    delete t1.INORDER;
    delete t2.INORDER;
    return true;
};

var beginTime = new Date();
console.log(compareTree(t1, t2));
var endTime = new Date();
console.log("Ralic's Runtime:", endTime - beginTime);

//
//
//
//var compare2 = function (n1, stack1)
//{
//    var res = [];
//    while (n1 !== null || stack1.length > 0)
//    {
//        if (n1)
//        {
//            stack1.push(n1);
//            n1 = n1.left;
//        } else
//        {
//            var f1 = stack1.pop();
//            n1 = f1.right;
//            res.push(f1);
//            res.push(n1);
//            return res;
//        }
//    }
//}
//
//var compare = function (n1, n2)
//{
//    var stack1 = [];
//    var stack2 = [];
//
//    while (n1 !== null || stack1.length > 0)
//    {
//        if (n1)
//        {
//            stack1.push(n1);
//            n1 = n1.left;
//        } else
//        {
//            var f1 = stack1.pop();
//            var res = compare2(n2, stack2);
//            n2 = res[1];
//            if (f1.data != res[0].data)
//                return false;
//            n1 = f1.right;
//        }
//    }
//
//    if (stack1.length === 0 && stack2.length === 0 && n1 === null && n2 === null)
//        return true;
//
//    return false;
//}
//
//var tree = {
//    data: 5,
//    left: {
//        data: 3,
//        left: null,
//        right: null
//    },
//    right: {
//        data: 1,
//        left: null,
//        right: null
//    }
//}
//
//var tree2 = {
//    data: 3,
//    left: null,
//    right: {
//        data: 5,
//        left: null,
//        right: {
//            data: 1,
//            left: null,
//            right: null,
//        }
//    }
//}
//
//
//var beginTime = new Date();
//console.log(compare(tree, tree2));
//var endTime = new Date();
//console.log("Srivats's Runtime:", endTime - beginTime);
//console.log("------------------");
