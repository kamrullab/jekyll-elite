# Contributing to Jekyll Elite

Bug reports, documentation fixes, accessibility improvements, and focused feature contributions are welcome.

## Development setup

1. Fork and clone the repository.
2. Install a compatible Ruby version and Bundler.
3. Run `bundle install`.
4. Start the site with `bundle exec jekyll serve --livereload`.

Before opening a pull request, run:

```bash
bundle exec jekyll build --strict_front_matter
bundle exec jekyll doctor
bundle exec rake build
```

Keep pull requests focused. Explain the reason for the change, describe how it was validated, and update documentation when configuration or public behavior changes.
