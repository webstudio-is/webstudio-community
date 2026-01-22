# ▶ How to create fluid video backgrounds with Vimeo

{% embed url="https://youtu.be/XO3AntguPZE?si=gGQ_93CXQWLnoLwP" %}

Create stunning full-width video backgrounds that scale beautifully across all screen sizes using Vimeo.

## Overview

Video backgrounds can add visual impact to your website. Using the **Vimeo Background Video** component in Webstudio, you can create fluid, responsive video backgrounds that cover their container perfectly.

## Prerequisites

- A Vimeo account (free or paid)
- Your video uploaded to Vimeo
- The Vimeo video URL

## Step-by-Step Guide

### 1. Set Up the Container

1. Add a **Box** component to your page
2. Set the box's position to `relative`
3. Set a fixed height or min-height (e.g., `100vh` for full viewport height)
4. Set `overflow: hidden` to prevent video overflow

### 2. Add the Vimeo Background Video

1. Inside the Box, add a **Vimeo Background Video** component
2. Enter your Vimeo video URL in the settings panel
3. Configure playback options:
   - **Autoplay**: Enable for background effect
   - **Loop**: Enable for continuous playback
   - **Muted**: Required for autoplay to work in most browsers

### 3. Style for Fluid Coverage

To make the video cover the entire container:

1. Set position to `absolute`
2. Set `top: 0`, `left: 0`
3. Set `width: 100%` and `height: 100%`
4. Use `object-fit: cover` to maintain aspect ratio while covering the container

### 4. Add Content Overlay

1. Add another Box inside the container (after the video)
2. Set its position to `relative` so it appears above the video
3. Optionally add a semi-transparent overlay for better text readability
4. Add your content (headings, text, buttons)

## Tips

- **Performance**: Compress videos and keep them short for faster loading
- **Mobile**: Consider hiding video backgrounds on mobile and using a static image instead
- **Accessibility**: Don't rely on video content to convey critical information
- **Fallback**: Add a poster image or background color for loading states

## See Also

- [Vimeo Background Video Component](../core-components/vimeo-background-video.md)
- [Vimeo Component](../core-components/vimeo.md)
