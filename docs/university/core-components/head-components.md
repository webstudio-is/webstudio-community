---
description: Add meta tags, scripts, and other head elements to your Webstudio pages.
---

# Head Components

Webstudio provides components for adding elements to the document `<head>`, allowing you to control meta tags, external resources, and the page title.

## Overview

The Head Slot and its children let you add custom elements to your page's `<head>` section. This is essential for:

- SEO meta tags
- Social sharing metadata
- External stylesheets
- Preloading resources
- Custom page titles

## Components

### Head Slot

The container component that accepts head-related children. See [Head Slot](head-slot.md) for full documentation.

### Head Title

Sets or overrides the document title.

| Property | Type | Description         |
| -------- | ---- | ------------------- |
| Content  | text | The page title text |

**Usage:**

```
Head Slot
└── Head Title
    └── "My Custom Page Title"
```

The title appears in:

- Browser tab
- Search results
- Bookmarks
- Social shares (if og:title not set)

### Head Meta

Adds custom `<meta>` tags to the document head.

| Property   | Type   | Description                              |
| ---------- | ------ | ---------------------------------------- |
| `name`     | string | Meta name (e.g., description, viewport)  |
| `property` | string | Meta property (e.g., og:title, og:image) |
| `content`  | string | Meta content value                       |

**Common meta tags:**

```
Head Slot
├── Head Meta
│   name: description
│   content: "Page description for search engines"
├── Head Meta
│   property: og:title
│   content: "Title for social sharing"
├── Head Meta
│   property: og:description
│   content: "Description for social sharing"
└── Head Meta
    property: og:image
    content: "https://example.com/image.jpg"
```

### Head Link

Adds `<link>` elements for external resources.

| Property      | Type   | Description                  |
| ------------- | ------ | ---------------------------- |
| `href`        | string | URL of the resource          |
| `rel`         | string | Relationship type            |
| `type`        | string | MIME type                    |
| `as`          | string | Resource type for preloading |
| `crossorigin` | string | CORS setting                 |

**Common uses:**

**External stylesheet:**

```
Head Link
  rel: stylesheet
  href: https://example.com/styles.css
```

**Preload font:**

```
Head Link
  rel: preload
  href: /fonts/custom-font.woff2
  as: font
  type: font/woff2
  crossorigin: anonymous
```

**Favicon:**

```
Head Link
  rel: icon
  href: /favicon.ico
  type: image/x-icon
```

**Canonical URL:**

```
Head Link
  rel: canonical
  href: https://example.com/page
```

## SEO Meta Tags

### Essential Tags

```
Head Slot
├── Head Title → "Page Title | Site Name"
├── Head Meta (name: description) → "Concise page description"
├── Head Link (rel: canonical) → "https://example.com/page"
```

### Open Graph (Social Sharing)

```
Head Slot
├── Head Meta (property: og:title) → "Title"
├── Head Meta (property: og:description) → "Description"
├── Head Meta (property: og:image) → "Image URL"
├── Head Meta (property: og:url) → "Page URL"
├── Head Meta (property: og:type) → "website"
└── Head Meta (property: og:site_name) → "Site Name"
```

### Twitter Cards

```
Head Slot
├── Head Meta (property: twitter:card) → "summary_large_image"
├── Head Meta (property: twitter:title) → "Title"
├── Head Meta (property: twitter:description) → "Description"
└── Head Meta (property: twitter:image) → "Image URL"
```

## Dynamic Head Content

Head components support dynamic content from variables:

```
Head Slot
├── Head Title → {page.title}
├── Head Meta (name: description) → {page.description}
└── Head Meta (property: og:image) → {page.image}
```

## Best Practices

1. **Unique titles**: Each page should have a unique, descriptive title
2. **Title length**: Keep under 60 characters for search display
3. **Description length**: 150-160 characters optimal
4. **Image dimensions**: Open Graph images should be 1200x630px
5. **Use canonical URLs**: Prevent duplicate content issues
6. **Preload critical resources**: Fonts and above-fold images

## Page Settings vs Head Components

Webstudio provides both Page Settings and Head components:

| Page Settings    | Head Components            |
| ---------------- | -------------------------- |
| Basic SEO fields | Custom meta tags           |
| Quick setup      | Full control               |
| Standard tags    | Any valid head element     |
| Per-page UI      | Visual component placement |

Use Page Settings for standard SEO, Head components for advanced needs.

## Related Components

- [Head Slot](head-slot.md) - Head container component
- [HTML Embed](html-embed.md) - For custom head scripts

## Related Documentation

- [SEO Settings](../foundations/seo-settings.md)
- [Project Settings](../foundations/project-settings.md)
