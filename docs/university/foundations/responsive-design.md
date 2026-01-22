---
description: >-
  Learn how breakpoints work in Webstudio to create responsive designs that adapt to any screen size.
icon: mobile-screen
---

# Responsive Design

Webstudio uses a mobile-first approach with customizable breakpoints to create responsive designs. Styles cascade from larger to smaller breakpoints, allowing you to progressively enhance designs for bigger screens.

## Understanding Breakpoints

Breakpoints are found at the top of the Style Panel. Each breakpoint represents a screen width range.

### Default Breakpoints

- **Base** (≥1280px) - Desktop/large screens
- **1280px** - Laptop/medium desktop
- **991px** - Tablet landscape
- **767px** - Tablet portrait
- **479px** - Mobile

{% hint style="info" %}
You can customize breakpoints in Project Settings to match your design needs.
{% endhint %}

## Style Cascading

Styles cascade **down** to smaller breakpoints:

- Styles set on **Base** apply to all breakpoints
- Styles set on **991px** apply to 991px and all smaller breakpoints
- Each breakpoint can override inherited styles

### Visual Indicators

The Style Panel uses colors to show where values come from:

| Color | Meaning |
|-------|---------|
| **Blue** | Set on the current breakpoint |
| **Orange** | Inherited from a larger breakpoint |

Hover over any property label to see exactly where the value comes from, including the breakpoint, token, and instance.

## Common Responsive Patterns

### Flex Direction Change

Convert horizontal layouts to vertical on mobile:

1. On Base breakpoint: `flex-direction: row`
2. On mobile breakpoint: `flex-direction: column`

### Show/Hide Elements

Display different elements on different screen sizes:

1. Select the element to hide on mobile
2. Go to mobile breakpoint
3. Set `display: none`

To show something only on mobile:
1. On Base: `display: none`
2. On mobile: `display: flex` (or `block`)

### Font Size Adjustments

Scale typography for readability:

- Base: `font-size: 48px` for hero headings
- Mobile: `font-size: 32px`

### Container Max-Width

Adjust content width per breakpoint:

- Base: `max-width: 1200px`
- Tablet: `max-width: 100%` with padding

## Important Concepts

### Only Styles Are Affected

Breakpoints only affect **styles**. Settings and component configurations are universal across all breakpoints. For example:

- Link URLs are the same on all breakpoints
- Image sources don't change per breakpoint
- Component settings apply everywhere

### Responsive Layout Techniques

Use these CSS properties for flexible layouts:

- **Flex wrap**: Items wrap to new rows when space is limited
- **Gap**: Consistent spacing that works with wrapping
- **Percentage widths**: Elements scale proportionally
- **Min/max widths**: Set boundaries for flexible sizing

## Workflow Tips

1. **Start from Base** - Design your desktop layout first
2. **Work downward** - Progressively adjust for smaller screens
3. **Use tokens wisely** - Apply breakpoint-specific styles as Local overrides when needed
4. **Test often** - Preview at each breakpoint using the Preview button

{% hint style="warning" %}
When you select a breakpoint and make style changes, those changes affect the current breakpoint AND all smaller breakpoints (unless overridden).
{% endhint %}
