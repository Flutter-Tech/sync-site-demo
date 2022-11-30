---
layout: default
title: Repository Configuration
---

# Repository Configuration File

{% include cbg/nav.html %}

This page explains the format of the [Codebase Governor repository configuration](/docs/cbg/#repository) YAML file. The codebase governor runner repository itself [has a commented example of this file][cbg-repo-example]. All fields are optional so you can add only what you want the codebase governor to enforce -- anything you omit you are free to manage manually via the GitHub UI or your own automation.

The file uses YAML syntax, and must have a `.yml` file extension. If you're new to YAML and want to learn more, see "[Learn YAML in Y minutes][learn-yaml]".

## `description`

The `description` key contains a description of the repository. Ideally this is a single sentence but can be several short sentences if required. It cannot be more than 1 paragraph (i.e. cannot contain any line breaks).

```yaml
description: >
  Codebase Governor is a tool to manage repository access 
  and branch protections.
```

## `branch-protections`

The `branch-protections` section specifies the required branch protection rules for the repository. If omitted any default branch protection rules from the [capability defaults file][default-config] will be applied. If no defaults are specified you are managing branch protections either manually via the GitHub UI or with your own automation.

{% include cbg/branch-protections.md %}

## `contributors`

The `contributors` section specifies who can contribute to your repository. A "contributor" is a user with [write permission][gh-permissions] to the repository. If omitted the default contributors from the [capability defaults file][default-config] will be applied. If no defaults are specified you are managing contributors manually via the GitHub UI or with your own automation.

{% include cbg/contributors.md %}

## `admins`

The `admins` section specifies who can administer your repository. The recommended way to specify [repository administrators][gh-permissions] is to define capability [owner](/docs/capability-defaults/#owner) and [maintainers](/docs/capability-defaults/#maintainers). It is often beneficial to enforce no other administrators, and there are valid use-cases where additional administrators are required. If omitted the default admins from the [capability defaults file][default-config] will be applied. If no defaults are specified you are managing administrators manually via the GitHub UI or with your own automation.

{% include cbg/admins.md %}

## Examples

Examples can be viewed in the [org-config] repository.

- The [fsc-cbg repository config](https://github.com/Flutter-Global/org-config/blob/main/codebases/codebase-governor/fsc-cbg.yml) is an example config which includes branch protection for develop, release and support branches for the [multiple teams branching model](/sdlc/multiple-teams/).

[org-config]: https://github.com/Flutter-Global/org-config
[learn-yaml]: https://learnxinyminutes.com/docs/yaml/
[cbg-repo-example]: https://github.com/Flutter-Global/org-config/blob/main/codebases/codebase-governor/fsc-cbg.yml
[default-config]: /docs/capability-defaults/
[gh-permissions]: https://docs.github.com/en/organizations/managing-access-to-your-organizations-repositories/repository-roles-for-an-organization
