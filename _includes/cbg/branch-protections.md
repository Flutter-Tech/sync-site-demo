- `branch-protections` expects an array of keys, so you can define as many separate rules as you need.
- [`branch-protections[*].patterns`](#branch-protectionspatterns) specifies a list of branch name patterns to apply this rule to.
- [`branch-protections[*].parameters`](#branch-protectionsparameters) specifies the constraints that should be applied.

### Audit SDLC

The [Audit SDLC][audit-sdlc] is suitable for documentation, integration test or other non-production deployed supporting repositories. This ensures previous changes are visible and can be audited at any time, but does not require changes to be reviewed before they are made.

```yaml
branch-protections:
  - patterns: ["main"]
```

The branch protection parameter defaults are already configured for audit, with `allows-force-pushes` and `allows-deletions` settings defaulting to ensure that the history of the branch cannot be modified or deleted. Since the default values are appropriate, the `parameters` key can simply be omitted.

### Service SDLC

The [Service SDLC][service-sdlc] is suitable for production deployed service code repositories where changes MUST be reviewed. Service branching is optimised for [Guest Contribution](/how/guest-contributions/) applications where there is a clear owning team.

```yaml
branch-protections:
  - patterns:
      - "main"
      - "support/*"
    parameters:
      required-reviews-count: 1
      requires-codeowner-reviews: true
      requires-status-checks: true
```

In this case the default branch (`main` or on older repos `master`) and any previous version support branches (`support/*`) are configured to:

- Ensure pull requests are used with at least 1 approving review (`required-reviews-count: 1`).
- Require a [codeowner] approval rather than any other user with write permissions (`requires-codeowner-reviews: true`).
- Require automated pull request validation checks to pass before a pull request can be merged (`requires-status-checks: true`).

### Multiple Teams SDLC

The [Multiple Teams SDLC][multiple-teams-sdlc] is suitable for production deployed service code repositories where changes MUST be reviewed. Multiple Teams branching is optimised for [Maintainers in Multiple Teams](/how/multiple-teams/) services where there are multiple teams working concurrently on the code.

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

The default and previous version support branches are configured like the service SDLC to ensure all production deployed code has been reviewed:

- Ensure pull requests are used with at least 2 approving review (`required-reviews-count: 2`). This encourages cross team review for critical pull requests.
- Require a [codeowner] approval rather than any other user with write permissions (`requires-codeowner-reviews: true`).
- Require automated pull request validation checks to pass before a pull request can be merged (`requires-status-checks: true`).

Develop and release branches also require branch protection, but the settings can be optimised for development speed:

- maintainers and any other repository admins can push directly to develop and release branches due to enabling `allow-admin-bypass`. This allows them to perform maintenance directly without waiting for review.
- Approving reviews remain valid for a pull request after minor feedback fixes are made (`allow-stale-reviews: true`). This means the author spends less time chasing re-reviews after minor edits.
- A branch which is not up-to-date can still be merged (`allow-stale-branch-merge: true`). This reduces the time an author spends updating their branch.
- develop and release branches change over time: teams are added and removed and release branches are explicitally deleted after a release is completed so deleted is allowed via `allows-deletions: true`.

### `branch-protections[*].patterns`

The branch name pattern that the protection rule will apply to. Due to the GitHub implementation this pattern must be specified using [fnmatch] syntax. From [GitHub documentation][gh-manage-bp]:

> You can create a rule for all current and future branches in your repository with the wildcard syntax `*`. Because GitHub uses the File::FNM_PATHNAME flag for the File.fnmatch syntax, the wildcard does not match directory separators (/). For example, `qa/*` will match all branches beginning with `qa/` and containing a single slash. You can include multiple slashes with `qa/**/*`, and you can extend the qa string with `qa**/**/*` to make the rule more inclusive. For more information about syntax options for branch rules, see the [fnmatch documentation][fnmatch].

For example, to specify a rule must apply to the default `main` branch:

```yaml
branch-protections:
  - patterns: [main]
```

For example to specify a rule must apply to default, develop, support and release branches in a [multiple team branching model][multiple-team-sdlc]:

```yaml
branch-protections:
  - patterns:
      - "main"
      - "*/develop"
      - "support/*"
      - "*/release/*"
```

### `branch-protections[*].parameters`

The protection parameters that will be applied to the specified patterns.

#### `branch-protections[*].parameters.required-reviews-count`

The number of required pull request reviews before commits can be merged into this branch. The default value of 0 means any user with write access to the repository can push directly to this branch with no review. A value of 1 means users with write access cannot push directly to this branch, instead they need to raise a pull request and get at least 1 review approval from another user with write permission before the branch can be merged.

```yaml
required-reviews-count: 1
```

The [GitHub docs provide more information about required reviews](https://docs.github.com/en/repositories/configuring-branches-and-merges-in-your-repository/defining-the-mergeability-of-pull-requests/about-protected-branches#require-pull-request-reviews-before-merging).

There are several related parameters:

- [`requires-codeowner-reviews`](#branch-protectionsparametersrequires-codeowner-reviews) if enabled requires at least one of the approving reviews to be from a [GitHub configured "codeowner"][codeowner].
- [`allow-stale-reviews`](#branch-protectionsparametersallow-stale-reviews) allows any existing pull request approvals to remain valid even after additional changes are pushed.
- [`allow-admin-bypass`](#branch-protectionsparametersallow-admin-bypass) allows repository admins to bypass the protection rule and push directly to the branch.

#### `branch-protections[*].parameters.requires-codeowner-reviews`

Repository "code owners" [can be configured in your repository using the `CODEOWNERS` file][codeowner]. Typically this will reference the capability maintainer team as it then automatically adds them as reviewers when a pull request is raised.

```yaml
requires-codeowner-reviews: true
```

The default value for this parameter is `false`. If enabled by setting it to `true`, a pull request will require an review approval from the specified code owners before it can be merged. Without this setting enabled, the `required-reviews-count` can be provided by any user with write access to the repository.

#### `branch-protections[*].parameters.allow-stale-reviews`

By default a pull request approval is dismissed when additional changes are made.

Enabling `allow-stale-reviews` means a pull request approval remains valid even when additional changes are pushed to the pull request branch after the review. This is convenient for the pull request author as they act on review feedback to implement minor fixes to the pull request -- they don't need to get the pull request re-reviewed after the have pushed their fixes. However, note how it allows additional **unreviewed code** to be appended to an existing approved pull request so enabling this rule is not recommended for critical branches where all code must be reviewed.

```yaml
allow-stale-reviews: true
```

#### `branch-protections[*].parameters.allow-admin-bypass`

By default the branch protection rule constraints apply to all users, including repository or organisation administrators.

Enabling `allow-admin-bypass` allows repository and organisation admins to override the restrictions of a branch protection rule. For example this would allow maintainers to push directly to a protected branch that required reviews. This is convenient when repository administrators are expected to perform maintenance work on the protected branch as they can bypass the constraints to do so.

```yaml
allow-admin-bypass: true
```

#### `branch-protections[*].parameters.requires-status-checks`

Required status checks ensure that all required GitHub status tests are passing before changes can be merged to a protected branch. GitHub status checks can be GitHub Action workflows or external checks like a divisional Jenkins or SonarCloud.

```yaml
requires-status-checks: true
```

The [GitHub docs provide more information about requiring status checks in pull requests](https://docs.github.com/en/repositories/configuring-branches-and-merges-in-your-repository/defining-the-mergeability-of-pull-requests/about-protected-branches#require-status-checks-before-merging).

#### `branch-protections[*].parameters.allow-stale-branch-merge`

When status checks are required (`requires-status-checks`) by default the pull request branch must be up-to-date with the base branch. This ensures the status checks will have run against the content exactly as it would be merged.

Enabling `allow-stale-branch-merge` allows the status checks to remain valid and the pull request remains mergable even when the pull request branch becomes out of date with the base branch. This allows the pull request to continue when changes are made to the base branch, but does compromise status check guarantees.

```yaml
allow-stale-branch-merge: true
```

**Example**: Nuno and Tiago are each working on separate feature branches. They both raise pull requests to merge their work into `main`. Nuno's feature is reviewed and approved quickly and he merges it into `main`. Tiago's branch is now out of date with `main`. Unless `allow-stale-branch-merge` is enabled Tiago will need to merge Nuno's changes up from `main` into his feature branch before his pull request can be merged.

#### Advanced Settings

Further branch protection settings [are described in the GitHub docs](https://docs.github.com/en/repositories/configuring-branches-and-merges-in-your-repository/defining-the-mergeability-of-pull-requests/about-protected-branches) and can be configured by:

```yaml
branch-protections:
  - patterns: [main]
    parameters:
      required-reviews-count: 1
      requires-codeowner-reviews: true
      requires-status-checks: true
      allow-admin-bypass: true
      allow-stale-reviews: true
      allow-stale-branch-merge: true

      # Requires commits to be signed and verified
      requires-commit-signatures: true

      # Requires PR conversations to be marked as resolved
      requires-conversation-resolution: true

      # Prevents merge commits being created on the branch
      requires-linear-history: true

      # By default force pushes and branch deletions are prevented but this
      # can be allowed if desired by switching these settings to 'true':
      allows-force-pushes: false
      allows-deletions: false

      # If push restriction is enabled then only users, teams, or apps
      # that have been given permission can push to the protected branch.
      #
      # It is not possible for codebase governor to manage the users, teams
      # and apps specified so these need to be manually set in the GitHub
      # interface.
      restricts-pushes: false

      # If review dismissal restriction is enabled then only users, teams,
      # or apps specified can dismiss a blocking review.
      #
      # It is not possible for codebase governor to manage the users, teams
      # and apps specified so these need to be manually set in the GitHub
      # interface.
      restricts-review-dismissals: false
```

If you need any advice on using advanced settings, please use [the available support channels](/community/).

[fnmatch]: (https://ruby-doc.org/core-2.5.1/File.html#method-c-fnmatch)
[gh-manage-bp]: https://docs.github.com/en/repositories/configuring-branches-and-merges-in-your-repository/defining-the-mergeability-of-pull-requests/managing-a-branch-protection-rule
[multiple-team-sdlc]: /sdlc/multiple-teams/
[codeowner]: https://docs.github.com/en/repositories/managing-your-repositorys-settings-and-features/customizing-your-repository/about-code-owners
[audit-sdlc]: /sdlc/
[service-sdlc]: /sdlc/
[multiple-teams-sdlc]: /sdlc/multiple-teams/
