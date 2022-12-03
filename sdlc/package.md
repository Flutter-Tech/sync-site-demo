---
layout: default
title: Publish
article_navigation: true
---

# Publish to Registry

Once a code change is validated the updated version can be **packaged** as a deployable artefact. Depending on your application this might be a Docker image, a compiled binary, an rpm or jar file, or simply a bundled and minified source file. This package must then be **published** to a location from which it can be deployed to relevant environments.

- Use [semantic version git tags](/sdlc/semver/) on your repository to label and trigger alpha, beta and production builds.
- Build artifacts (and Change Log) can be attached to a repository via a [GitHub Release](#github-releases).
- Releases can be published to various systems as required: external services (e.g. AWS ECR), GitHub Packages, Artifactory and so on. These choices depend on the requirements of the intended deployments.

## GitHub Releases

GitHub [provide in-built 'release' functionality](https://docs.github.com/en/repositories/releasing-projects-on-github/about-releases) where you can create a 'release' to package software, along with release notes and links to binary files, for other people to use. Using this feature is recommended.

- supports change logs and a variety of build artifacts if required.
- supports pre-release vs release flags.
- can be both manually created/adjusted and automated via API/workflows.

## Publish to AWS

A common choice is to publish release artefacts from a repository into AWS for use within that ecosystem. For example, you might choose to publish a Docker image into the AWS container registry for use in AWS deployments:

1. Create a workflow that is triggered by a new GitHub Release ([the `release` event](https://docs.github.com/en/actions/using-workflows/events-that-trigger-workflows#release)).
2. Authenticate your workflow [with AWS using OpenID Connect](https://docs.github.com/en/actions/deployment/security-hardening-your-deployments/configuring-openid-connect-in-amazon-web-services).
3. [Login and push image to AWS ECR](https://github.com/aws-actions/amazon-ecr-login).

## GitHub Packages

[GitHub Packages](https://docs.github.com/en/packages/learn-github-packages/introduction-to-github-packages) is a software package hosting service that allows you to host your software packages privately or publicly and use packages as dependencies in your projects. This is especially useful to publish library packages for re-use across other projects.

## Artifactory

An internal Artifactory instance is available if using the [self-hosted runners][self-hosted]. This is not always recommended as it has more awkward access requirements across the wider group, but there are cases where it the best choice.

[self-hosted]: /sdlc/validate/#self-hosted-runners
