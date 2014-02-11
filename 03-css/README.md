# Anchor tags

The anchor tag, or `a` is one of the key innovations of HTML. It
allows HTML documents to link to other HTML documents locally
and elsewhere on the internet.

Historically these links were called hyperlinks, which is why
HTML is called the HyperText Markup Language.

An anchor tag wraps goes around the content (text, images, etc.)
that you want to turn into a link. The most important attribute
of an anchor tag is `href` (hypertext reference).

Another common attribute of an anchor tag is `target` which can
be used to make a link pop-up in a new browser window or tab.
This is done by setting the attribute `target="_blank"`

Example:

```html
<a href="http://www.missionbit.com/" target="_blank">
  This link goes to Mission Bit's website in a new tab
</a>
<a href="local-file.html">
  This link goes to the file "local-file.html" on this website
</a>
```

# CSS Intro

* Cascading Style Sheets are the preferred way to change the
  presentation (colors, fonts, positions, etc.) of a HTML document.
* It's cascading because the multiple rules can apply to the same
  elements, and they are applied from lowest priority to highest.

# CSS Jargon

* *Selector* - the first part of a CSS rule that is used to select
  elements by tag name, id, class, or other features of that
  element
* *Property* - the second part of a CSS rule is a `{` block `}` with
  zero or more properties. Each property controls some presentation
  aspect of that element and its children, such as `font-family` or
  `color`.

# Project Avatar



# Ideas

(This is all in-progress, super early draft just to get a URL up)

* `a` tag
* Separate HTML pages
* `link` tag and css file `<link rel="stylesheet" href="style.css">`
* `ul`, `li`
* selectors (tag names, attributes, id)
* color, background-color, font-face
* position, left, top, bottom, right, width, height
* margin, padding, border
* color keywords, rgb, rgba, hsl, hsla, numeric colors
* google fonts
