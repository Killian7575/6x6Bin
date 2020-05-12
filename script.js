'use strict';
// script.js V06
// Setting constants 
const G1 = [1, null, 0, null, 0, 0, null, 1, null, 0, 0, null, null, null, null, null, null, 0, 0, null, null, 1, null, null, 1, 0, null, 1, 1, null, null, 0, null, null, 1, 1];
const G2 = [null, 1, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null];
const G3 = [null, null, 1, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null];
const gridtest = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36];

const row = 6;
const column = 6;

$('body').ready(function() {
    loadGrid(gridtest);
});

function loadGrid(grid) {
    loadArrayViews(grid);
    for (var i = 0; i < row; i++) {
        for (var y = 0; y < column; y++) {
            $('#B' + (i + 1) + (y + 1)).val(grid[(i * column) + y])
        }
    }
};

function loadArrayViews(grid) {
    var tempArray = [];
    var finalArray = [];
    for (var i = 0; i < row; i++) {
        for (var y = 0; y < column; y++) {
            tempArray.push(grid[(i * column) + y]);
        }
        finalArray.push(tempArray);
        tempArray = [];
    }
    for (var i = 0; i < row; i++) {
        $('#2DArrayBox').html($('#2DArrayBox').html() + finalArray[i]);
        $('#2DArrayBox').html($('#2DArrayBox').html() + '<br>');
    }
    $('#2DArraySingle').html(finalArray[2][4]);
};