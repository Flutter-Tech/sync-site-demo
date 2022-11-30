- `admins.teams` specifies a list of teams to grant [admin access] to. The teams are specified by the team "slug" which is the URL identifier for the team. Only teams within Flutter-Global can be referenced.
- `admins.users` specifies a list of GitHub usernames to grant [admin access] to. Only members within Flutter-Global can be referenced.

Note that if admins teams and/or users are set the codebase governor will ensure that these along with owner and maintainers are the _only_ teams/users with admin access to the repository. Any other teams/users with admin access will be removed.

### No Admin Access

The typical use-case is to ensure no-one other than owner or maintainers have admin access. This can be specified using an empty list. Anybody with existing [admin access] other than owner or maintainers will be removed.

```yaml
admins:
  teams: []
```

### Core Team Admins

Several inner source products have a Flutter group "core team". Depending on roles and setup, it can be useful for some members of the core team to manage elements of repository access and security which require admin access despite not being an owner or maintainer:

```yaml
admins:
  teams: ["xyz-core-team-admins"]
```

If the admins group is small, your access request process could simply use pull requests on the configuration to directly manage a list of admin users:

```yaml
admins:
  users:
    - example-user-1
    - example-user-2
```

[admin access]: https://docs.github.com/en/organizations/managing-access-to-your-organizations-repositories/repository-roles-for-an-organization
