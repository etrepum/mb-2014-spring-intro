Intro
=====

Mission Bit introductory survey:

http://bit.ly/mbit-2014-spring-experience

HTML History
============

* The internet began its life as ARPANET in 1969
* Before the web, the internet was primarily plain text
  (email, and some other protocols you've probably never heard of)
* Tim Berners-Lee devised a way to share documents over the internet
  while working at CERN in the late 80s.
* Proposed in 1989, 20 years after the first connection was
  made on what's known now as the internet.

HTML Syntax
===========

HTML stands for HyperText Markup Language.

HyperText means that text can directly reference other text. These references
were called hyperlinks but since the web is so popular everyone decided to
just call them links about 20 years ago.

Markup languages mix the content of the document
with annotations about parts of that document. An analog of markup in the 
real world is when you highlight text on a page, or when you revise a paper.
When we annotate documents we can usually tell the difference between the
text and the markup by color, position, or handwriting.

HTML does this with angle brackets (less than `<`, greater than `>`)
and ampersands (`&`).

HTML Tags
=========

When you have something that's wrapped in angle brackets
it's called a *tag*, an example of a tag is `<p>` which is a paragraph tag for
annotating a paragraph of text, or `<a>` which is an anchor tag that links
from one page to another. We'll learn some of the most common tags today.

HTML Entities
=============

When you have something that begins with an ampersand and ends with a colon
it's called an *entity*. These are much less common because you only really
need four of them today. The common ones are `&lt;`, `&gt;`, `&quot;`
and `&nbsp;`. lt and gt are used to write angle brackets without making a tag,
quot is used to to write a double quote inside of an attribute value in a tag,
and nbsp is a non-breaking space for those times when you really want
some horizonal space and you don't want the browser to collapse it. There
are other fun entities you can use such as `&hearts;` and you can use an entity
to represent any possible character such as `&#8734;`, but you can also put
those characters literally in the document so they aren't strictly necessary.
