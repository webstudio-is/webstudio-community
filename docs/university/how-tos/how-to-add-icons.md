# ▶ How to add icons

{% embed url="https://youtu.be/IqoNtd6g57E?si=EVapmuGdHLY0WMFh" %}

This guide shows you how to easily add icons to your Webstudio website.

## Method 1: Using HTML Embed with SVG Icons

The most flexible approach is to use SVG icons with the HTML Embed component.

### Step-by-Step

1. Find an icon from a library like [Heroicons](https://heroicons.com/), [Lucide](https://lucide.dev/), or [Feather Icons](https://feathericons.com/)
2. Copy the SVG code for the icon
3. In Webstudio, add an **HTML Embed** component where you want the icon
4. Paste the SVG code into the HTML Embed
5. Style the icon using CSS (color, size, etc.)

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

## Method 2: Using Icon Fonts

You can also use icon fonts like Font Awesome:

1. Add the Font Awesome CSS to your project's custom code (Project Settings > Custom Code)
2. Use an HTML Embed with the icon's HTML class: `<i class="fa-solid fa-star"></i>`

## Method 3: Using Image Component

For simple icons that don't need color changes:

1. Export your icon as PNG or SVG file
2. Upload to Webstudio Assets
3. Add an Image component and select the uploaded icon
4. Set appropriate width/height

## Best Practices

| Approach | Pros | Cons |
|----------|------|------|
| SVG in HTML Embed | Full control, scalable, colorable | More setup |
| Icon Font | Easy to use | Extra HTTP request, limited customization |
| Image | Simple | Not easily colorable |

## Tips

- Use consistent icon sizes throughout your site (e.g., 20px, 24px, 32px)
- Ensure icons have sufficient color contrast
- Add accessible labels for icon-only buttons using `aria-label`
- Consider creating reusable icon components using [Slots](../core-components/slot.md)

