---
description: Use the Navigator to view, select, and organize components on your page.
---

# 🗺️ Navigator

The Navigator is a hierarchical panel on the left side of the builder that shows every component on the current page as a tree. It reflects the exact nesting structure of your page and is the primary way to select, reorder, and organize components — especially when they are stacked or overlapping on the canvas.

<figure><img src="../../.gitbook/assets/navigator.png" alt="Navigator panel showing a tree of components"><figcaption><p>The Navigator showing the page structure</p></figcaption></figure>

## Selecting components

Click any item in the Navigator to select it. The selected component is also highlighted on the canvas. Selecting from the Navigator is especially useful for:

- Components that are invisible or have zero size on the canvas
- Components hidden behind other components
- Components inside a collapsed container

## Renaming components

Double-click any item in the Navigator to rename it. Use descriptive names like "Hero Section" or "Product Card" to make large projects easier to navigate.

## Reordering and nesting

Drag items in the Navigator to reorder or re-nest them. This is the most reliable way to restructure deeply nested layouts.

## Show / hide

Right-click any item in the Navigator to toggle its visibility on the canvas. Hidden components are still rendered in the published site unless you use a [display condition](expression-editor.md#binding) or set `display: none` in the Style Panel.

## Global Root

At the top of the Navigator is the **Global Root**. It is the highest level in the component tree and its styles apply to every page in the project. Use it to set:

- Global font size (affects all `rem`-based values site-wide)
- Line height and font family defaults
- [CSS variables](css-variables.md) that should be available everywhere

<figure><img src="../../.gitbook/assets/global-root.png" alt="Global Root at the top of the Navigator"><figcaption><p>Global Root — styles here apply to every page</p></figcaption></figure>

{% hint style="info" %}
Global Root uses the `:root` CSS selector under the hood. Changing `font-size` here affects the base for all `rem` units across the site.
{% endhint %}

## CSS preview

Below the component tree, the Navigator shows a **CSS Preview** — a read-only view of the computed CSS styles applied to the currently selected component. It is useful for quickly checking what styles are active without opening the Style Panel.

## Related

- [Anatomy of the builder](anatomy-of-the-webstudio-builder.md) – Overview of all builder panels
- [Style panel](style-panel.md) – Apply styles to selected components
- [CSS variables](css-variables.md) – Define global variables on the root
- [Expression editor](expression-editor.md) – Conditionally show or hide components
