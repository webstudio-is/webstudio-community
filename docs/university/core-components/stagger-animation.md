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

* **`0`**: Disables the transition animation for each element. Elements **appear instantly** one after the other in sequence.
* **`1`**: Classic stagger effect. Only **one** element animates (with its transition, e.g., fade-in) at any given time.
* **`> 1`**: Overlapping stagger effect. **Multiple** elements animate concurrently. The number specifies the maximum elements animating simultaneously (e.g., `3` means up to three animate at once), creating a smoother, wave-like reveal.
