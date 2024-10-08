---
title: Using the CLI Wizard
sidebar: 
  order: 2
description: How to get started with the code connect CLI wizard 
---

For first-time setup of Code Connect in a codebase, we recommend using the interactive setup, which makes it easier to quickly connect a large codebase. Code Connect will attempt to automatically connect your codebase to your Figma design system components based on name, which you can then make any edits to before batch-creating Code Connect files. No data gets published or unpublished in this flow, so feel free to try it out!

To start the interactive setup, enter `figma connect` without any subcommands:

```sh
npx figma connect
```
The interactive flow will ask you for information to help automatically link your codebase, including:

- Your Figma access token
- Your Figma design system file's URL
- The path to your code files you wish to connect

After providing those, Code Connect will attempt to link your code files to your design system components based on name, allowing you to review and edit the results before proceeding to create Code Connect files:

![image](https://static.figma.com/uploads/8eaf17a16f4cca27d5b5b18f418608fd806c675d)

:::note
If you have too many components to connect at once, try entering a subfolder when prompted for the path to your code files. You can later change this to another folder, and any already-connected code files will be filtered out of the list of connectable components.
:::

### Choosing whether to use AI

Code Connect gives you the option to use AI to improve the accuracy of the generated prop mappings. If you choose to use AI, the following is sent to OpenAI for any components you're connecting:

- React code prop names
- Figma property names
- Figma variant values

Figma’s agreement with OpenAI provides that data is not to be used for model training. For more information, see: https://help.figma.com/hc/en-us/articles/23920389749655-Code-Connect

If you choose not to use AI, fuzzy matching is used instead.