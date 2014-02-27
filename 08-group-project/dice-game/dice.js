/*global $*/
/*jslint sloppy:true, browser: true, devel: true*/

function restartGame() {
    // This function should reset everything on the page and start the game
    $('.die')
        .addClass('selectable')
        .removeClass('hold');
    roll();
}

function randomRoll() {
    // return a random number between 1 and 6
    return 1 + Math.floor(6 * Math.random());
}

function calculateScore() {
    // Calculate the total and determine if it qualifies
    var has1 = false;
    var has4 = false;
    var total = 0;
    $('.die.hold').each(function () {
        var roll = parseFloat($(this).attr('data-roll'));
        if (!has1 && roll == 1) {
            has1 = true;
        } else if (!has4 && roll == 4) {
            has4 = true;
        } else {
            total = total + roll;
        }
    });
    return {qualify: has1 && has4, value: total};
}

function updateState() {
    // Enable or disable the roll button
    if ($('.die.hold.selectable').length > 0) {
        $('button.roll').removeAttr('disabled');
    } else {
        $('button.roll').attr('disabled', 'disabled');
    }
    var score = calculateScore();
    $('.score')
        .toggleClass('invalid', !score.qualify)
        .text(score.value);
    var rollAgain = $('.die:not(.hold)').length > 0;
    $('button.roll').toggleClass('hide', !rollAgain);
    $('button.play-again').toggleClass('hide', rollAgain);
}

function roll() {
    // Roll all of the dice
    $('.die.selectable.hold').removeClass('selectable');
    $('.die.selectable').attr('data-roll', randomRoll);
    updateState();
}

function holdDie() {
    // Hold a single die
    var die = $(this);
    die.toggleClass('hold');
    updateState();
}

$(document).ready(function() {
    // This gets called exactly once to set everything up
    $('.dice').on('click', '.die.selectable', holdDie);
    $('.buttons').on('click', 'button.roll:enabled', roll);
    $('.buttons').on('click', 'button.play-again:enabled', restartGame);
    restartGame();
});