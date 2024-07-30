---
description: >-
  Webstudio Projects can be exported and self-hosted, putting you in control of
  your hosting, pricing, security, and compliance.
---

# 📤 Self-Hosting

{% hint style="info" %}
The Webstudio Builder can also be self-hosted, but at this time, it’s only for advanced users and is intended to be run locally. See the [hosting the Builder documentation](../../contributing/contributing-for-developers.md) for more information.
{% endhint %}

## Exporting

There are two ways to export Projects:

1. [**Webstudio CLI** ](cli.md)– Allows you to interact with and export your Projects. **Supports** [**SSR**](./#server-side-rendering-ssr) **and** [**SSG**](./#static-site-generator-ssg) **(see below).**
2. [**Download button in the Builder**](download.md) – Click a button in the Webstudio Builder, and the Project will be downloaded as a zip. **Supports** [**SSG**](./#ssg-limitations) **only (see below).**&#x20;

## Export rendering options

There are two rendering options when exporting Projects:

* **JavaScript application** – Builds a dynamic [Remix app](https://remix.run/). This is the default behavior of Webstudio Cloud and provides the most functionality, but it requires hosting that works with apps.
* **Static site** – Outputs a static site (HTML/CSS/JS) with limited functionality, but has more versatile hosting options.

### **JavaScript application**

This is the default behavior if you were to publish to Webstudio Cloud.

The JavaScript application supports dynamic functionality like [CMS integrations](../foundations/cms.md), Webhook forms, [image optimization](../core-components/image.md#optimize), redirects, and more.

JavaScript applications require a hosting environment that handles server-side code execution, fetching data from CMS integrations, and more.

#### Platforms for JavaScript applications

Here are the platforms we have documented:

{% content-ref url="netlify-2.md" %}
[netlify-2.md](netlify-2.md)
{% endcontent-ref %}

{% content-ref url="vercel.md" %}
[vercel.md](vercel.md)
{% endcontent-ref %}

### **Static site**

You can optionally export your Webstudio Project as a static site, i.e., a collection of HTML, CSS, JavaScript, and image files. This allows you to host your site on traditional hosting providers or, better yet, on dedicated static site hosting and deployment platforms.

#### Static site limitations

While static site exporting and hosting are less technical, this comes at the cost of functionality.

**The following are **_**not**_** supported:**

* Dynamic pages
* Redirects
* Statuses
* Client navigation
* Webhook form
* Image optimization
* No robots.txt
* No sitemap.xml

#### Platforms for static sites

Here are the platforms we have documented:

{% content-ref url="netlify.md" %}
[netlify.md](netlify.md)
{% endcontent-ref %}

{% content-ref url="netlify-1.md" %}
[netlify-1.md](netlify-1.md)
{% endcontent-ref %}

{% content-ref url="netlify-2.md" %}
[netlify-2.md](netlify-2.md)
{% endcontent-ref %}

{% content-ref url="vercel.md" %}
[vercel.md](vercel.md)
{% endcontent-ref %}
