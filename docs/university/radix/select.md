# Select

The Select component displays a dropdown list of options for users to choose from. It's a styled alternative to the native HTML `<select>` element with full keyboard navigation and accessibility support.

## When to Use

Use Select for:
- Choosing from a predefined list of options
- Form fields where users must pick one value
- Settings and preferences
- Any dropdown selection

## Structure

The Select component consists of several parts:

| Component | Description |
|-----------|-------------|
| **Select** | The root component managing state |
| **Select Trigger** | The button showing the current value |
| **Select Value** | Displays the selected option's text |
| **Select Content** | The dropdown panel |
| **Select Viewport** | Scrollable container for items |
| **Select Item** | Individual selectable option |
| **Select Item Text** | The text label for an item |
| **Select Item Indicator** | Checkmark shown on selected item |

## How to Use

1. Drag a **Select** component from Components > Radix onto your canvas
2. The component comes pre-configured with sample items
3. Edit, add, or remove Select Items inside the Select Viewport
4. Set the `value` property on each Select Item to identify it
5. Style the trigger and dropdown to match your design

## Using with Collections

To populate Select options dynamically from data:

1. Add a [Collection](../core-components/collection.md) inside the Select Viewport
2. Add a Select Item inside the Collection
3. Bind the `value` property to a unique identifier from your data
4. Bind the Select Item Text to your label field

## Properties

### Select

| Property | Description |
|----------|-------------|
| **name** | Form field name for submission |
| **value** | The currently selected value |
| **open** | Controls dropdown visibility (for styling) |
| **required** | Whether a selection is required |

### Select Item

| Property | Description |
|----------|-------------|
| **value** | Unique identifier for this option (required) |

### Select Value

| Property | Description |
|----------|-------------|
| **placeholder** | Text shown when nothing is selected |

## Accessibility

Select follows accessibility best practices:

- Full keyboard navigation (Arrow keys, Enter, Escape)
- Type-ahead to jump to items
- Screen reader announcements
- Focus management

## Tips

- Always set unique `value` properties on each Select Item
- Use a clear placeholder like "Select an option"
- For long lists, consider grouping options or using a searchable combobox
- The selected value is available in form submissions using the `name` property

