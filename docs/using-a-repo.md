---
layout: default
title: Using a Repo
article_navigation: true
previous_title: Using GitHub
previous_url: /docs/
next_title: Create a Repo
next_url: /docs/create-repo/
---

# Using a Repository

This guide helps you use a typical inner source code repository. It assumes you have already:

- joined the `Flutter-Global` organisation to access our inner source portfolio.
- know which repository you need to work with (if not, see the [service catalogue](/catalogue/)).

## Quick Start

- Most repositories have `Internal` visibility so you have read access by default. For `Private` repos read access is limited to those who need it and you will get a 404 from github.com until you request access from the repository maintainers.
- You are automatically added to the `all-flutter-global` team. Some repositories setup for contribution will grant you write access by default via this team.
- Default GitHub notification settings do not suit Flutter-Global because of this write access setup: in [your notification settings](https://github.com/settings/notifications) turn off "automatically watch repositories". Make sure you have added your work email address to [your GitHub email settings](https://github.com/settings/emails).
- Best source of information for a repository is the repository `README.md`, `CONTRIBUTING.md` and [service catalogue](/catalogue/) page.
- While most GitHub open-source projects use a [forking workflow](https://www.atlassian.com/git/tutorials/comparing-workflows/forking-workflow) to avoid the need for contributor write access, this is not appropriate for inner source. Forking is disabled.
- To contribute to a repository you will need write access so you can make your proposed changes in a branch and raise a pull request.
- Different repositories will have different contribution flows. The repository docs should tell you what to do. There are some [documented branching patterns](/sdlc/source/#branching-strategy) that reflect typical usage.

## Your Permissions

The majority of repositories have `Internal` visibility ([github docs](https://docs.github.com/en/github/creating-cloning-and-archiving-repositories/creating-a-repository-on-github/about-repository-visibility)). This means that all members of our wider GitHub Enterprise have read permissions on that repository. This allows you to view and clone the repository to start using it.

The repository [fsc-docs-site](https://github.com/Flutter-Global/fsc-docs-site) is one such `Internal` repository which should be visible to you if you are a member of the Flutter inner source community. If you can view/clone this example, but not the repository you want to access then that repository may be `Private`. `Private` repos are discouraged as it makes inner source more difficult, but are necessary in a few circumstances to protect sensitive intellectual property (e.g. pricing algorithms). For `Private` repos read access is limited to those who need it and you will need to request access from the repository maintainers.

You may also have write permissions on the repository (although some branches will be protected). A simple way to tell if you have write access is whether a small "edit" pencil icon appears on the top right of the `README.md` on the repository homepage. This becomes relevant once you want to contribute.

## Standard Documentation

By convention there are 2 files in the repository to help you:

- `README.md` describes the purpose of the repository, who and how to contact about its content, how to use/build it and onward links to further docs.
- `CONTRIBUTING.md` describes how to contribute: the process, a code guide, how to verify changes, CI setup and expectations and so on.

These files may not exist in the repository you are using, but are the best place to start your search for documentation.

The repository you are using will be part of a [capability](/docs/cbg/#capability) (a collection of repositories that do something meaningful for our business). If you can't find the necessary docs in the repository itself, the contributors may have put them in another repository in the capability. You cannot infer the capability a repository is part of from the GitHub user interface, so look up your repository in the [service catalogue](/catalogue/) to find the capability it is part of.

## Access Beyond the Code

While you can clone the repository, to use it effectively you may find the need to access further artefacts or resources outside the repository. For example dependencies from a divisional Artifactory, documentation in a division's Confluence, and so on.

Repository owners and maintainers are encouraged to eliminate such dependencies that require separate access requests where possible by completing [stage 1 ("Readable Source")](/how/readable-source/) of our inner source model. However such dependencies remain common, and instructions on how to access various systems should be part of the repo documentation.

## Who Can Help You?

The best source of information on who & how to contact if you need help is the `README.md` or `CONTRIBUTING.md` files.

Each repository is part of a capability -- a group of related repositories. Each capability has a team of experts who can help known as **maintainers**. These maintainers may all belong in a single delivery team ([stage 2](/how/)), or be distributed across different teams and divisions ([stage 3](/how/multiple-teams/)). The maintainers are led by a capability owner.

You can lookup the capability owner and maintainers for a repository in the [service catalogue](/catalogue/). They are busy people with many demands on their time so will only have limited time to assist you. Please take the time to read and follow any documented routes to seek their help (e.g. a support Slack channel).

## Contribution

A single consistent contribution process does not exist as the steps required differs between repositories. So your first task as a contributor is to discover the contribution process:

- This should be documented in the repository `README.md` or `CONTRIBUTING.md` file. If absent, check in the capability repository instead (located via the [service catalogue](/catalogue/)).
- Use history as a guide: check the timeline and conversation in recent pull requests.
- If in doubt you should ask the maintainers as they are the group that define this process.

You should expect:

1. **Early Engagement**: a way to get feedback on your intentions before you & others commit significant time to it. For example a Slack discussion thread, or creating a GitHub issue or RFC document for feedback.
2. **Propose & Review**: a way to share your changes with others who will then review them. For example raising a pull request of your implemention and sharing it on a capability slack channel for review.
3. **Merge & Release**: a predictable timeline for the approved change to be tested, merged and included in a release so all users (including you as the contributor) can deploy it and get the value from the improvement.

While it is tempting to jump straight in to the work itself (2), previous experience shows expert feedback (1) often avoids wasted effort and that the complexities/dependencies of test & release (3) should not be under-estimated and are best understood in advance.

Whatever the required contribution process, you will need _write_ access to the repository to make a contribution.

- While most GitHub open-source projects use a [forking workflow](https://www.atlassian.com/git/tutorials/comparing-workflows/forking-workflow) to avoid the need for contributor write access, this is **not appropriate** for inner source. Forking is disabled by org policy.
- A simple way to tell if you have write access in a repository is whether a small "edit" pencil icon appears on the top right of the `README.md` on the repository homepage.
- Maintainers are repository administrators and grant write access to org members by team. You can check which teams you are part of [on the teams page](https://github.com/orgs/Flutter-Global/teams) by entering `@your-github-username` in the search box.
- As a member of `Flutter-Global` you will have noticed you are a member of the `all-flutter-global` team. Maintainers are encouraged to grant write access to all org members through this team so you are likely to have write access by default. If this is not the case you will need to request access from the maintainers.
