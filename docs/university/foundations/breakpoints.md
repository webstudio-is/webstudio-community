---
description: Add, edit, and manage breakpoints to control how your site responds to different screen sizes and conditions.
---

# 📱 Breakpoints

Breakpoints are found at the top of the builder canvas. They define the screen widths (and other media conditions) at which your site's styles change. Webstudio uses a **desktop-first** cascade — styles set on a larger breakpoint apply downward to all smaller breakpoints unless overridden.

For guidance on how to use breakpoints to build responsive layouts, see [Responsive design](responsive-design.md).

## Default breakpoints

| Breakpoint | Min / Max width | Typical device |
|---|---|---|
| **Base** | ≥ 1280px | Desktop / large screen |
| **1280** | ≤ 1280px | Laptop / medium desktop |
| **991** | ≤ 991px | Tablet landscape |
| **767** | ≤ 767px | Tablet portrait |
| **479** | ≤ 479px | Mobile |

{% hint style="info" %}
When you select the 991px breakpoint, the canvas resizes to 768px. This is intentional — you style for the extreme edge of the breakpoint range to catch all edge cases. When the viewport drops below 767px, the next breakpoint takes over.
{% endhint %}

## How styles cascade

Styles flow **downward** (from larger to smaller):

- A style set on **Base** applies to all breakpoints.
- A style set on **991px** applies to 991px, 767px, and 479px.
- A style set on **479px** applies only to 479px.

Each breakpoint can override styles from larger ones. This means you typically design at Base first, then progressively adjust for smaller screens.

## Adding a breakpoint

1. Click any breakpoint in the top bar to open the breakpoint menu.
2. Click **+** to add a new breakpoint.
3. Set a **width** (for `min-width` or `max-width`) or choose a **media condition** (see below).
4. Give it a label.

## Editing and deleting breakpoints

Click any breakpoint to open its settings. You can change the scale, label, or media condition. Breakpoints can be deleted unless they are the base breakpoint.

## Custom media conditions

Beyond screen width, Webstudio supports any CSS media condition. This lets you style for user preferences and device capabilities:

| Category | Conditions |
|---|---|
| **Color scheme** | `dark`, `light` |
| **Reduced motion** | `reduce`, `no-preference` |
| **Orientation** | `portrait`, `landscape` |
| **Contrast** | `more`, `less`, `no-preference` |
| **Pointer** | `coarse`, `fine`, `none` |
| **Display mode** | `fullscreen`, `standalone`, `minimal-ui`, `browser` |

### Example: dark mode

1. Add a breakpoint, select **Color Scheme: Dark**.
2. Label it "Dark".
3. Select it and style your dark theme — the canvas immediately previews dark mode.
4. The published site automatically switches based on the visitor's system preference.

### Example: reduced motion

1. Add a breakpoint with condition **Reduced Motion: Reduce**.
2. Disable or simplify animations for affected users.
3. Improves accessibility for users with vestibular disorders.

## Style label colors

When a breakpoint is selected, style labels in the Style Panel show:

| Color | Meaning |
|---|---|
| **Blue** | Style set on the current breakpoint |
| **Orange** | Inherited from a larger breakpoint (or another source) |

Hover any label to see a tooltip with the exact source.

{% hint style="warning" %}
Mixing `min-width` and `max-width` breakpoints in the same project makes style cascading harder to reason about. Stick to one direction for maintainability.
{% endhint %}

## Related

- [Responsive design](responsive-design.md) – How to build layouts that adapt to different screen sizes
- [Style panel](style-panel.md) – Apply styles at the selected breakpoint
- [Project settings](project-settings.md) – Breakpoints can also be managed via Project settings
