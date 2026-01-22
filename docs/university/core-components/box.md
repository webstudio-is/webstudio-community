# Box

The **Box** component is the fundamental layout building block in Webstudio. It renders a `<div>` by default and serves as the primary container for organizing and structuring your page content.

## Overview

Box is a versatile container component used to:
- Create layout structures using Flexbox or CSS Grid
- Group related elements together
- Apply spacing, backgrounds, and borders
- Build semantic HTML sections using different tag variants

## Tag Options

Box can render different HTML elements depending on the semantic meaning you need:

| Tag | Use Case |
|-----|----------|
| `div` | Generic container (default) |
| `header` | Page or section header |
| `footer` | Page or section footer |
| `nav` | Navigation section |
| `main` | Main content area |
| `section` | Thematic grouping of content |
| `article` | Self-contained composition |
| `aside` | Sidebar or tangentially related content |
| `address` | Contact information |
| `figure` | Self-contained content like images with captions |
| `span` | Inline container |

## Properties

| Property | Type | Description |
|----------|------|-------------|
| `tag` | string | HTML element to render (default: `div`) |
| `id` | string | Unique identifier for the element |
| `class` | string | CSS class names |

## Common Layout Patterns

### Flexbox Container

1. Add a Box component
2. Set Display to "Flex"
3. Configure flex properties:
   - Flex Direction: row, column, etc.
   - Justify Content: alignment along main axis
   - Align Items: alignment along cross axis
   - Gap: spacing between children

### CSS Grid Container

1. Add a Box component
2. Set Display to "Grid"
3. Configure grid properties:
   - Grid Template Columns
   - Grid Template Rows
   - Gap

### Semantic Sections

Use the appropriate tag for better accessibility and SEO:

```
Box (tag: header)
  ├── Logo
  └── Navigation Menu

Box (tag: main)
  ├── Box (tag: article)
  │   └── Content
  └── Box (tag: aside)
      └── Sidebar

Box (tag: footer)
  └── Footer content
```

## Best Practices

1. **Choose semantic tags** - Use `header`, `main`, `footer`, `nav`, `article`, `aside`, and `section` when appropriate to improve accessibility and SEO

2. **Avoid excessive nesting** - Don't wrap elements in unnecessary Box containers

3. **Use Flexbox or Grid** - Leverage CSS layout modes for responsive designs instead of absolute positioning

4. **Apply spacing consistently** - Use gap and padding rather than margins for predictable spacing

## Styling Tips

- **Background**: Apply colors, gradients, or images
- **Border**: Add borders with customizable radius
- **Shadow**: Add depth with box shadows
- **Overflow**: Control content overflow (hidden, scroll, auto)
- **Position**: Use relative positioning to contain absolutely positioned children

## Related Components

- [Element](element.md) - Low-level element for any HTML tag
- [Slot](slot.md) - Reusable content container
