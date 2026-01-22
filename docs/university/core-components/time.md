# 🕐 Time

> See [MDN: \<time\>](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/time)

The Time component displays formatted dates and times with support for localization. It renders a semantic `<time>` HTML element and allows you to format dates according to different languages, countries, and formats.

## When to Use

Use Time for:

- Blog post publication dates
- Event dates and times
- Last updated timestamps
- Any date/time display that needs localization

## How to Use

1. Drag a **Time** component from Components > General onto your canvas
2. Set the `datetime` value (the actual date/time data)
3. Configure the display format using the formatting properties
4. Optionally bind dynamic dates from your CMS

## Properties

Some commonly used properties (see the Settings panel for all available options):

### Core Properties

| Property     | Description                                       |
| ------------ | ------------------------------------------------- |
| **datetime** | The date/time value (ISO 8601 format recommended) |

### Formatting Properties

| Property      | Description                          | Example Values                    |
| ------------- | ------------------------------------ | --------------------------------- |
| **language**  | Language code for localization       | `en`, `es`, `fr`, `de`, `ja`      |
| **country**   | Country code for regional formatting | `US`, `GB`, `DE`, `JP`            |
| **dateStyle** | How to display the date              | `full`, `long`, `medium`, `short` |
| **timeStyle** | How to display the time              | `full`, `long`, `medium`, `short` |

## Date Style Examples

For the date `2025-01-20`:

| Style      | en-US                    | de-DE                   |
| ---------- | ------------------------ | ----------------------- |
| **full**   | Monday, January 20, 2025 | Montag, 20. Januar 2025 |
| **long**   | January 20, 2025         | 20. Januar 2025         |
| **medium** | Jan 20, 2025             | 20.01.2025              |
| **short**  | 1/20/25                  | 20.01.25                |

## Using with Dynamic Data

When binding dates from a CMS or API:

1. Bind the `datetime` property to your date field
2. Optionally bind `language` to a dynamic value for multilingual sites
3. The component will format the date according to your settings

### Example Expression

```javascript
// If your CMS returns an ISO date string
myResource.publishedAt;
```

## Localization

The Time component is essential for multilingual sites:

1. Set the `language` property to match the page language
2. For dynamic language, bind to `system.params.lang` (if using language in URL)
3. The date will automatically format according to locale conventions

## Semantic HTML

Time renders as a `<time>` element with a `datetime` attribute:

```html
<time datetime="2025-01-20T10:30:00Z">January 20, 2025</time>
```

This helps search engines and assistive technologies understand the date.
