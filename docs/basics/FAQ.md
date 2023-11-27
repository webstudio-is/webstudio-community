# ❓ FAQs

<details>
<summary>🌐 What is open source?</summary>

Open source software stems from the free software movement, emphasizing freedom in software usage, modification, and distribution. While terms like _open source_, _free_, _libre_, and _open core_ have subtle differences, they share many principles. Key differentiators include licensing terms and the level of permissiveness.

The Open Source Initiative defines criteria for open source software, including free redistribution, access to source code, and allowance for modified/derived works. Licenses must not discriminate against any groups or use cases and must permit bundling with other software.

Some products blend open source and proprietary components, leading to the "open core" label, where the core functionality is open source but includes proprietary parts. A well-known example is Android's use on Pixel phones: powered by the open source Android Open Source Project (AOSP), yet the phone's software remains proprietary.

</details>

<details>
<summary>🔑 How is Webstudio licensed?</summary>

Webstudio Builder is distributed under the MIT license, a permissive open source license. This license allows copying, modifying, merging, publishing, distributing, sublicensing, or selling with the inclusion of the same copyright/permission notice. Essentially, you're free to use Webstudio as you wish, provided you give credit. The MIT license is popular for its permissiveness and minimal legal complexity.

</details>

<details>
<summary>🔓 Is Webstudio open source?</summary>

Webstudio Builder is an open source component, while the overall Webstudio platform adopts an open core model.

[Open Source Definition](https://opensource.org/osd), [MIT License](https://mit-license.org/)

</details>

<details>
<summary>🌍 What is Cloudflare Workers edge deployment, and how does it work?</summary>

Edge deployment modernizes traditional server management, relying on Content Delivery Networks (CDNs) for more efficient web content delivery. CDNs, consisting of virtual machines on physical servers, deliver content based on user location for faster access.

Cloudflare Workers and AWS Lambda are CDN examples, with Cloudflare Workers offering faster startup times due to its use of a JavaScript VM and APIs running in a V8 browser environment. Cloudflare has also open-sourced its Workers technology, allowing for the creation of custom CDN systems.

[Cloudflare Workers](https://workers.cloudflare.com/), [Cloudflare's open source workerd technology](https://blog.cloudflare.com/workerd-open-source-workers-runtime/)

</details>

<details>
<summary>🎨 What are design tokens?</summary>

Design Tokens provide a unified system for managing design elements like colors, spacing, and font sizes. They serve as a single source of truth for both designers and developers, housed in accessible formats like JSON files. This system ensures consistency across a project and simplifies design maintenance.

A common application of design tokens is in semantic color naming, where names correspond to usage rather than color values. The flexibility of design tokens allows for referencing, condition-specific alterations, and mathematical manipulations.

[WC3 Design Tokens Format](https://tr.designtokens.org/format/), [Tokens Studio Plugin documentation](https://docs.tokens.studio/)

</details>

<details>
<summary>🛡️ What is GDPR, and how does it protect data? (What counts as GDPR compliant?)</summary>

The GDPR is a stringent data privacy law applicable globally to organizations handling EU citizens' data. It grants EU citizens rights such as access, rectification, erasure, and objection to automated decision-making. Organizations must adhere to principles like lawfulness, fairness, transparency, and accountability. Violations can result in significant fines.

Webstudio ensures its compliance with GDPR, although users must ensure their added functionalities on Webstudio sites also comply.

[What is GDPR?](https://gdpr.eu/what-is-gdpr/), [Who must comply with GDPR](https://gdpr.eu/companies-outside-of-europe/)

</details>

<details>
<summary>🖼️ How does Webstudio optimize images?</summary>

Images significantly impact web page sizes and loading times. Google's WebP format, supporting both lossless and lossy compression, alpha channels, and animation, helps reduce image sizes by about 30% compared to traditional formats.

Webstudio automatically converts images to WebP and resizes them to fit webpage dimensions, ensuring optimal sizes without compromising quality.

[WebP FAQ](https://developers.google.com/speed/webp/faq)

</details>

<details>
<summary>🔌 How is Webstudio extensible? (What is an API?)</summary>

APIs facilitate information exchange between applications, with types like Private, Public, and Partner APIs. Webstudio uses APIs to extend its functionality, allowing for integrations and custom UI creations within the platform, similar to how Figma plugins work.

[API Wiki](https://en.wikipedia.org/wiki/API)

</details>

<details>
<summary>🚀 How can I use Webstudio today, and how will it evolve?</summary>

Currently, Webstudio excels in building fast, responsive static websites. Future enhancements include linked CSS editors, animations, and real-time collaboration. Its open-source nature and API integration capabilities allow for extensive customization and connectivity with various services.

[Webstudio Vision Document](https://webstudiois.notion.site/Vision-f52ed097ccaa410eb05076981d446c2f)

</details>
