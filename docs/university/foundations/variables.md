---
description: Variables enable the definition and use of a value throughout the page.
---

# 🔡 Variables

Variables are defined on any instance in the navigator such as Body or Heading. Variables can be found on the right panel in the settings tab.

<figure><img src="../../.gitbook/assets/webstudio-variables.png" alt="Variables in the builder" width="375"><figcaption></figcaption></figure>

## Variable scope

Variables are available within the instance they are defined on and any of its children. They are _not_ available in the parent of the instance or on other pages (we will create global variables in the future).

To access variables in the Page Settings, the variable must be defined on the Body of the page.

## Variables

### System

System variable is a unique variable in that it exists by default, while all other variables are added by the user.

System variable contains the following:

* **Params** – Key/value pairs that are defined in Dynamic Page URLs.
* **Search** – Key/value pairs of query parameters that may exist in the URL.
* **Origin** – The URL of the current site. It will display whatever the actual URL is, so in the builder, it will be the internal wstd.io domain, but on the published site, it will be the current origin, likely a custom domain.

### String

A String variable holds text data, which can be used for content like titles, descriptions, and labels.

### Number

A Number variable stores numeric values, including integers and decimals. It's useful for calculations, counters, and any numeric data that components might need to display or use in logic.

### Boolean

A Boolean variable represents a true or false value. It is ideal for toggling states, such as visibility.

### JSON

A JSON variable allows for structured data in JSON format. It is ideal for creating simple data structures used with [Collections](../core-components/collection.md.md) to iterate over each item, such as creating a dynamic gallery.

### Resource

A Resource variable gets its value from a fetch request, allowing data from a remote system to be used within Webstudio. For example, Resource can be used to interact with a REST API. While it can also be used to interact with a GraphQL API, it’s recommended to use the [GraphQL Resource](variables.md#graphql) instead.

The are several fields available to configure the fetch request.

{% hint style="info" %}
Shortcut: The URL field supports pasting in a cURL command. Doing so will automatically populate the various fields within the Resource. Many API docs will provide you with a cURL command, so look out for it to save time.
{% endhint %}

* URL – Where the resource is located.
* Method – A [request method](https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods). Refer to the third-party API docs to find the suitable method.
* Headers – Key/value pairs such `Content-Type application/json`. Refer to [Request Headers](https://developer.mozilla.org/en-US/docs/Glossary/Request\_header) for more info.

### GraphQL

A GraphQL Resource variable gets its value from a GraphQL API, allowing data from a remote system to be used within Webstudio. While similar to [Resource](variables.md#resource), it’s unique in that the available fields are specifically designed for interacting with GraphQL APIs.

The are several fields available to configure the fetch request.

* **URL** – Where the resource is located.
* **Query** – A GraphQL query.
* **Variables** – A JavaScript object containing variables that will be passed into the request. This is commonly used to pass in parameters in a URL within a Dynamic Page. For example `{ slug: system.params.slug }` See [System Variable](variables.md#system) for more info.

### System Resource

A System Resource variable gets its value from internal data.

For example, there is a Sitemap inside the System Reousrcep. It contains the data about the static pages on the website, which is commonly used to build a custom sitemap that combines dynamic data with static data. Refer to the [XML Node component](../core-components/xml-node.md#including-the-static-sitemap) for more info.
