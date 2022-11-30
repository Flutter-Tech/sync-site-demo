---
layout: default
title: Multiple Teams CLI
article_navigation: true
previous_title: Branching Model
previous_url: /sdlc/multiple-teams/branching/
next_title: Case Study
next_url: /sdlc/multiple-teams/case-study/
---

# `git flutter` with Multiple Teams

{% include mt/nav.html %}

[`git flutter` is a command line tool](/git-flutter/) supported by the inner source team. Its purpose is to make working with the standard SDLCs easier.

## Install

[An detailed installation guide is available here](/git-flutter/), but for most this is:

```
curl -o- https://innersource.flutter.com/git-flutter/install.sh | bash
```

View repository status:

```
git flutter status
```

{% include mt/try-it.html %}

## Create a Feature

From your develop branch:

```
git flutter feature "my feature name"
```

To push your work and open a PR to your develop branch:

```
git flutter push -w
```

## Create a Release

From your develop branch:

```
git flutter release "name or version"
```

To semver tag a beta build:

```
git flutter tag
```

To create a release PR into `main`:

```
git flutter push -w
```

... and once the release is merged to `main` tag the final build:

```
git checkout main
git flutter tag
```

## Sync Branch

To update the current branch with upstream changes:

```
git flutter sync
```

You must be a maintainer to synchronise develop or release branches.

## Hotfix Previous Version

To hotfix a previous version (in this case `2.1.0`):

```
git flutter hotfix "my fix name" --tag=2.1.0
```

This will create a support branch if necessary.
