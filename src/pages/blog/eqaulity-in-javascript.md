---
layout: "../../layouts/ArticleLayout.astro"
title: What is the difference between ‘==’ and ‘===’? And why you need to know.
description: Loose equality and type coercion can get you into trouble sometimes.
date: 2022-5-18
author: Richard Miller Wimmer
readTime: "3 min"
categories:
  - JavaScript
  - Fundamentals
  - Web Development
images:
  - /assets/work/Equality_2.jpg
  - /assets/work/Equality_3.jpg
---

Have you ever been comparing two values in some kind of conditional statement in your Javascript (I think we all do all the time), and you weren’t getting what you expected?

<br />

We need to compare two values all the time, and well, we have a handful of ways to do so but here we are going to look at these two operators, ‘==‘ and ‘===‘. These two operators might look to be doing the same thing on the surface, returning a boolean value if the two values are equal or not. However, there is a big difference and it’s essential to understand the differences.

<br />
You can also consider ‘!=‘ and ‘!==‘ for everything we discuss here.
<br />
### Loose Equality
<br />
First, let’s look at ‘==‘. You will hear this referred to as ‘loose equality’ operator.
<br />
![Loose Equality Example](../../assets/work/Equality_2.jpg)
<br />
Wait, what? Why are all these true?
<br />
The most important thing to remember is something Javascript does called type coercion.
When using this operator Javascript will take those operands and only make the comparison
after attempting to convert them to a common type.
<br />
Type coercion can be problematic for us Javascript developers. After all, that’s
why so many are using Typescript to have a strong types during development.
<br />
If we are waiting for some value to determine a conditional case or conditional render
we could very well get true or false when we are not expecting to, possibly breaking
things or rending the wrong thing (or nothing).
<br />
### Strict Equality
<br />
Now comes the ‘===‘ operator. This will now evaluate the two operands without type
coercion.
<br />
Operands of different types are considered to be different. It will only return true
if both the value and the type match for both operands. This is important because
we do not have to worry about Javascript’s type coercion giving us a false positive(or
negative), thus making your code just a little more type-safe and explicit.
<br />
Let’s take a look at these console.logs comparing the same values as before, but
now with strict equality checks.
<br />
![Strict Equality Example](../../assets/work/Equality_3.jpg)
<br />
As we can see these evaluations are much more explicit and leave less wiggle room
with Javascript’s type coercion. If we stay aware of this we can avoid errors in
our code that can be associated with ‘==’ and how Javascript treats the two operands
in this situation.
<br />
Here is a great resource you can bookmark for reference. https://dorey.github.io/JavaScript-Equality-Table/#two-equals
<br />

I would love to hear your thoughts on the topic.
