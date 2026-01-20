# ➖ Separator

The Separator component creates a visual divider between content sections. It renders as a semantic `<hr>` (horizontal rule) element or can be styled as a vertical divider.

## When to Use

Use Separator for:
- Dividing sections of content
- Separating items in a list or menu
- Creating visual breaks in long content
- Organizing navigation or sidebar elements

## How to Use

1. Drag a **Separator** component from Components > General onto your canvas
2. Position it between the content sections you want to divide
3. Style using the Style Panel (color, thickness, margins)

## Styling

### Horizontal Separator (Default)

```css
width: 100%;
height: 1px;
background-color: #e0e0e0;
border: none;
margin: 16px 0;
```

### Vertical Separator

For a vertical divider (useful in horizontal layouts):

```css
width: 1px;
height: 100%;
background-color: #e0e0e0;
align-self: stretch;
margin: 0 16px;
```

### Decorative Separator

Create more decorative dividers:

```css
width: 50%;
height: 2px;
background: linear-gradient(to right, transparent, #primary, transparent);
margin: 32px auto;
```

## Properties

| Property | Description |
|----------|-------------|
| **orientation** | `horizontal` (default) or `vertical` |
| **decorative** | If true, removes from accessibility tree |

## Accessibility

- By default, separators are announced by screen readers
- Set `decorative` to `true` if the separator is purely visual
- Use appropriate contrast for visibility

## Separator vs Border

| Use Case | Separator | Border |
|----------|-----------|--------|
| Between sections | ✅ | Maybe |
| Around elements | ❌ | ✅ |
| Semantic meaning | ✅ | ❌ |
| Flexibility | Standalone | Attached |

## Tips

- Use consistent separator styling throughout your site
- Don't overuse separators – whitespace can often serve the same purpose
- Consider whether you need a semantic separator or just visual spacing
- For navigation items, separators can help define clickable areas

