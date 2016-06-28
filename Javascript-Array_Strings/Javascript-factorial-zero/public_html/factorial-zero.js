/*
 * Student Info: Name=Lo,WeiShun , ID= 13108
 * Subject: CourseNo_HWNo_Summer_2015
 * Author: raliclo
 * Filename: factorial-zero.js
 * Date and Time: Jun 26, 2016 11:19:16 AM
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

//Q: Count zeros for a factorial number 

var countzeros = function (max) {
    var answer = 0;
    fac_five = function (n) {
        while (n % 5 === 0) {
            n = n / 5;
            answer++;
        }
        if (n % 5 !== 0) {
            return answer;
        }
    };
    while (max > 0) {
        fac_five(max--);
    }
    return answer;
};