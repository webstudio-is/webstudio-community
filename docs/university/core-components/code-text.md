# 📄 Code Text Component

The Code Text component displays inline code snippets with monospace formatting. It renders as a `<code>` HTML element, making it semantically correct for representing code, filenames, or technical terms.

## When to Use

Use Code Text for:
- Inline code references (variable names, function calls)
- Filenames and paths
- Keyboard shortcuts
- Technical terms
- Command examples

## How to Use

1. Drag a **Code Text** component from Components > Text onto your canvas
2. Enter your code or technical text
3. Style to differentiate from regular text

## Default Styling

Code Text typically has:

```css
font-family: monospace; /* or a specific code font */
background-color: #f4f4f4;
padding: 2px 6px;
border-radius: 4px;
font-size: 0.9em;
```

## Styling Recommendations

### Light Theme
```
Background: Light gray (#f4f4f4)
Text: Dark (#333)
Border: 1px solid #e0e0e0 (optional)
```

### Dark Theme
```
Background: Dark (#2d2d2d)
Text: Light (#f0f0f0)
```

## Code Text vs HTML Embed

| Use Case | Code Text | HTML Embed |
|----------|-----------|------------|
| Inline code | ✅ | ❌ |
| Code blocks | ❌ | ✅ |
| Syntax highlighting | ❌ | ✅ (with library) |
| Simple formatting | ✅ | Overkill |

## Accessibility

- Screen readers announce code text with appropriate context
- Use sufficient color contrast
- Don't use Code Text for purely visual styling

## Tips

- Use a monospace font for authentic code appearance
- Add subtle background color to distinguish from surrounding text
- For multi-line code blocks, consider using [HTML Embed](html-embed.md) with a code highlighting library
- Keep inline code short – if it's more than a line, use a code block instead

