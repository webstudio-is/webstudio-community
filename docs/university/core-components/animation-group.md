---
description: The foundation of all animations in Webstudio.
icon: arrow-up-big-small
---

# Animation Group

{% include "../../.gitbook/includes/animations-beta.md" %}

Animation Groups serve as containers that define how their contents animate. You can nest Animation Groups to create complex animations.

{% hint style="info" %}
Animation Group is one component of the animation engine. See [Animations](../foundations/animations.md) for an overview.
{% endhint %}

## Settings

### Run on canvas

By default, animations only run on the canvas when the Animation Group is selected in the navigator. Enable this setting to preview animations while designing other elements.

### Type

Choose between two animation trigger types:

* **View-based** – Triggers when an element enters or exits the viewport. Ideal for entrance and exit animations that respond to element visibility.
* **Scroll-based** – Progresses based on scroll position, perfect for scroll indicators.

### Axis

Defines which scroll direction controls the animation:

* **Y-axis** – Vertical scrolling (default).
* **X-axis** – Horizontal scrolling.

### Scroll source (for scroll-based animations)

Select which scrollable container drives the animation:

* **Nearest** – Uses the closest scrolling container affecting the element.
* **Root** – Uses the main document scroll.
* **Closest** – Uses the nearest ancestor element with scrolling enabled.

### Subject (for view-based animations)

Defines which element's visibility determines the animation progress, allowing animations to be triggered by different elements entering or exiting the viewport.

### Inset

Fine-tune animation start and end points relative to the viewport:

* **Top Inset** – Adjusts when the animation begins.
* **Bottom Inset** – Adjusts when the animation ends.

Positive values delay the animation, while negative values trigger it earlier.

### Debug mode

Enables visualization tools to fine-tune animation timing and progression. When enabled, a small overlay appears displaying animation state details:

* Current status (idle, running).
* Progress percentage.
* Timeline position.

This debugging information is visible only in design mode and does not affect the live site.

## Define your animation

Once your Animation Group settings are configured, define the animation behavior. Webstudio offers preset animations for quick setup while allowing custom animations.

### Animation presets

The available presets depend on the animation type:

#### **View-based animation presets**

* **Fade In** – Smoothly transitions an element from invisible to visible.
* **Fade Out** – Gradually fades an element as it exits the viewport.
* **Fly In** – Moves an element into position upon entry.
* **Fly Out** – Animates an element away upon exit.
* **Wipe In** – Creates a revealing effect.
* **Wipe Out** – Gradually hides content.
* **Parallax In** – Creates depth by moving elements at different speeds during entry.
* **Parallax Out** – Applies a parallax effect as elements exit.

#### **Scroll-based animation presets**

* **Fade In** – Gradually reveals content based on scroll position.
* **Fade Out** – Progressively hides content as the user scrolls.

### Animation properties

Each animation can be customized using the following properties:

#### **Timing**

* **Range Start** and **Range End** – Define when the animation starts and stops, typically based on element position or scroll progress. See [\*\*Scroll-driven Animations \*\*](https://scroll-driven-animations.style/tools/view-timeline/ranges) for an interactive tool that explains the various options.
  * **Entry** – Animates during the subject element entry (starts entering → fully visible)
  * **Exit** – Animates during the subject element exit (starts exiting → fully hidden)
  * **Contain** – Animates only while the subject element is fully in view (fullly visible after entering → starts exiting)
  * **Cover** – Animates entire time the subject element is visible (starts entering → ends after exiting)
  * **Entry Crossing** – Animates as the subject element enters (leading edge → trailing edge enters view)
  * **Exist Crossing** – Animates as the subject element exits (leading edge → trailing edge leaves view)
* **Duration** – Setting a duration will play the animation when it enters the scrollport (taking into account Range Start and Inset), then animate for the duration and end. On the published site, the animation will play just once, but in the builder, it will play multiple times to aid in building. Because the duration dictates when the animation will end, the Range End field will be disabled.
* **Fill Mode** – Controls how an element appears before and after the animation:
  * **None** – Only displays its animation styles _during_ the animation.
  * **Forwards** – The animation transitions from the **canvas styles → animation styles**. Prefered for "_out_" animations.
  * **Backwards** – The animation transitions from the the **animation styles → canvas styles**. Prefered for "_in_" animations. For example, the opacity is "1" by default on the canvas so to fade it in, you'd set "0" in the animation. It then transitions from the animation style (0) to the canvas style (1).
  * **Both** – Combines "Forwards" and "Backwards," transitioning smoothly before and after animation.
* **Easing** – Defines the speed curve of the animation:
  * **Linear** – Moves at a constant speed.
  * **Ease-In** – Starts slow, then accelerates.
  * **Ease-Out** – Starts fast, then decelerates.

#### **Keyframes**

* Define specific points in the animation timeline.
* Each keyframe can modify multiple CSS properties.
* Offset values determine when changes occur (0 to 100).

You can stack multiple animations on the same element by adding additional animations to your Animation Group. This enables complex, multi-step effects.

## CSS Units and Special Variable

The input fields support various units (`px`, `%`, `vh`, `dvh`, `lvh`, etc.), CSS functions (`calc()`, `clamp()`, etc.), or `"auto"` for default values.

Additionally, a special CSS variable is automatically exposed: `--index`. This variable represents the current child's position in the Animation Group sequence (0, 1, 2, etc.).

This is useful for advanced animation patterns, such as:

* Creating unique rotations for each child element using `calc(var(--index) * 45deg)`.
* Applying varying translations with `calc(var(--index) * 100px)`.

You can use this variable anywhere in descendant elements or pass it as a parameter to nested animations, enabling complex, coordinated motion effects.
