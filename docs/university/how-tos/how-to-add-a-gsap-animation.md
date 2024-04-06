# 🍀 How to add a GSAP animation

<figure><img src="../../.gitbook/assets/Screenshot 2024-03-30 at 17.29.27.png" alt=""><figcaption></figcaption></figure>

### Embed GSAP library on the page

1. Add HTML [Embed Component](../core-components/html-embed.md) to the canvas
2. Activate "[Client Only](../core-components/html-embed.md#client-only)" setting
3. Optionally activate "[Run script on canvas](../core-components/html-embed.md#run-script-on-canvas)" setting
4. Open GSAP official [installation instruction](https://gsap.com/docs/v3/Installation)&#x20;
5. Copy the scripts into HTML Embed Code in Settings

#### Example

<mark style="color:red;">Attention!</mark> DO NOT USE the "DOMContentLoaded" event. \
In Webstudio, clicking on links will navigate your pages without a full reload. This makes it very fast, but it also means there will be no "DOMContentLoaded" event after the initial load.

```html
<script src="https://cdn.jsdelivr.net/npm/gsap@3.12.5/dist/gsap.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/gsap@3.12.5/dist/Flip.min.js"></script>
<script>
  gsap.registerPlugin(Flip);
  gsap.fromTo(".animation", {opacity: 0}, {
    opacity: 1, 
    duration: 1, 
    stagger: 0.1, 
    ease: "power2.inOut"
  });  
</script>
```

### Q\&A

#### How to reuse the animation on multiple pages?

You can reuse the animation using [Slot component](../core-components/html-embed.md#how-to-reuse-your-custom-code-across-multiple-web-pages)

#### Can I split the animation into multiple HTML Embeds?&#x20;

Can I split the animation into multiple HTML Embeds? \
If you load the GSAP library in one embed and use it in another embed, we can't ensure the execution order, and your library might not be loaded yet at the time your second script gets executed.

#### Can I use the Custom Code from project settings to include GSAP on all pages?&#x20;

While you can add the library in the HEAD in project settings, this HTML won't run in preview, so you can't test inside the builder. Additionally, if you use async or defer attributes, there is no guarantee that your HTML Embed scripts on the page won't run before the library is loaded. If you don't use defer or async attributes, you will slow down your site by blocking the rendering until the library is loaded.

### Demo

[Preview Link](https://simple-gsap-demo.wstd.io/)\
[Builder Link](https://apps.webstudio.is/builder/623cdb40-24bb-4809-a610-145b6eefcf21?authToken=d0544921-f4bb-4697-a0d8-2efd2a0c4a11\&mode=preview)
