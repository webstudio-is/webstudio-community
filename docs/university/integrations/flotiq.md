---
description: >-
  Learn how to integrate Flotiq with Webstudio to build dynamic, 
  content-driven, code-free websites. Step-by-step guide to
  a seamless headless workflow for blogs, portfolios, and more
---

# **How to integrate Flotiq with Webstudio**

This guide demonstrates how to integrate Flotiq with Webstudio to build a fully dynamic, content-driven website without writing any code. Learn how to leverage a headless workflow for streamlined content management and delivery.

## **What is Flotiq?**

Flotiq is a headless CMS designed to make content management simple and powerful. It allows you to create, manage, and deliver content through APIs, offering flexibility and scalability. 

Paired with Webstudio, you can design dynamic frontends while keeping content stored and managed in Flotiq.

## **Prerequisites**

Before starting, ensure you have the following:

- **Flotiq account** – [Register here](https://flotiq.com).  
- **Flotiq API Key** – Learn more about [Flotiq API Keys](https://flotiq.com/docs).  
- **Webstudio account** – [Sign up here](https://webstudio.com).  

{% hint style="info" %}
> Webstudio’s **Pro tier plan** is required to use the Resource Feature. Flotiq itself does not require a paid plan for integration.
{% endhint %}

## **1. Setting Up Flotiq**

### **Create a Content Type**
Start by creating a content type in Flotiq. For this tutorial, we’ll use Flotiq’s **Blogpost Template**, which includes fields like `title`, `slug`, `excerpt`, `content`, and `headerImage`.

<figure><img src="https://flotiq.com/docs/Deep-Dives/images/webstudio/webstudio-blogpost.png" alt="Create a Page with a Dynamic Path"><figcaption></figcaption></figure>

### **Add Sample Data**  
Populate your content type with a few example blog posts to test your integration.

## 2. Setting Up Webstudio

### **Creating a New Project**

1. Log in to Webstudio and either create a new project or edit an existing one.  
2. Choose a template or start with a blank project.  

### **Defining a Dynamic Page**

Dynamic pages in Webstudio allow you to automate the creation of multiple pages based on your Flotiq content.

To create a page with a dynamic path go to **Pages > Add New Page**. In the **Dynamic Path** field, use a variable to represent unique identifiers.

<figure><img src="https://flotiq.com/docs/Deep-Dives/images/webstudio/webstudio-page-configuration.png" alt="Create a Page with a Dynamic Path"><figcaption></figcaption></figure>

Assign a value from your existing object to the dynamic path variable.

<figure><img src="https://flotiq.com/docs/Deep-Dives/images/webstudio/webstudio-define-dynamic-path-value.png" alt="Set the dynamic path"><figcaption></figcaption></figure>

### **Adding a Data Variable**

Data variables fetch external content and save it in your Webstudio project. Go to `Page Settings > Data Variables > Add New Variable`.

Next, configure the variable:
   - **Name**: A custom name for the variable.
   - **Type**: Use `GraphQL` for this integration.
   - **URL**: Set to `https://api.flotiq.com/api/graphql`.
   - **Headers**: Add a header with `X-Auth-Token` as the key and your Flotiq API Key as the value.
   - **Query**: Use a GraphQL query to fetch data. Here’s an example for the `Blogpost` template:

     ```graphql
     query Post($slug: String = "") {
       blogpost(field: "slug", value: $slug) {
         id
         title
         slug
         excerpt
         headerImage {
             alt
             url
         }
       }
     }
     ```

   - **GraphQL Variables**: Bind the `slug` from the dynamic path:

     ```json
     {
       "slug": system.params.slug
     }
     ```

The variable should be configured as shown in the screenshot below:

<figure><img src="https://flotiq.com/docs/Deep-Dives/images/webstudio/webstudio-graphql-variables.png" alt="Configure a data variable"><figcaption></figcaption></figure>

Test the variable - if it is configured correctly, the fetched Flotiq content will appear in the **Inspect Tool**.

<figure><img src="https://flotiq.com/docs/Deep-Dives/images/webstudio/webstudio-inspecting-data-variable.png" alt=""><figcaption></figcaption></figure>

### **Embedding Flotiq Data into Webstudio Pages**

Once your Flotiq data is fetched into Webstudio, you can seamlessly embed it into your page components, creating dynamic and visually appealing content displays.

#### **Bind Data to Components**

Add components such as text fields or images to your Webstudio page. 

To bind data to these components:  
- Select a component and navigate to its settings.  
- Click the blue "+" button next to the desired property (e.g., **Text Content**).  
- Open the Expression Editor and map values from your Flotiq data variable, for example, `VariableName.data.data.blogpost.title`.

{% hint style="info" %}
> For images add an **Image Component**, and bind the **Source Property** to the image URL: `"https://api.flotiq.com/" + VariableName.data.data.blogpost.headerImage[0].url`.
{% endhint %}

<figure><img src="https://flotiq.com/docs/Deep-Dives/images/webstudio/webstudio-binding-text.gif" alt=""><figcaption></figcaption></figure>

### **Creating a Pages Overview**

Showcase multiple content items, like blog posts or portfolio entries, on a single page by fetching and displaying data from Flotiq.

#### **Add a New Data Variable**  

This variable will fetch a list of all objects from your Flotiq content type. Example query for `BlogpostList`:

```graphql
query Posts {
 blogpostList {
   id
   title
   slug
   excerpt
   headerImage {
       alt
       url
   }
 }
}
```

#### **Add a Collection Component**  

- Bind the collection to the data variable:  
 `<Data Variable Name>.data.data.<Content Type API Name>List`.
- Use the **Collection Item** variable to customize each object’s representation (e.g., title, image, link).

#### **Customize the Collection**  

Add components to the collection item (e.g., cards with titles, excerpts, and images). Editing one item applies the same layout to all items.

<figure><img src="https://flotiq.com/docs/Deep-Dives/images/webstudio/webstudio-creating-overview.gif" alt="Create overwiev page"><figcaption></figcaption></figure>


## Conclusion

Integrating Flotiq with Webstudio enables seamless creation of dynamic, content-driven websites using a headless workflow. This no-code approach allows users to efficiently manage content while focusing on design and functionality, making it accessible to developers and non-technical users alike.

Start building your headless website today with [Flotiq](https://flotiq.com) and [Webstudio](https://webstudio.com)!  
