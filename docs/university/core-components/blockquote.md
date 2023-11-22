# 💬 Blockquote

{% embed url="https://www.youtube.com/watch?v=reVman0DMWM" %}

The Blockquote Component is used to highlight quoted content on a webpage, enhancing its impact and readability. You can use it in your Webstudio project to emphasize text that has been taken directly from another source, such as quotes, excerpts, or references.

***

### How to use the Blockquote Component

The "Blockquote" component can be found in Components > Text, and you can place it on your canvas by dragging and dropping it or clicking it in the Components panel. To edit the content of your Blockquote instance, simply double-click it.

Once the component is placed on your canvas, you can customize its appearance using the Style panel on the right. You can also create a design token for this styling. This allows you to apply consistent styling on multiple blockquotes across your project by reusing the same design token for each instance.

For more on Design Tokens in Webstudio, refer to [this guide](../foundations/design-tokens.md).

***

### How to attribute a Blockquote

It is a good practice to attribute the quoted text you use in a blockquote with the source's title, author, publication, URL, or any relevant information that identifies where the quote came from. This maintains transparency and credibility in your content. It also allows readers to verify the accuracy of the information and fosters ethical use of others' words.

You can add an attribution or citation by using the “Cite” property in your Blockquote instance settings or with the “Cite” Tag from a Text component.

#### Using the "Cite" Property

<figure><img src="../../.gitbook/assets/Blockquote-Image-1_RtA7AhlDjAzKYSdRl8F2o.avif" alt=""><figcaption></figcaption></figure>

If you want to include a URL link as a citation:

1. Choose your blockquote instance in the canvas or the Navigator.
2. Go to Settings > Properties on the right.
3. Add the URL in the "Cite" property.

Please note that this value will not be visible to the end-user.

#### Using the “Cite” Tag

<figure><img src="../../.gitbook/assets/Blockquote-Image-2_uUD_vk1OFfpy2Th1blIj6.avif" alt=""><figcaption></figcaption></figure>

If you want to include a Name/Title as a citation alongside your Blockquote:

1. Add a Text component to your Blockquote instance by dragging and dropping it or clicking it in the Components panel.
2. After positioning it correctly, go to Settings and select Tag > Cite.
3. Double-click the "Cite" instance on your canvas to edit it and add your citation.

Please note that this value will appear as italicized text to the end-user.
