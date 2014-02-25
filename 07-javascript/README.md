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

# Javascript (clicks part 1, mostly a repeat from 6)

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

The next thing we want to try is to do something when we click the
page. We can do this by telling jQuery to call a function when
we click anywhere on the page. Add this code to the bottom of
your `clicks.js` file:

```javascript
$(window).on('click', function (e) {
  $('h1.page-title').css({left: e.clientX,
                          top: e.clientY});
});
```

What are some other things we can do with this? One is to make it
smoothly transition from one position to the other. We can do this
by adding `transition: 1s` to the CSS rule for `img.logo`.

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
  $('h1.page-title').css({left: e.clientX,
                          top: e.clientY});
});
```

We can also handle clicks on specific elements on the page, let's add
a css rule that will make it easy to demonstrate this. Add this to
your `clicks.css` file:

```css
h1.page-title.clicked { color: darksalmon; }
```

And add this to your `clicks.js` file:

```javascript
pageTitle.on('click', function onTitleClick(e) {
    pageTitle.toggleClass('clicked');
});
```

We have full control of HTML and CSS from Javascript, so we can do
cool stuff with images too. Find any image you like from the web and
copy it to your clicks project. I recommend using a SVG or PNG file
with some transparency. You can download a SVG of the Mission Bit logo
from here:

(Write `missionbit.com/images/icon128.svg` on the board)

Now we can add this logo to our css. Let's place it in the center and
move it when we click. We'll need to add it to our HTML, and create a
CSS rule for it.

```html
<img src="icon128.svg" class="logo">
```

```css
img.logo {
    position: absolute;
    left: 50%;
    top: 50%;
    width: 128px;
    height: 128px;
    margin-left: -64px;
    margin-top: -64px;
}
```

```javascript
var logo = $("img.logo");
$(window).on("click", function (e) {
    logo.css({left: e.clientX + 'px',
              top: e.clientY + 'px'});
});
```

> It looks like we didn't need the `+ 'px'` part, which was nice.

If the class asks how to animate it, a simple way to do that would be
to add the following CSS rule:

```css
img.logo {
    position: absolute;
    left: 50%;
    top: 50%;
    width: 128px;
    height: 128px;
    margin-left: -64px;
    margin-top: -64px;
    transition: 1s;
}
```

> We did get to this.
> We also tried to animate the opacity but it didn't work. I'm pretty
> sure this was due to selectivity, I didn't write the rules properly
> for the 0% to take effect.
> This is the code we ended up with at the end of class:

```javascript
/*global $*/
/*jslint sloppy:true, browser: true*/
$('h1.page-title').text('It worked!');
$(window).on('click', function (e) {
    $('img.logo').css({left: e.clientX,
                       top: e.clientY});
    $('img.logo').toggleClass('hide');
});
```
