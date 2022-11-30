---
layout: default
title: Quick Start
article_navigation: true
---

# Quick Start

{% unless site.internal %}

## Get Access

- If you are a member of [Flutter-Global], please use the internal docs site at [developers.flutter.com](https://developers.flutter.com/start/).
- If you are a Flutter employee you can request access via your divisional service desk (e.g. search JIRA service desk or your local confluence for "GitHub").
- If you're not yet part of Flutter, [we're likely hiring somewhere near you](https://www.flutter.com/careers).

{% endunless %}

## Essentials

- Repositories are in the [Flutter-Global] GitHub organisation.
- "[Capability](/docs/#capability)" means a group of related repositories.
- "[Codebase Governor]" is the automation that defines capabilities, branch protection and repository access access.
- Make sure you have added your work email address to [your GitHub email settings](https://github.com/settings/emails).
- Default GitHub notification settings do not suit Flutter-Global: in [your notification settings](https://github.com/settings/notifications) turn off "automatically watch repositories".

## Find Repository or People

- Use the site search in the top bar with the repository or person name.
- Browse via the [service catalogue] or [Flutter-Global] GitHub UI.
- Use direct URLs:
  - `https://github.com/Flutter-Global/<repo-name>`
  - `https://developers.flutter.com/catalogue/<repo-name>`
  - `https://developers.flutter.com/user/<github-username>`
- The "community" section in the repository catalogue page lists maintainers and contributors with contact details if available.

## Use Repository

- You will have default read access to most repos; and default write access to some repos.
- If GitHub repo URL gives you a 404, it is private and you need to request access from maintainers.
- Repository `README.md` or `CONTRIBUTING.md` files should get you started.
- The repository capability (if exists) may also have some docs to help.
- If you an unfamilar with GitHub, the courses on [GitHub Skills](https://skills.github.com/) will help.
- GitHub is so widely used if you get stuck a web search usually provides the answer.
- If still stuck ask listed maintainers or [use general support](/community/).

## Manage Repository

- You can create a repo via GitHub UI (name convention is [lower case name with dashes](/docs/create-repo/)).
- You can create an `Internal` visibility repository: this means it has default read access for all Flutter engineers. If this is not OK, request `Private` [via support](/community/). `Public` is not for this org.
- You will own, administer and be responsible for the security of your repository. PII or sensitive access secrets should never be in it.
- To manage many repos, learn and use the [Codebase Governor] conventions. You can add existing repos so no need to immediately start this way.
- You can manually manage access teams, or use the automated `all-flutter-global` team to reference all members.
- Unless you are a GitHub expert, we recommend choosing and following [standard SDLC setup guidance](/sdlc/). We prioritise support and automation features for these "golden path" standard setups.

**Good luck! If in doubt, [please ask](/community/).**

[flutter-global]: https://github.com/Flutter-Global
[service catalogue]: /catalogue/
[codebase governor]: /docs/cbg/
