# Kurocado Studio Tailwind Remix Template

[![Open in CodeSandbox](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/p/sandbox/github/Kurocado-Studio/styleguide-remix-template)

This template is already configured with the
[Kurocado Studio Engineering Styleguide](https://kurocado.youtrack.cloud/articles/STY-A-1/Project-Charter)
& is designed to help you go from "0 to Hello World" in five minutes or less—delivering both speed
and quality without compromise.

## Key Features

- [Linting](https://kurocado.youtrack.cloud/articles/PLA-A-5/Lint) pipeline using
  - [See the config](https://kurocado.youtrack.cloud/articles/STY-A-8/Prettier) for
    [Prettier](https://prettier.io)
  - [See the config](https://kurocado.youtrack.cloud/articles/STY-A-10/ESLint) for
    [ESLint](https://eslint.org)
  - [See the config](https://kurocado.youtrack.cloud/articles/STY-A-12/CommitLint) for
    [CommitLint](https://commitlint.js.org)
- [Testing](https://kurocado.youtrack.cloud/articles/PLA-A-6/Test) pipeline using
  [Vitest](https://vitest.dev)
- [Release](https://kurocado.youtrack.cloud/articles/PLA-A-3/Release) pipeline using
  [Semantic Release](https://semantic-release.gitbook.io/semantic-release)

### Prerequisites

Before setting up the project, ensure you have the following tools installed:

- If you don't have one, open an account with [Vercel](https://vercel.com)

## Quick Start by deploying to Vercel

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2FKurocado-Studio%2Fstyleguide-remix-template&project-name=remix-template&repository-name=remix-template)

## Have a JetBrains IDE?

Use the [Documentation](https://kurocado.youtrack.cloud/articles/PLA-A-7/Document) pipeline via
[GitHub Pages](https://pages.github.com) using
[Writerside Jetbrains Plugin](https://plugins.jetbrains.com/plugin/20158-writerside)

- Go to Repository Settings
  - Navigate to your GitHub repository.
  - Click on the **Settings** tab.
- **Enable GitHub Pages**
  - Scroll down to the **Pages** section in the left sidebar.
  - Under **Build and deployment**, select **GitHub Actions** as the source.
- Add the workflow to the main `ci.yaml` file, here is an example:

  ```yaml
  # rest of config

  permissions:
  contents: write
  pages: write

  jobs:
    # other jobs placeholder

    document:
      uses: kurocado-studio/dev-ops/.github/workflows/workflow.document.yml@main
      secrets: inherit

    # other jobs placeholder
  ```

- This will enable the [Documentation](https://kurocado.youtrack.cloud/articles/PLA-A-7/Document)
  pipeline

## What's next?

- Need a back-end template? See the
  [NestJS template](https://github.com/Kurocado-Studio/styleguide-nests-template)
- Keep an eye out for [Auth0 SDK](https://github.com/Kurocado-Studio/iam), for more information, see
  [the Identity and Access Management page](https://kurocado.youtrack.cloud/articles/PLA-A-15/Identity-and-Access-Management).
  It will integrate your app in five minutes or less with [Auth0 by Okta](https://auth0.com/)
