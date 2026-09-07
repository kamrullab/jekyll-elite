---
title: Customization
description: Configure navigation, theme colors, content collections, and page layouts.
order: 3
---

## Site settings

Edit `_config.yml` for the title, description, URL, base path, author, default theme mode, and collections.

## Navigation

Primary navigation lives in `_data/navigation.yml`; footer links live in `_data/social.yml`.

## Design tokens

Colors, widths, radius, and other global tokens are at the top of `_sass/jekyll-elite.scss`. Override that stylesheet or redefine the custom properties in your own SCSS.

## Content patterns

Landing and product pages use arrays in front matter. Portfolio and creative pages read from `_projects`. Documentation navigation reads from `_docs` and uses each page's `order` value.
