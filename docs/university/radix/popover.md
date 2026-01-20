# Popover

The Popover component displays rich content in a floating panel that appears next to a trigger element. Unlike tooltips, popovers can contain interactive content like forms, buttons, and links.

## When to Use

Use Popover for:
- User profile dropdowns
- Quick edit forms
- Additional options or settings
- Preview cards
- Any interactive floating content

## Structure

The Popover component consists of several parts:

| Component | Description |
|-----------|-------------|
| **Popover** | The root component that manages open/close state |
| **Popover Trigger** | The element that opens the popover when clicked |
| **Popover Content** | The floating panel containing your content |
| **Popover Close** | Optional button to close the popover |

## How to Use

1. Drag a **Popover** component from Components > Radix onto your canvas
2. Customize the trigger (usually a button)
3. Add your content inside the Popover Content
4. Optionally add a Close button using Popover Close
5. Style the content panel and adjust positioning

## Properties

### Popover

| Property | Description |
|----------|-------------|
| **open** | Controls whether the popover is visible. Use for styling on the canvas |

### Popover Content

| Property | Description |
|----------|-------------|
| **side** | Preferred side: `top`, `right`, `bottom`, or `left` |
| **sideOffset** | Distance in pixels from the trigger |
| **align** | Alignment: `start`, `center`, or `end` |
| **alignOffset** | Offset from the alignment position |

## Accessibility

Popover follows accessibility best practices:

- Focus moves to the popover content when opened
- Pressing `Escape` closes the popover
- Clicking outside the popover closes it
- Focus returns to the trigger when closed

## Popover vs Tooltip

| Feature | Popover | Tooltip |
|---------|---------|---------|
| Trigger | Click | Hover/Focus |
| Interactive content | Yes | No |
| Use case | Actions, forms | Hints, labels |

## Tips

- Use appropriate `side` and `align` properties to position content where it won't be cut off
- Include a close button for better usability on touch devices
- Keep popover content focused and concise

