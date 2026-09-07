---
title: Deployment
description: Build the site locally or deploy it through the included GitHub Pages workflow.
order: 4
---

## Production build

```bash
JEKYLL_ENV=production bundle exec jekyll build
```

The generated site is written to `_site/`.

## GitHub Pages

The included workflow installs the bundled dependencies, derives the repository base path, builds the site, uploads the Pages artifact, and deploys it after pushes to `main`.

Set `url` and `baseurl` in `_config.yml` for the final host. This repository uses `https://kamrullab.github.io` and `/jekyll-elite`.
