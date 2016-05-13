/*
 * Student Info: Name=Lo,WeiShun , ID= 13108
 * Subject: CourseNo_HWNo_Summer_2015
 * Author: raliclo
 * Filename: linked_list_cycle2.js
 * Date and Time: May 13, 2016 10:30:03 PM
 * Project Name: leetcode-142-Linked_List_Cycle_II
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

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function (head) {
    var slow = head;
    var fast = head;
    while (head !== null && head.next !== null) {
        if (fast === null || fast.next === null) {
            return null;
        }
        slow = slow.next;
        fast = fast.next.next;
        if (fast === slow) {
            var slow2 = head;
            while (slow2 !== slow) {
                slow = slow.next;
                slow2 = slow2.next;
            }
            return slow;
        }
    }
    return null;
};