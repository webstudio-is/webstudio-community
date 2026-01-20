# Switch

The Switch component is a toggle control that allows users to turn an option on or off. It's similar to a checkbox but provides a more visual representation of the binary state.

## When to Use

Use Switch for:
- Settings that take effect immediately
- Enabling/disabling features
- Dark mode toggles
- Notification preferences
- Any on/off binary choice

## Structure

The Switch component consists of:

| Component | Description |
|-----------|-------------|
| **Switch** | The track/background element |
| **Switch Thumb** | The circular indicator that moves |

## How to Use

1. Drag a **Switch** component from Components > Radix onto your canvas
2. The component comes with the track and thumb pre-configured
3. Style the track for both checked and unchecked states
4. Style the thumb position and appearance
5. Connect to form or add interactions as needed

## Properties

| Property | Description |
|----------|-------------|
| **id** | Unique identifier, useful for connecting to labels |
| **name** | Form field name for submission |
| **value** | The value submitted with forms when checked |
| **checked** | Whether the switch is on |
| **required** | Whether toggling on is required |

## Styling States

Use the States selector to style different states:

- **Checked** (`[data-state=checked]`) - Switch is on
- **Unchecked** (`[data-state=unchecked]`) - Switch is off
- **Disabled** (`:disabled`) - Switch cannot be interacted with
- **Focus** (`:focus-visible`) - Switch has keyboard focus

### Common Styling Pattern

For the **Switch** (track):
```
Unchecked: gray background
Checked: primary color background
```

For the **Switch Thumb**:
```
Unchecked: positioned left
Checked: positioned right (use translateX)
```

## Accessibility

Switch follows accessibility best practices:

- Keyboard operable (Space to toggle)
- Proper ARIA role and state
- Works with form labels

## Connecting to a Label

For better accessibility and UX, connect the switch to a [Label](label.md):

1. Set an `id` on the Switch (e.g., "dark-mode")
2. Add a Label component
3. Set the Label's `htmlFor` to match the Switch's `id`

## Switch vs Checkbox

| Feature | Switch | Checkbox |
|---------|--------|----------|
| Visual style | Toggle slider | Box with checkmark |
| Best for | Settings, preferences | Multiple selections, forms |
| Takes effect | Immediately | Often on submit |

## Tips

- Use switches for settings that apply immediately
- Always provide a visible label
- Ensure sufficient color contrast between states
- Consider adding a transition for smooth animations

