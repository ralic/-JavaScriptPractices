/*
 * Student Info: Name=Lo,WeiShun , ID= 13108
 * Subject: CourseNo_HWNo_Summer_2015
 * Author: raliclo
 * Filename: top5movie.js
 * Date and Time: Jun 14, 2016 12:23:16 PM
 * Project Name: Top5MovieRating
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
 4) Given this movie info String:

 id, running_time, rating
 1, 120, 3.82667832
 2, 89, 5.4343
 3, 110, 8.312232
 4, 45, 5.123
 5, 67, 10
 6, 93, 10
 7, 20, 2.00
 8, 98, 5.67666
 9, 46, 5.8899
 10, 89, 6.7821
 11, 76, 7.098
 12, 90, 8.2321
 13, 76, 9.7632
 14, 72, 7.3772
 15, 132, 4.564
 16, 123, 3.789
 17, 140, 1.234

 // Input
 var movieInfo =
 'id, running_time, rating \n 1, 120, 3.82667832 \n 2, 89, 5.4343 \n 3, 110, 8.312232 \n 4, 45, 5.123 \n 5, 67, 10 \n 6, 93, 10 \n 7, 20, 2.00 \n 8, 98, 5.67666 \n 9, 46, 5.8899 \n 10, 89, 6.7821 \n 11, 76, 7.098 \n 12, 90, 8.2321 \n 13, 76, 9.7632 \n 14, 72, 7.3772 \n 15, 132, 4.564 \n 16, 123, 3.789  \n 17, 140, 1.234'

 Return the top 5 ids with the highest rating
 */

// Ralic Solution

var movieInfo = 'id, running_time, rating \n 1, 120, 3.82667832 \n 2, 89, 5.4343 \n 3, 110, 8.312232 \n 4, 45, 5.123 \n 5, 67, 10 \n 6, 93, 10 \n 7, 20, 2.00 \n 8, 98, 5.67666 \n 9, 46, 5.8899 \n 10, 89, 6.7821 \n 11, 76, 7.098 \n 12, 90, 8.2321 \n 13, 76, 9.7632 \n 14, 72, 7.3772 \n 15, 132, 4.564 \n 16, 123, 3.789  \n 17, 140, 1.234';

var top5Movies = function (movieInfo) {
    var k = movieInfo.split("\n");
    var top5 = [];
    var min = 0;
    for (var i = 1; i < k.length; i++) {
        top5.push(k[i].split(",")[2]);
    }
    ;
    var top5 = top5.sort((function (a, b) {
        return b - a;
    })).slice(0, 5);
    for (var i = 0; i < k.length; i++) {
        for (var j = 0; j < top5.length; j++)
            if (k[i].split(",")[2] === top5[j])
                top5[j] = k[i];
    }
    return top5;
};