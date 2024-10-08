---
title: General Configurations
sidebar:
  order: 3
description: common configurations available for all frameworks supported by Code Connect
---

## General configuration

Code Connect can be configured with a `figma.config.json` file, which must be located in your project root (e.g. alongside the `package.json` or `.xcodeproj` file).

Every platform supports some common configuration options, in addition to any platform-specific options.

### `include` and `exclude`

`include` and `exclude` are lists of globs for where to parse Code Connect files, and for where to search for your component code when using the [interactive setup](docs/react.md#interactive-setup). `include` and `exclude` paths must be relative to the location of the config file.

```json
{
  "codeConnect": {
    "include": [],
    "exclude": ["test/**", "docs/**", "build/**"]
  }
}
```

### `parser`

Code Connect will attempt to determine your project type by looking the first ancestor of the working directory which matches one of the following:

- If a `package.json` containing `react` is found, your project is detected as React
- If a `package.json` is found not containing `react`, your project is detected as HTML
- If a file matching `Package.swift` or `*.xcodeproj` is found, your project is detected as Swift
- If a file matching `build.gradle.kts` is found, your project is detected as Jetpack Compose

In case this does not correctly work for your project, you can override the project type by using the `parser` configuration key. Valid values are `react`, `html`, `swift` and `compose`.

```json
{
  "codeConnect": {
    "parser": "react"
  }
}
```

### `label`

`label` allows you to specify the label used in Figma for your Code Connect docs. This defaults to the type of your project (e.g. `React`). You can override this to show a different name in the UI, which can be useful for e.g. showing different versions of the code.

### `documentUrlSubstitutions`

`documentUrlSubstitutions` allows you to specify a set of substitutions which will be run on the `figmaNode` URLs when parsing or publishing documents.

This allows you to use different config files to switch publishing Code Connect between different files, without having to modify every Code Connect file (e.g. if you have a test version of your document you want to publish to). The substitutions are specified as an object, where the key is the string to be replaced, and the value is the string to replace that with.

For example, the config:

```json
{
  "codeConnect": {
    "documentUrlSubstitutions": {
      "https://figma.com/design/1234abcd/File-1": "https://figma.com/design/5678dcba/File-2"
    }
  }
}
```

would change Figma node URLs like `https://figma.com/design/1234abcd/File-1/?node-id=12:345` to `https://figma.com/design/5678dbca/File-2/?node-id=12:345`.