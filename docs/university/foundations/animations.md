---
description: Scroll-Driven animations are currently the main focus of Webstudio animations.
icon: arrow-up-big-small
---

# Animations

The Webstudio Animation Engine is a powerful, performant, and highly customizable system built on the [Web Animations API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Animations_API), with lightweight [polyfills](https://developer.mozilla.org/en-US/docs/Glossary/Polyfill) to ensure broad browser compatibility. It empowers designers and developers to create sophisticated animations with ease, offering scalability and flexibility for projects of any complexity. Whether you're animating simple transitions or orchestrating intricate, multi-layered effects, this engine provides the tools to bring your vision to life. \
\
If you want to learn the lower-level technical foundation behind Scroll-Driven animations, check out [https://scroll-driven-animations.style/](https://scroll-driven-animations.style/).

## Core Features

* **Extreme Performance** – Optimized for smooth playback, even with complex animations and large-scale projects.
* **Scalability** – Seamlessly handles everything from single-element transitions to nested, multi-group sequences.
* **Full Customization** – Animate any CSS property and stack unlimited Animation Groups for intricate effects.
* **Cross-Browser Support** – Built on the Web Animations API with polyfills to ensure consistent behavior across browsers.

## Key Components

The engine’s user interface is composed of three main components, each designed to work together for a cohesive animation workflow:

1. [**Animation Group**](../core-components/animation-group.md) – The cornerstone of the system, Animation Groups serve as containers that define how their contents animate. They support two trigger types—view-based (viewport entry/exit) and scroll-based (scroll position)—and offer extensive configuration options like axis, scroll source, insets, and debug tools. You can nest Animation Groups infinitely to craft complex, layered animations.
2. [**Text Animation**](../core-components/text-animation.md) – Simplifies animating text by automatically splitting it into individual words or characters, allowing for dynamic effects without manual wrapping.
3. [**Stagger Animation**](../core-components/stagger-animation.md) – Creates a cascading effect by animating child elements sequentially.

## Hover Animations

For interactive effects like hover animations, Webstudio leverages [CSS variables](css-variables.md) with a "parent interaction modifies children" approach. Define hover states on a parent element, then use CSS variables to adjust child element properties dynamically. For more information, see [CSS Variables – Parent-Child Interactions](css-variables.md#parent-child-interactions).

***

The Webstudio Animation Engine is designed to make animations accessible yet powerful, bridging the gap between simplicity and sophistication. Whether you’re building subtle scroll-driven effects or elaborate interactive sequences, it delivers the performance and versatility to match your ambition.
