---
description: Markdown Embed converts Markdown to HTML and enables styling it.
---

# 🪜 Markdown Embed

<div align="left">

<figure><img src="../../.gitbook/assets/markdown-embed.png" alt="Markdown Embed Component" width="519"><figcaption></figcaption></figure>

</div>

## Why Markdown Embed is needed

Some APIs (or users) provide rich text in Markdown format, which can't be rendered in the web browser. Markdown Embed converts Markdown to HTML and enables applying styles to the various tags contained within HTML.

## How to use Markdown Embed

Markdown Embed is located in Components > Data.

### 1. Add Markdown

Once added to the canvas, the right panel will show a Code field. You can either add Markdown directly to it or, more commonly, bind Markdown to it from a Resource.

<figure><img src="../../.gitbook/assets/markdown-embed-code.png" alt="Markdown bound to Markdown Embed component"><figcaption><p>CMS data bound to Markdown Embed Code</p></figcaption></figure>

### 2. Style

In the Navigator, Markdown Embed has various HTML tags nested. Expand Markdown Embed, and you’ll see tags such as Heading 1, Link, Image, and much more.

<figure><img src="../../.gitbook/assets/markdown-embed-style.png" alt="Markdown Embed List styled"><figcaption><p>List selected and styled</p></figcaption></figure>

Styles applied to each of these tags will apply to all occurrences of that tag within the Markdown Embed. For example, if you apply a border on the Image tag, then all images contained within the HTML will have a border.

### Similar components

{% content-ref url="html-embed.md" %}
[html-embed.md](html-embed.md)
{% endcontent-ref %}

{% content-ref url="content-embed.md" %}
[content-embed.md](content-embed.md)
{% endcontent-ref %}
