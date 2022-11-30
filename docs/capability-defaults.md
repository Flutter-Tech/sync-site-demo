---
layout: default
title: Capability Defaults
---

# Capability Defaults File

{% include cbg/nav.html %}

This page explains the format of the [Codebase Governor capability](/docs/cbg/#capability) `_defaults.yml` file. The codebase governor capability itself [has a commented example of this file][cbg-defaults-example]. All fields are optional so you can add only what you need.

The defaults file uses YAML syntax, and must have a `.yml` file extension. If you're new to YAML and want to learn more, see "[Learn YAML in Y minutes][learn-yaml]".

## `owner`

The `owner` key specifies the [owner of a capability][owner] by their GitHub username. If provided, an owner team `owner-cap-<capability name>` will be created with the specified owner as the only member. This team will be granted administrative rights to all capability repositories. A team is used so the owner can be referenced via this team name in static dependencies like repository `CODEOWNERS` and still be easily changed.

```yaml
owner: example-github-username
```

## `maintainers`

The `maintainers` key specifies the [maintainers of a capability][maintainers] as an array of their GitHub usernames. If provided, a maintainers team `maintainers-cap-<capability name>` will be created with the specified members. This team will be granted administrative rights to all capability repositories.

```yaml
maintainers:
  - example-username-1
  - example-username-2
```

## `description`

The `description` key contains a description of the capability. Ideally this is a single sentence but can be several short sentences if required. It cannot be more than 1 paragraph (i.e. cannot contain any line breaks).

```yaml
description: >
  Codebase Governor allows you as a repository owner to manage
  protection and access settings via YAML file config and a
  pull-request workflow.
```

## `defaults`

The `defaults` section defines default settings for each repository in the capability:

- [`defaults.branch-protections`](#defaultsbranch-protections) defines the default branch protections.
- [`defaults.contributors`](#defaultscontributors) defines the default repository contributors.
- [`defaults.admins`](#defaultsadmins) defines the default repository administrators.

These defaults can be overridden for individual repositories within the capability in the [repository config file][repo-config].

[owner]: /how/owner/
[maintainers]: https://developers.flutter.com/how/multiple-teams/#who-are-maintainers
[learn-yaml]: https://learnxinyminutes.com/docs/yaml/
[cbg-defaults-example]: https://github.com/Flutter-Global/org-config/blob/main/codebases/codebase-governor/_defaults.yml
[repo-config]: /docs/repo-config/

## `defaults.branch-protections`

The `defaults.branch-protections` section specifies the default branch protection rules for the capability repositories. Do not specify defaults if you intend to manage protections manually in the GitHub UI or with your own automation.

{% include cbg/branch-protections.md %}

## `defaults.contributors`

The `defaults.contributors` section specifies default contributors for the capability repositories. A "contributor" is a user with [write permission][gh-permissions] to a repository. Do not specify defaults if you intend to manage protections manually in the GitHub UI or with your own automation.

{% include cbg/contributors.md %}

## `defaults.admins`

The `defaults.admins` section specifies default administrator for the capability repositories. The recommended way to specify [repository administrators][gh-permissions] is to define capability [owner](#owner) and [maintainers](#maintainers). It is often beneficial to enforce no other administrators, and there are valid use-cases where additional administrators are required.

{% include cbg/admins.md %}

## Examples

Examples can be viewed in the [org-config] repository.

- The [Codebase Governor capability defaults](https://github.com/Flutter-Global/org-config/blob/main/codebases/codebase-governor/_defaults.yml) are an example of a default config which enforces code owner reviews on the default `main` branch.

[org-config]: https://github.com/Flutter-Global/org-config
[gh-permissions]: https://docs.github.com/en/organizations/managing-access-to-your-organizations-repositories/repository-roles-for-an-organization
