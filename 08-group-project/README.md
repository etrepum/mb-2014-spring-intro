# CSS

## CSS Jargon

* *Selector* - the first part of a CSS rule that is used to select
  elements by tag name, id, class, or other features of that
  element
* *Property* - the second part of a CSS rule is a `{` block `}` with
  zero or more properties. Each property controls some presentation
  aspect of that element and its children, such as `font-family` or
  `color`.

## CSS Specificity Rules

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

## Why didn't opacity work? (will they remember this from a week ago?)

The reason why I couldn't get `opacity` to work last class was that I
expected it to take a percentage, but it will only accept numbers
between 0 and 1.

# Dice game

http://bit.ly/mbit-intro-dice-game

This has a few blanks to fill in to familiarize the students with some
more jQuery. They'll have some time to add some extra features in the
first half. If they finish quickly we'll start group project planning
sooner.

# Group Project Planning

We should start this by the half.

Organize the students by interest to pitch a project
idea. The project should go a bit beyond what we've learned so far,
but not too much. The maximum sort of complexity that would make sense
would be something equivalent to Flappy Bird, or a site with a handful
of separate pages. We'll tailor the lessons to cover techniques that
will be necessary to complete the projects.

Rough project ideas should be pitched by the end of class (maybe the
beginning of next class?).
