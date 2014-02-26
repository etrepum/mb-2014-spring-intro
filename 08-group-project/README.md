# CSS Jargon

* *Selector* - the first part of a CSS rule that is used to select
  elements by tag name, id, class, or other features of that
  element
* *Property* - the second part of a CSS rule is a `{` block `}` with
  zero or more properties. Each property controls some presentation
  aspect of that element and its children, such as `font-family` or
  `color`.

# CSS Specificity Rules

(to explain why opacity didn't work last time)

See also:

* http://bit.ly/mdn-css-specificity
* http://specificity.keegan.st/

From lowest to highest

* Universal (`*`)
* Type (`div`)
* Class (`.purple`)
* Attribute (`input[value="10"]`)
* Pseudo-class (`a:visited`)
* Id (`#some-element`)
* Inline style (`<p style="color: blue"></p>`)

`!important` overrides any rule that is not important

For example, on this page the text in #some-element would be blue.

```css
* { color: blue !important; }
#some-element { color: red; }
```

# Why didn't opacity work?

The reason why I couldn't get `opacity` to work last class was that I
expected it to take a percentage, but it will only accept numbers
between 0 and 1.

## Handle click of a specific element

We can also handle clicks on specific elements on the page, let's add
a css rule that will make it easy to demonstrate this. Add this to
your `clicks.css` file:

```css
.clicked {
    transform: rotate(180deg);
    -webkit-transform: rotate(180deg);
}
```

And add this to your `clicks.js` file:

```javascript
$('img.logo').on('click', function (e) {
    e.stopImmediatePropagation();
    $(this).toggleClass('clicked');
});
```

## Functions and state

```javascript
var numberOfClicks = 0;
function updatePageTitle() {
    $('h1.page-title').text(['Clicks: ', numberOfClicks].join(''));
}

updatePageTitle();

$(window).on('click', function (e) {
    numberOfClicks = numberOfClicks + 1;
    updatePageTitle();
});
```

# Rolling Dice

One way to get interesting behavior to make something look cool or to
make a game more fun is to add some randomness. The `Math.random()`
function returns a floating point (rational) number between 0 and 1.

http://bit.ly/mbit-intro-dice

This function will make randomness easier to use:

```javascript
function randomInt(lo, hi) {
    var range = hi - lo;
    return lo + Math.floor(range * Math.random());
}
```

```javascript
function randomRoll() {
    return String.fromCharCode(randomInt(9856, 9861));
}
```

```javascript
$(window).on('click', function (e) {
    $('.die').text(randomRoll);
});
```

# Group Project Planning

Organize the students by interest to pitch a project
idea. The project should go a bit beyond what we've learned so far,
but not too much. The maximum sort of complexity that would make sense
would be something equivalent to Flappy Bird, or a site with a handful
of separate pages. We'll tailor the lessons to cover techniques that
will be necessary to complete the projects.

Rough project ideas should be pitched by the end of class.
