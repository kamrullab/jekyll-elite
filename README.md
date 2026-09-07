# Jekyll Elite

A small, modern Jekyll theme starter for the web of 2026.

## Overview

Jekyll Elite provides a clean foundation for a content-focused site without a frontend framework. It uses Jekyll and Liquid for static generation, SCSS for styling, and a small JavaScript enhancement for color-theme switching.

## Features

- Responsive home, page, post, and 404 layouts
- Reusable header and footer includes
- Light and dark color themes with saved visitor preference
- Semantic markup, a skip link, visible focus styles, and reduced-motion support
- Markdown posts with dates and descriptions
- `baseurl`-safe internal asset and navigation links

## Quick start

Install Ruby, RubyGems, Git, and Bundler, then run:

```bash
git clone https://github.com/kamrullab/jekyll-elite.git
cd jekyll-elite
bundle install
bundle exec jekyll serve --livereload
```

Open `http://localhost:4000`.

## Configuration

Edit `_config.yml` to set the site title, description, language, canonical `url`, and optional `baseurl`. Restart the development server after changing Jekyll configuration.

Add posts to `_posts` with a filename in `YYYY-MM-DD-title.md` format:

```yaml
---
title: Post title
description: A short summary.
---
```

## Project structure

```text
_includes/    Shared header and footer
_layouts/     Home, page, post, and default templates
_posts/       Markdown blog posts
assets/       SCSS and JavaScript
_config.yml   Site and build configuration
```

## Development

```bash
# Run locally with automatic browser refresh
bundle exec jekyll serve --livereload

# Generate the static site in _site/
bundle exec jekyll build
```

Ruby and Jekyll are not bundled with the repository. The initial build has not been executed in this workspace because those tools are not installed here.

## Contributing

Contributions are welcome. Keep changes focused, run `bundle exec jekyll build`, and include documentation for any user-facing configuration or behavior you add.

Use the [GitHub repository](https://github.com/kamrullab/jekyll-elite) to report issues or propose changes.

## License

Jekyll Elite is available under the [MIT License](LICENSE).

## Status

Jekyll Elite is an early starter implementation. It is suitable for experimentation and continued theme development, but it is not yet packaged as a Ruby gem.
