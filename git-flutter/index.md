---
layout: default
title: Git Flutter CLI
article_navigation: true
next_title: Install Git Flutter
next_url: /git-flutter/install/
---

# `git flutter` CLI

The Git Flutter CLI is a tool to save you time when using [standard SDLCs](/sdlc/) from your computer's command line. It can be installed on [macOS, Linux](#macos-or-linux) or [Windows](#windows). For Linux/MacOS:

```
{{ site.data.cli.example.usage }}
```

## MacOS or Linux

To install on macOS or Linux:

1. Run the installation script:

```bash
 curl -o- https://innersource.flutter.com/git-flutter/install.sh | bash
```

2. Close and reopen your terminal to start using `git flutter` or run the following command to use it immediately:

```bash
 [ -d "$HOME/.git-flutter/bin" ] && PATH="$HOME/.git-flutter/bin:$PATH"
```

3. Verify the extension installation via `git`:

```bash
 git flutter --version
```

## Windows

To install on a Windows machine:

<!-- prettier-ignore -->
1. Download the [latest release {{ site.data.cli.version }}](https://innersource.flutter.com/git-flutter/git-flutter_{{ site.data.cli.version }}_Windows_x86_64.zip).

Or if you have `curl` installed, use this command:

```bash
curl https://innersource.flutter.com/git-flutter/git-flutter_{{ site.data.cli.version }}_Windows_x86_64.zip
```

2. (Optional) Validate the binary by comparing [the provided checksum](https://innersource.flutter.com/git-flutter/checksums.txt) with that of the download which you can calculate at the command prompt:

```bash
CertUtil -hashfile git-flutter_{{ site.data.cli.version }}_Windows_x86_64.zip SHA256
```

3. Extract the `git-flutter_{{ site.data.cli.version }}_Windows_x86_64.zip` file and copy the `git-flutter.exe` into `C:\Program Files\Git\usr\bin`.

4. Verify the extension installation via `git`:

```bash
git flutter --version
```

## Getting Started

Your usage of this tool will depend on your choice of workflow and branching model. Your [chosen SDLC](/sdlc/) will document its usage for that specific approach.

## Support

The CLI is supported by the [Inner Source Team](/community/) who can be contacted for help & support. Direct feature or bugfix contributions are also very welcome via [fsc-git-flutter](https://github.com/Flutter-Global/fsc-git-flutter) repository.
