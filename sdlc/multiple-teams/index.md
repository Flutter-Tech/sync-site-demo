---
layout: default
title: Multiple Teams SDLC
article_navigation: true
previous_title: Source Management
previous_url: /sdlc/source/
next_title: Setup Configuration
next_url: /sdlc/multiple-teams/setup/
---

# Multiple Team Source

{% include mt/nav.html %}

<div class="relative not-prose space-y-8">
  <div class="absolute inset-0" aria-hidden="true">
    <div class="absolute inset-y-0 right-0 w-1/2 bg-theme-color"></div>
  </div>
  <div class="relative mx-auto max-w-7xl lg:grid lg:grid-cols-2 lg:pr-8">
    <div class="bg-white px-4 sm:px-6 lg:px-0 lg:pr-8">
      <div class="mx-auto max-w-lg lg:mx-0">
        <dl class="py-8 space-y-4">
          <div class="relative">
            <dt>
              <div class="absolute flex h-12 w-12 items-center justify-center rounded-md bg-theme-color">
                <!-- Heroicon name: sheild-check -->
                <svg class="h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                </svg>
              </div>
              <p class="ml-16 text-lg font-medium leading-6 text-gray-900">Protected Code</p>
            </dt>
            <dd class="mt-2 ml-16 text-base text-gray-500">All changes are reviewed by codeowners and involve more than 1 person. Protection rules can be adjusted to your requirements.</dd>
          </div>

          <div class="relative">
            <dt>
              <div class="absolute flex h-12 w-12 items-center justify-center rounded-md bg-theme-color">
                <!-- Heroicon name: information-circle -->
                <svg class="h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z" />
                </svg>
              </div>
              <p class="ml-16 text-lg font-medium leading-6 text-gray-900">SemVer Support</p>
            </dt>
            <dd class="mt-2 ml-16 text-base text-gray-500">SemVer git tags label alpha, beta and production builds. Multiple application versions can be supported independently.</dd>
          </div>

          <div class="relative">
            <dt>
              <div class="absolute flex h-12 w-12 items-center justify-center rounded-md bg-theme-color">
                <svg class="h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
                </svg>
              </div>
              <p class="ml-16 text-lg font-medium leading-6 text-gray-900">Team Branch</p>
            </dt>
            <dd class="mt-2 ml-16 text-base text-gray-500">Each team has an independent area under their direct control to integrate and test changes.</dd>
          </div>

          <div class="relative">
            <dt>
              <div class="absolute flex h-12 w-12 items-center justify-center rounded-md bg-theme-color">
                <svg class="h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125" />
                </svg>
              </div>
              <p class="ml-16 text-lg font-medium leading-6 text-gray-900">Flexible Releases</p>
            </dt>
            <dd class="mt-2 ml-16 text-base text-gray-500">Changes can be tested and released as a batch if desired while maintaining the ability to release a hotfix at any time.</dd>
          </div>


        </dl>
      </div>
    </div>
    <div class="bg-theme-color py-8 lg:flex lg:items-center lg:justify-end lg:bg-none lg:px-0 lg:pl-8">
      <div class="mx-auto w-full max-w-lg space-y-8 lg:mx-0 px-8 sm:px-0">
        <div>
          <p class="text-white">

Best when several busy teams are working on the same codebase. Branching model is a derivative of GitFlow to provide each team with their own develop branch. Cross-team alignment occurs during regular releases. SemVer git tags used to label releases and trigger alpha, beta and production builds. To support multiple deployments, previous versions can continue to be patched through the use of support branches.

</p>
</div>
<ul role="list" class="grid gap-px overflow-hidden rounded sm:grid-cols-2">

<li class="flex items-center space-x-3 bg-white py-4 px-4 text-base text-theme-color">
<svg class="h-6 w-6 text-green-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
<path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
</svg>
<span>Protected Code</span>
</li>

<li class="flex items-center space-x-3 bg-white py-4 px-4 text-base text-theme-color">
<svg class="h-6 w-6 text-green-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
<path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
</svg>
<span>SemVer Support</span>
</li>

<li class="flex items-center space-x-3 bg-white py-4 px-4 text-base text-theme-color">
<svg class="h-6 w-6 text-green-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
<path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
</svg>
<span>Team Branch</span>
</li>

<li class="flex items-center space-x-3 bg-white py-4 px-4 text-base text-theme-color">
<svg class="h-6 w-6 text-green-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
<path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
</svg>
<span>Flexible Releases</span>
</li>
        </ul>
      </div>
    </div>

  </div>
</div>

## Quick Start

Create a team develop branch, e.g. for a team named `ppb`:

```bash
git checkout main
git checkout -b ppb/develop
git push -u origin ppb/develop
```

Start using the branching model through `git flutter` shortcuts. Install this helper with:

```bash
curl -o- https://innersource.flutter.com/git-flutter/install.sh | bash
```

View repository status:

```
git flutter status
```

{% include mt/try-it.html %}

Create a feature:

```bash
git flutter feature "my feature name"
```

To push your work and open a PR:

```bash
git flutter push -w
```

Create a release once the feature is merged to develop:

```bash
git flutter release "name or version"
```

Tag alpha (develop branch), beta (release branch) or production build (main branch):

```bash
git flutter tag
```

## Setup

Create a team develop branch for each team, e.g. to create a `ppb` team branch:

```bash
git checkout main
git checkout -b ppb/develop
git push -u origin ppb/develop
```

If you are configuring a completely new repository [use the full setup guide](/sdlc/multiple-teams/setup/). However for most you just need to update your branch protections in your [Codebase Governor](/docs/cbg/) config file:

```yaml
branch-protections:
  - patterns:
      - "main"
      - "master"
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

If you are using tags to trigger builds use the GitHub web interface to add a tag protection rule for the `v*` pattern (Settings > Tags > New Rule).

## Learn More

- Read a [full setup guide](/sdlc/multiple-teams/setup/).
- Understand [the branching model](/sdlc/multiple-teams/branching/).
- Use the [`git-flutter` CLI to help you](/sdlc/multiple-teams/cli/).
- Read about [real-life migration and adoption examples](/sdlc/multiple-teams/examples/).

{% include mt/nav.html %}
