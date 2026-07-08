---
description: Creates a cascading effect by animating child elements sequentially.
---

# 👨‍👨‍👦‍👦 Stagger Animation

Stagger Animation applies the parent animation to one child at a time, producing a smooth, sequential animation flow.

{% hint style="info" %}
Stagger Animation is one component of the animation engine. See [Animations](../foundations/animations.md) for an overview.
{% endhint %}

{% hint style="info" %}
Just remember that you'll need to wrap the Stagger Animation component in an [Animation Group](animation-group.md) to define and control the actual animation behavior. The Animation Group must be the **direct** **parent** of the Stagger Animation.
{% endhint %}

## Sliding Window

Controls how many child elements animate concurrently during the stagger effect.

- **Default**: `1`
- **`0`**: Disables the transition animation for each element. Elements **appear instantly** one after the other in sequence.
- **`1`**: Classic stagger effect. Only **one** element animates (with its transition, e.g., fade-in) at any given time.
- **`> 1`**: Overlapping stagger effect. **Multiple** elements animate concurrently. The number specifies the maximum elements animating simultaneously (e.g., `3` means up to three animate at once), creating a smoother, wave-like reveal.

## Easing

Controls the easing within the sliding window. The default is `linear`. Supported values are `linear`, `easeIn`, `easeInCubic`, `easeInQuart`, `easeOut`, `easeOutCubic`, `easeOutQuart`, `ease`, `easeInOutCubic`, and `easeInOutQuart`.

## Webstudio JSX example

The Stagger Animation component must be the direct child of Animation Group. Put the repeated cards, list items, or rows directly inside Stagger Animation. Start with the default `slidingWindow` and `easing`; add overrides only when you intentionally want a different rhythm.

```tsx
<animation.AnimateChildren
  action={{
    type: "view",
    animations: [
      {
        timing: {
          fill: "backwards",
          rangeStart: ["contain", { type: "unit", value: 0, unit: "%" }],
          rangeEnd: ["contain", { type: "unit", value: 30, unit: "%" }],
        },
        keyframes: [
          {
            offset: 0,
            styles: {
              opacity: { type: "unit", value: 0, unit: "number" },
            },
          },
        ],
      },
    ],
  }}
>
  <animation.StaggerAnimation>
    <ws.element
      ws:tag="article"
      ws:style={css`padding: 20px; border: 1px solid #d1d5db; border-radius: 16px;`}
    >
      Plan
    </ws.element>
    <ws.element
      ws:tag="article"
      ws:style={css`padding: 20px; border: 1px solid #d1d5db; border-radius: 16px;`}
    >
      Build
    </ws.element>
    <ws.element
      ws:tag="article"
      ws:style={css`padding: 20px; border: 1px solid #d1d5db; border-radius: 16px;`}
    >
      Launch
    </ws.element>
  </animation.StaggerAnimation>
</animation.AnimateChildren>
```

## Usage notes

- Stagger Animation applies the parent Animation Group progress to its **direct** children.
- Put the repeated elements, such as cards, list items, images, or text rows, directly inside Stagger Animation.
- Define the animated CSS properties on the parent Animation Group, such as opacity, translate, scale, or rotate.
- Use the regular Style Panel to define the final state of each child. Use Animation Group keyframes to define the starting state for "in" animations or the ending state for "out" animations.

## Related

- [Animation Group](animation-group.md) – Parent container for animations
- [Text Animation](text-animation.md) – Animate text by character/word
- [Collection](collection.md) – Dynamic lists to animate
