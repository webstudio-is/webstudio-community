---
description: >-
  Learn how to use Webstudio's advanced visual builder to create a Hygraph
  frontend without writing code, including a blog overview page, a blog page,
  and a sitemap.
cover: ../../.gitbook/assets/hygraph-frontend-cover.png
coverY: 0
layout:
  cover:
    visible: true
    size: hero
  title:
    visible: true
  description:
    visible: true
  tableOfContents:
    visible: true
  outline:
    visible: true
  pagination:
    visible: true
---

# How to build a frontend for Hygraph using Webstudio

By the end of this tutorial, you will have the following using your [Hygraph](https://hygraph.com/) data and [Webstudio](https://webstudio.is/):

* **An overview page** – One page that contains all the records in the Hygraph blog model, each with a link to view that record on a details page (a dynamic page).
* **A details page** – A template displaying the blog data matching the blog URL viewed. If the user is on /blog/mouse, the [Dynamic Page](../foundations/cms.md#dynamic-pages) will fetch Hygraph for a record whose slug equals "mouse" and display its contents.
* **A sitemap** – A dynamic [sitemap](../core-components/xml-node.md) containing the various records in Hygraph.

### Video tutorial

This video contains a step-by-step walkthrough on using Webstudio and Hygraph together.

{% embed url="https://www.youtube.com/watch?v=QC6Y7BHduLw" %}
Full video walkthrough
{% endembed %}

### **Webstudio is a visual builder that connects to Hygraph**

Webstudio is solely focused on creating a visual builder for the frontend. It's backend agnostic, meaning we don't lock you into using any one backend/CMS/database.

In the case of Hygraph, this enables you to leverage your current data without having to custom code a frontend.

Webstudio is open source, has all CSS properties, and is dynamic at the speed of static.
