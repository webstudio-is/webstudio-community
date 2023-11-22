# ✍ Form

{% embed url="https://www.youtube.com/watch?v=eE-CkewQHMs" %}

Form components allow site owners to collect data from site visitors. A basic Form component will send this information to the site owner’s registered email. However, you can also customize your component and link it to external services like n8n, Airtable and Notion.

***

### How to use the Form Component

You can add a Form component to your canvas from the Components Panel > Forms section.

Inside the Form component, you will find three nested instances— Form Content, Success Message and Error Message. While you can always add new components to further expand and modify your form, these instances make up the default look.

#### Form Content

The Form Content instance is made up of 2 “Input Label” instances, 2 “Text Input” instances and 1 “Button” instance.

#### Input Label

This component defines the name, purpose or function of a form field.This makes it easier to navigate and define your form structure.

#### Text Input

This component allows site visitors to input single-line data, which is then submitted to the site owner. This component comes with several customizable properties that we will discuss in the next section.

#### Button

This component is the backbone of every form! When site visitors click the Submit button, all the collected data is sent over to the site owner. You can modify the text on your button by double-clicking and editing it.

#### Success Message

If a form is submitted without any errors, the site visitor will be greeted with a success message. Here is how you can see and edit the “Success Message” for your form:

1. Start by selecting the main “Form” Instance and going over to “Settings”.
2. Here you will see that the “State” of your form is set to “Initial” by default. To view and edit your success message, set the state to “Success.”

Now you should see the default “Success Message” on your canvas instead of the “Form Content.” To edit your message, double-click it and type away!

#### Error Message

If a form submission faces any errors, the site visitor will see an error message. The process for viewing and editing the “Error Message” is the same as the one for success messages.

You can see the error message on your canvas by setting the Form component’s state to “Error.”

***

### How to customize your Form

#### Customizing the Text Input component

You can view the properties of your “Text Input” instance by selecting it in your navigator and heading to the “Settings” section.

<figure><img src="../../.gitbook/assets/Form_component_6-NEW_aOvyRurj4dO-hBdvCz8m7.avif" alt=""><figcaption></figcaption></figure>

1. Name: The “Name” field allows you to identify your “Text Input” instance.
2. Type: You can assign a “Type” to your “Text Input” component to define what type of data a site visitor can enter inside the text field.\
   \
   The type can be set to anything from Number, Text, Email, Password, Tel (telephone number) or URL. Each of these come with their own properties and restrictions. For instance, setting the type to “Password” will hide the typed characters and choosing “Email” will only let the user put in an email address.
3. Placeholder: The “Placeholder” text is placed inside your ”Text Input” component and acts as a general guide for a site visitor. This text is overwritten once a user starts typing into the text field.
4. Required: If you enable the “Required” property for your “Text Input” component,on a text field, site visitors will not be able to submit the form without filling it out.
5. Auto Focus: If you enable the Auto Focus property, the selected instance will receive focus when the page loads, taking the site visitor to the portion of the page with the text field that they need to see.

#### Customizing the Button component’s type

To customize a “Button” instance, select it in the navigator and head over to the “Settings” Panel:

<figure><img src="../../.gitbook/assets/Form_component_7-NEW_W0IAc8s333Ju-yVPwP8IO.avif" alt=""><figcaption></figcaption></figure>

1. Button: Setting your Button instance to “Button” will make it a general element with no specific default action.
2. Submit: If your button is placed in a form and you set it to “Submit” type, it will submit the collected data to the site owner when clicked.
3. Reset: With the “Reset” type, the button will remove any data the user has put into a form.

***

### Other “Forms” components

We have explored the instances that are a part of every Form component by default. You can add additional components from the Components Panel > Forms section to expand your Form.

<figure><img src="../../.gitbook/assets/Form_component_8_Hfog0l0VliwzoTVTe790u.avif" alt=""><figcaption></figcaption></figure>

Here is a more detailed look at the other components in the Forms section:

#### Text Area

This component allows site visitors to add multi-line data as part of their answers.It is similar to the “Text Input” component and the two share the same list of properties.

#### Checkbox

With the Checkbox component, you can provide multiple options that the site visitor can check or leave unchecked as part of their input.

#### Radio

Unlike the Checkbox component, the Radio component is used to give the site visitor a list of options and they have to select one.
