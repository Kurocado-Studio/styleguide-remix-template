# Kurocado Studio Tailwind Remix Template

[![Open in CodeSandbox](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/p/sandbox/github/Kurocado-Studio/styleguide-remix-template)

This template is already configured with the
**[Kurocado Studio Engineering Styleguide](https://kurocado.youtrack.cloud/articles/STY-A-1/Project-Charter)**
& is designed to help you go from "0 to Hello World" in five minutes or less—delivering both speed
and quality without compromise.

## Key Features

- [Linting](https://kurocado.youtrack.cloud/articles/PLA-A-5/Lint) pipeline using
  - [See the config](https://kurocado.youtrack.cloud/articles/STY-A-8/Prettier) using
    [Prettier](https://prettier.io)
  - [See the config](https://kurocado.youtrack.cloud/articles/STY-A-10/ESLint) using
    [ESLint](https://eslint.org)
  - [See the config](https://kurocado.youtrack.cloud/articles/STY-A-12/CommitLint) using
    [CommitLint](https://commitlint.js.org)
- [Testing](https://kurocado.youtrack.cloud/articles/PLA-A-6/Test) pipeline using
  [Vitest](https://vitest.dev)
- [Release](https://kurocado.youtrack.cloud/articles/PLA-A-3/Release) pipeline using
  [Semantic Release](https://semantic-release.gitbook.io/semantic-release)
- [Documentation](https://kurocado.youtrack.cloud/articles/PLA-A-7/Document) pipeline using
  [Writerside Jetbrains Plugin](https://plugins.jetbrains.com/plugin/20158-writerside)
- [Deployment](https://kurocado.youtrack.cloud/articles/PLA-A-4/Deploy) pipeline using
  [Fly.io](https://fly.io/)

### Prerequisites

- If you don't have one, open an account with [Fly.io](https://fly.io/)
- The CLI of Fly.io, `flyctl.` See the [installation guide](https://fly.io/docs/flyctl/install/)

## Quick Start—"Hello World" in 5 Minutes or Less

1. **Clone the repository**

   - Clone the Repository using the
     [GitHub template](https://github.com/new?template_name=styleguide-remix-template&template_owner=Kurocado-Studio).
     Note that GitHub will clone the template using `Initial commit,` the initial build will fail on
     the [Linting](https://kurocado.youtrack.cloud/articles/PLA-A-5/Lint) pipeline due to
     `Initial commit` going against [conventional commits](https://conventionalcommits.org/)
     enforced by [CommitLint config](https://kurocado.youtrack.cloud/articles/STY-A-12/CommitLint)
   - Install dependencies. We use `pnpm,` you can install pnpm if you don't have it already
     [here](https://pnpm.io/)

2. **Enable GitHub Pages**
   - Go to Repository Settings
     - Navigate to your GitHub repository.
     - Click on the **Settings** tab.
   - **Enable GitHub Pages**
     - Scroll down to the **Pages** section in the left sidebar.
     - Under **Build and deployment**, select **GitHub Actions** as the source.
   - This will enable the [Documentation](https://kurocado.youtrack.cloud/articles/PLA-A-7/Document)
     pipeline
3. **While on the `main` branch, rename the repository**
   - Change the `styleguide-remix-template` to the application's name
     - on [package.json](./package.json)
     - on [fly.toml](./fly.toml)
4. **Commit changes**

   - Commit changes following [conventional commits](https://conventionalcommits.org/)
   - Amend the `Initial commit` message via
     [git commit --amend](https://git-scm.com/book/id/v2/Git-Tools-Rewriting-History)

5. **Launch your application**

   - Run `fly launch` from inside your project source directory to configure the new application.

6. Push your changes
   - 🎉 You're Ready to Go! You've successfully set up your TypeScript project and can now take
     advantage of all the automation and tooling that Kurocado Studio provides. If you have any
     questions or need support, feel free to check out the documentation or reach out to the
     Kurocado Studio team.

## What's next?

- Need a back-end template? See the
  [NestJS template](https://github.com/Kurocado-Studio/styleguide-nests-template)
- Keep an eye out for [Auth0 SDK](https://github.com/Kurocado-Studio/iam), for more information, see
  [Identity and Access Management page](https://kurocado.youtrack.cloud/articles/PLA-A-15/Identity-and-Access-Management),
  it will integrate your app in five minutes or less with [Auth0 by Okta](https://auth0.com/)
