/*
 * Student Info: Name=Lo,WeiShun , ID= 13108
 * Subject: CourseNo_HWNo_Summer_2015
 * Author: raliclo
 * Filename: NeedleInHack.js
 * Date and Time: Jun 30, 2016 9:23:48 AM
 * Project Name: Javascript-factorial-zero
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

//1) Needle in a Haystack
//
//Given a string, return the first index of the first occurrence of
//the string in another string. Return -1 if the needle is not present in the haystack.
//Do not use string methods like indexOf(), substring(), etc.
//Assume you are building the library of string functions, so they don't exist yet.
//Test several test cases such as:
//Haystack: ‘I like to walk my dog on the beach.’ needle: dog
//Haystack: 'abababc' needle = 'ababc'
//What is the time complexity of the implementation? var haystack = "burger and fries";
//
//var needle = 'fries';
//
//function finder(needle, haystack) {}

var finder = function (needle, hay) {
    if (needle.length > hay.length) {
        return false;
    } else {
        for (var i = 0; i < hay.length; i++) {
            if (hay.charAt(i) === needle.charAt(0)) {
                if (hay.length - i < needle.length) {
                    return false;
                } else {
                    var count = 0;
                    for (var j = 0; j < needle.length; j++) {
                        count++;
                    }
                    if (count === needle.length) {
                        return true;
                    }
                }
            }
        }
    }
};

var hay = 'I like to walk my dog on the beach.';
var needle = 'dog';
console.log(finder(needle, hay));

//2) How to check if a String is valid shuffle of two String? (solution)
//
//One more difficult String algorithm based coding question for senior developers.
//You are given 3 strings: first,  second, and  third.
//third String is said to be a shuffle of first and second if it can be formed
//by interleaving the characters of first and second String in a way that maintains
//the left to right ordering of the characters from each string.
//For example, given first = "abc" and second = "def",  third = "dabecf"  is a valid shuffle
//since it preserves the character ordering of the two strings.
//So, given these 3 strings write a function that detects
//whether third String is a valid shuffle of first and second String.

var first = "abc";
var second = "def";
var third = "dabecf";
var isShuffle = function (first, second, third) {
    return hasString(first, third) && hasString(second, third);
};
var hasString = function (strA, strB) {
    var eles = [];
    for (var i = 0; i < strA.length; i++) {
        eles[i] = strA.charAt(i);
    }
//    console.log(eles);
    var ptrB = 0;
    var count = 0;
    for (var i in eles) {
        for (var j = ptrB; j < strB.length; j++) {
//            console.log(ptrB, i, eles[i], strB[j])
            if (eles[i] === strB[j]) {
                ptrB = i;
                count++;
                break;
            }
        }
    }
    return count === strA.length;
};
console.log(isShuffle(first, second, third));
/*
 3) How to find kth smallest element in unsorted array? (solution)
 You are given an unsorted array of numbers and k, you need to find the kth smallest number in the array.
 For example if given array is {1, 2, 3, 9, 4} and k=2 then you need to find
 the 2nd smallest number in the array, which is 2.

 One way to solve this problem is to sort the array in ascending order then pick the k-1th element,
 that would be your kth smallest number in array because array index starts at zero,
 but can you do better? Once you are able to solve this array coding question,
 you can solve many similar questions easily e.g. our next question.
 */


var testA = [1, 2, 3, 9, 4];
var seq = 2;
var findminmax = function (array) {
    var min = Infinity;
    var max = -Infinity;
    for (var i in array) {
        min = (min < array[i]) ? min : array[i];
        max = (max < array[i]) ? array[i] : max;
    }
    return {"min": min, "max": max};
};
//console.log(findminmax(testA));

var findseq = function (array, seq) {
    if (array.length < seq) {
        return "Seq out of range";
    }
    var arrayB = array.slice(); // copy of the array to arrayB
    var minmax = findminmax(array);
    var excludeArray = function (array, num) {
        for (var i in array) {
            if (num === array[i]) {
                return array.splice(i, 1); // remove element in arrayB if it is the min
            }
        }
    };
    for (var i = 1; i <= seq; i++) {
        var minmax = findminmax(arrayB);
        console.log(excludeArray(arrayB, minmax.min));
    }
    return minmax.min;
};
console.log(findseq(testA, seq));
/*
 4) How to find common elements in three sorted array? (solution)
 Now we are coming on territory of tough array questions.
 Given three arrays sorted in non-decreasing order,
 print all common elements in these arrays.
 */

var arrA = [2, 3, 5, 7, 10, 12];
var arrB = [3, 5, 8, 12, 17];
var arrC = [4, 5, 6, 7, 8, 9];
var findcommon = function (arrA, arrB, arrC) {
    var kv = function (k, v) {
        this.k = k;
        this.v = v;
        this.add = function () {
            this.v += 1;
        };
    };
    var dict = [];
    var parseArray = function (arr) {
        for (var i in arr) {
            if (dict.length === 0) {
                dict.push(new kv(arr[i], 1));
                break;
            } else {
                for (var j = 0; j < dict.length; j++) {
//                console.log(dict[j].k, arr[i], dict[j].add(), dict);
                    if (dict[j].k === arr[i]) {
                        dict[j].add();
                        break;
                    }
                    if (j === dict.length - 1) {
                        dict.push(new kv(arr[i], 1));
                    }
                }
            }
        }
//    console.log("dict", dict);
    }
    ;
    parseArray(arrA);
    parseArray(arrB);
    parseArray(arrC);
    console.log(dict);
    var ans = [];
    for (var i in dict) {
        if (dict[i].v === 3) {
            ans.push(dict[i].k);
        }
    }
    return ans;
};
console.log(findcommon(arrA, arrB, arrC));
//};


