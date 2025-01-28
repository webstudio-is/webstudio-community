---
description: How to deploy your Website Project to Flightcontrol using the Docker template.
---

# ▶️ Flightcontrol using Docker

In this tutorial, you will learn how to export your Webstudio Project and use [Flightcontrol](https://www.flightcontrol.dev) to deploy it to [AWS](https://aws.amazon.com).

{% hint style="info" %}
Flightcontrol is a PaaS that deploys to your AWS account, enabling you to leverage the power and cost of AWS without the complexity.
{% endhint %}

## Prerequisites

* [GitHub account](https://github.com)
* [AWS account](https://aws.amazon.com)
* [Flightcontrol account](https://www.flightcontrol.dev)
* [Webstudio CLI](cli.md)

## 1. Create a GitHub repository

Create a repository where you will add the Webstudio Project code in the following steps.

Be sure to clone the repository to your local machine.

## 2. Export Webstudio Project

Use the [CLI](cli.md) to export your Project and select the “Docker” option.

<figure><img src="../../.gitbook/assets/Screenshot 2025-01-27 at 7.42.11 PM.png" alt="Selecting Docker for Webstudio"><figcaption></figcaption></figure>

## 3. Push to GitHub

Now that the site code is local, push it to GitHub.

{% hint style="info" %}
You do not need to build the app locally.
{% endhint %}

## 4. Setup Flightcontrol

1.  Follow the prompt to connect AWS, which will direct you to AWS. Then click “Create stack”. It may take a couple of minutes, but once it is done, Flightcontrol will take you to the next step.

    ![AWS setup in Flightcontrol](../../.gitbook/assets/aws.PNG)
2.  Connect your GitHub account and select the repository you want to give it permission to.

    ![connect GitHub button](../../.gitbook/assets/connect-github.PNG)
3.  Follow the prompts > select “Build your own” > select "Web server" > and use the default settings.

    ![build your own option](../../.gitbook/assets/buildown.PNG)
4.  Deploy and wait. The initial deployment takes some time. Please allow up to  \~15 minutes for the deployment to finish.

    ![Deployed app](../../.gitbook/assets/flightcontrol-done.png)

## 5. Sync and push new changes

When you make changes to your Webstudio Project, click publish, run `webstudio sync,` and push the changes to GitHub. This will trigger Flightcontrol to deploy the latest changes.

<figure><img src="../../.gitbook/assets/webstudio-sync.png" alt="webstudio sync command"><figcaption></figcaption></figure>

***

Now, you should have a website built on Webstudio that is hosted on AWS using Flightcontrol.
