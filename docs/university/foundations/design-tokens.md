# 🖌 Design Tokens

{% embed url="https://youtu.be/O8XNB2_JfaQ" %}

### Why tokens instead of classes? <a href="#introduction" id="introduction"></a>

If you’ve ever made a website with CSS or with Webflow, you’ve used “classes” to manage your website’s layout and visual styles. Sometimes we love classes. They give us a way to re-use styles which saves us valuable time. But they have some limitations that make classes very frustrating to use in the context of visual development tools.

Scenario: You’re building a website with Webflow. You have two separate elements, a button and card, and you want to give them the same box shadow. Buttons and cards have unique styles so they each already have a unique class. What do you do?

* A: Manually configure the box shadow on the existing Button and Card classes individually. With this option you’re doing the same thing twice. It would save time if we could re-use the box shadow styles.
* B: Apply the Box Shadow class on top of the existing Button and Card classes, making a combo class. Now you can’t edit the styles on Button or Card without first removing the Box Shadow class. Don’t forget to re-apply it!\
  And good luck managing the classes on a different breakpoint. To edit the Button or Card classes you must first remove the Box Shadow combo class, then Webflow will kick you back to the desktop breakpoint, then you select the intended breakpoint again, then make your style changes, then re-apply the combo class. Experienced Webflowers know the pain.

There’s a better way. It’s Design Tokens.

***

### What are design tokens? <a href="#what-are-design-tokens" id="what-are-design-tokens"></a>

Design tokens are everything that you wish classes would be - a way to re-use styles without limitations.

* Mix-and-match tokens freely: You can apply as many tokens as you want to an instance in any order. No combo class silliness, no limitations with breakpoints. You want to re-use a drop shadow? Make a token for it and slap that token anywhere you want to see the shadow. Couldn’t be easier.
* Atomize your styles, or don’t: You can make a token just for the color red if that suits your workflow - there’s no disadvantage to doing so. Or you can apply a combination of styles to a single token in same way you’ve been using classes in Webflow. This makes tokens perfect for utility-based frameworks like TailwindCSS!
* Universal format: We didn’t invent design tokens. There is an independent spec (by the [Design Tokens Community Group](https://design-tokens.github.io/community-group/format/)) that defines a data format for tokens, meaning you can potentially import and export tokens between multiple apps. Soon you’ll be able to sync tokens between Webstudio and Figma through the [Tokens Studio for Figma](https://tokens.studio/) plugin!

***

### How to use tokens in Webstudio <a href="#how-to-use-tokens-in-webstudio" id="how-to-use-tokens-in-webstudio"></a>

The workflow for styling tokens in Webstudio is nearly the same as styling classes in Webflow, except better.

<table><thead><tr><th></th><th></th><th data-hidden></th></tr></thead><tbody><tr><td><img src="../../.gitbook/assets/Screenshot_2023-06-14_at_9.39.06_AM_L30-YOPlszHiSIUMk6mlf (4).avif" alt="" data-size="original"></td><td><p>The top section of the Style Panel is our Style Sources Input. This is where you’ll create, style, and arrange your tokens.</p><p>When you select a component's instance on the canvas, the tokens you see inside this input are sources of the styles on that instance.</p></td><td>The top section of the Style Panel is our <a href="https://www.reddit.com/r/diablo4/comments/148kfyt/psa_consolescontrollerbeginners_users/">Style Sources Input</a>. This is where you’ll create, style, and arrange your tokens.<br><br>When you select a component's instance on the canvas, the tokens you see inside this input are <em>sources</em> of the <em>styles</em> on that instance.</td></tr><tr><td><img src="../../.gitbook/assets/Design_Tokens_Article_Img_2_2fBLZVeZRwUuBy4tTmp-4 (2).avif" alt="" data-size="original"></td><td>Want to style something immediately without making a token? Go for it. All component instances in Webstudio have this Local style source by default. Styles applied on Local are unique to an instance and can’t be re-used, but you can easily convert styles from Local to a new token through the token menu.</td><td>Want to style something immediately without making a token? Go for it. All component instances in Webstudio have this Local style source by default. Styles applied on Local are unique to an instance and can’t be re-used, but you can easily convert styles from Local to a new token through the token menu.</td></tr><tr><td><img src="../../.gitbook/assets/Design_Tokens_Article_Img_3_z9Xg6gWFzLprgdW-cUtoj (1).avif" alt="" data-size="original"></td><td>To make a new token, click inside the Style Sources Input, type a name, and hit ENTER/RETURN.</td><td>To make a new token, click inside the Style Sources Input, type a name, and hit ENTER/RETURN.</td></tr><tr><td><img src="../../.gitbook/assets/Design_Tokens_Article_Img_4_YHsB737aw5XhHU1P9BkhW.avif" alt="" data-size="original"></td><td><p>The token you’re currently styling will be blue in the Style Sources Input, while others are gray. Simply click on another style source to select it.</p><p>Any styling you do will be applied to the current token and reflected across all instances of that token.</p><p>When you add a style, the label for that property will turn blue to show that it is applied on the current token.</p></td><td><p>The token you’re currently styling will be blue in the Style Sources Input, while others are gray. Simply click on another style source to select it.</p><p>Any styling you do will be applied to the current token and reflected across all instances of that token.</p><p>When you add a style, the label for that property will turn blue to show that it is applied on the current token.</p></td></tr><tr><td><img src="../../.gitbook/assets/Design_Tokens_Article_Img_5_nCXu4ddgLu3uyiVu-UvTn.avif" alt="" data-size="original"></td><td><p>Hover the label for a helpful description of where the styles on this property come from.</p><p>In this case we see that the width value that we just applied is coming from the Base breakpoint, the “new token” token, on the Body instance.</p></td><td><p>Hover the label for a helpful description of where the styles on this property come from.</p><p>In this case we see that the width value that we just applied is coming from the Base breakpoint, the “new token” token, on the Body instance.</p></td></tr></tbody></table>

We have other label colors to help you keep track of your styles at a glance:\




|                                                                        |                                                                                                                                                |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- |
| <mark style="background-color:blue;">**Blue**</mark>                   | This style is on the current token.                                                                                                            |
| <mark style="color:orange;background-color:orange;">**Orange**</mark>  | This style is coming from another source: a token that is not selected, inherited from a parent instance, or cascaded from another breakpoint. |
| <mark style="background-color:yellow;">**Gray**</mark>                 | This is a Webstudio default style (like font-family: arial).                                                                                   |
| <mark style="color:red;background-color:red;">**Red**</mark>           | This style is on the current token, but it’s being overwritten by another token in the Style Source Input.                                     |

The order of tokens in the Style Source Input matters. When multiple tokens have a value for the same property, tokens toward the end of the list will overwrite tokens toward the beginning of the list.

***

### Coming Soon <a href="#coming-soon" id="coming-soon"></a>

Tokens are super powerful and versatile, but this is just the beta. We have some exciting features coming that will give you even more freedom to manage your tokens.

Tokens Manager: This will enable you to edit, create, and delete tokens in bulk, independently of the Style Panel. You’ll be able to create and switch between multiple token libraries or “themes”, like light and dark mode!

Tokens Sync: Since Design Tokens are a standardized format, it will eventually be possible to import, export, and sync tokens with your favorite apps. Soon you’ll be able to sync tokens between Webstudio and Figma through the [Tokens Studio for Figma](https://tokens.studio/) plugin!
