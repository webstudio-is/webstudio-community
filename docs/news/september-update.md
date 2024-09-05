---
description: A lot has happened in the last 3 months, let me give you some highlights!
---

# 🆕 September Update

## 1. Paste from Webflow

{% embed url="https://vimeo.com/984985222" %}

We added the ability to copy elements in Webflow and paste them in Webstudio. Copying and pasting is a huge efficiency booster for any tool, especially in the coding world. We are trying to incorporate as much copy-pasting functionality into the builder as possible to speed up your workflows.\
\
Previously, you were able to copy and paste [Markdown](../university/foundations/copy-paste/markdown.md), copy and paste Webstudio instances between pages and projects, and now we've added the ability to [copy and paste from Webflow](../university/foundations/copy-paste/webflow.md) into Webstudio (there are some [limitations](../university/foundations/copy-paste/webflow.md#what-does-and-doesnt-transfer)).  See the [announcement on X](https://x.com/getwebstudio/status/1813282002503619009).

## 2. Static Site Export

{% embed url="https://www.youtube.com/watch?v=-ZIUpvoCXQU" %}
Static Export
{% endembed %}

Webstudio is more than a static site builder, its for dynamic, data-driven sites and apps, but you can still build great static sites with it and we made it possible to export a static site.&#x20;

With [this update](https://x.com/getwebstudio/status/1820504786820903159), we made [self-hosting static sites](../university/self-hosting/#static-site) for free SUPER EASY.

* One-click download
* Human-readable classes – Host anywhere (Vercel, Netlify, Cloudflare Pages, GitHub Pages, etc.)
* Downloads Dynamic Resource data for you
* Free to use

You can also use the [CLI](../university/self-hosting/cli.md) to build a static site.

## 3. Components search & new keyboard shortcuts

{% embed url="https://x.com/getwebstudio/status/1826284832478896270" %}

<figure><img src="../.gitbook/assets/image (7).png" alt="search box on components"><figcaption><p>Components Search</p></figcaption></figure>

Now you can quickly access components from the keyboard and insert them. \
\
`A` - opens the components panel, where you can start typing right away\
`Z` - opens navigator\
`S` - opens the style panel\
`D` - opens the settings panel\
\
Read about all [available shortcuts](../university/foundations/shortcuts.md).

## 4. Image transformations for 3rd party URLs

With this update, you can use a remote image URL with the [Image component](../university/core-components/image.md), for example when working with APIs, and it will be transformed on the fly to an optimal format (e.g., WebP or AVIF) and rendered responsively depending on the viewport size.

## 5. Markdown Embed Component

{% embed url="https://www.youtube.com/watch?v=wTpDo4ieFYs" %}

With [this update](https://x.com/getwebstudio/status/1822270103452319872), we added a "[Markdown Embed](../university/core-components/markdown-embed.md)" component. Now you can render and style Markdown—whether it's written directly in Webstudio or fetched from any CMS. It is 100% server-side, SEO friendly!

## 6. Headless CMS finder

To help you find the right CMS for your needs, we launched a [CMS finder tool](https://wstd.us/cms-finder) which gives you an easy way to filter.

{% embed url="https://x.com/getwebstudio/status/1825615442481750408" %}
CMS Finder launch
{% endembed %}

## 7. CSS Transforms

{% embed url="https://youtu.be/AypQNEU3tlM" %}

These enable you to rotate, skew, translate, and apply other effects to your designs – all without writing code.

## 45 other features

1. Show/hide toggle in the navigator.
2. Support for `text-wrap`.
3. Support for `-webkit-line-clamp`.
4. Highlight navigator item when a canvas instance is hovered.
5. Display properties already applied to the node at the top of the transition property list.
6. Add a download attribute to the link component.
7. Support multiple timestamp formats in the Time Component.
8. Add a keyboard shortcuts link to the menu.
9. Highlight markdown in the code editor.
10. Tolerate comma instead of dot typos in style value inputs.
11. Added a navigator panel keyboard shortcut and refined navigator docking behavior.
12. Add `offset-position` and `offset-anchor` properties under the advanced section.
13. Compare server and client versions, prompting a reload if necessary.
14. Custom font family support.
15. Use classes for preset styles when generating CSS for published sites.
16. Remove `data-ws-*` attributes from the build.
17. Submit webhook forms without n8n.
18. Retain the original case of custom attributes.
19. Move the bug report option to the help menu.
20. Display the show/hide state of navigator items.
21. Add the ability to place images on the canvas immediately upon upload.
22. Upload images via copy-paste.
23. Switch to overflow longhand properties.
24. Add an ‘optimize’ property to the Image component.
25. Merge longhand CSS into shorthand properties.
26. Add a native select control.
27. Expand background-position shorthand support.
28. Show custom layer names in the style panel for better readability.
29. Redesigned toasts.
30. Enable URL drop functionality in the Image Manager.
31. Builder loading improvements.
32. Save the navigation path in the history when using a link.
33. Restore system parameters from the first entry in the history.
34. Match unambiguous variables by name.
35. Add a marketplace section in the page settings.
36. Insert marketplace pages.
37. Improve component autoplacement when inserting via 1-click or paste in the components panel.
38. Improve resource body handling.
39. Add a UI section for filters and backdrop-filters.
40. Warn users when using browser zoom on the canvas.
41. Add an email option to the dashboard menu.
42. Fullscreen preview when on the base breakpoint.
43. Simple bot protection to reduce spam on forms.
44. Custom font family support (duplicated, remove if necessary).
45. Support for drag-and-drop in the Image Manager.

## 140+ fixes and improvements

See [Release 0.178.0](https://github.com/webstudio-is/webstudio/releases/tag/0.178.0) and older for detailed changelog.

