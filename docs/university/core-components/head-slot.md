---
description: >-
  Head Slot is a component that enables visually customizing the <head> on a
  per-page basis. It’s useful for setting canonical URLs, alternate links, and
  more.
icon: box-archive
---

# Head Slot

<figure><img src="../../.gitbook/assets/headslot.png" alt="Head Slot" width="375"><figcaption></figcaption></figure>



## Key information

* Even though the Head Slot is visually in the Body instance, the contents of Head Slot are added to the `<head>`. This hierarchy enables the use of [Data Variables](../foundations/variables.md) defined on the Body to be used in the head.
* If Head Slot and Page Settings define the same data, such as meta title, Head Slot will take priority. Similarly, a default canonical is output on every page and references the current path. By specifying a canonical in Head Slot, the default canonical will not be displayed on that page.
* Head Slot comes with an instance for Title, Link, and Meta. These can be duplicated. If you remove them and later need to add them back, you can copy them from a new Head Slot instance.

## Third Party Documentation

Many elements in the head are quite technical and require reading documentation for proper usage.&#x20;

Here is a list of relevant docs:

* [Head (MDN)](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/head)
* [Canonical (Google)](https://developers.google.com/search/docs/crawling-indexing/canonicalization)
* [Meta (MDN)](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/meta)
* [Link (MDN)](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/link)
* [Title (MDN)](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/title)
* [Rel (MDN)](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/rel)
* [Pagination (Google)](https://developers.google.com/search/docs/specialty/ecommerce/pagination-and-incremental-page-loading)
