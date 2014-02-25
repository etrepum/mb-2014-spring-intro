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

# Javascript (clicks)

HTML is about structure, CSS is about presentation, and Javascript is
about function. Javascript is the programming language of the web, and
we'll be spending a lot of time with it this semester.

Javascript is less forgiving than HTML. It doesn't try and work around
your mistakes. All of us are here to help you along here, so
feel free to ask for help if you see a warning or error you don't
understand or if things just aren't working. Brackets and Chrome will 
try and help you find these sorts of mistakes, but it takes some practice
to learn how to decipher what they're saying.

Most developers use a library to make writing browser code a little
easier, so we're going to skip right to that step. jQuery is the most
popular choice so we'll start with that one.

Write the following URLs on the board:

* http://bit.ly/mbit-intro-clicks
* http://jquery.com
* http://codecademy.com/tracks/javascript
* http://codecademy.com/tracks/jquery

Have them download the gist from mbit-intro-clicks and put it in
a `clicks` folder in their repository (should be done from 6).

Explain that the comments on top is to configure brackets to have
JSLint in Brackets only give us warnings that are relevant to what
we're doing.

```javascript
/*global $*/
/*jslint sloppy: true, browser: true*/
```

## Replace text on load

Now go back to your clicks.js file and add the following code:
```javascript
$("h1.page-title").text("My code runs!");
```

Now when you save it, you shouldn't get any warnings. These comments
tell Brackets that we are using jQuery, and that we don't want to
use a stricter subset of JavaScript just yet.

Now when you refresh the page it should say "My code runs!"
instead of "We'll replace this title".

(This may take a little while to get everyone caught up)

## Move logo to click position

The next thing we want to try is to do something when we click the
page. We can do this by telling jQuery to call a function when
we click anywhere on the page. Add this code to the bottom of
your `clicks.js` file:

```javascript
$(window).on('click', function (e) {
    $('img.logo').css({left: e.pageX,
                       top: e.pageY});
});
```

## Add a transition

What are some other things we can do with this? One is to make it
smoothly transition from one position to the other. We can do this
by adding `transition: 1s` to the CSS rule for `img.logo`.

## Alternate between hide and show

What if we want it to disappear and reappear? We can do this by
creating a rule for a `hide` class that sets the `opacity` property to
0 and changing our handler to toggle that class.

```css
.hide {
    opacity: 0;
}
```

```javascript
$(window).on('click', function (e) {
    $('img.logo').css({left: e.pageX,
                       top: e.pageY});
    $('img.logo').toggleClass('hide');
});
```

## Handle click of a specific element

We can also handle clicks on specific elements on the page, let's add
a css rule that will make it easy to demonstrate this. Add this to
your `clicks.css` file:

```css
.clicked {
    transform: rotate(360deg);
    -webkit-transform: rotate(360deg);
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

## Conditions

Add another h1 to the page:

```html
<h1 class="click-position"></h1>
```

Modify the event handler to determine where the click was relative to
the logo.

```javascript
$(window).on('click', function (e) {
    var logo = $('img.logo');
    if (e.pageX < logo.position().left) {
        $('h1.click-position').text('You clicked to the left of the logo');
    } else {
        $('h1.click-position').text('You clicked to the right of the logo');
    }
    logo.css({left: e.pageX,
              top: e.pageY});
});
```
