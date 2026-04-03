# ♻️ Reusability & maintainability

Webstudio provides several tools that let you build sites that are easy to update and scale. Instead of making the same change in dozens of places, you can centralize content, styles, and structure so that editing one thing updates everywhere.

## Slots — shared structure across pages

A [Slot](../core-components/slot.md) is a component that references the content of another page. Any instance that uses that slot always renders the same content, so editing the source page updates every slot automatically.

**Common uses:**
- Navigation header and footer shared across all pages
- A cookie banner or chat widget added once and reused everywhere
- A 404 layout reused inside multiple dynamic page templates

To create a shared layout, build the header (or any repeating section) on one page, then add a Slot on every other page and point it at that source. You only maintain the design in one place.

{% hint style="info" %}
[CSS variables](css-variables.md) defined on a parent are accessible inside Slots. [Data variables](variables.md), however, are scoped to their page and are not available inside Slots.
{% endhint %}

→ [Slot component reference](../core-components/slot.md)

## Design tokens — centralized style values

[Design tokens](design-tokens.md) are named style values (colors, font sizes, spacing, radii, etc.) stored in one place and applied across many components.

When a brand color changes, you update the token once — every component using that token updates automatically. Without tokens, you would hunt for every hard-coded color in every component.

**Common uses:**
- Primary and secondary brand colors
- Heading and body type sizes
- Border radii and spacing scale
- Shadow definitions

→ [Design tokens](design-tokens.md) · [CSS variables](css-variables.md)

## Dynamic data — one page template, many pages

Instead of creating a separate page for every blog post, product, or team member, you create **one dynamic page** and bind its content to data from an external source.

### Static pages vs. dynamic data

| Approach | Use case |
|---|---|
| **Static page** | Content rarely changes, is unique, and is small in number (home, about, contact) |
| **Dynamic page** | Content follows a pattern and there are many items (blog posts, products, docs) |

A static page has its content typed directly into the canvas. A dynamic page fetches data at request time — the URL slug determines which record to load, and expressions bind that record's fields to text, images, and conditions on the page.

→ [CMS & dynamic data](cms.md)

## Why Webstudio is not a CMS

Webstudio is a **visual builder**, not a content management system. It does not have a built-in database for storing and managing hundreds of records.

This means:
- Creating one page per blog post is **not the right approach** for content-heavy sites. You would end up managing hundreds of pages inside the builder, with no structured editing workflow, no content relations, and no bulk operations.
- The right approach is to store that content in a dedicated CMS (Contentful, Hygraph, Airtable, Notion, etc.) and connect it to a single dynamic page template in Webstudio via the [CMS integration](cms.md).

The builder is designed to be the **presentation layer** — responsible for layout, design, and how data is displayed — while the CMS is the **data layer** responsible for storing and editing content at scale.

{% hint style="info" %}
Webstudio dynamic pages use **one template for all records**. The CMS handles creating, editing, and organizing the actual records. Webstudio fetches and displays them.
{% endhint %}

## Summary

| Tool | What it solves |
|---|---|
| [Slots](../core-components/slot.md) | Duplicate structure across pages — edit once, update everywhere |
| [Design tokens](design-tokens.md) | Hard-coded style values scattered across components |
| [Dynamic data](cms.md) | Creating one page per content item instead of one template |
| External CMS | Managing dozens or hundreds of records inside the builder |

## Related

- [Slot](../core-components/slot.md) – Shared components across pages
- [Design tokens](design-tokens.md) – Centralized style values
- [CSS variables](css-variables.md) – Native CSS custom properties
- [CMS & dynamic data](cms.md) – One template, many pages
- [Data variables](variables.md) – Binding data to the canvas
