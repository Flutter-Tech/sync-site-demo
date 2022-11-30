- `contributors.teams` specifies a list of teams to grant [write access] to. The teams are specified by the team "slug" which is the URL identifier for the team. Only teams within Flutter-Global can be referenced.
- `contributors.users` specifies a list of GitHub usernames to grant [write access] to. Only members within Flutter-Global can be referenced.

Note that if contributing teams and/or users are set the codebase governor will ensure that these are the _only_ teams/users with write access to the repository and any other teams/users with write access will be removed.

### Inner Source Access

With an inner source access model all members of `Flutter-Global` are treated as contributors. Therefore all members of the organisation are given [write access] to the repository by setting the `all-flutter-global` team as contributors.

```yaml
contributors:
  teams: ["all-flutter-global"]
```

Note how robust branch protection is required to maintain a secure workflow -- any of the standard SDLC examples are suitable for this setup.

### Requested Access

With a requested access model you manage your own access request process. If your access request process results in a managed team then you can simply configure this team as the contributors:

```yaml
contributors:
  teams: ["your-team-1", "your-team-2"]
```

If the contributor group is small, your access request process could simply use pull requests on the configuration to directly manage a list of contributing users:

```yaml
contributors:
  users:
    - example-user-1
    - example-user-2
    - example-user-3
```

### No Write Access

An empty list specifies that nobody will be granted [write access] and anybody with existing write access will be removed.

```yaml
contributors:
  teams: []
```

[write access]: https://docs.github.com/en/organizations/managing-access-to-your-organizations-repositories/repository-roles-for-an-organization
