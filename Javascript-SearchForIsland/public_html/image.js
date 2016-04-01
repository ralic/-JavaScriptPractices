/*
 * Student Info: Name=Lo,WeiShun , ID= 13108
 * Subject: CourseNo_HWNo_Summer_2015
 * Author: raliclo
 * Filename: image.js.js
 * Date and Time: Apr 1, 2016 10:49:32 AM
 * Project Name: Javascript-SearchForIsland
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


var matrix3 = [
    [0, 1, 0, 0, 1],
    [1, 0, 1, 0, 0],
    [0, 1, 0, 0, 0],
    [1, 0, 1, 0, 1],
    [1, 0, 0, 0, 1]];

// Answer = 3;

var pop2Dmatrix = function (i, j) {
    // ES2016 arrow operator.
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

/*
 * Zerofy is to check non-diagonal objects
 */

var zerofy = function (i, j, arr2D) {
    chkmatrix[i][j] = chkmatrix[i][j] + 1;
    if (arr2D[i][j] === 0) {
        return;
    }
    arr2D[i][j] = 0;

    // Part-0 classification
    var topedge = (j === 0);
    var bottomedge = (j === dimY);
    var leftedge = (i === 0);
    var rightedge = (i === dimX);
    //console.log("T:" + topedge, "B:" + bottomedge, "L:" + leftedge, "R:" + rightedge);

    // Part-1, is it topedge? Verify by check chkmatrix;
    if (topedge) {
        if (!bottomedge) {
            zerofy(i, j + 1, arr2D);// For diagonal
        }
        if (leftedge) {
            zerofy(i + 1, j, arr2D);
            if (!bottomedge) {
                zerofy(i + 1, j + 1, arr2D);// For diagonal
            }
            return;
        } else if (rightedge) {
            zerofy(i - 1, j, arr2D);
            if (!bottomedge) {
                zerofy(i - 1, j + 1, arr2D);// For diagonal
            }
            return;
        } else {
            zerofy(i + 1, j, arr2D);
            zerofy(i - 1, j, arr2D);
            if (!bottomedge) {
                zerofy(i + 1, j + 1, arr2D);// For diagonal
            }
            if (!bottomedge) {
                zerofy(i - 1, j + 1, arr2D);// For diagonal
            }
            return;
        }

        // Part-2, is it bottomedge? Verify by check chkmatrix;
    } else if (bottomedge) {
        if (leftedge) {
            zerofy(i + 1, j, arr2D);
            zerofy(i + 1, j - 1, arr2D);// For diagonal
            return;
        } else if (rightedge) {
            zerofy(i - 1, j, arr2D);
            zerofy(i - 1, j - 1, arr2D);// For diagonal
            return;
        } else {
            zerofy(i + 1, j, arr2D);
            zerofy(i + 1, j - 1, arr2D);// For diagonal
            zerofy(i - 1, j, arr2D);
            zerofy(i - 1, j - 1, arr2D);// For diagonal
            return;
        }

        // Part-3, for all inner elements
    } else {
        zerofy(i, j - 1, arr2D);
        zerofy(i, j + 1, arr2D);
        if (leftedge) {
            zerofy(i + 1, j, arr2D);
            zerofy(i + 1, j - 1, arr2D);// For diagonal
            zerofy(i + 1, j + 1, arr2D);// For diagonal
            return;
        } else if (rightedge) {
            zerofy(i - 1, j, arr2D);
            zerofy(i - 1, j - 1, arr2D);// For diagonal
            zerofy(i - 1, j + 1, arr2D);// For diagonal
            return;
        } else {
            zerofy(i + 1, j, arr2D);
            zerofy(i + 1, j - 1, arr2D);// For diagonal
            zerofy(i + 1, j + 1, arr2D);// For diagonal
            zerofy(i - 1, j, arr2D);
            zerofy(i - 1, j - 1, arr2D);// For diagonal
            zerofy(i - 1, j + 1, arr2D);// For diagonal

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
                zerofy(i, j, arr2D);
                count++;
                console.log("Spots On", i, j);
            }
        }
    }
    return count;
};

//a = scanmatrix(matrix3);
//console.log(a);