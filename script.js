"use strict";
// script.js V4
// Setting constants 
const G1 = [1, null, 0, null, 0, 0, null, 1, null, 0, 0, null, null, null, null, null, null, 0, 0, null, null, 1, null, null, 1, 0, null, 1, 1, null, null, 0, null, null, 1, 1];
const G2 = [null, 1, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null];
const G3 = [null, null, 1, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null];

const row = 6;
const column = 6;

$("body").ready(function() {
    loadGrid(G1);
});

function loadGrid(grid) {           
    for (var i = 0; i < row; i++) {
        $("#A" + (i + 1)).val(grid[i]);
    }
    for (var i = 0; i < row; i++) {
        $("#B" + (i + 1)).val(grid[column + i]);
    }
    for (var i = 0; i < row; i++) {
        $("#C" + (i + 1)).val(grid[column * 2 + i]);
    }
    for (var i = 0; i < row; i++) {
        $("#D" + (i + 1)).val(grid[column * 3 + i]);
    }
    for (var i = 0; i < row; i++) {
        $("#E" + (i + 1)).val(grid[column * 4 + i]);
    }
    for (var i = 0; i < row; i++) {
        $("#F" + (i + 1)).val(grid[column * 5 + i]);
    }
};
