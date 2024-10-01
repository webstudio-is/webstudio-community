---
description: >-
  Use Collection to iterate over data and repeat the same structure but with
  different data for each iteration.
---

# 💾 Collection

<figure><img src="../../.gitbook/assets/collection-component.png" alt="Collection component" width="317"><figcaption></figcaption></figure>

## Why Collections are needed

Let's say you are building a list of all your blog posts. Each blog post will have an image, a title, and a link.&#x20;

You have 50 blog posts. Does this mean you need to duplicate your design 50 times manually? No.&#x20;

Collections let you design something once, and it will repeat it for every item in the array and contain the data for the current iteration (e.g., the blog post title).

## What's an array?

An array is a programming term that generally translates to **a list of data**.&#x20;

In the case of blog posts, this might look like the following:

```javascript
0 { title: "Hello world"},
1 { title: "Lorem ipsum"},
2 { title: "Webstudio rocks!" }
```

{% hint style="warning" %}
It's important that when binding data to a Collection, **you must bind the array**, i.e., the data you want to iterate over. If you don't bind the array, you'll receive an error:\
\
"The Collection component requires an array in the data property. When binding external data, it is likely that the array is nested somewhere within, and you need to provide the correct path in the binding."
{% endhint %}

<figure><img src="../../.gitbook/assets/collection-error.png" alt="Error when binding a value other than an array"><figcaption><p>Error when binding a value other than an array</p></figcaption></figure>

If you are binding external data, the array is nested somewhere within.

<figure><img src="../../.gitbook/assets/right-and-wrong-way-collections.png" alt="Right and wrong ways to bind data to a collection"><figcaption><p>Example of where they array is at for an external service (will vary for each service)</p></figcaption></figure>

In the image, the data bound to the component is:

1. ❌ Not the array
2. ❌ The first item in the array (0), not the entire list
3. ✅ The array

It's unclear why each item is correct or incorrect by just looking at the image, so let's clarify.

**You'll know when you get to the array when the next items in the autocomplete are numbers.** The numbers represent each item in the list. Once you see the numbers, backspace, as you don't want to select one item; you want the list.

<figure><img src="../../.gitbook/assets/component-array.png" alt="Autocomplete showing array items in Binding"><figcaption><p>The numbers indicate each item in the list/array</p></figcaption></figure>

## How to use Collection

Add the Collection component to the canvas and either manually enter data (less common) or [bind data](../foundations/expression-editor.md#binding) to it (more common).

**The Collection iterates over the array, so you must bind just the array portion of your variable to it. See** [**What's an Array**](collection.md.md#whats-an-array) **for more info.**

Optionally, rename the default Collection Item variable to something more semantic. If you are iterating over blog posts, name it "Blog Post."

Now, you can add components to the Collection, and the Collection will automatically duplicate it for the number of items in the array. If you have multiple components, wrap everything in a [Box](box.md.md) component.

Next, [bind](../foundations/expression-editor.md#binding) the Collection Item (or whatever you named it) to the various components. You will see it output a different value depending on the iteration.

## Using Collections with Radix Components <a href="#using-collections-within-accordions" id="using-collections-within-accordions"></a>

When working with [Radix Components](../radix/), you might want to dynamically generate items for various components such as accordions, tabs, or menus.

**You must provide the Value field with a unique value for each item.** This is commonly done by binding an ID or slug from the dynamic data to the field.

For an accordion, it would look like this:

<figure><img src="../../.gitbook/assets/accordion-collection.png" alt=""><figcaption><p>The Item has a unique value from the dynamic data bound to the Value field</p></figcaption></figure>
