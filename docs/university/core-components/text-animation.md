---
description: >-
  The Text Animation component simplifies animating text by automatically
  splitting it into individual words or characters, allowing for dynamic effects
  without manual wrapping.
icon: arrow-up-big-small
---

# Text Animation

{% include "../../.gitbook/includes/animations-beta.md" %}

Let's say you want to animate one letter at a time - instead of having to manually wrap _each_ letter in an [Animation Group](animation-group.md), you can simply wrap a text instance (like a heading) in the Text Animation component.

{% hint style="info" %}
Text Animation is one component of the animation engine. See [Animations](../foundations/animations.md) for an overview.
{% endhint %}

The Text Animation component handles splitting the text under the hood, making it easy to prepare text for animation.

{% hint style="info" %}
Just remember that you'll need to wrap the Text Animation component in an [Animation Group](animation-group.md) to define and control the actual animation behavior. The Animation Group must be the **direct** **parent** of the Text Animation.
{% endhint %}

You can split text by:

* Spaces (enabling you to animate each word)
* Characters (enabling you to animate each letter)
* `#`
* `~`

## Under the hood

Here's an example of what happens automatically under the hood.

If you wrap a heading component that outputs the following HTML:

```html
<h2>Hello World</h2>
```

in a Text Component and split the text by spaces, it will appear as:

```html
<h2>
  <span>Hello</span>
  <!-- The space is automatically ignored by the animation. -->
  <span> </span>
  <span>World</span>
</h2>
```

Now the parent Animation Group can effectively target each word individually.
