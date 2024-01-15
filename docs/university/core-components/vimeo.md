# ▶ Vimeo

{% embed url="https://www.youtube.com/watch?v=YzyyZ10fcu4" %}

The Vimeo component for Webstudio allows you to embed Vimeo videos into your site, whether as a video player or a background video. This component comes with several different customizable properties, including the ability to edit the preview image, set your video to “Do Not Track” mode, or customize the colors of the Vimeo Player controls to match your brand.

***

### Benefits of Vimeo

We have picked Vimeo to be Webstudio’s first video component for the following reasons:

1. **Modify Existing Videos**: It is possible to modify, edit or update your video on Vimeo without losing your video’s stats. And the best part of it all— the updated video stays on the same URL!
2. **Data Ownership**: As a Vimeo user, you retain complete ownership of all your data and intellectual property. You own what you create on Vimeo, unlike platforms like YouTube that bind your content with non-exclusive rights to use it as they please.
3. **Higher Quality Video and Audio**: Vimeo offers a higher bitrate and better video quality for their uploads compared to similar platforms.
4. **GDPR Compliance**: With complete control over your personal data, you get to choose how your data is tracked and recorded.
5. **An Adless Platform**: Vimeo operates as an adless platform, which means that they don’t allow advertisements on videos or sell ad space.

***

### How to use the Vimeo component in Webstudio

You can find the Vimeo Component in the Components Panel in the Media Section. Here is how you can add and use the component on your site:

#### Adding the Vimeo component to your canvas
![Vimeo to your canvas](../../.gitbook/assets/university/Video_component_step_1.avif)
1. You can find the Vimeo component in the “Components Panel” in the Media section.
2. Add the component by dragging and dropping it to the canvas or with a click to put it inside the selected instance.
3. Once you have the component on your canvas, you can head to Settings on the right to add your video URL and make other changes.

![Vimeo background settings](../../.gitbook/assets/university/Video_component_properties.avif)

#### Modifying the Preview Image

1. Inside the Vimeo Component, you will find three instances- the Preview Image, Spinner and Play Button. These instances define the primary look of the embedded video player.
2. You can add a preview image to your video by selecting the “Preview Image” instance and choosing an image source in the “Properties” section.

***

### How to customize the Vimeo instance's properties

The Vimeo component comes with several properties that you can use to customize your video player. These properties appear in the Settings panel to the right of the canvas when your Vimeo component is selected.

Here’s how you can use the following properties:
![Vimeo background properties](../../.gitbook/assets/university/Vimeo_instance_properties-2.avif)

* **Show Preview**\
  Toggle this property on to render the preview image from Vimeo rather than the static image in Webstudio. This property is turned off by default because rendering the Vimeo preview requires making an API call which can slow down the speed of your page.\

* **AutoPlay**\
  If you enable the “AutoPlay” property, your video will start playing automatically when the player loads.\

* **Background Mode**\
  When enabled, the “Background Mode” property will hide the Vimeo Player’s controls, loop the embedded video and play it automatically.\

* **Do Not Track**\
  If you enable the “Do Not Track” property, the Vimeo Player will not be able to track session data, such as cookies. It is important to note that video statistics, such as the number of views, would also no longer be recorded.\

* **Controls Color**\
  With the “Controls Color” property, you can customize the colors of the Vimeo Player’s controls on your site to match your brand identity.\

* **Other Properties**\
  You can customize your Vimeo component further by adding [other properties](https://developer.vimeo.com/player/sdk/embed) that are not listed in the “Properties” section by default.
