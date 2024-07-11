---
description: Connect to your existing CMS or the one that works best for you.
---

# 💾 CMS

Webstudio is backend-agnostic, meaning it enables you to connect to any backend as long as it provides an HTTP API (see [compatible CMSs and features](cms.md#compatible-cmss) for more info).

While some users may be used to seeing a CMS tab within their platform, Webstudio is different. It’s approached CMS by providing a flexible way to interact with third-party systems such as CMSs, CRMs, and databases.

The building blocks of Webstudio CMS are:

1. [**Dynamic pages**](cms.md#dynamic-pages) – In their simplest form, they are essentially blog templates – one page that dynamically displays data depending on the URL viewed.
2. [**Resources**](variables.md#resource) – A way to fetch data from an API, whether it's a simple blog post or a complex data model.
3. [**Bindings**](expression-editor.md#binding) – Enabling connecting or mapping the CMS data to Webstudio components. You can bind external data to any component and field within Webstudio, from rich text to meta titles.

For an in-depth tutorial on creating a blog using Webstudio and a headless CMS ([Hygraph](https://hygraph.com/)), [watch this video](https://youtu.be/QC6Y7BHduLw).

{% embed url="https://youtu.be/QC6Y7BHduLw" %}

## Dynamic Pages

Similar to a static page, the path includes dynamic parameters, like a post slug. This enables the page contents to change dynamically based on the requested page.

Adding parameters to a page path will automatically turn the page into a Dynamic Page.

The path can include dynamic parameters like `:name`, which could be made optional using `:name?`, or have a wildcard such as `/*` or `/:name*` to store the whole remaining part at the end of the URL.

The value of the parameter comes from whatever is in the URL. If the path path is `/post/:slug` and somebody views `/post/hello-world` then `hello-world` is the value used in your Resource.

### **Address Bar**

The Address Bar enables previewing Dynamic Pages in the editor by entering parameter value(s).

For the Dynamic Path `/post/:slug`, you would enter a slug value that exists in the CMS, such as `hello-world`.

<figure><img src="../../.gitbook/assets/address-bar.png" alt="Address Bar with hello-world"><figcaption><p>Entering "hello-world" as a test value</p></figcaption></figure>

{% hint style="danger" %}
The static part of the URL (in this case, `/post/`) is already in the Address Bar and should not be included when adding the test value.
{% endhint %}

Address Bar values are saved in the editor by:

* Manually entering values
* Navigating links that lead to the Dynamic Page, such as clicking on `/post/hello-world`

## Resources

A Resource variable gets its value from a fetch request, allowing data from a remote system to be used within Webstudio.

In the context of Dynamic Pages, Resources are used to fetch specific information determined by the URL, or more specifically, the value of the parameter(s) in the URL.

For example, the Resource will dynamically fetch posts from the CMS whose slug value equals the slug being viewed. The query may look something like this `posts(slug: system.params.slug)`, and when `/post/hello-world` is viewed, the query will translate to `posts(slug: "hello-world")` (i.e., “get posts where the slug value is “hello world”).

Dynamic pages may have multiple parameters, enabling the query to become even more dynamic. For example, in addition to `:slug`, you can also add `:lang` to fetch and display localized content.

If interacting with a GraphQL API, use the [GraphQL resource](variables.md#graphql).

## Binding Data

At this point, the Resource Variable has the CMS Data, and now you need to bind or connect that data to the components and fields.

Binding data is done with the [Expression Editor](expression-editor.md).

For example, go to a Header component > Settings > Text Content > and the “+” button. Within the Expression Editor, add the Resource Variable that contains the CMS data and the title value within it. This may look like `CMS Data.title`.

For more information, see the [Expression Editor documentation](expression-editor.md).

## Compatible CMSs

Webstudio CMS supports any content management system (CMS) that provides an HTTP API. This feature enables users to use their existing CMS or the one that works best for them.

Below is a non-comprehensive list of CMSs, whether or not they provide an HTTP API (i.e., compatible with Webstudio), and the compatibility of specific CMS features.

| CMS                                       | Compatible | Rich text                                                                                                                                                                                        | Tutorial                                 | Template                                       | Known issues                                                                         |
| ----------------------------------------- | ---------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ---------------------------------------- | ---------------------------------------------- | ------------------------------------------------------------------------------------ |
| [Hygraph](https://hygraph.com/)           | ✅          | ✅ Must request HTML                                                                                                                                                                              | [Tutorial](../integrations/hygraph.md)   | [Template](https://wstd.us/hygraph-template)   |                                                                                      |
| [Sanity](https://www.sanity.io/)          | ✅          | ❌                                                                                                                                                                                                |                                          |                                                |                                                                                      |
| [Strapi](https://strapi.io/)              | ✅          | ✅ Must use the [CKEditor 5 integration](https://market.strapi.io/plugins/@ckeditor-strapi-plugin-ckeditor) and field as it outputs HTML. Not compatible with the default rich text field.        |                                          |                                                |                                                                                      |
| [Contentful](https://www.contentful.com/) | ✅          | ❌                                                                                                                                                                                                |                                          |                                                |                                                                                      |
| [WordPress](https://wordpress.org/)       | ✅          | ✅                                                                                                                                                                                                | [Tutorial](../integrations/wordpress.md) | [Template](https://wstd.us/wordpress-template) |                                                                                      |
| [Drupal](https://www.drupal.org/)         | ✅          | ✅                                                                                                                                                                                                |                                          |                                                |                                                                                      |
| [Directus](https://directus.io/)          | ✅          | ✅                                                                                                                                                                                                |                                          |                                                |                                                                                      |
| [Hashnode](https://hashnode.com/headless) | ✅          | ✅                                                                                                                                                                                                |                                          |                                                |                                                                                      |
| [Payload](https://payloadcms.com/)        | ✅          | ✅ Need to create a field and hook that auto converts rich text from field A and saves HTML in field B ([src](https://payloadcms.com/docs/rich-text/lexical#outputting-html-from-the-collection)) |                                          |                                                |                                                                                      |
| [Airtable](https://www.airtable.com/)     | ✅          | ❌                                                                                                                                                                                                | [Tutorial](../integrations/airtable.md)  | [Template](https://wstd.us/airtable-template)  |                                                                                      |
| [Baserow](https://baserow.io/)            | ✅          | ❌                                                                                                                                                                                                |                                          |                                                |                                                                                      |
| [Notion](https://www.notion.so/)          | ✅          | ❌                                                                                                                                                                                                | [Tutorial](../integrations/notion.md)    | [Template](https://wstd.us/notion-template)    | [Can't use pages](https://github.com/webstudio-is/webstudio/issues/3709)             |
| [Flotiq](https://flotiq.com/)             | ✅          | ✅                                                                                                                                                                                                |                                          |                                                |                                                                                      |
| [Ghost](https://ghost.org/)               | ✅          | ✅                                                                                                                                                                                                |                                          | [Template](https://wstd.us/ghost-template)     |                                                                                      |
| [Storipress](https://storipress.com/)     | ❌          |                                                                                                                                                                                                  |                                          |                                                | [Objects are sent as strings](https://github.com/webstudio-is/webstudio/issues/3707) |
| [Coda](https://coda.io/)                  | ✅          | ❌                                                                                                                                                                                                |                                          |                                                | [Multiple](https://github.com/webstudio-is/webstudio/issues/3708)                    |

{% hint style="warning" %}
While we do our best to verify the supported features, we may make mistakes in our research.
{% endhint %}

### Rich text support

While most CMS field types seamlessly map to Webstudio components (e.g., Plain Text → Heading), rich text may not, depending on how the CMS stores/delivers it.

**Currently, Webstudio supports rich text if it's delivered in HTML format.** In the future, we will support rich text regardless of the format delivered by adding conversion libraries for each CMS's flavor of rich text. For example, we'll automatically convert AST to HTML.

In the meantime, advanced users can set up a proxy on Cloudflare Workers to convert rich text to HTML. However, this is outside the scope of Webstudio's support.

Rich text in the form of HTML can be bound to the [Content Embed component](../core-components/content-embed.md) for styling.
