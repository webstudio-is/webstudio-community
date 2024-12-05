---
description: >-
  Link lets you link to websites, pages, emails, and more from text, images, and
  more.
---

# 🔗 Link

{% embed url="https://www.youtube.com/watch?v=XPzFZ67zRrU" %}

***

## How to use the Link component

The "Link Component" can be found in Components > General, and you can place it on your canvas by dragging and dropping it or clicking it in the Components panel.

You can convert anything into a link by wrapping it inside the Link component, including text and images. These links can direct users to different pages within your site or lead to external resources, including other websites, downloadable files, or email addresses.

***

## How to customize a Link instance's properties

You can customize the properties of a Link instance by selecting it and going to "Settings." Here is an overview of each property:

### Href

<figure><img src="../../.gitbook/assets/Mask_group_IidxWSFrpfv1FljERzYHo.avif" alt=""><figcaption></figcaption></figure>

The "href" property determines what the Link instance will lead to, such as a URL, page, phone, attachment, or email address.

1. **URL**: In its most common form, the "href" property references a URL, linking to another website or page.
2. **Page**: You link to all of your pages within your site here. You can also link to specific sections within those pages. To link to a section on a page, first go to the section and fill out the `ID` field in Settings. Then go back to the link, select the page, and then in the next dropdown select the `ID` you just created.
3. **Email**: When you specify an email address as the 'href' value, the link opens the user's default email client (such as Gmail) with the designated email address pre-filled.
4. **Phone**: If you set the "href" property to a phone number, the link becomes a prompt for users to initiate phone calls directly from their devices.
5. **Attachment**: You can also link to downloadable attachments such as PDFs, documents, or media files, allowing users to initiate file downloads with one click.

### Target

<figure><img src="../../.gitbook/assets/Mask_group-1_E-3k5yfSy8NojJjjkjPZl.avif" alt=""><figcaption></figcaption></figure>

You can use the "Target" property to modify a link instance's behavior and define how linked content is displayed.

1. **Self**: When you set "Target" to "Self," the linked content will open in the same window or tab. This is the default behavior for links, and it maintains the browsing context.
2. **Blank**: If you choose "Blank," the linked content will open in a new tab or window, providing a separate browsing context.
3. **Parent and Top**: For web pages involving nested frames, "Parent" will direct the linked content to open in the parent frame or window, maintaining the hierarchy of frames.\
   \
   On the other hand, selecting "Top" will open the link instance in the top-level window, replacing all frames if there are any. This is useful when you want to break out of any frames and provide a full-page experience.

### Prefetch

<figure><img src="../../.gitbook/assets/Mask_group-2_9wlKH3AlsVuvSJJcKDzK0.avif" alt=""><figcaption></figcaption></figure>

"Prefetch" instructs the browser on how to preload linked resources in the background.

1. **None**: This is the default value, and it indicates that the browser will not preload the linked resource. If the linked content is unlikely to be accessed immediately or frequently, selecting "None" can help conserve network resources.
2. **Intent**: If you select "Intent," the browser preloads the linked resource in the background when the user hovers over the link. This aims to reduce load times by having the content ready whenever the user decides to navigate to the linked page.
3. **Render**: This loads the linked page when the current page renders, improving the load times of subsequent pages. However, it also adds a significant load to the browser, which is why it is primarily recommended for pages with only 1 or 2 links, such as a landing page.
4. **Viewport**: If you select the 'Viewport' option, the browser preloads linked content just before it's about to appear in the user's view. This optimization enhances loading and facilitates instant page transitions, maintaining a balance between resource utilization and user experience.

## How to style the Current Page state

When using links for navigation and wanting to highlight the current page, the link component has a "Current Page" state in every style source.

<figure><img src="../../.gitbook/assets/Screenshot 2024-07-19 at 18.15.28.png" alt=""><figcaption></figcaption></figure>
