/*
 * Student Info: Name=Lo,WeiShun , ID= 13108
 * Subject: CourseNo_HWNo_Summer_2015
 * Author: raliclo
 * Filename: island.js
 * Date and Time: Mar 31, 2016 8:09:11 AM
 * Project Name: SearchForIsland
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

//http://collabedit.com/wf7vr

//find the number of islands. Given a matrix, '1' = land, '0' equals water.
//
//[
//   [0,1,0,0,1],
//   [1,1,0,0,0],
//   [0,0,0,0,0],
//   [1,0,1,0,1],
//   [1,0,0,0,1],
//]
//
//answer: 5

var matrix = [
    [0, 1, 0, 0, 1],
    [1, 1, 0, 1, 0],
    [0, 1, 0, 0, 0],
    [0, 1, 1, 0, 0],
    [1, 1, 0, 0, 1]];

//var matrix = [
//    [0, 1, 0, 0, 1],
//    [1, 1, 0, 0, 0],
//    [0, 0, 0, 0, 0],
//    [1, 0, 1, 0, 1],
//    [1, 0, 0, 0, 1]];

var pop2Dmatrix = function (i, j) {
    // Works well in chrome browser, yet it is unable to formatted corredctly by netbeans IDE8.1
//    var matrix = new Array(i).fill(false).map(row => new Array(j).fill(false));
    return matrix;
};

var chkmatrix = [
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0]];

var count = 0;

var zerofy = function (i, j) {
//    chkmatrix[i][j] = chkmatrix[i][j] + 1;
    if (matrix[i][j] === 0) {
        return;
    }
    matrix[i][j] = 0;

    // Part-0 classification
    var topedge = (j === 0);
    var bottomedge = (j === dimY);
    var leftedge = (i === 0);
    var rightedge = (i === dimX);
//        console.log("T:" + topedge, "B:" + bottomedge, "L:" + leftedge, "R:" + rightedge);

    // Part-1, is it topedge? Verify by check chkmatrix;
    if (topedge) {
        if (!bottomedge) {
            zerofy(i, j + 1);
        }
        if (leftedge) {
            zerofy(i + 1, j);
            return;
        } else if (rightedge) {
            zerofy(i - 1, j);
            return;
        } else {
            zerofy(i + 1, j);
            zerofy(i - 1, j);
            return;
        }

        // Part-2, is it bottomedge? Verify by check chkmatrix;
    } else if (bottomedge) {
        if (leftedge) {
            zerofy(i + 1, j);
            return;
        } else if (rightedge) {
            zerofy(i - 1, j);
            return;
        } else {
            zerofy(i + 1, j);
            zerofy(i - 1, j);
            return;
        }

        // Part-3, for all inner elements
    } else {
        zerofy(i, j - 1);
        zerofy(i, j + 1);
        if (leftedge) {
            zerofy(i + 1, j);
            return;
        } else if (rightedge) {
            zerofy(i - 1, j);
            return;
        } else {
            zerofy(i + 1, j);
            zerofy(i - 1, j);
        }
    }
    return;
};

//console.log(matrix[0][1]);
//console.log(dimX, dimY);

var scanmatrix = function (arr2D) {
    count = 0;
    dimX = arr2D.length - 1;
    dimY = arr2D.length - 1;
    for (var i = 0; i <= dimX; i++) {
        for (var j = 0; j <= dimY; j++) {
            if (arr2D[i][j] !== 0) {
                zerofy(i, j);
                count++;
                console.log("Spots On", i, j);
            }
        }
    }
    return count;
};
