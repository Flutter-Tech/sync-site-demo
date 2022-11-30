---
layout: default
title: Source Management
article_navigation: true
previous_title: Standard SDLCs
previous_url: /sdlc/
next_title: Validate
next_url: /sdlc/validate/
---

# Source Management

Your source code is stored in a repository within the `Flutter-Global` organisation. This will have:

1. a branching strategy: where is the code initially contributed to and then merged into?
2. an access control strategy: who can access the repository, and with what permissions?
3. branch protections to ensure the combination of (1) and (2) is secure.

Standard patterns for source management are:

1. [Service](/sdlc/service/)
2. [Multiple Teams](/sdlc/multiple-teams/)
3. [Audited](/sdlc/audited/)

### [Multiple Teams](/sdlc/multiple-teams/)

This branching strategy is suitable for production deployed service code repositories where changes MUST be reviewed. Multiple Teams branching is optimised for inner source [Maintainers in Multiple Teams](/how/multiple-teams/) services where there are multiple teams working concurrently on the code. It uses a modified GitFlow branching model and SemVer release tagging to support concurrent team development and several different supported versions in production.

### [Service](/sdlc/service/)

This branching strategy is suitable for production deployed service code repositories where changes MUST be reviewed. Service branching is optimised for inner source [Guest Contribution](/how/guest-contributions/) services where there is a clear owning team. It is based on a simple GitHub Flow branching model which is easy to understand and SemVer release tagging to signal production-ready builds.

### [Audited](/sdlc/audited/)

This branching strategy is suitable for documentation, integration test or other non-production deployed supporting repositories where changes CAN be reviewed. Audit branching ensures previous changes are visible and can be audited at any time, but does not require changes to be reviewed before they are made. It uses a simple GitHub Flow or trunk-based development branching model with more relaxed branch protection rules.

## Owner and Maintainers

In all patterns each repository has a named owner and team of maintainers. This group have elevated permissions on their repositories. You will use [Codebase Governor] to group your repositories into a "capability" and define the capability owner and maintainers. This ensures these users can manage all repositories within a capability effectively.

## Customise Branch Protection

Each pattern documents a default branch protection setup using [Codebase Governor configuration][codebase governor]. These protections can be adjusted to your specific needs [using any of the branch protection settings available](/docs/repo-config/#branch-protectionsparameters).

If none of the branching models meet your requirements, [further suggestions and protection examples are available to help you define your own custom setup](/docs/branch-protection/).

## Customise Contributor Access

Each pattern documents a default inner source contributor setup: `Internal` repository visibility with all members of `Flutter-Global` treated as contributors.

This can be customised to use:

**Requested Access** requires you to maintain your own access request process. This can be effective when coupled with an automated team maintenance process or small contributor group. You will use [Codebase Governor] to configure contributor access for your custom contributor team instead of the `all-flutter-global` team.

**Closed Source** requires the repository to be switched to `Private` visibility to prevent any default read access. This is for sensitive content only. To change repository visibility you will need to contact the [Inner Source Team](/community/). This access model usually also requires use of your own requested access process.

[codebase governor]: /docs/cbg/
