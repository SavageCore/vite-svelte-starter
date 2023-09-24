<p align="center">
  <a href="https://github.com/SavageCore/vite-svelte-starter/actions/workflows/test.yml"><img src="https://img.shields.io/github/actions/workflow/status/SavageCore/vite-svelte-starter/release.yml" alt="build status"></a>
  <a href="https://app.codecov.io/gh/SavageCore/vite-svelte-starter"><img src="https://img.shields.io/codecov/c/github/SavageCore/vite-svelte-starter" alt="Coverage"></a>
</p>

<h1 align="center">Svelte + Pico.css + TypeScript + Vite</h1>
<h2 align="center">svelte-i18n + Prettier + ESLint + Vitest + Husky</h2>

This template is based on the official [Vite + Svelte template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-svelte-ts).

## Packages added to the template

* [ESLint](https://eslint.org/)
* [Prettier](https://prettier.io/)
* [Husky](https://github.com/typicode/husky)
* [Vitest](https://vitest.dev/)
* [Pico.css](https://picocss.com/)
* [svelte-i18n](https://github.com/kaisermann/svelte-i18n)
* [svelte-preprocess](https://github.com/sveltejs/svelte-preprocess)
* [prettier-plugin-css-order](https://github.com/Siilwyn/prettier-plugin-css-order)
* [sass](https://sass-lang.com/)
* [vite-plugin-pwa](https://vite-pwa-org.netlify.app/)

## Recommended IDE Setup

[VS Code](https://code.visualstudio.com/) - recommendations are included.

## Getting started

```bash
npx tiged "SavageCore/vite-svelte-starter" my-app
cd my-app
npm install
npm run dev # local access
npm run dev:remote # lan access
```
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
