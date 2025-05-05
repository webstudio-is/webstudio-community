---
description: Things we made happen since January 2025
---

# 🆕 April Update

## 1. Native scroll-driven animations

Webstudio leverages the new Scroll Timeline API, allowing browsers to synchronize scrolling with content at native performance levels. For browsers that don't support this feature, we use a polyfill which provides standard performance. However, the native implementation can achieve up to 120 FPS.

It's super important that scroll-driven animations run smoothly and don’t get interrupted because "JavaScript is busy" doing who knows what.\\

* [Clonable examples](https://webstudio.is/marketplace/templates/animations)
* [Landing page with demos](https://webstudio.is/scroll-driven-animations)
* [Full animations playlist](https://www.youtube.com/playlist?list=PL4vVqpngzeT5PIw14Re-_a3iJfawLdLk7)

{% embed url="https://www.youtube.com/watch?v=cxsjKsqrn0Y" %}

## 2. Global data variables

Want to reuse an email 📧, phone number, or CMS connection data throughout your site?

Now you can with Global Data Variables!

🌎 Define reusable data globally\
📦 Access the variables anywhere… including inside Slots!\
👌 Maintain consistency\
🫰 Easier CMS setup!

{% embed url="https://www.youtube.com/watch?index=22&list=PL4vVqpngzeT4sDlanyPe99dYl8BgUYCac&v=jRzMROoKwsQ" %}

When integrating a CMS, different pages need access to the same variables, such as the API key. Now with Global Data Variables, they only need to be defined once, significantly improving the setup time and maintenance of a CMS.

{% embed url="https://www.youtube.com/watch?index=22&list=PL4vVqpngzeT4sDlanyPe99dYl8BgUYCac&v=3swTUyYZrYI" %}

Want to define a data variable outside of a Slot and use it within? Now you can! Useful for defining emails, resources, languages, and more outside of the slot but using them in footers, navs, and more.

{% embed url="https://www.youtube.com/watch?index=23&list=PL4vVqpngzeT4sDlanyPe99dYl8BgUYCac&v=MWTpgOmv6N0" %}

## 3. Docker support for sites

Export your dynamic site, and deploy it just about anywhere. Get total control over your hosting, cost, and compliance.

Learn how to deploy the site to AWS via [Flightcontrol](https://www.flightcontrol.dev/)

{% embed url="https://www.youtube.com/watch?v=_YpTBvARxic" %}

Learn how to deploy the site to Hetzner via [Coolify](https://www.coolify.io/)

{% embed url="https://www.youtube.com/watch?v=OnHLO2Plt2E" %}

## 4. YouTube component

{% embed url="https://x.com/getwebstudio/status/1877611478045401310" %}

## 5. Head Slot component

The Head Slot component allows the creation of various head tags and can dynamically generate them based on remote data.

{% embed url="https://www.youtube.com/watch?index=27&list=PL4vVqpngzeT4sDlanyPe99dYl8BgUYCac&v=LeE52a_EWFw" %}

## 6. Dashboard redesign

The new dashboard includes search functionality, separates projects and starter templates, and is the first step towards workspaces.

<figure><img src="../.gitbook/assets/image.png" alt=""><figcaption></figcaption></figure>

## 7. Advanced and focused mode in style panel

We added a focus mode that allows you to see only one section at a time, as well as an advanced mode that makes the advanced section a full-height experience with search and autocompletion. Much of the UX is inspired by chrome dev tools, enabling advanced users to change styles quickly without moving the mouse.

<figure><img src="../.gitbook/assets/image (1).png" alt=""><figcaption></figcaption></figure>

## 8.  Context menus

We started adding more and more context menus, staring with  advanced section in style panel and animations

<table data-view="cards"><thead><tr><th></th><th data-hidden data-card-cover data-type="files"></th></tr></thead><tbody><tr><td>Copy-paste animations</td><td><a href="../.gitbook/assets/image (2).png">image (2).png</a></td></tr><tr><td>Copy-paste CSS declarations</td><td><a href="../.gitbook/assets/Screenshot 2025-05-05 at 12.01.45.png">Screenshot 2025-05-05 at 12.01.45.png</a></td></tr></tbody></table>

## 9. All Pro features accessible from a free plan for testing

We have made all Pro features available on a free plan so that everyone can test these features without paying. Additionally, we added checks on publishing and exporting if Pro features are used.

***

And more, see [Release 0.218.0](https://github.com/webstudio-is/webstudio/releases/tag/0.218.0) and older for a detailed changelog.
