# ❓ FAQs

<details>

<summary>What is open source?</summary>

Open source software is a branch that formed from the free software movement. The free software movement's philosophy is rooted in the freedom to run, study, copy, contribute, change, and improve the software. While there is much discussion and debate around the terms _open source_, _free_, _libre_, and _open core_, there are many similarities, with subtle differentiators. These differentiators can lie in the way in which the software is licensed, how permissive they are, and other variables.

According to Open Source Initiative, in order for a software license to count as open source, it has to allow for the freedom of redistribution, distribution of source code (both in text and compiled form), and modified/derived works. The licence cannot discriminate against any groups of people, or use cases. It also cannot restrict any other software that might be bundled with the open source program as part of a larger product.

Some products use a combination of open source and proprietary components. As such, they cannot be deemed "open source." Some companies choose to differentiate between the open source components and the entire product.

For example: The Android on a Pixel phone is proprietary, but it's powered by Android Open Source Project (AOSP), which is open source. Because of this, you're able to create your own version of Android (such as GrapheneOS and CalyxOS have done).

Some companies choose instead to call their products open core, rather than open source, which denotes that the primary functionality (or "core") of the product is open source, but acknowledges the existence of proprietary parts within.

</details>

<details>

<summary>How is Webstudio licensed?</summary>

The Webstudio Builder is distributed under the MIT license, an open source license that allows the user to copy, modify, merge, publish, distrubute, sublicense, or sell as long as the same copyright/permission notice is included. In short: do what you want, with Webstudio, but give credit. The MIT license very popular, as it's considered one of the most permissive open source licenses and limits legal headaches.

</details>

<details>

<summary>Is Webstudio open source?</summary>

The Webstudio Builder is open source, while the entire Webstudio platform is open core.

