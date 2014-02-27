/*global $*/
/*jslint sloppy:true, browser: true, devel: true*/
function restartGame() {
    $('.die')
        .addClass('selectable')
        .removeClass('hold');
    roll();
}

function randomInt(lo, hi) {
    var range = 1 + hi - lo;
    return lo + Math.floor(range * Math.random());
}

function randomRoll() {
    return randomInt(1, 6);
}

function calculateScore() {
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
    $('.die.selectable.hold').removeClass('selectable');
    $('.die.selectable').attr('data-roll', randomRoll);
    updateState();
}

$('.dice').on('click', '.die.selectable', function (e) {
    $(this).toggleClass('hold');
    updateState();
});

$('.buttons').on('click', 'button.roll:enabled', roll);
$('.buttons').on('click', 'button.play-again:enabled', restartGame);

restartGame();