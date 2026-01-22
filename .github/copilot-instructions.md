# Copilot Instructions for Webstudio Documentation

This file contains guidelines and learnings for AI assistants working on the Webstudio documentation repository.

## GitBook Structure

### SUMMARY.md is Critical

The `docs/SUMMARY.md` file is the **table of contents** for GitBook. Every documentation page must be listed here for:

1. **Navigation**: Pages not in SUMMARY.md won't appear in the sidebar
2. **Content References**: The `{% content-ref %}` blocks only render as nice cards when the target file is in SUMMARY.md. Otherwise, they display as ugly raw GitHub URLs.

**Always add new documentation files to SUMMARY.md immediately after creating them.**

### SUMMARY.md Format

```markdown
- [📦 Display Name](path/to/file.md)
  - [📄 Child Page](path/to/child.md)
```

- Use emojis for visual hierarchy
- Paths are relative to the `docs/` folder
- Indent with 2 spaces for nested pages

### Content Reference Blocks

GitBook uses special syntax for page links:

```markdown
{% content-ref url="relative-path.md" %}
[relative-path.md](relative-path.md)
{% endcontent-ref %}
```

**Important**: The referenced file MUST exist in SUMMARY.md for this to render as a card.

## Link Guidelines

### Internal Links

- Use relative paths: `[Link Text](../folder/file.md)`
- For same-folder links: `[Link Text](file.md)`
- With anchors: `[Link Text](file.md#section-id)`

### Common Link Mistakes to Avoid

1. **Linking to non-existent files** - Always verify the target file exists
2. **Linking to files not in SUMMARY.md** - Add them first
3. **Using absolute paths** - Use relative paths instead
4. **Broken anchors** - Verify section IDs exist

### Checking Links

Before committing, verify links:

```bash
# Find all internal markdown links
grep -oh '\[.*\](.*\.md[^)]*)' docs/**/*.md | sort -u

# Check if linked files exist
cd docs && for f in $(grep -oE '\([a-z/.-]+\.md\)' SUMMARY.md | tr -d '()'); do 
  test -f "$f" || echo "MISSING: $f"
done
```

## Writing Style Guide

### Voice and Tone

- **Direct and instructional**: Use imperative mood ("Add a component" not "You should add a component")
- **Concise**: Get to the point quickly. Avoid filler words, redundant explanations, and unnecessary context. Shorter is better.
- **Friendly but professional**: Helpful without being overly casual
- **Present tense**: "The component renders" not "The component will render"
- **Purposeful**: Every sentence must benefit the user. Before adding any content, ask: "Why does the reader need this?" If you can't answer clearly, don't include it.

### Document Structure

Every component/feature doc should follow this structure:

```markdown
# 📦 Component Name

> See [MDN: Element](https://developer.mozilla.org/...) <!-- if applicable -->

Brief one-paragraph description of what the component does and its primary use case.

## When to Use

Use ComponentName for:
- Use case 1
- Use case 2
- Use case 3

## How to Use

1. Step-by-step instructions
2. With numbered lists
3. For sequential actions

## Properties

Some commonly used properties (see the Settings panel for all available options):

| Property | Type | Description |
|----------|------|-------------|
| `prop1` | String | What it does |
| `prop2` | Boolean | What it controls |

## Styling

CSS/styling guidance specific to this component.

## Examples

### Example Title

Concrete example with code if needed.

## Related

- [Related Component](related.md) – Brief description
- [Related Concept](../foundations/concept.md) – Brief description
```

### Formatting Conventions

#### Headings

- `#` - Page title only (one per page)
- `##` - Main sections
- `###` - Subsections
- `####` - Rarely used, for deeply nested content

#### Code

- Inline code for: component names, properties, CSS values, file names
  - Example: The `Image` component accepts a `src` property
- Code blocks for: multi-line code, terminal commands, examples

#### Lists

- **Bullet lists**: For unordered items, features, options
- **Numbered lists**: For sequential steps, procedures

#### Emphasis

- **Bold**: UI elements, important terms on first use
- *Italic*: Emphasis, technical terms, slight stress

#### Tables

Use for properties, comparisons, structured data:

```markdown
| Column 1 | Column 2 | Column 3 |
|----------|----------|----------|
| Data     | Data     | Data     |
```

### Component Documentation Specifics

#### Title Format

Use emoji + component name:
- 📦 for layout/container components
- 📝 for text/form components  
- 🖼️ for media components
- 🔗 for navigation components
- 🎬 for animation components
- ⚙️ for utility components

#### MDN References

**Always include an MDN link** when documenting components that wrap HTML elements, CSS properties, or web APIs. Place it directly below the title:

```markdown
> See [MDN: \<element\>](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/element)
```

Common MDN link patterns:
- HTML elements: `https://developer.mozilla.org/en-US/docs/Web/HTML/Element/{element}`
- CSS properties: `https://developer.mozilla.org/en-US/docs/Web/CSS/{property}`
- Web APIs: `https://developer.mozilla.org/en-US/docs/Web/API/{API}`

Examples:
- Image → [MDN: \<img\>](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img)
- Form → [MDN: \<form\>](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/form)
- Time → [MDN: \<time\>](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/time)
- Flexbox → [MDN: Flexbox](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_flexible_box_layout)

#### Related Section

**Always end every documentation page with a Related section** containing 3-5 contextually relevant links:

```markdown
## Related

- [Component Name](component.md) – One-line description
- [Concept Name](../foundations/concept.md) – One-line description
```

### GitBook-Specific Syntax

#### Hints/Callouts

```markdown
{% hint style="info" %}
Informational note
{% endhint %}

{% hint style="warning" %}
Warning message
{% endhint %}

{% hint style="success" %}
Success/tip message
{% endhint %}

{% hint style="danger" %}
Critical warning
{% endhint %}
```

#### Embedded Content

```markdown
{% embed url="https://www.youtube.com/watch?v=VIDEO_ID" %}

{% content-ref url="page.md" %}
[page.md](page.md)
{% endcontent-ref %}
```

#### Figures

```markdown
<figure><img src="../../.gitbook/assets/image.png" alt="Alt text"><figcaption><p>Caption</p></figcaption></figure>
```


## Checklist for New Documentation

- [ ] File created in correct folder
- [ ] Added to `SUMMARY.md`
- [ ] Follows document structure template
- [ ] Has Related section with valid links
- [ ] All internal links verified
- [ ] Emoji in title matches category
- [ ] MDN reference added (if HTML element)
- [ ] Properties table included (if component)

## Common Mistakes to Avoid

1. **Creating docs without adding to SUMMARY.md** - They won't appear in navigation
2. **Linking to deleted files** - Verify links after any file deletions
3. **Inconsistent naming** - Follow existing patterns (kebab-case for files)
4. **Missing Related sections** - Every doc should link to relevant content
5. **Orphaned content-ref blocks** - These show ugly URLs if target not in SUMMARY.md
6. **Forgetting to verify links** - Run link check before committing
