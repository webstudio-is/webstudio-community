# 🍀 How to add a GSAP animation

<figure><img src="../../.gitbook/assets/Screenshot 2024-03-30 at 17.29.27.png" alt=""><figcaption></figcaption></figure>

#### Embed GSAP library on the page

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

