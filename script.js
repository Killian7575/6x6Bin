'use strict';
// script.js V07
// Setting constants 
const G01 = [1, null, 0, null, 0, 0, null, 1, null, 0, 0, null, null, null, null, null, null, 0, 0, null, null, 1, null, null, 1, 0, null, 1, 1, null, null, 0, null, null, 1, 1];
const G02 = [null, null, null, null, null, null, null, 1, null, null, null, 1, null, 1, null, 1, null, null, null, null, 0, null, null, 1, null, 1, null, null, null, null, null, null, null, 0, 0, null];
const G03 = [null, 1, null, null, null, null, null, null, null, 0, null, 0, null, 0, null, 0, null, null, 1, null, null, null, 1, null, null, null, null, null, 0, null, 0, null, null, null, null, null];
const G04 = [0, null, null, 1, null, null, null, 0, null, null, null, 1, null, null, 1, 1, null, null, null, null, null, null, 1, 1, null, null, null, null, null, 0, 0, null, 1, null, 1, null];
const G05 = [null, null, null, null, null, null, null, 1, null, 1, null, 1, null, null, 0, 0, null, null, 0, null, null, null, null, null, null, null, null, null, 1, 1, null, null, 0, null, 0, null];
const G06 = [null, null, null, null, null, 0, null, 1, null, null, 1, null, null, null, null, 0, null, null, null, null, 1, null, null, null, null, null, 1, null, null, null, null, 0, null, null, 1, null];
const G07 = [1, null, 1, null, null, 1, null, null, null, 1, null, null, 0, null, null, 1, 0, null, null, null, 1, null, null, null, null, 1, null, null, null, null, 1, null, null, 1, 1, null];
const G08 = [1, 1, null, null, null, null, 1, null, null, 1, null, null, null, null, null, null, 0, null, 0, null, 0, null, null, null, null, null, null, null, null, null, null, null, 0, null, 0, null];
const G09 = [null, null, 0, 0, null, 0, null, null, null, null, null, null, null, 1, 1, null, null, null, null, null, null, null, 0, 0, null, null, 1, null, 0, null, null, null, null, null, null, null];
const G10 = [null, null, null, null, null, null, null, 1, null, null, null, null, null, null, 0, null, 1, 1, null, null, 0, null, null, null, null, 0, null, null, 1, null, null, null, null, null, null, null];
const G11 = [null, 1, null, 1, null, 1, null, null, null, null, null, null, 0, 0, null, null, null, null, null, null, null, null, 1, null, 0, null, 1, 0, null, null, null, 1, null, null, null, null];
const G12 = [0, null, null, null, null, null, null, 1, 1, null, null, null, null, null, 1, null, null, null, null, null, null, 0, null, null, 0, null, null, 1, null, null, null, null, null, null, null, null];
const G13 = [null, null, null, 1, null, null, null, null, null, null, null, 0, null, null, null, null, 0, 0, null, null, null, null, 1, null, 1, null, null, null, null, null, null, 0, null, 0, null, 0];
const GT = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36];
const row = 6;
const column = 6;

$('body').ready(function() {
    loadGrid(GT);
});

$('#cboPuzNo').change(function() {
    loadGrid(eval($('#cboPuzNo').val()));
});

$('#SolveR').click(function BinaryPuzzleSolver() {
    window.alert('BinaryPuzzleSolver has not been coded yet');
});
$('#SolveO').click(function SolvePuzzle() {
    window.alert('SolvePuzzle has not been coded yet');
});
$('#Pairs').click(function SolveNumberPairs() {
    window.alert('SolveNumberPairs has not been coded yet');
});
$('#RPairs').click(function SolveRowPairs() {
    window.alert('SolveRowPairs has not been coded yet');
});
$('#CPairs').click(function SolveColPairs() {
    window.alert('SolveColPairs has not been coded yet');
});
$('#Trios').click(function SolveNumberTrios() {
    window.alert('SolveNumberTrios has not been coded yet');
});
$('#Comp').click(function CompleteRowsCols() {
    window.alert('CompleteRowsCols has not been coded yet');
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
    $('#2DArrayBox').html(null);
    for (var i = 0; i < row; i++) {
        $('#2DArrayBox').html($('#2DArrayBox').html() + finalArray[i]);
        $('#2DArrayBox').html($('#2DArrayBox').html() + '<br>');
    }
    $('#2DArraySingle').html(finalArray[2][4]);
};