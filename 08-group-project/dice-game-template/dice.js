/*global $*/
/*jslint sloppy:true, browser: true, devel: true*/

/*

References:

* http://api.jquery.com/addClass/
* http://api.jquery.com/removeClass/
* http://api.jquery.com/toggleClass/
* http://api.jquery.com/attr/
* https://developer.mozilla.org/en-US/docs/Web/Guide/CSS/Getting_started/Selectors

Tips:

1. Start with the restartGame function
2. Move on to the roll function
3. Finally, add the holdDie function

For extra challenge, here are some ideas:

* Make it look better!
* Animate the dice for each roll https://api.jquery.com/animate/
* Implement another dice game, such as Farkle

*/

function restartGame() {
    // TODO: add the class 'selectable' to every element
    //       with the 'die' class
    // TODO: remove the class 'hold' from every element
    //       with the 'die' class
    $('.die').addClass('selectable');
    $('.die').removeClass('hold');
    rollDice();
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

function rollDice() {
    // Roll all of the dice
    // TODO: remove the 'hold' class from all elements that have both
    //       the 'die' and 'selectable' class
    // TODO: set the 'data-roll' attribute to the randomRoll function
    //       for all elements that have the 'die' and 'selectable' class
    updateState();
}

function holdDie() {
    // Hold a single die
    var die = $(this);
    // TODO: toggle the class 'hold' for the die
    updateState();
}

$(document).ready(function() {
    // This gets called exactly once to set everything up
    $('.dice').on('click', '.die.selectable', holdDie);
    $('.buttons').on('click', 'button.roll:enabled', rollDice);
    $('.buttons').on('click', 'button.play-again:enabled', restartGame);
    restartGame();
});