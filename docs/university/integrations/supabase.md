# How to build a frontend for Supabase using Webstudio

In Webstudio, a "Collection" is a powerful feature designed to manage and display dynamic content on web pages. Essentially, they serve as containers that can connect to various data sources, like databases or APIs, to fetch and present data in a structured and repeatable manner. This allows developers and designers to create instances, such as lists, galleries, or testimonial sections, where each item in the collection is automatically populated with data from the connected source. By using a collection, Webstudio users can efficiently create pages with content that updates in real-time, reflecting changes in the data source without manual intervention, thereby enhancing the site's interactivity and relevance.

{% embed url="https://www.youtube.com/watch?v=2MrkfnjYuCo" %}

## Dynamic Content Creation with Webstudio and Supabase

To create pages featuring dynamic content in Webstudio by integrating Supabase as your data source.

***

### Setting Up Your Supabase Project

1. Sign up for a free Supabase account.
2. Create a new project. (You'll need to set a strong password for your project to proceed).
3. Once your project is initialized, navigate to the table editor to create a new table
4. Define your fields

***

### Uploading Images to Supabase Storage

* Create a new bucket - set it as public, and upload your images.
* Each image will have a URL

***

### Integrating Supabase with Webstudio

To connect Supabase to Webstudio, you'll need to set up Row Level Security (RLS) policies for your table and obtain your API URL from Supabase's API docs.

1. **Creating RLS Policies**: Navigate to the RLS policies section in Supabase and create a new policy that allows read access for everyone.
2. **Retrieving the API URL**: Find your table in the API docs, switch the example code to bash, and copy the URL provided.

In Webstudio, select your container and add a new collection component. Configure a collection variable with the Supabase API URL, ensuring the request is authenticated with your Supabase API key.

***

### Mapping Data and Finalizing Your Page

Map the data from Supabase to your Webstudio project. This involves setting up the data within your collection to inform Webstudio about the available data for use.

* Delete any automatically generated preview box within the collection.
* Drag in your pre-created and pre-styled components, which will be repeated for each fetched item from Supabase.
* For each component (e.g., paragraph, field, and image), bind the corresponding data from your Supabase collection.
* Once everything is connected and data is properly mapped, your page will dynamically display the testimonials stored in Supabase.

Make sure to check the responsiveness and appearance on mobile devices before publishing.

***
