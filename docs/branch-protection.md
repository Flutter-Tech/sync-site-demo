---
layout: default
title: Branch Protection
---

# Branch Protection

Branch protection is a feature [provided by GitHub](https://docs.github.com/en/github/administering-a-repository/defining-the-mergeability-of-pull-requests/about-protected-branches) to add constraints to specific repository branches. For example limiting those able to push commits to the branch, or enforcing changes are reviewed before they can be merged into it.

It is an important feature because these protections ensure your contributors follow your desired workflow to produce secure and quality contributions.

## Branching Strategy

A wide variety of repository branching strategy options are documented elsewhere:

- [Martin Fowler: Patterns for Managing Source Code Branches](https://martinfowler.com/articles/branching-patterns.html)
- [Atlassian: Comparing Workflows](https://www.atlassian.com/git/tutorials/comparing-workflows)
- [GitHub Flow](https://guides.github.com/introduction/flow/)
- [GitLab Flow](https://docs.gitlab.com/ee/topics/gitlab_flow.html)
- [GitFlow](https://nvie.com/posts/a-successful-git-branching-model/)
- [Trunk Based Development](https://trunkbaseddevelopment.com/) ([DORA](https://cloud.google.com/architecture/devops/devops-tech-trunk-based-development))
- [Ship/Show/Ask](https://martinfowler.com/articles/ship-show-ask.html)
- [OneFlow](https://www.endoflineblog.com/oneflow-a-git-branching-model-and-workflow)

Your choice of branching strategy will depend on your context and desired [inner source stage](/how/). Note that for inner source:

- While most GitHub opensource projects use a [forking workflow](https://www.atlassian.com/git/tutorials/comparing-workflows/forking-workflow), this is **not appropriate** for inner source. Inner source repository contents are not public, making unsecured forks unwise. It is for this reason that normal GitHub forking shortcuts are disabled.
- Contributors therefore need write access to your repository, so they can push a new branch containing their changes and create a pull request for review. If possible you should grant repository write access to the `all-flutter-global` team which contains all organisation members.
- This is why branch protection configuration is a critical part of inner source repository setup: it allows you to enable contributions from all members by granting repository write access, while remaining confident that your important branches are robustly protected.
- A typical inner source service has multiple deployments from the same shared codebase repository. These deployments are released separately meaning multiple versions are deployed at any time. It is therefore necessary to use a branching model that supports operational hotfix and release for all versions in production.

## Configuring Branch Protection

There are 3 possible ways to configure branch protection rules:

1. Manually configure per-repository in the GitHub repository settings interface.
2. **RECOMMENDED**: Configure using the [Codebase Governor].
3. Automate yourself via GitHub API.

The [Codebase Governor] `branch-protections` key enables you:

- [to specify default rules across all repositories in capability](/docs/capability-defaults/#defaultsbranch-protections) using the `_defaults.yml` file.
- [to specify a particular set of rules for an individual repository](/docs/repo-config/#branch-protections) using the repository config file.

## Example: Service

Our first example is a service repository using a simple workflow (e.g. GitHub Flow).

- The repository holds critical code as the service will handle sensitive data and/or directly process customer transactions.
- To meet our security commitments all changes _must_ be reviewed by at least 1 other user.
- The GitHub Flow branching strategy means that all production deployments run the code from the `main` branch.

In this case branch protection is required on the `main` branch and can be configured using [Codebase Governor] with:

```yaml
branch-protections:
  - patterns:
      - "main"
    parameters:
      required-reviews-count: 1
      requires-codeowner-reviews: true
      requires-status-checks: true
```

- Ensure pull requests are used with at least 1 approving review (`required-reviews-count: 1`).
- Require a [codeowner] approval rather than any other user with write permissions (`requires-codeowner-reviews: true`).
- Require automated pull request validation checks to pass before a pull request can be merged (`requires-status-checks: true`).

## Example: Testing Tool

Not all repositories contain critical production service code, and for many repositories more flexible protection is appropriate. For example for a testing tool repository using GitHub Flow it is common to relax the review requirements, allowing stale reviews and administrator override. With [Codebase Governor] this might be:

```yaml
branch-protections:
  - patterns:
      - "main"
    parameters:
      required-reviews-count: 1
      requires-codeowner-reviews: true
      requires-status-checks: true
      allow-admin-bypass: true
      allow-stale-reviews: true
      allow-stale-branch-merge: true
```

These settings encourage review but are optimised for development speed:

- maintainers and any other repository admins can push directly to `main` due to enabling `allow-admin-bypass`. This allows them to perform maintenance directly without waiting for review.
- Approving reviews remain valid for a pull request after minor feedback fixes are made (`allow-stale-reviews: true`). This means the author spends less time chasing re-reviews after minor edits.
- A branch which is not up-to-date can still be merged (`allow-stale-branch-merge: true`). This reduces the time an author spends updating their branch.

## Example: GitFlow

In this example critical service code is contained in the repository, and the workflow is complex (e.g. GitFlow). The protection required is similar to the previous service code example, but instead of applying protection to a single `main` branch, multiple branches need protection.

An example of branch protection for a GitFlow like setup is:

```yaml
branch-protections:
  - patterns:
      - "main"
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

In this case stricter protection is applied to critical production branches, and settings optimised for development speed are used for branches which need review but won't be directly released to production without further review.

## Example: Docs

With a documentation repository, you may want to allow any user with write access to commit and change the docs directly without review. If the author would like a review they can of course choose one, but this is not required. In this case, branch protection for `main` is still valuable to protect it from force pushes or deletions that would destroy its history. If you preserve history you can always revert any change which you retrospectively want to reject.

With [Codebase Governor] this is simply:

```yaml
branch-protections:
  - patterns: ["main"]
```

## Example: Bot

Some repositories require automated commits: for example a commit to update a release version from a build script. Using [a Github app for authentication](/docs/automated-access/) is recommended but many also use a service account. These approaches can be complicated by branch protection.

- There is an option in the GitHub user interface to configure users or apps that can "bypass branch protection". Configuring this manually is the best approach if possible in this case.
- When using a service account, you can allow repository admins to override the protection (`allow-admin-bypass: true`) and configure the service account as an admin. This is not recommended because the service account is granted a high level of access to the repository than is necessary.
- If you are using a deploy key for your automated access this will classify as an admin user when it pushes, so the (`allow-admin-bypass: true`) can be a good setup in this case.

[codebase governor]: /docs/cbg/
[codeowner]: https://docs.github.com/en/repositories/managing-your-repositorys-settings-and-features/customizing-your-repository/about-code-owners
