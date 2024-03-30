# ⌨️ HTML Embed

{% embed url="https://www.youtube.com/watch?v=ay0_plImm6w" %}

The HTML Embed component enables the direct integration of custom HTML, CSS, and JavaScript code into your Webstudio project. With this component, you can extend the capabilities of your website, create interactive widgets, integrate external APIs, and implement personalized interactions.

***

### How to use the HTML Embed component

The "HTML Embed" component can be found in Components > General, and you can place it on your canvas by dragging and dropping it or clicking it in the Components panel.

***

### How to add custom code to an HTML Embed instance

You can add your custom HTML, CSS, or JavaScript code to the HTML Embed instance by selecting it and accessing its “Settings”.

#### Code

<figure><img src="../../.gitbook/assets/Screenshot 2024-03-30 at 17.29.27.png" alt=""><figcaption></figcaption></figure>

The "Code" section has a text area for adding your custom code. After you paste your code here, it will be rendered on the canvas. You can add anything to your site including custom widgets, third-party services, API integrations, animations, and interactive content.

#### Run Script on Canvas

The "Run Script on Canvas" toggle allows you to not only render the HTML embed directly on the canvas, but also execute scripts. It will look exactly the same way as when you publish the site.

#### Client Only

If your HTML embed is script-free and only includes items like SVG icons, CSS, or static HTML, you don't need this option.

For embeds with scripts that change HTML, like GSAP animations or sliders, activate the "Client Only" option. This prevents server-side rendering of the HTML. The embed, along with scripts, will render correctly once client-side JavaScript is loaded.

Check out how to embed [GSAP animations](../how-tos/how-to-add-a-gsap-animation.md).

***

### How to reuse your custom code across multiple web pages

You can reuse your custom code across your project by putting it inside a Slot instance.

1. Add an HTML Embed component to your canvas and set it up with custom code of your choice.
2. Add a “Slot” component to your canvas and place your HTML Embed instance inside it.
3. Now, you can copy and paste this slot instance anywhere on your Webstudio project.

Please note that any updates you make inside your slot will update all other instances of that slot.

For more on Slots in Webstudio, refer to [this guide](https://webstudio.is/blog/slot-component).
