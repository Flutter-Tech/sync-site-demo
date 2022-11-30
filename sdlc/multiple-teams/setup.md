---
layout: default
title: Multiple Teams Setup
article_navigation: true
previous_title: Quick Start
previous_url: /sdlc/multiple-teams/
next_title: Branching Model
next_url: /sdlc/multiple-teams/branching/
---

# Multiple Team Source Setup

{% include mt/nav.html %}

This guide shows you how to setup the multiple teams source pattern for a repository.

## 1. Use Codebase Governor

Manual setup of a repository is complex, so use the [Codebase Governor] ("CBG") tool provided. CBG enforces access and branch protection for repositories using YAML config files in the [org-config] repository.

### Find Your Config

Your repository is probably already configured by CBG. To find out search for your repository in the [service catalogue]:

<img src="/sdlc/multiple-teams/fsc-cbg-config-link.png" class="max-w-sm" />

If your repository has existing config it will be linked from its catalogue entry. You can update the config in this file by creating a new branch and raising a pull request.

### Create Your Config

If there is no existing CBG config you will need [to start using this tool][codebase governor]. This has a initial learning curve but will save you time especially if you manage many repositories. [Support is available from the inner source team](/community/).

## 2. Access Control

With this pattern:

- Your repository visibility is `Internal`. This means all Flutter staff have read access by joining one of the GitHub organisations within the enterprise agreement.
- The capability owner and maintainer team are the only users who can administer the repository and must approve any proposed code changes.
- All members of `Flutter-Global` are treated as contributors who can propose code changes. To allow this the `all-flutter-global` team is granted write permission.

### Owner and Maintainers

- By configuring your repository with [Codebase Governor], it is already part of a group of repositories called a **capability**.
- The capability name is the directory in which your repository config file is located in [org-config].
- If the capability name was `example-name`, the owner can be referenced using the team name `owner-cap-example-name` and the maintainers as `maintainers-cap-example-name`.
- The membership of these teams is defined in the `_defaults.yml` [capability defaults file](/docs/capability-defaults/) in the same directory as your repository config file in [org-config].
- These teams are automatically granted admin permissions on all repositories within the capability.

### Admins and Contributors

Add the following to your [Codebase Governor] repository config file:

```yaml
# enforce no admins other than owner & maintainers
admins: {}

# allow contribution from any member of Flutter-Global
contributors:
  teams:
    - all-flutter-global
```

## 3. CODEOWNERS

The `CODEOWNERS` file in the root directory of your repository has [a special meaning in GitHub][codeowner-gh]. To ensure changes are reviewed by maintainers it must exist and reference the maintainer team using the content:

```
# replace 'example-name' with your capability name:
*       @Flutter-Global/maintainers-cap-example-name
```

## 4. Branch Protection

Add the following to your [Codebase Governor] repository config file:

```yaml
branch-protections:
  - patterns:
      - "main"
      - "master"
      - "support/*"
    parameters:
      required-reviews-count: 2
      requires-codeowner-reviews: true
      requires-status-checks: true
  - patterns:
      - "*/develop"
      - "*/release/*"
    parameters:
      required-reviews-count: 1
      requires-codeowner-reviews: true
      requires-status-checks: true
      allow-admin-bypass: true
      allow-stale-reviews: true
      allow-stale-branch-merge: true
      allows-deletions: true
```

The default (`main` or `master`) and previous version support branches are configured to ensure all production deployed code is reviewed by a maintainer:

- Ensure pull requests are used with at least 2 approving review (`required-reviews-count: 2`). This encourages cross team review for critical pull requests.
- Require a codeowner approval rather than any other user with write permissions (`requires-codeowner-reviews: true`).
- Require automated pull request validation checks to pass before a pull request can be merged (`requires-status-checks: true`).

Develop and release branches also require branch protection, but the settings can be optimised for development speed:

- maintainers can push directly to develop and release branches due to enabling `allow-admin-bypass`. This allows them to perform maintenance directly without waiting for review.
- Approving reviews remain valid for a pull request after minor feedback fixes are made (`allow-stale-reviews: true`). This means the author spends less time chasing re-reviews after minor edits.
- A branch which is not up-to-date can still be merged (`allow-stale-branch-merge: true`). This reduces the time an author spends updating their branch.
- develop and release branches change over time: teams are added and removed and release branches are explicitally deleted after a release is completed so deleted is allowed via `allows-deletions: true`.

## 5. Tag Protection

This pattern uses semver tags prefixed with a `v` on the repository to trigger releases and builds. To ensure that these tags are applied correctly their creation is limited to the maintainer team by creating a tag protection rule:

- Use the GitHub web interface to view your repository settings (the "Settings" tab).
- Navigate to the "tags" section.
- Add a tag protection rule using the `v*` pattern.

## 6. Create Develop Branches

Each team will use and manage its own `team-name/develop` branch as part of the [multiple teams branching model](/sdlc/multiple-teams/branching/). To get started you now just need to create these branches, one for each team.

For example to create a develop branch for the `opo` team:

```
git checkout main
git checkout -b opo/develop
git push -u origin opo/develop
```

## Examples

[Various adoption and migration examples are documented on this page](/sdlc/multiple-teams/examples/). You can use these to help you setup this pattern for your own context, and please feel free to contribute to these docs to help others.

[codebase governor]: /docs/cbg/
[org-config]: https://github.com/Flutter-Global/org-config
[service catalogue]: /catalogue/
[codeowner-gh]: https://docs.github.com/en/repositories/managing-your-repositorys-settings-and-features/customizing-your-repository/about-code-owners
