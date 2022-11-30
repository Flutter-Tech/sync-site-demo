---
layout: default
title: GitHub
---

# GitHub

Our inner source portfolio is contained in the [Flutter-Global GitHub organisation](https://github.com/Flutter-Global/). GitHub recommends a flat single-org repository structure like this for inner source to simplify access control and team management. If you need information about divisional organisations [see the support page](/community/).

<div class="not-prose">
  <div class="mx-auto max-w-7xl py-6 md:py-8 lg:py-10">
    <h4 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
      <span class="block">Ready to dive in?</span>
      <span class="block">Start using GitHub today:</span>
    </h4>
    <div class="mt-8 flex">
      <div class="inline-flex rounded-md shadow">
        <a href="/docs/using-a-repo/" class="inline-flex items-center justify-center rounded-md border border-transparent bg-theme-color px-5 py-3 text-base font-medium text-white hover:underline">Use an existing repository</a>
      </div>
      <div class="ml-3 inline-flex">
        <a href="/docs/create-repo/" class="inline-flex items-center justify-center rounded-md border border-transparent bg-theme-color px-5 py-3 text-base font-medium text-white hover:underline">Create a new repository</a>
      </div>
    </div>
  </div>
</div>

## Capability

[Flutter-Global](https://github.com/Flutter-Global) has thousands of repositories and GitHub does not have any in-built way to group or link them (e.g. like 'projects' in GitLab or Atlassian BitBucket) so the structure is not obvious in the GitHub user interface. You may already know a specific repository you need from colleagues or a work brief so can skip forward to [start using](/docs/using-a-repo/) that repo.

Alternatively you can [browse the available applications in our internal service catalogue](/catalogue/). These are organised into **capabilities**.

<img src="/docs/cbg/capability.drawio.svg" class="w-full max-w-xl mx-auto">

- A capability is a group of related repositories that does something meaningful (e.g. a product feature).
- Each GitHub repository is owned by a _single_ capability.
- A capability has a named owner, and a single team of expert maintainers.
- Not all repositories in Flutter-Global are part of a capability, but it is a requirement of using the [codebase governor](/docs/cbg/).

## Helpful Extras

There are a number of conventions and automation across `Flutter-Global` to make our work easier:

- [A codebase governor](/docs/cbg/) to define capabilities and manage access and branch protections.
- [PR boards](/docs/pr-boards/) to keep track of the changes requested across all repositories in a capability.
- [Standard SDLC setups](/sdlc/) for typical situations.
