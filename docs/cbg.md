---
layout: default
title: Codebase Governor
---

# Codebase Governor

{% include cbg/nav.html %}

Codebase Governor is automation that:

- groups repositories into "capabilities" to help manage several repositories together.
- defines owner and maintainer teams.
- defines admin and write access to repositories.
- defines branch protection for repositories.

**It enables the management of repository settings via YAML file config and a secure pull-request workflow ("GitOps") rather than manually in the GitHub UI.**

<div class="w-full max-w-2xl mt-8"><!-- ... not too big ... -->
<div style="position: relative; display: block; max-width: 1280px;"><div style="padding-top: 56.25%;"><iframe
        src="https://players.brightcove.net/3468649868001/rJgmHWotkf_default/index.html?videoId=6315952643112"
        allowfullscreen="" allow="encrypted-media"
        style="position: absolute; top: 0px; right: 0px; bottom: 0px; left: 0px; width: 100%; height: 100%;"></iframe>
    </div>
  </div>
</div>

## Quick Start

<div class="not-prose hidden sm:block">
    <div class="rounded-lg bg-theme-color p-2 shadow-lg sm:p-3">
      <div class="flex flex-wrap items-center justify-between">
        <div class="flex w-0 flex-1 items-center">
          <span class="flex rounded-lg bg-white p-2">
            <!-- Heroicon name: outline/megaphone -->
            <svg class="h-6 w-6 text-theme-color" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" d="M10.34 15.84c-.688-.06-1.386-.09-2.09-.09H7.5a4.5 4.5 0 110-9h.75c.704 0 1.402-.03 2.09-.09m0 9.18c.253.962.584 1.892.985 2.783.247.55.06 1.21-.463 1.511l-.657.38c-.551.318-1.26.117-1.527-.461a20.845 20.845 0 01-1.44-4.282m3.102.069a18.03 18.03 0 01-.59-4.59c0-1.586.205-3.124.59-4.59m0 9.18a23.848 23.848 0 018.835 2.535M10.34 6.66a23.847 23.847 0 008.835-2.535m0 0A23.74 23.74 0 0018.795 3m.38 1.125a23.91 23.91 0 011.014 5.395m-1.014 8.855c-.118.38-.245.754-.38 1.125m.38-1.125a23.91 23.91 0 001.014-5.395m0-3.46c.495.413.811 1.035.811 1.73 0 .695-.316 1.317-.811 1.73m0-3.46a24.347 24.347 0 010 3.46" />
            </svg>
          </span>
          <p class="ml-3 truncate font-medium text-white">
            <span class="md:hidden">Migrating from v1 codebases.json?</span>
            <span class="hidden md:inline">Migrating from v1 codebases.json? An automated migration tool is available for you.</span>
          </p>
        </div>
        <div class="order-3 mt-2 w-full flex-shrink-0 sm:order-2 sm:mt-0 sm:w-auto">
          <a href="/docs/cbg-v2-from-v1/" class="flex items-center justify-center rounded-md border border-transparent bg-white px-4 py-2 text-sm font-medium text-theme-color shadow-sm hover:underline">Learn more</a>
        </div>
      </div>
    </div>
</div>

- All config files are in the [org-config] repository.
- A capability is simply a directory containing repository config files: e.g. the codebase governor capability is [`codebases/codebase-governor/`][cbg-config].
- A [repository config file has this YAML format][repo-config] and is named after the repository.
- Capability defaults are defined in a `_defaults.yml` file [in this YAML format][defaults-file]. This includes defining an owner and maintainers for the capability.
- Commented file examples of both defaults and repository config files can be found [in the codebase governor capability][cbg-config].
- Edit the config by cloning [org-config], create a branch and commit your changes then raise a pull request. Your changes will be validated and reviewers added automatically. [View closed PRs to see examples][org-config-prs].

## Capability

A "**capability**" is the way repositories are grouped and organised within Flutter-Global.

<img src="capability.drawio.svg" class="w-full max-w-xl mx-auto">

- A capability is a group of related repositories that does something meaningful (e.g. a product feature).
- Each GitHub repository is owned by a _single_ capability.
- A capability has a named owner, and a single team of expert maintainers.
- Not all repositories in Flutter-Global are part of a capability, but it is a requirement of using the codebase governor.

**Example**: The Global Betting Platform is a collection of capabilities that can be used together as a betting platform. Cashout is one of those capabilities. The Cashout capability consists of several repositories related to bet cashout: separate quoting and transacting services, integration test suites and operational reconcilation tools.

