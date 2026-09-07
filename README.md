# Jekyll Elite

A modern, accessible, multipurpose Jekyll theme for the web of 2026.

Jekyll Elite is a flexible foundation for personal and developer sites, blogs, portfolios, project showcases, documentation, landing pages, open-source projects, resumes, editorial publications, products, creative work, and technical writing. It uses semantic Liquid templates, responsive SCSS, and small vanilla JavaScript enhancements—without a frontend framework.

[View the live preview](https://kamrullab.github.io/jekyll-elite/)

## Features

- Dedicated showcase, profile, portfolio, project, docs, landing, resume, magazine, creative, blog, page, post, and 404 layouts
- Working previews for every supported site pattern
- Reusable posts, projects, and documentation collections
- Light, dark, and system color preferences with local persistence
- Configurable navigation and social links through `_data`
- Post excerpts, reading time, tags, and previous/next navigation
- SEO metadata, Atom feed, and sitemap generation
- Skip navigation, visible focus states, semantic landmarks, and reduced-motion support
- SVG favicon and `baseurl`-safe internal links
- Theme gem packaging, continuous integration, and GitHub Pages deployment

## Quick start

Install Ruby, RubyGems, Git, and Bundler, then clone the project:

```bash
git clone https://github.com/kamrullab/jekyll-elite.git
cd jekyll-elite
bundle install
bundle exec jekyll serve --livereload
```

Open `http://localhost:4000/jekyll-elite/`.

## Use as a theme

Jekyll Elite is not published to RubyGems yet. To use the current GitHub version in another Jekyll site, add it to that site's `Gemfile`:

```ruby
gem "jekyll-elite", github: "kamrullab/jekyll-elite"
```

Then configure the theme and its included plugins in `_config.yml`:

```yaml
theme: jekyll-elite

plugins:
  - jekyll-feed
  - jekyll-seo-tag
  - jekyll-sitemap
```

Run `bundle install`, then start the site with `bundle exec jekyll serve`.

## Configuration

The repository's `_config.yml` contains working defaults. Common options are:

```yaml
title: Jekyll Elite
description: A modern Jekyll theme for the web of 2026.
url: https://kamrullab.github.io
baseurl: /jekyll-elite
lang: en
timezone: Asia/Dhaka

author:
  name: KAMRUL HOSSAIN
  url: https://github.com/kamrullab

theme_mode: system # system, light, or dark
show_excerpts: true
```

Set `url` to the production origin. Use `baseurl` when the site is served below a path. The included values target this repository's GitHub Pages deployment; replace them when using the theme elsewhere.

Edit `_data/navigation.yml` to change primary navigation:

```yaml
- title: Home
  url: /
- title: Blog
  url: /blog/
```

Edit `_data/social.yml` to change footer links:

```yaml
- title: GitHub
  url: https://github.com/your-account
```

Create posts in `_posts` using the `YYYY-MM-DD-title.md` filename format. The `post` layout accepts `title`, `description`, `author`, and `tags` front matter.

## Project structure

```text
_data/        Navigation, social links, and site-pattern data
_docs/        Ordered documentation pages
_includes/    Shared head, navigation, footer, and project cards
_layouts/     Multipurpose page and content templates
_posts/       Blog, editorial, and technical writing
_projects/    Portfolio entries and project case studies
_sass/        Theme source styles
assets/       Compiled stylesheet entry point, JavaScript, and images
lib/          Theme version
```

## Development

```bash
# Start the local server with automatic refresh
bundle exec jekyll serve --livereload

# Build the preview site with strict front matter checks
bundle exec jekyll build --strict_front_matter

# Build the theme gem in pkg/
bundle exec rake build
```

The generated site is written to `_site/`. Build artifacts and Bundler-installed dependencies are ignored by Git.

## GitHub Pages

The Pages workflow builds and deploys the preview site after pushes to `main`. In the repository settings, choose **GitHub Actions** as the Pages source. The workflow derives the correct project `baseurl` from GitHub Pages, so no repository-specific path is hard-coded.

## Contributing

Read [CONTRIBUTING.md](CONTRIBUTING.md) before opening a pull request. Bug reports and feature requests can be submitted through the repository's issue templates. Report security issues privately as described in [SECURITY.md](SECURITY.md).

## License

Jekyll Elite is available under the [MIT License](LICENSE).

## Status

Jekyll Elite is in early development. Version `0.1.0` provides the initial usable theme and preview site; the gem has not yet been published to RubyGems.
