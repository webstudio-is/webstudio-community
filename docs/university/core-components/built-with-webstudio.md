# 🏷️ Built with Webstudio

The Built with Webstudio component displays a badge that links to Webstudio. This badge is automatically included on sites using the free plan and helps support the Webstudio platform.

## Overview

The Built with Webstudio badge is a small, fixed-position element that appears on your published site. It provides attribution to Webstudio and includes a referral link.

## When It Appears

- **Free Plan**: The badge is automatically added to all pages
- **Paid Plans**: The badge can be removed or is not required

## Badge Behavior

The badge:

- Appears in a fixed position on the page (typically bottom corner)
- Contains the Webstudio logo/icon
- Links to `https://webstudio.is` with a referral parameter
- Opens in a new tab when clicked

## Styling

While the badge has default styling, you can customize its appearance:

### Default Position

The badge is positioned fixed to stay visible as users scroll:

```css
position: fixed;
bottom: 16px;
right: 16px;
z-index: 1000;
```

### Customization Options

If customization is allowed on your plan, you can adjust:

- Position (bottom-left, bottom-right, etc.)
- Opacity
- Size
- Background color/transparency

## Properties

| Property | Type | Description |
|----------|------|-------------|
| `href` | String | Link destination (default: Webstudio referral URL) |
| `target` | String | Link target (default: `_blank` for new tab) |

## Removing the Badge

To remove the Built with Webstudio badge:

1. Upgrade to a paid plan that doesn't require attribution
2. The badge will no longer be automatically added to your pages

## Why the Badge Exists

The badge serves several purposes:

- **Attribution**: Credits Webstudio as the platform used to build the site
- **Discovery**: Helps others discover Webstudio
- **Free Plan Support**: Allows Webstudio to offer a free tier sustainably

## Best Practices

- Keep the badge visible and unobstructed
- Don't hide it with CSS on free plans (this violates terms of service)
- Consider upgrading if you need a badge-free professional appearance

## Related

- [Project Settings](../foundations/project-settings.md) – Manage your project's plan and settings
- [Publishing](../foundations/publishing-and-custom-domains.md) – Learn about publishing your site