A capability is simply defined as a directory in the [org-config] repository that contains repository config files. The repository config files a capability directory contains are the members of the capability.

```
codebases/
    cashout/
        _defaults.yml
        fcq-service.yml
        sco-service.yml
        reactive-kafka-lib.yml
```

- To create a capability [edit the configuration](#edit-your-config) to create a directory `codebases/<your-capability-name>` containing the relevant [repository config files][repo-config] you want as members of that capability.
- Capability defaults are defined in a `_defaults.yml` file [in this YAML format][defaults-file].
- An owner and group of [maintainers] for the capability can be defined in these capability defaults.
- Repositories can be added or removed from a capability simply by creating, moving or deleting [repository config files][repo-config] in capability directories in [org-config].

The previous version of codebase governor used dedicated capability repositories and a configuration file called `codebases.json`. In the current version of codebase governor managing your own capability repository is no longer required. All configuration is now in the [org-config] repository. If you are migrating from v1 [an automated workflow is available to help you migrate](/docs/cbg-v2-from-v1/).

## Repository

Access and branch protection for a repository can be defined in the [org-config] repository in a [repository config file][repo-config].

- The config file must be located at `codebases/<capability name>/<repository name>.yml`.
- Any settings in this file will be **enforced**: for example if the file specifies branch protection rules any manual changes to those rules via the GitHub UI will be detected and reverted.
- All settings are optional: any setting which is not specified you can continue to manually manage by the GitHub UI or your own automation.
- [Capability defaults][defaults-file] will be applied to the repository if they are defined. Any capability default can be overridden if required in the repository config.
- Only one [repository config file][repo-config] can be specified for a repository, and a repository can only be a member of one capability. A repo can be transferred from one capability to another simply by moving the [repository config file][repo-config] from one capability directory to a different one.

## Edit Your Config

As a member of the Flutter-Global org you will automatically be granted write access to the [org-config] repository. The config from the `main` branch will be applied to your repository, so to edit your config you need to make changes to the files in the `main` branch.

[org-config] follows [GitHub Flow][github-flow] so the `main` branch is protected and for security reasons you cannot commit and push changes directly to this branch. Instead, create a new branch and make your changes in your own branch. To merge those changes into `main` raise a pull request to merge those changes into the `main` branch.

When you raise your pull request your changes will be validated and immediate feedback provided on any errors or problems. In addition the codebase governor will perform a dry run and add a comment to explain the changes you should expect when the pull request is merged. Appropriate reviewers will be added to your pull request depending on what changes you have made. These reviewers will need to approve your request before it can be merged.

## Approval Rules

Any change you make to your configuration must be approved before the pull request can be merged. The approval rules are:

- No changes will be applied to a repository without the approval of an existing repository administrator.
- No changes to a capability will be applied without the approval of an existing owner or maintainer. If an owner is configured, this approval request will be initially directed to the owner.
- All changes must involve at least 2 people: the author and a different reviewer.
- The [inner source team](/community/) manage the [org-config] repository, but their approval is not required unless there is no other sensible approval route possible that meets the above requirements.

For example adding a repository to a capability will require the approval of the capability owner _and_ an existing administrator of the repository to be added. If the capability owner is already an admin of the repository to be added, their approval will fulfill both requirements. If the capability owner has raised the pull request to add the repository to the capability their approval is assumed but the pull request will need to be approved by a colleague to fulfill the "2 people involved" requirement. If the capability had no owner or maintainers configured the approval would fallback to the inner source team for approval.

## Examples

Numerous capability and configuration examples can be viewed in the [org-config] repository.

- The [Codebase Governor capability defaults](https://github.com/Flutter-Global/org-config/blob/main/codebases/codebase-governor/_defaults.yml) are an example of a default config which enforces code owner reviews on the default `main` branch.
- The [fsc-cbg repository config](https://github.com/Flutter-Global/org-config/blob/main/codebases/codebase-governor/fsc-cbg.yml) is an example config which includes branch protection for develop, release and support branches for the [multiple teams branching model](/sdlc/multiple-teams/).

[org-config]: https://github.com/Flutter-Global/org-config
[repo-config]: /docs/repo-config/
[defaults-file]: /docs/capability-defaults/
[cbg-config]: https://github.com/Flutter-Global/org-config/tree/main/codebases/codebase-governor
[org-config-prs]: https://github.com/Flutter-Global/org-config/pulls?q=is%3Apr+is%3Aclosed
[maintainers]: /how/multiple-teams/
[github-flow]: https://docs.github.com/en/get-started/quickstart/github-flow