[Open Source Definition](https://opensource.org/osd), [MIT License](https://mit-license.org/)

</details>

<details>

<summary>What is Cloudflare Workers edge deployment, and how does it work?</summary>

In the old days, you had to manage your own servers (actual machines) meaning deploying your code on your own equipment. This is expensive, labor-intensive, and takes resources away from writing business logic. These days we do it with edge deployment, which deploys code using Content Delivery Networks (CDNs). CDNs are systems of servers (virtual machines that run on physical hardware) that deliver web content to users based on their geographic location, allowing for faster and more efficient delivery of web pages.

When a user does something, it registers as an event (e.g clicks on a sign-up button), which the CDN responds to by executing the relavent function (e.g. returns the sign-up page). This is called function-as-a-service, or FNAS. Instead of buying a fixed amount of server space, businesses pay CDNs for functions executed.

AWS Lambda and Cloudflare Workers are examples of CDNs. The difference between AWS Lamda and Cloudflare Workers is that AWS Lamda runs full Node.JS, and Cloudflare Workers uses Workers (a Javascript virtual machine + APIs) that run inside a V8 browser (the same tech used in Google Chrome). The advantage of running full Node.JS is that there is full compatibility, but it's slower, as the Node.JS code takes time to start up (known as the cold start problem). Keeping the Node.JS code running and listening for more events solves the cold start problem, but is resource-intensive. The benefit of Workers in the browser is that it starts up much faster, and thus can be turned off once the function is executed. Cloudflare has also open-sourced its Workers technology ([workerd](https://blog.cloudflare.com/workerd-open-source-workers-runtime/)). This means that anyone with the right technical expertise can create their own Workers system without Cloudlfare.

[Cloudflare Workers](https://workers.cloudflare.com/), [Cloudflare's open source workerd technology](https://blog.cloudflare.com/workerd-open-source-workers-runtime/)

</details>

<details>

<summary>What are design tokens?</summary>

The larger a design system gets, the harder it is to keep things consistent. Colors, spacing, border widths, font sizes, etc, can become a nightmare to upkeep, especially without documentation (e.g. use the eyedropper tool to find the color of the button). Even with good design documentation, it can be unclear which value goes where (e.g. is the button supposed to be blue-400 or blue-500?), and every time something new is implemented is a chance to muddy the system.

Design Tokens solve this problem by creating a single source of truth for both designers and developers. Variables that dictate font size, border widths, color, spacing, etc. are stored as tokens, and are accessible to team members via their tools of choice (such as through JSON files and sync providers like Github).

A builder can change a design token on Figma, and a developer will see that change on Visual Studio Code.

A common use case for design tokens is semantic colors, where colors are named after their use (e.g., the button color is $button.primary, and the hex-code for $button.primary is defined in the token).

Because design tokens are essentially stored variables, they can do lots of things. Tokens can reference other tokens (e.g., $button.primary is defined as the same value as $blue-500 and the hex-code for $blue-500 is #0000FF). Tokens can be changed in specific situations (e.g., in dark mode, let $button.primary be $blue.400). Tokens can also be manipulated with math (e.g., $border-width.2=$border-width.1\*2).

Design tokens don't replace design documentation, but are used in conjunction to create a design system that is easily implemented _and_ maintained.

[WC3 Design Tokens Format](https://tr.designtokens.org/format/), [Tokens Studio Plugin documentation](https://docs.tokens.studio/)

</details>

<details>

<summary>What is GDPR, and how does it protect data? (What counts as GDPR compliant?)</summary>

The General Data Protection Regulation (GDPR) is the toughest data privacy and security law in the world. Although the law was drafted in the European Union, GDPR applies to organizations globally if they target and collect data from people within the EU. Fines for violating GDPR can go up to €20 million or 4% of the company's global revenue, whichever is higher.

The goal of the GDPR is to ensure that EU citizens' privacy rights are protected. Those privacy rights are as follows:

1. The right to be informed
2. The right of access
3. The right to rectification
4. The right to erasure
5. The right to restrict processing
6. The right to data portability
7. The right to object
8. Rights in relation to automated decision making and profiling.

In order to do so, companies are expected to process data according to 7 protection and accountability principles:

1. Lawfulness, fairness and transparency — Processing must be lawful, fair, and transparent to the data subject.
2. Purpose limitation — You must process data for the legitimate purposes specified explicitly to the data subject when you collected it.
3. Data minimization — You should collect and process only as much data as absolutely necessary for the purposes specified.
4. Accuracy — You must keep personal data accurate and up to date.
5. Storage limitation — You may only store personally identifying data for as long as necessary for the specified purpose.
6. Integrity and confidentiality — Processing must be done in such a way as to ensure appropriate security, integrity, and confidentiality (e.g., by using encryption).
7. Accountability — The data controller (the organization) is responsible for being able to demonstrate GDPR compliance with all of these principles. Organizations with less than 250 employees are exempt from some of the record keeping this entails.

It can be relatively easy to violate GDPR compliance. Common practices like using Google Fonts and storing users data in US-based servers could be enough to be found non-compliant.

_Note: It may not be that Google Fonts wants to spy on you per se, but they log your IP address to direct the font to your location._

Considering that Webstudio is designed to be extensible, we can't guarantee that every website made with Webstudio will be GDPR compliant. After all, designers and developers who use Webstudio may add functionality to their site(s) that could be out of compliance with GDPR. With that said, we (the Webstudio team) will ensure that Webstudio itself is always compliant with GDPR.

[What is GDPR?](https://gdpr.eu/what-is-gdpr/), [Who must comply with GDPR](https://gdpr.eu/companies-outside-of-europe/)

</details>

<details>

<summary>How does Webstudio optimize images?</summary>

Images comprise 60%-65% of bytes on most web pages, with the total page size being a major factor in total rendering time. In order to improve page loading speed, Google created the WebP image format. On average, WebP images are about 30% smaller than equivalent PNG/JPEG images. In addition, WebP is also an open source format.

WebP supports both lossless and lossy image formats (lossless retains the exact color data of each pixel but you end up with a bigger file, lossy trades some of that color accuracy for smaller file sizes), as well as alpha channels (transparency), ICC Color profiles (which tell a computer/printer how to manage colors), metadata (EXIF and XMP data that provide context information such as where and when a photo was shot), and animation (frame animations similar to GIFs). These WebP features make it a lean and versatlie format.

In addition to the format, another determining factor of image size is its dimensions. All else being equal, a 100px by 100px image is always going to be smaller than a 500px x 500px image. Designers will often choose image dimensions according to the perceived most popular use case or breakpoint. While this might be great for large desktops, this leads to wasted megabytes when loading the same image on the phone. This can be optimized by uploading images with different dimensions for different screens. But of course, this is additional work and creates complications.

In addition to automatically converting images to WebP, Webstudio detects the exact dimensions the image needs to fit into on the webpage, and resizes the image accordingly. Both of these steps ensure that images are as small as possible without degrading the viewing experience.

[WebP FAQ](https://developers.google.com/speed/webp/faq)

</details>

<details>

<summary>How is Webstudio extensible? (What is an API?)</summary>

How does your weather app know what the whether is like? How does Booking.com know the rates of all those hotels and airlines? How do websites allow you to login via Google/Twitter/Facebook? With APIs!

Application Programing Interfaces (APIs) are how apps exchange information. Usually this communication takes place between a client app and a server app. For example: the weather app on your phone (the client) uses an API to retrieve weather data from an online source like Accuweather (the server). There are 3 major types of APIs: Private APIs for internal use within orgs; Public APIs used by companies to make their products/services available to the public; and Partner APIs that are accessible to people within an organization and authorized partners.

Webstudio provides public APIs to allow developers to retrieve information about:

1. Component tree
2. CSS
3. Images
4. Fonts
5. Interactions
6. Events

Webstudio uses APIs to allow developers to extend its functionality to fit their needs. It provides an integration API that allows developers to create their own UIs within Webstudio, similar to how Figma plugins works. In addition, developers can use APIs to provide metadata about their components.

[API Wiki](https://en.wikipedia.org/wiki/API)

</details>

<details>

<summary>How can I use Webstudio today, and how will it evolve?</summary>

Beyond the beta, Webstudio is focusing on becoming the best tool for creating web user interfaces. Today, it's capable of building static websites that are fast and responsive. Additional features like the linked CSS editor, animations, and real-time collaboration are in the works.

Using APIs, users can integrate Webstudio with services of their choice, such as content management systems (CMS), eCommerce platforms, automation tools, databases, and more. Webflow uses open source components and standards as much as possible to give users the freedom to create whatever they want, however they want.

[Webstudio Vision Document](https://webstudiois.notion.site/Vision-f52ed097ccaa410eb05076981d446c2f)

</details>
