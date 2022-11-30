---
layout: default
title: Creating a Repository
article_navigation: true
previous_title: Use a Repo
previous_url: /docs/use-a-repo/
next_title: Maintaining a Repository
next_url: /docs/maintainer/
---

# Creating a Repository

This guide explains how to create and configure a new repository. Remember -- if you create a repository you are also [responsible for maintaining it](/docs/maintainer/).

## Naming

A good repository name allows users to accurately guess its contents. Repositories in `Flutter-Global` follow the conventions:

- **repository names MUST be lower case, using a dash (`-`) as a word separator.**
- a general capability documentation repository should be prefixed with `cap-` e.g. `cap-cashout`.
- use a common relevant prefix to group several related repos together. e.g. for the fixed odds cashout quote functionality this is `fcq-`.
- for the primary repository of an application use `-service` suffix, e.g. `fcq-service`.
- supporting repositories can be referred to as a `lib` (shared library code), `tests` (separate testing code) or `tool` (a supporting utility)
- each division usually maintains its own service deployment with a repository for each specific divisional configuration. If these repos live in `Flutter-Global` they usually contain `config` to indicate their contents. Since they are owned by a particular division that is indicated by a suffix (`-ppb`, `-fdg`, or `-isp`). e.g. `fcq-config-ppb` contains PPB deployment config for the FCQ service.

## Creating

Every user in `Flutter-Global` has permission to create a new repository in the normal way in GitHub. Use the **+** drop-down menu on the top-right corner of a GitHub page and select **New repository**.

<img src="/docs/create-repo/create-repository.png" class="max-w-xl" />

In the **Owner** drop-down, select the _Flutter-Global_ Organization, this is where our inner source code is shared.<br/>

<img src="/docs/create-repo/owner.png" class="max-w-xl" />

Enter the name of your repository and a description.

<img src="/docs/create-repo/name.png" class="max-w-xl" />

Within _Flutter-Global_, **all repositories have Internal visibility**. If you want something different, please contact the [inner source team](/community/).

<img src="/docs/create-repo/visibility.png" class="max-w-xl" />

Choose how you want to initialise then continue to create the repository. Creating the repository manually simply gives you an empty repository that you have full admin control over but has not been yet been appropriately configured.

## Configuring

To setup your repository you will need to define:

1. a branching strategy: where is the code initially contributed to and then merged into?
2. an access control strategy: who can access the repository, and with what permissions?
3. branch protections to ensure the combination of (1) and (2) is secure.

If you are familar with GitHub and know what you want you can simply go ahead and configure as you wish. If you are uncertain we recommend:

- Consider using one of the [standard source control patterns](/sdlc/source/).
- Use the [Codebase Governor](/docs/cbg/) tool to config your branch protection and access control via a GitOps file-based workflow.
