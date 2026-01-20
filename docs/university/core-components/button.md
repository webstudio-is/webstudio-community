# 🔘 Button

The Button component creates clickable buttons for user interactions. Buttons trigger actions like submitting forms, opening dialogs, or navigating when combined with other components.

## When to Use

Use Button for:
- Form submissions
- Triggering actions (open dialog, toggle, etc.)
- Call-to-action elements
- Interactive controls

{% hint style="warning" %}
Buttons are for actions, not navigation. For navigation links, use the [Link](link.md) component instead. If you need a link styled as a button, style the Link component accordingly.
{% endhint %}

## How to Use

1. Drag a **Button** component from Components > Forms onto your canvas
2. Edit the button text
3. Style using the Style Panel
4. Add interactions or connect to form functionality

## Properties

| Property | Description |
|----------|-------------|
| **type** | `submit` (form submission), `reset` (clear form), or `button` (general use) |
| **disabled** | Prevents interaction when true |
| **name** | Name for form submission |
| **value** | Value for form submission |

## Button Types

### Submit Button
Submits the parent form when clicked. Use inside [Form](form.md) or [Webhook Form](webhook-form.md).

### Reset Button
Clears all form fields to their default values.

### Button (Default)
General purpose button for non-form actions. Use with component interactions like opening dialogs.

## Styling States

Style buttons for different states:

- **Default** - Normal appearance
- **Hover** (`:hover`) - Mouse is over the button
- **Focus** (`:focus-visible`) - Keyboard focused
- **Active** (`:active`) - Being pressed
- **Disabled** (`:disabled`) - Cannot be clicked

## Common Button Styles

### Primary Button
```
Background: Primary color
Text: White
Border: None
```

### Secondary/Outline Button
```
Background: Transparent
Text: Primary color
Border: 1px solid primary
```

### Ghost Button
```
Background: Transparent
Text: Primary color
Border: None
```

## Accessibility

- Buttons are automatically keyboard accessible
- Use clear, action-oriented text ("Submit", "Sign Up", not "Click Here")
- Ensure sufficient color contrast
- Disabled buttons should have visual indication

## Tips

- Keep button text concise and action-oriented
- Use consistent button styles throughout your site
- Provide visual feedback on hover and focus
- Don't use buttons as links (use styled Links instead)

