---
title: Getting started
description: Install the project, run it locally, and create your first page.
order: 2
---

## Install

Clone the repository and install its Ruby dependencies:

```bash
git clone https://github.com/kamrullab/jekyll-elite.git
cd jekyll-elite
bundle install
```

## Run locally

```bash
bundle exec jekyll serve --livereload
```

The repository preview uses `baseurl: /jekyll-elite`, so open `http://localhost:4000/jekyll-elite/`.

## Create a page

Add a Markdown file with front matter:

```yaml
---
layout: page
title: My page
permalink: /my-page/
---
```
