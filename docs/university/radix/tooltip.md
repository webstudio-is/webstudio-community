# Tooltip

The Tooltip component displays informational text when a user hovers over or focuses on an element. Tooltips provide helpful hints without cluttering the interface.

## When to Use

Use Tooltip for:
- Explaining icon-only buttons
- Providing additional context for form fields
- Showing keyboard shortcuts
- Displaying truncated text in full
- Any brief, non-interactive hint

## Structure

The Tooltip component consists of:

| Component | Description |
|-----------|-------------|
| **Tooltip** | The root component that manages show/hide state |
| **Tooltip Trigger** | The element that shows the tooltip on hover/focus |
| **Tooltip Content** | The floating text that appears |

## How to Use

1. Drag a **Tooltip** component from Components > Radix onto your canvas
2. Place your trigger element (like a button) inside Tooltip Trigger
3. Edit the text inside Tooltip Content
4. Style the tooltip content to match your design

## Properties

### Tooltip

| Property | Description |
|----------|-------------|
| **open** | Force the tooltip open for styling on the canvas |
| **delayDuration** | Delay in milliseconds before showing (default: 700ms) |
| **disableHoverableContent** | Prevents tooltip from staying open when hovering its content |

### Tooltip Content

| Property | Description |
|----------|-------------|
| **side** | Preferred side: `top`, `right`, `bottom`, or `left` |
| **sideOffset** | Distance in pixels from the trigger (default: 4px) |
| **align** | Alignment: `start`, `center`, or `end` |
| **alignOffset** | Offset from the alignment position |

## Accessibility

Tooltip follows the [WAI-ARIA Tooltip pattern](https://www.w3.org/WAI/ARIA/apg/patterns/tooltip/):

- Shows on keyboard focus as well as mouse hover
- Automatically hides when the user interacts elsewhere
- Content is announced by screen readers

## Tooltip vs Popover

| Feature | Tooltip | Popover |
|---------|---------|---------|
| Trigger | Hover/Focus | Click |
| Content | Text only | Rich content |
| Interactive | No | Yes |
| Use case | Hints | Actions, forms |

## Tips

- Keep tooltip text short (1-2 sentences max)
- Don't put essential information only in tooltips
- Avoid tooltips on touch devices unless also providing alternatives
- Use a reasonable delay to avoid tooltips appearing too quickly

