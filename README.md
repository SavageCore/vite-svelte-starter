
![GitHub Workflow Status (with event)](https://img.shields.io/github/actions/workflow/status/SavageCore/vite-svelte-ts-prettier-eslint-vitest/release.yml?style=for-the-badge) ![Codecov](https://img.shields.io/codecov/c/github/SavageCore/vite-svelte-ts-prettier-eslint-vitest?style=for-the-badge)
# Svelte + TS + Vite

This template is based on the official [Vite + Svelte template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-svelte-ts).

## Feature added

* [ESLint](https://eslint.org/)
* [Prettier](https://prettier.io/)
* [Husky](https://github.com/typicode/husky)
* [Vitest](https://vitest.dev/)
* [Pico.css](https://picocss.com/)
* [svelte-i18n](https://github.com/kaisermann/svelte-i18n)

## Recommended IDE Setup

[VS Code](https://code.visualstudio.com/) - recommendations are included.

## Getting started

```bash
npx tiged "SavageCore/vite-svelte-ts-prettier-eslint-vitest" my-app
cd my-app
npm install
npm run dev
```

## Coverage

[Codecov](https://codecov.io/) is used to track coverage. To enable coverage tracking, you need to add your `CODECOV_TOKEN` as a repository secret. Selecting `setup repo` on your [Codecov dashboard](https://app.codecov.io/) should guide you through it. See the [docs](https://docs.codecov.com/docs#step-2-get-the-repository-upload-token) for more.

## Publishing

This template is configured to publish to GitHub Pages. To publish your app push a new tag (starting with v) to the repo. This will trigger a GitHub Action that will build and publish your app to GitHub Pages.

1. On the Settings page of your repo, under Pages, select the gh-pages branch as the source for your GitHub Pages site.

2. Set the correct `base` in `vite.config.ts`.

    If you are deploying to `https://<USERNAME>.github.io/`, you can omit base as it defaults to '/'.

    If you are deploying to `https://<USERNAME>.github.io/<REPO>/`, for example your repository is at `https://github.com/<USERNAME>/<REPO>`, then set base to `'/<REPO>/'`.

See [Vite Docs](https://vitejs.dev/guide/static-deploy.html#github-pages) for more information.
