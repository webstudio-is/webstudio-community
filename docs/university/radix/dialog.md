# Dialog

The Dialog component displays content in a modal window that overlays the page. When open, it renders content on top of an overlay that covers the entire window, making the content underneath inert.

## When to Use

Use Dialog for:
- Confirmation prompts ("Are you sure you want to delete?")
- Forms that require focused attention
- Important information that requires acknowledgment
- Content that should interrupt the user's workflow

## Structure

The Dialog component consists of several parts:

| Component | Description |
|-----------|-------------|
| **Dialog** | The root component that manages open/close state |
| **Dialog Trigger** | The button that opens the dialog |
| **Dialog Overlay** | The semi-transparent backdrop behind the dialog |
| **Dialog Content** | The container for the dialog's content |
| **Dialog Title** | The heading of the dialog (required for accessibility) |
| **Dialog Description** | Optional description text |
| **Dialog Close** | Button to close the dialog |

## How to Use

1. Drag a **Dialog** component from Components > Radix onto your canvas
2. The component comes with a pre-configured structure including trigger, overlay, content, title, and close button
3. Customize the trigger button text and styling
4. Edit the Dialog Title and add your content inside Dialog Content
5. Style the overlay and content using the Style Panel

## Accessibility

Dialog follows the [WAI-ARIA Dialog pattern](https://www.w3.org/WAI/ARIA/apg/patterns/dialog-modal/):

- Focus is automatically trapped within the dialog when open
- Pressing `Escape` closes the dialog
- Focus returns to the trigger when closed
- The Dialog Title is required for screen readers

## Properties

| Property | Description |
|----------|-------------|
| **open** | Controls whether the dialog is open. Use this to show/hide the dialog on the canvas for styling purposes |

## Styling States

You can style the dialog based on its state using the States selector:
- **Open** - When the dialog is visible
- **Closed** - When the dialog is hidden

## Tips

- Always include a Dialog Title for accessibility, even if visually hidden
- Use the Dialog Close button or clicking the overlay to close the dialog
- For side panels, consider using [Sheet](sheet.md) instead

