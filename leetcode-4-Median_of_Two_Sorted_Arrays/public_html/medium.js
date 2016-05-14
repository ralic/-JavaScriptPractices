/*
 * Student Info: Name=Lo,WeiShun , ID= 13108
 * Subject: CourseNo_HWNo_Summer_2015
 * Author: raliclo
 * Filename: medium.js.js
 * Date and Time: May 14, 2016 1:17:50 AM
 * Project Name: leetcode-4-Median_of_Two_Sorted_Arrays
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
 * 4. Median of Two Sorted Arrays   Difficulty: Hard
 There are two sorted arrays nums1 and nums2 of size m and n respectively.
 Find the median of the two sorted arrays.
 The overall run time complexity should be O(log (m+n)).

 Subscribe to see which companies asked this question
 */
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
    var m = 0;
    m = (nums1.length === undefined) ? m : m + nums1.length;
    m = (nums2.length === undefined) ? m : m + nums2.length;
    var mid = Math.floor(m / 2) + 1;
    var p1 = 0, p2 = 0, i = 0;
    var stack = [], tmp;
    while (i < mid + 1) {
        var mode = 0;
        mode = (nums1[p1] === undefined) ? mode : mode + 1;
        mode = (nums2[p2] === undefined) ? mode : mode + 3;
        switch (mode) {
            case 4:
                if (nums1[p1] >= nums2[p2]) {
                    stack.push(nums2[p2++]);
                } else {
                    stack.push(nums1[p1++]);
                }
                break;

            case 1:
                stack.push(nums1[p1++]);
                break;

            case 3:
                stack.push(nums2[p2++]);
                break;
        }
        i++;
    }
//   console.log("mode",mode,"m:",m,"mid:",mid,"stack:",stack);
    return (m % 2 === 0) ? (stack[mid - 1] + stack[mid - 2]) / 2 : stack[mid - 1];
};