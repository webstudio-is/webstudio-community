# ▶ How to add icons

{% embed url="https://youtu.be/IqoNtd6g57E?si=EVapmuGdHLY0WMFh" %}

This guide shows you how to easily add icons to your Webstudio website.

## Method 1: Pasting SVG Directly into the Builder

The easiest approach is to copy SVG code and paste it directly into Webstudio.

### Step-by-Step

1. Find an icon from a library like [Heroicons](https://heroicons.com/), [Lucide](https://lucide.dev/), or [Feather Icons](https://feathericons.com/)
2. Copy the SVG code for the icon
3. In Webstudio, click where you want the icon on the canvas
4. Paste (Cmd+V / Ctrl+V) — Webstudio will automatically create the SVG structure with proper components

Webstudio converts the SVG into native components, giving you full control over styling each part directly in the Style panel.

## Method 2: Using HTML Embed with SVG

For more complex SVGs or when you need the raw SVG code:

1. Add an **HTML Embed** component where you want the icon
2. Paste the SVG code into the HTML Embed
3. Style the icon using inline attributes or CSS

### Styling SVG Icons

To control icon color and size, modify the SVG:

```html
<svg 
  width="24" 
  height="24" 
  fill="none" 
  stroke="currentColor" 
  stroke-width="2"
>
  <!-- icon path here -->
</svg>
```

Using `currentColor` allows the icon to inherit text color from its parent.

## Method 3: Using Icon Fonts

You can also use icon fonts like Font Awesome:

1. Add the Font Awesome CSS to your project's custom code (Project Settings > Custom Code)
2. Use an HTML Embed with the icon's HTML class: `<i class="fa-solid fa-star"></i>`

## Method 4: Using Image Component

For simple icons that don't need color changes:

1. Export your icon as PNG or SVG file
2. Upload to Webstudio Assets
3. Add an Image component and select the uploaded icon
4. Set appropriate width/height

