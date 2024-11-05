---
description: >-
  Create logical expressions directly in the UI, enabling conditional display,
  fallback values, concatenation, and more.
---

# ➕ Expression Editor

<figure><img src="../../.gitbook/assets/webstudio-expression-editor.png" alt=""><figcaption></figcaption></figure>

Expression Editor is available on every field when clicking the “+” button.

Most commonly used with [Resources](variables.md#resource), Expression Editor has two primary features:

1. Binding (or “connecting”) external data to Webstudio fields. For example, connecting a blog’s featured image that exists in a headless CMS to the Image component in Webstudio.
2. Running logical expressions such as concatenating two or more values or conditionally displaying a section.

{% hint style="info" %}
Hint: Expand Expression Editor to work within a larger window.
{% endhint %}

### Binding

Binding is when you “connect” or “map” various values to fields within Webstudio. For example, when creating a Dynamic Page for a blog, only one page exists in Webstudio, but the values within that page dynamically change based on the URL viewed. The dynamic aspect is enabled by _binding_ the various CMS fields to Webstudio components.

You will see [Variables](variables.md) within the Expression Editor. You can click on the variable or type it in to bind its value to the field. But many times, the value you are looking for is a child within the variable.

Take, for example, the value of a custom Variable called CMS Data:

```json
{
  "title": "Hello World",
  "slug": "hello-world",
  "image": {
    "url": "<https://example.com/image.png>",
    "alt": "I'm an image",
  }
}
```

If you wanted to bind the title of the post to a header component, you need to do more than click on the “CMS Data” Variable. You need to “drill down” or access the children of the variable. This is simply done by typing a `.` after the Variable, which will show the children in the autocomplete (i.e., title, slug, and image). For the title, you would enter `CMS Data.title`, and the value “Hello World” would display. When viewing a different post, that post’s title would display.

For the image URL, you would type `CMS Data.image.url` .

### Expressions

Expression Editor supports a simple subset of JavaScript, giving users a simple syntax without the footguns a complex programming language brings.

The following JavaScript expressions are supported:

* [Ternary operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional\_operator) – Useful for conditions such as “If the image is in my CMS, display it, otherwise hide it.” The actual expression for this would look something like `CMS Data.image ? true : false` and be bound to the “Show” field.
* [Template literals](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template\_literals) – Useful for inserting dynamic values inside templated text. For example, if you wanted to have “Updated On \<insert dynamic data>”, it would look like `` `Updated On ${CMS Data.updatedOn}` ``. Note the Expression starts and ends with backticks, and the dynamic values are within `${}`.
* [Expressions and operators](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions\_and\_Operators) – Useful for concatenating two values (alternative solution to template literals). For example, `"Updated on " + CMS Data.updatedOn`.
