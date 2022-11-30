---
layout: default
title: v1 to v2
---

# Codebase Governor v1 to v2

{% include cbg/nav.html %}

Codebase Governor v1 is the application that acts on your capability `codebases.json` file to:

- define the repositories which are part of your capability.
- grant owner and maintainer teams admin access to those repositories.
- apply branch protections to those repositories.

Version 1 (`v1`) of Codebase Governor is being deprecated. It is replaced by version 2 (`v2`). This is a major update with several improvements. Migration will be low effort due to the `v1 -> v2` migration tools provided.

<div class="w-full max-w-2xl mt-8"><!-- ... not too big ... -->
<div style="position: relative; display: block; max-width: 1280px;"><div style="padding-top: 56.25%;"><iframe src="https://players.brightcove.net/3468649868001/rJgmHWotkf_default/index.html?videoId=6313644764112" allow="encrypted-media" style="position: absolute; top: 0px; right: 0px; bottom: 0px; left: 0px; width: 100%; height: 100%;"></iframe></div></div>
</div>

## Major Changes

The major changes are:

|                       | v1                                                                   | v2                                                                       |
| --------------------- | -------------------------------------------------------------------- | ------------------------------------------------------------------------ |
| Operation             | **Passive:** runs only when config changes.                          | **Pro-active:** runs regularly to enforce defined settings.              |
| Config Files          | **Local:** in your own repository.                                   | **Centralised:** in a central security-hardened `org-config` repository. |
| Capability Repository | **Mandatory:** required you to manage a meta-data `cap-` repository. | **Optional:** a capability is as simple as creating a directory.         |

For example:

- A repository admin updates branch protection settings in the GitHub UI different to that configured. In v1, this change would be reverted only when the config was next updated, potentially months later. v2 will detect and revert the change within a few minutes.
- To create a new capability: in v1 this required you to create and manage a capability repository (a repo prefixed with `cap-`). In v2 you update your configuration within the [org-config] repository that is managed for you. Creating a capability is simply a matter of file and directory creation.

## Quick Start

{% include cbg/migrate.html step=0 %}

There are 4 migration steps:

1. Use the v1 to v2 converter to create a pull request on the `org-config` repository reflecting your current GitHub capability state. [Use the "Run workflow" button on this GitHub action workflow][cbg-migrator].
2. Merge your [org-config pull request][org-config-prs]. Review and update it as necessary until the capability owner approves it. If you are unsure of the impact of any config refer to the [full codebase governor v2 documentation][cbg-docs]. You have now adopted codebase governor v2.
3. Your capability repository and `codebases.json` are now no longer required. You can either delete the capability repository, or remove the `codebases.json` file within it to fully decommission v1.
4. Inform your capability maintainers and any other repository admins of the migration: they will now need to update maintainers, branch protection and repository access via the [org-config] YAML config.

The rest of this document describes each of these steps in more detail.

## 1. v1 to v2 Converter

{% include cbg/migrate.html step=1 %}

An automated v1 to v2 converter is available. This will:

- Load the configured owner and maintainers from your existing `codebases.json`.
- Load the actual state of each capability repository's branch protection and user/team access permissions.
- Create a new branch on `org-config` repository
- Write and commit v2 configuration ([docs][cbg-docs]) to this branch that matches your current capability state.
- Raise a pull request on the `org-config` repository to merge these changes in your new branch into `main`.

Once the converter has finished you will need to review, approve and merge the pull request before it is actioned.

To run the converter [use the "Run workflow" button on this GitHub action workflow][cbg-migrator] specifying the name of your capability repo (your repo with the `cap-` prefix).

<img src="/docs/cbg/migrate-workflow.png" class="w-full max-w-xl">

The workflow will start and you can follow its progress in the GitHub UI it may take a few minutes. When completed it will display the URL of the pull request it has created for you. You can either navigate directly to this URL, or find your pull request in the [list of all open org-config pull requests][org-config-prs] by search for your capability repo name.

<img src="/docs/cbg/workflow-result.png" class="w-full max-w-xl">

## 2. Merge PR

{% include cbg/migrate.html step=2 %}

Your pull request will:

- Contain the codebase governor v2 config that reflects the current state of your capability. The [YAML options are documented here][cbg-docs].
- A comment will be added to the pull request to validate the configuration and document any changes merging the pull request will apply to your repositories. This comment may take a few minutes after the pull request creation as the validator runs against GitHub APIs to determine the changes it will apply.
- Appropriate approvers will be added to your pull request automatically (e.g. the capability owner, maintainers and/or repository administrators). The pull request cannot be merged until the approvals are complete.
- You can edit your config by pushing more commits to your pull request branch and the updates will be revalidated so you can see their impact before you approve and merge the pull request.

To complete your adoption of codebase governor v2 you need to merge your pull request.

## 3. Cleanup

{% include cbg/migrate.html step=3 %}

Your capability repository (a repo prefixed with `cap-`) contains two files that that no longer required now you have moved to codebase governor v2. These are not removed automatically because you own your capability repository. You can either:

1. (Recommended) Delete the capability repository if you do not use it for anything. Codebase governor v2 no longer requires a capability repository so its deletion will not affect your capability config which is now in the `org-config` repository.
2. Delete the 2 deprecated files from the repository: `codebases.json` and `.github/workflows/codebases-governor.yml`

## 4. Inform Admins

{% include cbg/migrate.html step=4 %}

The switch to codebase governor v2 means changes to repository branch protection and access control must be executed via file config changes in `org-config`. Changes in the GitHub UI will be reverted. A suggested update to send to your repository administrators:

> I've migrated our capability to codebase governor v2. I hope you've already seen the emails about this update, this is a quick reminder. Updates to maintainers, branch protection or repository access is now done through changes to the config files in:
> https://github.com/Flutter-Global/org-config/tree/main/codebases
>
> Just raise a pull request on the config in this repository to propose changes. The docs for the YAML config format is here: https://developers.flutter.com/docs/cbg/

## Troubleshooting

If you have any questions or encounter any problems please reach out to the [Inner Source Team](/community/).

[org-config]: https://github.com/Flutter-Global/org-config
[org-config-prs]: https://github.com/Flutter-Global/org-config/pulls
[cbg-docs]: /docs/cbg/
[cbg-migrator]: https://github.com/Flutter-Global/org-config/actions/workflows/cbg-migrator.yml
