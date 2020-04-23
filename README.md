# Backstage website

Welcome to the Website and documentation for [backstage.io](https://backstage.io) -- built using [Docusaurus](https://docusaurus.io/en/).

## Running locally

To serve the web app locally, do this:

```
cd website

yarn install

yarn start
```

## Deployment

The website is served using [GitHub pages](https://pages.github.com/) i.e. the `gh-pages` branch of this repository.
When a Pull Request is merged into the `master` branch, a [GitHub action workflow](/.github/workflows/website-deploy.yml)
pushes the static build to the `gh-pages` branch. 

## License

Copyright 2020 Spotify AB.

Licensed under the Apache License, Version 2.0: http://www.apache.org/licenses/LICENSE-2.0
