---
description: >-
  This guide discusses the anatomy of the Webstudio Builder, an all-in-one
  visual development platform that allows you to build advanced websites.
---

# 🛠️ Anatomy of the Webstudio Builder

***

{% embed url="https://www.youtube.com/playlist?list=PL4vVqpngzeT4Bfs_D25xNi_qNMY99R928" %}
Webstudio 101 Playlist
{% endembed %}

***

## Canvas

The canvas provides a visual representation of the website you are creating. After adding components from the Components Panel, you can arrange and style their instances on the canvas.

<figure><img src="../../.gitbook/assets/canvas.png" alt="Canvas"><figcaption></figcaption></figure>

***

## Navigator

The Navigator Panel is a hierarchical overview of all instances on your page. It displays the website’s structure, showing the nesting and relationships between different instances. You can select the instance of any component inside your Project by clicking it on the canvas or inside the navigator.

In the bottom half of the navigator, you will find the CSS Preview section, which is a real-time preview of the CSS styles applied to your selected instance.

<figure><img src="../../.gitbook/assets/navigator.png" alt="" width="373"><figcaption></figcaption></figure>

### Global Root

In the Navigator is the Global Root, the highest level of the page. Changes made to it apply to every page. It’s useful for setting global styles, such as font size and line height, and defining [CSS variables](css-variables.md) so they are accessible on every instance on every page. Changing the font size on the root affects all CSS properties that use REM, as this unit is relative to the root font size. For example, `1rem` outputs as `1 x root font size`.

{% hint style="info" %}
Global Root uses the`:root` [CSS selector](https://developer.mozilla.org/en-US/docs/Web/CSS/:root) under the hood.
{% endhint %}

<figure><img src="../../.gitbook/assets/global-root.png" alt="Global Root"><figcaption><p>Global Root</p></figcaption></figure>

***

## Breakpoints

Breakpoints are crucial for creating responsive websites that adapt to different screen sizes and devices. _Style_ changes you make on one breakpoint cascade, or affect, that breakpoint and all the smaller ones.

{% hint style="success" %}
You can create custom breakpoints and change `max-width` queries to `min-width` so styles cascade up.
{% endhint %}

{% hint style="warning" %}
Adding too many breakpoints or mixing and matching `min-width` and `max-width` will make maintenance difficult. The default breakpoints suffice more in the majority of use cases.
{% endhint %}

<figure><img src="../../.gitbook/assets/breakpoints.png" alt="Webstudio Breakpoints"><figcaption></figcaption></figure>

By defining how components should behave at different screen sizes, you can ensure your website looks great on various devices, including desktops, tablets, and smartphones.

{% hint style="info" %}
When you select a breakpoint, such as 991, you’ll notice that the canvas is sized to 768. This is intentional. The goal is to style for the minimum (or maximum, if using min-width) to ensure all design issues are addressed at the "extreme" end of that breakpoint. When the viewport changes to 767, the next breakpoint is triggered.
{% endhint %}

***

## Components Panel

The Components Panel contains a list of all available [components](../core-components/) that you can add to your Webstudio Project. You can do this by clicking the components in the panel or dragging and dropping them on the canvas.

Components are grouped into sections like General, Text, Media, Forms, and [Radix](../radix/). For example, the Text section has all typography-related components, while the Form section nests the building blocks of a form.&#x20;

<figure><img src="../../.gitbook/assets/components.png" alt="Add components" width="279"><figcaption></figcaption></figure>

***

## Assets Panel

The Assets Panel is the second panel to the left of your canvas, and this is where all the static files are stored. You can upload, organize, and manage project assets inside this panel before using them on the canvas.

***

## Pages Panel

The Pages Panel offers an overview of the website’s page structure and hierarchy, and it is the last panel on the left side of your canvas, under the Components and Assets Panels.

You can use this panel to add new pages to your Webstudio site, set the homepage, rename existing ones, and configure fields for social sharing and search engines.

***

## Style Panel

The Style Panel is located to the right of the canvas, and you can use it to customize the appearance and layout of a selected instance. It offers access to all CSS properties, visually.

<figure><img src="../../.gitbook/assets/style-panel.png" alt="Style Panel" width="256"><figcaption></figcaption></figure>

There are three methods for adding styles:

1.  Local - By default, the Local icon is active, meaning any styles you apply to that instance are for that instance only. The dot in the middle of the Local icon indicates that it has styles, whereas no dot indicates that there are no styles applied, making it easy to identify which ones have styles applied.

    <img src="../../.gitbook/assets/local.png" alt="Local style source" data-size="original">
2. [CSS Variables](css-variables.md) - Instead of pasting in your colors, sizes, and other styles, you can create a variable for each style and access the variables in each input field. For example, you can define a variable called "color-primary," and in your border color field, you can enter the variable name instead of the color itself.
3. [Tokens](design-tokens.md) - These enable reusing groupings of styles across your site. You can either create a new Token and apply styles to it or start with Local and convert it to a Token. Tokens are typically comprised of CSS variables and one-off styles.

### Label colors

The style input labels change colors indicating there is a style present.

| Label color                                                            | What it means                                                                                                                                                                                                       |
| ---------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <mark style="background-color:blue;">**Blue**</mark>                   | This style is on the current Token.                                                                                                                                                                                 |
| <mark style="color:orange;background-color:orange;">**Orange**</mark>  | This style is coming from another source: a Token that is not selected, a state not selected (e.g., you're on hover but the style is local), inherited from a parent instance, or cascaded from another breakpoint. |
| <mark style="background-color:yellow;">**Gray**</mark>                 | This is a Webstudio or browser default style (like font-family: arial).                                                                                                                                             |
| <mark style="color:red;background-color:red;">**Red**</mark>           | This style is on the current Style Source, but it’s being overwritten by something else in the Style Source input, such as Local or another Token.                                                                  |

{% hint style="info" %}
The order of tokens in the Style Source Input matters. When multiple Tokens have a value for the same property, Tokens toward the end of the list will overwrite Tokens toward the beginning of the list.
{% endhint %}

***

## Settings Panel

The Settings Panel is on the right side of your canvas. You can use this panel to access and edit component-specific properties (such as ID or class) and [Data Variables](variables.md) for a selected instance, enabling you to store reusable content and fetch APIs — a building block of [CMS](cms.md).

***

## Modes

[Modes](anatomy-of-the-webstudio-builder.md#modes) change the Builder’s behavior, such as previewing your site without distractions.

<figure><img src="../../.gitbook/assets/modes.png" alt="mode switcher"><figcaption></figcaption></figure>

***

## Share Dialog

The [Share Dialog](share-links.md) allows you to create shareable personal links to your Project with varying permissions.

***

## Publish Dialog

The [Publish Dialog](anatomy-of-the-webstudio-builder.md#publish-dialog) enables you to add a custom domain, publish to Staging and/or your custom domain, and [export your Project](../self-hosting/).

{% hint style="info" %}
Publishing currently takes around 45 seconds. During publishing, your Project is built into a JavaScript app and deployed to 300+ servers around the world.
{% endhint %}
