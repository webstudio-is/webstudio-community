---
description: >-
  Paste CSS into Webstudio, and it'll be translated to the various fields in the
  Style Panel.
---

# ↔️ CSS

[CSS](https://developer.mozilla.org/en-US/docs/Web/CSS) is the design language of the internet. With this feature, you can copy CSS from anywhere and paste it into Webstudio, which will parse it and populate the various fields in the Style Panel.

## How to paste CSS

<figure><img src="../../../.gitbook/assets/css-paste.gif" alt="pasting css from Figma into Webstudio"><figcaption></figcaption></figure>

1. Copy CSS declaration(s) such as `background: blue;`.
2. In Webstudio, go to the Style Panel > Advanced > and click "+".
3. Paste the CSS and press enter.

That's it.&#x20;

The styles are parsed and displayed in their respective fields (they will also be shown in the Advanced section).

## Use cases

1. **Design tools like** [**Figma**](https://figma.com/) **and** [**Penpot**](https://penpot.app/) provide CSS, making copying and pasting individual layer styles into Webstudio easier.
2. **Third-party libraries like** [**Open Props**](https://open-props.style/) provide expertly crafted CSS variables, allowing you to import them via paste.
3. **Custom stylesheets** containing Design Systems and other declarations can be imported.
4. Inspect your website with [**DevTools**](https://developer.chrome.com/docs/devtools) and copy the CSS.
5. Online tutorials, [CodePen](https://codepen.io/), ChatGPT, and many other sources provide CSS.

## CSS declarations only

Webstudio liberates website creators from CSS selectors so they don't have to worry about specificity, combo classes, and having an HTML structure tightly coupled with CSS.

Therefore, Webstudio supports pasting CSS declarations, _not_ selectors.

## Tailwind CSS Support

You can paste HTML with Tailwind CSS classes, and Webstudio will automatically convert the Tailwind utility classes into native Webstudio styles.

### How it works

1. Copy HTML containing Tailwind classes (e.g., `<div class="flex items-center gap-4 p-6 bg-white rounded-lg">`)
2. Paste into Webstudio
3. Webstudio creates the component structure and applies the equivalent styles

This is especially useful when:

- Using AI tools that generate Tailwind-based HTML
- Migrating from Tailwind projects
- Using Tailwind component libraries as a starting point

## Related

- [Markdown](./markdown.md) – Paste Markdown to create components automatically
- [Webflow](./webflow.md) – Copy Webflow components into Webstudio
- [Shortcuts](../shortcuts.md) – Keyboard shortcuts for faster workflows
- [Commands and Search](../commands-and-search.md) – Quick access to commands and settings
- [Anatomy of the Webstudio Builder](../anatomy-of-the-webstudio-builder.md) – Overview of the Webstudio interface
