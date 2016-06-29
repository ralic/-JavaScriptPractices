/*
 * Student Info: Name=Lo,WeiShun , ID= 13108
 * Subject: CourseNo_HWNo_Summer_2015
 * Author: raliclo
 * Filename: Stream-RandomSelect.js
 * Date and Time: Jun 29, 2016 11:07:53 AM
 * Project Name: javascript-Stream-RandomSelect
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
 1) Imagine you have a constant flow of integers (one integer per second),
 at any specific time, your boss can come in and ask you for 500 numbers.
 Each number from the stream should have the same probability of getting
 selected as one of the 500 numbers.

 Condition - do not store the stream.

 var selectedNumbers = new Array( 500 );

 function selectANumber( number ) {

 // Based on some algorithm,
 decide to insert the number
 into the selectedNumbers array
 }

 */

// var selectedNumbers = new Array( 500 );
// Initial array 1~500
var selectedNumbers = Array.apply(null, new Array(500)).map(function (_, i) {
    return i;
});

var selectANumber = function (number) {
    var i = Math.floor(number * Math.random()) % 500;
    console.log(i);
    var k = selectedNumbers.slice(0, i)
            .concat(number)
            .concat(selectedNumbers.slice(i + 1, 500));
    selectedNumbers = k;
};

selectANumber(100043);